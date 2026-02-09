---
created: '2026-02-09T05:54:31.774939Z'
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
updated: '2026-02-09T05:54:31.774939Z'
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
<li>REQUIRES_BIOMARKER::[[LDL Cholesterol]]</li>
<li>REQUIRES_BIOMARKER::[[ApoB]]</li>
<li>REQUIRES_BIOMARKER::[[Lp(a)]]</li>
<li>REQUIRES_BIOMARKER::[[hs-CRP]]</li>
<li>REQUIRES_BIOMARKER::[[Triglycerides]]</li>
<li>INCREASES_RISK_FOR::[[Coronary Artery Disease]]</li>
<li>INCREASES_RISK_FOR::[[Myocardial Infarction]]</li>
<li>INCREASES_RISK_FOR::[[Stroke]]</li>
<li>AFFECTS_ORGAN::[[Heart]]</li>
<li>AFFECTS_ORGAN::[[Blood Vessels]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Omega-3 Fatty Acids]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Red Yeast Rice]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[CoQ10]]</li>
<li>RELATED_PATTERN::[[Chronic Inflammation]]</li>
</ul>
<h2>References</h2>
<ul>
<li>Grundy SM, et al. 2018 AHA/ACC Guideline on Management of Blood Cholesterol. Circulation. 2019</li>
<li>Nordestgaard BG, et al. Lipoprotein(a) as a Cardiovascular Risk Factor. Eur Heart J. 2010</li>
</ul>

{% endraw %}