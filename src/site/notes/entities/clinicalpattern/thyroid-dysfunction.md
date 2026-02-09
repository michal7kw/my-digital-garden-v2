---
created: '2026-02-09T05:54:31.782298Z'
description: Abnormal thyroid function based on TSH and thyroid hormone levels. Can
  manifest as hypothyroidism or hyperthyroidism affecting metabolism and energy.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/thyroid-dysfunction/
slug: thyroid-dysfunction
tags:
- clinicalpattern
- clinical_pattern
- endocrine
- thyroid
- metabolism
- hormones
templateEngineOverride: njk
title: Thyroid Dysfunction
type: clinicalpattern
updated: '2026-02-09T05:54:31.782298Z'
---

{% raw %}
<h1>Thyroid Dysfunction</h1>
<h2>Overview</h2>
<p>Thyroid Dysfunction encompasses both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid), identified through abnormalities in TSH and thyroid hormone levels. The thyroid gland regulates metabolism, energy, and body temperature.</p>
<p>Evidence Level: 5/5 (Well-established diagnostic criteria)<br />
Risk Multiplier: 1.5x for metabolic and cardiovascular complications</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>TSH (Thyroid Stimulating Hormone)</strong>: Primary screening marker (&lt; 0.4 or &gt; 4.0 mIU/L abnormal)</li>
<li><strong>Free T4</strong>: Active thyroid hormone (&lt; 0.8 or &gt; 1.8 ng/dL abnormal)</li>
<li><strong>Free T3</strong>: Most active hormone form (&lt; 2.3 or &gt; 4.2 pg/mL abnormal)</li>
</ul>
<h2>Pattern Interpretation</h2>
<ul>
<li><strong>High TSH + Low T4/T3</strong> = Primary Hypothyroidism</li>
<li><strong>Low TSH + High T4/T3</strong> = Primary Hyperthyroidism</li>
<li><strong>High TSH + Normal T4</strong> = Subclinical Hypothyroidism</li>
<li><strong>Low TSH + Normal T4</strong> = Subclinical Hyperthyroidism</li>
</ul>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::[[TSH]]</li>
<li>REQUIRES_BIOMARKER::[[Free T4]]</li>
<li>REQUIRES_BIOMARKER::[[Free T3]]</li>
<li>INCREASES_RISK_FOR::[[Hypothyroidism]]</li>
<li>INCREASES_RISK_FOR::[[Hyperthyroidism]]</li>
<li>INCREASES_RISK_FOR::[[Cardiovascular Disease]]</li>
<li>AFFECTS_ORGAN::[[Thyroid]]</li>
<li>AFFECTS_ORGAN::[[Heart]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Selenium]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Zinc]]</li>
<li>MODULATED_BY_PATHWAY::[[Thyroid Hormone Synthesis]]</li>
</ul>
<h2>References</h2>
<ul>
<li>Garber JR, et al. Clinical Practice Guidelines for Hypothyroidism in Adults. Endocr Pract. 2012</li>
<li>Ross DS, et al. 2016 ATA Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016</li>
</ul>

{% endraw %}