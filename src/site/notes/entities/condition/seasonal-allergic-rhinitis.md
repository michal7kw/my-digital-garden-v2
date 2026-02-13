---
created: '2026-02-13T18:17:34.434054Z'
description: An allergic response to specific allergens like pollen that occurs at
  certain times of the year, commonly known as Hay Fever.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/seasonal-allergic-rhinitis/
slug: seasonal-allergic-rhinitis
tags:
- condition
- immunology
- allergy
- ent
templateEngineOverride: njk
title: Seasonal Allergic Rhinitis
type: condition
updated: '2026-02-13T18:17:34.434054Z'
---

{% raw %}
<h1>Seasonal Allergic Rhinitis</h1>
<h2>Overview</h2>
<p>An allergic response to specific allergens like pollen that occurs at certain times of the year, commonly known as Hay Fever.</p>
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
FROM [[Seasonal Allergic Rhinitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/seasonal-allergic-rhinitis/" class="internal-link">Seasonal_Allergic_Rhinitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:41.052499'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Seasonal Allergic Rhinitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Seasonal Allergic Rhinitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/seasonal-allergic-rhinitis/" class="internal-link">Seasonal_Allergic_Rhinitis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.407491'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/seasonal-allergic-rhinitis/" class="internal-link">Seasonal_Allergic_Rhinitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.407491'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}