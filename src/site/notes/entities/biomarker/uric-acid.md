---
created: '2026-02-13T19:12:33.095243Z'
description: Uric acid is the final oxidation product of purine metabolism in humans,
  serving as both an antioxidant at physiological levels and a pathological mediator
  when elevated, contributing to gout, kidney stones, and cardiovascular disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/uric-acid/
slug: uric-acid
tags:
- biomarker
templateEngineOverride: njk
title: Uric Acid
type: biomarker
updated: '2026-02-13T19:12:33.095243Z'
---

{% raw %}
<h1>Uric Acid</h1>
<h2>Overview</h2>
<p>Uric acid is the final breakdown product of purine metabolism in humans. Unlike most mammals, humans lack the enzyme uricase (urate oxidase), which means uric acid cannot be further metabolized and must be excreted primarily through the kidneys (approximately 70%) and the gastrointestinal tract (approximately 30%). This evolutionary loss of uricase results in higher baseline uric acid levels in humans compared to other species.</p>
<p>At physiological concentrations, uric acid serves as one of the most important extracellular antioxidants, accounting for approximately 50% of the antioxidant capacity of blood. However, when uric acid levels exceed the saturation threshold (approximately 6.8 mg/dL), monosodium urate crystals can precipitate in joints, kidneys, and soft tissues, leading to gout, urate nephropathy, and kidney stones.</p>
<p>Hyperuricemia is also an independent risk factor for cardiovascular disease, hypertension, chronic kidney disease, metabolic syndrome, and type 2 diabetes. The relationship between uric acid and cardiovascular risk is thought to involve endothelial dysfunction, oxidative stress, and activation of the renin-angiotensin system. Conversely, very low uric acid levels may indicate reduced antioxidant capacity, as seen in conditions affecting purine metabolism.</p>
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
<td>&lt;3.0 mg/dL (M); &lt;2.0 mg/dL (F)</td>
<td>Possible oxidative stress vulnerability, hypouricemia</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>3.5-7.2 mg/dL (M); 2.6-6.0 mg/dL (F)</td>
<td>Physiological range</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;7.2 mg/dL (M); &gt;6.0 mg/dL (F)</td>
<td>Hyperuricemia; increased risk for gout and kidney stones</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>4.0-5.5 mg/dL (M); 3.0-4.5 mg/dL (F)</td>
<td>Balanced antioxidant function without crystal risk</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mg/dL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: True (fasting preferred; diet strongly influences levels)</li>
<li><strong>Recommended Test Frequency</strong>: Annually; more frequent monitoring in gout or kidney disease</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/vitamin-c/" class="internal-link">Vitamin C</a> - Decreases uric acid by promoting uricosuric renal excretion (moderate, evidence level 2)</li>
<li><a class="internal-link is-unresolved" href="/404">Cherry Extract</a> - Decreases uric acid through xanthine oxidase inhibition and anti-inflammatory effects (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/uric-acid/" class="internal-link">uric acid</a> - Serum uric acid enzymatic colorimetric assay</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/creatinine/" class="internal-link">Creatinine</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/creatinine/" class="internal-link">Creatinine</a> (biomarker) - Both elevated in renal impairment; uric acid clearance depends on kidney function</li>
<li>→ <a href="/garden/dev_admin/biomarker/estimated-gfr/" class="internal-link">Estimated GFR</a> (biomarker) - Declining GFR leads to reduced uric acid excretion and hyperuricemia</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:21671418 - Juraschek SP et al. Effect of oral vitamin C supplementation on serum uric acid: a meta-analysis of randomized controlled trials. Arthritis Care Res. 2011.</li>
<li>PMID:15934094 - Huang HY et al. The effects of vitamin C supplementation on serum concentrations of uric acid. Arthritis Rheum. 2005.</li>
<li>PMID:23023818 - Zhang Y et al. Cherry consumption and decreased risk of recurrent gout attacks. Arthritis Rheum. 2012.</li>
<li>PMID:31159913 - Schlesinger N. Dietary factors and hyperuricemia. Curr Pharm Des. 2019.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Uric Acid]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}