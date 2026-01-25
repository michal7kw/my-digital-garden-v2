---
{"dg-publish":true,"permalink":"/entities/metabolite/nadh/","tags":["metabolite","coenzyme","energy_metabolism","mitochondrial","redox"]}
---


# NADH

## Overview

NADH (Nicotinamide adenine dinucleotide, reduced form) is the electron-rich form of NAD+ and serves as the primary electron carrier in cellular energy metabolism. When metabolic pathways like glycolysis and the citric acid cycle break down nutrients, they generate NADH by transferring electrons to NAD+.

NADH then carries these high-energy electrons to the mitochondrial electron transport chain, where they are used to generate ATP through oxidative phosphorylation. This makes NADH absolutely essential for aerobic energy production. Each NADH molecule that enters the electron transport chain can generate approximately 2.5 ATP molecules.

The NAD+/NADH ratio is a critical indicator of cellular metabolic state. A high ratio indicates an oxidized state favoring catabolic reactions, while a low ratio indicates a reduced state. This ratio regulates numerous metabolic enzymes and signaling pathways.

## Mechanism of Action

NADH functions as an electron carrier in cellular respiration:

1. **Electron Acceptance**: NADH is formed when NAD+ accepts 2 electrons and 1 proton (H+) from substrates in metabolic reactions
2. **Electron Transport**: NADH donates electrons to Complex I (NADH dehydrogenase) of the electron transport chain
3. **Proton Gradient**: Electron transfer drives proton pumping across the inner mitochondrial membrane
4. **ATP Synthesis**: The proton gradient powers ATP synthase to produce ATP

### Key Reactions Producing NADH

- **Glycolysis**: Glyceraldehyde-3-phosphate dehydrogenase
- **Citric Acid Cycle**: Isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, malate dehydrogenase
- **Beta-oxidation**: Multiple dehydrogenase steps
- **Pyruvate Dehydrogenase**: Links glycolysis to citric acid cycle

## Clinical Significance

- **Energy Production**: Essential for cellular ATP generation
- **Metabolic Regulation**: NAD+/NADH ratio controls metabolic flux
- **Oxidative Stress**: NADH can contribute to ROS generation at Complex I
- **Sirtuin Activity**: NAD+/NADH ratio affects sirtuin-mediated deacetylation
- **Aging**: NADH accumulation may contribute to age-related metabolic dysfunction

## Relationships

OXIDIZED_TO::[[entities/Metabolite/NAD+\|NAD+]] - Electron donation regenerates NAD+
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Primary site of NADH oxidation
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Complex I entry
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Glycolysis\|Glycolysis]] - Product of cytoplasmic glycolysis
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Major product (3 per cycle)
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - Product of each cycle
PARTICIPATES_IN_PATHWAY::[[Malate-Aspartate Shuttle\|Malate-Aspartate Shuttle]] - Cytosol to matrix transfer
DONATES_ELECTRONS_TO::[[Complex I\|Complex I]] - ETC entry point
AFFECTS::[[entities/Metabolite/ATP\|ATP]] - Essential for ATP production (~2.5 ATP per NADH)
PRODUCED_FROM::[[entities/Metabolite/Pyruvate\|Pyruvate]] - Via pyruvate dehydrogenase
PRODUCED_FROM::[[entities/Metabolite/Malate\|Malate]] - Via malate dehydrogenase
RELATED_TO::[[entities/Supplement/NMN\|NMN]] - Precursor to NAD+ pool
RELATED_TO::[[CoQ10\|CoQ10]] - Downstream electron acceptor
RELATED_TO::[[entities/Metabolite/FADH2\|FADH2]] - Alternative electron carrier

## References

- Xiao W, et al. NAD(H) and NADP(H) Redox Couples and Cellular Energy Metabolism. Antioxid Redox Signal. 2018;28(3):251-272. PMID: 28648096
- Ying W. NAD+/NADH and NADP+/NADPH in cellular functions and cell death. Antioxid Redox Signal. 2008;10(2):179-206. PMID: 18020963
- Cantó C, et al. NAD(+) Metabolism and the Control of Energy Homeostasis. Cell Metab. 2015;22(1):31-53. PMID: 26118927
