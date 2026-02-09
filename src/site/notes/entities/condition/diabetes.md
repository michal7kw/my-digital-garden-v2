---
created: '2026-02-09T05:40:20.924425Z'
description: Diabetes mellitus is a group of metabolic diseases characterized by high
  blood sugar levels over a prolonged period. This high blood sugar can cause symptoms
  such as frequent urination, increased thirst, and increased hunger. If left untreated,
  diabetes can cause many complications.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/diabetes/
slug: diabetes
tags:
- condition
- metabolic
- chronic
templateEngineOverride: njk
title: Diabetes
type: condition
updated: '2026-02-09T05:40:20.924425Z'
---

{% raw %}
<h1>Diabetes</h1>
<h2>Overview</h2>
<p>Diabetes mellitus is a group of metabolic diseases characterized by high blood sugar levels over a prolonged period. This high blood sugar can cause symptoms such as frequent urination, increased thirst, and increased hunger. If left untreated, diabetes can cause many complications.</p>
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
FROM [[Diabetes]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Complicates</h3>
<ul>
<li>→ [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.546536'
source: obsidian
</code></pre>
<h3>Worsened By Condition</h3>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.100000'
source: obsidian
</code></pre>
<h3>Worsened By Intervention</h3>
<ul>
<li>→ [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.449897'
source: obsidian
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:10.311911'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:19.201468'
source: obsidian
</code></pre>
<ul>
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:22.547804'
source: obsidian
</code></pre>
<ul>
<li>← [[Vitamin_D]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>← [[Glucose]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.188234'
source: obsidian
</code></pre>
<ul>
<li>→ [[Glucose]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Inflammation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Keto_Diet]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:50.148655'
source: obsidian
</code></pre>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
</code></pre>
<ul>
<li>→ [[Diabetes]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-27T18:02:21.238365'
source: obsidian
</code></pre>
<ul>
<li>← [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:22.895264'
source: obsidian
</code></pre>
<ul>
<li>← [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:10.258074'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:06:58.948673'
source: obsidian
</code></pre>
<ul>
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:07.990267'
source: obsidian
</code></pre>
<ul>
<li>← [[Vitamin_D]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Diabetes]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Diabetes]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Vitamin_D]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Inflammation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>→ [[Keto_Diet]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>← [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.338942'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:40.282261'
source: obsidian
</code></pre>
<ul>
<li>→ [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>→ [[Glucose]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>← [[Glucose]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.943509'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>← [[Vitamin_D]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
</code></pre>
<ul>
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:38.494293'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:35.916356'
source: obsidian
</code></pre>
<ul>
<li>← [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.239770'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-27T18:02:21.238365'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>→ [[Diabetes]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
</code></pre>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[glucose_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← [[Vitamin_D]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
</code></pre>
<ul>
<li>← [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:22.547804'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:19.201468'
source: obsidian
</code></pre>
<ul>
<li>← [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:10.311911'
source: obsidian
</code></pre>
<h3>Worsened By Intervention</h3>
<ul>
<li>→ [[Keto_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.449897'
source: obsidian
</code></pre>
<h3>Worsened By Condition</h3>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.100000'
source: obsidian
</code></pre>
<h3>Complicates</h3>
<ul>
<li>→ [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:07.546536'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}