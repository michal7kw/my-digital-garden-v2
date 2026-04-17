---
created: '2026-04-17T18:59:21.370129Z'
description: Visual graph exploration, search, BodyMap anatomy view, entity detail
  pages, and PathFinder
dg-home: false
dg-publish: true
permalink: /entities/users_guide/exploring-the-knowledge-graph/
slug: exploring-the-knowledge-graph
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Exploring the Knowledge Graph
type: users_guide
updated: '2026-04-17T18:59:21.370129Z'
---

{% raw %}
<h1>Exploring the Knowledge Graph</h1>
<p>Once your entities are synced, the knowledge graph becomes a powerful visual tool for discovering connections, understanding mechanisms, and navigating your health knowledge. You can explore it from both the web dashboard and Obsidian.</p>
<h2>The Knowledge Graph Page</h2>
<p>Open the <strong>Knowledge Graph</strong> page from the web dashboard sidebar. It has two main tabs:</p>
<h3>Graph Explore Tab</h3>
<p>This is an interactive force-directed graph visualization. Entities appear as colored nodes, and relationships appear as lines connecting them.</p>
<p><strong>Navigation:</strong></p>
<ul>
<li><strong>Pan</strong> — Click and drag the background</li>
<li><strong>Zoom</strong> — Scroll wheel or pinch</li>
<li><strong>Select a node</strong> — Click on it to see its details</li>
<li><strong>Expand a node</strong> — Double-click to load its connections</li>
<li><strong>Move nodes</strong> — Drag individual nodes to rearrange the layout</li>
</ul>
<p><strong>Node colors:</strong> Each entity type has a distinct color — supplements are one color, conditions another, biomarkers a third, and so on. A legend shows which color maps to which type.</p>
<p><strong>Filter by type:</strong> At the top of the graph, you'll see filter chips (colored pills) for each entity type. Click a chip to hide/show that type. This is useful when the graph is dense — hide entity types you're not interested in to focus on what matters.</p>
<p><strong>Visualization presets:</strong> Choose how supplement nodes are colored:</p>
<ul>
<li><strong>By category</strong> — Group by supplement category (mineral, vitamin, herb, amino acid)</li>
<li><strong>By target system</strong> — Color by which body system they primarily affect</li>
<li><strong>By mechanism</strong> — Color by mechanism of action</li>
<li><strong>By evidence level</strong> — Color by strength of scientific evidence (darker = stronger)</li>
</ul>
<p><strong>Depth control:</strong> Adjust how many relationship &quot;hops&quot; to show. Depth 1 shows direct connections; depth 2 shows connections of connections. Higher depth reveals more of the graph but can get crowded.</p>
<h3>Graph Search Tab</h3>
<p>A text-based search across all entities in the knowledge graph.</p>
<ul>
<li>Type a search term (e.g., &quot;magnesium&quot; or &quot;blood pressure&quot;)</li>
<li>Filter results by entity type using the dropdown</li>
<li>Each result shows the entity name, type, and description</li>
<li>Click <strong>&quot;View in Graph&quot;</strong> to center the graph visualization on that entity</li>
<li>Click <strong>&quot;View Detail&quot;</strong> to open the full entity detail page</li>
</ul>
<h2>Entity Detail Pages</h2>
<p>Click any entity name (in the graph, search results, or elsewhere in the dashboard) to open its detail page. These pages show everything the system knows about that entity.</p>
<h3>Overview Tab</h3>
<ul>
<li>Name, type, and description</li>
<li>Key properties (dosage, evidence level, mechanism, etc.)</li>
<li>Connected entities sidebar (quick links to related entities)</li>
<li>Mini graph preview showing immediate connections</li>
</ul>
<h3>Relationships Tab</h3>
<ul>
<li>All relationships grouped by type</li>
<li>Each group shows the connected entities with their types</li>
<li>Click any related entity to navigate to its detail page</li>
</ul>
<h3>Graph Tab</h3>
<ul>
<li>A focused graph visualization centered on this entity</li>
<li>Shows the entity plus all its direct connections (up to 100 neighbors)</li>
<li>Same pan/zoom/click controls as the main graph</li>
</ul>
<h3>Special Features for Supplements and Drugs</h3>
<p>Entity detail pages for supplements and drugs may include:</p>
<ul>
<li><strong>Molecular structure viewer</strong> — 2D and 3D molecular visualization (data from PubChem)</li>
<li><strong>Purchase links</strong> — Where to buy the supplement (if configured)</li>
<li><strong>Interaction warnings</strong> — Known drug-supplement interactions</li>
<li><strong>Supplement management</strong> — Add to your personal supplement stack, set dosage, pause, or discontinue</li>
</ul>
<h2>The BodyMap</h2>
<p>The <strong>BodyMap</strong> page provides an anatomy-based view of your knowledge graph.</p>
<p><strong>How it works:</strong></p>
<ul>
<li>A body diagram shows major organs</li>
<li>Organs light up based on which supplements, conditions, or biomarkers affect them</li>
<li>Click an organ to see all related entities (e.g., click the liver to see supplements that affect it, conditions that target it, and biomarkers measured there)</li>
<li>Supplement pills appear as colored dots with connection lines to their target organs</li>
</ul>
<p><strong>Use it to answer questions like:</strong></p>
<ul>
<li>&quot;What supplements affect my liver?&quot;</li>
<li>&quot;Which biomarkers relate to my thyroid?&quot;</li>
<li>&quot;What conditions are associated with the cardiovascular system?&quot;</li>
</ul>
<h2>The Brain Explorer</h2>
<p>The <strong>Brain Explorer</strong> page is a specialized view for cognitive and neurological health.</p>
<ul>
<li>Explore brain regions and their associated pathways</li>
<li>See neurotransmitter connections</li>
<li>Track brain-related biomarkers</li>
<li>Find supplements that support cognitive function</li>
</ul>
<h2>Entity Browse</h2>
<p>The <strong>Browse</strong> page lets you filter and sort all entities in your knowledge graph:</p>
<ul>
<li>Filter by entity type (supplement, condition, biomarker, etc.)</li>
<li>Search by name</li>
<li>Sort by various properties</li>
<li>Quick access to entity detail pages</li>
</ul>
<h2>PathFinder</h2>
<p>Find the shortest path between any two entities in your graph. For example:</p>
<ul>
<li>&quot;How is Magnesium connected to Sleep Quality?&quot;</li>
<li>&quot;What links Metformin to Vitamin B12?&quot;</li>
</ul>
<p>The PathFinder shows the chain of relationships connecting two entities, revealing indirect connections you might not have noticed.</p>
<h2>Exploring from Obsidian</h2>
<p>You don't have to leave Obsidian to explore your knowledge graph:</p>
<h3>Obsidian Graph View</h3>
<p>Obsidian has a built-in graph view (Ctrl/Cmd + G) that shows your notes and their links. The MKG plugin enhances this with custom CSS that colors nodes by entity type:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Generate Graph Coloring Styles&quot;</strong></li>
<li>This creates a CSS snippet that colors your graph nodes by entity type</li>
<li>Enable the snippet in <strong>Settings &gt; Appearance &gt; CSS Snippets</strong></li>
</ol>
<p>Now your Obsidian graph view shows supplements, conditions, biomarkers, and other types in distinct colors — matching the web dashboard's color scheme.</p>
<h3>Neo4j Bloom</h3>
<p>For advanced graph exploration, you can launch Neo4j Bloom directly from Obsidian:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Launch Neo4j Bloom&quot;</strong></li>
<li>Bloom opens in your browser with full graph querying capabilities</li>
</ol>
<p>Bloom provides more powerful graph exploration than the web dashboard — including custom Cypher queries, perspective-based views, and advanced filtering. It's best for users comfortable with graph database concepts.</p>
<h2>Tips for Effective Exploration</h2>
<ul>
<li><strong>Start with a known entity</strong> — Search for something specific, then expand outward to discover connections</li>
<li><strong>Use type filters</strong> — In a large graph, hiding irrelevant types makes patterns visible</li>
<li><strong>Follow the shortest path</strong> — Use PathFinder to understand indirect connections</li>
<li><strong>Compare entity detail pages</strong> — Open multiple entity pages in separate tabs to compare</li>
<li><strong>Export what you find</strong> — Take notes in Obsidian about interesting patterns you discover in the graph</li>
</ul>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a> — Track health measurements alongside your knowledge graph</li>
<li><a href="/entities/users_guide/supplements-and-health-stacks/" class="internal-link">Supplements and Health Stacks</a> — Manage supplements informed by graph insights</li>
<li><a href="/entities/users_guide/ai-research-tools/" class="internal-link">AI Research Tools</a> — Use AI to discover new connections and research topics</li>
</ul>

{% endraw %}