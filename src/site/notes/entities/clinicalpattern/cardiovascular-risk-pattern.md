---
created: '2026-02-13T14:58:19.546855Z'
description: Elevated cardiovascular disease risk based on lipid abnormalities, inflammation,
  and other markers.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/cardiovascular-risk-pattern/
slug: cardiovascular-risk-pattern
tags:
- clinicalpattern
- clinical_pattern
- cardiovascular
- lipids
- heart
- atherosclerosis
templateEngineOverride: njk
title: Cardiovascular Risk Pattern
type: clinicalpattern
updated: '2026-02-13T14:58:19.546855Z'
---

{% raw %}
<h1>Cardiovascular Risk Pattern</h1>
<h2>Overview</h2>
<p>The Cardiovascular Risk Pattern identifies individuals at elevated risk for heart disease and stroke based on lipid abnormalities, inflammatory markers, and advanced lipid particles. Early identification enables aggressive prevention.</p>
<p>Evidence Level: 5/5 (Guideline-based risk assessment)<br />
Risk Multiplier: 2.2x for cardiovascular events</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>LDL Cholesterol</strong>: Primary target (&gt; 130 mg/dL elevated)</li>
<li><strong>ApoB</strong>: Particle number marker (&gt; 100 mg/dL elevated)</li>
<li><strong>Lp(a)</strong>: Genetic risk factor (&gt; 50 nmol/L elevated)</li>
<li><strong>hs-CRP</strong>: Inflammatory contribution to risk</li>
<li><strong>Triglycerides</strong>: Metabolic component</li>
</ul>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/ldl-cholesterol/" class="internal-link">LDL Cholesterol</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/apob/" class="internal-link">ApoB</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/lpa/" class="internal-link">Lp(a)</a></li>
<li>REQUIRES_BIOMARKER::<a class="internal-link is-unresolved" href="/404">hs-CRP</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/coronary-artery-disease/" class="internal-link">Coronary Artery Disease</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/myocardial-infarction/" class="internal-link">Myocardial Infarction</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Stroke</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Heart</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Blood Vessels</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Red Yeast Rice</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">CoQ10</a></li>
<li>RELATED_PATTERN::<a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Grundy SM, et al. 2018 AHA/ACC Guideline on Management of Blood Cholesterol. Circulation. 2019</li>
<li>Nordestgaard BG, et al. Lipoprotein(a) as a Cardiovascular Risk Factor. Eur Heart J. 2010</li>
</ul>

{% endraw %}