---
{"dg-publish":true,"permalink":"/entities/metabolite/fadh-2/","tags":["metabolite","coenzyme","electron_carrier","redox","mitochondrial","energy_metabolism"]}
---


# FADH2

## Overview

FADH2 (reduced flavin adenine dinucleotide) is one of the two major electron carriers in cellular respiration, alongside NADH. While NADH carries electrons from most dehydrogenase reactions, FADH2 is produced by flavin-linked dehydrogenases, particularly succinate dehydrogenase in the citric acid cycle.

The key distinction between FADH2 and NADH is their entry point into the electron transport chain:
- **NADH** → Complex I → ~2.5 ATP
- **FADH2** → Complex II → ~1.5 ATP

This difference occurs because Complex II does not pump protons across the inner mitochondrial membrane, so less of the proton motive force is generated.

## Sources of FADH2

### Citric Acid Cycle
- **Succinate Dehydrogenase** (Complex II): Succinate → Fumarate
  - This enzyme is unique: it's both a TCA cycle enzyme AND an ETC component
  - Tightly bound FAD accepts electrons from succinate

### Beta-Oxidation
- **Acyl-CoA Dehydrogenase**: Multiple steps produce FADH2
  - Each round of beta-oxidation produces one FADH2
  - Example: Palmitate (16C) → 7 FADH2

### Other Sources
- **Glycerol-3-phosphate shuttle**: Transfers cytoplasmic reducing equivalents
- **Alpha-ketoglutarate dehydrogenase**: Minor contribution
- **Electron-transferring flavoprotein (ETF)**: Amino acid oxidation

## Electron Transport Role

1. FADH2 donates electrons to Complex II
2. Electrons pass through iron-sulfur clusters
3. Electrons reduce ubiquinone (CoQ) to ubiquinol
4. Ubiquinol carries electrons to Complex III
5. No proton pumping at Complex II

### Energy Yield
- FADH2 generates ~1.5 ATP per molecule
- NADH generates ~2.5 ATP per molecule
- This ~40% difference matters for energy calculations

## Clinical Significance

### Succinate Dehydrogenase Deficiency
- Rare mitochondrial disorder
- Impairs both TCA cycle and ETC
- Results in encephalomyopathy, cardiomyopathy

### Riboflavin (Vitamin B2) Deficiency
- FAD is synthesized from riboflavin
- Deficiency impairs all flavin-dependent enzymes
- Affects energy metabolism broadly

### Cancer
- SDH mutations linked to paragangliomas, pheochromocytomas
- Altered succinate/fumarate ratio affects HIF signaling

## Relationships

OXIDIZED_TO::[[FAD\|FAD]] - Electron donation regenerates FAD
PRODUCED_BY::[[entities/Metabolite/Succinate\|Succinate]] - Via succinate dehydrogenase
PRODUCED_BY::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - Multiple steps
PRODUCED_BY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Succinate oxidation
DONATES_ELECTRONS_TO::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Complex II entry
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]]
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]]
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Inner membrane/matrix
AFFECTS::[[entities/Metabolite/ATP\|ATP]] - Contributes to ATP synthesis
RELATED_TO::[[entities/Supplement/CoQ10\|CoQ10]] - Electron acceptor at Complex II
RELATED_TO::[[entities/Metabolite/NADH\|NADH]] - Alternative electron carrier

## References

- Hinkle PC. P/O ratios of mitochondrial oxidative phosphorylation. Biochim Biophys Acta. 2005;1706(1-2):1-11. PMID: 15620362
- Cecchini G. Function and structure of complex II of the respiratory chain. Annu Rev Biochem. 2003;72:77-109. PMID: 14527321
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 18.
