---
{"dg-publish":true,"permalink":"/entities/metabolite/malate/","tags":["metabolite","tca_cycle","shuttle","gluconeogenesis","central_metabolism"]}
---


# Malate

## Overview

Malate is a four-carbon dicarboxylic acid that plays multiple essential roles in cellular metabolism. In the citric acid cycle, it is formed by hydration of fumarate and oxidized to regenerate oxaloacetate, completing the cycle. Through the malate-aspartate shuttle, it enables transfer of cytoplasmic NADH reducing equivalents into mitochondria.

The name derives from Latin "malum" (apple), as malic acid is abundant in apples and gives them their characteristic tartness.

## TCA Cycle Role

### Fumarate → Malate (Fumarase)
**Fumarate + H₂O → L-Malate**
- Stereospecific: only L-malate produced
- Near-equilibrium reaction (ΔG°' ≈ 0)
- Classic example of stereospecific enzyme catalysis

### Malate → Oxaloacetate (Malate Dehydrogenase)
**L-Malate + NAD⁺ → Oxaloacetate + NADH + H⁺**
- Strongly endergonic (ΔG°' = +29.7 kJ/mol)
- Driven forward by oxaloacetate consumption
- Produces the fourth NADH of TCA cycle
- Completes the cycle by regenerating oxaloacetate

## Malate-Aspartate Shuttle

The shuttle transfers reducing equivalents from cytoplasmic NADH to mitochondrial NADH:

### Cytoplasmic Side
1. **Malate dehydrogenase** reduces oxaloacetate to malate using NADH
2. Malate enters mitochondria via malate-α-ketoglutarate carrier

### Mitochondrial Side
3. **Malate dehydrogenase** oxidizes malate to oxaloacetate, producing NADH
4. Oxaloacetate → aspartate (via aspartate aminotransferase)
5. Aspartate exits to cytosol

### Importance
- Transfers reducing equivalents with no energy loss
- Each cytoplasmic NADH yields ~2.5 ATP
- Alternative: glycerol-3-phosphate shuttle (yields ~1.5 ATP)
- Critical in heart, liver, kidney

## Other Metabolic Roles

### Gluconeogenesis
- Malate can exit mitochondria for gluconeogenesis
- Cytoplasmic malate → oxaloacetate → PEP → glucose
- Active during fasting

### C4 Photosynthesis (Plants)
- CO₂ fixed into malate in mesophyll cells
- Malate transported to bundle sheath cells
- Released CO₂ concentrated for Calvin cycle

### Malic Enzyme
- Malate + NADP⁺ → Pyruvate + CO₂ + NADPH
- Provides NADPH for lipogenesis
- Active in lipogenic tissues (liver, adipose)

## Clinical Significance

### Exercise Metabolism
- Malate supplementation studied for exercise performance
- May support TCA cycle flux during exercise
- Citrulline malate combinations popular

### Fibromyalgia
- Magnesium malate studied for muscle pain
- Proposed TCA cycle support mechanism
- Evidence remains preliminary

### Mitochondrial Disorders
- Malate/aspartate shuttle defects
- Can cause exercise intolerance
- Affects NADH transport

## Relationships

PRODUCED_FROM::[[entities/Metabolite/Fumarate\|Fumarate]] - Via fumarase
CONVERTED_TO::[[entities/Metabolite/Oxaloacetate\|Oxaloacetate]] - Via malate dehydrogenase
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Final intermediate
PARTICIPATES_IN_PATHWAY::[[Malate-Aspartate Shuttle\|Malate-Aspartate Shuttle]] - NADH transport
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Gluconeogenesis\|Gluconeogenesis]] - Carbon transport
PRODUCES::[[entities/Metabolite/NADH\|NADH]] - Malate dehydrogenase product
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - TCA cycle pool
LOCATED_IN::[[Cytosol\|Cytosol]] - Shuttle pool
RELATED_TO::[[entities/Metabolite/NAD+\|NAD+]] - Electron acceptor
RELATED_TO::[[entities/Metabolite/Oxaloacetate\|Oxaloacetate]] - Product and shuttle partner
TRANSPORTED_BY::[[Malate-alpha-ketoglutarate Carrier\|Malate-alpha-ketoglutarate Carrier]] - Mitochondrial import

## References

- LaNoue KF, Schoolwerth AC. Metabolite transport in mitochondria. Annu Rev Biochem. 1979;48:871-922. PMID: 382995
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.
- Bendahan D, et al. Citrulline/malate promotes aerobic energy production in human exercising muscle. Br J Sports Med. 2002;36(4):282-9. PMID: 12145119
