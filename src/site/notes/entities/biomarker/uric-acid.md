---
created: '2026-02-08T19:29:31.579605Z'
description: Uric acid is the final oxidation product of purine metabolism in humans,
  serving as both an antioxidant at physiological levels and a pathological mediator
  when elevated, contributing to gout, kidney stones, and cardiovascular disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/uric-acid/
slug: uric-acid
tags:
- biomarker
title: Uric Acid
type: biomarker
updated: '2026-02-08T19:29:31.579605Z'
---

# Uric Acid

## Overview
Uric acid is the final breakdown product of purine metabolism in humans. Unlike most mammals, humans lack the enzyme uricase (urate oxidase), which means uric acid cannot be further metabolized and must be excreted primarily through the kidneys (approximately 70%) and the gastrointestinal tract (approximately 30%). This evolutionary loss of uricase results in higher baseline uric acid levels in humans compared to other species.

At physiological concentrations, uric acid serves as one of the most important extracellular antioxidants, accounting for approximately 50% of the antioxidant capacity of blood. However, when uric acid levels exceed the saturation threshold (approximately 6.8 mg/dL), monosodium urate crystals can precipitate in joints, kidneys, and soft tissues, leading to gout, urate nephropathy, and kidney stones.

Hyperuricemia is also an independent risk factor for cardiovascular disease, hypertension, chronic kidney disease, metabolic syndrome, and type 2 diabetes. The relationship between uric acid and cardiovascular risk is thought to involve endothelial dysfunction, oxidative stress, and activation of the renin-angiotensin system. Conversely, very low uric acid levels may indicate reduced antioxidant capacity, as seen in conditions affecting purine metabolism.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <3.0 mg/dL (M); <2.0 mg/dL (F) | Possible oxidative stress vulnerability, hypouricemia |
| **Normal** | 3.5-7.2 mg/dL (M); 2.6-6.0 mg/dL (F) | Physiological range |
| **High** | >7.2 mg/dL (M); >6.0 mg/dL (F) | Hyperuricemia; increased risk for gout and kidney stones |
| **Optimal** | 4.0-5.5 mg/dL (M); 3.0-4.5 mg/dL (F) | Balanced antioxidant function without crystal risk |

## Testing Information
- **Measurement Unit**: mg/dL
- **Sample Type**: Serum
- **Fasting Required**: True (fasting preferred; diet strongly influences levels)
- **Recommended Test Frequency**: Annually; more frequent monitoring in gout or kidney disease

## 💊 Supplements That Affect This Biomarker

- [[Vitamin C]] - Decreases uric acid by promoting uricosuric renal excretion (moderate, evidence level 2)
- [[Cherry Extract]] - Decreases uric acid through xanthine oxidase inhibition and anti-inflammatory effects (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[uric acid]] - Serum uric acid enzymatic colorimetric assay

## Relationships

### Activates
- → [[Creatinine]] (biomarker)

### Correlations
- → [[Creatinine]] (biomarker) - Both elevated in renal impairment; uric acid clearance depends on kidney function
- → [[Estimated GFR]] (biomarker) - Declining GFR leads to reduced uric acid excretion and hyperuricemia

## References
- PMID:21671418 - Juraschek SP et al. Effect of oral vitamin C supplementation on serum uric acid: a meta-analysis of randomized controlled trials. Arthritis Care Res. 2011.
- PMID:15934094 - Huang HY et al. The effects of vitamin C supplementation on serum concentrations of uric acid. Arthritis Rheum. 2005.
- PMID:23023818 - Zhang Y et al. Cherry consumption and decreased risk of recurrent gout attacks. Arthritis Rheum. 2012.
- PMID:31159913 - Schlesinger N. Dietary factors and hyperuricemia. Curr Pharm Des. 2019.

## Dataview Queries
```dataview
LIST
FROM [[Uric Acid]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```