---
created: '2026-02-09T08:04:40.804899Z'
description: Panel of tumor markers used for cancer screening and monitoring. Includes
  PSA for prostate, CEA for colorectal, CA-125 for ovarian, and AFP for liver/testicular
  cancers. Best used in conjunction with imaging and clinical evaluation.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/labtestpanel/cancer-screening-panel/
slug: cancer-screening-panel
tags:
- labtestpanel
templateEngineOverride: njk
title: cancer_screening_panel
type: labtestpanel
updated: '2026-02-09T08:04:40.804899Z'
---

{% raw %}
<h1>Cancer Screening Panel</h1>
<h2>Overview</h2>
<p>The Cancer Screening Panel combines four widely used tumor markers to provide a multi-organ cancer surveillance strategy. Each marker has established clinical utility for detecting or monitoring specific malignancies, and when assessed together, they offer broad coverage across several of the most common cancer types. This panel is most valuable for individuals at elevated cancer risk due to age, family history, or prior malignancy.</p>
<p>Prostate-Specific Antigen (PSA Total) is the primary serum marker for prostate cancer screening in men over 50 (or 40 with risk factors), though elevated levels can also occur with benign prostatic hyperplasia and prostatitis. Carcinoembryonic Antigen (CEA) is predominantly used for colorectal cancer monitoring and recurrence surveillance, with clinical utility extending to gastric, pancreatic, breast, and lung cancers. CA-125 (Cancer Antigen 125) is the standard marker for ovarian cancer, used for screening high-risk women and monitoring treatment response, though it may also be elevated in endometriosis, pelvic inflammatory disease, and other benign conditions.</p>
<p>Alpha-Fetoprotein (AFP) serves dual roles as a marker for hepatocellular carcinoma (particularly in patients with cirrhosis or chronic hepatitis B/C) and non-seminomatous testicular germ cell tumors. It is important to recognize that tumor markers have inherent limitations in sensitivity and specificity, and elevated levels always require correlation with imaging studies, clinical history, and often biopsy for definitive diagnosis.</p>
<h2>Included Tests</h2>
<table>
<thead>
<tr>
<th>Test</th>
<th>Biomarker</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/garden/dev_admin/labtest/prostate-specific-antigen-psa-total/" class="internal-link">prostate specific antigen psa total</a></td>
<td>PSA Total</td>
<td>Screen for prostate cancer; monitor treatment response</td>
</tr>
<tr>
<td><a href="/garden/dev_admin/labtest/cea/" class="internal-link">cea</a></td>
<td>Carcinoembryonic Antigen</td>
<td>Monitor colorectal cancer; detect recurrence in GI malignancies</td>
</tr>
<tr>
<td><a class="internal-link is-unresolved" href="/404">ca-125</a></td>
<td>Cancer Antigen 125</td>
<td>Screen for ovarian cancer; monitor treatment response</td>
</tr>
<tr>
<td><a href="/garden/dev_admin/labtest/afp/" class="internal-link">afp</a></td>
<td>Alpha-Fetoprotein</td>
<td>Screen for hepatocellular carcinoma and testicular cancer</td>
</tr>
</tbody>
</table>
<h2>Recommended For</h2>
<ul>
<li>Cancer screening in adults aged 50 and older</li>
<li>Cancer recurrence monitoring in patients with prior malignancy</li>
<li>High-risk individuals with strong family history of cancer</li>
<li>Chronic liver disease patients (hepatitis B/C, cirrhosis) for HCC surveillance</li>
<li>Ovarian cancer surveillance in women with BRCA1/2 mutations or family history</li>
</ul>
<h2>Clinical Interpretation</h2>
<p>Tumor markers must always be interpreted in clinical context and never used as standalone diagnostic tests. PSA levels above 4.0 ng/mL warrant further evaluation with digital rectal exam and potentially MRI-guided biopsy, though age-specific ranges and PSA velocity provide additional diagnostic refinement. CEA is most useful for post-treatment surveillance of colorectal cancer; a rising trend from a nadir value strongly suggests recurrence even if absolute values remain within the reference range. CA-125 above 35 U/mL in postmenopausal women with a pelvic mass has high positive predictive value for ovarian malignancy, but premenopausal elevations are often benign. AFP above 400 ng/mL in a patient with known cirrhosis is highly suggestive of hepatocellular carcinoma. Serial trending of all markers is more clinically useful than isolated values, and any significant elevation should prompt appropriate imaging and specialist referral rather than repeat testing alone.</p>
<h2>Relationships</h2>
<h3>Included In</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/prostate-specific-antigen-psa-total/" class="internal-link">prostate specific antigen psa total</a> (labtest)</li>
<li><a href="/garden/dev_admin/labtest/cea/" class="internal-link">cea</a> (labtest)</li>
<li><a href="/garden/dev_admin/labtest/ca-125/" class="internal-link">ca-125</a> (labtest)</li>
<li><a href="/garden/dev_admin/labtest/afp/" class="internal-link">afp</a> (labtest)</li>
</ul>
<hr />
<p><em>Last Updated: 2026-02-07</em></p>

{% endraw %}