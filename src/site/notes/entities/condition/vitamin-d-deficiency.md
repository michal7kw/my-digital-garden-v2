---
created: '2026-02-09T05:40:21.108906Z'
description: A condition characterized by inadequate levels of vitamin D in the body,
  which is essential for calcium absorption, bone health, and immune function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/vitamin-d-deficiency/
slug: vitamin-d-deficiency
tags:
- condition
- nutrition
- metabolic
- bone_health
- function-health
templateEngineOverride: njk
title: Vitamin D Deficiency
type: condition
updated: '2026-02-09T05:40:21.108906Z'
---

{% raw %}
<h1>vitamin_d_deficiency</h1>
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
FROM [[vitamin_d_deficiency]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Requires Biomarker</h3>
<ul>
<li>→ [[25-OH_Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ [[Osteoporosis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T08:39:28.472510'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T08:39:28.472510'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ [[Vitamin_D3]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_K2]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ [[Calcium_Homeostasis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[vitamin_d_deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[25-OH_Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D3]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_K2]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Calcium_Homeostasis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bones]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_System]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
</code></pre>
<ul>
<li>← [[alkaline_phosphatase_alp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:14.149711'
source: obsidian
</code></pre>
<ul>
<li>← [[calcium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:17.743724'
source: obsidian
</code></pre>
<ul>
<li>← [[vitamin_d]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:45.400773'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ [[Bones]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_System]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[vitamin_d_deficiency]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[vitamin_d_deficiency]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:54.726785'
source: obsidian
</code></pre>
<ul>
<li>→ [[Calcium_Homeostasis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_System]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[25-OH_Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D3]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[vitamin_d_deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_K2]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Immune_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:41:56.167045'
source: obsidian
</code></pre>
<ul>
<li>← [[Immune_System]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:39:29.403418'
source: obsidian
</code></pre>
<ul>
<li>← [[Bones]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:39:23.827651'
source: obsidian
</code></pre>
<ul>
<li>→ [[alkaline_phosphatase_alp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[calcium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[vitamin_d]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>← [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:37:21.316851'
source: obsidian
</code></pre>
<ul>
<li>← [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:36:45.740417'
source: obsidian
</code></pre>
<ul>
<li>← [[vitamin_d]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.620736'
source: obsidian
</code></pre>
<ul>
<li>← [[calcium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:51.050601'
source: obsidian
</code></pre>
<ul>
<li>← [[alkaline_phosphatase_alp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.561127'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bones]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:04:02.247137'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ [[Calcium_Homeostasis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ [[Vitamin_D3]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_K2]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ [[Immune_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osteoporosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<ul>
<li>→ [[Depression]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>→ [[25-OH_Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ [[Immune_System]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bones]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}