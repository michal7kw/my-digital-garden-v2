---
{"dg-publish":true,"permalink":"/entities/protein/ampk/","tags":["protein","kinase","energy_sensor","metabolism","autophagy","therapeutic_target"]}
---


# AMPK

## Overview

AMPK (AMP-activated protein kinase) is the master regulator of cellular energy homeostasis. Often called the "fuel gauge" of the cell, it senses when energy (ATP) is low and activates compensatory mechanisms to restore energy balance.

AMPK responds to:
- **Falling ATP levels** (increased AMP/ADP)
- **Metabolic stress** (hypoxia, glucose deprivation)
- **Exercise** (muscle contraction)
- **Hormones** (adiponectin, leptin)
- **Pharmacological agents** (metformin, berberine)

When activated, AMPK turns on ATP-generating pathways (glucose uptake, fatty acid oxidation) and turns off ATP-consuming pathways (protein synthesis, lipogenesis).

## Structure and Activation

### Heterotrimer Structure
- **α subunit** (α1 or α2): Catalytic kinase domain
- **β subunit** (β1 or β2): Scaffolding, glycogen binding
- **γ subunit** (γ1, γ2, or γ3): Regulatory, AMP/ADP/ATP binding

### Activation Mechanisms

#### 1. Allosteric Activation (AMP binding)
- AMP binds γ subunit CBS domains
- Causes conformational change
- 2-10 fold activation
- Protects against Thr172 dephosphorylation

#### 2. Phosphorylation at Thr172
- **LKB1** (constitutively active tumor suppressor)
- **CaMKKβ** (Ca²⁺-dependent, exercise)
- Essential for full activation (~100-fold)

#### 3. Allosteric Protection
- AMP/ADP binding inhibits phosphatase access
- Prolongs activated state

## Major Downstream Targets

### Stimulated Pathways (Catabolic)

| Target | Effect | Outcome |
|--------|--------|---------|
| ACC1/2 | Inhibition (phosphorylation) | ↑ Fatty acid oxidation, ↓ lipogenesis |
| GLUT4 | Translocation | ↑ Glucose uptake |
| PGC-1α | Activation | ↑ Mitochondrial biogenesis |
| ULK1 | Activation | ↑ Autophagy |
| FOXO3 | Activation | ↑ Stress resistance |
| p53 | Activation | Cell cycle arrest if severe stress |

### Inhibited Pathways (Anabolic)

| Target | Effect | Outcome |
|--------|--------|---------|
| mTORC1 | Inhibition (via TSC2, Raptor) | ↓ Protein synthesis |
| SREBP-1c | Inhibition | ↓ Lipogenesis |
| HMGCR | Inhibition | ↓ Cholesterol synthesis |
| GS | Inhibition | ↓ Glycogen synthesis |
| CRTC2 | Inhibition | ↓ Gluconeogenesis (short-term) |

## Physiological Roles

### Exercise
- Muscle contraction activates AMPK via AMP rise and Ca²⁺
- Increases glucose uptake independent of insulin
- Promotes mitochondrial biogenesis (via PGC-1α)
- Underlies many exercise benefits

### Fasting/Caloric Restriction
- Low glucose activates AMPK
- Shifts metabolism to fat oxidation
- Activates autophagy
- Mediates some CR longevity benefits

### Metabolic Regulation
- Suppresses hepatic gluconeogenesis (acutely)
- Inhibits de novo lipogenesis
- Enhances insulin sensitivity
- Reduces inflammation

### Longevity
- AMPK activation extends lifespan in model organisms
- Linked to caloric restriction benefits
- Target of longevity drugs (metformin)

## Pharmacological Activators

| Agent | Mechanism | Notes |
|-------|-----------|-------|
| **Metformin** | Complex I inhibition → ↑AMP | First-line diabetes drug |
| **[[entities/drug/Berberine\|Berberine]]** | Similar to metformin | Natural compound |
| **AICAR** | AMP analog | Research tool |
| **A-769662** | Direct β subunit binding | Research compound |
| **Salicylate** | Direct β1 binding | High doses |

## Clinical Significance

### Type 2 Diabetes
- AMPK activators improve glucose control
- Metformin mechanism involves AMPK
- Increases insulin sensitivity
- Reduces hepatic glucose output

### Cancer
- AMPK is a tumor suppressor (via LKB1)
- mTORC1 inhibition slows proliferation
- Metformin reduces cancer incidence
- Complex role in established tumors

### Cardiovascular Disease
- Cardiac AMPK protects during ischemia
- Improves endothelial function
- Reduces atherosclerosis

### Neurodegeneration
- AMPK activation can be protective or harmful
- Context-dependent effects
- Active area of research

## Supplement Connections

| Supplement | Effect on AMPK |
|------------|----------------|
| **[[entities/drug/Berberine\|Berberine]]** | Potent activator (similar to metformin) |
| **[[entities/Supplement/Alpha Lipoic Acid\|Alpha Lipoic Acid]]** | May activate AMPK |
| **[[entities/Supplement/Resveratrol\|Resveratrol]]** | Indirect via SIRT1, also direct effects |
| **[[entities/Supplement/Quercetin\|Quercetin]]** | May activate AMPK |
| **[[EGCG\|EGCG]]** | Activates AMPK |
| **[[entities/Supplement/Curcumin\|Curcumin]]** | May activate AMPK |

## Relationships

ACTIVATED_BY::[[AMP\|AMP]] - Primary energy signal
ACTIVATED_BY::[[entities/Metabolite/ADP\|ADP]] - Secondary energy signal
ACTIVATED_BY::[[entities/intervention/Exercise\|Exercise]] - Via AMP rise and Ca²⁺
ACTIVATED_BY::[[entities/drug/Berberine\|Berberine]] - Pharmacological activator
ACTIVATED_BY::[[entities/drug/Metformin\|Metformin]] - Via Complex I inhibition
ACTIVATED_BY::[[entities/intervention/Caloric Restriction\|Caloric Restriction]] - Fasting state
PHOSPHORYLATES::[[entities/protein/PGC-1alpha\|PGC-1alpha]] - Mitochondrial biogenesis
PHOSPHORYLATES::[[ACC\|ACC]] - Inhibits lipogenesis
INHIBITS::[[mTORC1\|mTORC1]] - Protein synthesis suppression
INHIBITS::[[entities/pathway/Gluconeogenesis\|Gluconeogenesis]] - Acute suppression
PROMOTES::[[entities/pathway/Autophagy\|Autophagy]] - Via ULK1
PROMOTES::[[Fatty Acid Oxidation\|Fatty Acid Oxidation]] - Via ACC inhibition
REGULATED_BY::[[LKB1\|LKB1]] - Upstream kinase
RELATED_TO::[[entities/Metabolite/NAD+\|NAD+]] - Linked to energy status
RELATED_TO::[[entities/Metabolite/ATP\|ATP]] - Senses ATP levels
RELATED_TO::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Energy metabolism hub

## References

- Hardie DG. AMPK: a key regulator of energy balance in the single cell and the whole organism. Int J Obes. 2008;32 Suppl 4:S7-12. PMID: 18719601
- Steinberg GR, Kemp BE. AMPK in Health and Disease. Physiol Rev. 2009;89(3):1025-78. PMID: 19584320
- Garcia D, Shaw RJ. AMPK: Mechanisms of Cellular Energy Sensing and Restoration of Metabolic Balance. Mol Cell. 2017;66(6):789-800. PMID: 28622524
