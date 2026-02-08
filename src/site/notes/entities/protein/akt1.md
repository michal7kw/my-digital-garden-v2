---
created: '2026-02-08T19:45:44.632716Z'
description: Serine/threonine-protein kinase involved in cell survival, metabolism,
  and growth. Key node in the PI3K-AKT-mTOR signaling pathway.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/akt1/
slug: akt1
tags:
- protein
- kinase
- mtor_pathway
- survival
- metabolic_regulation
title: AKT1
type: protein
updated: '2026-02-08T19:45:44.632716Z'
---

# AKT1

## Overview
AKT1 (RAC-alpha serine/threonine-protein kinase) is a critical signaling node that integrates extracellular signals (growth factors, insulin) to regulate cell survival, growth, and metabolism. It is a core component of the **PI3K-AKT-mTOR pathway**.

Dysregulation of AKT1 is a hallmark of cancer (overactivation promotes survival) and metabolic disorders (underactivation leads to insulin resistance).

## Function
- **Cell Survival**: Inhibits apoptotic proteins (e.g., BAD, Caspase-9).
- **Metabolism**: Promotes glucose uptake by translocating GLUT4 to the membrane. Stimulates glycolysis.
- **Protein Synthesis**: Activates mTORC1 signaling.
- **Longevity**: Inhibits FOXO transcription factors (which can be pro-aging or anti-aging depending on context, but generally AKT promotes growth over maintenance).

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[PI3K-AKT-mTOR_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:48:58.404292'
source: obsidian
```
- → [[Type_2_Diabetes]] (entity)
```yaml
last_modified: '2026-01-26T06:48:58.404292'
source: obsidian
```
- → [[Insulin_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:48:58.404292'
source: obsidian
```
- → [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T06:48:58.404292'
source: obsidian
```
- ← [[Cancer]] (condition)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- ← [[Insulin]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:19.652699'
source: obsidian
```
- → [[Type_2_Diabetes]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[Insulin_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[mTOR]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[GLUT4]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[PI3K-AKT-mTOR_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[FOXO3]] (entity)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- ← [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Cancer]] (condition)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[Insulin]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- ← [[TP53]] (protein)
```yaml
last_modified: '2026-01-26T07:08:34.328294'
source: obsidian
```
- ← [[CTNNB1]] (protein)
```yaml
last_modified: '2026-01-26T06:49:00.223477'
source: obsidian
```
- → [[CTNNB1]] (protein)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- → [[TP53]] (protein)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Participates in Pathway
- → [[PI3K-AKT-mTOR Signaling Pathway]] (pathway)
- → [[Insulin Signaling Pathway]] (pathway)

### Interacts With
- ← [[Insulin]] (hormone) - *Activates*
- → [[mTOR]] (protein) - *Activates*
- → [[FOXO3]] (protein) - *Inhibits (Phosphorylates)*
- → [[GLUT4]] (protein) - *Translocates*
- → [[TP53]] (protein)
- → [[CTNNB1]] (protein)

### Related Conditions
- → [[Cancer]] (condition) - *Overexpression*
- → [[Type 2 Diabetes]] (condition) - *Insulin Resistance*

## References
1. **UniProt**: P31749 (AKT1_HUMAN)
2. **Review**: Manning, B. D., & Toker, A. (2017). "AKT/PKB Signaling: Navigating the Network." *Cell*.