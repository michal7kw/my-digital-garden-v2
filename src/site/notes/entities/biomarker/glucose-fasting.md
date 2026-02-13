---
created: '2026-02-13T14:57:55.885930Z'
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
updated: '2026-02-13T14:57:55.885930Z'
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
<li>→ <a href="/garden/dev_admin/labtest/fasting-glucose/" class="internal-link">fasting_glucose</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/basic-metabolic-panel/" class="internal-link">basic_metabolic_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/basic-metabolic-panel/" class="internal-link">basic_metabolic_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fasting-glucose/" class="internal-link">fasting_glucose</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/glucose-fasting/" class="internal-link">Glucose_Fasting</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/glucose-fasting/" class="internal-link">Glucose_Fasting</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/pancreas/" class="internal-link">Pancreas</a> (organ)</li>
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
<li>→ <a href="/garden/dev_admin/biomarker/glucose-fasting/" class="internal-link">Glucose_Fasting</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/glucose-fasting/" class="internal-link">Glucose_Fasting</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> - Decreases fasting glucose (moderate effect, evidence level 4)</li>
<li><a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> - Modulates fasting glucose in deficient individuals</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/fasting-glucose/" class="internal-link">fasting glucose</a> - Fasting glucose measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive metabolic panel</a> - Part of CMP</li>
<li><a href="/garden/dev_admin/labtest/basic-metabolic-panel/" class="internal-link">basic metabolic panel</a> - Part of BMP</li>
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