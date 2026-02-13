---
created: '2026-02-13T17:51:31.918000Z'
description: Inflammation of the protective membranes (meninges) covering the brain
  and spinal cord, typically caused by an infection.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/meningitis/
slug: meningitis
tags:
- condition
- neurology
- infectious_disease
- acute
- emergency
templateEngineOverride: njk
title: Meningitis
type: condition
updated: '2026-02-13T17:51:31.918000Z'
---

{% raw %}
<h1>Meningitis</h1>
<h2>Overview</h2>
<p>Inflammation of the protective membranes (meninges) covering the brain and spinal cord, typically caused by an infection.</p>
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
FROM [[Meningitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/meningitis/" class="internal-link">Meningitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:21.076811'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Meningitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Meningitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/meningitis/" class="internal-link">Meningitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.416980'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}