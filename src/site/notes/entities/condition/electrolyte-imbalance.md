---
created: '2026-02-09T05:54:31.985334Z'
description: A condition where the levels of essential minerals (electrolytes) in
  the blood are too high or too low, disrupting vital bodily functions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/electrolyte-imbalance/
slug: electrolyte-imbalance
tags:
- condition
- metabolic
- endocrinology
- function-health
templateEngineOverride: njk
title: Electrolyte Imbalance
type: condition
updated: '2026-02-09T05:54:31.985334Z'
---

{% raw %}
<h1>Electrolyte Imbalance</h1>
<h2>Overview</h2>
<p>A condition where the levels of essential minerals (electrolytes) in the blood are too high or too low, disrupting vital bodily functions.</p>
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
FROM [[Electrolyte Imbalance]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Electrolyte_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.647256'
source: obsidian
</code></pre>
<ul>
<li>→ [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.647256'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Electrolyte Imbalance]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Electrolyte Imbalance]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Electrolyte_Imbalance]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
</code></pre>
<ul>
<li>← [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:51.144441'
source: obsidian
</code></pre>
<ul>
<li>→ [[Electrolyte_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
</code></pre>
<ul>
<li>→ [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}