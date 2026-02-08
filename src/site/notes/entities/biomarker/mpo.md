---
created: '2026-02-08T19:25:12.894298Z'
description: Myeloperoxidase is a heme peroxidase enzyme released by activated neutrophils
  and monocytes. Elevated levels indicate oxidative stress and vascular inflammation,
  independently predicting acute coronary events and heart failure outcomes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/mpo/
slug: mpo
tags:
- Biomarker
- biomarker
title: MPO
type: Biomarker
updated: '2026-02-08T19:25:12.894298Z'
---

# MPO

## Overview
Myeloperoxidase (MPO) is a heme-containing enzyme stored in the azurophilic granules of neutrophils and monocytes. Upon leukocyte activation, MPO is released into the extracellular space where it catalyzes the formation of reactive oxidant species, particularly hypochlorous acid (HOCl), from hydrogen peroxide and chloride ions.

In the context of cardiovascular disease, MPO plays a central role in LDL oxidation, HDL dysfunction, and endothelial damage. It generates oxidized lipids that promote foam cell formation and directly impairs the cholesterol efflux capacity of HDL. MPO also consumes nitric oxide, contributing to endothelial dysfunction and vasoconstriction.

Clinically, elevated plasma MPO levels have been shown to predict risk of acute coronary syndromes in patients presenting with chest pain, even before troponin elevation occurs. It is particularly useful as an early marker of plaque vulnerability and has been associated with adverse outcomes in heart failure.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low Risk** | <350 pmol/L | Low vascular oxidative stress |
| **Moderate Risk** | 350-640 pmol/L | Moderate oxidative burden |
| **High Risk** | >640 pmol/L | Significant vascular inflammation |
| **Optimal** | <350 pmol/L | Target for cardiovascular health |

## Testing Information
- **Measurement Unit**: pmol/L
- **Sample Type**: Blood (plasma, EDTA tube)
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually or as indicated for cardiovascular risk

## 💊 Supplements That Affect This Biomarker

- [[NAC]] - May decrease MPO activity through antioxidant mechanisms (moderate effect, evidence level 3)
- [[Vitamin C]] - Scavenges MPO-derived oxidants (mild effect, evidence level 3)
- [[Omega-3 Fatty Acids]] - May reduce neutrophil activation and MPO release (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- MPO blood test - Plasma myeloperoxidase measurement (CardioMPO assay)

## Relationships

### Correlations
- → [[Oxidized LDL]] (biomarker) - MPO directly oxidizes LDL particles
- → [[Lp-PLA2]] (biomarker) - Both indicate vascular-specific inflammation
- → [[Hs Crp]] (biomarker) - Complementary inflammatory markers
- → [[White Blood Cell Count]] (biomarker) - MPO released from activated leukocytes
- → [[Troponin]] (biomarker) - MPO may rise before troponin in ACS

### Related Conditions
- → [[Cardiovascular Disease]] (condition)
- → [[Heart Failure]] (condition)
- → [[Atherosclerosis]] (condition)

## References
- PMID:16129825 - Brennan et al. (2003) MPO predicts coronary events in patients with chest pain
- PMID:21896474 - Nicholls & Hazen (2009) Myeloperoxidase and cardiovascular disease
- PMID:19632115 - Heslop et al. (2010) MPO and C-reactive protein as predictors of cardiovascular risk

## Dataview Queries
```dataview
LIST
FROM [[MPO]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```