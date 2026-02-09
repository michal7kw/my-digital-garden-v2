---
created: '2026-02-09T05:40:20.649113Z'
description: Hemoglobin A1c (HbA1c) reflects average blood glucose over 2-3 months.
  Used to diagnose and monitor diabetes control.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/hba1c/
slug: hba1c
tags:
- biomarker
templateEngineOverride: njk
title: Hba1C
type: biomarker
updated: '2026-02-09T05:40:20.649113Z'
---

{% raw %}
<h1>Hba1C</h1>
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
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:51.440198'
source: obsidian
</code></pre>
<ul>
<li>← [[hemoglobin_a1c_hba1c]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:14.650057'
source: obsidian
</code></pre>
<ul>
<li>← [[hba1c]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:13.914575'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
</code></pre>
<ul>
<li>→ [[hemoglobin_a1c_hba1c]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.549313'
source: obsidian
</code></pre>
<ul>
<li>→ [[hemoglobin_a1c_hba1c]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
</code></pre>
<ul>
<li>→ [[hba1c]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hba1C]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Pancreas]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: medium
function_indicated: Long-term Glucose Control
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
<li>→ [[Hba1C]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.852736'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[Berberine]] - Decreases HbA1c (moderate effect, evidence level 4)</li>
<li>[[Magnesium]] - Decreases HbA1c in type 2 diabetics (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[hba1c]] - HbA1c measurement</li>
<li>[[hemoglobin a1c hba1c]] - Hemoglobin A1c test</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Hba1C]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}