---
created: '2026-02-13T17:49:24.013249Z'
description: A broad category of disorders affecting the urinary bladder, including
  infections, functional issues, stones, and cancers.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/bladder-disease/
slug: bladder-disease
tags:
- condition
- urology
- function-health
templateEngineOverride: njk
title: Bladder Disease
type: condition
updated: '2026-02-13T17:49:24.013249Z'
---

{% raw %}
<h1>Bladder Disease</h1>
<h2>Overview</h2>
<p>A broad category of disorders affecting the urinary bladder, including infections, functional issues, stones, and cancers.</p>
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
FROM [[Bladder Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/appearance-urine/" class="internal-link">appearance_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bladder-disease/" class="internal-link">Bladder_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:50.387423'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/appearance-urine/" class="internal-link">appearance_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:50.387423'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Bladder Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Bladder Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bladder-disease/" class="internal-link">Bladder_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/appearance-urine/" class="internal-link">appearance_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.265588'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bladder-disease/" class="internal-link">Bladder_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/appearance-urine/" class="internal-link">appearance_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/appearance-urine/" class="internal-link">appearance_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}