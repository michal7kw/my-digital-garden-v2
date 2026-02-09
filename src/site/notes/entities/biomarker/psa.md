---
created: '2026-02-09T05:54:31.705998Z'
description: Prostate-specific antigen is a serine protease produced by prostatic
  epithelial cells. It is the primary screening biomarker for prostate cancer, though
  elevations also occur in benign prostatic hyperplasia and prostatitis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/psa/
slug: psa
tags:
- biomarker
templateEngineOverride: njk
title: PSA
type: biomarker
updated: '2026-02-09T05:54:31.705998Z'
---

{% raw %}
<h1>PSA</h1>
<h2>Overview</h2>
<p>Prostate-specific antigen (PSA) is a serine protease glycoprotein produced almost exclusively by the epithelial cells of the prostate gland. It functions to liquefy semen after ejaculation, but small amounts normally leak into the bloodstream where it can be measured as a biomarker.</p>
<p>PSA is the primary screening biomarker for prostate cancer, though it lacks specificity because elevated levels also occur in benign prostatic hyperplasia (BPH), prostatitis, urinary tract infections, and after prostate manipulation. Age-specific reference ranges improve diagnostic accuracy, as PSA levels naturally increase with age and prostate volume.</p>
<p>The ratio of free PSA to total PSA (percent free PSA) helps distinguish between prostate cancer and benign conditions. A lower free-to-total ratio (&lt;10%) is more suggestive of cancer, while higher ratios (&gt;25%) suggest benign disease. PSA velocity (rate of change over time) and PSA density (PSA relative to prostate volume) provide additional diagnostic refinement.</p>
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
<td>&lt;1.0 ng/mL</td>
<td>Normal, low prostate cancer risk</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;4.0 ng/mL</td>
<td>Generally considered normal (age-dependent)</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;4.0 ng/mL</td>
<td>Warrants further evaluation; may indicate cancer, BPH, or prostatitis</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;2.5 ng/mL</td>
<td>Functional medicine optimal; lower risk threshold</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Blood (serum)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually for men over 50; earlier for high-risk populations</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[Saw Palmetto]] - May decrease PSA in men with BPH (mild, evidence level 3)</li>
<li>[[Lycopene]] - May reduce PSA levels in men with elevated PSA (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[prostate specific antigen psa total]] - Total PSA measurement</li>
<li>[[prostate specific antigen psa free]] - Free PSA for calculating free-to-total ratio</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ [[Testosterone Total]] (biomarker) - Testosterone influences prostate growth and PSA production</li>
<li>→ [[Testosterone Free]] (biomarker) - Free testosterone directly affects prostatic tissue</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:19118655 - Saw palmetto extract effects on PSA levels in BPH</li>
<li>PMID:25411333 - Lycopene supplementation and PSA reduction meta-analysis</li>
<li>PMID:26058024 - AUA/ASTRO/SUO guidelines on PSA-based screening</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[PSA]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}