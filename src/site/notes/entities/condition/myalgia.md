---
created: '2026-02-13T14:57:56.438559Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/myalgia/
slug: myalgia
tags:
- condition
templateEngineOverride: njk
title: Myalgia
type: condition
updated: '2026-02-13T14:57:56.438559Z'
---

{% raw %}
<h1>Myalgia</h1>
<h2>Overview</h2>
<p>No description available.</p>
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
FROM [[Myalgia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/myalgia/" class="internal-link">Myalgia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">INDOMETHACIN</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/pain/" class="internal-link">Pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/pain/" class="internal-link">Pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:06:29.345319'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Myalgia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Myalgia]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">INDOMETHACIN</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/pain/" class="internal-link">Pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:23.771829'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/myalgia/" class="internal-link">Myalgia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/pain/" class="internal-link">Pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}