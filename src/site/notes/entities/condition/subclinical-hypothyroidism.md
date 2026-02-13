---
created: '2026-02-13T19:12:33.678441Z'
description: A mild form of hypothyroidism characterized by slightly elevated TSH
  levels despite normal free T4 levels, often asymptomatic but carrying risks for
  progression.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/subclinical-hypothyroidism/
slug: subclinical-hypothyroidism
tags:
- condition
- endocrinology
- thyroid
- metabolic
- function-health
templateEngineOverride: njk
title: Subclinical Hypothyroidism
type: condition
updated: '2026-02-13T19:12:33.678441Z'
---

{% raw %}
<h1>Subclinical Hypothyroidism</h1>
<h2>Overview</h2>
<p>A mild form of hypothyroidism characterized by slightly elevated TSH levels despite normal free T4 levels, often asymptomatic but carrying risks for progression.</p>
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
FROM [[Subclinical Hypothyroidism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroglobulin-antibodies-tgab/" class="internal-link">thyroglobulin_antibodies_tgab</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroid-stimulating-hormone-tsh/" class="internal-link">thyroid_stimulating_hormone_tsh</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/subclinical-hypothyroidism/" class="internal-link">Subclinical_Hypothyroidism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:43.051287'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/thyroglobulin-antibodies-tgab/" class="internal-link">thyroglobulin_antibodies_tgab</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:43.051287'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/thyroid-stimulating-hormone-tsh/" class="internal-link">thyroid_stimulating_hormone_tsh</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:43.051287'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Subclinical Hypothyroidism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Subclinical Hypothyroidism]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/subclinical-hypothyroidism/" class="internal-link">Subclinical_Hypothyroidism</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.892532'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroid-stimulating-hormone-tsh/" class="internal-link">thyroid_stimulating_hormone_tsh</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.608706'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroglobulin-antibodies-tgab/" class="internal-link">thyroglobulin_antibodies_tgab</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.175550'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/thyroglobulin-antibodies-tgab/" class="internal-link">thyroglobulin_antibodies_tgab</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.892532'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/thyroid-stimulating-hormone-tsh/" class="internal-link">thyroid_stimulating_hormone_tsh</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.892532'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/subclinical-hypothyroidism/" class="internal-link">Subclinical_Hypothyroidism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.892532'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroid-stimulating-hormone-tsh/" class="internal-link">thyroid_stimulating_hormone_tsh</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/thyroglobulin-antibodies-tgab/" class="internal-link">thyroglobulin_antibodies_tgab</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}