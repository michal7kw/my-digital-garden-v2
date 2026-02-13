---
created: '2026-02-13T19:00:14.913401Z'
description: A range of conditions affecting the gallbladder, most commonly involving
  gallstones or inflammation (cholecystitis).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/gallbladder-disease/
slug: gallbladder-disease
tags:
- condition
- gastroenterology
- function-health
templateEngineOverride: njk
title: Gallbladder Disease
type: condition
updated: '2026-02-13T19:00:14.913401Z'
---

{% raw %}
<h1>Gallbladder Disease</h1>
<h2>Overview</h2>
<p>A range of conditions affecting the gallbladder, most commonly involving gallstones or inflammation (cholecystitis).</p>
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
FROM [[Gallbladder Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/amylase/" class="internal-link">amylase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lipase/" class="internal-link">lipase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gallbladder-disease/" class="internal-link">Gallbladder_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/amylase/" class="internal-link">amylase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lipase/" class="internal-link">lipase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Gallbladder Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Gallbladder Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gallbladder-disease/" class="internal-link">Gallbladder_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lipase/" class="internal-link">lipase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.162445'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.709630'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/amylase/" class="internal-link">amylase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.692341'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gallbladder-disease/" class="internal-link">Gallbladder_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lipase/" class="internal-link">lipase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/amylase/" class="internal-link">amylase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lipase/" class="internal-link">lipase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/amylase/" class="internal-link">amylase</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}