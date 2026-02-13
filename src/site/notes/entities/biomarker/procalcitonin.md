---
created: '2026-02-13T19:12:33.042055Z'
description: Procalcitonin is a precursor peptide of calcitonin that is markedly elevated
  in systemic bacterial infections and sepsis, serving as a key biomarker for distinguishing
  bacterial from viral infections and guiding antibiotic stewardship.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/procalcitonin/
slug: procalcitonin
tags:
- biomarker
templateEngineOverride: njk
title: Procalcitonin
type: biomarker
updated: '2026-02-13T19:12:33.042055Z'
---

{% raw %}
<h1>Procalcitonin</h1>
<h2>Overview</h2>
<p>Procalcitonin (PCT) is a 116-amino acid precursor peptide of the hormone calcitonin, normally produced in small amounts by the C-cells of the thyroid gland. Under physiological conditions, procalcitonin is almost entirely converted to calcitonin before release, resulting in undetectable or very low serum PCT levels. However, during systemic bacterial infections, virtually all tissues in the body (including liver, kidney, adipose tissue, and muscle) begin producing PCT in large quantities through a process independent of calcitonin production.</p>
<p>The induction of PCT during bacterial infection is mediated by bacterial lipopolysaccharides (endotoxin) and pro-inflammatory cytokines (IL-6, TNF-alpha, IL-1beta). Importantly, PCT production is attenuated by interferon-gamma, which is released during viral infections. This differential response makes PCT a valuable tool for distinguishing bacterial from viral etiologies.</p>
<p>Clinically, PCT is used to guide antibiotic initiation and discontinuation, particularly in lower respiratory tract infections and sepsis. PCT-guided antibiotic stewardship protocols have been shown to reduce antibiotic exposure without adversely affecting clinical outcomes. PCT levels also correlate with the severity of bacterial infection and can be used for prognostication in sepsis.</p>
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
<td>&lt;0.1 ng/mL</td>
<td>Bacterial infection very unlikely; consider viral etiology</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;0.25 ng/mL</td>
<td>Low risk for bacterial infection; antibiotics generally not recommended</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>0.25-0.5 ng/mL possible bacterial; &gt;0.5 ng/mL bacterial likely; &gt;2.0 ng/mL severe sepsis; &gt;10 ng/mL septic shock</td>
<td>Bacterial infection increasingly likely with higher levels</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;0.05 ng/mL</td>
<td>No active bacterial infection</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; serial measurements every 24-48 hours recommended for antibiotic stewardship</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No significant supplement interactions documented. Procalcitonin is primarily a marker of bacterial infection and is not meaningfully influenced by nutritional supplementation.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/procalcitonin/" class="internal-link">procalcitonin</a> - Procalcitonin immunoassay (BRAHMS PCT assay, chemiluminescence)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">White Blood Cell Count</a> (biomarker)</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/white-blood-cell-count/" class="internal-link">White Blood Cell Count</a> (biomarker) - Both elevated in bacterial infection; WBC less specific than PCT for bacterial vs viral differentiation</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - CRP rises in both bacterial and viral infections; PCT is more specific for bacterial etiology</li>
<li>→ <a href="/garden/dev_admin/labtest/interleukin-6/" class="internal-link">Interleukin 6</a> (biomarker) - IL-6 drives PCT production; IL-6 rises earlier but is less specific for bacterial infection</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:29320413 - Schuetz P et al. Effect of procalcitonin-guided antibiotic treatment on mortality in acute respiratory infections: a meta-analysis. Lancet Infect Dis. 2018.</li>
<li>PMID:28141960 - Vijayan AL et al. Procalcitonin: a promising diagnostic marker for sepsis and antibiotic therapy. J Intensive Care. 2017.</li>
<li>PMID:27044824 - de Jong E et al. Efficacy and safety of procalcitonin guidance in reducing duration of antibiotic treatment in critically ill patients. Lancet Infect Dis. 2016.</li>
<li>PMID:28236480 - Schuetz P et al. Procalcitonin to initiate or discontinue antibiotics in acute respiratory tract infections. Cochrane Database Syst Rev. 2017.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Procalcitonin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}