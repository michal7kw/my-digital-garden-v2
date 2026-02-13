---
created: '2026-02-13T19:12:32.850520Z'
description: Carcinoembryonic antigen is a glycoprotein tumor marker used primarily
  for monitoring colorectal cancer treatment response and recurrence. It is not recommended
  as a primary screening tool due to limited sensitivity and specificity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/cea/
slug: cea
tags:
- biomarker
templateEngineOverride: njk
title: CEA
type: biomarker
updated: '2026-02-13T19:12:32.850520Z'
---

{% raw %}
<h1>CEA</h1>
<h2>Overview</h2>
<p>Carcinoembryonic antigen (CEA) is a glycoprotein involved in cell adhesion that is normally produced during fetal development. After birth, CEA production is suppressed to very low levels in healthy adults. It belongs to the immunoglobulin superfamily and plays a role in intercellular recognition and adhesion.</p>
<p>CEA is used primarily as a tumor marker for colorectal cancer, particularly for monitoring treatment response, detecting recurrence after surgical resection, and assessing prognosis. Rising CEA levels after surgery may indicate cancer recurrence months before clinical detection. CEA can also be elevated in cancers of the pancreas, breast, lung, stomach, and ovary.</p>
<p>Non-malignant conditions that elevate CEA include cigarette smoking, inflammatory bowel disease, pancreatitis, hepatitis, cirrhosis, peptic ulcer disease, and hypothyroidism. Smokers typically have higher baseline CEA levels than non-smokers, necessitating different reference ranges. Due to these limitations in specificity, CEA is not recommended as a standalone screening test for cancer in asymptomatic individuals.</p>
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
<td><strong>Low</strong></td>
<td>&lt;1.0 ng/mL</td>
<td>Normal</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;3.0 ng/mL (non-smokers)</td>
<td>Typical adult range</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;5.0 ng/mL (smokers)</td>
<td>Adjusted range for smokers</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;5.0 ng/mL</td>
<td>Warrants further investigation; serial monitoring recommended</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;2.5 ng/mL</td>
<td>Functional medicine optimal for non-smokers</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Blood (serum)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; every 3 months during active cancer monitoring</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No significant supplement effects on CEA levels have been established in clinical literature.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/cea/" class="internal-link">cea</a> - Carcinoembryonic antigen measurement</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/afp/" class="internal-link">AFP</a> (biomarker) - Co-measured tumor marker panel for GI malignancies</li>
<li>→ <a href="/garden/dev_admin/labtest/ca-125/" class="internal-link">CA 125</a> (biomarker) - Multi-tumor marker panel for cancer staging</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:28407713 - ASCO guidelines for CEA use in colorectal cancer management</li>
<li>PMID:26884596 - CEA as a prognostic marker in colorectal cancer</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CEA]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}