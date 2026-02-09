---
created: '2026-02-09T05:54:31.690011Z'
description: Neuron-Specific Enolase, a glycolytic enzyme found in neurons and neuroendocrine
  cells. Used as a biomarker for neuronal injury and as a tumor marker for small cell
  lung cancer and neuroblastoma.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/nse/
slug: nse
tags:
- biomarker
- neuronal-injury
- tumor-marker
- blood-test
- prognosis
templateEngineOverride: njk
title: NSE
type: biomarker
updated: '2026-02-09T05:54:31.690011Z'
---

{% raw %}
<h1>NSE (Neuron-Specific Enolase)</h1>
<h2>Overview</h2>
<p>Neuron-Specific Enolase (NSE) is the gamma-gamma isoform of the glycolytic enzyme enolase. It is highly expressed in neurons and neuroendocrine cells, making it a marker for both neuronal injury and neuroendocrine tumors. In neurology, NSE is used as a prognostic biomarker after cardiac arrest and hypoxic brain injury.</p>
<h2>Biological Background</h2>
<h3>Expression</h3>
<ul>
<li><strong>Neurons</strong>: Cytoplasmic localization</li>
<li><strong>Neuroendocrine cells</strong>: Pancreatic islets, adrenal medulla</li>
<li><strong>Neuroendocrine tumors</strong>: SCLC, neuroblastoma, carcinoid</li>
</ul>
<h3>Physiology</h3>
<ul>
<li>Essential for glycolysis (2-phosphoglycerate → phosphoenolpyruvate)</li>
<li>Half-life: ~24 hours</li>
<li>Constitutively expressed, released upon cell damage</li>
</ul>
<h2>Reference Values</h2>
<table>
<thead>
<tr>
<th>Level (ug/L)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;12.5</td>
<td>Normal</td>
</tr>
<tr>
<td>12.5-17</td>
<td>Mildly elevated; correlate clinically</td>
</tr>
<tr>
<td>&gt;17</td>
<td>Elevated; suggests neuronal injury or tumor</td>
</tr>
<tr>
<td>&gt;33</td>
<td>After cardiac arrest: poor prognosis</td>
</tr>
</tbody>
</table>
<p><em>Cutoffs for prognostication vary by study</em></p>
<h2>Clinical Applications</h2>
<h3>Hypoxic-Ischemic Brain Injury</h3>
<ul>
<li><strong>Cardiac arrest prognostication</strong>: High NSE predicts poor neurological outcome</li>
<li><strong>ERC/ESICM guidelines</strong>: NSE &gt;60 ug/L at 48-72h suggests poor prognosis</li>
<li><strong>Must exclude hemolysis</strong>: RBCs contain NSE (false elevation)</li>
</ul>
<h3>Traumatic Brain Injury</h3>
<ul>
<li>Correlates with injury severity</li>
<li>Prognostic for outcome</li>
<li>Less specific than newer markers (GFAP, UCH-L1)</li>
</ul>
<h3>Tumor Marker</h3>
<ul>
<li><strong>Small Cell Lung Cancer (SCLC)</strong>: Diagnosis and monitoring</li>
<li><strong>Neuroblastoma</strong>: Staging and response assessment</li>
<li><strong>Other neuroendocrine tumors</strong>: Merkel cell, carcinoid</li>
</ul>
<h2>Important Considerations</h2>
<h3>Hemolysis Interference</h3>
<ul>
<li><strong>Critical issue</strong>: RBCs and platelets contain NSE</li>
<li>Hemolyzed samples produce falsely elevated results</li>
<li>Must measure hemolysis index and interpret cautiously</li>
<li>Some guidelines require hemolysis &lt;50 mg/dL</li>
</ul>
<h3>Timing After Cardiac Arrest</h3>
<ul>
<li><strong>Sample at 48-72 hours</strong> post-arrest</li>
<li>Single measurement insufficient; trend more informative</li>
<li>Combine with other prognostic tools (EEG, imaging, clinical exam)</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Traumatic_Brain_Injury]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[UCH-L1]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[MRI_Brain]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[Small_Cell_Lung_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cardiac_Arrest]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neurofilament_Light_Chain]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hypoxic_Brain_Injury]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>→ [[Somatosensory_Evoked_Potentials]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>← [[Neurofilament_Light_Chain]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.980878'
source: obsidian
</code></pre>
<ul>
<li>← [[GFAP]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ [[MRI_Brain]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Small_Cell_Lung_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hypoxic_Brain_Injury]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Lactate]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cardiac_Arrest]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Somatosensory_Evoked_Potentials]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neuroblastoma]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Stroke]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Traumatic_Brain_Injury]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[EEG]] (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[S100B]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>← [[EEG]] (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:44.540742'
source: obsidian
</code></pre>
<ul>
<li>← [[UCH-L1]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>← [[S100B]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.720220'
source: obsidian
</code></pre>
<ul>
<li>→ [[Neurofilament_Light_Chain]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>→ [[GFAP]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions with Elevated NSE</h3>
<ul>
<li>→ [[Hypoxic Brain Injury]] (condition) - <em>Prognostic marker</em></li>
<li>→ [[Cardiac Arrest]] (condition) - <em>Outcome prediction</em></li>
<li>→ [[Traumatic Brain Injury]] (condition) - <em>Injury marker</em></li>
<li>→ [[Small Cell Lung Cancer]] (condition) - <em>Tumor marker</em></li>
<li>→ [[Neuroblastoma]] (condition) - <em>Tumor marker</em></li>
<li>→ [[Stroke]] (condition) - <em>Injury marker</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ [[S100B]] (biomarker) - <em>Astrocyte injury</em></li>
<li>→ [[GFAP]] (biomarker) - <em>Astrocyte injury</em></li>
<li>→ [[Neurofilament Light Chain]] (biomarker) - <em>Axonal injury</em></li>
<li>→ [[Lactate]] (biomarker) - <em>Hypoxia marker</em></li>
</ul>
<h3>Diagnostic Context</h3>
<ul>
<li>← [[EEG]] (examination) - <em>Combined prognostication</em></li>
<li>← [[MRI Brain]] (examination) - <em>Imaging correlation</em></li>
<li>← [[Somatosensory Evoked Potentials]] (examination) - <em>Multimodal assessment</em></li>
</ul>
<h2>Prognostication After Cardiac Arrest</h2>
<h3>European Guidelines (ERC/ESICM 2021)</h3>
<ul>
<li>NSE &gt;60 ug/L at 48-72h suggests poor outcome</li>
<li>Must be measured on at least two time points</li>
<li>Exclude hemolysis</li>
<li>Combine with other modalities (SSEPs, EEG, imaging)</li>
</ul>
<h3>Multimodal Approach</h3>
<p>NSE alone should not determine withdrawal of care:</p>
<ol>
<li>Clinical examination (pupillary reflex, motor response)</li>
<li>Electrophysiology (SSEPs, EEG)</li>
<li>Neuroimaging (CT, MRI)</li>
<li>Biomarkers (NSE, +/- S100B)</li>
</ol>
<h2>Comparison: NSE vs S100B</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>NSE</th>
<th>S100B</th>
</tr>
</thead>
<tbody>
<tr>
<td>Source</td>
<td>Neurons</td>
<td>Astrocytes</td>
</tr>
<tr>
<td>Peak</td>
<td>48-72 hours</td>
<td>2-4 hours</td>
</tr>
<tr>
<td>Half-life</td>
<td>~24 hours</td>
<td>~2 hours</td>
</tr>
<tr>
<td>Hemolysis</td>
<td>Major confounder</td>
<td>Minor issue</td>
</tr>
<tr>
<td>Tumor use</td>
<td>Yes (SCLC)</td>
<td>Yes (melanoma)</td>
</tr>
</tbody>
</table>
<h2>References</h2>
<ol>
<li><strong>Cardiac Arrest</strong>: Sandroni, C., et al. (2021). &quot;ERC-ESICM guidelines on neuroprognostication after cardiac arrest.&quot; <em>Intensive Care Medicine</em>.</li>
<li><strong>Review</strong>: Isgrò, M.A., et al. (2015). &quot;Neuron-specific enolase as a biomarker.&quot; <em>Biomark Med</em>.</li>
<li><strong>TBI</strong>: Papa, L., et al. (2016). &quot;Biomarkers in TBI.&quot; <em>Seminars in Neurology</em>.</li>
</ol>

{% endraw %}