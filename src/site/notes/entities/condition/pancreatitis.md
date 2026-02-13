---
created: '2026-02-13T17:49:24.249868Z'
description: Inflammation of the pancreas, which can be acute (sudden and severe)
  or chronic (long-term and progressive).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pancreatitis/
slug: pancreatitis
tags:
- condition
- gastroenterology
- inflammation
- acute
- chronic
templateEngineOverride: njk
title: Pancreatitis
type: condition
updated: '2026-02-13T17:49:24.249868Z'
---

{% raw %}
<h1>Pancreatitis</h1>
<h2>Overview</h2>
<p>Inflammation of the pancreas, which can be acute (sudden and severe) or chronic (long-term and progressive).</p>
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
FROM [[Pancreatitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pancreatitis/" class="internal-link">Pancreatitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:32.638296'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Pancreatitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Pancreatitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pancreatitis/" class="internal-link">Pancreatitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:35.176562'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}