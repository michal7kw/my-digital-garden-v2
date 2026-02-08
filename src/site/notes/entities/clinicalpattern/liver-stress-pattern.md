---
created: '2026-02-08T19:29:31.583594Z'
description: Elevated liver enzymes indicating hepatocyte damage or stress. May suggest
  fatty liver disease, medication toxicity, or other hepatic conditions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/liver-stress-pattern/
slug: liver-stress-pattern
tags:
- clinicalpattern
- clinical_pattern
- hepatic
- liver
- enzymes
- nafld
title: Liver Stress Pattern
type: clinicalpattern
updated: '2026-02-08T19:29:31.583594Z'
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

- REQUIRES_BIOMARKER::[[ALT]]
- REQUIRES_BIOMARKER::[[AST]]
- REQUIRES_BIOMARKER::[[GGT]]
- INCREASES_RISK_FOR::[[Non-Alcoholic Fatty Liver Disease]]
- INCREASES_RISK_FOR::[[Cirrhosis]]
- AFFECTS_ORGAN::[[Liver]]
- AFFECTS_ORGAN::[[Gallbladder]]
- IMPROVED_BY_SUPPLEMENT::[[Milk Thistle]]
- IMPROVED_BY_SUPPLEMENT::[[N-Acetyl Cysteine]]
- IMPROVED_BY_SUPPLEMENT::[[Vitamin E]]
- RELATED_PATTERN::[[Metabolic Syndrome]]

## References

- Chalasani N, et al. AASLD Practice Guidance on Diagnosis and Management of NAFLD. Hepatology. 2018
- European Association for Study of Liver. EASL Clinical Practice Guidelines on NAFLD. J Hepatol. 2016