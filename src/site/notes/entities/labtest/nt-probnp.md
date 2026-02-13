---
created: '2026-02-13T19:27:05.510680Z'
description: N-terminal pro-B-type Natriuretic Peptide (NT-proBNP) test. Inactive
  fragment released during BNP synthesis. More stable than BNP with age-dependent
  cutoffs. Preferred for monitoring patients on sacubitril/valsartan therapy.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/labtest/nt-probnp/
slug: nt-probnp
tags:
- labtest
templateEngineOverride: njk
title: nt_probnp
type: labtest
updated: '2026-02-13T19:27:05.510680Z'
---

{% raw %}
<h1>NT-proBNP</h1>
<h2>Overview</h2>
<p>N-terminal pro-B-type Natriuretic Peptide (NT-proBNP) is a 76-amino acid inactive fragment that is cleaved from the proBNP precursor molecule alongside the biologically active BNP. Because NT-proBNP is not cleared by neprilysin (unlike BNP), it has a significantly longer half-life of approximately 120 minutes compared to BNP's 20 minutes, resulting in circulating levels that are 3-5 times higher than BNP and more stable for laboratory measurement.</p>
<p>NT-proBNP is widely used for the diagnosis, prognosis, and management of heart failure. The test employs age-stratified diagnostic cutoffs: values below 125 pg/mL for patients under 75 years and below 450 pg/mL for patients over 75 years are used to rule out heart failure. For acute heart failure diagnosis, higher age-stratified thresholds apply: 450 pg/mL (&lt;50 years), 900 pg/mL (50-75 years), and 1800 pg/mL (&gt;75 years).</p>
<p>NT-proBNP is the preferred natriuretic peptide assay for patients receiving sacubitril/valsartan (Entresto), as this drug inhibits neprilysin and elevates BNP levels but does not affect NT-proBNP. NT-proBNP is cleared primarily by renal excretion, so levels are significantly affected by kidney function and must be interpreted in the context of estimated glomerular filtration rate.</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐ (3/5)</p>
<h2>Test Information</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Category</strong></td>
<td>Cardiac Panel</td>
</tr>
<tr>
<td><strong>Test Type</strong></td>
<td>Specialized</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood</td>
</tr>
<tr>
<td><strong>Collection Method</strong></td>
<td>Venipuncture</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>HSA Eligible</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>FSA Eligible</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
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
<td><strong>Normal (age &lt;75)</strong></td>
<td>&lt;125 pg/mL</td>
<td>Heart failure unlikely</td>
</tr>
<tr>
<td><strong>Normal (age &gt;75)</strong></td>
<td>&lt;450 pg/mL</td>
<td>Heart failure unlikely (age-adjusted)</td>
</tr>
<tr>
<td><strong>Acute HF cutoff (&lt;50y)</strong></td>
<td>&gt;450 pg/mL</td>
<td>Suggestive of acute heart failure</td>
</tr>
<tr>
<td><strong>Acute HF cutoff (50-75y)</strong></td>
<td>&gt;900 pg/mL</td>
<td>Suggestive of acute heart failure</td>
</tr>
<tr>
<td><strong>Acute HF cutoff (&gt;75y)</strong></td>
<td>&gt;1800 pg/mL</td>
<td>Suggestive of acute heart failure</td>
</tr>
</tbody>
</table>
<h2>Recommended For</h2>
<h3>Conditions</h3>
<p>Useful for monitoring or diagnosing:</p>
<ul>
<li><a href="/garden/dev_admin/condition/heart-failure/" class="internal-link">Heart Failure</a></li>
<li><a class="internal-link is-unresolved" href="/404">Cardiomyopathy</a></li>
<li><a href="/garden/dev_admin/phenotype/dyspnea/" class="internal-link">Dyspnea</a></li>
<li><a href="/garden/dev_admin/condition/atrial-fibrillation/" class="internal-link">Atrial Fibrillation</a></li>
</ul>
<h2>Relationships</h2>
<h3>Measures</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bnp/" class="internal-link">BNP</a> (biomarker)</li>
</ul>
<h3>Included In</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtestpanel/cardiac-biomarker-panel/" class="internal-link">cardiac biomarker panel</a> (labtestpanel)</li>
</ul>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>NT-proBNP is preferred over BNP for patients on sacubitril/valsartan (Entresto)</li>
<li>Renal impairment significantly elevates NT-proBNP levels; adjust interpretation for eGFR</li>
<li>Obesity can lower natriuretic peptide levels</li>
<li>Useful for guided heart failure management (targeting &gt;30% reduction from baseline)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-02-07</em></p>

{% endraw %}