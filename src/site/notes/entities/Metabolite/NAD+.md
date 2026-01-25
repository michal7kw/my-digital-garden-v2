---
{"dg-publish":true,"permalink":"/entities/metabolite/nad/","tags":["metabolite","coenzyme","longevity","energy_metabolism","redox","aging","sirtuin_substrate"]}
---


# NAD+

## Overview

NAD+ (Nicotinamide adenine dinucleotide) is a fundamental coenzyme present in every living cell. It plays essential roles in hundreds of metabolic reactions, primarily as an electron carrier in cellular respiration and as a substrate for important signaling enzymes.

NAD+ has emerged as a central molecule in aging research due to its critical role in sirtuin function, DNA repair, and metabolic regulation. Studies consistently show that NAD+ levels decline by 50% or more between young adulthood and old age, contributing to metabolic dysfunction, cognitive decline, and age-related diseases.

This age-related NAD+ decline is driven by both decreased synthesis (reduced NAMPT activity) and increased consumption (elevated CD38 expression with inflammation). Restoring youthful NAD+ levels through precursor supplementation (NMN, NR) or lifestyle interventions (exercise, fasting) has become a major focus of longevity research.

## Biological Functions

### Energy Metabolism

NAD+ is essential for cellular energy production:
- **Glycolysis**: NAD+ → NADH (electron acceptance)
- **Citric Acid Cycle**: Multiple NAD+-dependent dehydrogenases
- **Oxidative Phosphorylation**: NADH donates electrons to Complex I
- **ATP Production**: Each NADH generates ~2.5 ATP

### Signaling Functions (NAD+ Consumption)

NAD+ serves as a substrate for important enzymes:

1. **Sirtuins (SIRT1-7)**: NAD+-dependent deacetylases controlling metabolism and aging
2. **PARPs**: DNA repair enzymes consuming NAD+ for poly(ADP-ribosyl)ation
3. **CD38**: NAD+ glycohydrolase producing cyclic ADP-ribose for calcium signaling
4. **SARM1**: NAD+ hydrolase involved in axon degeneration

### Redox Balance

- **NAD+/NADH Ratio**: Indicator of cellular metabolic state
- **High Ratio**: Oxidized state, favors catabolic reactions
- **Low Ratio**: Reduced state, can indicate mitochondrial dysfunction

## Age-Related NAD+ Decline

### Causes

1. **Decreased Synthesis**: NAMPT expression falls with age
2. **Increased Consumption**: CD38 levels rise with inflammation
3. **DNA Damage**: PARP activation consumes NAD+ for repair
4. **Mitochondrial Dysfunction**: Altered NAD+ compartmentalization

### Consequences

- Reduced sirtuin activity
- Impaired DNA repair
- Mitochondrial dysfunction
- Metabolic inflexibility
- Cellular senescence
- Stem cell exhaustion

## NAD+ Boosting Strategies

### Precursor Supplementation

| Precursor | Pathway | Benefits |
|-----------|---------|----------|
| **NMN** | Direct to NAD+ via NMNAT | Bypasses NAMPT |
| **NR** | NRK→NMN→NAD+ | Well-studied, no flushing |
| **Niacin** | Preiss-Handler pathway | Causes flushing |
| **Tryptophan** | De novo synthesis | Low efficiency |

### Lifestyle Interventions

- **Exercise**: Increases NAMPT, boosts NAD+
- **Caloric Restriction**: Elevates NAD+/NADH ratio
- **Intermittent Fasting**: Activates NAD+ metabolism
- **Circadian Alignment**: NAMPT follows circadian rhythm

### CD38 Inhibition

- Quercetin, apigenin (natural inhibitors)
- Reduces NAD+ consumption
- Synergistic with precursor supplementation

## Research Highlights

- **Imai & Guarente, 2014**: NAD+ as central regulator of aging
- **Zhang et al., 2016**: NMN restores NAD+ and reverses vascular aging in mice
- **Camacho-Pereira et al., 2016**: CD38 identified as major driver of age-related NAD+ decline
- **Yoshino et al., 2021**: NMN improves muscle insulin sensitivity in prediabetic women

## Relationships

REDUCED_TO::[[entities/Metabolite/NADH\|NADH]] - Electron acceptance regenerates reduced form
PRODUCED_BY::[[entities/pathway/NAD+ Salvage Pathway\|NAD+ Salvage Pathway]] - Primary biosynthesis route
PRODUCED_BY::[[entities/pathway/De Novo NAD+ Synthesis Pathway\|De Novo NAD+ Synthesis Pathway]] - Alternative synthesis
PRODUCED_BY::[[entities/protein/NAMPT\|NAMPT]] - Rate-limiting enzyme for salvage
PRECURSOR_IS::[[entities/Supplement/NMN\|NMN]] - Direct NAD+ precursor
PRECURSOR_IS::[[entities/Metabolite/Nicotinamide Riboside\|Nicotinamide Riboside]] - Efficient NAD+ precursor
CONSUMED_BY::[[entities/protein/SIRT1\|SIRT1]] - Nuclear sirtuin substrate
CONSUMED_BY::[[entities/protein/SIRT3\|SIRT3]] - Mitochondrial sirtuin substrate
CONSUMED_BY::[[entities/protein/CD38\|CD38]] - Major NAD+ consumer
INCREASED_BY::[[entities/intervention/Caloric Restriction\|Caloric Restriction]] - Elevated NAD+/NADH ratio
INCREASED_BY::[[entities/intervention/Exercise\|Exercise]] - Metabolic activation
INCREASED_BY::[[entities/intervention/Intermittent Fasting\|Intermittent Fasting]] - Fasting-induced elevation
INCREASED_BY::[[entities/Supplement/NMN\|NMN]] - Supplement precursor
INCREASED_BY::[[entities/Metabolite/Nicotinamide Riboside\|Nicotinamide Riboside]] - Supplement precursor
INCREASED_BY::[[entities/Supplement/Resveratrol\|Resveratrol]] - Indirect via SIRT1 activation
INCREASED_BY::[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]] - Supports NAD+ metabolism
LOCATED_IN::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Compartmentalized pool
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Electron Transport Chain\|Electron Transport Chain]]
PARTICIPATES_IN_PATHWAY::[[entities/pathway/Glycolysis\|Glycolysis]]
RELATED_TO::[[Aging\|Aging]] - Central to age-related decline
RELATED_TO::[[Longevity\|Longevity]] - Target for lifespan extension
CONSUMED_BY::[[PARP\|PARP]] - DNA repair enzyme
REQUIRED_BY::[[entities/protein/PGC-1alpha\|PGC-1alpha]] - Via SIRT1 activation
PRODUCED_BY::[[entities/pathway/Citric Acid Cycle\|Citric Acid Cycle]] - NADH oxidation
PRODUCED_BY::[[entities/pathway/Beta-Oxidation\|Beta-Oxidation]] - NADH oxidation
RELATED_TO::[[entities/protein/AMPK\|AMPK]] - Energy status linkage
RELATED_TO::[[entities/Metabolite/Acetyl-CoA\|Acetyl-CoA]] - Metabolic connection

## References

- Imai S, Guarente L. NAD+ and sirtuins in aging and disease. Trends Cell Biol. 2014;24(8):464-71. PMID: 24786309
- Verdin E. NAD+ in aging, metabolism, and neurodegeneration. Science. 2015;350(6265):1208-13. PMID: 26785480
- Yoshino J, Baur JA, Imai SI. NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR. Cell Metab. 2018;27(3):513-528. PMID: 29249689
- Covarrubias AJ, et al. NAD+ metabolism and its roles in cellular processes during ageing. Nat Rev Mol Cell Biol. 2021;22(2):119-141. PMID: 33353981
- Katsyuba E, et al. NAD+ homeostasis in health and disease. Nat Metab. 2020;2(1):9-31. PMID: 32694684
