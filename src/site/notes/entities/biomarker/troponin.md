---
created: '2026-02-13T18:17:33.456976Z'
description: Cardiac troponin (I and T) is the gold standard biomarker for detecting
  myocardial injury and diagnosing acute myocardial infarction.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/troponin/
slug: troponin
tags:
- biomarker
templateEngineOverride: njk
title: Troponin
type: biomarker
updated: '2026-02-13T18:17:33.456976Z'
---

{% raw %}
<h1>Troponin</h1>
<h2>Overview</h2>
<p>Cardiac troponin is a regulatory protein complex found in cardiac muscle cells that plays an essential role in the calcium-mediated regulation of cardiac contraction. There are two clinically relevant isoforms: cardiac troponin I (cTnI) and cardiac troponin T (cTnT). Because these isoforms are highly specific to the myocardium, their presence in the bloodstream serves as definitive evidence of myocardial cell injury.</p>
<p>High-sensitivity troponin (hs-Tn) assays can detect very small amounts of troponin in the blood, enabling earlier detection of myocardial infarction and improved risk stratification. Troponin is now the preferred biomarker for the diagnosis of acute myocardial infarction (MI) as part of the universal definition, replacing older markers such as CK-MB.</p>
<p>Troponin elevations are not exclusive to MI; they can also occur in myocarditis, pulmonary embolism, heart failure, sepsis, renal failure, and after strenuous exercise. The pattern of rise and fall (delta change) over serial measurements is critical for differentiating acute MI from chronic troponin elevation.</p>
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
<td>&lt;3 ng/L</td>
<td>Normal, no detectable myocardial injury</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;14 ng/L (hs-TnI and hs-TnT)</td>
<td>Within 99th percentile upper reference limit</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;14 ng/L with rising/falling pattern</td>
<td>Suggestive of acute myocardial injury</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;5 ng/L</td>
<td>Minimal cardiovascular risk</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/L</li>
<li><strong>Sample Type</strong>: Blood (serum or plasma)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed (serial measurements at 0, 3, and 6 hours in acute chest pain evaluation)</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> - May support cardiac function and reduce troponin release in heart failure (mild, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Cardioprotective effects may reduce low-grade troponin elevations (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/troponin-i/" class="internal-link">troponin i</a> - Cardiac troponin I measurement (high-sensitivity assay preferred)</li>
<li><a href="/garden/dev_admin/labtest/troponin-t-high-sensitivity/" class="internal-link">troponin t high sensitivity</a> - High-sensitivity cardiac troponin T measurement</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> (biomarker)</li>
<li>→ <a href="/garden/dev_admin/labtest/bnp/" class="internal-link">BNP</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> (biomarker) - Both elevated in myocardial injury; troponin more specific and sensitive</li>
<li>→ <a href="/garden/dev_admin/labtest/bnp/" class="internal-link">BNP</a> (biomarker) - Concurrent elevation suggests acute heart failure with myocardial injury</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - Inflammation may accompany troponin elevation in acute coronary syndromes</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:25282031 - Mortensen SA et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO. JACC Heart Fail. 2014.</li>
<li>PMID:31475379 - Manson JE et al. Marine n-3 fatty acids and prevention of cardiovascular disease and cancer. N Engl J Med. 2019.</li>
<li>PMID:29474816 - Thygesen K et al. Fourth Universal Definition of Myocardial Infarction (2018). Circulation. 2018.</li>
<li>PMID:32227580 - Nicholls SJ et al. Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events. JAMA. 2020.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Troponin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}