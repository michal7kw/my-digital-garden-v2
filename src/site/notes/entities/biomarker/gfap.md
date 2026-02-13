---
created: '2026-02-13T19:00:14.252147Z'
description: Glial Fibrillary Acidic Protein, an astrocyte-specific marker released
  during brain injury and neuroinflammation. FDA-cleared for TBI and emerging as important
  marker in neurodegeneration.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/gfap/
slug: gfap
tags:
- biomarker
- blood-test
- astrocyte
- tbi
- neurodegeneration
- fda-cleared
templateEngineOverride: njk
title: GFAP
type: biomarker
updated: '2026-02-13T19:00:14.252147Z'
---

{% raw %}
<h1>GFAP (Glial Fibrillary Acidic Protein)</h1>
<h2>Overview</h2>
<p>Glial Fibrillary Acidic Protein (GFAP) is the principal intermediate filament protein of astrocytes. When astrocytes are damaged or activated (reactive astrogliosis), GFAP is released into CSF and blood. GFAP is FDA-cleared for traumatic brain injury triage and is emerging as an important blood biomarker in Alzheimer's disease and other neurodegenerative conditions, reflecting astrocyte pathology and neuroinflammation.</p>
<h2>Biological Background</h2>
<h3>Astrocyte Function</h3>
<ul>
<li>Most abundant glial cell in CNS</li>
<li>Support neurons, maintain BBB</li>
<li>Regulate neurotransmitters and ions</li>
<li>Immune and inflammatory responses</li>
</ul>
<h3>GFAP Release</h3>
<ul>
<li>Indicator of astrocyte damage or activation</li>
<li>More brain-specific than S100B</li>
<li>Remains elevated longer after injury</li>
<li>Correlates with lesion size in TBI</li>
</ul>
<h2>FDA-Cleared Application</h2>
<h3>Traumatic Brain Injury (Abbott i-STAT)</h3>
<ul>
<li>Combined GFAP + UCH-L1 test</li>
<li>Rule out need for CT scan in mild TBI</li>
<li>High NPV (99.6%) for intracranial lesions</li>
<li>Results in ~15 minutes</li>
</ul>
<h3>Cutoffs (Abbott Platform)</h3>
<ul>
<li>GFAP + UCH-L1 combined algorithm</li>
<li>Negative: CT scan not indicated</li>
<li>Positive: Consider CT imaging</li>
</ul>
<h2>GFAP in Neurodegeneration</h2>
<h3>Alzheimer's Disease</h3>
<ul>
<li>Elevated in AD compared to controls</li>
<li>Increases with disease progression</li>
<li>Correlates with amyloid and tau pathology</li>
<li>May reflect reactive astrogliosis around plaques</li>
</ul>
<h3>Compared to Other AD Biomarkers</h3>
<table>
<thead>
<tr>
<th>Biomarker</th>
<th>What It Reflects</th>
<th>AD Change</th>
</tr>
</thead>
<tbody>
<tr>
<td>p-tau217</td>
<td>Tau pathology</td>
<td>↑↑↑</td>
</tr>
<tr>
<td>Aβ42/40</td>
<td>Amyloid</td>
<td>↓↓</td>
</tr>
<tr>
<td>NfL</td>
<td>Axonal damage</td>
<td>↑↑</td>
</tr>
<tr>
<td>GFAP</td>
<td>Astrocyte activation</td>
<td>↑↑</td>
</tr>
</tbody>
</table>
<h3>Added Value</h3>
<ul>
<li>Different biological process (astrogliosis)</li>
<li>Complements tau and amyloid markers</li>
<li>May indicate neuroinflammatory component</li>
<li>Predictive of progression</li>
</ul>
<h3>Other Conditions with Elevated GFAP</h3>
<ul>
<li>Frontotemporal dementia</li>
<li>Multiple sclerosis (acute relapses)</li>
<li>Neuromyelitis optica</li>
<li>Stroke (acute phase)</li>
<li>CNS tumors</li>
</ul>
<h2>Clinical Performance in AD</h2>
<h3>Diagnostic Accuracy</h3>
<table>
<thead>
<tr>
<th>Comparison</th>
<th>AUC</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>AD vs controls</td>
<td>0.80-0.88</td>
<td>Moderate accuracy</td>
</tr>
<tr>
<td>Amyloid+ vs amyloid-</td>
<td>0.75-0.85</td>
<td>Somewhat predictive</td>
</tr>
<tr>
<td>MCI conversion prediction</td>
<td>0.70-0.80</td>
<td>Prognostic value</td>
</tr>
</tbody>
</table>
<h3>In Multi-Marker Panels</h3>
<ul>
<li>Adds incremental value to p-tau217</li>
<li>GFAP + p-tau217 + Aβ42/40 panels under study</li>
<li>May improve sensitivity/specificity</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/pathway/amyloid-cascade/" class="internal-link">Amyloid_Cascade</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:39.716975'
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
<li>→ <a href="/garden/dev_admin/pathway/amyloid-cascade/" class="internal-link">Amyloid_Cascade</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Alzheimers_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Multiple_Sclerosis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/blood-nfl/" class="internal-link">Blood_NfL</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-amyloid-beta-ratio/" class="internal-link">Plasma_Amyloid-Beta_Ratio</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.899103'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Traumatic_Brain_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Multiple_Sclerosis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Stroke</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Astrocyte</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/amyloid-cascade/" class="internal-link">Amyloid_Cascade</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.428247'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimers_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/uch-l1/" class="internal-link">UCH-L1</a> (biomarker)</li>
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
<li>← <a href="/garden/dev_admin/examination/lumbar-puncture/" class="internal-link">Lumbar_Puncture</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.028418'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/uch-l1/" class="internal-link">UCH-L1</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total_Tau</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.683830'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:16.720220'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma_p-tau217</a> (biomarker)</li>
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
<li>← <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.500703'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament_Light_Chain</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:15.198842'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/traumatic-brain-injury/" class="internal-link">Traumatic Brain Injury</a> (condition) - <em>FDA-cleared indication</em></li>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Emerging marker</em></li>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal Dementia</a> (condition) - <em>Elevated</em></li>
<li>→ <a href="/garden/dev_admin/condition/multiple-sclerosis/" class="internal-link">Multiple Sclerosis</a> (condition) - <em>Acute relapses</em></li>
<li>→ <a href="/garden/dev_admin/condition/stroke/" class="internal-link">Stroke</a> (condition) - <em>Acute elevation</em></li>
</ul>
<h3>Related Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/s100b/" class="internal-link">S100B</a> (biomarker) - <em>Related astrocyte marker</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Neuronal counterpart</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/plasma-p-tau217/" class="internal-link">Plasma p-tau217</a> (biomarker) - <em>Complementary</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/uch-l1/" class="internal-link">UCH-L1</a> (biomarker) - <em>Combined in TBI test</em></li>
</ul>
<h3>Pathways</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> (pathway) - <em>Reflects astrogliosis</em></li>
<li>→ <a href="/garden/dev_admin/pathway/amyloid-cascade/" class="internal-link">Amyloid Cascade</a> (pathway) - <em>Reactive astrocytes around plaques</em></li>
</ul>
<h3>Brain Cells</h3>
<ul>
<li>→ <a href="/garden/dev_admin/cell/astrocyte/" class="internal-link">Astrocyte</a> (cell) - <em>Primary source</em></li>
</ul>
<h2>Measurement Platforms</h2>
<h3>Available Assays</h3>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Manufacturer</th>
<th>Application</th>
</tr>
</thead>
<tbody>
<tr>
<td>i-STAT TBI</td>
<td>Abbott</td>
<td>FDA-cleared TBI triage</td>
</tr>
<tr>
<td>SIMOA</td>
<td>Quanterix</td>
<td>Research, high sensitivity</td>
</tr>
<tr>
<td>Elecsys</td>
<td>Roche</td>
<td>In development</td>
</tr>
<tr>
<td>Lumipulse</td>
<td>Fujirebio</td>
<td>Research</td>
</tr>
</tbody>
</table>
<h3>Reference Ranges</h3>
<ul>
<li>Highly platform-dependent</li>
<li>Age-related increases</li>
<li>No universal cutoffs yet for neurodegeneration</li>
<li>TBI: Algorithm-based interpretation</li>
</ul>
<h2>Sample Considerations</h2>
<h3>Pre-analytical Factors</h3>
<ul>
<li>Serum or plasma (platform-specific)</li>
<li>Standard processing times</li>
<li>Relatively stable analyte</li>
<li>Freeze-thaw tolerant</li>
</ul>
<h3>Timing After Injury (TBI)</h3>
<ul>
<li>Peaks 24-48 hours post-injury</li>
<li>Remains elevated for days</li>
<li>Longer window than S100B</li>
</ul>
<h2>Advantages and Limitations</h2>
<h3>Advantages</h3>
<ul>
<li>FDA-cleared for TBI (point-of-care)</li>
<li>Astrocyte-specific (more brain-specific than S100B)</li>
<li>Adds biological dimension to AD biomarker panels</li>
<li>Emerging validation in neurodegeneration</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>Less specific for AD than p-tau217</li>
<li>Elevated in many CNS conditions</li>
<li>Cutoffs for neurodegeneration not established</li>
<li>Not standalone diagnostic marker</li>
</ul>
<h2>Future Directions</h2>
<h3>Multi-Marker Panels</h3>
<ul>
<li>GFAP + p-tau217 + Aβ42/40 + NfL</li>
<li>ATN(I) framework: A-Amyloid, T-Tau, N-Neurodegeneration, I-Inflammation</li>
<li>GFAP as &quot;I&quot; component</li>
</ul>
<h3>Therapeutic Monitoring</h3>
<ul>
<li>May track neuroinflammation response to treatment</li>
<li>Anti-inflammatory therapies</li>
<li>Complement inhibitors</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>FDA Clearance</strong>: Abbott i-STAT TBI Plasma test (2021).</li>
<li><strong>AD Biomarker</strong>: Benedet, A.L., et al. (2021). &quot;GFAP and AD pathology.&quot; <em>Nature Medicine</em>.</li>
<li><strong>Multi-marker</strong>: Hansson, O., et al. (2023). &quot;Blood biomarker panels for AD.&quot; <em>The Lancet Neurology</em>.</li>
</ol>

{% endraw %}