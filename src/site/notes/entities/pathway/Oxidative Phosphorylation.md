---
{"dg-publish":true,"permalink":"/entities/pathway/oxidative-phosphorylation/","tags":["pathway","metabolic","energy_metabolism","mitochondrial","atp_synthesis","respiration"]}
---


# Oxidative Phosphorylation

## Overview

Oxidative phosphorylation (OXPHOS) is the metabolic pathway that produces ATP by coupling electron transport with phosphorylation. It occurs in the inner mitochondrial membrane and is responsible for approximately 90% of cellular ATP production.

The process involves two coupled systems:
1. **Electron Transport Chain (ETC)**: Transfers electrons from NADH/FADH2 to O2
2. **ATP Synthase**: Uses the proton gradient to synthesize ATP

This coupling, explained by Peter Mitchell's chemiosmotic theory, represents one of the most important discoveries in biochemistry.

## The Electron Transport Chain

### Complex I (NADH:Ubiquinone Oxidoreductase)
- **Reaction**: NADH + H⁺ + Q → NAD⁺ + QH₂
- **Protons pumped**: 4 H⁺/2e⁻
- **Components**: FMN, 8 iron-sulfur clusters
- **Size**: ~45 subunits, largest respiratory complex
- **Inhibitors**: Rotenone, metformin (mild)

### Complex II (Succinate Dehydrogenase)
- **Reaction**: Succinate + Q → Fumarate + QH₂
- **Protons pumped**: 0 (no proton pumping)
- **Components**: FAD, 3 iron-sulfur clusters
- **Also**: TCA cycle enzyme
- **Note**: Electrons enter at lower energy, fewer ATP

### Complex III (Cytochrome bc1 Complex)
- **Reaction**: QH₂ + 2 Cyt c(ox) → Q + 2 Cyt c(red) + 2H⁺
- **Protons pumped**: 4 H⁺/2e⁻
- **Mechanism**: Q-cycle
- **Components**: Cytochrome b, cytochrome c1, Rieske iron-sulfur
- **Inhibitors**: Antimycin A, myxothiazol

### Complex IV (Cytochrome c Oxidase)
- **Reaction**: 4 Cyt c(red) + O₂ + 8H⁺ → 4 Cyt c(ox) + 2H₂O + 4H⁺(pumped)
- **Protons pumped**: 2 H⁺/2e⁻
- **Components**: Heme a, heme a3, CuA, CuB
- **Function**: Terminal oxidase, reduces O₂ to H₂O
- **Inhibitors**: Cyanide, carbon monoxide, azide

### Complex V (ATP Synthase)
- **Reaction**: ADP + Pi + nH⁺(out) → ATP + nH⁺(in)
- **Mechanism**: Rotary motor driven by proton flow
- **Structure**: F₀ (membrane rotor) + F₁ (catalytic head)
- **H⁺/ATP**: ~3-4 protons per ATP
- **Inhibitors**: Oligomycin

## Proton Motive Force

The proton gradient (Δp) has two components:
- **ΔpH**: Concentration gradient (~0.5 pH units)
- **Δψ**: Electrical potential (~140 mV)

**Δp = Δψ - 59·ΔpH ≈ 200 mV (equivalent)**

This force drives:
1. ATP synthesis (Complex V)
2. Metabolite transport
3. Heat generation (uncoupling)

## ATP Yield

Modern estimates of ATP per substrate:

| Electron Source | H⁺ Pumped | ATP Yield |
|-----------------|-----------|-----------|
| NADH | 10 | ~2.5 ATP |
| FADH2 | 6 | ~1.5 ATP |

Complete glucose oxidation: ~30-32 ATP (revised from classic 36-38)

## Respiratory Control

ATP synthesis rate is controlled by ADP availability:

- **State 3**: ADP present, maximal respiration
- **State 4**: ADP depleted, respiration slows
- **Coupling ratio**: State 3/State 4 (typically 4-10)

This ensures ATP production matches demand.

## Reactive Oxygen Species

OXPHOS is the primary source of cellular ROS:
- **Sites**: Complex I (NADH-binding site), Complex III (Q-cycle)
- **Products**: Superoxide (O₂⁻), hydrogen peroxide (H₂O₂)
- **Amount**: 0.1-2% of oxygen consumed
- **Significance**: Oxidative stress, signaling, aging

## Supplement Connections

| Supplement | Target/Mechanism |
|------------|------------------|
| **[[entities/Supplement/CoQ10\|CoQ10]]** | Electron carrier between CI/CII and CIII |
| **[[entities/Supplement/PQQ\|PQQ]]** | Supports mitochondrial biogenesis |
| **[[entities/Supplement/NMN\|NMN]]** / **[[entities/Metabolite/Nicotinamide Riboside\|Nicotinamide Riboside]]** | NAD+ precursor for Complex I |
| **[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]]** | Antioxidant, supports NAD+ metabolism |
| **[[entities/drug/Creatine\|Creatine]]** | Buffers ATP via phosphocreatine |

## Clinical Significance

### Mitochondrial Diseases
- Complex I deficiency (most common)
- LHON (Leber hereditary optic neuropathy)
- MELAS, MERRF (mtDNA mutations)
- Leigh syndrome

### Aging
- Decline in OXPHOS capacity with age
- Increased ROS production
- mtDNA damage accumulation
- Target of longevity interventions

### Pharmacology
- Metformin: mild Complex I inhibitor
- Statins: may affect CoQ10 synthesis
- Anesthetics: affect OXPHOS

## Relationships

LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Inner membrane
CONSUMES::[[entities/Metabolite/NADH\|NADH]] - Primary electron donor
CONSUMES::[[entities/Metabolite/FADH2\|FADH2]] - Secondary electron donor
CONSUMES::[[Oxygen\|Oxygen]] - Terminal electron acceptor
PRODUCES::[[entities/Metabolite/ATP\|ATP]] - Primary product
PRODUCES::[[Water\|Water]] - Reduction product
PRODUCES::[[entities/Metabolite/NAD+\|NAD+]] - Regenerated for metabolism
UTILIZES::[[entities/Supplement/CoQ10\|CoQ10]] - Mobile electron carrier
INCLUDES::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Electron flow
INCLUDES::[[entities/protein/ATP Synthase\|ATP Synthase]] - ATP synthesis
REGULATED_BY::[[entities/Metabolite/ADP\|ADP]] - Respiratory control
SUPPORTED_BY::[[entities/Supplement/NMN\|NMN]] - NAD+ precursor
SUPPORTED_BY::[[entities/Supplement/CoQ10\|CoQ10]] - Electron carrier
CONNECTED_TO::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - NADH source
CONNECTED_TO::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - NADH/FADH2 source

## References

- Mitchell P. Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. Nature. 1961;191:144-8. PMID: 13771349
- Hinkle PC. P/O ratios of mitochondrial oxidative phosphorylation. Biochim Biophys Acta. 2005;1706(1-2):1-11. PMID: 15620362
- Murphy MP. How mitochondria produce reactive oxygen species. Biochem J. 2009;417(1):1-13. PMID: 19061483
