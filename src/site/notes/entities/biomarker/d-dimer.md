---
created: '2026-02-13T19:27:03.403283Z'
description: D-Dimer is a fibrin degradation product released when cross-linked fibrin
  is broken down by plasmin, serving as a sensitive marker for the presence of intravascular
  clot formation and fibrinolysis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/d-dimer/
slug: d-dimer
tags:
- biomarker
templateEngineOverride: njk
title: D-Dimer
type: biomarker
updated: '2026-02-13T19:27:03.403283Z'
---

{% raw %}
<h1>D-Dimer</h1>
<h2>Overview</h2>
<p>D-Dimer is a small protein fragment produced when cross-linked fibrin is degraded by the fibrinolytic enzyme plasmin. Its presence in the blood indicates that both thrombin generation (clot formation) and plasmin-mediated fibrinolysis (clot breakdown) have occurred. D-Dimer is therefore a highly sensitive, though not specific, marker of thrombotic activity.</p>
<p>The primary clinical utility of D-Dimer testing lies in its high negative predictive value for venous thromboembolism (VTE). A normal D-Dimer level effectively rules out deep vein thrombosis (DVT) and pulmonary embolism (PE) in patients with low-to-moderate pre-test probability. However, D-Dimer is elevated in many non-thrombotic conditions, limiting its specificity.</p>
<p>D-Dimer levels are commonly elevated in pregnancy, post-surgical states, active cancer, infection, liver disease, atrial fibrillation, and advanced age. Age-adjusted D-Dimer cutoffs (age x 10 ng/mL for patients &gt;50 years) have been adopted to improve specificity in older populations. D-Dimer is also used in the diagnosis of disseminated intravascular coagulation (DIC) and for monitoring anticoagulant therapy response.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Low</strong></td>
<td>&lt;250 ng/mL FEU</td>
<td>Normal, VTE very unlikely</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;500 ng/mL FEU</td>
<td>Standard negative cutoff for VTE exclusion</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;500 ng/mL FEU</td>
<td>Requires further investigation; does not confirm VTE</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;250 ng/mL FEU</td>
<td>Minimal fibrinolytic activity</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL FEU (Fibrinogen Equivalent Units)</li>
<li><strong>Sample Type</strong>: Blood (citrated plasma)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed (acute evaluation for suspected VTE or DIC)</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Mild effect on coagulation parameters and D-Dimer levels (mild, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Nattokinase</a> - Fibrinolytic enzyme with direct effects on clot degradation and D-Dimer reduction (moderate, evidence level 2)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/biomarker/d-dimer/" class="internal-link">d-dimer</a> - Quantitative D-Dimer immunoassay (turbidimetric or ELISA)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fibrinogen/" class="internal-link">Fibrinogen</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/fibrinogen/" class="internal-link">Fibrinogen</a> (biomarker) - Both elevated in hypercoagulable states; fibrinogen is the precursor of fibrin from which D-Dimer is derived</li>
<li>→ <a href="/garden/dev_admin/biomarker/platelets/" class="internal-link">Platelets</a> (biomarker) - Platelet consumption may occur alongside elevated D-Dimer in DIC</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:19358878 - Hsia CH et al. Nattokinase decreases plasma levels of fibrinogen, factor VII, and factor VIII in human subjects. Nutr Res. 2009.</li>
<li>PMID:26740084 - Weng Y et al. Nattokinase: an oral antithrombotic agent. Clin Lab. 2017.</li>
<li>PMID:31475379 - Manson JE et al. Marine n-3 fatty acids and prevention of cardiovascular disease and cancer. N Engl J Med. 2019.</li>
<li>PMID:23337346 - Righini M et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism. JAMA. 2014.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[D-Dimer]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}