---
created: '2026-02-08T19:45:44.615264Z'
description: The primary route for NAD+ biosynthesis in mammals, recycling nicotinamide
  released by NAD+-consuming enzymes back into NAD+. Accounts for approximately 85%
  of NAD+ production and is essential for maintaining cellular NAD+ homeostasis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/nad-salvage-pathway/
slug: nad-salvage-pathway
tags:
- pathway
- metabolic
- nad_metabolism
- longevity
- energy_metabolism
- salvage
title: NAD+ Salvage Pathway
type: pathway
updated: '2026-02-08T19:45:44.615264Z'
---

# NAD+ Salvage Pathway

## Overview

The NAD+ Salvage Pathway is the predominant route for NAD+ biosynthesis in mammalian cells. It recycles nicotinamide, the product released when NAD+ is consumed by sirtuins, PARPs, and CD38, back into NAD+. This pathway is essential for maintaining cellular NAD+ pools and metabolic homeostasis.

Unlike de novo synthesis from tryptophan, the salvage pathway operates continuously to regenerate NAD+ from its breakdown products. This recycling is highly efficient and accounts for the vast majority of NAD+ production in most tissues.

The rate-limiting step is catalyzed by NAMPT (nicotinamide phosphoribosyltransferase), making it a critical control point for NAD+ metabolism. Interventions targeting this pathway—whether through NAMPT activation or supplementation with pathway intermediates (NMN, NR)—have shown promise for treating age-related NAD+ decline.

## Pathway Steps

### Main Salvage Route (Nicotinamide → NAD+)

```
Step 1: Nicotinamide + PRPP → NMN + PPi
        Enzyme: NAMPT (rate-limiting)

Step 2: NMN + ATP → NAD+ + PPi
        Enzyme: NMNATs (NMNAT1/2/3)
```

### Alternative Route via Nicotinamide Riboside (NR → NAD+)

```
Step 1: NR + ATP → NMN + ADP
        Enzyme: NRK1/NRK2

Step 2: NMN + ATP → NAD+ + PPi
        Enzyme: NMNATs
```

## Key Enzymes

### NAMPT (Nicotinamide Phosphoribosyltransferase)

- **Function**: Converts nicotinamide to NMN
- **Significance**: Rate-limiting enzyme of the pathway
- **Regulation**: Circadian clock, nutrient status, exercise
- **Age-related change**: Expression declines with age

### NMNAT (NMN Adenylyltransferases)

Three isoforms with distinct subcellular locations:
- **NMNAT1**: Nuclear
- **NMNAT2**: Cytoplasmic and Golgi
- **NMNAT3**: Mitochondrial

### NRK (Nicotinamide Riboside Kinases)

- **NRK1**: Ubiquitously expressed
- **NRK2**: Enriched in muscle and heart
- **Function**: Phosphorylate NR to NMN, bypassing NAMPT

## Regulation

### Positive Regulators

- **Fasting/Caloric Restriction**: Upregulates NAMPT
- **Exercise**: Increases NAMPT expression
- **Circadian Clock**: NAMPT expression peaks during active phase
- **AMPK**: Activates during energy stress

### Negative Regulators

- **Nicotinamide**: Product inhibition of NAMPT and sirtuins
- **High glucose**: May suppress pathway activity
- **Chronic inflammation**: Dysregulates NAD+ metabolism

## Pathway Inputs

### Primary Substrate Sources

1. **Nicotinamide**: From NAD+ consumption (sirtuins, PARPs, CD38)
2. **Nicotinamide Riboside (NR)**: Dietary source, supplements
3. **NMN**: Direct supplement, some dietary contribution

### Cofactors Required

- **PRPP** (5-phosphoribosyl-1-pyrophosphate): From pentose phosphate pathway
- **ATP**: Energy for phosphorylation steps

## Clinical Significance

### Age-Related NAD+ Decline

The salvage pathway is central to age-related NAD+ decline:
- NAMPT expression decreases with age
- CD38 increases, consuming more NAD+
- Net result: reduced NAD+ regeneration capacity

### Therapeutic Strategies

1. **NMN Supplementation**: Bypasses rate-limiting NAMPT step
2. **NR Supplementation**: Enters via NRK pathway
3. **NAMPT Activators**: Enhance endogenous pathway activity
4. **CD38 Inhibitors**: Reduce NAD+ consumption

### Disease Relevance

- **Metabolic Syndrome**: Impaired pathway function
- **Neurodegeneration**: NAD+ depletion in neurons
- **Cardiac Disease**: Pathway dysfunction in heart failure
- **Cancer**: Rapidly dividing cells depend on pathway

## Tissue-Specific Considerations

| Tissue | Primary NMNAT | Notes |
|--------|---------------|-------|
| Neurons | NMNAT2 (axons) | Critical for axonal survival |
| Muscle | NMNAT3 (mito) | Mitochondrial NAD+ important |
| Liver | NMNAT1/3 | High metabolic activity |
| Adipose | NMNAT1 | eNAMPT secretion |

<!-- NEO4J_CONTENT_START -->
## Relationships
No relationships found.
<!-- NEO4J_CONTENT_END -->
## Relationships

CONTAINS_ENZYME::[[NAMPT]] - Rate-limiting enzyme
PRODUCES::[[NAD+]] - End product
PRODUCES::[[NMN]] - Intermediate product
USES_SUBSTRATE::[[Nicotinamide Riboside]] - Alternative entry point
REGULATED_BY::[[Circadian Rhythm Pathway]] - Circadian NAMPT expression
ACTIVATED_BY::[[Caloric Restriction]] - Upregulates pathway
ACTIVATED_BY::[[Exercise]] - Increases NAMPT
AFFECTED_BY::[[CD38]] - Competes for NAD+
AFFECTS::[[SIRT1]] - Provides NAD+ substrate
AFFECTS::[[SIRT3]] - Mitochondrial NAD+ supply
RELATED_TO::[[De Novo NAD+ Synthesis Pathway]] - Alternative biosynthesis route
UPSTREAM_OF::[[Electron Transport Chain]] - NAD+ required for ETC

## References

- Revollo JR, Grimm AA, Imai S. The NAD biosynthesis pathway mediated by nicotinamide phosphoribosyltransferase regulates Sir2 activity in mammalian cells. J Biol Chem. 2004;279(49):50754-63. PMID: 15381699
- Bieganowski P, Brenner C. Discoveries of nicotinamide riboside as a nutrient and conserved NRK genes establish a Preiss-Handler independent route to NAD+ in fungi and humans. Cell. 2004;117(4):495-502. PMID: 15137942
- Cantó C, et al. The NAD(+) precursor nicotinamide riboside enhances oxidative metabolism and protects against high-fat diet-induced obesity. Cell Metab. 2012;15(6):838-47. PMID: 22682224
- Yang Y, Sauve AA. NAD(+) metabolism: Bioenergetics, signaling and manipulation for therapy. Biochim Biophys Acta. 2016;1864(12):1787-1800. PMID: 27374990