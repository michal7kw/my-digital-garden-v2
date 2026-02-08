---
created: '2026-02-08T19:29:31.581780Z'
description: Membrane-bound organelle containing hydrolytic enzymes. The cell's recycling
  center and a central hub for nutrient sensing via mTOR/AMPK.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/cellularcomponent/lysosome/
slug: lysosome
tags:
- cellularcomponent
- cellular_component
- organelle
- autophagy
- waste_management
- nutrient_sensing
title: Lysosome
type: cellularcomponent
updated: '2026-02-08T19:29:31.581780Z'
---

# Lysosome

## Overview

The **Lysosome** is an acidic (pH ~4.5-5.0), membrane-bound organelle filled with over 50 different hydrolytic enzymes. It serves as the terminal degradation station for the autophagy pathway, breaking down cellular waste, damaged organelles, and pathogens into basic building blocks (amino acids, fatty acids, sugars) that are recycled back into the cytoplasm.

Far from being a simple garbage bin, the lysosome is now recognized as a sophisticated signaling hub that integrates nutrient sensing.

## Mechanism and Function

### 1. Degradation (Autophagy Endpoint)
Autophagosomes carrying cargo fuse with lysosomes to form **autolysosomes**. The acidic environment activates hydrolases (proteases, lipases, nucleases) to digest the cargo.
- **TFEB Regulation:** The Transcription Factor EB (TFEB) is the master regulator of lysosomal biogenesis. During starvation, TFEB enters the nucleus to produce more lysosomes and autophagy proteins.

### 2. Nutrient Sensing (mTORC1)
The lysosomal surface is the "headquarters" for **mTORC1**.
- **High Nutrients:** mTORC1 docks to the lysosome surface (via Rag GTPases), becomes active, and inhibits TFEB (keeping it in the cytoplasm). This promotes growth.
- **Starvation:** mTORC1 falls off the lysosome and becomes inactive. TFEB is released to trigger autophagy.

## Clinical Significance

- **Lysosomal Storage Diseases:** Genetic defects in specific hydrolases lead to the accumulation of undigested toxic waste (e.g., Tay-Sachs, Gaucher's).
- **Neurodegeneration:** In Alzheimer's and Parkinson's, lysosomal acidification often fails, preventing the clearance of toxic protein aggregates (Amyloid/Tau).
- **Longevity:** Lysosomal function declines with age. Enhancing lysosomal activity extends lifespan in model organisms.

## Relationships

PARTICIPATES_IN_PATHWAY::[[Autophagy]] - Terminal step
REGULATES::[[mTOR Pathway]] - Site of activation
REGULATED_BY::[[TFEB]] - Master transcriptional regulator
CONTAINS::[[Hydrolytic Enzymes]]
REQUIRES::[[Acidic pH]] - Maintained by V-ATPase proton pumps
DEGRADES::[[Amyloid Beta]]
DEGRADES::[[Damaged Mitochondria]] - Via Mitophagy
ASSOCIATED_WITH_CONDITION::[[Lysosomal Storage Diseases]]
ASSOCIATED_WITH_CONDITION::[[Alzheimer's Disease]] - Failure of clearance

## References

- Settembre C, et al. TFEB links autophagy to lysosomal biogenesis. Science. 2011;332(6036):1429-33.
- Zoncu R, et al. mTORC1 sensing of lysosomal amino acids. Science. 2011;334(6056):678-83.