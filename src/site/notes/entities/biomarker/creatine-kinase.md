---
created: '2026-02-08T19:29:31.559308Z'
description: An enzyme found in the heart, brain, and skeletal muscle that catalyzes
  the conversion of creatine to phosphocreatine.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/creatine-kinase/
slug: creatine-kinase
tags:
- biomarker
- enzyme
- muscle_damage
- cardiology
- musculoskeletal
- enzyme
title: Creatine Kinase
type: biomarker
updated: '2026-02-08T19:29:31.559308Z'
---

# Creatine Kinase

## Overview

**Creatine Kinase (CK)** is an enzyme found primarily in skeletal muscle, heart muscle, and the brain. It catalyzes the reversible conversion of creatine and ATP to phosphocreatine and ADP. This reaction serves as an energy buffer, allowing for the rapid regeneration of ATP during high-intensity activity.

When muscle or nerve cells are injured, CK leaks into the bloodstream, making it a key marker for tissue damage.

## Isoforms

CK exists as three main isoenzymes (dimers of M and B subunits):
1.  **CK-MM (Skeletal Muscle):** Accounts for 98% of CK in skeletal muscle and the vast majority of circulating CK in healthy individuals.
2.  **CK-MB (Heart Muscle):** Found mainly in the heart (myocardium). Historically used to diagnose heart attacks (now largely replaced by Troponin).
3.  **CK-BB (Brain):** Found in the brain and lungs. Rarely measured in blood as it does not cross the blood-brain barrier easily.

## Clinical Significance

- **Rhabdomyolysis:** Massive breakdown of muscle tissue leads to extremely high CK levels (>5,000 U/L, often >10,000). The released myoglobin can cause acute kidney injury.
- **Myocardial Infarction (Heart Attack):** CK-MB rises 4-6 hours after injury. Useful for detecting *reinfarction* shortly after an initial event (as it clears faster than Troponin).
- **Muscle Diseases:** Elevated in muscular dystrophies (e.g., Duchenne) and inflammatory myopathies.
- **Statin-Induced Myopathy:** Statins can cause muscle pain and mild to moderate CK elevations.

## Relationships

INDICATES_DAMAGE_TO::[[Muscle]] - CK-MM
INDICATES_DAMAGE_TO::[[Heart]] - CK-MB
INDICATES_DAMAGE_TO::[[Brain]] - CK-BB
PARTICIPATES_IN_PATHWAY::[[Creatine Metabolism]]
ASSOCIATED_WITH_CONDITION::[[Rhabdomyolysis]] - Hallmark marker
ASSOCIATED_WITH_CONDITION::[[Myocardial Infarction]]
ASSOCIATED_WITH_CONDITION::[[Muscular Dystrophy]]
INCREASED_BY::[[Exercise]] - Strenuous exercise causes transient spikes
INCREASED_BY::[[Statins]] - Potential side effect
AFFECTED_BY::[[Creatine]] - Supplementation increases intracellular phosphocreatine pool

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References

- Brancaccio P, Maffulli N, Limongelli FM. Creatine kinase monitoring in sport medicine. Br Med Bull. 2007;81-82:209-30.
- Baird MF, et al. Creatine-kinase- and exercise-related muscle damage implications for muscle performance and recovery. J Nutr Metab. 2012;2012:960363.


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Coenzyme_Q10]] (entity)
```yaml
last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
```
- → [[Coenzyme_Q10]] (supplement)
```yaml
last_modified: '2026-01-26T06:03:04.161172'
source: obsidian
```
- → [[Amyotrophic_Lateral_Sclerosis]] (entity)
```yaml
last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
```
- → [[EMG_and_Nerve_Conduction_Studies]] (entity)
```yaml
last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
```
- → [[Creatine_Kinase]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
```
- → [[biomarker_log]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
```
- ← [[EMG_and_Nerve_Conduction_Studies]] (examination)
```yaml
last_modified: '2026-01-26T07:07:44.705253'
source: obsidian
```
- ← [[Amyotrophic_Lateral_Sclerosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:23.446168'
source: obsidian
```
- → [[Creatine_Kinase]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
```

### Decreases Biomarker
- ← [[Coenzyme_Q10]] (supplement)
```yaml
effect_direction: decreases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: mild
notes: May ameliorate statin-induced elevations.
population_context: general
source: obsidian
```
<!-- NEO4J_CONTENT_END -->


## Dataview Queries
```dataview
LIST
FROM [[Creatine Kinase]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```