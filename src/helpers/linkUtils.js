const wikiLinkRegex = /\[\[(.*?\|.*?)\]\]/g;
const internalLinkRegex = /href="\/(.*?)"/g;

function caselessCompare(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

/**
 * Clean a raw link match into a normalized note reference.
 */
function cleanLink(raw) {
  return raw
    .split('|')[0]
    .replace(/.(md|markdown)\s?$/i, '')
    .replace('\\', '')
    .trim()
    .split('#')[0];
}

/**
 * Extract wikilink targets from Excalidraw "## Element Links" sections.
 * Format: "elementId: [[Note Name]]" — these create diagram-to-note backlinks.
 */
function extractElementLinks(content) {
  const links = [];
  const sectionMatch = content.match(/## Element Links\n([\s\S]*?)(?=\n##|\n%%|$)/);
  if (!sectionMatch) return links;

  const section = sectionMatch[1];
  const regex = /^\s*[^:]+:\s*\[\[([^\]|]+?)(?:\|[^\]]+?)?\]\]\s*$/gm;
  let match;
  while ((match = regex.exec(section)) !== null) {
    links.push(cleanLink(match[1]));
  }
  return links;
}

function extractLinks(content) {
  return [
    ...(content.match(wikiLinkRegex) || []).map((link) => cleanLink(link.slice(2, -2))),
    ...(content.match(internalLinkRegex) || []).map((link) => cleanLink(link.slice(6, -1))),
    ...extractElementLinks(content),
  ];
}

function getGraph(data) {
  let nodes = {};
  let links = [];
  let stemURLs = {};
  let homeAlias = '/';
  (data.collections.note || []).forEach((v, idx) => {
    let fpath = v.filePathStem.replace('/notes/', '');
    let parts = fpath.split('/');
    let group = 'none';
    if (parts.length >= 3) {
      group = parts[parts.length - 2];
    }
    const isDiagram = !!(
      v.data.type === 'diagram' ||
      v.data['dg-entity-type'] === 'diagram' ||
      (v.inputPath || '').includes('.excalidraw')
    );
    nodes[v.url] = {
      id: idx,
      title: v.data.title || v.fileSlug,
      url: v.url,
      group,
      entityType: v.data['dg-entity-type'] || v.data.type || group || 'default',
      home: v.data['dg-home'] || (v.data.tags && v.data.tags.indexOf('gardenEntry') > -1) || false,
      outBound: extractLinks(v.template.frontMatter.content),
      neighbors: new Set(),
      backLinks: new Set(),
      noteIcon: v.data.noteIcon || process.env.NOTE_ICON_DEFAULT,
      hide: v.data.hideInGraph || false,
      isDiagram,
    };
    stemURLs[fpath] = v.url;
    if (v.data['dg-home'] || (v.data.tags && v.data.tags.indexOf('gardenEntry') > -1)) {
      homeAlias = v.url;
    }
  });
  Object.values(nodes).forEach((node) => {
    let outBound = new Set();
    node.outBound.forEach((olink) => {
      let link = (stemURLs[olink] || olink).split('#')[0];
      outBound.add(link);
    });
    node.outBound = Array.from(outBound);
    node.outBound.forEach((link) => {
      let n = nodes[link];
      if (n) {
        n.neighbors.add(node.url);
        n.backLinks.add(node.url);
        node.neighbors.add(n.url);
        links.push({ source: node.id, target: n.id });
      }
    });
  });
  Object.keys(nodes).map((k) => {
    nodes[k].neighbors = Array.from(nodes[k].neighbors);
    nodes[k].backLinks = Array.from(nodes[k].backLinks);
    nodes[k].size = nodes[k].neighbors.length;
  });
  return {
    homeAlias,
    nodes,
    links,
  };
}

exports.wikiLinkRegex = wikiLinkRegex;
exports.internalLinkRegex = internalLinkRegex;
exports.extractLinks = extractLinks;
exports.extractElementLinks = extractElementLinks;
exports.getGraph = getGraph;
