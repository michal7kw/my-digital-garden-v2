---
created: '2026-04-17T18:59:20.351725Z'
description: Panel of tumor markers used for cancer screening and monitoring. Includes
  PSA for prostate, CEA for colorectal, CA-125 for ovarian, and AFP for liver/testicular
  cancers. Best used in conjunction with imaging and clinical evaluation.
dg-home: false
dg-publish: true
permalink: /entities/labtestpanel/cancer-screening-panel/
slug: cancer-screening-panel
tags:
- labtestpanel
templateEngineOverride: njk
title: cancer_screening_panel
type: labtestpanel
updated: '2026-04-17T18:59:20.351725Z'
---

{% raw %}
<h1>cancer_screening_panel</h1>
<h2>Overview</h2>
<p>The Cancer Screening Panel combines multiple tumor markers to provide a broad initial assessment of cancer risk across several organ systems. Each marker has specificity for particular cancer types: PSA for prostate cancer, CEA for colorectal and gastrointestinal malignancies, CA-125 for ovarian cancer, and AFP for hepatocellular carcinoma and testicular germ cell tumors.</p>
<p>It is important to note that tumor markers can be elevated in benign conditions and may not detect all cancers. Elevated results require follow-up with imaging studies and clinical evaluation. This panel is best used as part of a comprehensive cancer screening strategy rather than as a standalone diagnostic tool. Serial monitoring of tumor marker trends is often more informative than single measurements.</p>
<h2>Included Tests</h2>
<ul>
<li><a href="/entities/labtest/afp/" class="internal-link">afp</a> -- Alpha-fetoprotein for liver and testicular cancer screening</li>
<li><a href="/entities/labtest/cea/" class="internal-link">cea</a> -- Carcinoembryonic antigen for colorectal and GI cancer monitoring</li>
<li><a href="/entities/labtest/prostate-specific-antigen-psa-total/" class="internal-link">prostate specific antigen psa total</a> -- Total PSA for prostate cancer screening</li>
<li><a class="internal-link is-unresolved" href="/404">ca-125</a> -- Cancer antigen 125 for ovarian cancer screening</li>
</ul>
<h2>Clinical Indications</h2>
<ul>
<li>Routine cancer screening in at-risk populations</li>
<li>Family history of prostate, ovarian, colorectal, or liver cancer</li>
<li>Monitoring treatment response in diagnosed cancer patients</li>
<li>Post-treatment surveillance for cancer recurrence</li>
<li>Baseline assessment for individuals over age 50</li>
</ul>
<h2>Relationships</h2>
<p>INCLUDES_TEST::<a href="/entities/labtest/afp/" class="internal-link">afp</a><br />
INCLUDES_TEST::<a href="/entities/labtest/cea/" class="internal-link">cea</a><br />
INCLUDES_TEST::<a href="/entities/labtest/prostate-specific-antigen-psa-total/" class="internal-link">prostate specific antigen psa total</a><br />
INCLUDES_TEST::<a class="internal-link is-unresolved" href="/404">ca-125</a><br />
USED_FOR::<a href="/entities/condition/cancer/" class="internal-link">Cancer</a><br />
ASSOCIATED_WITH::<a href="/entities/organ/liver/" class="internal-link">Liver</a><br />
ASSOCIATED_WITH::<a class="internal-link is-unresolved" href="/404">Prostate</a></p>

{% endraw %}