---
created: '2026-02-13T19:38:05.778705Z'
description: A life-threatening condition where blood flow to the heart muscle is
  abruptly cut off, causing tissue death, usually due to a blood clot in a coronary
  artery.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/myocardial-infarction/
slug: myocardial-infarction
tags:
- condition
- cardiology
- emergency
- vascular
- function-health
templateEngineOverride: njk
title: Myocardial Infarction
type: condition
updated: '2026-02-13T19:38:05.778705Z'
---

{% raw %}
<h1>Myocardial Infarction</h1>
<h2>Overview</h2>
<p>A life-threatening condition where blood flow to the heart muscle is abruptly cut off, causing tissue death, usually due to a blood clot in a coronary artery.</p>
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
FROM [[Myocardial Infarction]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:36.399745'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/myocardial-infarction/" class="internal-link">Myocardial_Infarction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:27.286895'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:27.286895'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Myocardial Infarction]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Myocardial Infarction]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.898297'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/myocardial-infarction/" class="internal-link">Myocardial_Infarction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.898297'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/myocardial-infarction/" class="internal-link">Myocardial_Infarction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.898297'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.311340'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}