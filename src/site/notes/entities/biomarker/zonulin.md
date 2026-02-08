---
created: '2026-02-08T19:29:31.581253Z'
description: Zonulin is a protein that reversibly modulates intestinal tight junction
  permeability. Elevated serum zonulin indicates increased intestinal permeability
  and is associated with autoimmune and inflammatory conditions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/zonulin/
slug: zonulin
tags:
- biomarker
title: Zonulin
type: biomarker
updated: '2026-02-08T19:29:31.581253Z'
---

# Zonulin

## Overview
Zonulin (also known as pre-haptoglobin-2) is a physiological modulator of intercellular tight junctions in the intestinal epithelium. It is the only known physiological mediator of reversible tight junction opening, functioning through protease-activated receptor 2 (PAR2) signaling. Zonulin was discovered by Dr. Alessio Fasano and has become a key biomarker for assessing intestinal barrier integrity.

When zonulin is released in the intestinal lumen (triggered by gliadin, certain bacteria, or other stimuli), it causes the disassembly of tight junction proteins, increasing paracellular permeability. This allows larger molecules, including undigested food proteins, bacterial endotoxins, and other antigens, to pass through the intestinal barrier into the bloodstream, a condition commonly referred to as increased intestinal permeability.

Elevated serum zonulin levels have been associated with numerous conditions including celiac disease, type 1 diabetes, inflammatory bowel disease, multiple sclerosis, rheumatoid arthritis, metabolic syndrome, and obesity. Zonulin testing is used in functional and integrative medicine to assess gut barrier function and guide therapeutic interventions targeting intestinal permeability. However, assay specificity has been debated, as some commercial ELISA kits may cross-react with other proteins.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <10 ng/mL | Healthy gut barrier function |
| **Normal** | <30 ng/mL | Within acceptable range |
| **High** | 30-60 ng/mL | Moderately increased intestinal permeability |
| **Very High** | >60 ng/mL | Significantly compromised gut barrier |
| **Optimal** | <20 ng/mL | Functional medicine optimal range |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Serum (also available in stool)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; retest 8-12 weeks after gut healing interventions

## 💊 Supplements That Affect This Biomarker

- [[L-Glutamine]] - May decrease zonulin by supporting enterocyte tight junction integrity (moderate, evidence level 3)
- [[Zinc]] - May decrease zonulin by strengthening tight junction proteins (mild, evidence level 3)
- [[Probiotics]] - May decrease zonulin by modulating gut microbiome and barrier function (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[zonulin]] - Serum zonulin ELISA measurement
- [[zonulin stool]] - Fecal zonulin for localized intestinal assessment

## Relationships

### Correlations
- → [[Calprotectin]] (biomarker) - Both indicate GI inflammation; often co-ordered
- → [[Hs Crp]] (biomarker) - Systemic inflammation marker correlated with gut permeability

## References
- PMID:28802833 - L-Glutamine supplementation and intestinal permeability
- PMID:25869284 - Zinc and intestinal barrier function
- PMID:30267869 - Probiotics effects on zonulin and intestinal permeability
- PMID:21248165 - Fasano A. Zonulin and its regulation of intestinal barrier function

## Dataview Queries
```dataview
LIST
FROM [[Zonulin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```