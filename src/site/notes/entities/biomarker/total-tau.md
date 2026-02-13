---
created: '2026-02-13T14:55:28.525686Z'
description: Total tau protein concentration in CSF, reflecting overall neuronal damage
  and degeneration. Elevated in Alzheimer's disease and acutely after stroke or brain
  injury.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/total-tau/
slug: total-tau
tags:
- biomarker
- neurodegeneration
- csf
- alzheimers
- atn-framework
templateEngineOverride: njk
title: Total Tau
type: biomarker
updated: '2026-02-13T14:55:28.525686Z'
---

{% raw %}
<h1>Total Tau</h1>
<h2>Overview</h2>
<p>Total Tau (t-tau) measures all forms of tau protein in cerebrospinal fluid, regardless of phosphorylation state. It reflects the intensity of neuronal damage and correlates with the rate of neurodegeneration. Unlike phospho-tau, which is relatively specific for AD pathology, t-tau is elevated in any condition causing significant neuronal injury.</p>
<h2>ATN Framework Role</h2>
<ul>
<li><strong>&quot;N&quot; Component</strong>: Marker of Neurodegeneration</li>
<li>Non-specific for etiology (elevated in AD, stroke, CJD)</li>
<li>Complements A (amyloid) and T (tau pathology) markers</li>
</ul>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Age Group</th>
<th>Normal (pg/mL)</th>
<th>Borderline</th>
<th>Elevated</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;50 years</td>
<td>&lt;300</td>
<td>300-400</td>
<td>&gt;400</td>
</tr>
<tr>
<td>50-70 years</td>
<td>&lt;350</td>
<td>350-450</td>
<td>&gt;450</td>
</tr>
<tr>
<td>&gt;70 years</td>
<td>&lt;400</td>
<td>400-500</td>
<td>&gt;500</td>
</tr>
</tbody>
</table>
<p><em>Note: Cutoffs vary by laboratory</em></p>
<h2>Conditions Affecting T-Tau</h2>
<h3>Chronic Elevation</h3>
<ul>
<li>Alzheimer's disease (moderate elevation)</li>
<li>Frontotemporal dementia (variable)</li>
<li>Progressive supranuclear palsy</li>
</ul>
<h3>Acute Elevation</h3>
<ul>
<li>Stroke (peaks 2-3 days, returns to baseline)</li>
<li>Traumatic brain injury (acute phase)</li>
<li>Hypoxic brain injury</li>
<li>Status epilepticus</li>
</ul>
<h3>Marked Elevation</h3>
<ul>
<li>Creutzfeldt-Jakob disease (very high, &gt;1000 pg/mL)</li>
<li>Acute encephalitis</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau_PET_Imaging</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/tau-phosphorylation/" class="internal-link">Tau_Phosphorylation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/mri-volumetry/" class="internal-link">MRI_Volumetry</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:14.208886'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Creutzfeldt-Jakob_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Amyloid-Beta_4240_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/mtbr-tau243/" class="internal-link">MTBR-tau243</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alzheimers_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.002967'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Stroke</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Creutzfeldt-Jakob_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/tau-phosphorylation/" class="internal-link">Tau_Phosphorylation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.950584'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimers_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/phospho-tau/" class="internal-link">Phospho-Tau</a> (biomarker)</li>
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
<li>← <a href="/garden/dev_admin/biomarker/mtbr-tau243/" class="internal-link">MTBR-tau243</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.924796'
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
<li>← <a href="/garden/dev_admin/examination/mri-volumetry/" class="internal-link">MRI_Volumetry</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.199836'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.028418'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild_Cognitive_Impairment</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:33.408670'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/phospho-tau/" class="internal-link">Phospho-Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta_4240_Ratio</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions with Elevated T-Tau</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Moderately elevated</em></li>
<li>→ <a href="/garden/dev_admin/condition/creutzfeldt-jakob-disease/" class="internal-link">Creutzfeldt-Jakob Disease</a> (condition) - <em>Markedly elevated</em></li>
<li>→ <a href="/garden/dev_admin/condition/stroke/" class="internal-link">Stroke</a> (condition) - <em>Acutely elevated</em></li>
<li>→ <a href="/garden/dev_admin/condition/traumatic-brain-injury/" class="internal-link">Traumatic Brain Injury</a> (condition) - <em>Acute injury marker</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/phospho-tau/" class="internal-link">Phospho-Tau</a> (biomarker) - <em>AD-specific tau marker</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Axonal damage marker</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/amyloid-beta-4240-ratio/" class="internal-link">Amyloid-Beta 42/40 Ratio</a> (biomarker) - <em>Amyloid pathology</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker) - <em>Astrocyte injury</em></li>
</ul>
<h3>Diagnostic Procedures</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar Puncture</a> (examination) - <em>CSF collection</em></li>
</ul>
<h2>Clinical Interpretation</h2>
<h3>Diagnostic Context</h3>
<ol>
<li><strong>AD workup</strong>: Elevated t-tau supports neurodegeneration but not specific</li>
<li><strong>CJD suspicion</strong>: Markedly elevated (&gt;1000) with rapid dementia</li>
<li><strong>Acute brain injury</strong>: Peaks acutely, then normalizes</li>
<li><strong>Prognosis</strong>: Higher levels predict faster cognitive decline</li>
</ol>
<h3>Limitations</h3>
<ul>
<li>Non-specific; many causes of elevation</li>
<li>Age-related increase in normal values</li>
<li>Not useful for monitoring treatment response</li>
<li>Blood-based t-tau less reliable than CSF</li>
</ul>
<h2>Comparison: T-Tau vs P-Tau</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Total Tau</th>
<th>Phospho-Tau</th>
</tr>
</thead>
<tbody>
<tr>
<td>Specificity</td>
<td>Low (any neuronal injury)</td>
<td>High (tau pathology)</td>
</tr>
<tr>
<td>AD diagnosis</td>
<td>Supportive</td>
<td>Core marker</td>
</tr>
<tr>
<td>Acute elevation</td>
<td>Yes (stroke, TBI)</td>
<td>No</td>
</tr>
<tr>
<td>ATN role</td>
<td>N (neurodegeneration)</td>
<td>T (tau pathology)</td>
</tr>
</tbody>
</table>
<h2>References</h2>
<ol>
<li><strong>AD Biomarkers</strong>: Blennow, K., et al. (2010). &quot;Cerebrospinal fluid and plasma biomarkers in AD.&quot; <em>Nature Reviews Neurology</em>.</li>
<li><strong>ATN Framework</strong>: Jack, C.R., et al. (2018). &quot;NIA-AA Research Framework.&quot; <em>Alzheimer's &amp; Dementia</em>.</li>
</ol>

{% endraw %}