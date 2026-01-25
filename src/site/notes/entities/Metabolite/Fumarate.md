---
{"dg-publish":true,"permalink":"/entities/metabolite/fumarate/","tags":["metabolite","tca_cycle","oncometabolite","signaling","protein_modification"]}
---


# Fumarate

## Overview

Fumarate is a four-carbon dicarboxylic acid with a trans double bond, formed when succinate dehydrogenase oxidizes succinate in the citric acid cycle. Fumarase then hydrates fumarate to produce malate, continuing the cycle.

Beyond its metabolic role, fumarate is increasingly recognized as a signaling molecule:
- **Oncometabolite**: Accumulates in fumarase-deficient tumors
- **Epigenetic regulator**: Inhibits histone and DNA demethylases
- **Protein modifier**: Non-enzymatic succination of cysteine residues
- **Therapeutic agent**: Dimethyl fumarate used in multiple sclerosis

## TCA Cycle Role

### Succinate → Fumarate
**Succinate + FAD → Fumarate + FADH2** (Complex II)
- Catalyzed by succinate dehydrogenase
- Trans double bond formed by flavin-dependent oxidation
- Electrons transferred to ubiquinone pool

### Fumarate → Malate
**Fumarate + H₂O → L-Malate** (Fumarase)
- Stereospecific hydration
- Only L-malate formed
- Reversible reaction near equilibrium

## Signaling and Regulatory Functions

### Enzyme Inhibition
Fumarate inhibits α-ketoglutarate-dependent dioxygenases:

| Enzyme Class | Effect of Inhibition |
|--------------|---------------------|
| PHDs (prolyl hydroxylases) | HIF-1α stabilization |
| TET enzymes | DNA hypermethylation |
| KDMs (histone demethylases) | Histone hypermethylation |

### Protein Succination
- Fumarate reacts with cysteine thiols (Michael addition)
- Forms S-(2-succino)cysteine (2SC)
- Irreversible covalent modification
- Affects proteins: GAPDH, Keap1, aconitase

### Keap1-Nrf2 Pathway
- Fumarate succination of Keap1 activates Nrf2
- Induces antioxidant response genes
- Therapeutic mechanism of dimethyl fumarate
- Protective against oxidative stress

## Clinical Significance

### Hereditary Leiomyomatosis (HLRCC)
- Fumarase (FH) mutations cause fumarate accumulation
- Associated tumors:
  - Uterine leiomyomas
  - Cutaneous leiomyomas
  - Aggressive renal cell carcinoma
- Pseudohypoxic drive via HIF stabilization

### Dimethyl Fumarate (Tecfidera)
- FDA-approved for multiple sclerosis
- Activates Nrf2 antioxidant pathway
- Anti-inflammatory effects
- Metabolized to fumarate/succinate

### Cancer Metabolism
- FH-deficient cancers show:
  - High fumarate/succinate ratio
  - Epigenetic dysregulation
  - Altered amino acid metabolism
  - Glycolysis preference

## Relationships

PRODUCED_FROM::[[entities/Metabolite/Succinate\|Succinate]] - Via succinate dehydrogenase
CONVERTED_TO::[[entities/Metabolite/Malate\|Malate]] - Via fumarase
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - Central intermediate
PARTICIPATES_IN_PATHWAY::[[Urea Cycle\|Urea Cycle]] - Argininosuccinate lyase product
INHIBITS::[[PHD Enzymes\|PHD Enzymes]] - Prolyl hydroxylases
INHIBITS::[[TET Enzymes\|TET Enzymes]] - DNA demethylases
ACTIVATES::[[entities/protein/NRF2\|Nrf2]] - Via Keap1 succination
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Site of metabolism
RELATED_TO::[[entities/Metabolite/Succinate\|Succinate]] - Substrate for SDH
RELATED_TO::[[HIF-1alpha\|HIF-1alpha]] - Stabilized by fumarate

## References

- Yang M, et al. The role of fumarate and succinate in metabolic reprogramming of immune cells. Cell Metab. 2021;33(12):2324-2340. PMID: 34678185
- Tomlinson IP, et al. Germline mutations in FH predispose to dominantly inherited uterine fibroids, skin leiomyomata and papillary renal cell cancer. Nat Genet. 2002;30(4):406-10. PMID: 11865300
- Linker RA, et al. Fumaric acid esters exert neuroprotective effects in neuroinflammation via activation of the Nrf2 antioxidant pathway. Brain. 2011;134(Pt 3):678-92. PMID: 21354971
