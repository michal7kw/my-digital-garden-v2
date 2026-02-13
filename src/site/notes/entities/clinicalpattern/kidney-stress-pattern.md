---
created: '2026-02-13T18:51:24.835481Z'
description: Impaired kidney function indicated by elevated creatinine, BUN, and reduced
  eGFR. Early detection enables intervention to slow progression.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/kidney-stress-pattern/
slug: kidney-stress-pattern
tags:
- clinicalpattern
- clinical_pattern
- renal
- kidney
- ckd
- filtration
templateEngineOverride: njk
title: Kidney Stress Pattern
type: clinicalpattern
updated: '2026-02-13T18:51:24.835481Z'
---

{% raw %}
<h1>Kidney Stress Pattern</h1>
<h2>Overview</h2>
<p>Kidney Stress Pattern identifies early kidney dysfunction through elevated creatinine, BUN, and reduced glomerular filtration rate (eGFR). Early detection and management can significantly slow progression to chronic kidney disease.</p>
<p>Evidence Level: 5/5 (KDIGO guideline-based criteria)<br />
Risk Multiplier: 2.0x for CKD progression and cardiovascular events</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>eGFR</strong>: Estimated glomerular filtration rate (&lt; 60 mL/min/1.73m2 indicates CKD stage 3+)</li>
<li><strong>Creatinine</strong>: Muscle metabolism byproduct (&gt; 1.2 mg/dL often elevated)</li>
<li><strong>BUN (Blood Urea Nitrogen)</strong>: Protein metabolism marker (&gt; 20 mg/dL may indicate renal stress)</li>
</ul>
<h2>CKD Staging by eGFR</h2>
<table>
<thead>
<tr>
<th>Stage</th>
<th>eGFR (mL/min/1.73m2)</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>≥90</td>
<td>Normal kidney function</td>
</tr>
<tr>
<td>2</td>
<td>60-89</td>
<td>Mildly decreased</td>
</tr>
<tr>
<td>3a</td>
<td>45-59</td>
<td>Mild to moderately decreased</td>
</tr>
<tr>
<td>3b</td>
<td>30-44</td>
<td>Moderately to severely decreased</td>
</tr>
<tr>
<td>4</td>
<td>15-29</td>
<td>Severely decreased</td>
</tr>
<tr>
<td>5</td>
<td>&lt;15</td>
<td>Kidney failure</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/protein/egfr/" class="internal-link">eGFR</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/creatinine/" class="internal-link">Creatinine</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/bun/" class="internal-link">BUN</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/chronic-kidney-disease/" class="internal-link">Chronic Kidney Disease</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Anemia</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Kidneys</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Heart</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Alpha-Lipoic Acid</a></li>
<li>RELATED_PATTERN::<a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a></li>
</ul>
<h2>References</h2>
<ul>
<li>KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013</li>
<li>Levey AS, Coresh J. Chronic Kidney Disease. Lancet. 2012</li>
</ul>

{% endraw %}