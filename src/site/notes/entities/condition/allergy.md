---
created: '2026-02-09T08:04:40.089858Z'
description: An exaggerated immune response to Ordinarily harmless substances (allergens),
  characterized by the production of IgE antibodies and release of inflammatory mediators
  like histamine.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/allergy/
slug: allergy
tags:
- condition
- immunology
- respiratory
- dermatology
- function-health
templateEngineOverride: njk
title: Allergy
type: condition
updated: '2026-02-09T08:04:40.089858Z'
---

{% raw %}
<h1>Allergy</h1>
<h2>Overview</h2>
<p>An exaggerated immune response to Ordinarily harmless substances (allergens), characterized by the production of IgE antibodies and release of inflammatory mediators like histamine.</p>
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
FROM [[Allergy]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/allergy/" class="internal-link">Allergy</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:47.246560'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Allergy]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Allergy]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/allergy/" class="internal-link">Allergy</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.108761'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}