---
created: '2026-02-13T14:55:28.470155Z'
description: Hyperphosphorylated tau protein measured in CSF or blood, indicating
  tau pathology and neurofibrillary tangle formation. A core biomarker for Alzheimer's
  disease diagnosis within the ATN framework.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/phospho-tau/
slug: phospho-tau
tags:
- biomarker
- neurodegeneration
- alzheimers
- csf
- blood-test
- atn-framework
templateEngineOverride: njk
title: Phospho-Tau
type: biomarker
updated: '2026-02-13T14:55:28.470155Z'
---

{% raw %}
<h1>Phospho-Tau</h1>
<h2>Overview</h2>
<p>Phospho-Tau (p-tau) refers to tau protein phosphorylated at specific amino acid residues. In Alzheimer's disease and other tauopathies, tau becomes hyperphosphorylated, detaches from microtubules, and aggregates into neurofibrillary tangles. CSF and plasma p-tau are now core biomarkers in the NIA-AA ATN (Amyloid, Tau, Neurodegeneration) research framework.</p>
<h2>Key Phosphorylation Sites</h2>
<table>
<thead>
<tr>
<th>Epitope</th>
<th>Location</th>
<th>Clinical Utility</th>
</tr>
</thead>
<tbody>
<tr>
<td>p-tau181</td>
<td>Threonine 181</td>
<td>Most established; FDA cleared</td>
</tr>
<tr>
<td>p-tau217</td>
<td>Threonine 217</td>
<td>Highest sensitivity/specificity</td>
</tr>
<tr>
<td>p-tau231</td>
<td>Threonine 231</td>
<td>Early changes; tracks amyloid</td>
</tr>
</tbody>
</table>
<h2>Clinical Applications</h2>
<h3>Alzheimer's Disease Diagnosis</h3>
<ul>
<li>Distinguishes AD from non-AD dementias</li>
<li>Predicts progression from MCI to AD dementia</li>
<li>Reflects both amyloid and tau pathology</li>
</ul>
<h3>ATN Framework Classification</h3>
<ul>
<li><strong>A+T+N-</strong>: Preclinical AD (biomarker positive, no neurodegeneration)</li>
<li><strong>A+T+N+</strong>: Full AD pathology with neurodegeneration</li>
<li><strong>A-T+N+</strong>: Non-AD tauopathy (PSP, CBD, etc.)</li>
</ul>
<h2>Reference Values</h2>
<h3>CSF P-Tau181</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Range (pg/mL)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>&lt;60</td>
<td>No tau pathology</td>
</tr>
<tr>
<td>Borderline</td>
<td>60-80</td>
<td>Monitor clinically</td>
</tr>
<tr>
<td>Elevated</td>
<td>&gt;80</td>
<td>Tau pathology likely</td>
</tr>
</tbody>
</table>
<h3>Plasma P-Tau217 (Emerging)</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Range (pg/mL)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>&lt;0.5</td>
<td>Low AD probability</td>
</tr>
<tr>
<td>Elevated</td>
<td>&gt;0.5</td>
<td>High AD probability</td>
</tr>
</tbody>
</table>
<p><em>Note: Cutoffs vary by assay platform</em></p>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:54.207530'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:38.556708'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimers_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:30.206636'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Down_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alzheimers_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau_PET_Imaging</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid_PET_Imaging</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Amyloid-Beta_4240_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/tau-phosphorylation/" class="internal-link">Tau_Phosphorylation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Lewy_Body_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.983992'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Down_Syndrome</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Lewy_Body_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/tau-phosphorylation/" class="internal-link">Tau_Phosphorylation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.950584'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimers_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau_PET_Imaging</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.198842'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta_4240_Ratio</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:09.882854'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau_PET_Imaging</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.698956'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.028418'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid_PET_Imaging</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:44.235597'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.408670'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta_4240_Ratio</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.718126'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions with Elevated P-Tau</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Strongly elevated</em></li>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a> (condition) - <em>Predicts AD conversion</em></li>
<li>→ <a href="/garden/dev_admin/condition/down-syndrome/" class="internal-link">Down Syndrome</a> (condition) - <em>Early-onset AD pathology</em></li>
</ul>
<h3>Conditions with Normal P-Tau</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal Dementia</a> (condition) - <em>Usually normal (except some MAPT)</em></li>
<li>→ <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular Dementia</a> (condition) - <em>Usually normal</em></li>
<li>→ <a href="/garden/dev_admin/condition/lewy-body-dementia/" class="internal-link">Lewy Body Dementia</a> (condition) - <em>Mildly elevated if AD copathology</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total Tau</a> (biomarker) - <em>General neurodegeneration</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta 42/40 Ratio</a> (biomarker) - <em>Amyloid pathology</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Neurodegeneration intensity</em></li>
</ul>
<h3>Diagnostic Procedures</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar Puncture</a> (examination) - <em>CSF collection</em></li>
<li>← <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau PET Imaging</a> (examination) - <em>Direct tau visualization</em></li>
</ul>
<h2>Advantages of Plasma P-Tau</h2>
<h3>P-Tau217 Benefits</h3>
<ul>
<li>Minimally invasive (blood draw)</li>
<li>High concordance with CSF and PET</li>
<li>Cost-effective screening</li>
<li>Suitable for large-scale trials and population screening</li>
</ul>
<h3>Current Limitations</h3>
<ul>
<li>Requires specialized assay platforms</li>
<li>Not yet universally available</li>
<li>Standardization across labs ongoing</li>
</ul>
<h2>Clinical Interpretation</h2>
<h3>When to Order</h3>
<ol>
<li>Diagnostic workup for cognitive impairment</li>
<li>Differentiating AD from other dementias</li>
<li>Research: ATN classification for clinical trials</li>
<li>Monitoring anti-amyloid/anti-tau therapies</li>
</ol>
<h3>Interpretation Notes</h3>
<ul>
<li>Combine with amyloid markers (Aβ42/40 or amyloid PET)</li>
<li>Consider clinical context (age, symptoms, MRI)</li>
<li>P-tau alone does not diagnose AD; requires syndromic assessment</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>ATN Framework</strong>: Jack, C.R., et al. (2018). &quot;NIA-AA Research Framework.&quot; <em>Alzheimer's &amp; Dementia</em>.</li>
<li><strong>P-tau217</strong>: Palmqvist, S., et al. (2020). &quot;Discriminative accuracy of plasma p-tau217.&quot; <em>JAMA</em>.</li>
<li><strong>Blood Biomarkers</strong>: Ashton, N.J., et al. (2021). &quot;Plasma p-tau in AD.&quot; <em>The Lancet Neurology</em>.</li>
</ol>

{% endraw %}