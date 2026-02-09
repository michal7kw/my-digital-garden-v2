---
created: '2026-02-09T05:40:20.646424Z'
description: Glutathione is the most abundant intracellular antioxidant, a tripeptide
  critical for detoxification, immune function, and protection against oxidative damage.
  Low levels are associated with chronic disease, aging, and increased oxidative stress.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glutathione/
slug: glutathione
tags:
- biomarker
templateEngineOverride: njk
title: Glutathione
type: biomarker
updated: '2026-02-09T05:40:20.646424Z'
---

{% raw %}
<h1>Glutathione</h1>
<h2>Overview</h2>
<p>Glutathione (GSH) is a tripeptide composed of glutamate, cysteine, and glycine that serves as the body's master antioxidant. It exists in reduced (GSH) and oxidized (GSSG) forms, and the GSH:GSSG ratio is a critical indicator of cellular redox status. Glutathione is synthesized intracellularly by virtually all cells, with the liver being the primary site of production and export.</p>
<p>Glutathione plays essential roles in multiple physiological processes including neutralization of reactive oxygen species and free radicals, phase II detoxification of xenobiotics and carcinogens via glutathione S-transferase conjugation, immune system modulation (particularly T-cell function and natural killer cell activity), amino acid transport across cell membranes, regeneration of other antioxidants (vitamins C and E), and DNA synthesis and repair.</p>
<p>Glutathione levels decline with aging and are depleted in numerous chronic conditions including neurodegenerative diseases (Parkinson's, Alzheimer's), liver disease, HIV/AIDS, type 2 diabetes, chronic kidney disease, and cancer. Environmental toxins, chronic infections, poor nutrition, and medications (such as acetaminophen) also deplete glutathione. Cysteine availability is the rate-limiting factor in glutathione synthesis, which is why N-acetylcysteine (NAC) effectively raises glutathione levels by providing this precursor amino acid.</p>
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
<td>&lt;200 umol/L</td>
<td>Depleted; increased oxidative stress and disease risk</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>200-300 umol/L</td>
<td>Adequate antioxidant capacity (whole blood)</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;300 umol/L</td>
<td>Robust antioxidant status</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>250-300 umol/L</td>
<td>Functional medicine optimal range</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: umol/L (whole blood); varies by assay type</li>
<li><strong>Sample Type</strong>: Whole blood (preferred) or plasma</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; retest 8-12 weeks after supplementation</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[NAC]] - Increases glutathione by providing rate-limiting cysteine precursor (moderate, evidence level 2)</li>
<li>[[Liposomal Glutathione]] - Directly increases glutathione levels via oral liposomal delivery (moderate, evidence level 3)</li>
<li>[[Alpha Lipoic Acid]] - Increases glutathione recycling by regenerating GSH from GSSG (mild, evidence level 3)</li>
<li>[[Vitamin C]] - Supports glutathione recycling and spares GSH consumption (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[glutathione]] - Total glutathione measurement (reduced + oxidized)</li>
<li>[[glutathione reduced]] - Reduced glutathione (GSH) specifically</li>
<li>[[gsh gssg ratio]] - Ratio of reduced to oxidized glutathione (redox status)</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ [[Vitamin D]] (biomarker) - Vitamin D supports glutathione synthesis gene expression</li>
<li>→ [[Homocysteine]] (biomarker) - Shared transsulfuration pathway; elevated homocysteine may indicate impaired glutathione synthesis</li>
<li>→ [[Ferritin]] (biomarker) - Iron overload increases oxidative stress and depletes glutathione</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:30513526 - NAC supplementation and glutathione levels in older adults</li>
<li>PMID:29559379 - Liposomal glutathione oral supplementation efficacy</li>
<li>PMID:29990473 - Alpha-lipoic acid and glutathione metabolism</li>
<li>PMID:12569111 - Vitamin C and glutathione recycling</li>
<li>PMID:24791687 - Glutathione in health and disease: pharmacological considerations</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Glutathione]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}