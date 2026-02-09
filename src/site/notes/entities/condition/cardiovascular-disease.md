---
created: '2026-02-09T05:40:20.882484Z'
description: A broad group of disorders of the heart and blood vessels, often caused
  by atherosclerosis and leading to events such as heart attacks and strokes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/cardiovascular-disease/
slug: cardiovascular-disease
tags:
- condition
- cardiology
- vascular
- chronic
- function-health
templateEngineOverride: njk
title: Cardiovascular Disease
type: condition
updated: '2026-02-09T05:40:20.882484Z'
---

{% raw %}
<h1>Cardiovascular Disease</h1>
<h2>Overview</h2>
<p>A broad group of disorders of the heart and blood vessels, often caused by atherosclerosis and leading to events such as heart attacks and strokes.</p>
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
FROM [[Cardiovascular Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[apolipoprotein_b_apob]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hdl_large]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_medium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_particle_number]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_pattern]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_peak_size]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_small]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[non_hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[total_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[total_cholesterol_hdl_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[triglycerides]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[arachidonic_acid_epa_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[mean_platelet_volume_mpv]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[uric_acid]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
</code></pre>
<ul>
<li>← [[Kidney_Stress_Pattern]] (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:40.032727'
source: obsidian
</code></pre>
<ul>
<li>← [[Metabolic_Syndrome]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:42.706915'
source: obsidian
</code></pre>
<ul>
<li>← [[thyroid_dysfunction]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Cardiovascular_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[apolipoprotein_b_apob]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[hdl_large]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_medium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_particle_number]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_pattern]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_peak_size]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_small]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[non_hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_cholesterol_hdl_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[triglycerides]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[arachidonic_acid_epa_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[mean_platelet_volume_mpv]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[uric_acid]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Inflammation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[Kidney_Stress_Pattern]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[Metabolic_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ [[Thyroid_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Cardiovascular Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Cardiovascular Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.218776'
source: obsidian
</code></pre>
<ul>
<li>← [[Mediterranean_Diet]] (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.486140'
source: obsidian
</code></pre>
<ul>
<li>← [[uric_acid]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.406769'
source: obsidian
</code></pre>
<ul>
<li>← [[triglycerides]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.151970'
source: obsidian
</code></pre>
<ul>
<li>← [[total_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.993626'
source: obsidian
</code></pre>
<ul>
<li>← [[total_cholesterol_hdl_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.896437'
source: obsidian
</code></pre>
<ul>
<li>← [[non_hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.721942'
source: obsidian
</code></pre>
<ul>
<li>← [[mean_platelet_volume_mpv]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.181105'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_small]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.657574'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_peak_size]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.569821'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_pattern]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.480705'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_particle_number]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.401389'
source: obsidian
</code></pre>
<ul>
<li>← [[ldl_medium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.300667'
source: obsidian
</code></pre>
<ul>
<li>← [[apolipoprotein_b_apob]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.100619'
source: obsidian
</code></pre>
<ul>
<li>← [[arachidonic_acid_epa_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.356432'
source: obsidian
</code></pre>
<ul>
<li>← [[hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.581046'
source: obsidian
</code></pre>
<ul>
<li>← [[hdl_large]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.665896'
source: obsidian
</code></pre>
<ul>
<li>← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.105921'
source: obsidian
</code></pre>
<ul>
<li>→ [[hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mediterranean_Diet]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:33.038221'
source: obsidian
</code></pre>
<ul>
<li>→ [[Thyroid_Dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cardiovascular_Disease]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[thyroid_dysfunction]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Metabolic_Syndrome]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Kidney_Stress_Pattern]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Inflammation]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[mean_platelet_volume_mpv]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_particle_number]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[hdl_large]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[apolipoprotein_b_apob]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_medium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_cholesterol_hdl_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_small]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[triglycerides]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[non_hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_peak_size]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[uric_acid]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[arachidonic_acid_epa_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[ldl_pattern]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ [[Thyroid_Dysfunction]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-25T19:20:04.835843'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cardiovascular_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← [[Chronic_Inflammation]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
</code></pre>
<ul>
<li>← [[Kidney_Stress_Pattern]] (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.334944'
source: obsidian
</code></pre>
<ul>
<li>← [[Metabolic_Syndrome]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.922538'
source: obsidian
</code></pre>
<ul>
<li>← [[Thyroid_Dysfunction]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[apolipoprotein_b_apob]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hdl_large]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_medium]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_particle_number]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_pattern]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_peak_size]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[ldl_small]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[non_hdl_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[total_cholesterol]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[total_cholesterol_hdl_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[triglycerides]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[arachidonic_acid_epa_ratio]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[mean_platelet_volume_mpv]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[uric_acid]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}