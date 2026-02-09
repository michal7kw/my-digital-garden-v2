---
created: '2026-02-09T05:54:31.781115Z'
description: A cluster of metabolic abnormalities that increase cardiovascular and
  diabetes risk. Requires 3+ of 5 criteria.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/metabolic-syndrome/
slug: metabolic-syndrome
tags:
- clinicalpattern
- clinical_pattern
- metabolic
- cardiovascular
- diabetes
- inflammation
templateEngineOverride: njk
title: Metabolic Syndrome
type: clinicalpattern
updated: '2026-02-09T05:54:31.781115Z'
---

{% raw %}
<h1>Metabolic Syndrome</h1>
<h2>Overview</h2>
<p>Metabolic Syndrome is a cluster of interconnected metabolic abnormalities that significantly increase the risk of cardiovascular disease and type 2 diabetes. It is characterized by insulin resistance as the central pathophysiological driver.</p>
<p>Evidence Level: 5/5 (Well-established diagnostic criteria)<br />
Risk Multiplier: 2.5x for cardiovascular events and diabetes</p>
<h2>Diagnostic Criteria</h2>
<p>Diagnosis requires meeting <strong>3 or more</strong> of the following 5 criteria:</p>
<ol>
<li><strong>Elevated Fasting Glucose</strong>: &gt; 100 mg/dL or on diabetes medication</li>
<li><strong>Elevated Triglycerides</strong>: &gt; 150 mg/dL or on treatment</li>
<li><strong>Reduced HDL Cholesterol</strong>: &lt; 40 mg/dL (men) or &lt; 50 mg/dL (women)</li>
<li><strong>Elevated Blood Pressure</strong>: &gt; 130/85 mmHg or on antihypertensive medication</li>
<li><strong>Increased Waist Circumference</strong>: &gt; 40 in (men) or &gt; 35 in (women)</li>
</ol>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::[[Fasting Glucose]]</li>
<li>REQUIRES_BIOMARKER::[[Triglycerides]]</li>
<li>REQUIRES_BIOMARKER::[[HDL Cholesterol]]</li>
<li>REQUIRES_BIOMARKER::[[Blood Pressure]]</li>
<li>INCREASES_RISK_FOR::[[Type 2 Diabetes]]</li>
<li>INCREASES_RISK_FOR::[[Cardiovascular Disease]]</li>
<li>INCREASES_RISK_FOR::[[NAFLD]]</li>
<li>AFFECTS_ORGAN::[[Heart]]</li>
<li>AFFECTS_ORGAN::[[Liver]]</li>
<li>AFFECTS_ORGAN::[[Pancreas]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Berberine]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Omega-3 Fatty Acids]]</li>
<li>RELATED_PATTERN::[[Insulin Resistance]]</li>
</ul>
<h2>References</h2>
<ul>
<li>Alberti KG, et al. Harmonizing the Metabolic Syndrome: A Joint Interim Statement. Circulation. 2009</li>
<li>Grundy SM, et al. AHA/NHLBI Scientific Statement on Diagnosis and Management. Circulation. 2005</li>
</ul>

{% endraw %}