---
created: '2026-02-13T19:12:33.063885Z'
description: Trimethylamine N-oxide is a gut microbiome-derived metabolite produced
  from dietary choline, betaine, and L-carnitine. Elevated levels are strongly associated
  with increased cardiovascular disease risk, atherosclerosis, and thrombotic events.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/tmao/
slug: tmao
tags:
- biomarker
templateEngineOverride: njk
title: TMAO
type: biomarker
updated: '2026-02-13T19:12:33.063885Z'
---

{% raw %}
<h1>TMAO</h1>
<h2>Overview</h2>
<p>Trimethylamine N-oxide (TMAO) is a metabolite produced through a two-step process: gut bacteria convert dietary nutrients (choline, betaine, L-carnitine) into trimethylamine (TMA), which is then oxidized to TMAO by hepatic flavin monooxygenase 3 (FMO3) in the liver.</p>
<p>TMAO has emerged as a significant cardiovascular risk biomarker. Elevated levels promote atherosclerosis by enhancing cholesterol accumulation in macrophages, increasing platelet reactivity, and promoting vascular inflammation. Multiple large prospective studies have demonstrated that elevated TMAO independently predicts major adverse cardiovascular events (MACE), even after adjusting for traditional risk factors.</p>
<p>The clinical significance of TMAO lies in its connection between diet, gut microbiome composition, and cardiovascular health. It represents a modifiable risk factor through dietary intervention (reducing red meat and egg consumption) and microbiome-targeted therapies.</p>
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
<td>&lt;2.0 umol/L</td>
<td>Lower cardiovascular risk</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>2.0-6.2 umol/L</td>
<td>Average risk</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;6.2 umol/L</td>
<td>Elevated cardiovascular risk</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;3.0 umol/L</td>
<td>Functional medicine target</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: umol/L</li>
<li><strong>Sample Type</strong>: Blood (plasma)</li>
<li><strong>Fasting Required</strong>: True (12-hour fast recommended)</li>
<li><strong>Recommended Test Frequency</strong>: Annually for cardiovascular risk assessment</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/probiotics/" class="internal-link">Probiotics</a> - May decrease TMAO by modulating gut microbiome composition (moderate effect, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/resveratrol/" class="internal-link">Resveratrol</a> - May decrease TMAO via gut microbiome modulation (mild effect, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> - May reduce TMAO through gut bacteria modification (moderate effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/metabolon-global/" class="internal-link">metabolon global</a> - Includes TMAO in comprehensive metabolomics panel</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - Both elevated in cardiovascular inflammation</li>
<li>→ <a href="/garden/dev_admin/labtest/apolipoprotein-b/" class="internal-link">Apolipoprotein B</a> (biomarker) - Synergistic cardiovascular risk when both elevated</li>
<li>→ <a href="/garden/dev_admin/labtest/oxidized-ldl/" class="internal-link">Oxidized LDL</a> (biomarker) - TMAO promotes LDL oxidation</li>
<li>→ <a href="/garden/dev_admin/metabolite/homocysteine/" class="internal-link">Homocysteine</a> (biomarker) - Both involve methylation pathway metabolites</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/atherosclerosis/" class="internal-link">Atherosclerosis</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a> (condition)</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:23563705 - Tang et al. (2013) Intestinal microbial metabolism of phosphatidylcholine and cardiovascular risk</li>
<li>PMID:28060131 - Li et al. (2017) Gut microbiota-dependent TMAO pathway contributes to arterial thrombosis</li>
<li>PMID:31581379 - Qiu et al. (2018) Effects of probiotics on TMAO levels</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[TMAO]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}