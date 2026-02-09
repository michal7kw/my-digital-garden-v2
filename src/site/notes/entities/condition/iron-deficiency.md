---
created: '2026-02-09T05:40:20.984566Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/iron-deficiency/
slug: iron-deficiency
tags:
- condition
templateEngineOverride: njk
title: Iron Deficiency
type: condition
updated: '2026-02-09T05:40:20.984566Z'
---

{% raw %}
<h1>Iron Deficiency Pattern</h1>
<h2>Overview</h2>
<p>Iron deficiency indicated by low ferritin, elevated TIBC, and low transferrin saturation. Most common nutritional deficiency worldwide.</p>
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
FROM [[Iron Deficiency Pattern]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Requires Biomarker</h3>
<ul>
<li>→ [[Ferritin]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<ul>
<li>→ [[TIBC]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<ul>
<li>→ [[Transferrin_Saturation]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ [[Iron_Deficiency_Anemia]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T08:39:25.239061'
source: obsidian
</code></pre>
<ul>
<li>→ [[Restless_Leg_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency_Anemia]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ [[Bone_Marrow]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<ul>
<li>→ [[Brain]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ [[Iron_Bisglycinate]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_C]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ [[Iron_Metabolism]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Iron_Deficiency_Pattern]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Ferritin]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[TIBC]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Transferrin_Saturation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency_Anemia]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Restless_Leg_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bone_Marrow]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Brain]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Bisglycinate]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_C]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Metabolism]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<ul>
<li>← [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:26.595154'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:26.895499'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:27.471024'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Iron Deficiency Pattern]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Iron Deficiency Pattern]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Iron_Deficiency_Pattern]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.886190'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:42.923345'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_deficiency]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Metabolism]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency_Anemia]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_C]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency_Pattern]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Transferrin_Saturation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Bisglycinate]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bone_Marrow]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[TIBC]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Restless_Leg_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.849989'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.670159'
source: obsidian
</code></pre>
<ul>
<li>← [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.949570'
source: obsidian
</code></pre>
<ul>
<li>→ [[Brain]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Ferritin]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:42.957243'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ [[Iron_Metabolism]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ [[Iron_Bisglycinate]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_C]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ [[Bone_Marrow]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<ul>
<li>→ [[Brain]] (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ [[Restless_Leg_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<ul>
<li>→ [[Iron_Deficiency_Anemia]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>→ [[TIBC]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<ul>
<li>→ [[Ferritin]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<ul>
<li>→ [[Transferrin_Saturation]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}