---
created: '2026-02-13T19:04:38.300301Z'
description: A condition in which the immune system mistakenly attacks and damages
  the body's own healthy cells, tissues, and organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/autoimmune-disease/
slug: autoimmune-disease
tags:
- condition
- immunology
- inflammation
- autoimmune
- function-health
templateEngineOverride: njk
title: Autoimmune Disease
type: condition
updated: '2026-02-13T19:04:38.300301Z'
---

{% raw %}
<h1>Autoimmune Disease</h1>
<h2>Overview</h2>
<p>A condition in which the immune system mistakenly attacks and damages the body's own healthy cells, tissues, and organs.</p>
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
FROM [[Autoimmune Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/basophils/" class="internal-link">basophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/eosinophils/" class="internal-link">eosinophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lymphocytes/" class="internal-link">lymphocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/monocytes/" class="internal-link">monocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">white_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/basophils/" class="internal-link">basophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/eosinophils/" class="internal-link">eosinophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lymphocytes/" class="internal-link">lymphocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/monocytes/" class="internal-link">monocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">white_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Autoimmune Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Autoimmune Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">white_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.704457'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/monocytes/" class="internal-link">monocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.436126'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lymphocytes/" class="internal-link">lymphocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.658204'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.105921'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/eosinophils/" class="internal-link">eosinophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:52.578220'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/basophils/" class="internal-link">basophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.601190'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-disease/" class="internal-link">Autoimmune_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/monocytes/" class="internal-link">monocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lymphocytes/" class="internal-link">lymphocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/basophils/" class="internal-link">basophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/eosinophils/" class="internal-link">eosinophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">white_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">white_blood_cell_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/monocytes/" class="internal-link">monocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lymphocytes/" class="internal-link">lymphocytes</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/eosinophils/" class="internal-link">eosinophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/basophils/" class="internal-link">basophils</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}