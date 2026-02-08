---
created: '2026-02-08T19:29:31.566249Z'
description: A sulfur-containing amino acid produced during methionine metabolism.
  Elevated levels are a risk factor for cardiovascular disease, cognitive decline,
  and neural tube defects.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/homocysteine/
slug: homocysteine
tags:
- biomarker
title: Homocysteine
type: biomarker
updated: '2026-02-08T19:29:31.566249Z'
---

# Homocysteine

## Overview
Sulfur-containing amino acid that is an intermediate in the methylation cycle. Elevated homocysteine is an independent risk factor for cardiovascular disease, cognitive decline, and other conditions. Levels are modifiable through B vitamin supplementation.

## Reference Ranges
Reference ranges not available.


## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Not specified
- **Fasting Required**: False
- **Recommended Test Frequency**: Not specified



<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Vascular_Dementia]] (entity)
```yaml
last_modified: '2026-01-26T06:47:19.188711'
source: obsidian
```
- → [[Mediterranean_Diet]] (entity)
```yaml
last_modified: '2026-01-26T06:47:19.188711'
source: obsidian
```
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
```
- → [[Vitamin_B6]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
```
- ← [[Mediterranean_Diet]] (intervention)
```yaml
last_modified: '2026-01-26T07:07:48.486140'
source: obsidian
```
- ← [[Vascular_Dementia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.779185'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
```
- → [[Homocysteine]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
```
- → [[Folate]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
```
- ← [[Folate]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- ← [[Vitamin_B6]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:41.831836'
source: obsidian
```
- ← [[Vitamin_B12]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:41.602027'
source: obsidian
```
- ← [[Folate]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:36.975406'
source: obsidian
```

### Requires Biomarker
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
```

### Decreases Biomarker
- ← [[Vitamin_B12]] (biomarker)
```yaml
effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-26T07:08:41.501218'
magnitude: moderate
magnitude_range: 15-30% reduction
notes: B12 is cofactor for methionine synthase. Effect enhanced with concurrent folate.
  Most effective in B12-deficient individuals.
onset_timeframe: 4-8 weeks
population_context: elevated homocysteine
source: obsidian
study_references:
- PMID:16522904
- PMID:22493132
```

### Indicates Organ Health
- → [[Blood]] (organ)
```yaml
specificity: medium
function_indicated: Vascular Health / Methylation
source: curated
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Influences
No known influences documented.

### Correlations
No correlations documented.

### Other Relationships
### Related
- ← [[Folate]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:03.149967'
source: obsidian
```
- ← [[Vitamin_B12]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:30.196142'
source: obsidian
```
- ← [[Vitamin_B6]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:18.846152'
source: obsidian
```
- ← [[Folate]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Folate]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
```
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
```
- → [[Vitamin_B6]] (entity)
```yaml
last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
```
- → [[Homocysteine]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
```

### Requires Biomarker
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
```

### Decreases Biomarker
- ← [[Vitamin_B12]] (biomarker)
```yaml
effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-19T09:07:17.506662'
magnitude: moderate
magnitude_range: 15-30% reduction
notes: B12 is cofactor for methionine synthase. Effect enhanced with concurrent folate.
  Most effective in B12-deficient individuals.
onset_timeframe: 4-8 weeks
population_context: elevated homocysteine
source: obsidian
study_references:
- PMID:16522904
- PMID:22493132
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Homocysteine]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```