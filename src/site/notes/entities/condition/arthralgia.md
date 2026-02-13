---
created: '2026-02-13T19:38:05.374971Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/arthralgia/
slug: arthralgia
tags:
- condition
templateEngineOverride: njk
title: Arthralgia
type: condition
updated: '2026-02-13T19:38:05.374971Z'
---

{% raw %}
<h1>Arthralgia</h1>
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
FROM [[Arthralgia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Treats</h3>
<ul>
<li>← <a href="/garden/dev_admin/drug/indomethacin/" class="internal-link">INDOMETHACIN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">created_at: '2025-12-16T18:56:07.994435'
max_phase: '4.0'
source: ChEMBL
</code></pre>
<h3>Relatedtophenotype</h3>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/pain/" class="internal-link">Pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">imported: '2025-12-26T09:40:28.731000+00:00'
source: PrimeKG
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Arthralgia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Arthralgia]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}