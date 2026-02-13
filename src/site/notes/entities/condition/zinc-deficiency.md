---
created: '2026-02-13T19:12:33.717695Z'
description: A nutritional deficiency state characterized by insufficient levels of
  zinc, an essential trace element involved in immune function, protein synthesis,
  and wound healing.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/zinc-deficiency/
slug: zinc-deficiency
tags:
- condition
- nutrition
- metabolic
- mineral
- function-health
templateEngineOverride: njk
title: Zinc Deficiency
type: condition
updated: '2026-02-13T19:12:33.717695Z'
---

{% raw %}
<h1>Zinc Deficiency</h1>
<h2>Overview</h2>
<p>A nutritional deficiency state characterized by insufficient levels of zinc, an essential trace element involved in immune function, protein synthesis, and wound healing.</p>
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
FROM [[Zinc Deficiency]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/zinc/" class="internal-link">zinc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/zinc-deficiency/" class="internal-link">Zinc_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:47.790606'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/zinc/" class="internal-link">zinc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:47.790606'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Zinc Deficiency]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Zinc Deficiency]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/zinc-deficiency/" class="internal-link">Zinc_Deficiency</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/zinc/" class="internal-link">zinc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:02.110806'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/zinc-deficiency/" class="internal-link">Zinc_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/zinc/" class="internal-link">zinc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/zinc/" class="internal-link">zinc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}