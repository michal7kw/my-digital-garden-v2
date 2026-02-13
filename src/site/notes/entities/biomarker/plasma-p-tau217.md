---
created: '2026-02-13T18:17:33.371513Z'
description: The most accurate blood-based biomarker for Alzheimer's disease, showing
  >95% accuracy in detecting AD pathology. Represents a paradigm shift enabling accessible,
  non-invasive AD diagnosis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/plasma-p-tau217/
slug: plasma-p-tau217
tags:
- biomarker
- blood-test
- alzheimers
- tau
- cutting-edge
- screening
templateEngineOverride: njk
title: Plasma p-tau217
type: biomarker
updated: '2026-02-13T18:17:33.371513Z'
---

{% raw %}
<h1>Plasma p-tau217</h1>
<h2>Overview</h2>
<p>Plasma phospho-tau217 (p-tau217) has emerged as the most accurate blood-based biomarker for Alzheimer's disease, with diagnostic performance approaching that of CSF biomarkers and amyloid PET. This represents a potential paradigm shift in AD diagnosis, enabling accessible, cost-effective screening and diagnosis without invasive lumbar puncture or expensive PET imaging.</p>
<h2>Why p-tau217 Over p-tau181?</h2>
<h3>Superior Performance</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>p-tau217</th>
<th>p-tau181</th>
</tr>
</thead>
<tbody>
<tr>
<td>AUC for AD vs controls</td>
<td>0.96-0.98</td>
<td>0.85-0.92</td>
</tr>
<tr>
<td>Amyloid PET concordance</td>
<td>91-96%</td>
<td>85-90%</td>
</tr>
<tr>
<td>Dynamic range</td>
<td>10-20 fold</td>
<td>2-3 fold</td>
</tr>
<tr>
<td>Earliest detection</td>
<td>~20 years before symptoms</td>
<td>~15 years</td>
</tr>
</tbody>
</table>
<h3>Biological Basis</h3>
<ul>
<li>Threonine 217 phosphorylation increases more dramatically in AD</li>
<li>More specific to tau/amyloid copathology</li>
<li>Greater fold-change from normal to pathological</li>
</ul>
<h2>Landmark Validation Studies</h2>
<h3>TRIAD Study (2020, JAMA)</h3>
<ul>
<li>490 participants across AD continuum</li>
<li>AUC 0.98 for distinguishing Aβ+ from Aβ-</li>
<li>Outperformed CSF p-tau181 and plasma NfL</li>
</ul>
<h3>Swedish BioFINDER Studies (2020-2024)</h3>
<ul>
<li>
<blockquote>
<p>1,000 participants with autopsy/PET confirmation</p>
</blockquote>
</li>
<li>96% concordance with amyloid PET</li>
<li>Predicts future cognitive decline and conversion</li>
</ul>
<h3>Eli Lilly/TRAILBLAZER Studies</h3>
<ul>
<li>Validated across anti-amyloid therapy trials</li>
<li>Tracks treatment response</li>
<li>FDA submission supporting donanemab</li>
</ul>
<h2>Clinical Performance</h2>
<h3>Diagnostic Accuracy</h3>
<table>
<thead>
<tr>
<th>Comparison</th>
<th>AUC</th>
<th>Sensitivity</th>
<th>Specificity</th>
</tr>
</thead>
<tbody>
<tr>
<td>AD dementia vs cognitively normal</td>
<td>0.96-0.98</td>
<td>91-95%</td>
<td>90-96%</td>
</tr>
<tr>
<td>MCI due to AD vs non-AD MCI</td>
<td>0.92-0.95</td>
<td>88-92%</td>
<td>85-92%</td>
</tr>
<tr>
<td>Amyloid PET positive vs negative</td>
<td>0.94-0.97</td>
<td>90-95%</td>
<td>88-95%</td>
</tr>
</tbody>
</table>
<h3>When p-tau217 is Most Useful</h3>
<ol>
<li>Screening for amyloid positivity before PET</li>
<li>Confirming AD etiology in cognitive impairment</li>
<li>Determining eligibility for anti-amyloid therapy</li>
<li>Population screening for clinical trials</li>
</ol>
<h2>Available Platforms</h2>
<h3>Commercial/Near-Commercial (as of 2025)</h3>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Manufacturer</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>ALZpath pTau217</td>
<td>ALZpath</td>
<td>LDT available</td>
</tr>
<tr>
<td>Lumipulse p-tau217</td>
<td>Fujirebio</td>
<td>CE-marked, FDA pending</td>
</tr>
<tr>
<td>Elecsys p-tau217</td>
<td>Roche</td>
<td>In development</td>
</tr>
<tr>
<td>p-tau217/np-tau217 ratio</td>
<td>Janssen</td>
<td>Research</td>
</tr>
</tbody>
</table>
<h3>Key Cutoffs (Platform-Specific)</h3>
<ul>
<li>ALZpath: ~0.42 pg/mL (amyloid positivity)</li>
<li>Two-cutoff approach: Low/intermediate/high probability</li>
<li>Intermediate zone: Consider confirmatory PET</li>
</ul>
<h2>Integration into Clinical Practice</h2>
<h3>Proposed Algorithms (2025)</h3>
<pre><code>Cognitive Symptoms
       ↓
Plasma p-tau217
       ↓
   ┌───┴───┐
   Low     High
   ↓       ↓
Unlikely   Likely AD
AD         ↓
           Consider:
           - Amyloid PET confirmation
           - Anti-amyloid therapy eligibility
           - Clinical trial enrollment
</code></pre>
<h3>Two-Cutoff Strategy</h3>
<table>
<thead>
<tr>
<th>Result</th>
<th>p-tau217 Level</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>Negative</td>
<td>&lt;Low cutoff</td>
<td>Amyloid unlikely; seek other causes</td>
</tr>
<tr>
<td>Intermediate</td>
<td>Between cutoffs</td>
<td>Confirmatory testing (PET/CSF)</td>
</tr>
<tr>
<td>Positive</td>
<td>&gt;High cutoff</td>
<td>Amyloid highly likely</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/blood-nfl/" class="internal-link">Blood_NfL</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:12.002350'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Plasma_A4240_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Amyloid-Beta_4240_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Preclinical_AD</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/retinal-imaging-for-neurodegeneration/" class="internal-link">Retinal_Imaging_for_Neurodegeneration</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alzheimers_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neuron-derived-exosome-biomarkers/" class="internal-link">Neuron-Derived_Exosome_Biomarkers</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/mtbr-tau243/" class="internal-link">MTBR-tau243</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-amyloid-beta-ratio/" class="internal-link">Plasma_Amyloid-Beta_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid_PET_Imaging</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Lecanemab</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Preclinical_AD</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Donanemab</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Plasma_A4240_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid_PET_Imaging</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimers_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/plasma-amyloid-beta-ratio/" class="internal-link">Plasma_Amyloid-Beta_Ratio</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/neuron-derived-exosome-biomarkers/" class="internal-link">Neuron-Derived_Exosome_Biomarkers</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.353378'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/mtbr-tau243/" class="internal-link">MTBR-tau243</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.924796'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/blood-nfl/" class="internal-link">Blood_NfL</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:10.597897'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/retinal-imaging-for-neurodegeneration/" class="internal-link">Retinal_Imaging_for_Neurodegeneration</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.549973'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/phospho-tau/" class="internal-link">Phospho-Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta_4240_Ratio</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Highest accuracy biomarker</em></li>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a> (condition) - <em>Predicts conversion</em></li>
<li>→ <a href="/garden/dev_admin/condition/preclinical-ad/" class="internal-link">Preclinical AD</a> (condition) - <em>Early detection</em></li>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal Dementia</a> (condition) - <em>Helps differentiate (normal in FTD)</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta 42/40 Ratio</a> (biomarker) - <em>CSF/plasma amyloid</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/phospho-tau/" class="internal-link">Phospho-Tau</a> (biomarker) - <em>CSF gold standard</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Neurodegeneration</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-a4240-ratio/" class="internal-link">Plasma Aβ42/40 Ratio</a> (biomarker) - <em>Complementary</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker) - <em>Astrocyte marker</em></li>
</ul>
<h3>Examinations</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid PET Imaging</a> (examination) - <em>Confirmatory imaging</em></li>
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar Puncture</a> (examination) - <em>CSF alternative</em></li>
</ul>
<h3>Therapeutics</h3>
<ul>
<li>→ <a href="/garden/dev_admin/drug/lecanemab/" class="internal-link">Lecanemab</a> (drug) - <em>Eligibility screening</em></li>
<li>→ <a href="/garden/dev_admin/drug/donanemab/" class="internal-link">Donanemab</a> (drug) - <em>Eligibility screening</em></li>
</ul>
<h2>Advantages and Limitations</h2>
<h3>Advantages</h3>
<ul>
<li>Blood draw (minimally invasive)</li>
<li>High accuracy (~95%)</li>
<li>Cost-effective ($200-400 vs $5,000 PET)</li>
<li>Scalable for population screening</li>
<li>Tracks treatment response</li>
</ul>
<h3>Current Limitations</h3>
<ul>
<li>Cutoffs still being established</li>
<li>Platform-to-platform variability</li>
<li>Intermediate zone requires confirmation</li>
<li>FDA approval pending for most platforms</li>
<li>Reimbursement uncertain</li>
</ul>
<h2>Sample Considerations</h2>
<h3>Pre-analytical Factors</h3>
<ul>
<li>Standard K2-EDTA tubes</li>
<li>Process within 4-8 hours</li>
<li>-80°C storage for long-term</li>
<li>Avoid hemolysis</li>
<li>Fasting not required</li>
</ul>
<h3>Stability</h3>
<ul>
<li>More stable than Aβ42/40 in blood</li>
<li>Relatively robust to handling variations</li>
<li>Freeze-thaw cycles minimally affect results</li>
</ul>
<h2>Future Directions</h2>
<h3>Combination Panels</h3>
<ul>
<li>p-tau217 + Aβ42/40 ratio + NfL</li>
<li>Multi-marker algorithms</li>
<li>Machine learning optimization</li>
</ul>
<h3>Point-of-Care Testing</h3>
<ul>
<li>Goal: Rapid, in-clinic testing</li>
<li>Lateral flow or similar technology</li>
<li>Still in development</li>
</ul>
<h3>Population Screening</h3>
<ul>
<li>Potential for 65+ screening</li>
<li>Cost-effectiveness models favorable</li>
<li>Implementation considerations ongoing</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>JAMA Validation</strong>: Palmqvist, S., et al. (2020). &quot;Discriminative accuracy of plasma p-tau217 for AD.&quot; <em>JAMA</em>.</li>
<li><strong>BioFINDER</strong>: Mattsson-Carlgren, N., et al. (2024). &quot;Plasma p-tau217 in clinical practice.&quot; <em>Nature Medicine</em>.</li>
<li><strong>Head-to-Head</strong>: Ashton, N.J., et al. (2024). &quot;Comparison of plasma AD biomarkers.&quot; <em>Alzheimer's &amp; Dementia</em>.</li>
<li><strong>Clinical Implementation</strong>: Hansson, O., et al. (2024). &quot;Blood biomarkers for AD: Moving toward clinical implementation.&quot; <em>The Lancet Neurology</em>.</li>
</ol>

{% endraw %}