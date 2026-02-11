/**
 * Excalidraw interactivity for Digital Garden
 *
 * Provides zoom, pan, and click handling for embedded Excalidraw drawings.
 * Based on zsviczian's publish.js pattern.
 */
(function () {
  'use strict';

  const ZOOM_STEP = 0.15;
  const MAX_ZOOM = 4;
  const MIN_ZOOM = 0.3;
  const LONG_PRESS_DURATION = 500; // ms for fullscreen trigger

  /**
   * Initialize interactivity for all Excalidraw containers.
   */
  function initExcalidraw() {
    document.querySelectorAll('.excalidraw-svg').forEach(initContainer);
  }

  /**
   * Initialize a single Excalidraw container.
   */
  function initContainer(container) {
    const svg = container.querySelector('svg');
    if (!svg) return;

    // State
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let isPanning = false;
    let startX = 0;
    let startY = 0;
    let longPressTimer = null;

    // Store original viewBox for reset
    const originalViewBox = svg.getAttribute('viewBox');

    // Enable pointer events on links
    enableLinks(svg);

    // Set up container styles
    container.style.overflow = 'hidden';
    container.style.cursor = 'grab';
    svg.style.transformOrigin = 'center center';
    svg.style.transition = 'transform 0.1s ease-out';

    // Zoom on Shift+scroll
    container.addEventListener(
      'wheel',
      (e) => {
        if (!e.shiftKey) return;
        e.preventDefault();
        e.stopPropagation();

        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
        const newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale + delta));

        // Zoom towards mouse position
        if (newScale !== scale) {
          const scaleDiff = newScale / scale;
          translateX = mouseX - (mouseX - translateX) * scaleDiff;
          translateY = mouseY - (mouseY - translateY) * scaleDiff;
          scale = newScale;
          updateTransform();
        }
      },
      { passive: false }
    );

    // Pan on drag (but not on links)
    container.addEventListener('mousedown', (e) => {
      // Don't pan if clicking a link
      if (e.target.closest('a')) return;

      isPanning = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      container.style.cursor = 'grabbing';
      svg.style.transition = 'none';

      // Long press for fullscreen
      longPressTimer = setTimeout(() => {
        if (isPanning) {
          toggleFullscreen(container);
          isPanning = false;
        }
      }, LONG_PRESS_DURATION);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isPanning) return;

      // Cancel long press if moving
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }

      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    });

    document.addEventListener('mouseup', () => {
      if (isPanning) {
        isPanning = false;
        container.style.cursor = 'grab';
        svg.style.transition = 'transform 0.1s ease-out';
      }
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    });

    // Touch support for mobile
    let touchStartDistance = 0;
    let touchStartScale = 1;

    container.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length === 2) {
          // Pinch zoom
          touchStartDistance = getTouchDistance(e.touches);
          touchStartScale = scale;
        } else if (e.touches.length === 1) {
          // Pan
          if (!e.target.closest('a')) {
            isPanning = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
            svg.style.transition = 'none';
          }
        }
      },
      { passive: true }
    );

    container.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches.length === 2) {
          // Pinch zoom
          const currentDistance = getTouchDistance(e.touches);
          const newScale = Math.min(
            MAX_ZOOM,
            Math.max(MIN_ZOOM, touchStartScale * (currentDistance / touchStartDistance))
          );
          scale = newScale;
          updateTransform();
        } else if (isPanning && e.touches.length === 1) {
          // Pan
          translateX = e.touches[0].clientX - startX;
          translateY = e.touches[0].clientY - startY;
          updateTransform();
        }
      },
      { passive: true }
    );

    container.addEventListener('touchend', () => {
      isPanning = false;
      svg.style.transition = 'transform 0.1s ease-out';
    });

    // Reset on Escape or double-click
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && container.classList.contains('enlarged')) {
        toggleFullscreen(container);
      } else if (e.key === 'Escape') {
        resetTransform();
      }
    });

    container.addEventListener('dblclick', (e) => {
      if (!e.target.closest('a')) {
        resetTransform();
      }
    });

    function updateTransform() {
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function resetTransform() {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    }

    // Add zoom controls
    addZoomControls(container, {
      onZoomIn: () => {
        scale = Math.min(MAX_ZOOM, scale + ZOOM_STEP);
        updateTransform();
      },
      onZoomOut: () => {
        scale = Math.max(MIN_ZOOM, scale - ZOOM_STEP);
        updateTransform();
      },
      onReset: resetTransform,
      onFullscreen: () => toggleFullscreen(container),
    });
  }

  /**
   * Enable all links within an SVG.
   * Adds transparent hit areas for better click detection.
   */
  function enableLinks(svg) {
    svg.querySelectorAll('a').forEach((link) => {
      link.style.pointerEvents = 'all';
      link.style.cursor = 'pointer';

      // Add transparent fill to paths within links for better hit detection
      // Excalidraw exports paths with fill="none" which only responds to clicks on the stroke
      const paths = link.querySelectorAll('path');
      paths.forEach((path) => {
        // Create a duplicate path with transparent fill for hit detection
        const hitArea = path.cloneNode(true);
        hitArea.setAttribute('fill', 'transparent');
        hitArea.setAttribute('stroke', 'transparent');
        hitArea.setAttribute('stroke-width', '20'); // Wide stroke for easier clicking
        hitArea.style.pointerEvents = 'all';
        path.parentNode.insertBefore(hitArea, path);
      });

      // Also try to add a hit rect based on the group's bounding box
      const g = link.querySelector('g');
      if (g) {
        try {
          const bbox = g.getBBox();
          const hitRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          hitRect.setAttribute('x', bbox.x - 5);
          hitRect.setAttribute('y', bbox.y - 5);
          hitRect.setAttribute('width', bbox.width + 10);
          hitRect.setAttribute('height', bbox.height + 10);
          hitRect.setAttribute('fill', 'transparent');
          hitRect.style.pointerEvents = 'all';
          g.insertBefore(hitRect, g.firstChild);
        } catch (e) {
          // getBBox may fail if SVG is not rendered yet
        }
      }

      // Handle click events
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('//')) {
          // Internal link - use client-side navigation
          e.preventDefault();
          e.stopPropagation();
          window.location.href = href;
        }
        // External links open normally
      });
    });
  }

  /**
   * Get distance between two touch points.
   */
  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Toggle fullscreen mode for a container.
   */
  function toggleFullscreen(container) {
    container.classList.toggle('enlarged');

    if (container.classList.contains('enlarged')) {
      // Create overlay backdrop
      const backdrop = document.createElement('div');
      backdrop.className = 'excalidraw-backdrop';
      backdrop.addEventListener('click', () => toggleFullscreen(container));
      document.body.appendChild(backdrop);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Remove backdrop
      const backdrop = document.querySelector('.excalidraw-backdrop');
      if (backdrop) backdrop.remove();

      // Restore body scroll
      document.body.style.overflow = '';
    }
  }

  /**
   * Add zoom control buttons to container.
   */
  function addZoomControls(container, handlers) {
    // Check if controls already exist
    if (container.querySelector('.excalidraw-controls')) return;

    const controls = document.createElement('div');
    controls.className = 'excalidraw-controls';
    controls.innerHTML = `
      <button class="excalidraw-control" data-action="zoom-in" title="Zoom In (Shift+Scroll)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </button>
      <button class="excalidraw-control" data-action="zoom-out" title="Zoom Out">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </button>
      <button class="excalidraw-control" data-action="reset" title="Reset View (Esc/Double-click)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
      </button>
      <button class="excalidraw-control" data-action="fullscreen" title="Fullscreen (Long-press)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>
    `;

    controls.addEventListener('click', (e) => {
      const button = e.target.closest('[data-action]');
      if (!button) return;

      const action = button.dataset.action;
      if (action === 'zoom-in') handlers.onZoomIn();
      else if (action === 'zoom-out') handlers.onZoomOut();
      else if (action === 'reset') handlers.onReset();
      else if (action === 'fullscreen') handlers.onFullscreen();
    });

    container.appendChild(controls);
  }

  /**
   * Load SVG content for img tags marked for processing.
   */
  function loadExcalidrawImages() {
    document.querySelectorAll('img[data-excalidraw-svg="true"]').forEach(async (img) => {
      try {
        const response = await fetch(img.src);
        if (response.ok) {
          const svgContent = await response.text();
          const container = document.createElement('div');
          container.className = 'excalidraw-svg';
          container.innerHTML = svgContent;

          // Copy dimensions from img
          if (img.width) container.style.width = `${img.width}px`;
          if (img.height) container.style.height = `${img.height}px`;

          img.replaceWith(container);
          initContainer(container);
        }
      } catch (e) {
        console.warn('Failed to load Excalidraw SVG:', e);
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initExcalidraw();
      loadExcalidrawImages();
    });
  } else {
    initExcalidraw();
    loadExcalidrawImages();
  }

  // Re-initialize after navigation (for SPA-like behavior)
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      initExcalidraw();
      loadExcalidrawImages();
    }, 100);
  });

  // Expose for manual initialization
  window.initExcalidraw = initExcalidraw;
})();
