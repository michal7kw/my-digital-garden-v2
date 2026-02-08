---
created: '2026-02-08T19:45:44.418154Z'
description: 8-hydroxy-2'-deoxyguanosine is a modified nucleoside produced by oxidative
  damage to DNA. It is the most widely used biomarker of oxidative DNA damage and
  reflects the balance between oxidative stress and DNA repair capacity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/8-ohdg/
slug: 8-ohdg
tags:
- biomarker
title: 8-OHdG
type: biomarker
updated: '2026-02-08T19:45:44.418154Z'
---

# 8-OHdG

## Overview
8-hydroxy-2'-deoxyguanosine (8-OHdG) is an oxidized derivative of deoxyguanosine, one of the four DNA nucleosides. It is formed when reactive oxygen species (ROS) attack the C-8 position of guanine in DNA. When the cell's DNA repair mechanisms (primarily base excision repair via OGG1 glycosylase) excise damaged 8-OHdG from the genome, the modified nucleoside is released into the bloodstream and excreted in urine without further metabolism.

This makes urinary 8-OHdG an ideal non-invasive biomarker of whole-body oxidative DNA damage. The level reflects both the rate of oxidative attack on DNA and the capacity of the repair machinery. It has been validated in hundreds of epidemiological studies as a marker of oxidative stress exposure from environmental toxins, cigarette smoke, radiation, chronic inflammation, and metabolic disorders.

Elevated 8-OHdG is associated with increased cancer risk (particularly lung, breast, and liver cancers), cardiovascular disease, neurodegenerative disorders, diabetes complications, and accelerated aging. It is considered a better measure of oxidative stress than lipid peroxidation markers because DNA damage has more direct mutagenic and carcinogenic consequences.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Normal** | 5-20 ng/mL (urine) | Baseline oxidative DNA damage |
| **Elevated** | 20-40 ng/mL | Increased oxidative stress |
| **High** | >40 ng/mL | Significant DNA damage; cancer risk elevated |
| **Optimal** | <10 ng/mL | Low oxidative DNA damage |

## Testing Information
- **Measurement Unit**: ng/mL (urine) or ng/mg creatinine (creatinine-adjusted)
- **Sample Type**: Urine (spot or 24-hour)
- **Fasting Required**: False
- **Recommended Test Frequency**: As clinically indicated

## 💊 Supplements That Affect This Biomarker

- [[CoQ10]] - Decreases by protecting mitochondrial DNA from oxidation (moderate effect, evidence level 2)
- [[Vitamin C]] - Reduces oxidative DNA damage (moderate effect, evidence level 3)
- [[NAC]] - Supports glutathione which protects DNA from oxidative damage (mild effect, evidence level 3)
- [[Alpha Lipoic Acid]] - Regenerates antioxidants that protect DNA (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- 8-OHdG urine test - ELISA or LC-MS/MS measurement
- [[nutreval fmv]] - May include oxidative stress markers

## Relationships

### Correlations
- → [[F2 Isoprostanes]] (biomarker) - Both reflect oxidative damage (DNA vs lipids)
- → [[Glutathione]] (biomarker) - Low glutathione leads to increased 8-OHdG
- → [[Hs Crp]] (biomarker) - Inflammation increases oxidative DNA damage
- → [[NAD Plus]] (biomarker) - NAD+ supports PARP-mediated DNA repair

### Related Conditions
- → [[Cancer]] (condition)
- → [[Cardiovascular Disease]] (condition)
- → [[Neurodegeneration]] (condition)
- → [[Accelerated Aging]] (condition)

## References
- PMID:17614129 - Valavanidis et al. (2009) 8-OHdG: a critical biomarker of oxidative stress and carcinogenesis
- PMID:15570048 - Loft et al. (2012) Oxidative DNA damage estimated by 8-OHdG
- PMID:16380549 - Wu et al. (2004) Urinary 8-OHdG as a marker of oxidative stress

## Dataview Queries
```dataview
LIST
FROM [[8-OHdG]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```