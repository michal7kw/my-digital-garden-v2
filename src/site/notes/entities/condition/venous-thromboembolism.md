---
created: '2026-02-13T14:58:20.009387Z'
description: A condition where a blood clot forms in a vein, encompassing Deep Vein
  Thrombosis (DVT) and Pulmonary Embolism (PE).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/venous-thromboembolism/
slug: venous-thromboembolism
tags:
- condition
- hematology
- cardiology
- vascular
- emergency
templateEngineOverride: njk
title: Venous Thromboembolism
type: condition
updated: '2026-02-13T14:58:20.009387Z'
---

{% raw %}
<h1>Venous Thromboembolism</h1>
<h2>Overview</h2>
<p>A condition where a blood clot forms in a vein, encompassing Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE).</p>
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
FROM [[Venous Thromboembolism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/venous-thromboembolism/" class="internal-link">Venous_Thromboembolism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.265186'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Venous Thromboembolism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Venous Thromboembolism]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/venous-thromboembolism/" class="internal-link">Venous_Thromboembolism</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.061698'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/venous-thromboembolism/" class="internal-link">Venous_Thromboembolism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.061698'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}