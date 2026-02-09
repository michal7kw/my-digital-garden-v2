---
created: '2026-02-09T05:40:20.953702Z'
description: A chronic, progressive syndrome in which the heart muscle is unable to
  pump enough blood to meet the body's needs for blood and oxygen.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/heart-failure/
slug: heart-failure
tags:
- condition
- cardiology
- chronic
- vascular
- function-health
templateEngineOverride: njk
title: Heart Failure
type: condition
updated: '2026-02-09T05:40:20.953702Z'
---

{% raw %}
<h1>Heart Failure</h1>
<h2>Overview</h2>
<p>A chronic, progressive syndrome in which the heart muscle is unable to pump enough blood to meet the body's needs for blood and oxygen.</p>
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
FROM [[Heart Failure]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[albumin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hyaline_casts_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Heart_Failure]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
</code></pre>
<ul>
<li>→ [[albumin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
</code></pre>
<ul>
<li>→ [[hyaline_casts_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Heart Failure]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Heart Failure]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Heart_Failure]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
</code></pre>
<ul>
<li>← [[hyaline_casts_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.396088'
source: obsidian
</code></pre>
<ul>
<li>← [[albumin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.479652'
source: obsidian
</code></pre>
<ul>
<li>→ [[albumin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
</code></pre>
<ul>
<li>→ [[Heart_Failure]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
</code></pre>
<ul>
<li>→ [[hyaline_casts_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[hyaline_casts_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[albumin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}