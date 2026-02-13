---
created: '2026-02-13T18:51:24.838599Z'
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
updated: '2026-02-13T18:51:24.838599Z'
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
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/fasting-glucose/" class="internal-link">Fasting Glucose</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL Cholesterol</a></li>
<li>REQUIRES_BIOMARKER::<a class="internal-link is-unresolved" href="/404">Blood Pressure</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Type 2 Diabetes</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/nafld/" class="internal-link">NAFLD</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Heart</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Liver</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Pancreas</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a></li>
<li>RELATED_PATTERN::<a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Alberti KG, et al. Harmonizing the Metabolic Syndrome: A Joint Interim Statement. Circulation. 2009</li>
<li>Grundy SM, et al. AHA/NHLBI Scientific Statement on Diagnosis and Management. Circulation. 2005</li>
</ul>

{% endraw %}