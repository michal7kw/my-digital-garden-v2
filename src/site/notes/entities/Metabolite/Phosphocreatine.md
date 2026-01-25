---
{"dg-publish":true,"permalink":"/entities/metabolite/phosphocreatine/","tags":["metabolite","energy_buffer","muscle","brain","high_energy_phosphate","athletic_performance"]}
---


# Phosphocreatine

## Overview

Phosphocreatine (PCr) is a phosphorylated creatine molecule that serves as the primary energy buffer in tissues with high and variable ATP demands. The phosphocreatine/creatine kinase (PCr/CK) system provides the fastest mechanism for ATP regeneration, operating in the millisecond timescale.

The system works as a "temporal buffer":
- **At rest**: ATP from oxidative phosphorylation phosphorylates creatine → PCr
- **During activity**: PCr rapidly donates phosphate to ADP → ATP

This allows muscle to maintain ATP levels during the first 10-15 seconds of maximal effort, bridging the gap before glycolysis and oxidative phosphorylation increase their rates.

## Creatine Kinase Reaction

**PCr + ADP + H⁺ ⇌ Creatine + ATP**

- **ΔG°' = -12.6 kJ/mol** (favorable toward ATP synthesis)
- Reaction equilibrium favors ATP production when PCr is high
- Consumes H⁺ ions (buffers against acidification)
- Catalyzed by creatine kinase (CK) isozymes

### CK Isozymes
- **CK-MM**: Skeletal muscle (95%)
- **CK-MB**: Cardiac muscle (marker for MI)
- **CK-BB**: Brain
- **Mitochondrial CK**: Links oxidative phosphorylation to cytoplasmic CK

## Spatial Energy Buffer

Phosphocreatine also serves as a "spatial buffer" through the creatine-phosphate shuttle:

1. ATP generated in mitochondria phosphorylates creatine (via mi-CK)
2. PCr diffuses rapidly through cytoplasm
3. PCr regenerates ATP at sites of utilization (via cytoplasmic CK)
4. Creatine returns to mitochondria

This system effectively transports high-energy phosphates from mitochondria to myofibrils faster than ATP diffusion alone.

## Tissue Distribution

| Tissue | PCr (mM) | Function |
|--------|----------|----------|
| Skeletal muscle | 25-35 | Burst activity |
| Heart | 10-12 | Continuous contraction |
| Brain | 4-5 | Neuronal signaling |
| Smooth muscle | 3-5 | Vascular tone |

## Clinical Significance

### Creatine Supplementation
- Increases muscle PCr stores by 10-20%
- Improves high-intensity exercise performance
- May enhance cognitive function under stress
- Well-studied safety profile

### Cardiac Energy Reserve
- PCr/ATP ratio indicates cardiac energy reserve
- Reduced in heart failure, ischemia
- Used in cardiac MRS (magnetic resonance spectroscopy)
- Predicts outcomes in heart failure

### Brain Energy
- PCr supports synaptic function
- Neuroprotective in ischemia models
- Potential applications in neurodegenerative diseases

## Relationships

PHOSPHORYLATED_FROM::[[entities/drug/Creatine\|Creatine]] - Via creatine kinase at rest
REGENERATES::[[entities/Metabolite/ATP\|ATP]] - Via creatine kinase during activity
PRODUCED_FROM::[[entities/Metabolite/ATP\|ATP]] - During energy-replete state
LOCATED_IN::[[entities/Organ/Muscle\|Muscle]] - Primary storage site
LOCATED_IN::[[entities/Organ/Brain\|Brain]] - Critical for neuronal function
LOCATED_IN::[[entities/Organ/Heart\|Heart]] - Cardiac energy buffer
PARTICIPATES_IN_PATHWAY::[[Creatine Phosphate Shuttle\|Creatine Phosphate Shuttle]]
INCREASED_BY::[[entities/drug/Creatine\|Creatine]] - Supplementation raises PCr stores
RELATED_TO::[[entities/Metabolite/ADP\|ADP]] - Phosphate acceptor
RELATED_TO::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Site of PCr regeneration
AFFECTED_BY::[[entities/intervention/Exercise\|Exercise]] - Rapidly depleted, then recovered

## References

- Wallimann T, et al. The creatine kinase system and pleiotropic effects of creatine. Amino Acids. 2011;40(5):1271-96. PMID: 21448658
- Wyss M, Kaddurah-Daouk R. Creatine and creatinine metabolism. Physiol Rev. 2000;80(3):1107-213. PMID: 10893433
- Kreider RB, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation. J Int Soc Sports Nutr. 2017;14:18. PMID: 28615996
