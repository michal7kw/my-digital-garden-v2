---
created: '2026-02-09T05:54:31.710459Z'
description: Blood-based measurement of amyloid-beta 42/40 ratio using mass spectrometry
  or immunoassay. Enables non-invasive screening for brain amyloid pathology with
  moderate accuracy.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/plasma-amyloid-beta-ratio/
slug: plasma-amyloid-beta-ratio
tags:
- biomarker
- blood-test
- alzheimers
- amyloid
- screening
templateEngineOverride: njk
title: Plasma Amyloid-Beta Ratio
type: biomarker
updated: '2026-02-09T05:54:31.710459Z'
---

{% raw %}
<h1>Plasma Amyloid-Beta Ratio</h1>
<h2>Overview</h2>
<p>Plasma amyloid-beta 42/40 (Aβ42/40) ratio measurement enables non-invasive detection of brain amyloid pathology. Like CSF, a decreased plasma Aβ42/40 ratio indicates amyloid accumulation in the brain. However, plasma concentrations are ~50-fold lower than CSF, making accurate measurement technically challenging. Mass spectrometry-based methods show the best performance.</p>
<h2>Measurement Challenges</h2>
<h3>Why Plasma Aβ Is Difficult</h3>
<ul>
<li>Very low concentrations (pg/mL)</li>
<li>Peripheral sources (platelets, muscle)</li>
<li>Matrix interference</li>
<li>Standardization issues</li>
<li>High-precision assays required</li>
</ul>
<h3>Technology Comparison</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Performance</th>
<th>Availability</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>IP-MS (Shimadzu)</td>
<td>Best (AUC ~0.90)</td>
<td>Limited</td>
<td>Research standard</td>
</tr>
<tr>
<td>LC-MS/MS (C2N)</td>
<td>Very good (AUC ~0.88)</td>
<td>Commercial (PrecivityAD)</td>
<td>CLIA lab</td>
</tr>
<tr>
<td>Immunoassay (Elecsys)</td>
<td>Moderate (AUC ~0.75-0.82)</td>
<td>Broad</td>
<td>Fully automated</td>
</tr>
<tr>
<td>SIMOA</td>
<td>Variable</td>
<td>Research</td>
<td>Platform-dependent</td>
</tr>
</tbody>
</table>
<h2>Clinical Performance</h2>
<h3>Mass Spectrometry-Based</h3>
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
<td>Amyloid PET + vs -</td>
<td>0.85-0.92</td>
<td>80-88%</td>
<td>80-90%</td>
</tr>
<tr>
<td>AD vs controls</td>
<td>0.75-0.85</td>
<td>Variable</td>
<td>Variable</td>
</tr>
</tbody>
</table>
<h3>Immunoassay-Based</h3>
<ul>
<li>Generally lower accuracy than MS</li>
<li>AUC 0.70-0.82 for amyloid detection</li>
<li>Improving with newer platforms</li>
</ul>
<h2>Commercial Tests</h2>
<h3>PrecivityAD (C2N Diagnostics)</h3>
<ul>
<li>LC-MS/MS based</li>
<li>CLIA laboratory test</li>
<li>Aβ42/40 + ApoE proteotype</li>
<li>Amyloid Probability Score (APS)</li>
<li>FDA breakthrough designation</li>
</ul>
<h3>PrecivityAD2</h3>
<ul>
<li>Adds p-tau217 to Aβ42/40 ratio</li>
<li>Improved accuracy</li>
<li>Multi-analyte panel</li>
</ul>
<h3>Elecsys Plasma Aβ42/40 (Roche)</h3>
<ul>
<li>Fully automated immunoassay</li>
<li>Available on cobas platform</li>
<li>Research/clinical use expanding</li>
</ul>
<h2>Interpretation</h2>
<h3>Ratio Direction</h3>
<ul>
<li><strong>Decreased ratio</strong> = Brain amyloid deposition</li>
<li>Opposite to CSF convention (same biology)</li>
<li>Ratio normalizes for production variability</li>
</ul>
<h3>Amyloid Probability Score (C2N)</h3>
<table>
<thead>
<tr>
<th>Score</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>0-35</td>
<td>Low likelihood of amyloid pathology</td>
</tr>
<tr>
<td>36-57</td>
<td>Intermediate (consider additional testing)</td>
</tr>
<tr>
<td>58-100</td>
<td>High likelihood of amyloid pathology</td>
</tr>
</tbody>
</table>
<h2>Role in Diagnostic Algorithm</h2>
<h3>Pre-Screening for PET/CSF</h3>
<pre><code>Cognitive Symptoms
       ↓
Plasma Aβ42/40 + p-tau217
       ↓
   ┌───┴───┐
Low prob.  High prob.
   ↓          ↓
Consider   Confirm with PET
other      or proceed to treatment
causes     discussion
</code></pre>
<h3>Cost-Effectiveness</h3>
<ul>
<li>Blood test: $200-500</li>
<li>Amyloid PET: $3,000-6,000</li>
<li>Two-step approach saves ~50% in testing costs</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Plasma_Amyloid-Beta_Ratio]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid-Beta_4240_Ratio]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mild_Cognitive_Impairment]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Alzheimers_Disease]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Plasma_p-tau217]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neurofilament_Light_Chain]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cerebral_Amyloid_Angiopathy]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid_PET_Imaging]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Lumbar_Puncture]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neuron-Derived_Exosome_Biomarkers]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid_Cascade]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
</code></pre>
<ul>
<li>→ [[Plasma_Amyloid-Beta_Ratio]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:11.835566'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cerebral_Amyloid_Angiopathy]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid_Cascade]] (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mild_Cognitive_Impairment]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Alzheimers_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Plasma_p-tau217]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Lumbar_Puncture]] (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid_PET_Imaging]] (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>← [[Neuron-Derived_Exosome_Biomarkers]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.353378'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyloid-Beta_4240_Ratio]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[GFAP]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neurofilament_Light_Chain]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ [[Alzheimer's Disease]] (condition) - <em>Amyloid biomarker</em></li>
<li>→ [[Mild Cognitive Impairment]] (condition) - <em>Risk stratification</em></li>
<li>→ [[Cerebral Amyloid Angiopathy]] (condition) - <em>May be abnormal</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ [[Amyloid-Beta 42/40 Ratio]] (biomarker) - <em>CSF gold standard</em></li>
<li>→ [[Plasma p-tau217]] (biomarker) - <em>Combination panel</em></li>
<li>→ [[Neurofilament Light Chain]] (biomarker) - <em>Neurodegeneration</em></li>
<li>→ [[GFAP]] (biomarker) - <em>Astrocyte marker</em></li>
</ul>
<h3>Examinations</h3>
<ul>
<li>← [[Amyloid PET Imaging]] (examination) - <em>Gold standard confirmation</em></li>
<li>← [[Lumbar Puncture]] (examination) - <em>CSF alternative</em></li>
</ul>
<h3>Pathways</h3>
<ul>
<li>→ [[Amyloid Cascade]] (pathway) - <em>Reflects plaque burden</em></li>
</ul>
<h2>Comparison: Plasma Aβ vs p-tau217</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Plasma Aβ42/40</th>
<th>Plasma p-tau217</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accuracy (AUC)</td>
<td>0.80-0.90</td>
<td>0.94-0.98</td>
</tr>
<tr>
<td>Reflects</td>
<td>Amyloid plaques</td>
<td>Tau + amyloid pathology</td>
</tr>
<tr>
<td>Technical ease</td>
<td>More challenging</td>
<td>Easier</td>
</tr>
<tr>
<td>Specificity</td>
<td>Amyloid-specific</td>
<td>AD-specific</td>
</tr>
<tr>
<td>Current role</td>
<td>Adjunct/combination</td>
<td>Primary blood marker</td>
</tr>
</tbody>
</table>
<h2>Advantages and Limitations</h2>
<h3>Advantages</h3>
<ul>
<li>Non-invasive (blood draw)</li>
<li>Cost-effective screening</li>
<li>Complement to tau markers</li>
<li>PrecivityAD CLIA-certified</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>Lower accuracy than p-tau217</li>
<li>Mass spec not widely available</li>
<li>Immunoassay less accurate</li>
<li>Peripheral sources may confound</li>
<li>Requires high-precision methodology</li>
</ul>
<h2>Pre-analytical Considerations</h2>
<h3>Sample Collection</h3>
<ul>
<li>K2-EDTA plasma typically</li>
<li>Polypropylene tubes (Aβ binds polystyrene)</li>
<li>Process within specified time (2-4 hours)</li>
<li>Freeze at -80°C</li>
</ul>
<h3>Quality Control</h3>
<ul>
<li>Hemolysis affects results</li>
<li>Standardized handling essential</li>
<li>Platform-specific protocols</li>
</ul>
<h2>Future Developments</h2>
<h3>Improved Immunoassays</h3>
<ul>
<li>Higher sensitivity platforms</li>
<li>Point-of-care potential</li>
<li>Automated clinical analyzers</li>
</ul>
<h3>Combination Algorithms</h3>
<ul>
<li>Aβ42/40 + p-tau217 + NfL + GFAP</li>
<li>Machine learning optimization</li>
<li>Personalized probability estimates</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>Mass Spec Validation</strong>: Nakamura, A., et al. (2018). &quot;High-performance plasma Aβ biomarkers.&quot; <em>Nature</em>.</li>
<li><strong>PrecivityAD</strong>: Kirmess, K.M., et al. (2021). &quot;LC-MS/MS for plasma Aβ and ApoE proteotypes.&quot; <em>Clinical Chemistry</em>.</li>
<li><strong>Immunoassay</strong>: Janelidze, S., et al. (2021). &quot;Plasma Aβ42/40 and Aβ42/P-tau181 ratios.&quot; <em>Alzheimer's &amp; Dementia</em>.</li>
</ol>

{% endraw %}