---
{"dg-publish":true,"permalink":"/entities/clinical-pattern/kidney-stress/","tags":["clinical_pattern","renal","kidney","ckd","filtration"]}
---


# Kidney Stress Pattern

## Overview

Kidney Stress Pattern identifies early kidney dysfunction through elevated creatinine, BUN, and reduced glomerular filtration rate (eGFR). Early detection and management can significantly slow progression to chronic kidney disease.

Evidence Level: 5/5 (KDIGO guideline-based criteria)
Risk Multiplier: 2.0x for CKD progression and cardiovascular events

## Key Biomarkers

- **eGFR**: Estimated glomerular filtration rate (< 60 mL/min/1.73m2 indicates CKD stage 3+)
- **Creatinine**: Muscle metabolism byproduct (> 1.2 mg/dL often elevated)
- **BUN (Blood Urea Nitrogen)**: Protein metabolism marker (> 20 mg/dL may indicate renal stress)

## CKD Staging by eGFR

| Stage | eGFR (mL/min/1.73m2) | Description |
|-------|----------------------|-------------|
| 1 | ≥90 | Normal kidney function |
| 2 | 60-89 | Mildly decreased |
| 3a | 45-59 | Mild to moderately decreased |
| 3b | 30-44 | Moderately to severely decreased |
| 4 | 15-29 | Severely decreased |
| 5 | <15 | Kidney failure |

## Relationships

- REQUIRES_BIOMARKER::[[entities/gene/EGFR\|eGFR]]
- REQUIRES_BIOMARKER::[[entities/labtest/creatinine\|Creatinine]]
- REQUIRES_BIOMARKER::[[BUN\|BUN]]
- INCREASES_RISK_FOR::[[entities/condition/Chronic Kidney Disease\|Chronic Kidney Disease]]
- INCREASES_RISK_FOR::[[entities/condition/Cardiovascular Disease\|Cardiovascular Disease]]
- INCREASES_RISK_FOR::[[Anemia\|Anemia]]
- AFFECTS_ORGAN::[[entities/Organ/Kidneys\|Kidneys]]
- AFFECTS_ORGAN::[[entities/Organ/Heart\|Heart]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Omega-3 Fatty Acids\|Omega-3 Fatty Acids]]
- IMPROVED_BY_SUPPLEMENT::[[Alpha-Lipoic Acid\|Alpha-Lipoic Acid]]
- RELATED_PATTERN::[[entities/Clinical_pattern/Chronic Inflammation\|Chronic Inflammation]]

## References

- KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013
- Levey AS, Coresh J. Chronic Kidney Disease. Lancet. 2012
