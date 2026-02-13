---
created: '2026-02-13T17:51:32.006251Z'
description: A slow-growing blood cancer in which the bone marrow makes too many red
  blood cells, causing the blood to thicken and increasing the risk of clots.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/polycythemia-vera/
slug: polycythemia-vera
tags:
- condition
- hematology
- oncology
- function-health
templateEngineOverride: njk
title: Polycythemia Vera
type: condition
updated: '2026-02-13T17:51:32.006251Z'
---

{% raw %}
<h1>Polycythemia Vera</h1>
<h2>Overview</h2>
<p>A slow-growing blood cancer in which the bone marrow makes too many red blood cells, causing the blood to thicken and increasing the risk of clots.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<p>Not specified.</p>
<h2>Diagnostic Information</h2>
<h2>Risk Factors</h2>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Polycythemia Vera]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hematocrit/" class="internal-link">hematocrit</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">hemoglobin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/polycythemia-vera/" class="internal-link">Polycythemia_Vera</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hematocrit/" class="internal-link">hematocrit</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">hemoglobin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Polycythemia Vera]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Polycythemia Vera]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/polycythemia-vera/" class="internal-link">Polycythemia_Vera</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:59.211199'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">hemoglobin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.024958'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hematocrit/" class="internal-link">hematocrit</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.812807'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/polycythemia-vera/" class="internal-link">Polycythemia_Vera</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hematocrit/" class="internal-link">hematocrit</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">hemoglobin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">hemoglobin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hematocrit/" class="internal-link">hematocrit</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}