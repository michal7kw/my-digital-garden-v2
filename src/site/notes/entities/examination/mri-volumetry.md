---
created: '2026-02-13T17:51:32.215329Z'
description: Quantitative magnetic resonance imaging measuring brain structure volumes,
  particularly hippocampal atrophy. Used for neurodegeneration assessment in the ATN
  framework and clinical trials.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/examination/mri-volumetry/
slug: mri-volumetry
tags:
- examination
- neuroimaging
- mri
- atrophy
- neurodegeneration
templateEngineOverride: njk
title: MRI Volumetry
type: examination
updated: '2026-02-13T17:51:32.215329Z'
---

{% raw %}
<h1>MRI Volumetry</h1>
<h2>Overview</h2>
<p>MRI volumetry uses high-resolution structural MRI to quantitatively measure brain structure volumes, providing objective assessment of neurodegeneration. Hippocampal volume is particularly important in Alzheimer's disease, while other regional measures help differentiate between dementia subtypes. Automated software now enables clinical use with standardized, FDA-cleared reports.</p>
<h2>Key Measurements</h2>
<h3>Hippocampal Volume</h3>
<ul>
<li>Most validated measure for AD</li>
<li>Early atrophy correlates with memory impairment</li>
<li>Age and head-size corrected (percentile ranking)</li>
<li>Threshold: ~5th percentile often considered abnormal</li>
</ul>
<h3>Additional Regions of Interest</h3>
<table>
<thead>
<tr>
<th>Structure</th>
<th>Clinical Relevance</th>
</tr>
</thead>
<tbody>
<tr>
<td>Entorhinal cortex</td>
<td>Earliest AD involvement</td>
</tr>
<tr>
<td>Amygdala</td>
<td>Emotional processing, FTD</td>
</tr>
<tr>
<td>Temporal lobe</td>
<td>AD, semantic dementia</td>
</tr>
<tr>
<td>Frontal lobe</td>
<td>bvFTD</td>
</tr>
<tr>
<td>Parietal lobe</td>
<td>AD, posterior cortical atrophy</td>
</tr>
<tr>
<td>Caudate</td>
<td>Huntington's disease</td>
</tr>
<tr>
<td>Midbrain</td>
<td>PSP (&quot;hummingbird sign&quot;)</td>
</tr>
<tr>
<td>Cerebellum</td>
<td>MSA-C</td>
</tr>
</tbody>
</table>
<h3>Global Measures</h3>
<ul>
<li>Total brain volume</li>
<li>Ventricular volume (inverse of parenchymal volume)</li>
<li>Cortical thickness maps</li>
<li>White matter hyperintensity volume</li>
</ul>
<h2>Analysis Methods</h2>
<h3>FDA-Cleared Commercial Software</h3>
<table>
<thead>
<tr>
<th>Software</th>
<th>Manufacturer</th>
<th>Features</th>
</tr>
</thead>
<tbody>
<tr>
<td>NeuroQuant</td>
<td>Cortechs.ai</td>
<td>Hippocampal, brain aging index</td>
</tr>
<tr>
<td>Neuroreader</td>
<td>Brainreader</td>
<td>Multiple regions, asymmetry</td>
</tr>
<tr>
<td>Quantib ND</td>
<td>Quantib</td>
<td>European, research features</td>
</tr>
<tr>
<td>Icobrain</td>
<td>Icometrix</td>
<td>MS and dementia applications</td>
</tr>
</tbody>
</table>
<h3>Research Tools</h3>
<ul>
<li><strong>FreeSurfer</strong>: Open-source, gold standard for research</li>
<li><strong>FSL</strong>: Flexible analysis suite</li>
<li><strong>SPM</strong>: Voxel-based morphometry</li>
<li><strong>ADNI protocols</strong>: Standardized acquisition</li>
</ul>
<h2>Disease-Specific Patterns</h2>
<h3>Alzheimer's Disease</h3>
<ul>
<li><strong>Early</strong>: Hippocampal/entorhinal atrophy</li>
<li><strong>Moderate</strong>: Temporal and parietal atrophy</li>
<li><strong>Advanced</strong>: Global atrophy, ventricular enlargement</li>
<li><strong>Asymmetry</strong>: Usually symmetric</li>
</ul>
<h3>Frontotemporal Dementia</h3>
<ul>
<li><strong>bvFTD</strong>: Frontal and anterior temporal atrophy</li>
<li><strong>svPPA</strong>: Left anterior temporal (knife-edge atrophy)</li>
<li><strong>nfvPPA</strong>: Left frontal operculum, insula</li>
<li>Often asymmetric</li>
</ul>
<h3>Dementia with Lewy Bodies</h3>
<ul>
<li>Less hippocampal atrophy than AD</li>
<li>More diffuse cortical thinning</li>
<li>Preserved medial temporal volume (early)</li>
</ul>
<h3>Vascular Dementia</h3>
<ul>
<li>White matter hyperintensities (Fazekas score)</li>
<li>Lacunar infarcts</li>
<li>Strategic infarct locations</li>
<li>Less hippocampal atrophy than AD</li>
</ul>
<h3>Huntington's Disease</h3>
<ul>
<li>Caudate atrophy (earliest and most sensitive)</li>
<li>Putamen atrophy</li>
<li>Correlates with CAG repeat length</li>
</ul>
<h3>Progressive Supranuclear Palsy</h3>
<ul>
<li>Midbrain atrophy (&quot;hummingbird sign&quot; sagittal)</li>
<li>&quot;Morning glory sign&quot; (axial midbrain)</li>
<li>Superior cerebellar peduncle atrophy</li>
</ul>
<h2>Clinical Applications</h2>
<h3>Dementia Differential Diagnosis</h3>
<ul>
<li>Hippocampal atrophy: Supports AD</li>
<li>Frontal atrophy: Suggests FTD</li>
<li>Caudate atrophy: Consider HD</li>
<li>Midbrain atrophy: Consider PSP</li>
</ul>
<h3>ATN Framework: &quot;N&quot; Component</h3>
<ul>
<li>Neurodegeneration biomarker (alongside FDG-PET, CSF t-tau)</li>
<li>Hippocampal volume as primary measure</li>
<li>Rates of atrophy for progression</li>
</ul>
<h3>Clinical Trials</h3>
<ul>
<li>Inclusion/exclusion (confirm atrophy)</li>
<li>Outcome measure (rate of atrophy)</li>
<li>Sample size reduction using enrichment</li>
</ul>
<h3>Longitudinal Monitoring</h3>
<ul>
<li>Annual atrophy rates:
<ul>
<li>Normal aging: ~0.5%/year</li>
<li>MCI: ~1-2%/year</li>
<li>AD: ~2-4%/year hippocampal</li>
</ul>
</li>
<li>Boundary shift integral for whole brain</li>
</ul>
<h2>Interpretation</h2>
<h3>Age-Adjusted Percentiles</h3>
<table>
<thead>
<tr>
<th>Percentile</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>&gt;25th</td>
<td>Normal for age</td>
</tr>
<tr>
<td>5th-25th</td>
<td>Below average; monitor</td>
</tr>
<tr>
<td>&lt;5th</td>
<td>Abnormally low; concerning</td>
</tr>
<tr>
<td>&lt;1st</td>
<td>Severe atrophy</td>
</tr>
</tbody>
</table>
<h3>Confounders</h3>
<ul>
<li>Head size (normalize by intracranial volume)</li>
<li>Age (use age-matched norms)</li>
<li>Sex (slight differences)</li>
<li>Scanner and sequence (standardize)</li>
</ul>
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Hippocampal atrophy</em></li>
<li>→ <a href="/garden/dev_admin/condition/mild-cognitive-impairment/" class="internal-link">Mild Cognitive Impairment</a> (condition) - <em>Predicts conversion</em></li>
<li>→ <a href="/garden/dev_admin/condition/frontotemporal-dementia/" class="internal-link">Frontotemporal Dementia</a> (condition) - <em>Frontal pattern</em></li>
<li>→ <a href="/garden/dev_admin/condition/huntingtons-disease/" class="internal-link">Huntington's Disease</a> (condition) - <em>Caudate atrophy</em></li>
<li>→ <a href="/garden/dev_admin/condition/progressive-supranuclear-palsy/" class="internal-link">Progressive Supranuclear Palsy</a> (condition) - <em>Midbrain atrophy</em></li>
</ul>
<h3>Brain Regions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/hippocampus/" class="internal-link">Hippocampus</a> (organ) - <em>Key measurement</em></li>
<li>→ <a href="/garden/dev_admin/organ/entorhinal-cortex/" class="internal-link">Entorhinal Cortex</a> (organ) - <em>Earliest change</em></li>
<li>→ <a href="/garden/dev_admin/organ/prefrontal-cortex/" class="internal-link">Prefrontal Cortex</a> (organ) - <em>FTD involvement</em></li>
</ul>
<h3>Related Imaging</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/amyloid-pet-imaging/" class="internal-link">Amyloid PET Imaging</a> (examination) - <em>ATN A component</em></li>
<li>← <a href="/garden/dev_admin/examination/tau-pet-imaging/" class="internal-link">Tau PET Imaging</a> (examination) - <em>ATN T component</em></li>
<li>← <a href="/garden/dev_admin/examination/fdg-pet/" class="internal-link">FDG-PET</a> (examination) - <em>Functional correlate</em></li>
</ul>
<h3>Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Correlates with atrophy</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/total-tau/" class="internal-link">Total Tau</a> (biomarker) - <em>Neurodegeneration marker</em></li>
</ul>
<h2>Advantages and Limitations</h2>
<h3>Advantages</h3>
<ul>
<li>No radiation</li>
<li>Widely available</li>
<li>Objective, quantitative</li>
<li>Tracks progression</li>
<li>FDA-cleared automated analysis</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>Motion artifact sensitivity</li>
<li>Scanner variability</li>
<li>Normal aging overlap</li>
<li>Not specific for etiology</li>
<li>Single timepoint less informative</li>
</ul>
<h2>Practical Considerations</h2>
<h3>Optimal Acquisition</h3>
<ul>
<li>3D T1-weighted MPRAGE or IR-FGRE</li>
<li>1mm isotropic resolution</li>
<li>Minimal motion (head restraint, short scan)</li>
<li>Consistent scanner for longitudinal</li>
</ul>
<h3>Report Components</h3>
<ul>
<li>Hippocampal volume (bilateral)</li>
<li>Age-adjusted percentiles</li>
<li>Comparison to normative database</li>
<li>Longitudinal change (if prior scan)</li>
<li>Visual atrophy confirmation</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>NeuroQuant Validation</strong>: Brewer, J.B. (2009). &quot;Fully-automated volumetric MRI with normative ranges.&quot; <em>Radiology</em>.</li>
<li><strong>ADNI Methods</strong>: Jack, C.R., et al. (2008). &quot;The ADNI MRI core.&quot; <em>Alzheimer's &amp; Dementia</em>.</li>
<li><strong>Clinical Utility</strong>: Defined, E., et al. (2021). &quot;MRI volumetry in dementia.&quot; <em>Neuroradiology</em>.</li>
</ol>

{% endraw %}