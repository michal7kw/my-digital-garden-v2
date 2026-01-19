---
{"dg-publish":true,"permalink":"/entities/clinical-pattern/metabolic-syndrome/","tags":["clinical_pattern","metabolic","cardiovascular","diabetes","inflammation"]}
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

- REQUIRES_BIOMARKER::[[entities/labtest/fasting glucose\|Fasting Glucose]]
- REQUIRES_BIOMARKER::[[entities/labtest/triglycerides\|Triglycerides]]
- REQUIRES_BIOMARKER::[[entities/labtest/hdl cholesterol\|HDL Cholesterol]]
- REQUIRES_BIOMARKER::[[Blood Pressure\|Blood Pressure]]
- INCREASES_RISK_FOR::[[Type 2 Diabetes\|Type 2 Diabetes]]
- INCREASES_RISK_FOR::[[entities/condition/Cardiovascular Disease\|Cardiovascular Disease]]
- INCREASES_RISK_FOR::[[entities/condition/NAFLD\|NAFLD]]
- AFFECTS_ORGAN::[[entities/Organ/Heart\|Heart]]
- AFFECTS_ORGAN::[[entities/Organ/Liver\|Liver]]
- AFFECTS_ORGAN::[[entities/Organ/Pancreas\|Pancreas]]
- IMPROVED_BY_SUPPLEMENT::[[entities/drug/Berberine\|Berberine]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Omega-3 Fatty Acids\|Omega-3 Fatty Acids]]
- RELATED_PATTERN::[[entities/Clinical_pattern/Insulin Resistance\|Insulin Resistance]]

## References

- Alberti KG, et al. Harmonizing the Metabolic Syndrome: A Joint Interim Statement. Circulation. 2009
- Grundy SM, et al. AHA/NHLBI Scientific Statement on Diagnosis and Management. Circulation. 2005
