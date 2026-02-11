/**
 * Excalidraw SVG Link Transformation Utilities
 *
 * Handles parsing of Element Links from .excalidraw.md files and transforming
 * obsidian:// URLs to garden URLs for published drawings.
 */

const slugify = require('@sindresorhus/slugify');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Parse Element Links section from .excalidraw.md content.
 * Excalidraw stores element links in a special section of the markdown.
 *
 * @param {string} content - The content of the .excalidraw.md file
 * @returns {Object<string, string>} Map of element ID to link target
 */
function parseElementLinks(content) {
  const links = {};

  // Excalidraw stores element links in format:
  // [[element-id]]^blockref: [[Target Note]] or https://url
  // Or in Element Links section
  const elementLinksMatch = content.match(/## Element Links\n([\s\S]*?)(?=\n##|\n%%|$)/);

  if (elementLinksMatch) {
    const lines = elementLinksMatch[1].trim().split('\n');
    for (const line of lines) {
      // Match "elementId: [[Note Name]]" or "elementId: https://..."
      const match = line.match(/^([^:]+):\s*(\[\[.*?\]\]|https?:\/\/\S+)$/);
      if (match) {
        links[match[1].trim()] = match[2];
      }
    }
  }

  // Also parse embedded links in the Excalidraw JSON data
  // Look for link properties in element definitions
  const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
  if (jsonMatch) {
    try {
      const data = JSON.parse(jsonMatch[1]);
      if (data.elements) {
        for (const element of data.elements) {
          if (element.link) {
            links[element.id] = element.link;
          }
        }
      }
    } catch (e) {
      // JSON parsing failed, continue with regex-based links
    }
  }

  return links;
}

/**
 * Create URL-friendly slug from string.
 *
 * @param {string} str - String to slugify
 * @returns {string} URL-safe slug
 */
function createSlug(str) {
  if (!str) return '';
  return slugify(str, { lowercase: true, strict: true });
}

/**
 * Resolve wiki-link to garden URL.
 *
 * @param {string} wikiLink - Wiki link like [[Note Name]] or [[Note Name|Alias]]
 * @param {Array} notesCollection - Collection of notes from Eleventy
 * @param {string} defaultUsername - Default username for garden URLs
 * @returns {string} Resolved garden URL or '/404' for dead links
 */
function resolveWikiLinkToGardenUrl(wikiLink, notesCollection, defaultUsername) {
  // Extract note name from [[Note Name]] or [[Note Name|Alias]]
  const cleanLink = wikiLink.replace(/^\[\[|\]\]$/g, '');
  const noteName = cleanLink.split('|')[0].split('#')[0].trim();

  if (!noteName) return '/404';

  const noteNameLower = noteName.toLowerCase();
  const noteNameSlug = createSlug(noteName);

  // Find matching note in collection
  for (const note of notesCollection || []) {
    const noteTitle = (note.data?.title || '').toLowerCase();
    const noteFileSlug = (note.fileSlug || '').toLowerCase();
    const noteSlug = (note.data?.slug || '').toLowerCase();

    if (
      noteTitle === noteNameLower ||
      noteFileSlug === noteNameSlug ||
      noteSlug === noteNameSlug ||
      noteFileSlug === noteNameLower
    ) {
      const username = note.data?.gardenUsername || defaultUsername;
      const entityType = note.data?.entityType || note.data?.type || 'note';
      const slug = note.data?.slug || createSlug(note.data?.title) || note.fileSlug || 'untitled';
      return `/garden/${username}/${entityType}/${slug}/`;
    }
  }

  // Try to find by file path
  const startPath = './src/site/notes/';
  const possiblePaths = [
    `${startPath}${noteName}.md`,
    `${startPath}${noteName.replace(/ /g, '-')}.md`,
    `${startPath}${noteNameSlug}.md`,
  ];

  for (const possiblePath of possiblePaths) {
    try {
      if (fs.existsSync(possiblePath)) {
        const file = fs.readFileSync(possiblePath, 'utf8');
        const frontMatter = matter(file);
        if (frontMatter.data.permalink) {
          return frontMatter.data.permalink;
        }
      }
    } catch (e) {
      // File not found, continue
    }
  }

  return '/404'; // Dead link fallback
}

/**
 * Transform obsidian:// URLs in SVG content to garden URLs.
 *
 * @param {string} svgContent - Raw SVG content
 * @param {Object<string, string>} elementLinks - Map of element ID to link target
 * @param {Array} notesCollection - Collection of notes from Eleventy
 * @param {string} username - Username for garden URLs
 * @returns {string} Transformed SVG content
 */
function transformSvgContent(svgContent, elementLinks, notesCollection, username) {
  let transformed = svgContent;

  // Replace obsidian:// URLs with garden URLs
  transformed = transformed.replace(
    /href="obsidian:\/\/open\?[^"]*file=([^"&]+)[^"]*"/g,
    (match, encodedFile) => {
      const noteName = decodeURIComponent(encodedFile).replace(/\.md$/, '');
      const gardenUrl = resolveWikiLinkToGardenUrl(`[[${noteName}]]`, notesCollection, username);
      return `href="${gardenUrl}" class="excalidraw-link" data-internal-link`;
    }
  );

  // Replace wiki-style links that might appear in SVG
  transformed = transformed.replace(/href="\[\[([^\]]+)\]\]"/g, (match, noteName) => {
    const gardenUrl = resolveWikiLinkToGardenUrl(`[[${noteName}]]`, notesCollection, username);
    return `href="${gardenUrl}" class="excalidraw-link" data-internal-link`;
  });

  // Add click handling attributes to links
  transformed = transformed.replace(/<a\s+(?!.*target=)/g, '<a target="_self" ');

  // Ensure SVG links are clickable
  transformed = transformed.replace(/<a\s/g, '<a style="pointer-events: all; cursor: pointer;" ');

  return transformed;
}

/**
 * Check if a file is an Excalidraw drawing.
 *
 * @param {string} filePath - Path to the file
 * @returns {boolean} True if file is an Excalidraw drawing
 */
function isExcalidrawFile(filePath) {
  return filePath.endsWith('.excalidraw.md') || filePath.endsWith('.excalidraw');
}

/**
 * Get the corresponding SVG path for an Excalidraw file.
 *
 * @param {string} excalidrawPath - Path to the .excalidraw.md file
 * @returns {string} Path to the corresponding .svg file
 */
function getExcalidrawSvgPath(excalidrawPath) {
  // Excalidraw plugin exports SVG with same name
  // drawing.excalidraw.md -> drawing.svg
  // or drawing.excalidraw.md -> drawing.excalidraw.svg
  const basePath = excalidrawPath.replace(/\.excalidraw\.md$/, '');

  const possiblePaths = [`${basePath}.svg`, `${basePath}.excalidraw.svg`];

  for (const svgPath of possiblePaths) {
    if (fs.existsSync(svgPath)) {
      return svgPath;
    }
  }

  return `${basePath}.svg`; // Default
}

/**
 * Process Excalidraw transclusion syntax.
 * Handles ![[drawing.excalidraw]] embeds.
 *
 * @param {string} content - Markdown content
 * @param {string} basePath - Base path for resolving files
 * @param {Array} notesCollection - Collection of notes
 * @param {string} username - Username for garden URLs
 * @returns {string} Content with processed embeds
 */
function processExcalidrawTransclusions(content, basePath, notesCollection, username) {
  // Match Excalidraw transclusion: ![[drawing.excalidraw]] or ![[drawing.excalidraw|width]]
  const transclusionRegex = /!\[\[([^\]]+\.excalidraw(?:\.md)?)\s*(?:\|([^\]]*))?\]\]/g;

  return content.replace(transclusionRegex, (match, drawingName, options) => {
    const drawingPath = path.join(basePath, drawingName);
    const svgPath = getExcalidrawSvgPath(drawingPath);

    try {
      // Read the Excalidraw markdown for links
      let elementLinks = {};
      const excalidrawMdPath = drawingPath.endsWith('.excalidraw.md')
        ? drawingPath
        : `${drawingPath}.md`;

      if (fs.existsSync(excalidrawMdPath)) {
        const excalidrawContent = fs.readFileSync(excalidrawMdPath, 'utf8');
        elementLinks = parseElementLinks(excalidrawContent);
      }

      // Read the SVG file
      if (fs.existsSync(svgPath)) {
        let svgContent = fs.readFileSync(svgPath, 'utf8');
        svgContent = transformSvgContent(svgContent, elementLinks, notesCollection, username);

        // Parse width option
        const widthMatch = options?.match(/(\d+)/);
        const width = widthMatch ? `width="${widthMatch[1]}px"` : '';

        return `<div class="excalidraw-svg" ${width}>${svgContent}</div>`;
      }

      // SVG not found, return placeholder
      return `<div class="excalidraw-missing">Drawing "${drawingName}" not found. Enable auto-export in Excalidraw settings.</div>`;
    } catch (e) {
      console.error(`Error processing Excalidraw transclusion: ${e.message}`);
      return `<div class="excalidraw-error">Error loading drawing: ${e.message}</div>`;
    }
  });
}

/**
 * Extract diagram metadata from Excalidraw file frontmatter.
 *
 * @param {string} content - Excalidraw file content
 * @returns {Object} Extracted metadata
 */
function extractDiagramMetadata(content) {
  const frontMatter = matter(content);
  return {
    title: frontMatter.data.title || null,
    description: frontMatter.data.description || null,
    tags: frontMatter.data.tags || [],
    created: frontMatter.data.created || null,
    updated: frontMatter.data.updated || null,
    dgPublish: frontMatter.data['dg-publish'] === true,
    entityType: frontMatter.data.type || frontMatter.data['dg-entity-type'] || 'diagram',
  };
}

module.exports = {
  parseElementLinks,
  resolveWikiLinkToGardenUrl,
  transformSvgContent,
  isExcalidrawFile,
  getExcalidrawSvgPath,
  processExcalidrawTransclusions,
  extractDiagramMetadata,
  createSlug,
};
