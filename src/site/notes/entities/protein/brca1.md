---
created: '2026-02-08T19:29:31.747869Z'
description: E3 ubiquitin-protein ligase that plays a central role in DNA repair (Homologous
  Recombination). Maintains genomic stability.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/brca1/
slug: brca1
tags:
- protein
- tumor_suppressor
- dna_repair
- ubiquitin_ligase
- imported
- primekg
title: BRCA1
type: protein
updated: '2026-02-08T19:29:31.747869Z'
---

# BRCA1

## Overview
**BRCA1** is a multifunctional tumor suppressor protein. Its most critical role is in the repair of DNA double-strand breaks via **Homologous Recombination (HR)**. Cells lacking functional BRCA1 are unable to repair these breaks accurately, leading to genomic instability and cancer susceptibility.

Because BRCA1-deficient cells rely on alternative, error-prone repair pathways (like PARP-mediated base excision repair), they are exquisitely sensitive to **PARP Inhibitors** (synthetic lethality).

## Function
- **DNA Repair**: Promotes high-fidelity Homologous Recombination.
- **Checkpoint Control**: Regulates G2/M checkpoint.
- **Ubiquitination**: E3 ligase activity with BARD1.

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[TP53]] (protein)
```yaml
last_modified: '2026-01-26T06:49:05.350587'
source: obsidian
```
- → [[DNA_Repair_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.585882'
source: obsidian
```
- → [[Breast_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.585882'
source: obsidian
```
- → [[Homologous_Recombination]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.585882'
source: obsidian
```
- → [[Ovarian_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.585882'
source: obsidian
```
- → [[Talazoparib]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[DNA_Repair_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[Olaparib]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[RAD51]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[Homologous_Recombination]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[BRCA2]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[BARD1]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[Ovarian_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[Breast_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[TP53]] (protein)
```yaml
last_modified: '2026-01-26T07:08:29.344075'
source: obsidian
```
- → [[BRCA1]] (protein)
```yaml
last_modified: '2026-01-26T07:07:46.014889'
source: obsidian
```
- ← [[STAT3]] (protein)
```yaml
last_modified: '2026-01-26T07:08:33.987980'
source: obsidian
```
- → [[STAT3]] (protein)
```yaml
last_modified: '2026-01-26T06:48:59.585882'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Participates in Pathway
- → [[Homologous Recombination]] (pathway)
- → [[DNA Repair Pathway]] (pathway)

### Interacts With
- → [[BARD1]] (protein) - *Obligate heterodimer partner*
- → [[BRCA2]] (protein) - *Partner in HR*
- → [[RAD51]] (protein) - *Recruited by BRCA1/2*
- → [[TP53]] (protein) - *Regulates stability*

### Targeted By
- ⊣ [[Olaparib]] (drug) - *Synthetic Lethality (in BRCA-mutant context)*
- ⊣ [[Talazoparib]] (drug) - *Synthetic Lethality*

### Related Conditions
- → [[Breast Cancer]] (condition)
- → [[Ovarian Cancer]] (condition)

## References
1. **UniProt**: P38398 (BRCA1_HUMAN)
2. **Mechanism**: Roy, R., et al. (2011). "BRCA1 and BRCA2: different roles in a common pathway of genome protection." *Nature Reviews Cancer*.