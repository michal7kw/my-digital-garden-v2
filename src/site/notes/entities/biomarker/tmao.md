---
created: '2026-02-08T19:45:44.444804Z'
description: Trimethylamine N-oxide is a gut microbiome-derived metabolite produced
  from dietary choline, betaine, and L-carnitine. Elevated levels are strongly associated
  with increased cardiovascular disease risk, atherosclerosis, and thrombotic events.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/tmao/
slug: tmao
tags:
- biomarker
title: TMAO
type: biomarker
updated: '2026-02-08T19:45:44.444804Z'
---

# TMAO

## Overview
Trimethylamine N-oxide (TMAO) is a metabolite produced through a two-step process: gut bacteria convert dietary nutrients (choline, betaine, L-carnitine) into trimethylamine (TMA), which is then oxidized to TMAO by hepatic flavin monooxygenase 3 (FMO3) in the liver.

TMAO has emerged as a significant cardiovascular risk biomarker. Elevated levels promote atherosclerosis by enhancing cholesterol accumulation in macrophages, increasing platelet reactivity, and promoting vascular inflammation. Multiple large prospective studies have demonstrated that elevated TMAO independently predicts major adverse cardiovascular events (MACE), even after adjusting for traditional risk factors.

The clinical significance of TMAO lies in its connection between diet, gut microbiome composition, and cardiovascular health. It represents a modifiable risk factor through dietary intervention (reducing red meat and egg consumption) and microbiome-targeted therapies.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <2.0 umol/L | Lower cardiovascular risk |
| **Normal** | 2.0-6.2 umol/L | Average risk |
| **High** | >6.2 umol/L | Elevated cardiovascular risk |
| **Optimal** | <3.0 umol/L | Functional medicine target |

## Testing Information
- **Measurement Unit**: umol/L
- **Sample Type**: Blood (plasma)
- **Fasting Required**: True (12-hour fast recommended)
- **Recommended Test Frequency**: Annually for cardiovascular risk assessment

## 💊 Supplements That Affect This Biomarker

- [[Probiotics]] - May decrease TMAO by modulating gut microbiome composition (moderate effect, evidence level 3)
- [[Resveratrol]] - May decrease TMAO via gut microbiome modulation (mild effect, evidence level 3)
- [[Berberine]] - May reduce TMAO through gut bacteria modification (moderate effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[metabolon global]] - Includes TMAO in comprehensive metabolomics panel

## Relationships

### Correlations
- → [[Hs Crp]] (biomarker) - Both elevated in cardiovascular inflammation
- → [[Apolipoprotein B]] (biomarker) - Synergistic cardiovascular risk when both elevated
- → [[Oxidized LDL]] (biomarker) - TMAO promotes LDL oxidation
- → [[Homocysteine]] (biomarker) - Both involve methylation pathway metabolites

### Related Conditions
- → [[Cardiovascular Disease]] (condition)
- → [[Atherosclerosis]] (condition)
- → [[Chronic Kidney Disease]] (condition)

## References
- PMID:23563705 - Tang et al. (2013) Intestinal microbial metabolism of phosphatidylcholine and cardiovascular risk
- PMID:28060131 - Li et al. (2017) Gut microbiota-dependent TMAO pathway contributes to arterial thrombosis
- PMID:31581379 - Qiu et al. (2018) Effects of probiotics on TMAO levels

## Dataview Queries
```dataview
LIST
FROM [[TMAO]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```