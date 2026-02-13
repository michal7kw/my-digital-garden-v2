---
created: '2026-02-13T14:57:56.534572Z'
description: An uncontrolled growth of abnormal cells arising from the squamous cells
  in the epidermis (skin) or linings of digestive/respiratory tracts.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/squamous-cell-carcinoma/
slug: squamous-cell-carcinoma
tags:
- condition
- oncology
- dermatology
- skin
- cancer
templateEngineOverride: njk
title: Squamous Cell Carcinoma
type: condition
updated: '2026-02-13T14:57:56.534572Z'
---

{% raw %}
<h1>Squamous Cell Carcinoma</h1>
<h2>Overview</h2>
<p>An uncontrolled growth of abnormal cells arising from the squamous cells in the epidermis (skin) or linings of digestive/respiratory tracts.</p>
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
FROM [[Squamous Cell Carcinoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/squamous-cell-carcinoma/" class="internal-link">Squamous_Cell_Carcinoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:42.555695'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Squamous Cell Carcinoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Squamous Cell Carcinoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/squamous-cell-carcinoma/" class="internal-link">Squamous_Cell_Carcinoma</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.770243'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/squamous-cell-carcinoma/" class="internal-link">Squamous_Cell_Carcinoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.770243'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}