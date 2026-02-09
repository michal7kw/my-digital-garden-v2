---
created: '2026-02-09T08:04:40.026872Z'
description: Impaired cellular response to insulin, leading to elevated blood glucose
  and compensatory hyperinsulinemia. Precursor to type 2 diabetes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/insulin-resistance/
slug: insulin-resistance
tags:
- clinicalpattern
- clinical_pattern
- metabolic
- diabetes
- prediabetes
- endocrine
templateEngineOverride: njk
title: Insulin Resistance
type: clinicalpattern
updated: '2026-02-09T08:04:40.026872Z'
---

{% raw %}
<h1>Insulin Resistance</h1>
<h2>Overview</h2>
<p>Insulin Resistance is a pathological condition where cells fail to respond normally to insulin, requiring higher insulin levels to maintain normal blood glucose. It is the central driver of metabolic syndrome and type 2 diabetes.</p>
<p>Evidence Level: 5/5 (Well-established pathophysiology)<br />
Risk Multiplier: 2.0x for progression to type 2 diabetes</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>HOMA-IR</strong>: Primary diagnostic marker (&gt; 2.5 indicates resistance)</li>
<li><strong>Fasting Insulin</strong>: Compensatory elevation (&gt; 10 uIU/mL concerning)</li>
<li><strong>TG/HDL Ratio</strong>: Indirect marker (&gt; 2.0 suggests resistance)</li>
<li><strong>Fasting Glucose</strong>: 100-125 mg/dL (prediabetic range)</li>
</ul>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::<a class="internal-link is-unresolved" href="/404">HOMA-IR</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/fasting-insulin/" class="internal-link">Fasting Insulin</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/triglycerides/" class="internal-link">Triglycerides</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/hdl-cholesterol/" class="internal-link">HDL Cholesterol</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Type 2 Diabetes</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/pcos/" class="internal-link">PCOS</a></li>
<li>PRECURSOR_TO::<a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Pancreas</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Liver</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Muscle</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/berberine/" class="internal-link">Berberine</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/chromium/" class="internal-link">Chromium</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Alpha-Lipoic Acid</a></li>
<li>MODULATED_BY_PATHWAY::<a href="/garden/dev_admin/pathway/insulin-signaling/" class="internal-link">Insulin Signaling</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Reaven GM. Banting Lecture: Role of Insulin Resistance in Human Disease. Diabetes. 1988</li>
<li>DeFronzo RA. Pathogenesis of Type 2 Diabetes Mellitus. Med Clin North Am. 2004</li>
</ul>

{% endraw %}