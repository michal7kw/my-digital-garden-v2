---
created: '2026-02-09T05:54:32.044388Z'
description: A serious type of skin cancer that develops from the pigment-producing
  cells known as melanocytes. It is less common than other skin cancers but much more
  dangerous if it spreads.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/melanoma/
slug: melanoma
tags:
- condition
- oncology
- dermatology
- skin
- cancer
templateEngineOverride: njk
title: Melanoma
type: condition
updated: '2026-02-09T05:54:32.044388Z'
---

{% raw %}
<h1>Melanoma</h1>
<h2>Overview</h2>
<p>A serious type of skin cancer that develops from the pigment-producing cells known as melanocytes. It is less common than other skin cancers but much more dangerous if it spreads.</p>
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
FROM [[Melanoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Melanoma]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:20.671279'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Melanoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Melanoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[SRC]] (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:44.788008'
source: obsidian
</code></pre>
<ul>
<li>→ [[S100B]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:44.788008'
source: obsidian
</code></pre>
<ul>
<li>← [[SRC]] (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:33.887168'
source: obsidian
</code></pre>
<ul>
<li>← [[S100B]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.720220'
source: obsidian
</code></pre>
<ul>
<li>→ [[Melanoma]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.301676'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}