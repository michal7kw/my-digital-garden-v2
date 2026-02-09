---
created: '2026-02-09T08:04:40.311978Z'
description: Severe pain caused by a kidney stone moving through the urinary tract,
  typically blocking the flow of urine.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/renal-colic/
slug: renal-colic
tags:
- condition
- nephrology
- urology
- symptom
- pain
templateEngineOverride: njk
title: Renal Colic
type: condition
updated: '2026-02-09T08:04:40.311978Z'
---

{% raw %}
<h1>Renal Colic</h1>
<h2>Overview</h2>
<p>Severe pain caused by a kidney stone moving through the urinary tract, typically blocking the flow of urine.</p>
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
FROM [[Renal Colic]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/renal-colic/" class="internal-link">Renal_Colic</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:39.089157'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Renal Colic]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Renal Colic]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/renal-colic/" class="internal-link">Renal_Colic</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.917440'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/renal-colic/" class="internal-link">Renal_Colic</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.917440'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}