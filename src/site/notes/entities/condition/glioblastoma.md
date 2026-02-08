---
created: '2026-02-08T19:25:12.940167Z'
description: An aggressive type of cancer that can occur in the brain or spinal cord,
  formed from cells called astrocytes. It is the most common malignant primary brain
  tumor in adults.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/glioblastoma/
slug: glioblastoma
tags:
- Condition
- condition
- oncology
- neurology
- brain_tumor
title: Glioblastoma
type: Condition
updated: '2026-02-08T19:25:12.940167Z'
---

# Glioblastoma

## Overview

**Glioblastoma** (formerly Glioblastoma Multiforme or GBM) is a Grade IV astrocytoma. It arises from astrocytes, the star-shaped support cells of the brain. It is defined by necrosis (dead tissue) and microvascular proliferation.

The 2021 WHO classification strictly defines Glioblastoma as **IDH-wildtype**, meaning it lacks mutations in the IDH genes (which are now classified as IDH-mutant Astrocytomas). This distinction is critical as IDH-wildtype tumors are far more aggressive.

## Molecular Drivers

- **EGFR Amplification:** Found in ~40% of cases. Drives uncontrolled proliferation.
- **PTEN Loss:** A tumor suppressor often deleted, leading to hyperactive PI3K/AKT signaling.
- **TP53 Mutation:** Disables DNA repair and apoptosis mechanisms.
- **MGMT Promoter Methylation:** A biomarker predicting response to Temozolomide. Methylated tumors respond better.

## Management

### Standard of Care (Stupp Protocol)
1.  **Surgical Resection:** Maximal safe resection to remove visible tumor.
2.  **Radiation Therapy:** 6 weeks of focal radiation.
3.  **Chemotherapy:** Concomitant and adjuvant **Temozolomide** (oral alkylating agent).

### Emerging Therapies
- **Tumor Treating Fields (TTFields):** Electric fields to disrupt cell division.
- **Immunotherapy:** Checkpoint inhibitors, CAR-T cells (still investigational).
- **Targeted Therapy:** EGFR inhibitors, VEGF inhibitors (Bevacizumab).

## Relationships

AFFECTS_ORGAN::[[Brain]] - Primary site
AFFECTS_ORGAN::[[Astrocytes]] - Cell of origin
DRIVEN_BY::[[EGFR]] - Frequent amplification
DRIVEN_BY::[[PI3K/AKT Signaling]] - Hyperactivated via PTEN loss
ASSOCIATED_WITH_GENE::[[TP53]] - Frequently mutated
ASSOCIATED_WITH_GENE::[[PTEN]] - Frequently deleted
ASSOCIATED_WITH_GENE::[[MGMT]] - Methylation status predicts survival
TREATED_WITH::[[Temozolomide]] - Standard chemotherapy
TREATED_WITH::[[Radiation Therapy]]
ASSOCIATED_WITH_CONDITION::[[Li-Fraumeni Syndrome]] - Genetic predisposition

## References

- Stupp R, et al. Radiotherapy plus concomitant and adjuvant temozolomide for glioblastoma. N Engl J Med. 2005;352(10):987-96.
- Louis DN, et al. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol. 2021;23(8):1231-1251.


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:39.447169'
source: obsidian
```
- → [[EGFR]] (entity)
```yaml
last_modified: '2026-01-26T06:03:37.499401'
source: obsidian
```
- ← [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Glioblastoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.444942'
source: obsidian
```

### Interventions
```dataview
TABLE 
    effectiveness AS "Effectiveness",
    confidence_score AS "Confidence"
FROM [[Glioblastoma]] AND #intervention
SORT confidence_score DESC
```

<!-- NEO4J_CONTENT_END -->