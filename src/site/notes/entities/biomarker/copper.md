---
created: '2026-02-08T19:45:44.425476Z'
description: Copper is an essential trace mineral required as a cofactor for numerous
  enzymes involved in energy production, iron metabolism, connective tissue synthesis,
  neurotransmitter synthesis, and antioxidant defense (superoxide dismutase). Both
  deficiency and excess are clinically significant.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/copper/
slug: copper
tags:
- biomarker
title: Copper
type: biomarker
updated: '2026-02-08T19:45:44.425476Z'
---

# Copper

## Overview
Copper is an essential trace mineral that serves as a cofactor for over 30 enzymes critical to biological function. Key copper-dependent enzymes include cytochrome c oxidase (mitochondrial energy production), superoxide dismutase (SOD, antioxidant defense), ceruloplasmin (iron metabolism), lysyl oxidase (collagen/elastin cross-linking), dopamine beta-hydroxylase (norepinephrine synthesis), and tyrosinase (melanin production).

Approximately 95% of serum copper is bound to ceruloplasmin, with the remainder as free (non-ceruloplasmin-bound) copper. The copper-zinc ratio is increasingly recognized as an important health metric, with elevated copper/zinc ratios associated with inflammation, cardiovascular disease, and mortality risk. Zinc and copper compete for absorption, making their balance clinically relevant.

Copper deficiency can cause microcytic anemia (mimicking iron deficiency), neutropenia, osteoporosis, neurological dysfunction (myelopathy), and impaired wound healing. Copper excess (as in Wilson's disease or from environmental exposure) causes liver damage, neurological symptoms, and oxidative stress. Functional copper assessment requires evaluating serum copper, ceruloplasmin, and free copper together.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <70 mcg/dL | Deficiency risk; may cause anemia/neutropenia |
| **Normal** | 70-140 mcg/dL (M), 80-155 mcg/dL (F) | Adequate copper status |
| **High** | >155 mcg/dL | Excess; evaluate for Wilson's, inflammation |
| **Optimal** | 90-120 mcg/dL | Functional medicine range |

## Testing Information
- **Measurement Unit**: mcg/dL (serum)
- **Sample Type**: Blood (serum)
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually or when clinically indicated

## 💊 Supplements That Affect This Biomarker

- [[Copper]] (supplement) - Directly increases serum copper (strong effect, evidence level 2)
- [[Zinc]] - Competes for absorption, may decrease copper with high-dose supplementation (moderate effect, evidence level 3)
- [[Vitamin C]] - High-dose may reduce copper absorption (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[zinc serum]] - Often ordered alongside copper for ratio
- Serum copper test - Direct measurement via atomic absorption spectrophotometry

## Relationships

### Correlations
- → [[Zinc]] (biomarker) - Copper:zinc ratio is a key health indicator
- → [[Ferritin]] (biomarker) - Ceruloplasmin (copper protein) required for iron metabolism
- → [[Serum Iron]] (biomarker) - Copper deficiency impairs iron utilization
- → [[Hs Crp]] (biomarker) - Ceruloplasmin is an acute-phase reactant; copper rises with inflammation
- → [[White Blood Cell Count]] (biomarker) - Copper deficiency causes neutropenia

### Related Conditions
- → [[Wilson's Disease]] (condition)
- → [[Menkes Disease]] (condition)
- → [[Anemia]] (condition)
- → [[Osteoporosis]] (condition)

## References
- PMID:24401818 - Collins et al. (2010) Copper: functions, metabolism, and requirements
- PMID:20150599 - Prasad (2008) Zinc in human health: effect on the immune, antioxidant and enzyme systems
- PMID:15743017 - Turnlund et al. (2004) Long-term high copper intake effects

## Dataview Queries
```dataview
LIST
FROM [[Copper]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```