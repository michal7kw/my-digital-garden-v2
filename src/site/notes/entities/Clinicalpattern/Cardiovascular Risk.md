---
{"dg-publish":true,"permalink":"/entities/clinicalpattern/cardiovascular-risk/","tags":["clinical_pattern","cardiovascular","lipids","heart","atherosclerosis"]}
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

- REQUIRES_BIOMARKER::[[entities/labtest/ldl cholesterol\|LDL Cholesterol]]
- REQUIRES_BIOMARKER::[[ApoB\|ApoB]]
- REQUIRES_BIOMARKER::[[Lp(a)\|Lp(a)]]
- REQUIRES_BIOMARKER::[[hs-CRP\|hs-CRP]]
- REQUIRES_BIOMARKER::[[entities/labtest/triglycerides\|Triglycerides]]
- INCREASES_RISK_FOR::[[entities/condition/Coronary Artery Disease\|Coronary Artery Disease]]
- INCREASES_RISK_FOR::[[entities/condition/Myocardial Infarction\|Myocardial Infarction]]
- INCREASES_RISK_FOR::[[Stroke\|Stroke]]
- AFFECTS_ORGAN::[[entities/Organ/Heart\|Heart]]
- AFFECTS_ORGAN::[[Blood Vessels\|Blood Vessels]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Omega-3 Fatty Acids\|Omega-3 Fatty Acids]]
- IMPROVED_BY_SUPPLEMENT::[[Red Yeast Rice\|Red Yeast Rice]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/CoQ10\|CoQ10]]
- RELATED_PATTERN::[[entities/Clinicalpattern/Chronic Inflammation\|Chronic Inflammation]]

## References

- Grundy SM, et al. 2018 AHA/ACC Guideline on Management of Blood Cholesterol. Circulation. 2019
- Nordestgaard BG, et al. Lipoprotein(a) as a Cardiovascular Risk Factor. Eur Heart J. 2010
