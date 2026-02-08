---
created: '2026-02-08T19:25:12.910294Z'
description: Elevated cardiovascular disease risk based on lipid abnormalities, inflammation,
  and other markers.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/ClinicalPattern/cardiovascular-risk-pattern/
slug: cardiovascular-risk-pattern
tags:
- ClinicalPattern
- clinical_pattern
- cardiovascular
- lipids
- heart
- atherosclerosis
title: Cardiovascular Risk Pattern
type: ClinicalPattern
updated: '2026-02-08T19:25:12.910294Z'
---

# Cardiovascular Risk Pattern

## Overview

The Cardiovascular Risk Pattern identifies individuals at elevated risk for heart disease and stroke based on lipid abnormalities, inflammatory markers, and advanced lipid particles. Early identification enables aggressive prevention.

Evidence Level: 5/5 (Guideline-based risk assessment)
Risk Multiplier: 2.2x for cardiovascular events

## Key Biomarkers

- **LDL Cholesterol**: Primary target (> 130 mg/dL elevated)
- **ApoB**: Particle number marker (> 100 mg/dL elevated)
- **Lp(a)**: Genetic risk factor (> 50 nmol/L elevated)
- **hs-CRP**: Inflammatory contribution to risk
- **Triglycerides**: Metabolic component

## Relationships

- REQUIRES_BIOMARKER::[[LDL Cholesterol]]
- REQUIRES_BIOMARKER::[[ApoB]]
- REQUIRES_BIOMARKER::[[Lp(a)]]
- REQUIRES_BIOMARKER::[[hs-CRP]]
- REQUIRES_BIOMARKER::[[Triglycerides]]
- INCREASES_RISK_FOR::[[Coronary Artery Disease]]
- INCREASES_RISK_FOR::[[Myocardial Infarction]]
- INCREASES_RISK_FOR::[[Stroke]]
- AFFECTS_ORGAN::[[Heart]]
- AFFECTS_ORGAN::[[Blood Vessels]]
- IMPROVED_BY_SUPPLEMENT::[[Omega-3 Fatty Acids]]
- IMPROVED_BY_SUPPLEMENT::[[Red Yeast Rice]]
- IMPROVED_BY_SUPPLEMENT::[[CoQ10]]
- RELATED_PATTERN::[[Chronic Inflammation]]

## References

- Grundy SM, et al. 2018 AHA/ACC Guideline on Management of Blood Cholesterol. Circulation. 2019
- Nordestgaard BG, et al. Lipoprotein(a) as a Cardiovascular Risk Factor. Eur Heart J. 2010