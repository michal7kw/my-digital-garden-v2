---
created: '2026-02-08T19:45:44.431654Z'
description: Glutathione is the most abundant intracellular antioxidant, a tripeptide
  critical for detoxification, immune function, and protection against oxidative damage.
  Low levels are associated with chronic disease, aging, and increased oxidative stress.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glutathione/
slug: glutathione
tags:
- biomarker
title: Glutathione
type: biomarker
updated: '2026-02-08T19:45:44.431654Z'
---

# Glutathione

## Overview
Glutathione (GSH) is a tripeptide composed of glutamate, cysteine, and glycine that serves as the body's master antioxidant. It exists in reduced (GSH) and oxidized (GSSG) forms, and the GSH:GSSG ratio is a critical indicator of cellular redox status. Glutathione is synthesized intracellularly by virtually all cells, with the liver being the primary site of production and export.

Glutathione plays essential roles in multiple physiological processes including neutralization of reactive oxygen species and free radicals, phase II detoxification of xenobiotics and carcinogens via glutathione S-transferase conjugation, immune system modulation (particularly T-cell function and natural killer cell activity), amino acid transport across cell membranes, regeneration of other antioxidants (vitamins C and E), and DNA synthesis and repair.

Glutathione levels decline with aging and are depleted in numerous chronic conditions including neurodegenerative diseases (Parkinson's, Alzheimer's), liver disease, HIV/AIDS, type 2 diabetes, chronic kidney disease, and cancer. Environmental toxins, chronic infections, poor nutrition, and medications (such as acetaminophen) also deplete glutathione. Cysteine availability is the rate-limiting factor in glutathione synthesis, which is why N-acetylcysteine (NAC) effectively raises glutathione levels by providing this precursor amino acid.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <200 umol/L | Depleted; increased oxidative stress and disease risk |
| **Normal** | 200-300 umol/L | Adequate antioxidant capacity (whole blood) |
| **High** | >300 umol/L | Robust antioxidant status |
| **Optimal** | 250-300 umol/L | Functional medicine optimal range |

## Testing Information
- **Measurement Unit**: umol/L (whole blood); varies by assay type
- **Sample Type**: Whole blood (preferred) or plasma
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; retest 8-12 weeks after supplementation

## 💊 Supplements That Affect This Biomarker

- [[NAC]] - Increases glutathione by providing rate-limiting cysteine precursor (moderate, evidence level 2)
- [[Liposomal Glutathione]] - Directly increases glutathione levels via oral liposomal delivery (moderate, evidence level 3)
- [[Alpha Lipoic Acid]] - Increases glutathione recycling by regenerating GSH from GSSG (mild, evidence level 3)
- [[Vitamin C]] - Supports glutathione recycling and spares GSH consumption (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[glutathione]] - Total glutathione measurement (reduced + oxidized)
- [[glutathione reduced]] - Reduced glutathione (GSH) specifically
- [[gsh gssg ratio]] - Ratio of reduced to oxidized glutathione (redox status)

## Relationships

### Correlations
- → [[Vitamin D]] (biomarker) - Vitamin D supports glutathione synthesis gene expression
- → [[Homocysteine]] (biomarker) - Shared transsulfuration pathway; elevated homocysteine may indicate impaired glutathione synthesis
- → [[Ferritin]] (biomarker) - Iron overload increases oxidative stress and depletes glutathione

## References
- PMID:30513526 - NAC supplementation and glutathione levels in older adults
- PMID:29559379 - Liposomal glutathione oral supplementation efficacy
- PMID:29990473 - Alpha-lipoic acid and glutathione metabolism
- PMID:12569111 - Vitamin C and glutathione recycling
- PMID:24791687 - Glutathione in health and disease: pharmacological considerations

## Dataview Queries
```dataview
LIST
FROM [[Glutathione]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```