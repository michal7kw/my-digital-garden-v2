---
created: '2026-02-08T19:45:44.453372Z'
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
title: Thyroid Dysfunction
type: clinicalpattern
updated: '2026-02-08T19:45:44.453372Z'
---

# Thyroid Dysfunction

## Overview

Thyroid Dysfunction encompasses both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid), identified through abnormalities in TSH and thyroid hormone levels. The thyroid gland regulates metabolism, energy, and body temperature.

Evidence Level: 5/5 (Well-established diagnostic criteria)
Risk Multiplier: 1.5x for metabolic and cardiovascular complications

## Key Biomarkers

- **TSH (Thyroid Stimulating Hormone)**: Primary screening marker (< 0.4 or > 4.0 mIU/L abnormal)
- **Free T4**: Active thyroid hormone (< 0.8 or > 1.8 ng/dL abnormal)
- **Free T3**: Most active hormone form (< 2.3 or > 4.2 pg/mL abnormal)

## Pattern Interpretation

- **High TSH + Low T4/T3** = Primary Hypothyroidism
- **Low TSH + High T4/T3** = Primary Hyperthyroidism
- **High TSH + Normal T4** = Subclinical Hypothyroidism
- **Low TSH + Normal T4** = Subclinical Hyperthyroidism

## Relationships

- REQUIRES_BIOMARKER::[[TSH]]
- REQUIRES_BIOMARKER::[[Free T4]]
- REQUIRES_BIOMARKER::[[Free T3]]
- INCREASES_RISK_FOR::[[Hypothyroidism]]
- INCREASES_RISK_FOR::[[Hyperthyroidism]]
- INCREASES_RISK_FOR::[[Cardiovascular Disease]]
- AFFECTS_ORGAN::[[Thyroid]]
- AFFECTS_ORGAN::[[Heart]]
- IMPROVED_BY_SUPPLEMENT::[[Selenium]]
- IMPROVED_BY_SUPPLEMENT::[[Zinc]]
- MODULATED_BY_PATHWAY::[[Thyroid Hormone Synthesis]]

## References

- Garber JR, et al. Clinical Practice Guidelines for Hypothyroidism in Adults. Endocr Pract. 2012
- Ross DS, et al. 2016 ATA Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016