---
created: '2026-02-13T19:27:03.557185Z'
description: Myeloperoxidase is a heme peroxidase enzyme released by activated neutrophils
  and monocytes. Elevated levels indicate oxidative stress and vascular inflammation,
  independently predicting acute coronary events and heart failure outcomes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/mpo/
slug: mpo
tags:
- biomarker
templateEngineOverride: njk
title: MPO
type: biomarker
updated: '2026-02-13T19:27:03.557185Z'
---

{% raw %}
<h1>MPO</h1>
<h2>Overview</h2>
<p>Myeloperoxidase (MPO) is a heme-containing enzyme stored in the azurophilic granules of neutrophils and monocytes. Upon leukocyte activation, MPO is released into the extracellular space where it catalyzes the formation of reactive oxidant species, particularly hypochlorous acid (HOCl), from hydrogen peroxide and chloride ions.</p>
<p>In the context of cardiovascular disease, MPO plays a central role in LDL oxidation, HDL dysfunction, and endothelial damage. It generates oxidized lipids that promote foam cell formation and directly impairs the cholesterol efflux capacity of HDL. MPO also consumes nitric oxide, contributing to endothelial dysfunction and vasoconstriction.</p>
<p>Clinically, elevated plasma MPO levels have been shown to predict risk of acute coronary syndromes in patients presenting with chest pain, even before troponin elevation occurs. It is particularly useful as an early marker of plaque vulnerability and has been associated with adverse outcomes in heart failure.</p>
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
<td><strong>Low Risk</strong></td>
<td>&lt;350 pmol/L</td>
<td>Low vascular oxidative stress</td>
</tr>
<tr>
<td><strong>Moderate Risk</strong></td>
<td>350-640 pmol/L</td>
<td>Moderate oxidative burden</td>
</tr>
<tr>
<td><strong>High Risk</strong></td>
<td>&gt;640 pmol/L</td>
<td>Significant vascular inflammation</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;350 pmol/L</td>
<td>Target for cardiovascular health</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: pmol/L</li>
<li><strong>Sample Type</strong>: Blood (plasma, EDTA tube)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually or as indicated for cardiovascular risk</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/nac/" class="internal-link">NAC</a> - May decrease MPO activity through antioxidant mechanisms (moderate effect, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-c/" class="internal-link">Vitamin C</a> - Scavenges MPO-derived oxidants (mild effect, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - May reduce neutrophil activation and MPO release (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>MPO blood test - Plasma myeloperoxidase measurement (CardioMPO assay)</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/oxidized-ldl/" class="internal-link">Oxidized LDL</a> (biomarker) - MPO directly oxidizes LDL particles</li>
<li>→ <a href="/garden/dev_admin/biomarker/lp-pla2/" class="internal-link">Lp-PLA2</a> (biomarker) - Both indicate vascular-specific inflammation</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - Complementary inflammatory markers</li>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">White Blood Cell Count</a> (biomarker) - MPO released from activated leukocytes</li>
<li>→ <a href="/garden/dev_admin/biomarker/troponin/" class="internal-link">Troponin</a> (biomarker) - MPO may rise before troponin in ACS</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/heart-failure/" class="internal-link">Heart Failure</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/atherosclerosis/" class="internal-link">Atherosclerosis</a> (condition)</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:16129825 - Brennan et al. (2003) MPO predicts coronary events in patients with chest pain</li>
<li>PMID:21896474 - Nicholls &amp; Hazen (2009) Myeloperoxidase and cardiovascular disease</li>
<li>PMID:19632115 - Heslop et al. (2010) MPO and C-reactive protein as predictors of cardiovascular risk</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[MPO]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}