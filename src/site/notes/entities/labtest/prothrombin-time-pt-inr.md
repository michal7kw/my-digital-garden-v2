---
created: '2026-02-13T17:51:32.602483Z'
description: Prothrombin Time (PT) with International Normalized Ratio (INR) test.
  Evaluates the extrinsic and common coagulation pathways (Factors I, II, V, VII,
  X). Essential for monitoring warfarin therapy and assessing liver synthetic function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/labtest/prothrombin-time-pt-inr/
slug: prothrombin-time-pt-inr
tags:
- labtest
templateEngineOverride: njk
title: prothrombin_time_pt_inr
type: labtest
updated: '2026-02-13T17:51:32.602483Z'
---

{% raw %}
<h1>Prothrombin Time PT/INR</h1>
<h2>Overview</h2>
<p>The Prothrombin Time (PT) is a coagulation test that measures the time (in seconds) for plasma to clot after the addition of tissue thromboplastin (tissue factor) and calcium. It evaluates the extrinsic coagulation pathway (Factor VII) and the common pathway (Factors X, V, II/prothrombin, and I/fibrinogen). The International Normalized Ratio (INR) is a standardized calculation derived from the PT that accounts for differences between thromboplastin reagents used by different laboratories.</p>
<p>The INR is the most critical laboratory test for monitoring oral anticoagulation with vitamin K antagonists (warfarin/coumarin). The therapeutic INR range for most indications (atrial fibrillation, DVT/PE treatment, mechanical aortic valve) is 2.0-3.0. For mechanical mitral valves and recurrent thromboembolism, a higher target of 2.5-3.5 is recommended. INR values below the therapeutic range indicate insufficient anticoagulation (thrombotic risk), while values above indicate excessive anticoagulation (bleeding risk).</p>
<p>PT/INR is also valuable for assessing liver synthetic function, as the liver produces most coagulation factors. In acute and chronic liver disease, a prolonged PT/elevated INR indicates impaired hepatic protein synthesis and is a component of the Model for End-Stage Liver Disease (MELD) score used for liver transplant prioritization.</p>
<p><strong>Evidence Level:</strong> ⭐⭐⭐ (3/5)</p>
<h2>Test Information</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Category</strong></td>
<td>Coagulation</td>
</tr>
<tr>
<td><strong>Test Type</strong></td>
<td>Standard</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Blood</td>
</tr>
<tr>
<td><strong>Collection Method</strong></td>
<td>Venipuncture</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>HSA Eligible</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>FSA Eligible</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
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
<td><strong>Normal PT</strong></td>
<td>11-13.5 seconds</td>
<td>Normal coagulation function</td>
</tr>
<tr>
<td><strong>Normal INR (not on warfarin)</strong></td>
<td>0.8-1.1</td>
<td>Normal coagulation</td>
</tr>
<tr>
<td><strong>Therapeutic INR (warfarin)</strong></td>
<td>2.0-3.0</td>
<td>Target for most indications</td>
</tr>
<tr>
<td><strong>High-intensity INR</strong></td>
<td>2.5-3.5</td>
<td>Target for mechanical mitral valve</td>
</tr>
<tr>
<td><strong>Supratherapeutic INR</strong></td>
<td>&gt;4.0</td>
<td>Increased bleeding risk; dose adjustment needed</td>
</tr>
<tr>
<td><strong>Critical INR</strong></td>
<td>&gt;5.0</td>
<td>Significant bleeding risk; urgent intervention</td>
</tr>
</tbody>
</table>
<h2>Recommended For</h2>
<h3>Conditions</h3>
<p>Useful for monitoring or diagnosing:</p>
<ul>
<li><a class="internal-link is-unresolved" href="/404">Warfarin Therapy Monitoring</a></li>
<li><a href="/garden/dev_admin/condition/liver-disease/" class="internal-link">Liver Disease</a></li>
<li><a class="internal-link is-unresolved" href="/404">Coagulopathy</a></li>
<li><a class="internal-link is-unresolved" href="/404">Vitamin K Deficiency</a></li>
<li><a class="internal-link is-unresolved" href="/404">DIC</a></li>
</ul>
<h2>Relationships</h2>
<h3>Measures</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/prothrombin-time/" class="internal-link">Prothrombin Time</a> (biomarker)</li>
</ul>
<h3>Included In</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtestpanel/coagulation-panel/" class="internal-link">coagulation panel</a> (labtestpanel)</li>
</ul>
<h2>Notes</h2>
<ul>
<li>Results should be interpreted by a qualified healthcare provider</li>
<li>Reference ranges may vary by laboratory</li>
<li>INR should be used instead of PT seconds for warfarin monitoring (standardized across labs)</li>
<li>Vitamin K-rich foods (leafy greens) can decrease INR in warfarin patients</li>
<li>Many drugs interact with warfarin and affect INR (antibiotics, NSAIDs, antifungals)</li>
<li>PT/INR is included in the MELD score for liver disease severity assessment</li>
<li>Direct oral anticoagulants (DOACs) do not require routine INR monitoring</li>
</ul>
<hr />
<p><em>Last Updated: 2026-02-07</em></p>

{% endraw %}