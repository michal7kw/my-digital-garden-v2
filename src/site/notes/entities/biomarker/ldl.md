---
created: '2026-02-09T05:40:20.669089Z'
description: Low-density lipoprotein (LDL) cholesterol carries cholesterol to tissues.
  High levels increase cardiovascular disease risk.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/ldl/
slug: ldl
tags:
- biomarker
templateEngineOverride: njk
title: Ldl
type: biomarker
updated: '2026-02-09T05:40:20.669089Z'
---

{% raw %}
<h1>Ldl</h1>
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
<li>← [[Omega-3_Fatty_Acids]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:53.153209'
source: obsidian
</code></pre>
<ul>
<li>← [[lipid_panel_standard]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:19.242090'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:17.088376'
source: obsidian
</code></pre>
<ul>
<li>← [[advanced_lipid_panel]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:06.527789'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
</code></pre>
<ul>
<li>→ [[Omega-3_Fatty_Acids]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
</code></pre>
<ul>
<li>→ [[advanced_lipid_panel]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
</code></pre>
<ul>
<li>→ [[lipid_panel_standard]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
</code></pre>
<ul>
<li>→ [[lipid_panel_standard]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<ul>
<li>→ [[advanced_lipid_panel]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_cholesterol]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<ul>
<li>→ [[Omega-3_Fatty_Acids]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<ul>
<li>→ [[Ldl]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Heart]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: medium
function_indicated: Atherogenic Lipid Transport
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
<li>→ [[Ldl]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:22.037424'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[Berberine]] - Decreases LDL cholesterol (moderate effect, evidence level 4)</li>
<li>[[Omega-3 Fatty Acids]] - Decreases LDL cholesterol (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[ldl cholesterol]] - Direct LDL measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li>[[lipid panel standard]] - Standard lipid panel</li>
<li>[[advanced lipid panel]] - Advanced lipid panel with LDL particle analysis</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Ldl]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}