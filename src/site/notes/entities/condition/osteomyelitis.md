---
created: '2026-02-13T17:51:31.968607Z'
description: Infection of the bone, typically caused by bacteria, which can be acute
  or chronic.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/osteomyelitis/
slug: osteomyelitis
tags:
- condition
- orthopedics
- infectious_disease
- bone
templateEngineOverride: njk
title: Osteomyelitis
type: condition
updated: '2026-02-13T17:51:31.968607Z'
---

{% raw %}
<h1>Osteomyelitis</h1>
<h2>Overview</h2>
<p>Infection of the bone, typically caused by bacteria, which can be acute or chronic.</p>
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
FROM [[Osteomyelitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/osteomyelitis/" class="internal-link">Osteomyelitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:30.232037'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Osteomyelitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Osteomyelitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/osteomyelitis/" class="internal-link">Osteomyelitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.534687'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}