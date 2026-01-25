---
{"dg-publish":true,"permalink":"/entities/metabolite/succinate/","tags":["metabolite","tca_cycle","etc_link","signaling","inflammation","hypoxia"]}
---


# Succinate

## Overview

Succinate occupies a unique position in cellular metabolism as the only TCA cycle intermediate directly linked to the electron transport chain. Succinate dehydrogenase (SDH) oxidizes succinate to fumarate while reducing FAD to FADH2, which immediately delivers electrons to the ubiquinone pool.

Beyond its metabolic role, succinate has emerged as an important signaling molecule:
- **Hypoxia signal**: Accumulates when oxygen is limited
- **Inflammatory mediator**: Promotes IL-1β production via HIF-1α
- **Oncometabolite**: SDH mutations lead to succinate accumulation and tumorigenesis

## Succinate Dehydrogenase (Complex II)

**Succinate + FAD → Fumarate + FADH2**

SDH is unique among TCA cycle enzymes:
- Only TCA enzyme embedded in inner mitochondrial membrane
- Part of both TCA cycle AND electron transport chain
- Contains covalently bound FAD (not NAD+)
- Electrons go directly to ubiquinone, bypassing Complex I

### SDH Composition
- **SDHA**: Catalytic subunit with FAD
- **SDHB**: Iron-sulfur clusters
- **SDHC/D**: Membrane anchor, ubiquinone binding

### ATP Yield
- FADH2 enters ETC at Complex II
- Bypasses Complex I proton pumping
- Yields ~1.5 ATP per succinate (vs. ~2.5 for NADH substrates)

## Signaling Functions

### Hypoxia and HIF-1α
1. Oxygen limitation impairs ETC function
2. Succinate accumulates as SDH slows
3. Succinate inhibits prolyl hydroxylases (PHDs)
4. HIF-1α escapes degradation, activates transcription
5. Promotes glycolysis, angiogenesis, inflammation

### Inflammatory Signaling
- Activated macrophages accumulate succinate
- Succinate stabilizes HIF-1α in cytoplasm
- HIF-1α drives IL-1β transcription
- Contributes to inflammatory response

### SUCNR1 (GPR91)
- G-protein coupled receptor for succinate
- Expressed in kidney, immune cells, adipose
- Mediates paracrine/endocrine effects
- Involved in renin release, blood pressure regulation

## Clinical Significance

### SDH-Deficient Tumors
- Germline SDH mutations cause:
  - Paragangliomas
  - Pheochromocytomas
  - Gastrointestinal stromal tumors (GIST)
  - Renal cell carcinoma
- Succinate accumulation drives pseudohypoxia

### Ischemia-Reperfusion Injury
- Succinate accumulates during ischemia
- Rapid oxidation upon reperfusion generates ROS
- Contributes to tissue damage
- Therapeutic target for cardioprotection

### Metabolic Diseases
- Altered succinate metabolism in diabetes
- Elevated plasma succinate in metabolic syndrome
- Role in obesity-associated inflammation

## Relationships

PRODUCED_FROM::[[Succinyl-CoA\|Succinyl-CoA]] - Via succinyl-CoA synthetase
OXIDIZED_TO::[[entities/Metabolite/Fumarate\|Fumarate]] - Via succinate dehydrogenase
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Central intermediate
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]] - Via Complex II
PRODUCES::[[entities/Metabolite/FADH2\|FADH2]] - Electron carrier for ETC
STABILIZES::[[HIF-1alpha\|HIF-1alpha]] - Via PHD inhibition
ACTIVATES::[[SUCNR1\|SUCNR1]] - Cell surface receptor
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Site of metabolism
RELATED_TO::[[entities/Supplement/CoQ10\|CoQ10]] - Electron acceptor at Complex II
AFFECTED_BY::[[Hypoxia\|Hypoxia]] - Accumulates under low oxygen

## References

- Mills EL, et al. Succinate Dehydrogenase Supports Metabolic Repurposing of Mitochondria to Drive Inflammatory Macrophages. Cell. 2016;167(2):457-470. PMID: 27667687
- Tannahill GM, et al. Succinate is an inflammatory signal that induces IL-1β through HIF-1α. Nature. 2013;496(7444):238-42. PMID: 23535595
- Chouchani ET, et al. Ischaemic accumulation of succinate controls reperfusion injury through mitochondrial ROS. Nature. 2014;515(7527):431-5. PMID: 25383517
