---
{"dg-publish":true,"permalink":"/entities/metabolite/oxaloacetate/","tags":["metabolite","tca_cycle","gluconeogenesis","amino_acid_metabolism","regulatory","central_metabolism"]}
---


# Oxaloacetate

## Overview

Oxaloacetate (OAA) is a four-carbon dicarboxylic acid that occupies a pivotal position in cellular metabolism. It is the acceptor molecule that combines with acetyl-CoA to form citrate, initiating each turn of the citric acid cycle. Its concentration is typically very low (1-10 μM in mitochondria), making it a rate-limiting factor for TCA cycle flux.

Oxaloacetate is a metabolic hub connecting multiple pathways:
- **TCA cycle**: Regenerated each turn, accepts acetyl-CoA
- **Gluconeogenesis**: Converted to phosphoenolpyruvate for glucose synthesis
- **Amino acid metabolism**: Transamination yields aspartate
- **Urea cycle**: Provides carbon skeleton for aspartate

## TCA Cycle Role

### Citrate Synthase Reaction
**Oxaloacetate + Acetyl-CoA + H₂O → Citrate + CoA-SH**
- First committed step of TCA cycle
- Highly exergonic (ΔG°' = -32.2 kJ/mol)
- OAA binding induces conformational change
- Low OAA limits cycle rate (mass action effect)

### Regeneration
**Malate + NAD⁺ → Oxaloacetate + NADH**
- Catalyzed by malate dehydrogenase
- Thermodynamically unfavorable, but driven by citrate synthase
- Net result: OAA is catalytic (regenerated each cycle)

## Anaplerotic Reactions

Oxaloacetate pool must be replenished as intermediates are removed:

### Pyruvate Carboxylase
**Pyruvate + CO₂ + ATP → Oxaloacetate + ADP + Pi**
- Major anaplerotic reaction in liver
- Requires biotin cofactor
- Activated by acetyl-CoA
- Critical for gluconeogenesis

### Aspartate Aminotransferase
**Aspartate + α-Ketoglutarate ⇌ Oxaloacetate + Glutamate**
- Reversible transamination
- Links amino acid and carbohydrate metabolism
- Part of malate-aspartate shuttle

## Gluconeogenesis

Oxaloacetate cannot cross mitochondrial membrane directly:

1. **Pyruvate carboxylase**: Pyruvate → OAA (mitochondria)
2. **PEPCK**: OAA → Phosphoenolpyruvate (mitochondria or cytosol)
3. Alternative: OAA → Malate → exit → Malate → OAA → PEP

### PEPCK Reaction
**Oxaloacetate + GTP → PEP + CO₂ + GDP**
- Bypasses irreversible pyruvate kinase
- Glucagon-induced in fasting
- Critical gluconeogenic enzyme

## Clinical Significance

### Oxaloacetate Supplementation
- Emerging longevity supplement
- Proposed mechanism: mimics caloric restriction
- May activate AMPK via NAD+/NADH ratio
- Early human trials ongoing

### Diabetes and Gluconeogenesis
- Excessive OAA → PEP flux in diabetes
- Contributes to fasting hyperglycemia
- Target of metformin (indirectly)

### Biotin Deficiency
- Impairs pyruvate carboxylase
- Reduces OAA synthesis
- Causes lactic acidosis, gluconeogenesis impairment

### Mitochondrial Diseases
- MDH deficiency affects OAA regeneration
- Can impair both TCA cycle and shuttle

## Relationships

PRODUCED_FROM::[[entities/Metabolite/Malate\|Malate]] - Via malate dehydrogenase
PRODUCED_FROM::[[entities/Metabolite/Pyruvate\|Pyruvate]] - Via pyruvate carboxylase
CONDENSED_WITH::[[entities/Metabolite/Acetyl-CoA\|Acetyl-CoA]] - Forms citrate
CONVERTED_TO::[[entities/Metabolite/Citrate\|Citrate]] - Via citrate synthase
CONVERTED_TO::[[Phosphoenolpyruvate\|Phosphoenolpyruvate]] - Via PEPCK
CONVERTED_TO::[[Aspartate\|Aspartate]] - Via transamination
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Acceptor/product
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Gluconeogenesis\|Gluconeogenesis]] - Key intermediate
PARTICIPATES_IN_PATHWAY::[[Urea Cycle\|Urea Cycle]] - Aspartate source
PARTICIPATES_IN_PATHWAY::[[Malate-Aspartate Shuttle\|Malate-Aspartate Shuttle]]
REQUIRES_COFACTOR::[[Biotin\|Biotin]] - For pyruvate carboxylase
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - TCA cycle pool
RELATED_TO::[[entities/Metabolite/NAD+\|NAD+]] - Produced by MDH
RELATED_TO::[[entities/Metabolite/Acetyl-CoA\|Acetyl-CoA]] - Condensation partner

## References

- Owen OE, et al. The key role of anaplerosis and cataplerosis for citric acid cycle function. J Biol Chem. 2002;277(34):30409-12. PMID: 12087111
- Yang H, et al. Nutrient-sensitive mitochondrial NAD+ levels dictate cell survival. Cell. 2007;130(6):1095-107. PMID: 17889652
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.
