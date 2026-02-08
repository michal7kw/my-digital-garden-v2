---
created: '2026-02-08T19:25:12.922416Z'
description: A condition in which the immune system mistakenly attacks and damages
  the body's own healthy cells, tissues, and organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/autoimmune-disease/
slug: autoimmune-disease
tags:
- Condition
- condition
- immunology
- inflammation
- autoimmune
- function-health
title: Autoimmune Disease
type: Condition
updated: '2026-02-08T19:25:12.922416Z'
---

# Autoimmune Disease

## Overview
A condition in which the immune system mistakenly attacks and damages the body's own healthy cells, tissues, and organs.

## Clinical Presentation
### Symptoms
Not specified.



## Diagnostic Information


## Risk Factors



## Management


### Interventions
```dataview
TABLE 
    effectiveness AS "Effectiveness",
    confidence_score AS "Confidence"
FROM [[Autoimmune Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[basophils]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[eosinophils]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[lymphocytes]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[monocytes]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[white_blood_cell_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Autoimmune_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[basophils]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[eosinophils]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[lymphocytes]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[monocytes]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```
- → [[white_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:48.674523'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Autoimmune Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Autoimmune Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Autoimmune_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- ← [[white_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.704457'
source: obsidian
```
- ← [[monocytes]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.436126'
source: obsidian
```
- ← [[lymphocytes]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.658204'
source: obsidian
```
- ← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.105921'
source: obsidian
```
- ← [[eosinophils]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:52.578220'
source: obsidian
```
- ← [[basophils]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.601190'
source: obsidian
```
- → [[Autoimmune_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[monocytes]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[lymphocytes]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[basophils]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[eosinophils]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[white_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```
- → [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.757663'
source: obsidian
```

### May Detect
- ← [[white_blood_cell_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[monocytes]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[lymphocytes]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[eosinophils]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[basophils]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.