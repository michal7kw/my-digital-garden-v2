---
created: '2026-04-17T18:59:21.417229Z'
description: Publishing your curated health knowledge as a public digital garden website
dg-home: false
dg-publish: true
permalink: /entities/users_guide/digital-garden/
slug: digital-garden
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Digital Garden
type: users_guide
updated: '2026-04-17T18:59:21.417229Z'
---

{% raw %}
<h1>Digital Garden</h1>
<p>A digital garden is a public website generated from your curated entity notes. It lets you share your health knowledge with others — think of it as a personal wiki that anyone can browse.</p>
<h2>How Publishing Works</h2>
<p>The publishing pipeline:</p>
<ol>
<li>You tag entity notes with <code>dg-publish: true</code> in their frontmatter</li>
<li>The MKG plugin collects all tagged notes</li>
<li>Notes are sent to the backend, which commits them to a Git repository</li>
<li>The garden website rebuilds and deploys with your updated content</li>
<li>Your garden is live at a public URL</li>
</ol>
<p>Publishing is a Pro-tier feature.</p>
<h2>Tagging Notes for Publishing</h2>
<h3>Tag Individual Notes</h3>
<ol>
<li>Open an entity note in Obsidian</li>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Garden: Tag current note for publishing&quot;</strong></li>
<li>The plugin adds <code>dg-publish: true</code> to the note's frontmatter</li>
</ol>
<p>Or manually add it:</p>
<pre><code class="language-yaml">---
name: Magnesium
type: Supplement
dg-publish: true    # Add this line
---
</code></pre>
<h3>Tag All Notes</h3>
<p>To bulk-tag every entity note:</p>
<ol>
<li>Command: <strong>&quot;Garden: Tag all notes for publishing&quot;</strong></li>
<li>All files in your <code>entities/</code> folder get <code>dg-publish: true</code> added</li>
<li>Review the count of tagged notes in the status bar</li>
</ol>
<h3>Check Publishing Status</h3>
<p>Command: <strong>&quot;Garden: Check publishing status&quot;</strong> shows:</p>
<ul>
<li>How many notes are tagged for publishing</li>
<li>How many are published vs. pending</li>
<li>Last publish timestamp</li>
</ul>
<h2>Publishing</h2>
<h3>Publish a Single Note</h3>
<ol>
<li>Open the note you want to publish</li>
<li>Command: <strong>&quot;Garden: Publish current note&quot;</strong></li>
<li>The note is sent to the garden backend</li>
</ol>
<h3>Publish All Tagged Notes</h3>
<ol>
<li>Command: <strong>&quot;Garden: Publish all dg-publish notes&quot;</strong></li>
<li>All notes with <code>dg-publish: true</code> are published in a batch</li>
<li>This may take a few moments for large vaults</li>
</ol>
<h3>Unpublish a Note</h3>
<ol>
<li>Open the published note</li>
<li>Command: <strong>&quot;Garden: Unpublish current note&quot;</strong></li>
<li>The note is removed from the public garden</li>
</ol>
<h2>What Gets Published</h2>
<p><strong>Published:</strong></p>
<ul>
<li>Entity notes with <code>dg-publish: true</code></li>
<li>Frontmatter properties (name, type, description, evidence level, etc.)</li>
<li>Markdown content (overview, mechanisms, research, etc.)</li>
<li>Relationships (shown as links between garden pages)</li>
<li>External database links (PubChem, DrugBank, PubMed DOIs become clickable)</li>
</ul>
<p><strong>Automatically excluded:</strong></p>
<ul>
<li>Notes with <code>isPersonal: true</code> — Your private health data is never published</li>
<li>System metadata (<code>element_id</code>, <code>content_hash</code>, <code>last_sync_hash</code>)</li>
<li>Files not in <code>entities/</code> folders</li>
</ul>
<p><strong>Important:</strong> Always review notes before publishing. Even without <code>isPersonal: true</code>, avoid publishing notes that contain personal health information you don't want public.</p>
<h2>Your Garden Website</h2>
<p>Once published, your garden is a browsable website with:</p>
<ul>
<li><strong>Entity pages</strong> — Each published entity has its own page with overview, properties, and relationships</li>
<li><strong>Entity type icons</strong> — Visual indicators for different entity types</li>
<li><strong>Navigation</strong> — Browse by entity type, search, follow relationship links</li>
<li><strong>External links</strong> — Database IDs (PubChem, DrugBank, KEGG, PubMed DOI) become clickable links to external databases</li>
<li><strong>Mobile-friendly</strong> — Responsive design that works on phones and tablets</li>
</ul>
<h3>Your Garden URL</h3>
<p>To get your garden's web address:</p>
<ol>
<li>Command: <strong>&quot;Garden: Get garden URL&quot;</strong></li>
<li>Copy the URL and share it</li>
</ol>
<h3>Garden Directory</h3>
<p>Other users' public gardens are browsable at the gardens directory page on the web dashboard. You can browse community health knowledge and discover new entities.</p>
<h2>Setting Up Your Garden Profile</h2>
<p>From the web dashboard's <strong>Garden</strong> page:</p>
<ol>
<li><strong>Choose a username</strong> — This becomes part of your garden URL</li>
<li><strong>Write a bio</strong> — A short description of who you are and what your garden covers</li>
<li><strong>Select a target folder</strong> — Usually <code>entities/</code> (configured in plugin settings)</li>
</ol>
<h2>Privacy Considerations</h2>
<ul>
<li><strong>Never publish personal biomarker readings</strong> — These are tracked in the dashboard, not entity files, so they're safe</li>
<li><strong>Mark private notes</strong> — Use <code>isPersonal: true</code> for any note containing personal health data</li>
<li><strong>Review before bulk publishing</strong> — When using &quot;Tag all notes,&quot; review what you're about to publish</li>
<li><strong>You can unpublish anytime</strong> — Removing a note from the garden takes it offline</li>
</ul>
<h2>Digital Garden in Obsidian Status Bar</h2>
<p>If you enable <strong>&quot;Show status bar&quot;</strong> in garden settings, the Obsidian status bar shows a count of notes pending publication. Click it for quick access to garden commands.</p>
<h2>Quick-Access Ribbon Icon</h2>
<p>The upload cloud icon in the Obsidian ribbon (left sidebar) provides a context menu for garden actions:</p>
<ul>
<li>Publish current note</li>
<li>Publish all tagged notes</li>
<li>Check status</li>
<li>Get garden URL</li>
</ul>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Create high-quality entities worth publishing</li>
<li><a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a> — Quality standards for public-facing content</li>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Rich relationships make your garden more valuable</li>
</ul>

{% endraw %}