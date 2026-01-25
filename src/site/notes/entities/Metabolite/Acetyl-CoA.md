---
{"dg-publish":true,"permalink":"/entities/metabolite/acetyl-co-a/","tags":["metabolite","central_metabolism","tca_cycle","fatty_acid_synthesis","energy_metabolism"]}
---


# Acetyl-CoA

## Overview

Acetyl-CoA (Acetyl coenzyme A) is arguably the most important metabolic intermediate in cellular biochemistry. It stands at the intersection of virtually all catabolic and anabolic pathways, serving as both a fuel source for energy production and a building block for biosynthesis.

The molecule consists of an acetyl group (2 carbons) attached to coenzyme A via a high-energy thioester bond. This bond's energy is used to drive the condensation reaction with oxaloacetate that begins the citric acid cycle.

Acetyl-CoA is produced from three major sources:
1. **Pyruvate** (from glycolysis) via pyruvate dehydrogenase
2. **Fatty acids** via beta-oxidation
3. **Amino acids** via various catabolic pathways

The fate of Acetyl-CoA depends on cellular energy status:
- **Energy deficit**: Enters TCA cycle for ATP production
- **Energy surplus**: Used for fatty acid synthesis, cholesterol synthesis, or ketone body production

## Biological Functions

### Energy Production
- Entry point for acetyl groups into citric acid cycle
- Complete oxidation yields ~10 ATP per acetyl-CoA
- Connects carbohydrate, fat, and protein catabolism

### Biosynthesis
- **Fatty Acid Synthesis**: Cytoplasmic acetyl-CoA is the substrate for fatty acid synthase
- **Cholesterol Synthesis**: Acetyl-CoA is the precursor for all sterols
- **Ketone Bodies**: Liver converts excess acetyl-CoA to ketones during fasting

### Protein Acetylation
- Substrate for histone acetyltransferases (HATs)
- Epigenetic regulation through histone acetylation
- Metabolic signal linking energy status to gene expression

## Clinical Significance

- **Pyruvate Dehydrogenase Deficiency**: Impaired acetyl-CoA production from glucose
- **Beta-Oxidation Disorders**: Reduced acetyl-CoA from fatty acids
- **Ketoacidosis**: Excess acetyl-CoA accumulation in diabetes
- **Cancer Metabolism**: Altered acetyl-CoA flux in proliferating cells

## Relationships

PRODUCED_BY::[[entities/Metabolite/Pyruvate\|Pyruvate]] - Via pyruvate dehydrogenase complex
PRODUCED_BY::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - From fatty acid catabolism
PRODUCED_BY::[[entities/pathway/Glycolysis\|Glycolysis]] - Indirectly via pyruvate
CONSUMED_BY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Primary fuel input
CONSUMED_BY::[[Fatty Acid Synthesis\|Fatty Acid Synthesis]] - Building block
PRECURSOR_TO::[[entities/Metabolite/Citrate\|Citrate]] - First step of TCA cycle
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Matrix pool for TCA cycle
REQUIRES_COFACTOR::[[CoA\|CoA]] - Coenzyme A carrier
AFFECTED_BY::[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]] - PDH complex cofactor
RELATED_TO::[[entities/Metabolite/Pyruvate\|Pyruvate]] - Direct precursor
RELATED_TO::[[entities/Metabolite/NAD+\|NAD+]] - Required for PDH reaction
RELATED_TO::[[entities/Metabolite/ATP\|ATP]] - Product of complete oxidation

## References

- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17: The Citric Acid Cycle.
- Pietrocola F, et al. Acetyl coenzyme A: a central metabolite and second messenger. Cell Metab. 2015;21(6):805-21. PMID: 26039447
- Shi L, Tu BP. Acetyl-CoA and the regulation of metabolism: mechanisms and consequences. Curr Opin Cell Biol. 2015;33:125-31. PMID: 25703630
