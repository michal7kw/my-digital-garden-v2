---
created: '2026-02-13T19:27:04.429960Z'
description: A kidney disorder that causes the body to excrete too much protein in
  the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/nephrotic-syndrome/
slug: nephrotic-syndrome
tags:
- condition
- nephrology
- function-health
templateEngineOverride: njk
title: Nephrotic Syndrome
type: condition
updated: '2026-02-13T19:27:04.429960Z'
---

{% raw %}
<h1>Nephrotic Syndrome</h1>
<h2>Overview</h2>
<p>A kidney disorder that causes the body to excrete too much protein in the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.</p>
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
FROM [[Nephrotic Syndrome]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/nephrotic-syndrome/" class="internal-link">Nephrotic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:28.032486'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:28.032486'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Nephrotic Syndrome]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Nephrotic Syndrome]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/nephrotic-syndrome/" class="internal-link">Nephrotic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.479652'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/nephrotic-syndrome/" class="internal-link">Nephrotic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/albumin/" class="internal-link">albumin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}