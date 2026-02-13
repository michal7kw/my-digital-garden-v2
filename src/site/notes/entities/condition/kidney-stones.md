---
created: '2026-02-13T19:00:15.002598Z'
description: Hard deposits made of minerals and salts that form inside the kidneys,
  often causing severe pain when passing through the urinary tract.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/kidney-stones/
slug: kidney-stones
tags:
- condition
- urology
- nephrology
- metabolic
- function-health
templateEngineOverride: njk
title: Kidney Stones
type: condition
updated: '2026-02-13T19:00:15.002598Z'
---

{% raw %}
<h1>Kidney Stones</h1>
<h2>Overview</h2>
<p>Hard deposits made of minerals and salts that form inside the kidneys, often causing severe pain when passing through the urinary tract.</p>
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
FROM [[Kidney Stones]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ph-urine/" class="internal-link">ph_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/kidney-stones/" class="internal-link">Kidney_Stones</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ph-urine/" class="internal-link">ph_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Kidney Stones]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Kidney Stones]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/kidney-stones/" class="internal-link">Kidney_Stones</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.794338'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.406769'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:59.327453'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ph-urine/" class="internal-link">ph_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:58.579568'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.822281'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/kidney-stones/" class="internal-link">Kidney_Stones</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ph-urine/" class="internal-link">ph_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ph-urine/" class="internal-link">ph_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}