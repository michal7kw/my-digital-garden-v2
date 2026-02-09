---
created: '2026-02-09T05:40:20.580732Z'
description: A group of protein biomarkers used for the early detection and monitoring
  of acute kidney injury (AKI), reflecting tubular damage or functional decline.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/acute-kidney-injury-markers/
slug: acute-kidney-injury-markers
tags:
- biomarker
- nephrology
- protein
- acute_kidney_injury
templateEngineOverride: njk
title: Acute Kidney Injury Markers
type: biomarker
updated: '2026-02-09T05:40:20.580732Z'
---

{% raw %}
<h1>Acute Kidney Injury Markers</h1>
<h2>Overview</h2>
<p>A group of protein biomarkers used for the early detection and monitoring of acute kidney injury (AKI), reflecting tubular damage or functional decline.</p>
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
<li>→ [[Acute_Kidney_Injury_Markers]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.559323'
source: obsidian
</code></pre>
<ul>
<li>→ [[Acute_Kidney_Injury_Markers]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.559323'
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
<li>→ [[Acute_Kidney_Injury_Markers]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:08.680193'
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
FROM [[Acute Kidney Injury Markers]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}