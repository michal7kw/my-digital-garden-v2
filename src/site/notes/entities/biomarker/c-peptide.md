---
created: '2026-02-13T14:55:28.219906Z'
description: C-Peptide is a 31-amino acid polypeptide cleaved from proinsulin during
  insulin biosynthesis, serving as a direct measure of endogenous insulin production
  by pancreatic beta cells.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/c-peptide/
slug: c-peptide
tags:
- biomarker
templateEngineOverride: njk
title: C-Peptide
type: biomarker
updated: '2026-02-13T14:55:28.219906Z'
---

{% raw %}
<h1>C-Peptide</h1>
<h2>Overview</h2>
<p>C-Peptide (connecting peptide) is a 31-amino acid polypeptide that is cleaved from proinsulin in the pancreatic beta cells during the enzymatic conversion of proinsulin to insulin. For every molecule of insulin produced, one molecule of C-Peptide is released in equimolar amounts into the portal circulation. This stoichiometric relationship makes C-Peptide a reliable surrogate marker for endogenous insulin secretion.</p>
<p>Unlike insulin, C-Peptide is not extracted by the liver during first-pass metabolism and has a longer half-life (approximately 30 minutes vs 5 minutes for insulin), resulting in more stable plasma levels. These pharmacokinetic properties make C-Peptide superior to direct insulin measurement for assessing beta cell function, particularly in patients receiving exogenous insulin therapy.</p>
<p>C-Peptide measurement is clinically valuable for differentiating Type 1 from Type 2 diabetes (low vs normal/high), evaluating residual beta cell function, identifying factitious hypoglycemia (exogenous insulin use will suppress C-Peptide), and diagnosing insulinomas (both C-Peptide and insulin will be elevated). Serial C-Peptide measurements can track the progression of beta cell decline in Type 1 diabetes and guide therapeutic decisions in Type 2 diabetes.</p>
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
<td>&lt;0.8 ng/mL (fasting)</td>
<td>Reduced beta cell function; consistent with Type 1 DM or late-stage Type 2 DM</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>0.8-3.1 ng/mL (fasting)</td>
<td>Adequate endogenous insulin production</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;3.1 ng/mL (fasting)</td>
<td>Insulin resistance, insulinoma, or early Type 2 DM with hyperinsulinemia</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>1.0-2.5 ng/mL (fasting)</td>
<td>Healthy beta cell function with good insulin sensitivity</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: True (fasting C-Peptide is standard; stimulated C-Peptide with glucagon also used)</li>
<li><strong>Recommended Test Frequency</strong>: As needed; at diagnosis to classify diabetes type; periodically to monitor beta cell function</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a> - May improve insulin secretion and beta cell function in Type 2 diabetes (mild increase, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a> - May improve insulin sensitivity and secondarily support insulin secretion (mild increase, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/biomarker/c-peptide/" class="internal-link">c-peptide</a> - Fasting C-Peptide immunoassay (chemiluminescence or ELISA)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">Insulin</a> (biomarker)</li>
<li>→ <a href="/garden/dev_admin/biomarker/insulin-fasting/" class="internal-link">Insulin Fasting</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/insulin/" class="internal-link">Insulin</a> (biomarker) - C-Peptide and insulin are co-secreted; C-Peptide reflects endogenous production without hepatic extraction interference</li>
<li>→ <a href="/garden/dev_admin/biomarker/insulin-fasting/" class="internal-link">Insulin Fasting</a> (biomarker) - Fasting C-Peptide correlates with fasting insulin in the absence of exogenous insulin therapy</li>
<li>→ <a href="/garden/dev_admin/labtest/hba1c/" class="internal-link">HbA1c</a> (biomarker) - Declining C-Peptide over time corresponds with worsening glycemic control</li>
<li>→ <a href="/garden/dev_admin/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a> (biomarker) - Low C-Peptide with high fasting glucose indicates absolute insulin deficiency</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:18442638 - Yin J et al. Efficacy of berberine in patients with type 2 diabetes mellitus. Metabolism. 2008.</li>
<li>PMID:25498346 - Dong H et al. Berberine in the treatment of type 2 diabetes mellitus: a systemic review and meta-analysis. Evid Based Complement Alternat Med. 2012.</li>
<li>PMID:17109600 - Balk EM et al. Effect of chromium supplementation on glucose metabolism and lipids. Diabetes Care. 2007.</li>
<li>PMID:24635480 - Suksomboon N et al. Systematic review and meta-analysis of the efficacy and safety of chromium supplementation in diabetes. J Clin Pharm Ther. 2014.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[C-Peptide]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}