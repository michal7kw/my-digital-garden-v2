---
created: '2026-02-08T19:25:12.893999Z'
description: Lipoprotein-associated phospholipase A2 is a vascular-specific inflammatory
  enzyme produced by macrophages within atherosclerotic plaques. Elevated levels indicate
  active vascular inflammation and unstable plaque, independently predicting coronary
  events and ischemic stroke.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/lp-pla2/
slug: lp-pla2
tags:
- Biomarker
- biomarker
title: Lp-PLA2
type: Biomarker
updated: '2026-02-08T19:25:12.893999Z'
---

# Lp-PLA2

## Overview
Lipoprotein-associated phospholipase A2 (Lp-PLA2), also known as platelet-activating factor acetylhydrolase (PAF-AH), is an enzyme produced primarily by macrophages, T-lymphocytes, and mast cells within atherosclerotic plaques. Unlike hs-CRP which reflects systemic inflammation, Lp-PLA2 is specific to vascular inflammation.

Lp-PLA2 hydrolyzes oxidized phospholipids within LDL particles, generating pro-inflammatory mediators (lyso-phosphatidylcholine and oxidized fatty acids) that promote endothelial dysfunction, macrophage recruitment, and plaque instability. This makes it a direct marker of the inflammatory processes driving atherosclerosis.

The PLAC test (Lp-PLA2 activity) is FDA-cleared for assessing risk of coronary heart disease and ischemic stroke. It adds predictive value beyond traditional risk factors and hs-CRP, particularly in identifying patients with vulnerable, rupture-prone plaques.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low Risk** | <200 ng/mL | Low vascular inflammation |
| **Borderline** | 200-235 ng/mL | Moderate risk |
| **High Risk** | >235 ng/mL | Elevated vascular inflammation, unstable plaque likely |
| **Optimal** | <200 ng/mL | Target for cardiovascular prevention |

## Testing Information
- **Measurement Unit**: ng/mL (mass) or nmol/min/mL (activity)
- **Sample Type**: Blood (plasma)
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually for cardiovascular risk assessment

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Decreases Lp-PLA2 activity (moderate effect, evidence level 3)
- [[Niacin]] - Decreases Lp-PLA2 in dyslipidemia (mild effect, evidence level 3)
- [[Curcumin]] - May decrease via anti-inflammatory mechanisms (mild effect, evidence level 4)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- PLAC Test - Lp-PLA2 activity assay (FDA-cleared)

## Relationships

### Correlations
- → [[Oxidized LDL]] (biomarker) - Lp-PLA2 acts directly on oxidized LDL phospholipids
- → [[Ldl P]] (biomarker) - Lp-PLA2 is carried on LDL particles
- → [[Hs Crp]] (biomarker) - Complementary markers of inflammation (vascular vs systemic)
- → [[Apolipoprotein B]] (biomarker) - Both predict cardiovascular events

### Related Conditions
- → [[Cardiovascular Disease]] (condition)
- → [[Atherosclerosis]] (condition)
- → [[Stroke]] (condition)

## References
- PMID:21360686 - Corson (2011) Lp-PLA2 as a biologic marker of vascular inflammation
- PMID:18541889 - Muhlestein et al. (2008) Effect of niacin on Lp-PLA2
- PMID:24958564 - Wallentin et al. (2014) Lp-PLA2 and cardiovascular events

## Dataview Queries
```dataview
LIST
FROM [[Lp-PLA2]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```