---
created: '2026-02-08T19:25:13.074820Z'
description: A metabolic pathway parallel to glycolysis that generates NADPH for biosynthesis
  and antioxidant defense, and ribose-5-phosphate for nucleotide synthesis. Essential
  for rapidly dividing cells and cells requiring high antioxidant capacity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Pathway/pentose-phosphate-pathway/
slug: pentose-phosphate-pathway
tags:
- Pathway
- pathway
- metabolic
- carbohydrate
- nadph
- biosynthesis
- antioxidant
title: Pentose Phosphate Pathway
type: Pathway
updated: '2026-02-08T19:25:13.074820Z'
---

# Pentose Phosphate Pathway

## Overview

The pentose phosphate pathway (PPP) is a cytoplasmic metabolic pathway that runs parallel to glycolysis, branching off from glucose-6-phosphate. It serves two essential functions:

1. **NADPH production**: Reducing equivalents for biosynthesis and antioxidant defense
2. **Ribose-5-phosphate synthesis**: Sugar backbone for nucleotides (DNA/RNA)

The pathway consists of two phases:
- **Oxidative phase**: Irreversible, generates NADPH
- **Non-oxidative phase**: Reversible, interconverts sugars

## Oxidative Phase

### Reaction 1: Glucose-6-phosphate Dehydrogenase (G6PD)
**Glucose-6-phosphate + NADP⁺ → 6-Phosphoglucono-δ-lactone + NADPH**
- Rate-limiting, committed step
- First NADPH produced
- Inhibited by NADPH (product)
- Deficiency causes hemolytic anemia

### Reaction 2: Lactonase
**6-Phosphoglucono-δ-lactone + H₂O → 6-Phosphogluconate**
- Spontaneous or enzyme-catalyzed
- Prepares for next oxidation

### Reaction 3: 6-Phosphogluconate Dehydrogenase
**6-Phosphogluconate + NADP⁺ → Ribulose-5-phosphate + CO₂ + NADPH**
- Second NADPH produced
- Oxidative decarboxylation
- CO₂ released (one carbon lost)

**Net oxidative phase (per glucose-6-P):**
- 2 NADPH
- 1 CO₂
- 1 Ribulose-5-phosphate

## Non-Oxidative Phase

This phase interconverts sugars based on cellular needs:

### Key Enzymes
- **Ribose-5-phosphate isomerase**: Ribulose-5-P ⇌ Ribose-5-P
- **Ribulose-5-phosphate epimerase**: Ribulose-5-P ⇌ Xylulose-5-P
- **Transketolase**: Transfers 2-carbon units (requires TPP)
- **Transaldolase**: Transfers 3-carbon units

### Products
- **Ribose-5-phosphate**: For nucleotide synthesis
- **Fructose-6-phosphate**: Returns to glycolysis
- **Glyceraldehyde-3-phosphate**: Returns to glycolysis
- **Erythrose-4-phosphate**: For aromatic amino acid synthesis

## Pathway Modes

The PPP can operate in different modes based on cellular needs:

### Mode 1: NADPH and Ribose-5-P needed equally
- Oxidative phase runs once
- Products used directly

### Mode 2: More Ribose-5-P than NADPH needed
- Non-oxidative phase runs in reverse
- F-6-P + G-3-P → Ribose-5-P
- Bypasses oxidative phase

### Mode 3: More NADPH than Ribose-5-P needed
- Oxidative phase runs repeatedly
- Ribose-5-P converted back to F-6-P
- Complete oxidation of glucose-6-P to CO₂

### Mode 4: Both NADPH and ATP needed
- Oxidative phase → NADPH
- Non-oxidative phase → glycolysis → ATP

## NADPH Functions

### Biosynthesis
- Fatty acid synthesis (8 NADPH per palmitate)
- Cholesterol synthesis
- Steroid hormone synthesis
- Neurotransmitter synthesis

### Antioxidant Defense
- Glutathione reductase: GSSG + NADPH → 2 GSH
- Thioredoxin reductase: Maintains protein thiols
- Catalase: H₂O₂ detoxification (indirectly)

### Other Functions
- Cytochrome P450 reactions (drug metabolism)
- Nitric oxide synthesis
- Respiratory burst in immune cells

## Clinical Significance

### G6PD Deficiency
- Most common enzyme deficiency (~400 million affected)
- X-linked recessive
- Red blood cells cannot maintain glutathione
- Hemolytic anemia triggered by:
  - Fava beans (favism)
  - Antimalarial drugs
  - Sulfonamides
  - Oxidant stress
- Provides malaria resistance (heterozygote advantage)

### Cancer Metabolism
- Upregulated PPP supports proliferation
- NADPH for lipid synthesis
- Ribose-5-P for DNA replication
- Therapeutic target research

### Diabetes
- Altered flux through PPP
- May contribute to complications
- Aldose reductase pathway competes for glucose

## Supplement Connections

| Supplement | Connection |
|------------|------------|
| **[[Thiamine]]** | Cofactor for transketolase |
| **[[NAC]]** | Requires NADPH for glutathione synthesis |
| **[[Glutathione]]** | Requires NADPH for regeneration |
| **[[Riboflavin]]** | Component of FAD for glutathione reductase |

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Thiamine]] (entity)
```yaml
last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
```
- → [[Riboflavin]] (entity)
```yaml
last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
```
- → [[NAC]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
```
- → [[Glutathione]] (metabolite)
```yaml
last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

BRANCHES_FROM::[[Glycolysis]] - At glucose-6-phosphate
PRODUCES::[[NADPH]] - Two per glucose-6-P oxidized
PRODUCES::[[Ribose-5-phosphate]] - For nucleotide synthesis
FEEDS_BACK_TO::[[Glycolysis]] - Via F-6-P and G-3-P
SUPPORTS::[[Glutathione]] - NADPH for regeneration
SUPPORTS::[[Fatty Acid Synthesis]] - NADPH source
LOCATED_IN::[[Cytosol]] - Cytoplasmic pathway
REQUIRES_COFACTOR::[[Thiamine]] - For transketolase
KEY_ENZYME::[[G6PD]] - Rate-limiting enzyme
RELATED_TO::[[NAD+]] - Different coenzyme pool (NADP+)
AFFECTED_BY::[[Oxidative Stress]] - Increases flux

## References

- Stanton RC. Glucose-6-phosphate dehydrogenase, NADPH, and cell survival. IUBMB Life. 2012;64(5):362-9. PMID: 22431005
- Cappellini MD, Fiorelli G. Glucose-6-phosphate dehydrogenase deficiency. Lancet. 2008;371(9606):64-74. PMID: 18177777
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 20.