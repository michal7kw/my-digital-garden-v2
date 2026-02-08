---
created: '2026-02-08T19:29:31.749429Z'
description: The major Phase I drug-metabolizing enzyme in humans. Oxidizes xenobiotics
  (toxins, drugs) and endogenous steroids.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/cyp3a4/
slug: cyp3a4
tags:
- protein
- enzyme
- drug_metabolism
- liver
- imported
- primekg
title: CYP3A4
type: protein
updated: '2026-02-08T19:29:31.749429Z'
---

# CYP3A4

## Overview
Cytochrome P450 3A4 (CYP3A4) is the most abundant and clinically significant cytochrome P450 isoform. It is involved in the oxidation of the largest range of substrates of all CYPs.

Because it metabolizes so many drugs, **inhibition** of CYP3A4 (e.g., by Grapefruit juice, Ketoconazole) can lead to toxic drug levels, while **induction** (e.g., by St. John's Wort, Carbamazepine) can lead to therapeutic failure.

## Function
- **Drug Metabolism**: Oxidizes acetaminophen, codeine, cyclosporin A, diazepam, and erythromycin.
- **Steroid Metabolism**: Hydroxylates testosterone, progesterone, and cortisol.
- **Bioactivation**: Can activate pro-carcinogens (e.g., Aflatoxin B1).

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Drug_Metabolism_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:49:00.549297'
source: obsidian
```
- → [[St_Johns_Wort]] (entity)
```yaml
last_modified: '2026-01-26T06:49:00.549297'
source: obsidian
```
- → [[Steroid_Hormone_Biosynthesis]] (entity)
```yaml
last_modified: '2026-01-26T06:49:00.549297'
source: obsidian
```
- ← [[Liver]] (organ)
```yaml
last_modified: '2026-01-26T06:48:37.820930'
source: obsidian
```
- ← [[Testosterone]] (hormone)
```yaml
last_modified: '2026-01-26T06:48:04.678296'
source: obsidian
```
- → [[St_Johns_Wort]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Steroid_Hormone_Biosynthesis]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Grapefruit]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Drug_Metabolism_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Ketoconazole]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Intestine]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Carbamazepine]] (drug)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[Testosterone]] (hormone)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- → [[CYP3A4]] (protein)
```yaml
last_modified: '2026-01-26T07:07:46.348902'
source: obsidian
```
- → [[Liver]] (organ)
```yaml
last_modified: '2026-01-26T07:08:30.044513'
source: obsidian
```
- ← [[Carbamazepine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:40.543436'
source: obsidian
```
- ← [[UBC]] (protein)
```yaml
last_modified: '2026-01-26T07:08:34.416393'
source: obsidian
```
- → [[Glutathione]] (metabolite)
```yaml
last_modified: '2026-01-26T06:49:00.549297'
source: obsidian
```
- → [[UBC]] (protein)
```yaml
last_modified: '2026-01-26T06:49:00.549297'
source: obsidian
```
- ← [[Glutathione]] (metabolite)
```yaml
last_modified: '2026-01-26T07:08:06.276840'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Participates in Pathway
- → [[Drug Metabolism Pathway]] (pathway)
- → [[Steroid Hormone Biosynthesis]] (pathway)

### Interacts With
- ← [[Carbamazepine]] (drug) - *Induces*
- ← [[St. John's Wort]] (supplement) - *Induces*
- ← [[Grapefruit]] (food) - *Inhibits*
- ← [[Ketoconazole]] (drug) - *Potent Inhibitor*
- ← [[Testosterone]] (hormone) - *Substrate*

### Location
- → [[Liver]] (organ)
- → [[Intestine]] (organ)

## References
1. **UniProt**: P08684 (CP3A4_HUMAN)
2. **Review**: Zhou, S. F. (2008). "Drugs behave as substrates, inhibitors and inducers of the human cytochrome P450 3A4." *Current Drug Metabolism*.