---
created: '2026-02-09T05:54:32.079110Z'
description: A chronic condition characterized by decreased bone mass and deterioration
  of bone tissue, making bones fragile and more likely to fracture.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/osteoporosis/
slug: osteoporosis
tags:
- condition
- rheumatology
- musculoskeletal
- endocrinology
- function-health
templateEngineOverride: njk
title: Osteoporosis
type: condition
updated: '2026-02-09T05:54:32.079110Z'
---

{% raw %}
<h1>Osteoporosis</h1>
<h2>Overview</h2>
<p>A chronic condition characterized by decreased bone mass and deterioration of bone tissue, making bones fragile and more likely to fracture.</p>
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
FROM [[Osteoporosis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<ul>
<li>← [[vitamin_d_deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:30.423893'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:30.423893'
source: obsidian
</code></pre>
<ul>
<li>← [[vitamin_d_deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Osteoporosis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Osteoporosis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
</code></pre>
<ul>
<li>→ [[vitamin_d_deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:37:21.316851'
source: obsidian
</code></pre>
<ul>
<li>← [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}