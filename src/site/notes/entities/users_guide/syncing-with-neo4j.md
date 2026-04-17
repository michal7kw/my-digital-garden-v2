---
created: '2026-04-17T18:59:21.363169Z'
description: Bidirectional synchronization between Obsidian notes and the Neo4j knowledge
  graph database
dg-home: false
dg-publish: true
permalink: /entities/users_guide/syncing-with-neo4j/
slug: syncing-with-neo4j
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Syncing with Neo4j
type: users_guide
updated: '2026-04-17T18:59:21.363169Z'
---

{% raw %}
<h1>Syncing with Neo4j</h1>
<p>Sync is what connects your Obsidian notes to the Neo4j knowledge graph database. When you sync, your entity files become searchable graph nodes with typed relationships — enabling the web dashboard's visualizations, search, recommendations, and AI features.</p>
<h2>How Sync Works</h2>
<p>The sync process:</p>
<ol>
<li><strong>Parses</strong> your entity file — reads YAML frontmatter and relationship sections</li>
<li><strong>Validates</strong> the data — checks that required fields exist and types are correct</li>
<li><strong>Creates or updates</strong> a Neo4j node with all the properties from your frontmatter</li>
<li><strong>Creates edges</strong> for each relationship found in the note body</li>
<li><strong>Updates metadata</strong> in your frontmatter — sets <code>last_sync</code>, <code>element_id</code>, and <code>content_hash</code></li>
</ol>
<p>Sync is <strong>bidirectional</strong> — changes can flow from Obsidian to Neo4j and from Neo4j back to Obsidian.</p>
<h2>Sync Directions</h2>
<table>
<thead>
<tr>
<th>Direction</th>
<th>When to Use</th>
<th>What Happens</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Obsidian → Neo4j</strong></td>
<td>After creating/editing notes</td>
<td>Your notes update the database</td>
</tr>
<tr>
<td><strong>Neo4j → Obsidian</strong></td>
<td>After external enrichment</td>
<td>Database changes update your notes</td>
</tr>
<tr>
<td><strong>Both (bidirectional)</strong></td>
<td>Initial sync, periodic full sync</td>
<td>Everything reconciled both ways</td>
</tr>
</tbody>
</table>
<h2>Triggering Sync</h2>
<h3>Automatic Sync</h3>
<p>When enabled in plugin settings:</p>
<ul>
<li><strong>Auto-sync on Create</strong> — When you save a new entity file, it syncs to Neo4j within seconds</li>
<li><strong>Auto-sync on Modify</strong> — When you edit an entity file, the plugin waits 2 seconds (to let you finish editing) and then syncs</li>
</ul>
<p>Enable these in <strong>Settings &gt; Community Plugins &gt; MKG &gt; Sync Configuration</strong>.</p>
<h3>Manual Sync</h3>
<p>Open the command palette (Ctrl/Cmd + P) and search for:</p>
<ul>
<li><strong>&quot;Open Cloud Backup Manager&quot;</strong> — Opens the sync manager panel with full controls</li>
<li><strong>&quot;Sync to Neo4j&quot;</strong> — Quick one-click sync of all entities</li>
</ul>
<p>From the sync manager, you can:</p>
<ul>
<li>Sync all entities at once</li>
<li>Choose sync direction (to Neo4j, from Neo4j, or both)</li>
<li>View sync status and last sync time</li>
<li>Load the curated KG to Neo4j (useful for first-time setup)</li>
</ul>
<h2>What Gets Synced</h2>
<p><strong>Synced to Neo4j:</strong></p>
<ul>
<li>Entity files in <code>entities/</code> subfolders with valid frontmatter</li>
<li>All frontmatter properties (name, type, description, tags, evidence_level, etc.)</li>
<li>Relationships from recognized sections (<code>## Relationships</code>, <code>## Health Connections</code>, etc.)</li>
</ul>
<p><strong>Not synced:</strong></p>
<ul>
<li>Files outside <code>entities/</code> (this guide, daily notes, personal notes)</li>
<li>Files in <code>_review/pending/</code> (not until approved)</li>
<li>Files without required frontmatter (<code>name</code> and <code>type</code>)</li>
<li>System-managed data (supplement logs, biomarker readings, user targets — these live in the web dashboard)</li>
</ul>
<h2>Sync Metadata</h2>
<p>After a successful sync, the plugin adds or updates these fields in your frontmatter:</p>
<pre><code class="language-yaml">element_id: &quot;4:abc123:456&quot;    # Neo4j internal node ID
last_sync: 2026-04-14T12:30:00+0000   # When last synced
content_hash: &quot;a1b2c3d4...&quot;   # Hash for change detection
last_sync_hash: &quot;a1b2c3d4...&quot; # Hash at last sync
</code></pre>
<p><strong>Never edit these fields manually.</strong> The sync engine uses them to detect changes and avoid unnecessary updates.</p>
<h2>Change Detection</h2>
<p>The sync engine uses content hashing to determine what has changed:</p>
<ol>
<li>It computes a hash of your file's content</li>
<li>It compares this hash to <code>last_sync_hash</code></li>
<li>If they differ, the file has changed since the last sync and needs updating</li>
<li>After sync, both hashes are updated to match</li>
</ol>
<p>This means re-syncing an unchanged file is fast — the engine skips it.</p>
<h2>Conflict Resolution</h2>
<p>If both your Obsidian note and the Neo4j node have been modified since the last sync, there's a conflict. The sync engine resolves this based on timestamps — the most recent change wins.</p>
<p><strong>To avoid conflicts:</strong></p>
<ul>
<li>Pick one primary editing location (Obsidian or web dashboard) for each entity</li>
<li>Sync frequently so changes don't accumulate</li>
<li>Check the <code>last_sync</code> timestamp if something seems off</li>
</ul>
<h2>Selective Sync (Subgraph Sync)</h2>
<p>You can sync a specific entity and its neighbors instead of everything:</p>
<ul>
<li><strong>k-distance</strong> — How many &quot;hops&quot; of relationships to include (1 = direct neighbors, 2 = neighbors of neighbors)</li>
<li><strong>Max nodes</strong> and <strong>max relationships</strong> — Caps to prevent syncing the entire database</li>
</ul>
<p>This is useful when you want to pull in related knowledge for a specific entity without syncing thousands of nodes.</p>
<h2>First-Time Setup: Loading the Curated KG</h2>
<p>If you downloaded the vault template, it comes with pre-curated entities. To load them into Neo4j:</p>
<ol>
<li>Open the sync manager</li>
<li>Click <strong>&quot;Load Curated KG to Neo4j&quot;</strong></li>
<li>This parses all entity files and creates nodes and relationships</li>
<li>Depending on the number of entities (1,000+), this may take a few minutes</li>
</ol>
<p>After loading, your web dashboard will show the full knowledge graph with all pre-curated entities and their connections.</p>
<h2>Monitoring Sync Status</h2>
<p><strong>In Obsidian:</strong></p>
<ul>
<li>The status bar shows the connection state (green/gray/red)</li>
<li>Check <code>last_sync</code> in any entity's frontmatter to see when it last synced</li>
</ul>
<p><strong>In the web dashboard:</strong></p>
<ul>
<li>The Knowledge Graph page shows entity counts</li>
<li>Entity detail pages show sync timestamps</li>
</ul>
<h2>Common Sync Issues</h2>
<table>
<thead>
<tr>
<th>Problem</th>
<th>Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Notes not appearing in Neo4j</td>
<td>Check frontmatter has <code>name</code> and <code>type</code> fields</td>
</tr>
<tr>
<td>Relationships not syncing</td>
<td>Verify they're in a <code>## Relationships</code> section</td>
</tr>
<tr>
<td>Sync is slow</td>
<td>Reduce batch size, use selective sync for specific entities</td>
</tr>
<tr>
<td>&quot;Entity already exists&quot; error</td>
<td>The entity may exist with a slightly different name — check for duplicates</td>
</tr>
<tr>
<td>Frontmatter corrupted</td>
<td>The YAML may have a syntax error — check for missing colons, wrong indentation</td>
</tr>
<tr>
<td>Connection timeout</td>
<td>Verify the backend is running and API URL is correct</td>
</tr>
</tbody>
</table>
<p>For more detailed troubleshooting, see <a href="/entities/users_guide/troubleshooting/" class="internal-link">Troubleshooting</a>.</p>
<h2>Sync Best Practices</h2>
<ul>
<li><strong>Sync after meaningful edits</strong>, not after every keystroke (auto-sync handles this with its 2-second delay)</li>
<li><strong>Back up before bulk operations</strong> — If you're about to sync hundreds of new entities, back up your database first</li>
<li><strong>Keep entity names stable</strong> — Renaming a file creates a new entity rather than updating the old one</li>
<li><strong>Check sync results</strong> — After a large sync, browse the web dashboard to verify entities and relationships look correct</li>
</ul>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> — See your synced entities in the web dashboard</li>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Create more entities to sync</li>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Add relationships before syncing</li>
</ul>

{% endraw %}