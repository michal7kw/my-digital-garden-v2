---
created: '2026-02-13T19:00:14.116999Z'
description: The most abundant protein in the blood, produced by the liver. Maintains
  fluid balance and transports nutrients, hormones, and drugs through the bloodstream.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/albumin/
slug: albumin
tags:
- biomarker
templateEngineOverride: njk
title: Albumin
type: biomarker
updated: '2026-02-13T19:00:14.116999Z'
---

{% raw %}
<h1>Albumin</h1>
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
<li>← <a href="/garden/dev_admin/labtest/liver-function-panel/" class="internal-link">liver_function_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:19.480389'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:11.031900'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:07.123823'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/liver-function-panel/" class="internal-link">liver_function_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/edema/" class="internal-link">Edema</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/liver-function-panel/" class="internal-link">liver_function_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/edema/" class="internal-link">Edema</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:17.447357'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">Albumin</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: high
function_indicated: Protein Synthesis
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
<li>→ <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">Albumin</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:08.882759'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> - Direct albumin measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive metabolic panel</a> - Part of standard CMP</li>
<li><a href="/garden/dev_admin/labtest/liver-function-panel/" class="internal-link">liver function panel</a> - Part of liver function assessment</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Albumin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}