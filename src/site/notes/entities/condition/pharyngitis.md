---
created: '2026-02-13T17:51:32.000357Z'
description: Inflammation of the pharynx, causing a sore throat.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pharyngitis/
slug: pharyngitis
tags:
- condition
- otolaryngology
- infection
- acute
templateEngineOverride: njk
title: Pharyngitis
type: condition
updated: '2026-02-13T17:51:32.000357Z'
---

{% raw %}
<h1>Pharyngitis</h1>
<h2>Overview</h2>
<p>Inflammation of the pharynx, causing a sore throat.</p>
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
FROM [[Pharyngitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pharyngitis/" class="internal-link">Pharyngitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:34.853231'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Pharyngitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Pharyngitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pharyngitis/" class="internal-link">Pharyngitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:35.901420'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}