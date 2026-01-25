---
{"dg-publish":true,"permalink":"/entities/pathway/citric-acid-cycle/","tags":["pathway","metabolic","energy_metabolism","central_metabolism","mitochondrial","catabolic"]}
---


# Citric Acid Cycle

## Overview

The citric acid cycle (also called the TCA cycle or Krebs cycle) is the central metabolic pathway for aerobic energy production in all organisms. It oxidizes acetyl-CoA derived from carbohydrates, fats, and proteins to CO₂, capturing the released energy as NADH, FADH2, and GTP.

The cycle operates in the mitochondrial matrix and consists of eight enzyme-catalyzed reactions that:
1. Accept two carbons (as acetyl-CoA)
2. Release two carbons (as CO₂)
3. Regenerate the starting molecule (oxaloacetate)
4. Produce reducing equivalents for ATP synthesis

## The Eight Reactions

### 1. Citrate Synthase
**Acetyl-CoA + Oxaloacetate + H₂O → Citrate + CoA-SH**
- First committed step
- Highly exergonic (ΔG°' = -32.2 kJ/mol)
- Regulated by substrate availability

### 2. Aconitase
**Citrate ⇌ Isocitrate** (via cis-Aconitate)
- Iron-sulfur cluster enzyme
- Near-equilibrium reaction
- Sensitive to oxidative damage

### 3. Isocitrate Dehydrogenase
**Isocitrate + NAD⁺ → α-Ketoglutarate + CO₂ + NADH**
- First NADH produced
- First CO₂ released
- Major regulatory point (activated by ADP, Ca²⁺)

### 4. α-Ketoglutarate Dehydrogenase Complex
**α-Ketoglutarate + NAD⁺ + CoA-SH → Succinyl-CoA + CO₂ + NADH**
- Second NADH produced
- Second CO₂ released
- Similar to pyruvate dehydrogenase complex
- Requires TPP, lipoate, FAD, NAD⁺, CoA

### 5. Succinyl-CoA Synthetase
**Succinyl-CoA + GDP + Pi ⇌ Succinate + GTP + CoA-SH**
- Substrate-level phosphorylation
- GTP → ATP via nucleoside diphosphate kinase
- Only direct high-energy phosphate

### 6. Succinate Dehydrogenase (Complex II)
**Succinate + FAD → Fumarate + FADH₂**
- Only membrane-bound TCA enzyme
- Directly linked to ETC
- Produces FADH₂ (not NADH)

### 7. Fumarase
**Fumarate + H₂O → L-Malate**
- Stereospecific hydration
- Near-equilibrium reaction

### 8. Malate Dehydrogenase
**L-Malate + NAD⁺ → Oxaloacetate + NADH**
- Third NADH produced
- Completes the cycle
- Thermodynamically unfavorable, pulled by citrate synthase

## Energy Yield

Per acetyl-CoA oxidized:
| Product | Number | ATP Equivalent |
|---------|--------|----------------|
| NADH | 3 | ~7.5 ATP |
| FADH₂ | 1 | ~1.5 ATP |
| GTP | 1 | 1 ATP |
| **Total** | | **~10 ATP** |

## Regulation

### Key Control Points
1. **Citrate synthase**: Substrate availability, product inhibition
2. **Isocitrate dehydrogenase**: ADP activates, ATP/NADH inhibit
3. **α-Ketoglutarate dehydrogenase**: Similar to PDH

### Calcium Activation
- Ca²⁺ activates isocitrate DH and α-KG DH
- Links muscle contraction to energy production
- Important in cardiac muscle

## Anaplerotic Reactions

TCA intermediates are depleted for biosynthesis and must be replenished:

| Reaction | Enzyme | Significance |
|----------|--------|--------------|
| Pyruvate → OAA | Pyruvate carboxylase | Major anaplerosis |
| Glutamate → α-KG | Glutamate dehydrogenase | Amino acid entry |
| Aspartate → OAA | Aspartate aminotransferase | Amino acid entry |

## Biosynthetic Functions

The TCA cycle provides precursors for:
- **Citrate**: Fatty acid synthesis, cholesterol synthesis
- **α-Ketoglutarate**: Amino acid synthesis (glutamate family)
- **Succinyl-CoA**: Heme synthesis, odd-chain fatty acid metabolism
- **Oxaloacetate**: Gluconeogenesis, amino acid synthesis (aspartate)

## Clinical Significance

### Enzyme Deficiencies
- **Fumarase deficiency**: Severe encephalopathy, cancer predisposition
- **Succinate dehydrogenase deficiency**: Paragangliomas, pheochromocytomas
- **α-Ketoglutarate dehydrogenase deficiency**: Neurological dysfunction

### Cancer Metabolism
- SDH, FH, IDH mutations in specific cancers
- Oncometabolite accumulation
- Altered TCA cycle flux

## Supplement Connections

| Supplement | Effect on TCA Cycle |
|------------|---------------------|
| **[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]]** | Cofactor for α-KG dehydrogenase and PDH |
| **[[entities/Supplement/CoQ10\|CoQ10]]** | Supports Complex II function |
| **[[Carnitine\|Carnitine]]** | Delivers fatty acid-derived acetyl-CoA |
| **[[B Vitamins\|B Vitamins]]** | Multiple coenzyme functions |

## Relationships

LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Mitochondrial matrix
PRODUCES::[[entities/Metabolite/NADH\|NADH]] - Three per cycle
PRODUCES::[[entities/Metabolite/FADH2\|FADH2]] - One per cycle
PRODUCES::[[entities/Metabolite/ATP\|ATP]] - Via GTP
CONSUMES::[[entities/Metabolite/Acetyl-CoA\|Acetyl-CoA]] - Primary substrate
CONSUMES::[[entities/Metabolite/NAD+\|NAD+]] - Electron acceptor
FEEDS_INTO::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Via NADH, FADH2
CONNECTED_TO::[[entities/pathway/Glycolysis\|Glycolysis]] - Via pyruvate → acetyl-CoA
CONNECTED_TO::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - Via acetyl-CoA
CONNECTED_TO::[[entities/pathway/Gluconeogenesis\|Gluconeogenesis]] - Via oxaloacetate
AFFECTED_BY::[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]] - Cofactor support
INCLUDES_ENZYME::[[Succinate Dehydrogenase\|Succinate Dehydrogenase]] - Complex II
RELATED_TO::[[entities/pathway/Oxidative Phosphorylation\|Oxidative Phosphorylation]] - Energy coupling

## References

- Krebs HA, Johnson WA. The role of citric acid in intermediate metabolism in animal tissues. Enzymologia. 1937;4:148-156.
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.
- Martínez-Reyes I, Chandel NS. Mitochondrial TCA cycle metabolites control physiology and disease. Nat Commun. 2020;11(1):102. PMID: 31900386
