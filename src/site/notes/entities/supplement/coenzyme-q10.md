---
created: '2026-02-08T19:29:31.764473Z'
description: A vitamin-like substance found in every cell of the body, essential for
  mitochondrial ATP production and acting as a powerful lipid-soluble antioxidant.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/supplement/coenzyme-q10/
slug: coenzyme-q10
tags:
- supplement
- antioxidant
- mitochondria
- cardiovascular_health
- energy_metabolism
title: Coenzyme Q10
type: supplement
updated: '2026-02-08T19:29:31.764473Z'
---

# Coenzyme Q10

## Overview

**Coenzyme Q10 (CoQ10)** is a fat-soluble quinone synthesized in the human body and found in dietary sources. It is present in almost all cell membranes, with the highest concentrations in organs with high energy demands such as the heart, kidneys, liver, and muscles.

CoQ10 exists in two redox states:
1.  **Ubiquinone:** The oxidized form, critical for the electron transport chain.
2.  **Ubiquinol:** The reduced form, acting as a potent antioxidant. The body converts between these forms as needed.

Levels of CoQ10 decline with age, statin use, and certain disease states, making supplementation a common therapeutic strategy.

## Mechanism of Action

### 1. Bioenergetics (ATP Production)
CoQ10 acts as a mobile electron carrier in the **Mitochondrial Electron Transport Chain (ETC)**. It shuttles electrons from Complex I (NADH dehydrogenase) and Complex II (Succinate dehydrogenase) to Complex III. This transfer is the rate-limiting step in ATP generation.

### 2. Antioxidant Protection
In its reduced form (Ubiquinol), CoQ10 inhibits the peroxidation of cell membrane lipids and LDL cholesterol. It also helps regenerate Vitamin E (alpha-tocopherol) from its oxidized radical form.

## Clinical Indications

### Heart Failure
The Q-SYMBIO trial demonstrated that CoQ10 supplementation (300 mg/day) significantly reduced cardiovascular mortality and hospitalizations in patients with chronic heart failure.

### Statin-Induced Myopathy
Statins inhibit HMG-CoA reductase, blocking the mevalonate pathway which produces both cholesterol and CoQ10. Supplementation is widely used to mitigate statin-associated muscle pain, though clinical trial results are mixed.

### Migraine Prophylaxis
CoQ10 improves mitochondrial energy metabolism in the brain and has shown efficacy in reducing migraine frequency.

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Creatine_Kinase]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Beta-Oxidation]] (pathway)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Blood_Pressure]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Serum_CoQ10]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Parkinsons_Disease]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[BNP]] (entity)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- ← [[Creatine_Kinase]] (biomarker)
```yaml
last_modified: '2026-01-26T06:03:04.161172'
source: obsidian
```
- ← [[Beta-Oxidation]] (pathway)
```yaml
last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
```
- ← [[Parkinsons_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.297115'
source: obsidian
```
- → [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- → [[Creatine]] (drug)
```yaml
last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
```
- ← [[Creatine]] (drug)
```yaml
last_modified: '2025-12-28T11:01:08.697730'
source: obsidian
```

### Decreases Biomarker
- → [[BNP]] (entity)
```yaml
effect_direction: decreases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: moderate
notes: Significant reduction in heart failure patients (Q-SYMBIO trial).
population_context: general
source: obsidian
```
- → [[Blood_Pressure]] (entity)
```yaml
effect_direction: decreases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: mild
notes: Modest reduction in systolic BP (3-6 mmHg).
population_context: general
source: obsidian
```
- → [[Creatine_Kinase]] (biomarker)
```yaml
effect_direction: decreases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: mild
notes: May ameliorate statin-induced elevations.
population_context: general
source: obsidian
```

### Increases Biomarker
- → [[Serum_CoQ10]] (entity)
```yaml
effect_direction: increases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: strong
notes: Ubiquinol form typically shows superior absorption.
population_context: general
source: obsidian
```

### Improves Cellular Component
- → [[Mitochondria]] (cellularcomponent)
```yaml
last_modified: '2026-01-19T12:00:43.836954'
source: obsidian
```

### Reduced By Drug
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:07.226923'
source: obsidian
```

### Reduces Condition
- → [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T12:00:43.836954'
source: obsidian
```

### Affects Biomarker
- → [[BNP]] (biomarker)
```yaml
effect_direction: decreases
magnitude: moderate
evidence_level: 4
source: curated
```
<!-- NEO4J_CONTENT_END -->
## Relationships

IMPROVES_CELLULAR_COMPONENT::[[Mitochondria]] - Essential for function
PARTICIPATES_IN_PATHWAY::[[Electron Transport Chain]] - Crucial carrier
REDUCES_CONDITION::[[Heart Failure]] - Improves outcomes
REDUCES_CONDITION::[[Hypertension]] - Mild hypotensive effect
REDUCES_CONDITION::[[Migraine]]
DEPLETED_BY::[[Statins]] - Inhibits synthesis pathway
SYNERGISTIC_WITH::[[Selenium]] - Often co-supplemented for heart health
SYNERGISTIC_WITH::[[PQQ]] - Combined mitochondrial support
SYNERGISTIC_WITH::[[Alpha Lipoic Acid]]
INCREASES_BIOMARKER::[[ATP]]
REDUCES_BIOMARKER::[[Oxidative Stress]]

## References

- Mortensen SA, et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO: a randomized double-blind trial. JACC Heart Fail. 2014;2(6):641-9.
- Littarru GP, Tiano L. Clinical aspects of coenzyme Q10: an update. Nutrition. 2010;26(3):250-4.
- Qu H, et al. Effects of Coenzyme Q10 on Statin-Induced Myopathy: An Updated Meta-Analysis of Randomized Controlled Trials. J Am Heart Assoc. 2018;7(19):e009835.