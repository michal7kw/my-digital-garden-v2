---
{"dg-publish":true,"permalink":"/entities/protein/sirt-1/","tags":["protein","enzyme","sirtuin","longevity","deacetylase","metabolic_regulation","nad_dependent"]}
---


# SIRT1

## Overview

SIRT1 (Sirtuin 1) is the most extensively studied member of the sirtuin family of NAD+-dependent protein deacetylases. Originally discovered as a longevity factor in yeast (Sir2), SIRT1 plays a central role in metabolic regulation, stress responses, circadian rhythms, and aging in mammals.

SIRT1's requirement for NAD+ as a cofactor creates a direct link between cellular energy status and epigenetic regulation. When NAD+ levels are high (indicating energy abundance or metabolic stress like fasting), SIRT1 activity increases, triggering adaptive responses that promote cellular survival and metabolic efficiency.

SIRT1 has been called a "master metabolic regulator" due to its broad influence on glucose and lipid metabolism, inflammation, and cellular stress responses. Its activity is enhanced by caloric restriction, exercise, and various natural compounds like resveratrol.

## Mechanism of Action

### Enzymatic Activity

SIRT1 catalyzes the removal of acetyl groups from lysine residues:
- **Reaction**: Acetyl-lysine + NAD+ → Lysine + Nicotinamide + O-acetyl-ADP-ribose
- **NAD+ Requirement**: Absolute cofactor requirement links activity to metabolic state
- **Product Inhibition**: Nicotinamide inhibits SIRT1 activity (feedback regulation)

### Key Substrates

1. **Histones**: H3K9ac, H4K16ac - chromatin remodeling
2. **PGC-1α**: Master regulator of mitochondrial biogenesis
3. **FOXO1/3**: Stress resistance and autophagy transcription factors
4. **p53**: Tumor suppressor, cell death regulation
5. **NF-κB (p65)**: Inflammatory signaling
6. **LXR/SREBP**: Lipid metabolism

## Biological Functions

### Metabolic Regulation

- **Gluconeogenesis**: Activates PGC-1α and FOXO1 in fasted state
- **Fatty Acid Oxidation**: Enhances lipid catabolism via PGC-1α and PPARα
- **Mitochondrial Biogenesis**: Deacetylates and activates PGC-1α
- **Insulin Sensitivity**: Modulates insulin signaling through multiple targets

### Stress Responses

- **DNA Repair**: Recruited to DNA damage sites
- **Autophagy**: Activates FOXO-dependent autophagy genes
- **Antioxidant Defense**: Activates FOXO-mediated SOD2 and catalase

### Aging and Longevity

- **Caloric Restriction Mediator**: Required for many CR benefits
- **Circadian Rhythm**: Regulates circadian clock proteins
- **Cellular Senescence**: Modulates senescence-associated phenotypes

## Clinical Significance

### Disease Associations

- **Metabolic Syndrome**: SIRT1 activation improves metabolic parameters
- **Type 2 Diabetes**: Enhances insulin sensitivity
- **Cardiovascular Disease**: Protective through metabolic and anti-inflammatory effects
- **Neurodegeneration**: Neuroprotective in Alzheimer's and Parkinson's models
- **Cancer**: Context-dependent tumor suppressor/promoter

### Therapeutic Targeting

- **SIRT1 Activators**: Resveratrol, SRT1720, other STACs
- **NAD+ Precursors**: NMN, NR increase NAD+ availability for SIRT1

## Relationships

REQUIRES_COFACTOR::[[entities/Metabolite/NAD+\|NAD+]] - Absolute requirement for catalytic activity
ACTIVATED_BY::[[entities/Metabolite/Nicotinamide Riboside\|Nicotinamide Riboside]] - Via NAD+ elevation
ACTIVATED_BY::[[entities/Supplement/Resveratrol\|Resveratrol]] - Direct allosteric activator
ACTIVATED_BY::[[entities/intervention/Caloric Restriction\|Caloric Restriction]] - Elevated NAD+/NADH ratio
ACTIVATED_BY::[[entities/intervention/Exercise\|Exercise]] - Metabolic activation
ACTIVATED_BY::[[entities/intervention/Intermittent Fasting\|Intermittent Fasting]] - Via NAD+ elevation
INHIBITED_BY::[[Nicotinamide\|Nicotinamide]] - Product inhibition
PARTICIPATES_IN_PATHWAY::[[entities/pathway/NAD+ Salvage Pathway\|NAD+ Salvage Pathway]] - NAD+ consumer
ACTIVATES::[[entities/pathway/Autophagy\|Autophagy]] - Via FOXO deacetylation
ACTIVATES::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Via PGC-1α deacetylation
SUPPRESSES::[[entities/pathway/NF-kB Pathway\|NF-kB Pathway]] - Anti-inflammatory effect
RELATED_TO::[[entities/protein/SIRT3\|SIRT3]] - Mitochondrial sirtuin family member
ENCODED_BY::[[entities/protein/SIRT1\|SIRT1]] - SIRT1 gene

## References

- Haigis MC, Sinclair DA. Mammalian sirtuins: biological insights and disease relevance. Annu Rev Pathol. 2010;5:253-95. PMID: 20078221
- Satoh A, et al. SIRT1 promotes the central adaptive response to diet restriction through activation of the dorsomedial and lateral nuclei of the hypothalamus. J Neurosci. 2010;30(30):10220-32. PMID: 20668205
- Cantó C, Auwerx J. Targeting sirtuin 1 to improve metabolism: all you need is NAD(+)? Pharmacol Rev. 2012;64(1):166-87. PMID: 22106091
- Hubbard BP, et al. Evidence for a common mechanism of SIRT1 regulation by allosteric activators. Science. 2013;339(6124):1216-9. PMID: 23471411
