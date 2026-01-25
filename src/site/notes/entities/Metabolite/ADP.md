---
{"dg-publish":true,"permalink":"/entities/metabolite/adp/","tags":["metabolite","nucleotide","energy_metabolism","signaling","mitochondrial"]}
---


# ADP

## Overview

ADP (adenosine diphosphate) is the two-phosphate nucleotide that participates directly in cellular energy transactions. It is both the immediate substrate for ATP synthesis and the first product of ATP utilization, making it central to the ATP/ADP cycle that powers virtually all cellular processes.

The concentration of ADP serves as a key signal of cellular energy status:
- **Low ADP**: Indicates energy sufficiency, slows respiration
- **High ADP**: Indicates energy demand, accelerates respiration

This relationship, called "respiratory control," ensures that mitochondria produce ATP at a rate matched to cellular demand.

## Metabolic Role

### ATP Synthesis
- **Oxidative Phosphorylation**: ADP + Pi + H⁺ → ATP (via ATP synthase)
- **Substrate-Level Phosphorylation**: ADP + phosphoryl donor → ATP
- ADP availability controls the rate of mitochondrial respiration

### ATP Utilization
- **All ATP-consuming reactions produce ADP**
- Muscle contraction, ion pumping, biosynthesis
- Kinases, motor proteins, chaperones

### Signaling Functions
- **AMPK Activation**: AMP/ADP binding activates this master energy sensor
- **P2Y Receptors**: Extracellular ADP signals through purinergic receptors
- **Platelet Activation**: ADP released from damaged cells activates platelets

## Respiratory Control

The ADP/ATP ratio is the primary regulator of mitochondrial respiration:

1. **State 3 (Active)**: Abundant ADP drives rapid ATP synthesis
2. **State 4 (Resting)**: Low ADP limits ATP synthase activity
3. **Uncoupled**: Proton leak bypasses ATP synthase (thermogenesis)

This coupling between substrate availability and respiration rate is essential for:
- Matching ATP production to demand
- Preventing excessive ROS generation
- Maintaining proton motive force

## Adenylate Kinase

ADP also participates in the adenylate kinase reaction:
- **2 ADP ⇌ ATP + AMP**
- Buffers adenine nucleotide pool
- Generates AMP as a stress signal
- Critical for muscle energy homeostasis

## Clinical Significance

### Mitochondrial Diseases
- Impaired ADP/ATP exchange affects energy metabolism
- ANT (adenine nucleotide translocase) defects
- Results in exercise intolerance, cardiomyopathy

### Ischemia-Reperfusion
- ADP accumulates during ischemia
- Adenylate kinase generates AMP
- AMP degradation to adenosine, inosine, hypoxanthine

### Platelet Disorders
- ADP receptor (P2Y12) antagonists are antiplatelet drugs
- Clopidogrel, prasugrel, ticagrelor target this pathway

## Relationships

CONVERTED_TO::[[entities/Metabolite/ATP\|ATP]] - Via ATP synthase
PRODUCED_FROM::[[entities/Metabolite/ATP\|ATP]] - Via ATP hydrolysis
CONVERTED_TO::[[AMP\|AMP]] - Via adenylate kinase
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Oxidative Phosphorylation\|Oxidative Phosphorylation]]
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Glycolysis\|Glycolysis]] - Substrate-level phosphorylation
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Matrix, for ATP synthase
ACTIVATES::[[entities/protein/AMPK\|AMPK]] - Via AMP generated from ADP
REGULATES::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Respiratory control
RELATED_TO::[[entities/drug/Creatine\|Creatine]] - Phosphocreatine system
RELATED_TO::[[entities/Metabolite/Phosphocreatine\|Phosphocreatine]] - ATP buffer system
RELATED_TO::[[entities/Metabolite/ATP\|ATP]] - Energy currency cycle

## References

- Chance B, Williams GR. Respiratory enzymes in oxidative phosphorylation. J Biol Chem. 1955;217(1):383-93. PMID: 13271402
- Hardie DG. AMPK: a key regulator of energy balance in the single cell and the whole organism. Int J Obes. 2008;32 Suppl 4:S7-12. PMID: 18719601
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 18.
