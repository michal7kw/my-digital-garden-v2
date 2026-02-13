---
created: '2026-02-13T14:57:56.478449Z'
description: Polycystic Ovary Syndrome, a complex hormonal and metabolic disorder
  affecting women of reproductive age.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pcos/
slug: pcos
tags:
- condition
- endocrine
- metabolic
- reproductive_health
templateEngineOverride: njk
title: PCOS
type: condition
updated: '2026-02-13T14:57:56.478449Z'
---

{% raw %}
<h1>PCOS</h1>
<h2>Overview</h2>
<p>Polycystic Ovary Syndrome, a complex hormonal and metabolic disorder affecting women of reproductive age.</p>
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
FROM [[PCOS]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:19.252065'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:50.148655'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-27T18:02:22.303164'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:06:58.948673'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[PCOS]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[PCOS]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:40.282261'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:35.916356'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-27T18:02:22.303164'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:19.252065'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}