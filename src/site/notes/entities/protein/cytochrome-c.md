---
created: '2026-02-08T19:45:44.636764Z'
description: A small heme protein that serves as an essential electron carrier in
  the mitochondrial electron transport chain, shuttling electrons from Complex III
  to Complex IV. Also plays a crucial role in apoptosis when released into the cytoplasm.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/cytochrome-c/
slug: cytochrome-c
tags:
- protein
- electron_carrier
- mitochondrial
- apoptosis
- heme_protein
- oxidative_phosphorylation
title: Cytochrome C
type: protein
updated: '2026-02-08T19:45:44.636764Z'
---

# Cytochrome C

## Overview

Cytochrome c is a small (~12 kDa), highly conserved heme protein with dual roles in cellular life and death:

1. **Life function**: Essential electron carrier in the ETC, transferring electrons from Complex III to Complex IV
2. **Death function**: Trigger of intrinsic apoptosis when released from mitochondria

Located in the mitochondrial intermembrane space, cytochrome c is loosely attached to the inner membrane through electrostatic interactions with cardiolipin. This binding is critical for both its electron transfer function and for keeping it sequestered away from cytoplasmic apoptotic machinery.

## Structure

### Heme Group
- Covalently attached to Cys14 and Cys17
- Sixth coordination: His18 (proximal) and Met80 (distal)
- Iron cycles: Fe²⁺ (ferrocytochrome c) ⇌ Fe³⁺ (ferricytochrome c)

### Protein Fold
- ~104 amino acids (human)
- Highly conserved across species (>90% between mammals)
- Compact globular structure
- Surface lysines important for protein interactions

### Cardiolipin Binding
- Positively charged lysines interact with cardiolipin
- Anchors cytochrome c to inner membrane
- Cardiolipin oxidation releases cytochrome c

## Electron Transport Function

### Electron Transfer
**Complex III → Cytochrome c → Complex IV**

1. Cytochrome c docks at Complex III (Qo site)
2. Accepts one electron from Rieske iron-sulfur protein
3. Fe³⁺ → Fe²⁺ (reduced)
4. Dissociates and diffuses to Complex IV
5. Donates electron to CuA center
6. Fe²⁺ → Fe³⁺ (oxidized)
7. Returns to Complex III

### Kinetics
- Fast diffusion in intermembrane space
- Rate-limiting step: Complex IV electron acceptance
- Essential for oxidative phosphorylation

### Redox Potential
- E°' = +0.25 V
- Positioned between Complex III (+0.22 V) and Complex IV (+0.39 V)
- Thermodynamically favorable electron flow

## Apoptotic Function

### Release Triggers
- **Intrinsic pathway activation**: DNA damage, ER stress, growth factor withdrawal
- **Bax/Bak pore formation**: Mitochondrial outer membrane permeabilization (MOMP)
- **Cardiolipin peroxidation**: ROS-mediated release
- **Calcium overload**: Mitochondrial permeability transition

### Apoptosome Formation
1. Cytochrome c released to cytoplasm
2. Binds Apaf-1 (apoptotic protease-activating factor 1)
3. ATP-dependent conformational change
4. Apaf-1 oligomerizes into wheel-shaped apoptosome
5. Apoptosome recruits and activates pro-caspase-9
6. Caspase-9 activates effector caspases (3, 6, 7)
7. Cellular dismantling

### Anti-apoptotic Proteins
- Bcl-2, Bcl-xL: Prevent MOMP
- XIAP: Inhibits caspases downstream
- These are therapeutic targets in cancer

## Clinical Significance

### Cancer
- Evading apoptosis is a cancer hallmark
- Cytochrome c release pathways as drug targets
- BH3 mimetics (venetoclax) promote release

### Ischemia-Reperfusion Injury
- Cytochrome c release during ischemia
- Contributes to cell death
- Therapeutic target for protection

### Neurodegeneration
- Cytochrome c release in multiple conditions
- Contributes to neuronal death
- Potential therapeutic target

### Thrombocytopenia and Anemia (Rare)
- CYCS mutations cause autosomal dominant thrombocytopenia
- Altered apoptotic function in megakaryocytes

## Diagnostic Use

### Biomarker
- Serum cytochrome c indicates cell death
- Elevated in acute organ injury
- Potential marker for mitochondrial damage

## Evolutionary Conservation

Cytochrome c is remarkably conserved:
- Human-yeast: ~60% identical
- Human-horse: ~90% identical
- Classic model for molecular evolution studies
- Functional constraints maintain sequence

<!-- NEO4J_CONTENT_START -->
## Relationships
No relationships found.
<!-- NEO4J_CONTENT_END -->
## Relationships

PART_OF::[[Electron Transport Chain]] - Essential electron carrier
TRANSFERS_ELECTRONS_FROM::[[Complex III]] - Receives electrons
TRANSFERS_ELECTRONS_TO::[[Complex IV]] - Donates electrons
LOCATED_IN::[[Mitochondria]] - Intermembrane space
TRIGGERS::[[Apoptosis]] - Intrinsic pathway
BINDS::[[Cardiolipin]] - Inner membrane attachment
ACTIVATES::[[Apaf-1]] - Apoptosome formation
AFFECTED_BY::[[Oxidative Stress]] - Cardiolipin peroxidation
PARTICIPATES_IN_PATHWAY::[[Oxidative Phosphorylation]]
RELATED_TO::[[CoQ10]] - Upstream electron carrier
RELATED_TO::[[ATP]] - Supports synthesis
RELATED_TO::[[Bcl-2]] - Anti-apoptotic antagonist
ENCODED_BY::[[CYCS]] - Nuclear gene

## References

- Liu X, et al. Induction of apoptotic program in cell-free extracts: requirement for dATP and cytochrome c. Cell. 1996;86(1):147-57. PMID: 8689682
- Hüttemann M, et al. The multiple functions of cytochrome c and their regulation in life and death decisions of the mammalian cell. Mitochondrion. 2011;11(3):369-81. PMID: 21296189
- Garrido C, et al. Mechanisms of cytochrome c release from mitochondria. Cell Death Differ. 2006;13(9):1423-33. PMID: 16676004