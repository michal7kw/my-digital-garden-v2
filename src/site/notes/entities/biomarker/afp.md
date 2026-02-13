---
created: '2026-02-13T14:57:55.755695Z'
description: Alpha-fetoprotein is a major fetal plasma protein that serves as a tumor
  marker for hepatocellular carcinoma and certain germ cell tumors. Elevated levels
  in non-pregnant adults suggest hepatic malignancy, testicular cancer, or liver disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/afp/
slug: afp
tags:
- biomarker
templateEngineOverride: njk
title: AFP
type: biomarker
updated: '2026-02-13T14:57:55.755695Z'
---

{% raw %}
<h1>AFP</h1>
<h2>Overview</h2>
<p>Alpha-fetoprotein (AFP) is a glycoprotein produced by the fetal yolk sac and liver during embryonic development. It is the predominant serum protein in the fetus, analogous to albumin in adults. After birth, AFP levels decline rapidly and reach normal adult levels by 1-2 years of age.</p>
<p>In clinical practice, AFP serves as a critical tumor marker for hepatocellular carcinoma (HCC) and non-seminomatous germ cell tumors (testicular and ovarian). For HCC, AFP is used in conjunction with ultrasound for surveillance in high-risk populations, including patients with cirrhosis and chronic hepatitis B or C. In testicular cancer, AFP is part of the standard tumor marker panel alongside beta-hCG and LDH.</p>
<p>AFP can be mildly to moderately elevated in non-malignant conditions including acute and chronic hepatitis, cirrhosis, liver regeneration, and pregnancy. In obstetrics, maternal serum AFP is measured as part of prenatal screening, where abnormal levels may indicate neural tube defects (elevated) or chromosomal abnormalities (decreased). The AFP-L3 fraction (lens culinaris-reactive AFP) improves specificity for hepatocellular carcinoma versus benign liver disease.</p>
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
<td>&lt;5 ng/mL</td>
<td>Normal adult range</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;10 ng/mL</td>
<td>Upper limit of normal for adults</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>10-400 ng/mL</td>
<td>May indicate hepatitis, cirrhosis, or early malignancy</td>
</tr>
<tr>
<td><strong>Very High</strong></td>
<td>&gt;400 ng/mL</td>
<td>Strongly suggestive of HCC or germ cell tumor</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;7 ng/mL</td>
<td>Functional medicine optimal</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Blood (serum)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Every 6 months for HCC surveillance in high-risk patients</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No significant supplement interactions with AFP levels have been established in clinical literature.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/afp/" class="internal-link">afp</a> - Alpha-fetoprotein measurement</li>
<li><a class="internal-link is-unresolved" href="/404">afp l3</a> - AFP-L3 fraction for improved HCC specificity</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/cea/" class="internal-link">CEA</a> (biomarker) - Co-measured tumor marker for GI malignancies</li>
<li>→ <a href="/garden/dev_admin/biomarker/alanine-transaminase/" class="internal-link">Alanine Transaminase</a> (biomarker) - Liver function context for AFP interpretation</li>
<li>→ <a href="/garden/dev_admin/biomarker/gamma-glutamyl-transferase/" class="internal-link">Gamma-Glutamyl Transferase</a> (biomarker) - Liver disease marker used alongside AFP</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:29307414 - AASLD guidelines for HCC surveillance using AFP</li>
<li>PMID:25123274 - AFP and AFP-L3 in hepatocellular carcinoma diagnosis</li>
<li>PMID:27374108 - AFP in germ cell tumor management</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[AFP]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}