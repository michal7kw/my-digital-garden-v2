---
created: '2026-02-08T19:29:31.570601Z'
description: Nicotinamide adenine dinucleotide is a critical coenzyme present in every
  cell, essential for cellular energy metabolism, DNA repair, sirtuin activity, and
  over 500 enzymatic reactions. NAD+ levels decline with age and are implicated in
  aging-related diseases.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/nad-plus/
slug: nad-plus
tags:
- biomarker
title: NAD Plus
type: biomarker
updated: '2026-02-08T19:29:31.570601Z'
---

# NAD Plus

## Overview
Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in all living cells that plays a central role in cellular metabolism. It exists in two forms: the oxidized form (NAD+) and the reduced form (NADH). NAD+ participates in over 500 enzymatic reactions and is essential for mitochondrial energy production, DNA repair via PARP enzymes, epigenetic regulation via sirtuins (SIRT1-7), and cellular signaling.

NAD+ levels decline significantly with age - by approximately 50% between ages 40 and 60. This decline is associated with mitochondrial dysfunction, impaired DNA repair, cellular senescence, and metabolic deterioration. Reduced NAD+ has been implicated in virtually every age-related disease including neurodegeneration, cardiovascular disease, metabolic syndrome, and cancer.

Research into NAD+ restoration has become one of the most active areas in longevity science. NAD+ precursors (NMN, NR, niacin) can effectively boost NAD+ levels. Clinical trials have shown that supplementation with NMN and NR increases blood NAD+ levels by 40-90%, with emerging evidence of functional benefits including improved muscle function, insulin sensitivity, and vascular health.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <20 umol/L | Depleted; associated with aging/chronic disease |
| **Normal** | 20-40 umol/L | Age-appropriate levels |
| **Optimal** | 40-60 umol/L | Youthful levels; target for longevity optimization |
| **High** | >60 umol/L | Typically only seen with active supplementation |

## Testing Information
- **Measurement Unit**: umol/L (whole blood)
- **Sample Type**: Blood (whole blood preferred)
- **Fasting Required**: True (morning fasting sample recommended)
- **Recommended Test Frequency**: Every 6-12 months for longevity tracking

## 💊 Supplements That Affect This Biomarker

- [[NMN]] - Strongly increases NAD+ (40-90% elevation, evidence level 2)
- [[Nicotinamide Riboside]] - Strongly increases NAD+ (strong effect, evidence level 2)
- [[Niacin]] - Increases NAD+ through the Preiss-Handler pathway (mild effect, evidence level 3)
- [[Resveratrol]] - Activates sirtuins that consume NAD+; synergistic with NAD+ boosters (evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- Jinfiniti IntracellularNAD Test - Intracellular NAD+ measurement
- [[truage complete]] - May include NAD+ assessment in aging panel

## Relationships

### Correlations
- → [[GrimAge]] (biomarker) - NAD+ depletion accelerates epigenetic aging
- → [[GlycanAge]] (biomarker) - Both are aging biomarkers
- → [[Glutathione]] (biomarker) - NAD+ supports glutathione recycling
- → [[HbA1c]] (biomarker) - NAD+ influences glucose metabolism

### Related Conditions
- → [[Aging]] (condition)
- → [[Mitochondrial Dysfunction]] (condition)
- → [[Neurodegeneration]] (condition)

## References
- PMID:34238308 - Yoshino et al. (2021) NMN increases NAD+ in humans
- PMID:29184669 - Martens et al. (2018) Chronic NR supplementation is well-tolerated and elevates NAD+
- PMID:30069493 - Dollerup et al. (2018) NR augments NAD+ metabolome in overweight humans
- PMID:36482258 - Yi et al. (2023) NMN supplementation in middle-aged adults

## Dataview Queries
```dataview
LIST
FROM [[NAD Plus]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```