---
created: '2026-02-08T19:25:12.912218Z'
description: A cluster of metabolic abnormalities that increase cardiovascular and
  diabetes risk. Requires 3+ of 5 criteria.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/ClinicalPattern/metabolic-syndrome/
slug: metabolic-syndrome
tags:
- ClinicalPattern
- clinical_pattern
- metabolic
- cardiovascular
- diabetes
- inflammation
title: Metabolic Syndrome
type: ClinicalPattern
updated: '2026-02-08T19:25:12.912218Z'
---

# Metabolic Syndrome

## Overview

Metabolic Syndrome is a cluster of interconnected metabolic abnormalities that significantly increase the risk of cardiovascular disease and type 2 diabetes. It is characterized by insulin resistance as the central pathophysiological driver.

Evidence Level: 5/5 (Well-established diagnostic criteria)
Risk Multiplier: 2.5x for cardiovascular events and diabetes

## Diagnostic Criteria

Diagnosis requires meeting **3 or more** of the following 5 criteria:

1. **Elevated Fasting Glucose**: > 100 mg/dL or on diabetes medication
2. **Elevated Triglycerides**: > 150 mg/dL or on treatment
3. **Reduced HDL Cholesterol**: < 40 mg/dL (men) or < 50 mg/dL (women)
4. **Elevated Blood Pressure**: > 130/85 mmHg or on antihypertensive medication
5. **Increased Waist Circumference**: > 40 in (men) or > 35 in (women)

## Relationships

- REQUIRES_BIOMARKER::[[Fasting Glucose]]
- REQUIRES_BIOMARKER::[[Triglycerides]]
- REQUIRES_BIOMARKER::[[HDL Cholesterol]]
- REQUIRES_BIOMARKER::[[Blood Pressure]]
- INCREASES_RISK_FOR::[[Type 2 Diabetes]]
- INCREASES_RISK_FOR::[[Cardiovascular Disease]]
- INCREASES_RISK_FOR::[[NAFLD]]
- AFFECTS_ORGAN::[[Heart]]
- AFFECTS_ORGAN::[[Liver]]
- AFFECTS_ORGAN::[[Pancreas]]
- IMPROVED_BY_SUPPLEMENT::[[Berberine]]
- IMPROVED_BY_SUPPLEMENT::[[Omega-3 Fatty Acids]]
- RELATED_PATTERN::[[Insulin Resistance]]

## References

- Alberti KG, et al. Harmonizing the Metabolic Syndrome: A Joint Interim Statement. Circulation. 2009
- Grundy SM, et al. AHA/NHLBI Scientific Statement on Diagnosis and Management. Circulation. 2005