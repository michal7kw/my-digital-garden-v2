---
created: '2026-02-08T19:45:44.639780Z'
description: Nuclear factor erythroid 2-related factor 2, the master regulator of
  antioxidant and cytoprotective gene expression. Normally sequestered in cytoplasm
  by Keap1, oxidative stress or electrophiles release NRF2 to activate the ARE (antioxidant
  response element) pathway.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/nrf2/
slug: nrf2
tags:
- protein
- transcription_factor
- antioxidant
- cytoprotection
- detoxification
- longevity
title: NRF2
type: protein
updated: '2026-02-08T19:45:44.639780Z'
---

# NRF2

## Overview

NRF2 (Nuclear factor erythroid 2-related factor 2) is the master transcriptional regulator of the cellular antioxidant response. It controls the expression of over 250 genes involved in antioxidant defense, detoxification, proteostasis, and metabolism.

The NRF2-Keap1 system represents an elegant redox sensing mechanism:
- **Normal conditions**: NRF2 is constantly degraded (half-life ~20 min)
- **Oxidative stress**: Keap1 is modified, NRF2 accumulates and activates genes
- **Recovery**: System resets to baseline surveillance

This system allows cells to rapidly respond to oxidative challenges while maintaining low baseline activity to preserve normal cellular signaling.

## Keap1-NRF2 Pathway

### Basal State (Low Stress)
1. Keap1 binds NRF2 in cytoplasm
2. Keap1 recruits Cullin3-Rbx1 E3 ligase
3. NRF2 is ubiquitinated
4. Proteasomal degradation (~20 min half-life)
5. Minimal NRF2 in nucleus

### Activated State (Oxidative Stress)
1. ROS/electrophiles modify Keap1 cysteines (C151, C273, C288)
2. Conformational change disrupts Keap1-NRF2 interaction
3. Newly synthesized NRF2 escapes degradation
4. NRF2 accumulates and enters nucleus
5. Binds ARE sequences with small Maf proteins
6. Activates cytoprotective gene transcription

### Recovery
1. Stress resolved
2. Keap1 regains ability to bind NRF2
3. Nuclear NRF2 exported and degraded
4. Baseline state restored

## NRF2 Target Genes

### Antioxidant Defense
| Gene | Function |
|------|----------|
| GCLC/GCLM | Glutathione synthesis (rate-limiting) |
| GSR | Glutathione reductase |
| GPX | Glutathione peroxidases |
| TXN | Thioredoxin |
| TXNRD | Thioredoxin reductase |
| PRDX | Peroxiredoxins |
| SOD1/2 | Superoxide dismutases |
| CAT | Catalase |

### Detoxification
| Gene | Function |
|------|----------|
| NQO1 | Quinone oxidoreductase |
| GSTs | Glutathione S-transferases |
| UGTs | UDP-glucuronosyltransferases |
| HO-1 | Heme oxygenase 1 |
| AKR | Aldo-keto reductases |

### Proteostasis
- Proteasome subunits
- Autophagy genes
- Heat shock proteins

### Metabolism
- Pentose phosphate pathway enzymes
- NADPH-generating enzymes
- Lipid metabolism genes

## Pharmacological Activators

### Natural Compounds
| Compound | Source |
|----------|--------|
| **[[Sulforaphane]]** | Broccoli sprouts (most studied) |
| **[[Curcumin]]** | Turmeric |
| **[[EGCG]]** | Green tea |
| **[[Resveratrol]]** | Grapes, wine |
| **Quercetin** | Onions, apples |
| **Fumarate** | Endogenous, also dimethyl fumarate drug |

### Drugs
- **Dimethyl fumarate (Tecfidera)**: Multiple sclerosis
- **Bardoxolone**: CKD (clinical trials)
- **Oltipraz**: Studied for chemoprevention

## Clinical Significance

### Aging
- NRF2 activity declines with age
- Contributes to oxidative damage accumulation
- NRF2 activators extend lifespan in models

### Neurodegenerative Diseases
- Reduced NRF2 in Parkinson's, Alzheimer's
- Astrocyte NRF2 protects neurons
- Therapeutic target for neuroprotection

### Cancer (Complex Role)
- **Prevention**: NRF2 activation protects against carcinogenesis
- **Promotion**: Constitutive NRF2 helps cancer cells survive stress
- Context-dependent therapeutic approach

### Diabetes & Metabolic Disease
- NRF2 activation improves insulin sensitivity
- Reduces oxidative stress in diabetic complications
- Protects beta cells

### Multiple Sclerosis
- Dimethyl fumarate approved for MS
- NRF2 activation provides neuroprotection
- Anti-inflammatory effects

## Supplement Connections

| Supplement | NRF2 Effect | Mechanism |
|------------|-------------|-----------|
| **[[Sulforaphane]]** | Strong activation | Keap1 cysteine modification |
| **[[NAC]]** | Indirect support | Glutathione precursor, NRF2 target |
| **[[Alpha Lipoic Acid]]** | Activation | Electrophilic modification |
| **[[Curcumin]]** | Moderate activation | Michael acceptor |
| **[[Resveratrol]]** | Moderate activation | Multiple mechanisms |
| **[[Glutathione]]** | Downstream target | NRF2-induced synthesis |

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[Sulforaphane]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:54.639321'
source: obsidian
```
- ← [[Resveratrol]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:53.933138'
source: obsidian
```
- ← [[NAC]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:52.237873'
source: obsidian
```
- ← [[Curcumin]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:49.757693'
source: obsidian
```
- ← [[Alpha_Lipoic_Acid]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:47.821091'
source: obsidian
```
- → [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T06:49:02.167395'
source: obsidian
```
- → [[Alpha_Lipoic_Acid]] (entity)
```yaml
last_modified: '2026-01-26T06:49:02.167395'
source: obsidian
```
- ← [[Glutathione]] (metabolite)
```yaml
last_modified: '2026-01-26T06:48:33.973056'
source: obsidian
```
- → [[EGCG]] (entity)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- ← [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
```
- → [[Alpha_Lipoic_Acid]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- → [[NAC]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- → [[Glutathione]] (metabolite)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- → [[Sulforaphane]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- → [[Curcumin]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
- → [[Resveratrol]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:31.690636'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

INHIBITED_BY::[[Keap1]] - Cytoplasmic retention and degradation
RELEASED_BY::[[Oxidative Stress]] - Keap1 modification
RELEASED_BY::[[Sulforaphane]] - Keap1 modification
RELEASED_BY::[[Fumarate]] - Keap1 succination
ACTIVATES_TRANSCRIPTION::[[Glutathione Synthesis]] - GCLC/GCLM genes
ACTIVATES_TRANSCRIPTION::[[HO-1]] - Cytoprotective enzyme
ACTIVATES_TRANSCRIPTION::[[NQO1]] - Detoxification enzyme
PROMOTES::[[Antioxidant Defense]] - Master regulator
PROMOTES::[[Detoxification]] - Phase II enzymes
RELATED_TO::[[NAD+]] - Metabolic regulation
RELATED_TO::[[Mitochondria]] - Protects from oxidative damage
ENCODED_BY::[[NFE2L2]] - Gene encoding NRF2
PARTNER_OF::[[Small Maf Proteins]] - DNA binding partners

## References

- Dinkova-Kostova AT, Abramov AY. The emerging role of Nrf2 in mitochondrial function. Free Radic Biol Med. 2015;88(Pt B):179-188. PMID: 25975984
- Yamamoto M, et al. The KEAP1-NRF2 System: a Thiol-Based Sensor-Effector Apparatus for Maintaining Redox Homeostasis. Physiol Rev. 2018;98(3):1169-1203. PMID: 29717933
- Cuadrado A, et al. Therapeutic targeting of the NRF2 and KEAP1 partnership in chronic diseases. Nat Rev Drug Discov. 2019;18(4):295-317. PMID: 30610225