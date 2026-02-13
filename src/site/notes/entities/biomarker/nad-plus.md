---
created: '2026-02-13T17:51:31.438057Z'
description: Nicotinamide adenine dinucleotide is a critical coenzyme present in every
  cell, essential for cellular energy metabolism, DNA repair, sirtuin activity, and
  over 500 enzymatic reactions. NAD+ levels decline with age and are implicated in
  aging-related diseases.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/nad-plus/
slug: nad-plus
tags:
- biomarker
templateEngineOverride: njk
title: NAD Plus
type: biomarker
updated: '2026-02-13T17:51:31.438057Z'
---

{% raw %}
<h1>NAD Plus</h1>
<h2>Overview</h2>
<p>Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in all living cells that plays a central role in cellular metabolism. It exists in two forms: the oxidized form (NAD+) and the reduced form (NADH). NAD+ participates in over 500 enzymatic reactions and is essential for mitochondrial energy production, DNA repair via PARP enzymes, epigenetic regulation via sirtuins (SIRT1-7), and cellular signaling.</p>
<p>NAD+ levels decline significantly with age - by approximately 50% between ages 40 and 60. This decline is associated with mitochondrial dysfunction, impaired DNA repair, cellular senescence, and metabolic deterioration. Reduced NAD+ has been implicated in virtually every age-related disease including neurodegeneration, cardiovascular disease, metabolic syndrome, and cancer.</p>
<p>Research into NAD+ restoration has become one of the most active areas in longevity science. NAD+ precursors (NMN, NR, niacin) can effectively boost NAD+ levels. Clinical trials have shown that supplementation with NMN and NR increases blood NAD+ levels by 40-90%, with emerging evidence of functional benefits including improved muscle function, insulin sensitivity, and vascular health.</p>
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
<td>&lt;20 umol/L</td>
<td>Depleted; associated with aging/chronic disease</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>20-40 umol/L</td>
<td>Age-appropriate levels</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>40-60 umol/L</td>
<td>Youthful levels; target for longevity optimization</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;60 umol/L</td>
<td>Typically only seen with active supplementation</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: umol/L (whole blood)</li>
<li><strong>Sample Type</strong>: Blood (whole blood preferred)</li>
<li><strong>Fasting Required</strong>: True (morning fasting sample recommended)</li>
<li><strong>Recommended Test Frequency</strong>: Every 6-12 months for longevity tracking</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a> - Strongly increases NAD+ (40-90% elevation, evidence level 2)</li>
<li><a href="/garden/dev_admin/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide Riboside</a> - Strongly increases NAD+ (strong effect, evidence level 2)</li>
<li><a class="internal-link is-unresolved" href="/404">Niacin</a> - Increases NAD+ through the Preiss-Handler pathway (mild effect, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/resveratrol/" class="internal-link">Resveratrol</a> - Activates sirtuins that consume NAD+; synergistic with NAD+ boosters (evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>Jinfiniti IntracellularNAD Test - Intracellular NAD+ measurement</li>
<li><a href="/garden/dev_admin/labtest/truage-complete/" class="internal-link">truage complete</a> - May include NAD+ assessment in aging panel</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/grimage/" class="internal-link">GrimAge</a> (biomarker) - NAD+ depletion accelerates epigenetic aging</li>
<li>→ <a href="/garden/dev_admin/biomarker/glycanage/" class="internal-link">GlycanAge</a> (biomarker) - Both are aging biomarkers</li>
<li>→ <a href="/garden/dev_admin/labtest/glutathione/" class="internal-link">Glutathione</a> (biomarker) - NAD+ supports glutathione recycling</li>
<li>→ <a href="/garden/dev_admin/labtest/hba1c/" class="internal-link">HbA1c</a> (biomarker) - NAD+ influences glucose metabolism</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/aging/" class="internal-link">Aging</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/neurodegeneration/" class="internal-link">Neurodegeneration</a> (condition)</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:34238308 - Yoshino et al. (2021) NMN increases NAD+ in humans</li>
<li>PMID:29184669 - Martens et al. (2018) Chronic NR supplementation is well-tolerated and elevates NAD+</li>
<li>PMID:30069493 - Dollerup et al. (2018) NR augments NAD+ metabolome in overweight humans</li>
<li>PMID:36482258 - Yi et al. (2023) NMN supplementation in middle-aged adults</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[NAD Plus]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}