---
created: '2026-02-09T05:40:20.920659Z'
description: A serious mood disorder characterized by persistent feelings of sadness,
  hopelessness, and a loss of interest in activities once enjoyed.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/depression/
slug: depression
tags:
- condition
- psychiatry
- mental_health
- function-health
templateEngineOverride: njk
title: Depression
type: condition
updated: '2026-02-09T05:40:20.920659Z'
---

{% raw %}
<h1>Depression</h1>
<h2>Overview</h2>
<p>A serious mood disorder characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities once enjoyed.</p>
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
FROM [[Depression]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>← [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:54.843123'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:02.923985'
source: obsidian
</code></pre>
<ul>
<li>→ [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:02.923985'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:02.923985'
source: obsidian
</code></pre>
<ul>
<li>← [[vitamin_d_deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:01.825845'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← [[vitamin_d_deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Depression]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Depression]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Quetiapine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Clomipramine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Imipramine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mediterranean_Diet]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amitriptyline]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Doxepin]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Omega-3_DHA]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.875774'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.895632'
source: obsidian
</code></pre>
<ul>
<li>→ [[vitamin_d_deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.895632'
source: obsidian
</code></pre>
<ul>
<li>← [[Omega-3_DHA]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:39.685849'
source: obsidian
</code></pre>
<ul>
<li>← [[Mediterranean_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.486140'
source: obsidian
</code></pre>
<ul>
<li>← [[Quetiapine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:43.555748'
source: obsidian
</code></pre>
<ul>
<li>← [[Imipramine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:42.019672'
source: obsidian
</code></pre>
<ul>
<li>← [[Doxepin]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:41.513007'
source: obsidian
</code></pre>
<ul>
<li>← [[Clomipramine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:40.791132'
source: obsidian
</code></pre>
<ul>
<li>← [[Amitriptyline]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.673750'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:36:45.740417'
source: obsidian
</code></pre>
<ul>
<li>← [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.895632'
source: obsidian
</code></pre>
<ul>
<li>→ [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:26.895632'
source: obsidian
</code></pre>
<ul>
<li>← [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:41.099790'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← [[Creatine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:36.518401'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}