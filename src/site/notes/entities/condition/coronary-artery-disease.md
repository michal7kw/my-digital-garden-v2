---
created: '2026-02-13T19:27:04.159775Z'
description: A type of heart disease characterized by the narrowing or blockage of
  the coronary arteries, usually caused by atherosclerosis, which reduces blood flow
  to the heart muscle.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/coronary-artery-disease/
slug: coronary-artery-disease
tags:
- condition
- cardiology
- vascular
- chronic
- function-health
templateEngineOverride: njk
title: Coronary Artery Disease
type: condition
updated: '2026-02-13T19:27:04.159775Z'
---

{% raw %}
<h1>Coronary Artery Disease</h1>
<h2>Overview</h2>
<p>A type of heart disease characterized by the narrowing or blockage of the coronary arteries, usually caused by atherosclerosis, which reduces blood flow to the heart muscle.</p>
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
FROM [[Coronary Artery Disease]] AND #intervention
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
<li>→ <a href="/garden/dev_admin/condition/coronary-artery-disease/" class="internal-link">Coronary_Artery_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:02.307529'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:02.307529'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Coronary Artery Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Coronary Artery Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/coronary-artery-disease/" class="internal-link">Coronary_Artery_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.706824'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.706824'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/coronary-artery-disease/" class="internal-link">Coronary_Artery_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.706824'
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