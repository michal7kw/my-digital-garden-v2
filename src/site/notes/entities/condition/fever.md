---
created: '2026-02-13T19:27:04.209173Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/fever/
slug: fever
tags:
- condition
templateEngineOverride: njk
title: Fever
type: condition
updated: '2026-02-13T19:27:04.209173Z'
---

{% raw %}
<h1>Fever</h1>
<h2>Overview</h2>
<p>No description available.</p>
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
FROM [[Fever]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Treats</h3>
<ul>
<li>← <a href="/garden/dev_admin/drug/dexibuprofen/" class="internal-link">DEXIBUPROFEN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">created_at: '2025-12-16T18:56:20.196353'
max_phase: '3.0'
source: ChEMBL
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Fever]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Fever]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}