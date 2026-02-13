---
created: '2026-02-13T19:12:33.306147Z'
description: A large group of diseases characterized by the uncontrolled growth and
  spread of abnormal cells, which can invade nearby tissues and metastasize to distant
  organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/cancer/
slug: cancer
tags:
- condition
- oncology
- malignant_neoplasm
- genetic_disorder
templateEngineOverride: njk
title: Cancer
type: condition
updated: '2026-02-13T19:12:33.306147Z'
---

{% raw %}
<h1>Cancer</h1>
<h2>Overview</h2>
<p>A large group of diseases characterized by the uncontrolled growth and spread of abnormal cells, which can invade nearby tissues and metastasize to distant organs.</p>
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
FROM [[Cancer]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cancer/" class="internal-link">Cancer</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:51.934014'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:51.934014'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Cancer]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Cancer]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/protein/src/" class="internal-link">SRC</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/protein/ctcf/" class="internal-link">CTCF</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/protein/cdk2/" class="internal-link">CDK2</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/protein/akt1/" class="internal-link">AKT1</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.513258'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/protein/ctcf/" class="internal-link">CTCF</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:29.769335'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/protein/cdk2/" class="internal-link">CDK2</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/protein/akt1/" class="internal-link">AKT1</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/protein/src/" class="internal-link">SRC</a> (protein)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:46.919120'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cancer/" class="internal-link">Cancer</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.513258'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}