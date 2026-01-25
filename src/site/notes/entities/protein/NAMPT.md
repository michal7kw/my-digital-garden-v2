---
{"dg-publish":true,"permalink":"/entities/protein/nampt/","tags":["protein","enzyme","nad_biosynthesis","salvage_pathway","rate_limiting","metabolic_regulation","longevity"]}
---


# NAMPT

## Overview

NAMPT (Nicotinamide Phosphoribosyltransferase) is the rate-limiting enzyme in the NAD+ salvage pathway, which is responsible for recycling nicotinamide back into NAD+. Because most NAD+ consuming enzymes (sirtuins, PARPs, CD38) release nicotinamide as a product, NAMPT is essential for maintaining cellular NAD+ pools.

NAMPT exists in two forms: intracellular NAMPT (iNAMPT) which catalyzes NMN synthesis, and extracellular NAMPT (eNAMPT), also known as visfatin or PBEF, which has additional cytokine-like functions.

The importance of NAMPT in NAD+ metabolism has made it a key target for understanding and potentially treating age-related NAD+ decline. NAMPT expression and activity decrease with age, contributing to reduced NAD+ levels. Strategies to boost NAMPT function or bypass it (through NMN or NR supplementation) are being explored for their anti-aging potential.

## Mechanism of Action

### Enzymatic Reaction

**NAD+ Salvage Pathway - Rate-Limiting Step**:
```
Nicotinamide + PRPP → NMN + PPi
```

- **Substrate**: Nicotinamide (vitamin B3, NAD+ breakdown product)
- **Co-substrate**: 5-phosphoribosyl-1-pyrophosphate (PRPP)
- **Product**: Nicotinamide mononucleotide (NMN)
- **Regulation**: Product inhibition, ATP, circadian clock

### NAD+ Salvage Pathway Context

1. NAD+ is consumed by sirtuins, PARPs, CD38 → releases Nicotinamide
2. **NAMPT**: Nicotinamide + PRPP → NMN (RATE-LIMITING)
3. NMNAT: NMN + ATP → NAD+

## Forms and Localization

### Intracellular NAMPT (iNAMPT)

- Primary enzymatic function
- Present in cytoplasm and nucleus
- Essential for intracellular NAD+ biosynthesis
- Activity regulated by circadian clock

### Extracellular NAMPT (eNAMPT/Visfatin)

- Secreted by adipocytes and other cells
- Cytokine-like functions
- May contribute to systemic NMN pools
- Elevated in obesity and inflammation (controversial role)

## Biological Significance

### NAD+ Homeostasis

- Controls ~85% of NAD+ biosynthesis in mammals
- Rate-limiting step means NAMPT activity determines NAD+ levels
- Small changes in NAMPT activity have large effects on NAD+ pools

### Circadian Regulation

- NAMPT expression oscillates with 24-hour rhythm
- Controlled by CLOCK:BMAL1 transcription factors
- Creates circadian fluctuations in NAD+ levels
- Links metabolism to biological clock

### Aging and NAMPT

- NAMPT expression declines with age
- Contributes to age-related NAD+ decline
- NAMPT overexpression extends lifespan in mice
- eNAMPT levels correlate with lifespan in mice

## Clinical Significance

### Therapeutic Approaches

**NAMPT Activators**:
- P7C3 compounds (neuroprotective)
- Exercise upregulates NAMPT

**Bypassing NAMPT**:
- NMN supplementation (bypasses NAMPT)
- NR supplementation (phosphorylated by NRK, then NMNAT)

**NAMPT Inhibitors (Cancer)**:
- FK866/APO866
- CHS-828
- Target rapidly dividing cancer cells' NAD+ needs

### Disease Associations

- **Aging**: Declining NAMPT contributes to NAD+ decline
- **Cancer**: Target due to cancer cells' high NAD+ demand
- **Metabolic Disease**: eNAMPT dysregulation in obesity
- **Neurodegeneration**: NAMPT activators show neuroprotection

## Research Highlights

- **Revollo et al., 2007** (PMID: 17934455): Established NAMPT as rate-limiting enzyme in NAD+ salvage
- **Ramsey et al., 2009** (PMID: 19299583): Circadian regulation of NAMPT
- **Yoshida et al., 2019** (PMID: 31002657): eNAMPT in blood extends lifespan in mice

## Relationships

CATALYZES_PRODUCTION_OF::[[entities/Supplement/NMN\|NMN]] - Produces NMN from nicotinamide
PARTICIPATES_IN_PATHWAY::[[entities/pathway/NAD+ Salvage Pathway\|NAD+ Salvage Pathway]] - Rate-limiting enzyme
UPSTREAM_OF::[[entities/Metabolite/NAD+\|NAD+]] - Controls NAD+ biosynthesis rate
ACTIVATED_BY::[[entities/intervention/Exercise\|Exercise]] - Upregulates NAMPT expression
ACTIVATED_BY::[[entities/intervention/Caloric Restriction\|Caloric Restriction]] - Increases NAMPT activity
AFFECTED_BY::[[entities/pathway/Circadian Rhythm Pathway\|Circadian Rhythm Pathway]] - Circadian expression pattern
RELATED_TO::[[entities/protein/SIRT1\|SIRT1]] - NAMPT activity determines sirtuin substrate availability
RELATED_TO::[[entities/protein/SIRT3\|SIRT3]] - Mitochondrial NAD+ pool maintenance
COMPETES_WITH::[[entities/protein/CD38\|CD38]] - CD38 consumes NAD+ that NAMPT produces
INHIBITED_BY::[[Nicotinamide\|Nicotinamide]] - Product inhibition
ENCODED_BY::[[entities/protein/NAMPT\|NAMPT]] - NAMPT gene

## References

- Revollo JR, et al. The NAD biosynthesis pathway mediated by nicotinamide phosphoribosyltransferase regulates Sir2 activity in mammalian cells. J Biol Chem. 2004;279(49):50754-63. PMID: 15381699
- Ramsey KM, et al. Circadian clock feedback cycle through NAMPT-mediated NAD+ biosynthesis. Science. 2009;324(5927):651-4. PMID: 19299583
- Yoshida M, et al. Extracellular Vesicle-Contained eNAMPT Delays Aging and Extends Lifespan in Mice. Cell Metab. 2019;30(2):329-342.e5. PMID: 31155496
- Garten A, et al. Physiological and pathophysiological roles of NAMPT and NAD metabolism. Nat Rev Endocrinol. 2015;11(9):535-46. PMID: 26215259
- Imai S, Yoshino J. The importance of NAMPT/NAD/SIRT1 in the systemic regulation of metabolism and ageing. Diabetes Obes Metab. 2013;15 Suppl 3:26-33. PMID: 24003918
