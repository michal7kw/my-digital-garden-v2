---
created: '2026-02-13T19:38:05.090948Z'
description: Ubiquitin C-terminal Hydrolase L1, a neuron-specific enzyme released
  upon neuronal injury. FDA-cleared for traumatic brain injury assessment in combination
  with GFAP.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/uch-l1/
slug: uch-l1
tags:
- biomarker
- blood-test
- neuronal-injury
- tbi
- fda-cleared
templateEngineOverride: njk
title: UCH-L1
type: biomarker
updated: '2026-02-13T19:38:05.090948Z'
---

{% raw %}
<h1>UCH-L1 (Ubiquitin C-terminal Hydrolase L1)</h1>
<h2>Overview</h2>
<p>Ubiquitin C-terminal Hydrolase L1 (UCH-L1) is a deubiquitinating enzyme highly expressed in neurons, comprising 1-2% of total brain protein. Upon neuronal damage, UCH-L1 is rapidly released into blood, making it a sensitive acute biomarker for brain injury. Combined with GFAP, UCH-L1 is FDA-cleared for traumatic brain injury triage.</p>
<h2>Biological Background</h2>
<h3>Normal Function</h3>
<ul>
<li>Deubiquitinating enzyme (protein recycling)</li>
<li>Highly abundant in neurons</li>
<li>Involved in synaptic function</li>
<li>Regulates protein degradation</li>
</ul>
<h3>Release in Injury</h3>
<ul>
<li>Released from damaged neurons</li>
<li>Peaks early (hours after injury)</li>
<li>Shorter half-life than GFAP</li>
<li>Complements GFAP kinetics</li>
</ul>
<h2>FDA-Cleared Application</h2>
<h3>TBI Triage (Abbott i-STAT TBI Plasma Test)</h3>
<ul>
<li>Combined UCH-L1 + GFAP algorithm</li>
<li>Indicated for adults with suspected mild TBI</li>
<li>Rules out need for head CT</li>
<li>Point-of-care testing (~15 minutes)</li>
</ul>
<h3>Clinical Performance</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>NPV for intracranial lesion</td>
<td>99.6%</td>
</tr>
<tr>
<td>Sensitivity</td>
<td>&gt;97%</td>
</tr>
<tr>
<td>Specificity</td>
<td>~37% (optimized for NPV)</td>
</tr>
<tr>
<td>Time to result</td>
<td>~15 minutes</td>
</tr>
</tbody>
</table>
<h3>When to Use</h3>
<ul>
<li>Glasgow Coma Scale 13-15 (mild TBI)</li>
<li>Within 12 hours of injury</li>
<li>Presentation where CT is considered</li>
</ul>
<h2>Kinetics After Brain Injury</h2>
<h3>UCH-L1 vs GFAP Timing</h3>
<table>
<thead>
<tr>
<th>Biomarker</th>
<th>Peak</th>
<th>Half-life</th>
<th>Window</th>
</tr>
</thead>
<tbody>
<tr>
<td>UCH-L1</td>
<td>6-12 hours</td>
<td>7-9 hours</td>
<td>0-24 hours</td>
</tr>
<tr>
<td>GFAP</td>
<td>24-48 hours</td>
<td>24-48 hours</td>
<td>0-7 days</td>
</tr>
</tbody>
</table>
<h3>Complementary Kinetics</h3>
<ul>
<li>UCH-L1: Early detection (first 12 hours)</li>
<li>GFAP: Extended window (days)</li>
<li>Combined: Broad temporal coverage</li>
</ul>
<h2>Other Clinical Contexts</h2>
<h3>Cardiac Arrest</h3>
<ul>
<li>Elevated in hypoxic brain injury</li>
<li>Prognostic potential</li>
<li>Less studied than NSE for this indication</li>
</ul>
<h3>Stroke</h3>
<ul>
<li>Acute elevation</li>
<li>May correlate with infarct size</li>
<li>Research stage</li>
</ul>
<h3>Neurodegeneration</h3>
<ul>
<li>Some studies show elevation in AD</li>
<li>Less validated than NfL, p-tau</li>
<li>Research interest</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Cardiac_Arrest</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/blood-nfl/" class="internal-link">Blood_NfL</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Hypoxic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">CT_Head</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:20.980878'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">CT_Head</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Stroke</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Cardiac_Arrest</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Hypoxic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.720220'
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
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/traumatic-brain-injury/" class="internal-link">Traumatic Brain Injury</a> (condition) - <em>FDA-cleared indication</em></li>
<li>→ <a href="/garden/dev_admin/condition/hypoxic-brain-injury/" class="internal-link">Hypoxic Brain Injury</a> (condition) - <em>Elevated acutely</em></li>
<li>→ <a href="/garden/dev_admin/condition/stroke/" class="internal-link">Stroke</a> (condition) - <em>Research</em></li>
<li>→ <a href="/garden/dev_admin/condition/cardiac-arrest/" class="internal-link">Cardiac Arrest</a> (condition) - <em>Prognostic potential</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/gfap/" class="internal-link">GFAP</a> (biomarker) - <em>Combined in TBI test</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker) - <em>Alternative TBI marker</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker) - <em>Neuronal marker</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Axonal damage</em></li>
</ul>
<h3>Examinations</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/ct-head/" class="internal-link">CT Head</a> (examination) - <em>Imaging decision support</em></li>
</ul>
<h2>Advantages and Limitations</h2>
<h3>Advantages</h3>
<ul>
<li>FDA-cleared, point-of-care</li>
<li>Neuron-specific</li>
<li>Rapid results (15 minutes)</li>
<li>High NPV for CT decision</li>
<li>Early detection after injury</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>Short half-life (miss delayed presentation)</li>
<li>Lower specificity (false positives)</li>
<li>Limited to acute injury window</li>
<li>Not validated for neurodegeneration</li>
<li>Only in combination with GFAP</li>
</ul>
<h2>Sample Considerations</h2>
<h3>Collection</h3>
<ul>
<li>Plasma (K2-EDTA) or serum</li>
<li>Within 12 hours of injury for optimal sensitivity</li>
<li>Standard handling procedures</li>
</ul>
<h3>Interference</h3>
<ul>
<li>Hemolysis may affect results</li>
<li>Following manufacturer protocol critical</li>
</ul>
<h2>Clinical Decision Support</h2>
<h3>Negative Result (Low UCH-L1 + GFAP)</h3>
<ul>
<li>Low probability of intracranial lesion</li>
<li>CT may not be needed</li>
<li>Clinical judgment still applies</li>
<li>Observe for symptom changes</li>
</ul>
<h3>Positive Result (Elevated)</h3>
<ul>
<li>Does not confirm lesion (low specificity)</li>
<li>CT imaging recommended</li>
<li>Rule-in test, not rule-out</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>FDA Clearance</strong>: Abbott i-STAT TBI Plasma test (2018, updated 2021).</li>
<li><strong>Validation</strong>: Bazarian, J.J., et al. (2018). &quot;Serum GFAP and UCH-L1 for prediction of absence of intracranial injuries.&quot; <em>The Lancet Neurology</em>.</li>
<li><strong>Kinetics</strong>: Papa, L., et al. (2016). &quot;Time course and diagnostic accuracy of glial and neuronal blood biomarkers GFAP and UCH-L1.&quot; <em>JAMA Neurology</em>.</li>
</ol>

{% endraw %}