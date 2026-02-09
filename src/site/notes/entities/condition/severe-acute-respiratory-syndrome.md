---
created: '2026-02-09T05:40:21.082745Z'
description: A viral respiratory illness caused by a coronavirus (SARS-CoV), first
  identified in 2003.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/severe-acute-respiratory-syndrome/
slug: severe-acute-respiratory-syndrome
tags:
- condition
- infectious_disease
- viral
- respiratory
- historical
templateEngineOverride: njk
title: Severe Acute Respiratory Syndrome
type: condition
updated: '2026-02-09T05:40:21.082745Z'
---

{% raw %}
<h1>Severe Acute Respiratory Syndrome</h1>
<h2>Overview</h2>
<p>A viral respiratory illness caused by a coronavirus (SARS-CoV), first identified in 2003.</p>
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
FROM [[Severe Acute Respiratory Syndrome]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Severe_Acute_Respiratory_Syndrome]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:41.258420'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Severe Acute Respiratory Syndrome]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Severe Acute Respiratory Syndrome]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Severe_Acute_Respiratory_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.482466'
source: obsidian
</code></pre>
<ul>
<li>→ [[Severe_Acute_Respiratory_Syndrome]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.482466'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}