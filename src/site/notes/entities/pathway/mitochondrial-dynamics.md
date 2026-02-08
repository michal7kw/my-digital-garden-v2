---
created: '2026-02-08T19:25:13.072000Z'
description: The continuous remodeling of the mitochondrial network through fusion
  and fission events. Essential for maintaining mitochondrial quality, distribution,
  and function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Pathway/mitochondrial-dynamics/
slug: mitochondrial-dynamics
tags:
- Pathway
- pathway
- mitochondria
- cellular_health
- quality_control
title: Mitochondrial Dynamics
type: Pathway
updated: '2026-02-08T19:25:13.072000Z'
---

# Mitochondrial Dynamics

## Overview

Mitochondria are not static, isolated organelles. They form a highly dynamic network that constantly undergoes **Fission** (dividing) and **Fusion** (merging). This dynamics is crucial for:
1.  **Quality Control:** Segregating damaged components for removal (mitophagy).
2.  **Energy Efficiency:** Sharing metabolites and potential across the network.
3.  **Apoptosis:** Regulating cell death signaling.

## Mechanisms

### 1. Mitochondrial Fusion
Merges two mitochondria into one.
- **Function:** Mixes contents (mtDNA, proteins, metabolites) to "dilute" damage and maximize oxidative phosphorylation efficiency during stress or starvation.
- **Key Proteins:**
    *   **Mitofusin 1 & 2 (Mfn1/Mfn2):** Fuse the *Outer* Mitochondrial Membranes.
    *   **OPA1:** Fuses the *Inner* Mitochondrial Membranes.

### 2. Mitochondrial Fission
Splits one mitochondrion into two.
- **Function:** Facilitates distribution during cell division and isolates damaged segments for degradation.
- **Key Proteins:**
    *   **Drp1 (Dynamin-related protein 1):** Constricts the mitochondria from the outside to sever it.

## Clinical Significance

- **Neurodegeneration:** Neurons are highly dependent on transport of mitochondria to synapses. Defects in fusion/fission cause Charcot-Marie-Tooth disease and Optic Atrophy.
- **Metabolic Disease:** In obesity/diabetes, mitochondria often become fragmented (excessive fission), reducing efficiency.
- **Aging:** Dynamics shift towards fission/fragmentation with age.

## Relationships

REGULATES::[[Mitochondria]] - Network morphology
REGULATES::[[Mitophagy]] - Fission required to isolate cargo
DRIVEN_BY::[[Drp1]] - Fission protein
DRIVEN_BY::[[Mfn1]] - Fusion protein
DRIVEN_BY::[[Mfn2]] - Fusion protein
DRIVEN_BY::[[OPA1]] - Fusion protein
ACTIVATED_BY::[[AMPK]] - Promotes fission to clear damage (mitophagy)
INHIBITED_BY::[[mTOR Pathway]] - Can suppress quality control
ASSOCIATED_WITH_CONDITION::[[Parkinson's Disease]]
ASSOCIATED_WITH_CONDITION::[[Diabetes]]

## References

- Chan DC. Fusion and fission: interlinked processes critical for mitochondrial health. Annu Rev Genet. 2012.
- Youle RJ, van der Bliek AM. Mitochondrial fission, fusion, and stress. Science. 2012.