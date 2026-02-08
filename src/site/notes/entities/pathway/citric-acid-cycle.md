---
created: '2026-02-08T19:29:31.726591Z'
description: The central metabolic hub that oxidizes acetyl-CoA to CO2, generating
  NADH, FADH2, and GTP for ATP production. Also known as the TCA cycle or Krebs cycle,
  it connects carbohydrate, fat, and protein metabolism and provides biosynthetic
  precursors.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/citric-acid-cycle/
slug: citric-acid-cycle
tags:
- pathway
- metabolic
- energy_metabolism
- central_metabolism
- mitochondrial
- catabolic
title: Citric Acid Cycle
type: pathway
updated: '2026-02-08T19:29:31.726591Z'
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
| **[[Alpha Lipoic Acid]]** | Cofactor for α-KG dehydrogenase and PDH |
| **[[CoQ10]]** | Supports Complex II function |
| **[[Carnitine]]** | Delivers fatty acid-derived acetyl-CoA |
| **[[B Vitamins]]** | Multiple coenzyme functions |

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Alpha_Lipoic_Acid]] (entity)
```yaml
last_modified: '2026-01-26T06:48:40.589405'
source: obsidian
```
- → [[ATP]] (metabolite)
```yaml
last_modified: '2026-01-26T06:48:40.589405'
source: obsidian
```
- → [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T06:48:40.589405'
source: obsidian
```
- → [[B_Vitamins]] (entity)
```yaml
last_modified: '2026-01-26T06:48:40.589405'
source: obsidian
```
- → [[B_Vitamins]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.663413'
source: obsidian
```
- → [[CoQ10]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.663413'
source: obsidian
```
- → [[Carnitine]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.663413'
source: obsidian
```
- ← [[ATP]] (metabolite)
```yaml
last_modified: '2026-01-26T07:08:05.909377'
source: obsidian
```
- ← [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
```
- → [[Alpha_Lipoic_Acid]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:11.663413'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

LOCATED_IN::[[Mitochondria]] - Mitochondrial matrix
PRODUCES::[[NADH]] - Three per cycle
PRODUCES::[[FADH2]] - One per cycle
PRODUCES::[[ATP]] - Via GTP
CONSUMES::[[Acetyl-CoA]] - Primary substrate
CONSUMES::[[NAD+]] - Electron acceptor
FEEDS_INTO::[[Electron Transport Chain]] - Via NADH, FADH2
CONNECTED_TO::[[Glycolysis]] - Via pyruvate → acetyl-CoA
CONNECTED_TO::[[Beta-Oxidation]] - Via acetyl-CoA
CONNECTED_TO::[[Gluconeogenesis]] - Via oxaloacetate
AFFECTED_BY::[[Alpha Lipoic Acid]] - Cofactor support
INCLUDES_ENZYME::[[Succinate Dehydrogenase]] - Complex II
RELATED_TO::[[Oxidative Phosphorylation]] - Energy coupling

## References

- Krebs HA, Johnson WA. The role of citric acid in intermediate metabolism in animal tissues. Enzymologia. 1937;4:148-156.
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.
- Martínez-Reyes I, Chandel NS. Mitochondrial TCA cycle metabolites control physiology and disease. Nat Commun. 2020;11(1):102. PMID: 31900386