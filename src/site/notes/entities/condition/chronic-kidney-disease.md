---
created: '2026-02-08T19:45:44.468012Z'
description: A long-term condition where the kidneys are damaged and gradually lose
  their ability to filter waste and excess fluid from the blood.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/chronic-kidney-disease/
slug: chronic-kidney-disease
tags:
- condition
- nephrology
- chronic
- function-health
title: Chronic Kidney Disease
type: condition
updated: '2026-02-08T19:45:44.468012Z'
---

# Chronic Kidney Disease

## Overview
A long-term condition where the kidneys are damaged and gradually lose their ability to filter waste and excess fluid from the blood.

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
FROM [[Chronic Kidney Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[lead]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mercury]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[calcium]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[methylmalonic_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[red_blood_cell_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[albumin_microalbumin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[chloride]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[creatinine_based_estimated_glomerular_filtration_rate_egfr]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hyaline_casts_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[uric_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Increases Risk For
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-19T09:30:40.032727'
source: obsidian
```

### Related
- → [[Chronic_Kidney_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[lead]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[mercury]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[calcium]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[albumin_microalbumin_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[chloride]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[creatinine_based_estimated_glomerular_filtration_rate_egfr]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```
- → [[Kidney_Stress_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:30:59.540217'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Chronic Kidney Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Chronic Kidney Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Kidney_Stress_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[Chronic_Kidney_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- ← [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.406769'
source: obsidian
```
- ← [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.211199'
source: obsidian
```
- ← [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.363959'
source: obsidian
```
- ← [[mercury]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.260215'
source: obsidian
```
- ← [[lead]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:55.745625'
source: obsidian
```
- ← [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.396088'
source: obsidian
```
- ← [[creatinine_based_estimated_glomerular_filtration_rate_egfr]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:52.186846'
source: obsidian
```
- ← [[chloride]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:51.345636'
source: obsidian
```
- ← [[calcium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:51.050601'
source: obsidian
```
- ← [[albumin_microalbumin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.377838'
source: obsidian
```
- → [[albumin_microalbumin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[calcium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[lead]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[Chronic_Kidney_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[chloride]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[mercury]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```
- → [[creatinine_based_estimated_glomerular_filtration_rate_egfr]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.198940'
source: obsidian
```

### Increases Risk For
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-26T07:07:21.334944'
source: obsidian
```

### May Detect
- ← [[uric_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hyaline_casts_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[creatinine_based_estimated_glomerular_filtration_rate_egfr]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[chloride]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[albumin_microalbumin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[red_blood_cell_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[methylmalonic_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[calcium]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mercury]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[lead]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.