---
created: '2026-04-17T18:59:21.454097Z'
description: Common issues with connections, sync, plugin, and the web dashboard —
  plus FAQ
dg-home: false
dg-publish: true
permalink: /entities/users_guide/troubleshooting/
slug: troubleshooting
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Troubleshooting
type: users_guide
updated: '2026-04-17T18:59:21.454097Z'
---

{% raw %}
<h1>Troubleshooting</h1>
<p>This guide covers common issues, their solutions, and frequently asked questions about the MKG platform.</p>
<h2>Connection Issues</h2>
<h3>Plugin Can't Connect to the Backend</h3>
<p><strong>Symptoms:</strong> Status bar shows ○ (red), commands fail with &quot;Backend not available.&quot;</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Check the API Base URL</strong> in plugin settings — make sure it matches your backend address</li>
<li><strong>Windows users:</strong> Try <code>http://127.0.0.1:8000</code> instead of <code>http://localhost:8000</code> (Windows networking resolves localhost differently)</li>
<li><strong>Verify the backend is running</strong> — ask your administrator or check the server status</li>
<li><strong>Check your firewall</strong> — Make sure port 8000 (or your configured port) is not blocked</li>
<li><strong>Test in a browser</strong> — Open <code>http://your-server:8000/health</code> in your browser. If it returns JSON, the backend is running</li>
</ol>
<h3>Login Fails</h3>
<p><strong>Symptoms:</strong> Login modal shows an error, or hangs indefinitely.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Double-check credentials</strong> — Email is case-sensitive</li>
<li><strong>Try registering first</strong> — If you haven't created an account, register through the web dashboard</li>
<li><strong>Check the server</strong> — The backend may be restarting or down</li>
<li><strong>Clear stored credentials</strong> — In plugin settings, log out and log in again</li>
<li><strong>Check timeout</strong> — Slow networks may cause timeouts; try again</li>
</ol>
<h3>Connection Drops Intermittently</h3>
<p><strong>Symptoms:</strong> Status bar flickers between green and red.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>The plugin polls the backend every 30 seconds with exponential backoff (30s → 60s → 120s max)</li>
<li>Temporary network issues resolve automatically</li>
<li>If persistent, check your network stability</li>
<li>Check if the backend is restarting due to memory limits</li>
</ul>
<h2>Sync Issues</h2>
<h3>Notes Not Appearing in Neo4j</h3>
<p><strong>Symptoms:</strong> You've created entity notes but they don't show up in the web dashboard's knowledge graph.</p>
<p><strong>Check these in order:</strong></p>
<ol>
<li><strong>Is the file in the right folder?</strong> — Must be in <code>entities/{type}/</code> (e.g., <code>entities/supplement/Zinc.md</code>)</li>
<li><strong>Does it have valid frontmatter?</strong> — Must have at least <code>name</code> and <code>type</code> fields between <code>---</code> markers</li>
<li><strong>Is the <code>type</code> field correct?</strong> — Must use exact PascalCase (e.g., <code>Supplement</code> not <code>supplement</code>)</li>
<li><strong>Does <code>name</code> match the filename?</strong> — <code>name: Zinc</code> must match <code>Zinc.md</code></li>
<li><strong>Is auto-sync enabled?</strong> — Check plugin settings; if disabled, trigger a manual sync</li>
<li><strong>Is the file in <code>_review/pending/</code>?</strong> — Files there aren't synced until approved</li>
</ol>
<h3>Relationships Not Syncing</h3>
<p><strong>Symptoms:</strong> Entity appears in Neo4j but relationships are missing.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Check the section</strong> — Relationships must be in <code>## Relationships</code> (or other recognized sections like <code>## Health Connections</code>)</li>
<li><strong>Check the syntax</strong> — Use <code>RELATIONSHIP_TYPE::[[Target Entity Name]]</code></li>
<li><strong>Check the target name</strong> — The name in <code>[[brackets]]</code> must exactly match an existing entity's filename</li>
<li><strong>Run validation</strong> — Command: &quot;Validate relationship format in current file&quot;</li>
<li><strong>Run auto-fix</strong> — Command: &quot;Fix relationships to canonical format in current file&quot;</li>
</ol>
<h3>Sync Is Slow</h3>
<p><strong>Symptoms:</strong> Syncing takes a long time, especially with many entities.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Sync in batches rather than all at once</li>
<li>Use selective sync for specific entities instead of the full vault</li>
<li>Make sure the backend and Neo4j database are on the same machine (network latency matters)</li>
</ul>
<h3>Frontmatter Corrupted After Sync</h3>
<p><strong>Symptoms:</strong> YAML frontmatter has unexpected changes, formatting broken.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Check for YAML syntax errors (missing colons, wrong indentation, unquoted special characters)</li>
<li>If a field value contains a colon, wrap it in quotes: <code>description: &quot;Warning: may cause drowsiness&quot;</code></li>
<li>Don't use tabs in YAML — use spaces only</li>
<li>The sync engine adds system fields (<code>element_id</code>, <code>last_sync</code>, etc.) — this is normal</li>
</ul>
<h2>Plugin Issues</h2>
<h3>Plugin Won't Load</h3>
<p><strong>Symptoms:</strong> No brain icon in the sidebar, MKG commands not in the command palette.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Check Restricted Mode</strong> — Go to Settings &gt; Community Plugins, make sure restricted mode is OFF</li>
<li><strong>Enable the plugin</strong> — Find &quot;Medical Knowledge Graph Companion&quot; in the installed plugins list and toggle it ON</li>
<li><strong>Restart Obsidian</strong> — Close and reopen Obsidian</li>
<li><strong>Check the developer console</strong> — Press Ctrl+Shift+I (or Cmd+Opt+I on Mac), look for error messages in the Console tab</li>
<li><strong>Reinstall the plugin</strong> — Delete the plugin folder from <code>.obsidian/plugins/</code> and reinstall from the vault template</li>
</ol>
<h3>AI Features Not Working</h3>
<p><strong>Symptoms:</strong> AI commands return errors or no results.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Check LLM is enabled</strong> — Settings &gt; MKG Plugin &gt; &quot;Enable LLM Features&quot; must be ON</li>
<li><strong>Verify API key</strong> — Make sure your OpenAI/Anthropic API key is entered correctly and has credits</li>
<li><strong>Check provider selection</strong> — Make sure you've selected a provider that matches your API key</li>
<li><strong>For Ollama</strong> — Verify Ollama is running (<code>http://localhost:11434</code> should respond) and you've selected a downloaded model</li>
<li><strong>Check subscription tier</strong> — Some AI features require Pro or Premium</li>
</ol>
<h3>Entity Creation Wizard Fails</h3>
<p><strong>Symptoms:</strong> Wizard shows an error or creates an incomplete file.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Make sure you've selected a valid entity type</li>
<li>Check that the name doesn't contain characters that are invalid in filenames (e.g., <code>/</code>, <code>\</code>, <code>?</code>, <code>*</code>)</li>
<li>Verify the target folder exists (<code>entities/{type}/</code>)</li>
<li>Check that an entity with the same name doesn't already exist</li>
</ul>
<h2>Web Dashboard Issues</h2>
<h3>Pages Won't Load</h3>
<p><strong>Symptoms:</strong> Dashboard shows a blank page, loading spinner that never stops, or error message.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li><strong>Check the backend</strong> — The dashboard needs the backend API to be running</li>
<li><strong>Clear browser cache</strong> — Hard refresh with Ctrl+Shift+R</li>
<li><strong>Check the browser console</strong> — Press F12, look for errors in the Console tab</li>
<li><strong>Try a different browser</strong> — Rule out browser-specific issues</li>
<li><strong>Check your login</strong> — You may need to log in again (session expired)</li>
</ol>
<h3>Knowledge Graph Is Empty</h3>
<p><strong>Symptoms:</strong> The graph page shows no nodes.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Have you synced your vault? See <a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a></li>
<li>If you just set up, load the curated KG first: open the sync manager and click &quot;Load Curated KG to Neo4j&quot;</li>
<li>Check that Neo4j databases are running (ask your administrator)</li>
</ul>
<h3>Charts or Visualizations Not Rendering</h3>
<p><strong>Symptoms:</strong> Biomarker charts, graph visualization, or other visual elements are missing.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Clear browser cache</li>
<li>Disable browser extensions that might interfere (ad blockers, privacy extensions)</li>
<li>Make sure you have data to display (e.g., biomarker readings for charts)</li>
<li>Try a different browser</li>
</ul>
<h2>Data Issues</h2>
<h3>Duplicate Entities</h3>
<p><strong>Symptoms:</strong> The same entity appears multiple times in the graph.</p>
<p><strong>Causes:</strong></p>
<ul>
<li>Files with slightly different names (<code>Magnesium.md</code> and <code>magnesium.md</code>)</li>
<li>Entity synced from both a file and an external source</li>
</ul>
<p><strong>Solutions:</strong></p>
<ul>
<li>Standardize naming: always use Title Case</li>
<li>Delete the duplicate file and re-sync</li>
<li>Use the web dashboard to check for duplicates before creating new entities</li>
</ul>
<h3>Missing Data After Sync</h3>
<p><strong>Symptoms:</strong> Some properties that were in your frontmatter don't appear in the web dashboard.</p>
<p><strong>Causes:</strong></p>
<ul>
<li>Field name doesn't match what the system expects</li>
<li>YAML syntax error in the field value</li>
<li>Field is a system-managed field being overwritten</li>
</ul>
<p><strong>Solutions:</strong></p>
<ul>
<li>Check YAML syntax carefully</li>
<li>Compare your field names with the examples in <a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a></li>
<li>System fields (<code>element_id</code>, <code>content_hash</code>, etc.) are overwritten by the sync engine — don't rely on manual values for these</li>
</ul>
<h2>Frequently Asked Questions</h2>
<h3>General</h3>
<p><strong>Do I need coding knowledge to use MKG?</strong><br />
No. The Obsidian plugin provides visual tools (wizards, modals, panels) for most operations. You do need to be comfortable editing markdown files and YAML frontmatter.</p>
<p><strong>Is my health data private?</strong><br />
Yes. MKG is self-hosted — your data stays on your server. AI features that use external LLM providers (OpenAI, Anthropic) send note content to those providers for processing. Use Ollama for fully local AI.</p>
<p><strong>Can I use MKG without Neo4j?</strong><br />
You can create and edit entity notes in Obsidian without Neo4j, but the web dashboard, graph visualization, search, recommendations, and AI features all require Neo4j to be running.</p>
<p><strong>Does MKG replace my doctor?</strong><br />
No. MKG is an educational and organizational tool. It helps you understand health data and biomedical relationships, but it does not provide medical advice. Always consult healthcare professionals for medical decisions.</p>
<h3>Technical</h3>
<p><strong>Can I use MKG on multiple devices?</strong><br />
Yes. The Obsidian vault can be synced across devices using Git or Obsidian Sync. The web dashboard is accessible from any browser. Neo4j data is centralized on your server.</p>
<p><strong>What happens if my server goes down?</strong><br />
Your Obsidian vault is a local copy — you can still read and edit notes offline. Dashboard features and sync won't work until the server is back. Regular backups are recommended.</p>
<p><strong>Can I use a cloud-hosted Neo4j instead of local?</strong><br />
Yes, you can configure the backend to connect to any Neo4j instance (local, AuraDB, or self-hosted cloud). Update the connection settings in the backend configuration.</p>
<p><strong>How much disk space does MKG need?</strong><br />
The vault template is approximately 50-100 MB. Neo4j databases can range from a few hundred MB (curated only) to several GB (with PrimeKG and DrugBank loaded).</p>
<h3>Features</h3>
<p><strong>Can I create custom entity types?</strong><br />
Currently, MKG supports 26 predefined entity types. Custom types aren't supported because the sync engine, templates, and web dashboard need to understand each type's schema.</p>
<p><strong>Can I import data from other health apps?</strong><br />
You can import CSV and JSON data through the web dashboard's import page or the plugin's bulk import feature. Manual formatting to match MKG's schema may be needed.</p>
<p><strong>How accurate is the AI?</strong><br />
AI accuracy depends on your LLM provider and the quality of your knowledge graph. AI features are tools to assist research, not replace it. Always verify AI-generated content against primary sources.</p>
<p><strong>Can multiple users share a knowledge graph?</strong><br />
Yes. Multiple users can connect to the same Neo4j database and share the curated knowledge. Personal data (biomarker readings, supplement logs) is user-specific and not shared.</p>
<h2>Getting Help</h2>
<p>If you're stuck:</p>
<ol>
<li><strong>Check this guide</strong> — Search for your issue in <a href="/entities/users_guide/troubleshooting/" class="internal-link">Troubleshooting</a> (you're here)</li>
<li><strong>Check the developer console</strong> — Ctrl+Shift+I in Obsidian or the browser for error messages</li>
<li><strong>Check backend logs</strong> — Ask your administrator to check the server logs for error details</li>
<li><strong>Report a bug</strong> — Include:
<ul>
<li>Obsidian version</li>
<li>MKG plugin version</li>
<li>Steps to reproduce the issue</li>
<li>Error messages (from developer console or backend logs)</li>
<li>Screenshots if relevant</li>
</ul>
</li>
</ol>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/getting-started/" class="internal-link">Getting Started</a> — Revisit setup if you're having configuration issues</li>
<li><a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a> — Detailed sync troubleshooting</li>
<li><a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a> — Prevent common issues by following best practices</li>
</ul>

{% endraw %}