---
created: '2026-02-13T18:17:34.299886Z'
description: A broad term for diseases that affect the nerves that control voluntary
  muscles and the communication between nerves and muscles.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/neuromuscular-disorder/
slug: neuromuscular-disorder
tags:
- condition
- neurology
- musculoskeletal
- function-health
templateEngineOverride: njk
title: Neuromuscular Disorder
type: condition
updated: '2026-02-13T18:17:34.299886Z'
---

{% raw %}
<h1>Neuromuscular Disorder</h1>
<h2>Overview</h2>
<p>A broad term for diseases that affect the nerves that control voluntary muscles and the communication between nerves and muscles.</p>
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
FROM [[Neuromuscular Disorder]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/neuromuscular-disorder/" class="internal-link">Neuromuscular_Disorder</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:28.488159'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Neuromuscular Disorder]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Neuromuscular Disorder]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/neuromuscular-disorder/" class="internal-link">Neuromuscular_Disorder</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.327317'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/neuromuscular-disorder/" class="internal-link">Neuromuscular_Disorder</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.327317'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}