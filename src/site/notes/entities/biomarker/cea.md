---
created: '2026-02-08T19:25:12.881551Z'
description: Carcinoembryonic antigen is a glycoprotein tumor marker used primarily
  for monitoring colorectal cancer treatment response and recurrence. It is not recommended
  as a primary screening tool due to limited sensitivity and specificity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/cea/
slug: cea
tags:
- Biomarker
- biomarker
title: CEA
type: Biomarker
updated: '2026-02-08T19:25:12.881551Z'
---

# CEA

## Overview
Carcinoembryonic antigen (CEA) is a glycoprotein involved in cell adhesion that is normally produced during fetal development. After birth, CEA production is suppressed to very low levels in healthy adults. It belongs to the immunoglobulin superfamily and plays a role in intercellular recognition and adhesion.

CEA is used primarily as a tumor marker for colorectal cancer, particularly for monitoring treatment response, detecting recurrence after surgical resection, and assessing prognosis. Rising CEA levels after surgery may indicate cancer recurrence months before clinical detection. CEA can also be elevated in cancers of the pancreas, breast, lung, stomach, and ovary.

Non-malignant conditions that elevate CEA include cigarette smoking, inflammatory bowel disease, pancreatitis, hepatitis, cirrhosis, peptic ulcer disease, and hypothyroidism. Smokers typically have higher baseline CEA levels than non-smokers, necessitating different reference ranges. Due to these limitations in specificity, CEA is not recommended as a standalone screening test for cancer in asymptomatic individuals.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <1.0 ng/mL | Normal |
| **Normal** | <3.0 ng/mL (non-smokers) | Typical adult range |
| **Normal** | <5.0 ng/mL (smokers) | Adjusted range for smokers |
| **High** | >5.0 ng/mL | Warrants further investigation; serial monitoring recommended |
| **Optimal** | <2.5 ng/mL | Functional medicine optimal for non-smokers |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Blood (serum)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; every 3 months during active cancer monitoring

## 💊 Supplements That Affect This Biomarker

No significant supplement effects on CEA levels have been established in clinical literature.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[cea]] - Carcinoembryonic antigen measurement

## Relationships

### Correlations
- → [[AFP]] (biomarker) - Co-measured tumor marker panel for GI malignancies
- → [[CA 125]] (biomarker) - Multi-tumor marker panel for cancer staging

## References
- PMID:28407713 - ASCO guidelines for CEA use in colorectal cancer management
- PMID:26884596 - CEA as a prognostic marker in colorectal cancer

## Dataview Queries
```dataview
LIST
FROM [[CEA]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```