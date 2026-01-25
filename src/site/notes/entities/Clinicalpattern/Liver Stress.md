---
{"dg-publish":true,"permalink":"/entities/clinicalpattern/liver-stress/","tags":["clinical_pattern","hepatic","liver","enzymes","nafld"]}
---


# Liver Stress Pattern

## Overview

The Liver Stress Pattern identifies individuals with elevated liver enzymes, indicating hepatocyte damage or stress. This pattern can be caused by fatty liver disease (NAFLD/NASH), alcohol consumption, medications, or viral hepatitis.

Evidence Level: 4/5 (Well-established clinical markers)
Risk Multiplier: 1.8x for liver disease progression

## Key Biomarkers

- **ALT (Alanine Aminotransferase)**: Primary liver enzyme (> 40 U/L elevated)
- **AST (Aspartate Aminotransferase)**: Liver and muscle enzyme (> 40 U/L elevated)
- **GGT (Gamma-Glutamyl Transferase)**: Biliary enzyme (> 60 U/L elevated)
- **AST/ALT Ratio**: > 2.0 suggests alcoholic liver disease

## Relationships

- REQUIRES_BIOMARKER::[[ALT\|ALT]]
- REQUIRES_BIOMARKER::[[AST\|AST]]
- REQUIRES_BIOMARKER::[[GGT\|GGT]]
- INCREASES_RISK_FOR::[[entities/condition/Non-alcoholic Fatty Liver Disease\|Non-Alcoholic Fatty Liver Disease]]
- INCREASES_RISK_FOR::[[Cirrhosis\|Cirrhosis]]
- AFFECTS_ORGAN::[[entities/Organ/Liver\|Liver]]
- AFFECTS_ORGAN::[[Gallbladder\|Gallbladder]]
- IMPROVED_BY_SUPPLEMENT::[[Milk Thistle\|Milk Thistle]]
- IMPROVED_BY_SUPPLEMENT::[[N-Acetyl Cysteine\|N-Acetyl Cysteine]]
- IMPROVED_BY_SUPPLEMENT::[[entities/Supplement/Vitamin E\|Vitamin E]]
- RELATED_PATTERN::[[entities/Clinicalpattern/Metabolic Syndrome\|Metabolic Syndrome]]

## References

- Chalasani N, et al. AASLD Practice Guidance on Diagnosis and Management of NAFLD. Hepatology. 2018
- European Association for Study of Liver. EASL Clinical Practice Guidelines on NAFLD. J Hepatol. 2016
