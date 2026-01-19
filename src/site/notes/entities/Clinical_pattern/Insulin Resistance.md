---
{"dg-publish":true,"permalink":"/entities/clinical-pattern/insulin-resistance/","tags":["clinical_pattern","metabolic","diabetes","prediabetes","endocrine"]}
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

- REQUIRES_BIOMARKER::[[HOMA-IR\|HOMA-IR]]
- REQUIRES_BIOMARKER::[[entities/labtest/fasting insulin\|Fasting Insulin]]
- REQUIRES_BIOMARKER::[[entities/labtest/triglycerides\|Triglycerides]]
- REQUIRES_BIOMARKER::[[entities/labtest/hdl cholesterol\|HDL Cholesterol]]
- INCREASES_RISK_FOR::[[Type 2 Diabetes\|Type 2 Diabetes]]
- INCREASES_RISK_FOR::[[entities/condition/PCOS\|PCOS]]
- PRECURSOR_TO::[[entities/Clinical_pattern/Metabolic Syndrome\|Metabolic Syndrome]]
- AFFECTS_ORGAN::[[entities/Organ/Pancreas\|Pancreas]]
- AFFECTS_ORGAN::[[entities/Organ/Liver\|Liver]]
- AFFECTS_ORGAN::[[entities/Organ/Muscle\|Muscle]]
- IMPROVED_BY_SUPPLEMENT::[[entities/drug/Berberine\|Berberine]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Chromium\|Chromium]]
- IMPROVED_BY_SUPPLEMENT::[[Alpha-Lipoic Acid\|Alpha-Lipoic Acid]]
- MODULATED_BY_PATHWAY::[[entities/pathway/Insulin Signaling\|Insulin Signaling]]

## References

- Reaven GM. Banting Lecture: Role of Insulin Resistance in Human Disease. Diabetes. 1988
- DeFronzo RA. Pathogenesis of Type 2 Diabetes Mellitus. Med Clin North Am. 2004
