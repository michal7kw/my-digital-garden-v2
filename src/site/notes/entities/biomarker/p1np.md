---
created: '2026-02-09T08:04:39.952910Z'
description: Procollagen type I N-terminal propeptide is the most sensitive marker
  of bone formation. It is cleaved from type I collagen during bone synthesis and
  reflects osteoblast activity. Used to monitor osteoporosis treatment response and
  assess bone turnover.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/p1np/
slug: p1np
tags:
- biomarker
templateEngineOverride: njk
title: P1NP
type: biomarker
updated: '2026-02-09T08:04:39.952910Z'
---

{% raw %}
<h1>P1NP</h1>
<h2>Overview</h2>
<p>Procollagen type I N-terminal propeptide (P1NP) is a byproduct of type I collagen synthesis, which constitutes approximately 90% of the organic bone matrix. When osteoblasts synthesize new type I collagen, the procollagen molecule is cleaved at both ends, releasing N-terminal (P1NP) and C-terminal (P1CP) propeptides into the bloodstream. P1NP thus serves as a direct quantitative marker of bone formation rate.</p>
<p>P1NP is recommended by the International Osteoporosis Foundation (IOF) and the International Federation of Clinical Chemistry (IFCC) as the reference bone formation marker. It has several advantages over other formation markers: it is relatively stable in serum, shows low diurnal variation, is not affected by food intake, and has well-established reference ranges across age groups and sexes.</p>
<p>Clinically, P1NP is most valuable for monitoring response to osteoporosis treatments, particularly anabolic therapies (teriparatide, romosozumab) which increase P1NP, and anti-resorptive therapies (bisphosphonates, denosumab) which decrease P1NP. A significant change in P1NP (&gt;25% from baseline) at 3-6 months reliably predicts long-term treatment efficacy and fracture risk reduction.</p>
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
<td><strong>Premenopausal F</strong></td>
<td>15-59 mcg/L</td>
<td>Normal bone turnover</td>
</tr>
<tr>
<td><strong>Postmenopausal F</strong></td>
<td>20-76 mcg/L</td>
<td>Normal (higher due to bone loss)</td>
</tr>
<tr>
<td><strong>Men</strong></td>
<td>20-76 mcg/L</td>
<td>Normal bone turnover</td>
</tr>
<tr>
<td><strong>Elevated</strong></td>
<td>&gt;76 mcg/L</td>
<td>Increased bone formation (anabolic Tx, fracture healing, Paget's)</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mcg/L (or ng/mL)</li>
<li><strong>Sample Type</strong>: Blood (serum)</li>
<li><strong>Fasting Required</strong>: False (minimal diurnal variation)</li>
<li><strong>Recommended Test Frequency</strong>: Every 3-6 months during osteoporosis treatment</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> - Increases P1NP by supporting osteoblast function (moderate effect, evidence level 2)</li>
<li><a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a> - Supports bone formation when adequate (moderate effect, evidence level 2)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-k2/" class="internal-link">Vitamin K2</a> - Supports osteocalcin carboxylation and bone formation (mild effect, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Collagen Peptides</a> - May increase P1NP through providing collagen precursors (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>Total P1NP assay (Roche Elecsys) - Automated electrochemiluminescence immunoassay</li>
<li>Intact P1NP assay - Measures intact trimeric form only</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/osteocalcin/" class="internal-link">Osteocalcin</a> (biomarker) - Both are bone formation markers (complementary)</li>
<li>→ <a href="/garden/dev_admin/labtest/ctx/" class="internal-link">CTX</a> (biomarker) - Formation vs resorption; ratio indicates bone balance</li>
<li>→ <a href="/garden/dev_admin/biomarker/alkaline-phosphatase/" class="internal-link">Alkaline Phosphatase</a> (biomarker) - ALP partly reflects bone-specific formation</li>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> (biomarker) - Vitamin D status affects bone formation rate</li>
<li>→ <a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a> (biomarker) - Calcium homeostasis linked to bone turnover</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/osteoporosis/" class="internal-link">Osteoporosis</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/osteopenia/" class="internal-link">Osteopenia</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/pagets-disease/" class="internal-link">Paget's Disease</a> (condition)</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:21118827 - Vasikaran et al. (2011) IOF-IFCC bone turnover markers</li>
<li>PMID:24625729 - Szulc (2012) Use of P1NP in monitoring osteoporosis treatment</li>
<li>PMID:25516361 - Knapen et al. (2015) Vitamin K2 and bone health</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[P1NP]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}