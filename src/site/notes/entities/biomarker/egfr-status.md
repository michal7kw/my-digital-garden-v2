---
created: '2026-02-08T19:45:44.428330Z'
description: Predictive biomarker for lung and colorectal cancer. Measures EGFR protein
  expression (IHC) or gene mutations (PCR/NGS).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/egfr-status/
slug: egfr-status
tags:
- biomarker
- cancer
- predictive
- pharmacogenomics
- imported
- primekg
title: EGFR Status
type: biomarker
updated: '2026-02-08T19:45:44.428330Z'
---

# EGFR Status

## Overview
**EGFR Status** is a critical predictive biomarker in oncology.
1.  **NSCLC (Lung Cancer)**: Testing for *sensitizing mutations* (e.g., Exon 19 deletion, L858R) determines eligibility for EGFR-TKI therapy (Gefitinib, Osimertinib).
2.  **Colorectal Cancer**: Testing for *expression* (IHC) is sometimes done, but lack of downstream RAS mutations is the primary driver for anti-EGFR antibody therapy (Cetuximab).

## Clinical Significance
- **Positive Mutation (Lung)**: Predicts response to EGFR Tyrosine Kinase Inhibitors.
- **T790M Mutation**: Mechanism of acquired resistance; indicates need for 3rd generation TKI (Osimertinib).

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[EGFR_Status]] (entity)
```yaml
last_modified: '2026-01-26T06:47:16.613705'
source: obsidian
```
- → [[Lung_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[EGFR_Status]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[Colorectal_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[Lung_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
```
- → [[Gefitinib]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[Osimertinib]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[Erlotinib]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[Colorectal_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
```
- → [[Cetuximab]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- → [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```

### Indicates Organ Health
- → [[Kidneys]] (organ)
```yaml
specificity: very_high
function_indicated: Glomerular Filtration Rate
source: curated
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Measures
- → [[EGFR]] (protein) - *Expression/Sequence*

### Predicts Response To
- → [[Gefitinib]] (drug)
- → [[Erlotinib]] (drug)
- → [[Osimertinib]] (drug)
- → [[Cetuximab]] (drug)

### Related Conditions
- → [[Lung Cancer]] (condition)
- → [[Colorectal Cancer]] (condition)

## References
1. **Guidelines**: NCCN Guidelines for Non-Small Cell Lung Cancer.