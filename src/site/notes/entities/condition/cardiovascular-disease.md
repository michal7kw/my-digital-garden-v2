---
created: '2026-02-13T18:51:25.003277Z'
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
updated: '2026-02-13T18:51:25.003277Z'
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
<li>← <a href="/garden/dev_admin/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-large/" class="internal-link">hdl_large</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-medium/" class="internal-link">ldl_medium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-small/" class="internal-link">ldl_small</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">triglycerides</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a> (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:40.032727'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:42.706915'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-large/" class="internal-link">hdl_large</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-medium/" class="internal-link">ldl_medium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-small/" class="internal-link">ldl_small</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">triglycerides</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:52.934046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
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
<li>← <a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.218776'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a> (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.486140'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.406769'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">triglycerides</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.151970'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.993626'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.896437'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.721942'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.181105'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-small/" class="internal-link">ldl_small</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.657574'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.569821'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.480705'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.401389'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-medium/" class="internal-link">ldl_medium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.300667'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.100619'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.356432'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.581046'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-large/" class="internal-link">hdl_large</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.665896'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.105921'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:33.038221'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-large/" class="internal-link">hdl_large</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-medium/" class="internal-link">ldl_medium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-small/" class="internal-link">ldl_small</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">triglycerides</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-25T19:20:04.835843'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.806764'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a> (clinicalpattern)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.334944'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.922538'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-large/" class="internal-link">hdl_large</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-medium/" class="internal-link">ldl_medium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ldl-small/" class="internal-link">ldl_small</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">triglycerides</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric_acid</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}