---
created: '2026-02-13T19:04:39.008756Z'
description: Recording of brain electrical activity used for seizure detection, encephalopathy
  assessment, and prognostication after cardiac arrest. Shows characteristic slowing
  in neurodegenerative diseases.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/examination/eeg/
slug: eeg
tags:
- examination
- neurophysiology
- brain-activity
- seizure
- prognosis
templateEngineOverride: njk
title: EEG
type: examination
updated: '2026-02-13T19:04:39.008756Z'
---

{% raw %}
<h1>EEG (Electroencephalography)</h1>
<h2>Overview</h2>
<p>Electroencephalography (EEG) records the brain's electrical activity through scalp electrodes. While primarily used for epilepsy diagnosis, EEG provides valuable information in neurodegenerative diseases, including characteristic patterns in Creutzfeldt-Jakob disease (CJD), assessment of delirium/encephalopathy, and prognostication after cardiac arrest. Quantitative EEG (qEEG) is increasingly used in dementia research.</p>
<h2>Technical Aspects</h2>
<h3>Standard Recording</h3>
<ul>
<li><strong>Electrodes</strong>: 21-channel (10-20 system) or higher density</li>
<li><strong>Duration</strong>: 20-60 minutes routine; longer for sleep/activation</li>
<li><strong>Activations</strong>: Hyperventilation, photic stimulation, sleep</li>
</ul>
<h3>Quantitative EEG (qEEG)</h3>
<ul>
<li>Computer-analyzed spectral power</li>
<li>Frequency band analysis (delta, theta, alpha, beta)</li>
<li>Coherence and connectivity measures</li>
<li>Research tool for dementia</li>
</ul>
<h2>EEG Findings in Neurodegeneration</h2>
<h3>Alzheimer's Disease</h3>
<ul>
<li><strong>Slowing</strong>: Decreased alpha, increased theta/delta</li>
<li><strong>Alpha rhythm</strong>: Reduced frequency (slowed posterior dominant rhythm)</li>
<li><strong>Reduced complexity</strong>: Lower entropy on qEEG</li>
<li><strong>Correlates</strong> with cognitive impairment severity</li>
</ul>
<h3>Lewy Body Dementia</h3>
<ul>
<li>More pronounced slowing than AD</li>
<li><strong>Fluctuations</strong> visible on serial recordings</li>
<li>Transient sharp waves (posterior)</li>
<li>May help differentiate from AD</li>
</ul>
<h3>Frontotemporal Dementia</h3>
<ul>
<li>Often <strong>normal EEG</strong> in early stages</li>
<li>Frontal slowing may develop</li>
<li>Less pronounced than AD</li>
</ul>
<h3>Creutzfeldt-Jakob Disease</h3>
<ul>
<li><strong>Periodic sharp wave complexes (PSWCs)</strong></li>
<li>1-2 Hz, often triphasic</li>
<li>Highly specific (but late finding)</li>
<li>Sensitivity ~65%, specificity ~90%</li>
<li>May be absent in variant CJD</li>
</ul>
<h3>Hepatic/Metabolic Encephalopathy</h3>
<ul>
<li><strong>Triphasic waves</strong> (anterior predominant)</li>
<li>Diffuse slowing</li>
<li>Helps differentiate from CJD</li>
</ul>
<h2>Clinical Applications</h2>
<h3>Dementia Workup</h3>
<ul>
<li>Exclude seizures as cause of cognitive symptoms</li>
<li>CJD screening (PSWCs)</li>
<li>Differentiate delirium from dementia</li>
<li>DLB vs AD (degree of slowing)</li>
</ul>
<h3>Seizure Detection</h3>
<ul>
<li>Non-convulsive status epilepticus in dementia</li>
<li>Transient epileptic amnesia</li>
<li>Post-ictal confusion</li>
</ul>
<h3>Prognostication After Cardiac Arrest</h3>
<ul>
<li>Part of multimodal assessment</li>
<li>Malignant patterns (suppression-burst, unreactive)</li>
<li>Predicts poor neurological outcome</li>
<li>Combined with NSE, SSEPs, imaging</li>
</ul>
<h3>Delirium vs Dementia</h3>
<ul>
<li>Delirium: More pronounced slowing, triphasic waves</li>
<li>Dementia: Baseline slowing, less dramatic</li>
<li>Serial EEGs helpful for fluctuating states</li>
</ul>
<h2>Advanced EEG Techniques</h2>
<h3>Quantitative EEG (qEEG) in Dementia Research</h3>
<table>
<thead>
<tr>
<th>Measure</th>
<th>AD Finding</th>
<th>Utility</th>
</tr>
</thead>
<tbody>
<tr>
<td>Alpha power</td>
<td>Decreased</td>
<td>Correlates with cognition</td>
</tr>
<tr>
<td>Theta/alpha ratio</td>
<td>Increased</td>
<td>Severity marker</td>
</tr>
<tr>
<td>Coherence</td>
<td>Reduced</td>
<td>Disconnection</td>
</tr>
<tr>
<td>Spectral entropy</td>
<td>Decreased</td>
<td>Complexity loss</td>
</tr>
</tbody>
</table>
<h3>Event-Related Potentials (ERPs)</h3>
<ul>
<li><strong>P300</strong>: Prolonged latency in AD</li>
<li><strong>MMN (Mismatch negativity)</strong>: Auditory processing</li>
<li>Research biomarker for early detection</li>
</ul>
<h3>High-Density EEG</h3>
<ul>
<li>64-256 channels</li>
<li>Better spatial resolution</li>
<li>Source localization</li>
<li>Research applications</li>
</ul>
<h2>Relationships</h2>
<h3>Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/creutzfeldt-jakob-disease/" class="internal-link">Creutzfeldt-Jakob Disease</a> (condition) - <em>PSWCs diagnostic</em></li>
<li>→ <a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> (condition) - <em>Diffuse slowing</em></li>
<li>→ <a href="/garden/dev_admin/condition/lewy-body-dementia/" class="internal-link">Lewy Body Dementia</a> (condition) - <em>Marked slowing</em></li>
<li>→ <a href="/garden/dev_admin/condition/epilepsy/" class="internal-link">Epilepsy</a> (condition) - <em>Primary indication</em></li>
<li>→ <a href="/garden/dev_admin/condition/delirium/" class="internal-link">Delirium</a> (condition) - <em>Triphasic waves, slowing</em></li>
</ul>
<h3>Related Examinations</h3>
<ul>
<li>← <a href="/garden/dev_admin/examination/neuropsychological-testing/" class="internal-link">Neuropsychological Testing</a> (examination) - <em>Cognitive correlate</em></li>
<li>← <a href="/garden/dev_admin/examination/mri-volumetry/" class="internal-link">MRI Volumetry</a> (examination) - <em>Structural correlate</em></li>
<li>→ <a href="/garden/dev_admin/examination/evoked-potentials/" class="internal-link">Evoked Potentials</a> (examination) - <em>Related technique</em></li>
</ul>
<h3>Biomarkers</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/nse/" class="internal-link">NSE</a> (biomarker) - <em>Combined in cardiac arrest prognosis</em></li>
<li>→ <a href="/garden/dev_admin/biomarker/neurofilament-light-chain/" class="internal-link">Neurofilament Light Chain</a> (biomarker) - <em>Neurodegeneration</em></li>
</ul>
<h2>Interpretation Guide</h2>
<h3>Normal Findings</h3>
<ul>
<li>Posterior dominant rhythm 8-13 Hz (alpha)</li>
<li>Symmetric, reactive to eye opening</li>
<li>Beta activity anteriorly</li>
<li>Appropriate sleep architecture if recorded</li>
</ul>
<h3>Abnormal Patterns</h3>
<table>
<thead>
<tr>
<th>Pattern</th>
<th>Significance</th>
</tr>
</thead>
<tbody>
<tr>
<td>Generalized slowing</td>
<td>Encephalopathy, dementia</td>
</tr>
<tr>
<td>Focal slowing</td>
<td>Structural lesion</td>
</tr>
<tr>
<td>Epileptiform discharges</td>
<td>Epilepsy risk</td>
</tr>
<tr>
<td>Triphasic waves</td>
<td>Metabolic encephalopathy</td>
</tr>
<tr>
<td>PSWCs</td>
<td>CJD</td>
</tr>
<tr>
<td>Suppression-burst</td>
<td>Severe encephalopathy</td>
</tr>
</tbody>
</table>
<h3>Caveats</h3>
<ul>
<li>Medications affect EEG (benzodiazepines, antiepileptics)</li>
<li>Age-related slowing is normal (mild)</li>
<li>Single EEG has limited sensitivity for seizures</li>
<li>Normal EEG doesn't exclude pathology</li>
</ul>
<h2>Practical Considerations</h2>
<h3>Indications for EEG in Dementia</h3>
<ol>
<li>Rapidly progressive dementia (CJD concern)</li>
<li>Fluctuating consciousness (DLB, delirium)</li>
<li>Episodic symptoms (seizures, TIA)</li>
<li>Encephalopathy assessment</li>
<li>Post-cardiac arrest prognosis</li>
</ol>
<h3>Not Routinely Indicated</h3>
<ul>
<li>Typical, slowly progressive AD</li>
<li>Routine MCI evaluation</li>
<li>Screening without specific indication</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>CJD</strong>: Steinhoff, B.J., et al. (2004). &quot;Diagnostic value of periodic complexes in CJD.&quot; <em>Annals of Neurology</em>.</li>
<li><strong>Dementia qEEG</strong>: Babiloni, C., et al. (2020). &quot;EEG markers in AD.&quot; <em>Neurobiology of Aging</em>.</li>
<li><strong>Cardiac Arrest</strong>: Rossetti, A.O., et al. (2022). &quot;EEG and outcome after cardiac arrest.&quot; <em>Neurology</em>.</li>
</ol>

{% endraw %}