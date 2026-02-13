---
created: '2026-02-13T17:51:31.522091Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/total-cholesterol/
slug: total-cholesterol
tags:
- biomarker
templateEngineOverride: njk
title: Total Cholesterol
type: biomarker
updated: '2026-02-13T17:51:31.522091Z'
---

{% raw %}
<h1>Total Cholesterol</h1>
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
<li>→ <a href="/garden/dev_admin/labtest/lipid-panel-standard/" class="internal-link">lipid_panel_standard</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:23.644632'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/advanced-lipid-panel/" class="internal-link">advanced_lipid_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:23.644632'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lipid-panel-standard/" class="internal-link">lipid_panel_standard</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">Total_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/advanced-lipid-panel/" class="internal-link">advanced_lipid_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">Total_Cholesterol</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
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
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">Total_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:27.491036'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">Total_Cholesterol</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:27.491036'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/lipid-panel-standard/" class="internal-link">lipid panel standard</a> - Standard lipid panel (primary measurement)</li>
<li><a href="/garden/dev_admin/labtest/advanced-lipid-panel/" class="internal-link">advanced lipid panel</a> - Advanced lipid panel with additional markers</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Total Cholesterol]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}