---
{"dg-publish":true,"permalink":"/entities/clinical-pattern/iron-deficiency/","tags":["clinical_pattern","nutritional","iron","anemia","hematologic"]}
---


# Iron Deficiency Pattern

## Overview

Iron Deficiency is the most common nutritional deficiency worldwide, affecting approximately 30% of the global population. It can progress from iron depletion to iron-deficient erythropoiesis to iron deficiency anemia.

Evidence Level: 5/5 (Well-established diagnostic criteria)
Risk Multiplier: 1.3x for anemia-related complications

## Key Biomarkers

- **Ferritin**: Storage iron (< 30 ng/mL indicates depletion)
- **TIBC (Total Iron Binding Capacity)**: Elevated (> 400 ug/dL) when iron deficient
- **Transferrin Saturation**: < 20% indicates functional deficiency

## Stages of Iron Deficiency

1. **Iron Depletion**: Low ferritin, normal hemoglobin
2. **Iron-Deficient Erythropoiesis**: Low ferritin, low transferrin sat, normal Hgb
3. **Iron Deficiency Anemia**: Low ferritin, low Hgb, microcytic RBCs

## Relationships

- REQUIRES_BIOMARKER::[[entities/labtest/ferritin\|Ferritin]]
- REQUIRES_BIOMARKER::[[TIBC\|TIBC]]
- REQUIRES_BIOMARKER::[[entities/biomarker/Transferrin Saturation\|Transferrin Saturation]]
- INCREASES_RISK_FOR::[[entities/condition/Iron Deficiency Anemia\|Iron Deficiency Anemia]]
- INCREASES_RISK_FOR::[[Restless Leg Syndrome\|Restless Leg Syndrome]]
- AFFECTS_ORGAN::[[Bone Marrow\|Bone Marrow]]
- AFFECTS_ORGAN::[[entities/Organ/Brain\|Brain]]
- IMPROVED_BY_SUPPLEMENT::[[Iron Bisglycinate\|Iron Bisglycinate]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Vitamin C\|Vitamin C]]
- MODULATED_BY_PATHWAY::[[Iron Metabolism\|Iron Metabolism]]

## References

- Camaschella C. Iron-Deficiency Anemia. New England Journal of Medicine. 2015
- WHO Guidelines on Daily Iron Supplementation. 2016
