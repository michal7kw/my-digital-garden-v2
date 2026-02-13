---
created: '2026-02-13T19:27:03.613141Z'
description: Oxidized LDL is low-density lipoprotein cholesterol that has undergone
  oxidative modification, serving as a key driver of atherosclerotic plaque formation
  and a more specific marker of cardiovascular risk than standard LDL cholesterol.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/oxidized-ldl/
slug: oxidized-ldl
tags:
- biomarker
templateEngineOverride: njk
title: Oxidized LDL
type: biomarker
updated: '2026-02-13T19:27:03.613141Z'
---

{% raw %}
<h1>Oxidized LDL</h1>
<h2>Overview</h2>
<p>Oxidized LDL (oxLDL) refers to low-density lipoprotein particles that have undergone oxidative modification of their lipid and protein components, primarily the polyunsaturated fatty acids in phospholipids and the apolipoprotein B-100 protein. This oxidation occurs predominantly within the arterial intima and is a pivotal event in the initiation and progression of atherosclerosis.</p>
<p>When LDL particles become trapped in the subendothelial space, they are exposed to reactive oxygen species produced by endothelial cells, smooth muscle cells, and macrophages. The resulting oxLDL is recognized by scavenger receptors (CD36, LOX-1, SR-A) on macrophages, leading to unregulated uptake and the formation of lipid-laden foam cells, which are the hallmark of early atherosclerotic lesions. OxLDL also promotes endothelial dysfunction, platelet aggregation, smooth muscle cell proliferation, and a pro-inflammatory milieu within the vessel wall.</p>
<p>Measuring oxLDL provides a more direct assessment of atherogenic risk than standard LDL cholesterol, as it reflects the biologically active, pathogenic form of LDL. Studies have shown that oxLDL is an independent predictor of coronary artery disease, acute coronary syndromes, and carotid atherosclerosis, even after adjusting for traditional lipid parameters.</p>
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
<td>&lt;40 U/L</td>
<td>Low oxidative modification of LDL</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;60 U/L</td>
<td>Acceptable level of LDL oxidation</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;60 U/L</td>
<td>Increased atherogenic risk from oxidized LDL</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;45 U/L</td>
<td>Minimal oxidative LDL burden</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: U/L</li>
<li><strong>Sample Type</strong>: Plasma (EDTA; samples must be processed promptly to prevent ex vivo oxidation)</li>
<li><strong>Fasting Required</strong>: True (12-hour fasting recommended)</li>
<li><strong>Recommended Test Frequency</strong>: Annually; more frequent if elevated or in patients with high cardiovascular risk</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/vitamin-e/" class="internal-link">Vitamin E</a> - Decreases oxLDL as the primary lipid-soluble antioxidant protecting LDL from oxidation (moderate, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> - Decreases oxLDL through direct antioxidant protection of LDL particles (mild, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-c/" class="internal-link">Vitamin C</a> - Decreases oxLDL by regenerating vitamin E and providing aqueous-phase antioxidant protection (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/oxidized-ldl/" class="internal-link">oxidized ldl</a> - OxLDL ELISA (Mercodia oxLDL assay; measures malondialdehyde-modified LDL)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/ldl/" class="internal-link">Ldl</a> (biomarker)</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/ldl/" class="internal-link">Ldl</a> (biomarker) - Higher total LDL increases the substrate available for oxidation; oxLDL is the biologically active atherogenic fraction</li>
<li>→ <a href="/garden/dev_admin/biomarker/ldl-p/" class="internal-link">Ldl P</a> (biomarker) - LDL particle number correlates with oxidation potential; small dense LDL particles are more susceptible to oxidation</li>
<li>→ <a href="/garden/dev_admin/labtest/apolipoprotein-b/" class="internal-link">Apolipoprotein B</a> (biomarker) - ApoB-100 is the protein component modified during LDL oxidation; both are atherogenic markers</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - OxLDL promotes vascular inflammation, reflected by elevated CRP</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:10871587 - Devaraj S et al. Alpha-tocopherol supplementation decreases serum C-reactive protein and monocyte interleukin-6 levels. Free Radic Biol Med. 2000.</li>
<li>PMID:11368702 - Upston JM et al. Tocopherol-mediated peroxidation of lipoproteins. Free Radic Biol Med. 2001.</li>
<li>PMID:29631560 - Jorat MV et al. The effects of coenzyme Q10 supplementation on lipid profiles: a systematic review and meta-analysis. Lipids Health Dis. 2018.</li>
<li>PMID:10799367 - Carr AC et al. Does vitamin C act as a pro-oxidant under physiological conditions? FASEB J. 2000.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Oxidized LDL]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}