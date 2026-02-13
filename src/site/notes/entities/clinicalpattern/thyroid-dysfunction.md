---
created: '2026-02-13T19:04:38.052083Z'
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
updated: '2026-02-13T19:04:38.052083Z'
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
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/tsh/" class="internal-link">TSH</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/free-t4/" class="internal-link">Free T4</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/free-t3/" class="internal-link">Free T3</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Hypothyroidism</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Thyroid</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Heart</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/selenium/" class="internal-link">Selenium</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/zinc/" class="internal-link">Zinc</a></li>
<li>MODULATED_BY_PATHWAY::<a class="internal-link is-unresolved" href="/404">Thyroid Hormone Synthesis</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Garber JR, et al. Clinical Practice Guidelines for Hypothyroidism in Adults. Endocr Pract. 2012</li>
<li>Ross DS, et al. 2016 ATA Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016</li>
</ul>

{% endraw %}