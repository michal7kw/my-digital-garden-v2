---
created: '2026-02-08T19:29:31.582900Z'
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
title: Insulin Resistance
type: clinicalpattern
updated: '2026-02-08T19:29:31.582900Z'
---

# Insulin Resistance

## Overview

Insulin Resistance is a pathological condition where cells fail to respond normally to insulin, requiring higher insulin levels to maintain normal blood glucose. It is the central driver of metabolic syndrome and type 2 diabetes.

Evidence Level: 5/5 (Well-established pathophysiology)
Risk Multiplier: 2.0x for progression to type 2 diabetes

## Key Biomarkers

- **HOMA-IR**: Primary diagnostic marker (> 2.5 indicates resistance)
- **Fasting Insulin**: Compensatory elevation (> 10 uIU/mL concerning)
- **TG/HDL Ratio**: Indirect marker (> 2.0 suggests resistance)
- **Fasting Glucose**: 100-125 mg/dL (prediabetic range)

## Relationships

- REQUIRES_BIOMARKER::[[HOMA-IR]]
- REQUIRES_BIOMARKER::[[Fasting Insulin]]
- REQUIRES_BIOMARKER::[[Triglycerides]]
- REQUIRES_BIOMARKER::[[HDL Cholesterol]]
- INCREASES_RISK_FOR::[[Type 2 Diabetes]]
- INCREASES_RISK_FOR::[[PCOS]]
- PRECURSOR_TO::[[Metabolic Syndrome]]
- AFFECTS_ORGAN::[[Pancreas]]
- AFFECTS_ORGAN::[[Liver]]
- AFFECTS_ORGAN::[[Muscle]]
- IMPROVED_BY_SUPPLEMENT::[[Berberine]]
- IMPROVED_BY_SUPPLEMENT::[[Chromium]]
- IMPROVED_BY_SUPPLEMENT::[[Alpha-Lipoic Acid]]
- MODULATED_BY_PATHWAY::[[Insulin Signaling]]

## References

- Reaven GM. Banting Lecture: Role of Insulin Resistance in Human Disease. Diabetes. 1988
- DeFronzo RA. Pathogenesis of Type 2 Diabetes Mellitus. Med Clin North Am. 2004