---
created: '2026-02-13T19:12:33.647247Z'
description: Cancer of the prostate gland, a small walnut-shaped gland in males that
  produces seminal fluid. It is one of the most common types of cancer in men.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/prostatic-neoplasms/
slug: prostatic-neoplasms
tags:
- condition
- oncology
- urology
- cancer
- mens_health
templateEngineOverride: njk
title: Prostatic Neoplasms
type: condition
updated: '2026-02-13T19:12:33.647247Z'
---

{% raw %}
<h1>Prostatic Neoplasms</h1>
<h2>Overview</h2>
<p>Cancer of the prostate gland, a small walnut-shaped gland in males that produces seminal fluid. It is one of the most common types of cancer in men.</p>
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
FROM [[Prostatic Neoplasms]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/prostatic-neoplasms/" class="internal-link">Prostatic_Neoplasms</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:37.889256'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Prostatic Neoplasms]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Prostatic Neoplasms]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/prostatic-neoplasms/" class="internal-link">Prostatic_Neoplasms</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.670493'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/prostatic-neoplasms/" class="internal-link">Prostatic_Neoplasms</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.670493'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}