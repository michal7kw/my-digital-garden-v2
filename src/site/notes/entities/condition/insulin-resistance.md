---
created: '2026-02-13T17:51:31.880569Z'
description: A physiological condition where cells fail to respond normally to the
  hormone insulin, leading to hyperinsulinemia and metabolic dysfunction.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/insulin-resistance/
slug: insulin-resistance
tags:
- condition
- metabolic
- endocrine
- glucose_metabolism
templateEngineOverride: njk
title: Insulin Resistance
type: condition
updated: '2026-02-13T17:51:31.880569Z'
---

{% raw %}
<h1>Insulin Resistance</h1>
<h2>Overview</h2>
<p>A physiological condition where cells fail to respond normally to the hormone insulin, leading to hyperinsulinemia and metabolic dysfunction.</p>
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
FROM [[Insulin Resistance]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">insulin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/leptin/" class="internal-link">leptin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">HOMA-IR</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fasting-insulin/" class="internal-link">Fasting_Insulin</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Type_2_Diabetes</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alpha-Lipoic_Acid</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">insulin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/leptin/" class="internal-link">leptin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">HOMA-IR</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fasting-insulin/" class="internal-link">Fasting_Insulin</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Type_2_Diabetes</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alpha-Lipoic_Acid</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/pancreas/" class="internal-link">Pancreas</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/muscle/" class="internal-link">Muscle</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/insulin-signaling/" class="internal-link">Insulin_Signaling</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
</code></pre>
<h3>Precursor To</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/pancreas/" class="internal-link">Pancreas</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/muscle/" class="internal-link">Muscle</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/insulin-signaling/" class="internal-link">Insulin_Signaling</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
</code></pre>
<h3>Related Pattern</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:42.706915'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Insulin Resistance]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Insulin Resistance]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fasting-insulin/" class="internal-link">Fasting_Insulin</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Type_2_Diabetes</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alpha-Lipoic_Acid</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/insulin-signaling/" class="internal-link">Insulin_Signaling</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">HOMA-IR</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:59.671283'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/leptin/" class="internal-link">leptin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.853821'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">insulin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.576387'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.915353'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.581046'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">insulin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/leptin/" class="internal-link">leptin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/pancreas/" class="internal-link">Pancreas</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/muscle/" class="internal-link">Muscle</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin_Resistance</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
</code></pre>
<h3>Improved By Supplement</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alpha-Lipoic_Acid</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Type_2_Diabetes</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fasting-insulin/" class="internal-link">Fasting_Insulin</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">HOMA-IR</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL_Cholesterol</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/leptin/" class="internal-link">leptin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">insulin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a> (labtest)</li>
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
<h3>Related Pattern</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:21.922538'
source: obsidian
</code></pre>
<h3>Modulated By Pathway</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/insulin-signaling/" class="internal-link">Insulin_Signaling</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>Affects Organ</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/muscle/" class="internal-link">Muscle</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/pancreas/" class="internal-link">Pancreas</a> (organ)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<h3>Precursor To</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}