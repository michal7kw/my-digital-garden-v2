---
created: '2026-02-08T19:29:31.630430Z'
description: A group of inherited red blood cell disorders characterized by abnormal
  hemoglobin (HbS) that causes cells to become rigid and sickle-shaped.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/sickle-cell-disease/
slug: sickle-cell-disease
tags:
- condition
- hematology
- genetic
- function-health
title: Sickle Cell Disease
type: condition
updated: '2026-02-08T19:29:31.630430Z'
---

# Sickle Cell Disease

## Overview
A group of inherited red blood cell disorders characterized by abnormal hemoglobin (HbS) that causes cells to become rigid and sickle-shaped.

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
FROM [[Sickle Cell Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Sickle_Cell_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:41.477897'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:41.477897'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Sickle Cell Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Sickle Cell Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Sickle_Cell_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:37.564852'
source: obsidian
```
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.923847'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:37.564852'
source: obsidian
```
- → [[Sickle_Cell_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.564852'
source: obsidian
```

### May Detect
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.