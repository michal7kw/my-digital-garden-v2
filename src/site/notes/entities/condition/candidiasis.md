---
created: '2026-02-13T18:51:25.001674Z'
description: A fungal infection caused by an overgrowth of Candida species, primarily
  Candida albicans, affecting the skin, mucous membranes, or internal organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/candidiasis/
slug: candidiasis
tags:
- condition
- infection
- fungal
- dermatology
- gynecology
- function-health
templateEngineOverride: njk
title: Candidiasis
type: condition
updated: '2026-02-13T18:51:25.001674Z'
---

{% raw %}
<h1>Candidiasis</h1>
<h2>Overview</h2>
<p>A fungal infection caused by an overgrowth of Candida species, primarily Candida albicans, affecting the skin, mucous membranes, or internal organs.</p>
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
FROM [[Candidiasis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/candidiasis/" class="internal-link">Candidiasis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.137631'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Candidiasis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Candidiasis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/candidiasis/" class="internal-link">Candidiasis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.588715'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}