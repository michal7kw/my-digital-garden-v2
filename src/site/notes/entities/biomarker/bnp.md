---
created: '2026-02-13T18:51:24.523652Z'
description: B-type Natriuretic Peptide is a hormone released by ventricular cardiomyocytes
  in response to increased wall stress from volume overload or pressure overload,
  serving as the primary biomarker for heart failure diagnosis and monitoring.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/bnp/
slug: bnp
tags:
- biomarker
templateEngineOverride: njk
title: BNP
type: biomarker
updated: '2026-02-13T18:51:24.523652Z'
---

{% raw %}
<h1>BNP</h1>
<h2>Overview</h2>
<p>B-type Natriuretic Peptide (BNP) is a 32-amino acid polypeptide hormone secreted primarily by the ventricular cardiomyocytes in response to myocardial wall stress caused by volume expansion or pressure overload. It is synthesized as a preprohormone (preproBNP), which is cleaved to proBNP and then to the biologically active BNP and the inactive N-terminal fragment (NT-proBNP).</p>
<p>BNP acts as a counter-regulatory hormone to the renin-angiotensin-aldosterone system (RAAS), promoting vasodilation, natriuresis, and diuresis. Its primary clinical utility is in the diagnosis, risk stratification, and monitoring of heart failure. BNP and NT-proBNP levels correlate with the severity of heart failure and left ventricular dysfunction.</p>
<p>Both BNP and NT-proBNP are used clinically, though they have different half-lives and reference ranges. NT-proBNP has a longer half-life (120 minutes vs 20 minutes for BNP) and is cleared by the kidneys, making it more affected by renal function. Elevated levels may also be seen in atrial fibrillation, pulmonary embolism, sepsis, and advanced age.</p>
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
<td>&lt;50 pg/mL (BNP)</td>
<td>Heart failure very unlikely</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;100 pg/mL (BNP); &lt;125 pg/mL NT-proBNP (&lt;75 yr)</td>
<td>Heart failure unlikely</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;400 pg/mL (BNP); &gt;450-1800 pg/mL NT-proBNP (age-dependent)</td>
<td>Heart failure likely</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;50 pg/mL (BNP); &lt;100 pg/mL (NT-proBNP)</td>
<td>Minimal cardiac wall stress</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: pg/mL</li>
<li><strong>Sample Type</strong>: Blood (EDTA plasma for BNP, serum or plasma for NT-proBNP)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; serial monitoring in established heart failure patients</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> - Decreases BNP in heart failure patients by improving myocardial energetics (moderate, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Hawthorn</a> - Limited evidence suggests mild BNP reduction in NYHA class I-III heart failure (mild, evidence level 2)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/bnp/" class="internal-link">bnp</a> - B-type natriuretic peptide immunoassay</li>
<li><a class="internal-link is-unresolved" href="/404">nt-probnp</a> - N-terminal pro-B-type natriuretic peptide measurement (longer half-life, renal clearance)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/troponin/" class="internal-link">Troponin</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/troponin/" class="internal-link">Troponin</a> (biomarker) - Concurrent elevation suggests acute heart failure with myocardial injury</li>
<li>→ <a href="/garden/dev_admin/labtest/creatinine/" class="internal-link">Creatinine</a> (biomarker) - NT-proBNP levels affected by renal clearance; must interpret in context of kidney function</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - Inflammatory state may contribute to cardiac decompensation</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:25282031 - Mortensen SA et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: Q-SYMBIO trial. JACC Heart Fail. 2014.</li>
<li>PMID:17482506 - Molyneux SL et al. Coenzyme Q10: an independent predictor of mortality in chronic heart failure. J Am Coll Cardiol. 2008.</li>
<li>PMID:18254076 - Pittler MH et al. Hawthorn extract for treating chronic heart failure. Cochrane Database Syst Rev. 2008.</li>
<li>PMID:15557542 - Maisel AS et al. Rapid measurement of B-type natriuretic peptide in the emergency diagnosis of heart failure. N Engl J Med. 2002.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[BNP]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}