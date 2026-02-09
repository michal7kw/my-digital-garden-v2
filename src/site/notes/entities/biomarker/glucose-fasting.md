---
created: '2026-02-09T05:40:20.644389Z'
description: Blood glucose level after 8+ hours of fasting. Used to diagnose diabetes
  and assess metabolic health.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glucose-fasting/
slug: glucose-fasting
tags:
- biomarker
templateEngineOverride: njk
title: Glucose Fasting
type: biomarker
updated: '2026-02-09T05:40:20.644389Z'
---

{% raw %}
<h1>Glucose Fasting</h1>
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
<li>→ [[fasting_glucose]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ [[basic_metabolic_panel]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ [[comprehensive_metabolic_panel]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ [[comprehensive_metabolic_panel]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[basic_metabolic_panel]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[fasting_glucose]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[Glucose_Fasting]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ [[Glucose_Fasting]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Pancreas]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: medium
function_indicated: Glucose Regulation
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
<li>→ [[Glucose_Fasting]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
</code></pre>
<ul>
<li>→ [[Glucose_Fasting]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[Berberine]] - Decreases fasting glucose (moderate effect, evidence level 4)</li>
<li>[[Magnesium]] - Modulates fasting glucose in deficient individuals</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[fasting glucose]] - Fasting glucose measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li>[[comprehensive metabolic panel]] - Part of CMP</li>
<li>[[basic metabolic panel]] - Part of BMP</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Glucose Fasting]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}