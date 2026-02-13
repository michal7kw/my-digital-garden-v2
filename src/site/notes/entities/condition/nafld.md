---
created: '2026-02-13T19:38:05.783393Z'
description: Non-Alcoholic Fatty Liver Disease, characterized by excessive fat accumulation
  in the liver not caused by alcohol consumption.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/nafld/
slug: nafld
tags:
- condition
- metabolic
- hepatic
- obesity
templateEngineOverride: njk
title: NAFLD
type: condition
updated: '2026-02-13T19:38:05.783393Z'
---

{% raw %}
<h1>NAFLD</h1>
<h2>Overview</h2>
<p>Non-Alcoholic Fatty Liver Disease, characterized by excessive fat accumulation in the liver not caused by alcohol consumption.</p>
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
FROM [[NAFLD]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:23.144461'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:27.704877'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/nafld/" class="internal-link">NAFLD</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:27.704877'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:42.706915'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[NAFLD]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[NAFLD]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.088445'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.678592'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/nafld/" class="internal-link">NAFLD</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.088445'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.922538'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}