---
created: '2026-02-08T19:29:31.629313Z'
description: A progressive and generalized skeletal muscle disorder characterized
  by the age-related loss of muscle mass, strength, and function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/sarcopenia/
slug: sarcopenia
tags:
- condition
- geriatric
- musculoskeletal
- metabolic
- function-health
title: Sarcopenia
type: condition
updated: '2026-02-08T19:29:31.629313Z'
---

# Sarcopenia

## Overview

**Sarcopenia** is the age-related, involuntary loss of skeletal muscle mass and strength. Once considered an inevitable part of aging, it is now recognized as a distinct disease entity (ICD-10-CM code M62.84).

It typically begins in the 4th decade of life and accelerates after age 60. Sarcopenia is a primary driver of physical disability, loss of independence, and metabolic dysregulation in the elderly.

## Clinical Presentation

- **Symptoms:** Weakness, slow walking speed, difficulty climbing stairs, poor balance, and unintentional weight loss.
- **Diagnosis (EWGSOP2 Guidelines):**
    1.  **Probable Sarcopenia:** Detected by low muscle strength (e.g., grip strength <27kg for men, <16kg for women).
    2.  **Confirmed Sarcopenia:** Low strength + Low muscle quantity (Appendicular Skeletal Muscle Mass via DXA).
    3.  **Severe Sarcopenia:** Low strength + Low quantity + Low physical performance (e.g., gait speed <0.8 m/s).

## Pathophysiology

- **Anabolic Resistance:** Older muscle becomes less responsive to protein and exercise signals.
- **Neuromuscular Changes:** Loss of alpha motor neurons and motor unit remodeling.
- **Inflammation:** "Inflammaging" (chronic elevated IL-6, TNF-alpha) promotes catabolism.
- **Hormonal Decline:** Drops in Testosterone, IGF-1, and Growth Hormone.

## Management

Sarcopenia is one of the few conditions that is potentially reversible, primarily through lifestyle interventions.

1.  **Resistance Training:** The most potent stimulus for muscle protein synthesis. Essential for reversing strength loss.
2.  **Protein Intake:** Higher requirements for older adults (1.2-1.5 g/kg/day) to overcome anabolic resistance. Leucine is particularly critical.
3.  **Creatine:** Improves muscle mass and strength when combined with exercise.

## Relationships

IMPROVED_BY_INTERVENTION::[[Resistance Training]] - Primary treatment
IMPROVED_BY_INTERVENTION::[[Protein Intake]] - Essential nutrient
IMPROVED_BY_INTERVENTION::[[Creatine]] - Ergogenic aid
ASSOCIATED_WITH_BIOMARKER::[[Creatine Kinase]] - Marker of muscle mass/turnover
ASSOCIATED_WITH_BIOMARKER::[[IGF-1]] - Anabolic factor
RISK_FACTOR_FOR::[[Falls]]
RISK_FACTOR_FOR::[[Osteoporosis]] - "Osteosarcopenia"
RISK_FACTOR_FOR::[[Frailty]]
CAUSED_BY::[[Aging]]
CAUSED_BY::[[Sedentary Lifestyle]]
CAUSED_BY::[[Chronic Inflammation]]

## Other Relationships
### May Improve Condition
- ← [[Creatine]] (drug)
```yaml
last_modified: '2026-01-19T09:07:01.825845'
source: obsidian
```

### Related
- → [[Sarcopenia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:40.327345'
source: obsidian
```
- → [[Creatine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:40.327345'
source: obsidian
```
- ← [[Creatine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:54.843123'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Sarcopenia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Sarcopenia]] AND #clinical-trial
SORT date DESC
```

### Interventions
```dataview
TABLE 
    effectiveness AS "Effectiveness",
    confidence_score AS "Confidence"
FROM [[Sarcopenia]] AND #intervention
SORT confidence_score DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[Creatine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:41.099790'
source: obsidian
```
- → [[Creatine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:37.192580'
source: obsidian
```
- → [[Sarcopenia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.192580'
source: obsidian
```

### May Improve Condition
- ← [[Creatine]] (drug)
```yaml
last_modified: '2026-01-26T07:08:36.518401'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References

- Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16-31.
- Dent E, et al. International Clinical Practice Guidelines for Sarcopenia (ICFSR): Screening, Diagnosis and Management. J Frailty Aging. 2018;7(4):202-205.