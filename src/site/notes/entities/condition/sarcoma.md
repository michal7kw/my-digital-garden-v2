---
created: '2026-02-13T14:57:56.519460Z'
description: A broad group of cancers that begin in the bones and soft tissues (muscle,
  fat, blood vessels, nerves, tendons, and lining of joints).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/sarcoma/
slug: sarcoma
tags:
- condition
- oncology
- cancer
- orthopedics
- rare_disease
templateEngineOverride: njk
title: Sarcoma
type: condition
updated: '2026-02-13T14:57:56.519460Z'
---

{% raw %}
<h1>Sarcoma</h1>
<h2>Overview</h2>
<p>A broad group of cancers that begin in the bones and soft tissues (muscle, fat, blood vessels, nerves, tendons, and lining of joints).</p>
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
FROM [[Sarcoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/sarcoma/" class="internal-link">Sarcoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:40.142684'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Sarcoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Sarcoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/sarcoma/" class="internal-link">Sarcoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.130561'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}