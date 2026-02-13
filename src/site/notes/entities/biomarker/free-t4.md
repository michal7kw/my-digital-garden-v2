---
created: '2026-02-13T19:00:14.247527Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/free-t4/
slug: free-t4
tags:
- biomarker
templateEngineOverride: njk
title: Free T4
type: biomarker
updated: '2026-02-13T19:00:14.247527Z'
---

{% raw %}
<h1>Free T4</h1>
<h2>Overview</h2>
<p>No description available.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/free-t4/" class="internal-link">Free_T4</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-25T20:32:12.713341'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/free-t4/" class="internal-link">Free_T4</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/thyroid/" class="internal-link">Thyroid</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: high
function_indicated: Thyroid Hormone Production
source: curated
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Influences</h3>
<p>No known influences documented.</p>
<h3>Correlations</h3>
<p>No correlations documented.</p>
<h3>Other Relationships</h3>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/free-t4/" class="internal-link">Free_T4</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/free-t4/" class="internal-link">Free_T4</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Free T4]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}