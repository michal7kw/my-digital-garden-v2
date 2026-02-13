---
created: '2026-02-13T17:51:31.879412Z'
description: The immune system's response to injury or infection, characterized by
  redness, heat, swelling, and pain. Can be acute (healing) or chronic (damaging).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/inflammation/
slug: inflammation
tags:
- condition
- immunology
- pathology
- symptom
templateEngineOverride: njk
title: Inflammation
type: condition
updated: '2026-02-13T17:51:31.879412Z'
---

{% raw %}
<h1>Inflammation</h1>
<h2>Overview</h2>
<p>The immune system's response to injury or infection, characterized by redness, heat, swelling, and pain. Can be acute (healing) or chronic (damaging).</p>
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
FROM [[Inflammation]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/inflammation/" class="internal-link">Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.018196'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Inflammation]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Inflammation]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/apigenin/" class="internal-link">Apigenin</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:41.619170'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/apigenin/" class="internal-link">Apigenin</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:35.283353'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/inflammation/" class="internal-link">Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.039493'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}