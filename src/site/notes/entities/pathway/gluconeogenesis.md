---
created: '2026-02-08T19:25:13.069907Z'
description: Gluconeogenesis is the metabolic pathway that synthesizes glucose from
  non-carbohydrate precursors, essential for maintaining blood glucose during fasting
  and providing glucose to glucose-dependent tissues.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Pathway/gluconeogenesis/
slug: gluconeogenesis
tags:
- Pathway
- pathway
- metabolic
- glucose_metabolism
- biosynthetic
- fasting
title: Gluconeogenesis
type: Pathway
updated: '2026-02-08T19:25:13.069907Z'
---

# Gluconeogenesis

## Description

Gluconeogenesis is the metabolic pathway that synthesizes glucose from non-carbohydrate precursors, essential for maintaining blood glucose during fasting and providing glucose to glucose-dependent tissues.

## Overview

The pathway is essentially the reverse of glycolysis, but uses four bypass reactions to circumvent the three irreversible steps of glycolysis. This ensures thermodynamic favorability and allows independent regulation. The liver can produce up to 200g glucose per day through this pathway.

## The Four Bypass Reactions

### 1. Pyruvate → Phosphoenolpyruvate (2 enzymes)

**A. Pyruvate Carboxylase (mitochondria)**
- Pyruvate + CO₂ + ATP → Oxaloacetate + ADP + Pi
- Requires biotin cofactor
- Activated by acetyl-CoA

**B. PEPCK (mitochondria/cytosol)**
- Oxaloacetate + GTP → PEP + GDP + CO₂
- Rate-limiting, transcriptionally regulated

### 2. Fructose-1,6-bisphosphate → Fructose-6-phosphate
**Fructose-1,6-bisphosphatase (FBPase-1)**
- Inhibited by AMP, F-2,6-BP

### 3. Glucose-6-phosphate → Glucose
**Glucose-6-phosphatase (G6Pase)**
- Only in liver, kidney (not muscle)
- Releases glucose to blood

## Energy Cost
- 2 Pyruvate → 1 Glucose: 4 ATP + 2 GTP + 2 NADH = 6 ATP equivalents (net)

## Metabolic Cycles

### Cori Cycle
Muscle lactate → Liver → Glucose → Muscle

### Glucose-Alanine Cycle
Muscle alanine → Liver → Glucose + Urea → Muscle

## Supplement/Drug Connections

| Agent | Effect | Mechanism |
|-------|--------|-----------|
| **[[Berberine]]** | Inhibits | AMPK activation |
| **Metformin** | Inhibits | Complex I inhibition, AMPK |
| **[[Biotin]]** | Supports | Cofactor for pyruvate carboxylase |

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
```
- → [[Biotin]] (entity)
```yaml
last_modified: '2026-01-26T07:08:11.945657'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:08:11.945657'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

LOCATED_IN::[[Liver]] - Primary site
LOCATED_IN::[[Kidney]] - Secondary site
PRODUCES::[[Glucose]] - End product
CONSUMES::[[Pyruvate]] - Major precursor
CONSUMES::[[Lactate]] - Via Cori cycle
CONSUMES::[[Oxaloacetate]] - Key intermediate
CONSUMES::[[ATP]] - Energy requirement
CONNECTED_TO::[[Glycolysis]] - Reverse pathway
CONNECTED_TO::[[Citric Acid Cycle]] - Via oxaloacetate
REGULATED_BY::[[Glucagon]] - Stimulates
REGULATED_BY::[[Insulin]] - Inhibits
INHIBITED_BY::[[Berberine]] - AMPK activator
REQUIRES_COFACTOR::[[Biotin]] - For pyruvate carboxylase
RELATED_TO::[[PGC-1alpha]] - Transcriptional coactivator

## References

- Pilkis SJ, Granner DK. Molecular physiology of the regulation of hepatic gluconeogenesis and glycolysis. Annu Rev Physiol. 1992;54:885-909.
- Rui L. Energy metabolism in the liver. Compr Physiol. 2014;4(1):177-97.