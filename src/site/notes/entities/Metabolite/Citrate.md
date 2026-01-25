---
{"dg-publish":true,"permalink":"/entities/metabolite/citrate/","tags":["metabolite","tca_cycle","regulatory","fatty_acid_synthesis","central_metabolism"]}
---


# Citrate

## Overview

Citrate is the first intermediate of the citric acid cycle (also called the TCA or Krebs cycle), formed when acetyl-CoA condenses with oxaloacetate. This six-carbon molecule gives the cycle its name and represents the committed step toward complete oxidation of acetyl groups.

Beyond its role in energy metabolism, citrate serves important regulatory and biosynthetic functions:
- **Glycolysis inhibition**: Citrate inhibits PFK-1, slowing glycolysis when energy is abundant
- **Fatty acid synthesis**: Cytoplasmic citrate provides acetyl units for lipogenesis
- **Calcium homeostasis**: Citrate chelates calcium in blood and bone

## Citrate Synthase Reaction

**Acetyl-CoA + Oxaloacetate + H₂O → Citrate + CoA-SH**

- **ΔG°' = -32.2 kJ/mol** (highly exergonic, irreversible)
- Rate-limiting step of TCA cycle under most conditions
- Regulated by substrate availability and product inhibition
- No covalent catalysis; oxaloacetate binding induces conformational change

### Regulation of Citrate Synthase
- **Inhibited by**: NADH, ATP, citrate, succinyl-CoA
- **Activated by**: ADP
- Substrate availability (acetyl-CoA, oxaloacetate) is primary control

## Regulatory Functions

### Glycolysis Regulation
- Citrate is an allosteric inhibitor of PFK-1
- Enhances ATP inhibition of PFK-1
- When TCA cycle is saturated, glycolysis slows
- Prevents excessive pyruvate/acetyl-CoA production

### Fatty Acid Synthesis
- Citrate exits mitochondria via citrate carrier (SLC25A1)
- ATP-citrate lyase cleaves citrate to acetyl-CoA + oxaloacetate
- Provides cytoplasmic acetyl-CoA for lipogenesis
- Active in fed state with insulin stimulation

### Citrate Allosteric Effects
| Target | Effect | Physiological Role |
|--------|--------|-------------------|
| PFK-1 | Inhibition | Slows glycolysis |
| ACC | Activation | Promotes fatty acid synthesis |
| Fructose-1,6-bisphosphatase | Activation | Promotes gluconeogenesis |

## Clinical Significance

### Citrate in Blood
- Normal plasma citrate: 50-150 μmol/L
- Citrate chelates calcium (anticoagulant in blood collection)
- Metabolized by liver, muscle, kidney

### Bone Health
- Citrate comprises ~1-2% of bone by weight
- Maintains mineral phase solubility
- Urinary citrate prevents kidney stone formation

### Cancer Metabolism
- Many cancers export citrate for lipogenesis
- ATP-citrate lyase is a therapeutic target
- Altered citrate metabolism supports proliferation

## Relationships

PRODUCED_BY::[[entities/Metabolite/Acetyl-CoA\|Acetyl-CoA]] - Substrate for citrate synthase
PRODUCED_BY::[[entities/Metabolite/Oxaloacetate\|Oxaloacetate]] - Substrate for citrate synthase
CONVERTED_TO::[[Isocitrate\|Isocitrate]] - Via aconitase
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - First intermediate
PARTICIPATES_IN_PATHWAY::[[Fatty Acid Synthesis\|Fatty Acid Synthesis]] - Acetyl-CoA source
INHIBITS::[[entities/pathway/Glycolysis\|Glycolysis]] - Via PFK-1 inhibition
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Site of synthesis
TRANSPORTED_TO::[[Cytosol\|Cytosol]] - For lipogenesis
RELATED_TO::[[entities/Metabolite/ATP\|ATP]] - High ATP favors citrate accumulation
RELATED_TO::[[entities/Hormone/Insulin\|Insulin]] - Promotes citrate export and lipogenesis

## References

- Wellen KE, et al. ATP-citrate lyase links cellular metabolism to histone acetylation. Science. 2009;324(5930):1076-80. PMID: 19461003
- Icard P, et al. Understanding the central role of citrate in the metabolism of cancer cells. Biochim Biophys Acta. 2012;1825(1):111-6. PMID: 22079406
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.
