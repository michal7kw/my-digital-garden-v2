---
created: '2026-02-08T19:29:31.725611Z'
description: The mitochondrial pathway for fatty acid catabolism that sequentially
  removes two-carbon units as acetyl-CoA. Each cycle generates NADH and FADH2 for
  ATP production, making it highly efficient for energy generation from stored fat.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/beta-oxidation/
slug: beta-oxidation
tags:
- pathway
- metabolic
- energy_metabolism
- fatty_acid
- catabolic
- mitochondrial
title: Beta-Oxidation
type: pathway
updated: '2026-02-08T19:29:31.725611Z'
---

# Beta-Oxidation

## Overview

Beta-oxidation is the mitochondrial pathway that breaks down fatty acids into acetyl-CoA units for energy production. The process occurs in the mitochondrial matrix and involves the sequential removal of two-carbon units from the fatty acid chain, generating NADH and FADH2 with each cycle.

The pathway is named for the oxidation that occurs at the β-carbon (carbon 3) of the fatty acid. Each complete cycle shortens the fatty acid by two carbons and produces:
- 1 Acetyl-CoA
- 1 FADH2
- 1 NADH

## Fatty Acid Activation and Transport

### Activation (Cytoplasm)
**Fatty acid + ATP + CoA-SH → Fatty acyl-CoA + AMP + PPi**
- Catalyzed by acyl-CoA synthetase (thiokinase)
- Costs 2 ATP equivalents (due to PPi hydrolysis)
- Required for transport into mitochondria

### Carnitine Shuttle
Long-chain fatty acids cannot cross the inner mitochondrial membrane and require the carnitine shuttle:

1. **CPT-I** (outer membrane): Acyl-CoA + Carnitine → Acylcarnitine + CoA
2. **CACT** (inner membrane): Acylcarnitine transport
3. **CPT-II** (matrix side): Acylcarnitine + CoA → Acyl-CoA + Carnitine

**CPT-I is the rate-limiting step**, inhibited by malonyl-CoA (fed state signal).

## The Beta-Oxidation Spiral

Each cycle consists of four reactions:

### 1. Oxidation (Acyl-CoA Dehydrogenase)
**Acyl-CoA + FAD → Trans-Δ²-Enoyl-CoA + FADH₂**
- Creates double bond between C2 and C3
- Different isozymes for different chain lengths:
  - VLCAD: Very long chain (C14-C20)
  - LCAD: Long chain (C12-C18)
  - MCAD: Medium chain (C4-C14)
  - SCAD: Short chain (C4-C6)
- Electrons transferred to ETF → ETC

### 2. Hydration (Enoyl-CoA Hydratase)
**Trans-Δ²-Enoyl-CoA + H₂O → L-3-Hydroxyacyl-CoA**
- Adds water across double bond
- Stereospecific for L-isomer

### 3. Oxidation (3-Hydroxyacyl-CoA Dehydrogenase)
**L-3-Hydroxyacyl-CoA + NAD⁺ → 3-Ketoacyl-CoA + NADH**
- Oxidizes hydroxyl to ketone
- NADH enters ETC at Complex I

### 4. Thiolysis (3-Ketoacyl-CoA Thiolase)
**3-Ketoacyl-CoA + CoA-SH → Acetyl-CoA + Acyl-CoA(n-2)**
- Cleaves two-carbon unit
- Releases acetyl-CoA
- Shortened acyl-CoA continues cycle

## Energy Yield

For palmitate (16:0):
- **Activation**: -2 ATP
- **7 cycles of β-oxidation**: 7 FADH2 + 7 NADH = 7(1.5) + 7(2.5) = 28 ATP
- **8 Acetyl-CoA → TCA cycle**: 8 × 10 = 80 ATP
- **Total**: 106 ATP (net)

Compared to glucose (32 ATP), fat is >3x more energy-dense per carbon.

## Regulation

### Fed State (Insulin)
- Malonyl-CoA inhibits CPT-I
- Beta-oxidation suppressed
- Fatty acids directed to storage

### Fasted State (Glucagon)
- Low malonyl-CoA (ACC inhibited)
- CPT-I active
- Beta-oxidation proceeds
- Liver produces ketone bodies

### AMPK Activation
- Phosphorylates and inhibits ACC
- Lowers malonyl-CoA
- Promotes fatty acid oxidation

## Supplement Connections

| Supplement | Mechanism |
|------------|-----------|
| **[[Carnitine]]** | Essential for fatty acid transport |
| **[[Coenzyme Q10]]** | Electron acceptor from ETF |
| **[[Riboflavin]]** | Precursor for FAD (acyl-CoA DH) |
| **[[Pantothenic Acid]]** | Component of CoA |

## Clinical Significance

### MCAD Deficiency
- Most common fatty acid oxidation disorder (1:15,000)
- Cannot oxidize medium-chain fatty acids
- Hypoglycemia during fasting
- Newborn screening available

### Carnitine Deficiency
- Primary (genetic) or secondary (drugs, conditions)
- Impaired fatty acid transport
- Muscle weakness, cardiomyopathy
- Treatment: carnitine supplementation

### Diabetic Ketoacidosis
- Excessive beta-oxidation in liver
- Overwhelming acetyl-CoA production
- Ketone body accumulation
- Metabolic acidosis

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[Coenzyme_Q10]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Pantothenic_Acid]] (entity)
```yaml
last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
```
- → [[Coenzyme_Q10]] (entity)
```yaml
last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
```
- → [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
```
- → [[Riboflavin]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
```
- → [[Pantothenic_Acid]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
```
- → [[Carnitine]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
```
- ← [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
```
- → [[Coenzyme_Q10]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

LOCATED_IN::[[Mitochondria]] - Matrix location
PRODUCES::[[Acetyl-CoA]] - Two-carbon product
PRODUCES::[[NADH]] - Per cycle
PRODUCES::[[FADH2]] - Per cycle
FEEDS_INTO::[[Citric Acid Cycle]] - Via acetyl-CoA
FEEDS_INTO::[[Electron Transport Chain]] - Via NADH, FADH2
REQUIRES::[[Carnitine]] - Fatty acid transport
REGULATED_BY::[[Insulin]] - Suppresses pathway
REGULATED_BY::[[Glucagon]] - Activates pathway
REGULATED_BY::[[AMPK]] - Activates pathway
INHIBITED_BY::[[Malonyl-CoA]] - CPT-I inhibitor
SUPPORTED_BY::[[Riboflavin]] - FAD precursor
SUPPORTED_BY::[[Pantothenic Acid]] - CoA component
RELATED_TO::[[Ketogenesis]] - Liver fate of acetyl-CoA

## References

- Houten SM, Wanders RJ. A general introduction to the biochemistry of mitochondrial fatty acid β-oxidation. J Inherit Metab Dis. 2010;33(5):469-77. PMID: 20195903
- Rinaldo P, et al. Fatty acid oxidation disorders. Annu Rev Physiol. 2002;64:477-502. PMID: 11826276
- Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 22.