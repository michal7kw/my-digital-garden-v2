---
created: '2026-02-08T19:25:12.898127Z'
description: Oxidized LDL is low-density lipoprotein cholesterol that has undergone
  oxidative modification, serving as a key driver of atherosclerotic plaque formation
  and a more specific marker of cardiovascular risk than standard LDL cholesterol.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/oxidized-ldl/
slug: oxidized-ldl
tags:
- Biomarker
- biomarker
title: Oxidized LDL
type: Biomarker
updated: '2026-02-08T19:25:12.898127Z'
---

# Oxidized LDL

## Overview
Oxidized LDL (oxLDL) refers to low-density lipoprotein particles that have undergone oxidative modification of their lipid and protein components, primarily the polyunsaturated fatty acids in phospholipids and the apolipoprotein B-100 protein. This oxidation occurs predominantly within the arterial intima and is a pivotal event in the initiation and progression of atherosclerosis.

When LDL particles become trapped in the subendothelial space, they are exposed to reactive oxygen species produced by endothelial cells, smooth muscle cells, and macrophages. The resulting oxLDL is recognized by scavenger receptors (CD36, LOX-1, SR-A) on macrophages, leading to unregulated uptake and the formation of lipid-laden foam cells, which are the hallmark of early atherosclerotic lesions. OxLDL also promotes endothelial dysfunction, platelet aggregation, smooth muscle cell proliferation, and a pro-inflammatory milieu within the vessel wall.

Measuring oxLDL provides a more direct assessment of atherogenic risk than standard LDL cholesterol, as it reflects the biologically active, pathogenic form of LDL. Studies have shown that oxLDL is an independent predictor of coronary artery disease, acute coronary syndromes, and carotid atherosclerosis, even after adjusting for traditional lipid parameters.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <40 U/L | Low oxidative modification of LDL |
| **Normal** | <60 U/L | Acceptable level of LDL oxidation |
| **High** | >60 U/L | Increased atherogenic risk from oxidized LDL |
| **Optimal** | <45 U/L | Minimal oxidative LDL burden |

## Testing Information
- **Measurement Unit**: U/L
- **Sample Type**: Plasma (EDTA; samples must be processed promptly to prevent ex vivo oxidation)
- **Fasting Required**: True (12-hour fasting recommended)
- **Recommended Test Frequency**: Annually; more frequent if elevated or in patients with high cardiovascular risk

## 💊 Supplements That Affect This Biomarker

- [[Vitamin E]] - Decreases oxLDL as the primary lipid-soluble antioxidant protecting LDL from oxidation (moderate, evidence level 3)
- [[Coenzyme Q10]] - Decreases oxLDL through direct antioxidant protection of LDL particles (mild, evidence level 3)
- [[Vitamin C]] - Decreases oxLDL by regenerating vitamin E and providing aqueous-phase antioxidant protection (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[oxidized ldl]] - OxLDL ELISA (Mercodia oxLDL assay; measures malondialdehyde-modified LDL)

## Relationships

### Activates
- → [[Ldl]] (biomarker)
- → [[Hs Crp]] (biomarker)

### Correlations
- → [[Ldl]] (biomarker) - Higher total LDL increases the substrate available for oxidation; oxLDL is the biologically active atherogenic fraction
- → [[Ldl P]] (biomarker) - LDL particle number correlates with oxidation potential; small dense LDL particles are more susceptible to oxidation
- → [[Apolipoprotein B]] (biomarker) - ApoB-100 is the protein component modified during LDL oxidation; both are atherogenic markers
- → [[Hs Crp]] (biomarker) - OxLDL promotes vascular inflammation, reflected by elevated CRP

## References
- PMID:10871587 - Devaraj S et al. Alpha-tocopherol supplementation decreases serum C-reactive protein and monocyte interleukin-6 levels. Free Radic Biol Med. 2000.
- PMID:11368702 - Upston JM et al. Tocopherol-mediated peroxidation of lipoproteins. Free Radic Biol Med. 2001.
- PMID:29631560 - Jorat MV et al. The effects of coenzyme Q10 supplementation on lipid profiles: a systematic review and meta-analysis. Lipids Health Dis. 2018.
- PMID:10799367 - Carr AC et al. Does vitamin C act as a pro-oxidant under physiological conditions? FASEB J. 2000.

## Dataview Queries
```dataview
LIST
FROM [[Oxidized LDL]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```