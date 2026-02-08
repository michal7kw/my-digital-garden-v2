---
created: '2026-02-08T19:29:31.624851Z'
description: A slow-growing blood cancer in which the bone marrow makes too many red
  blood cells, causing the blood to thicken and increasing the risk of clots.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/polycythemia-vera/
slug: polycythemia-vera
tags:
- condition
- hematology
- oncology
- function-health
title: Polycythemia Vera
type: condition
updated: '2026-02-08T19:29:31.624851Z'
---

# Polycythemia Vera

## Overview
A slow-growing blood cancer in which the bone marrow makes too many red blood cells, causing the blood to thicken and increasing the risk of clots.

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
FROM [[Polycythemia Vera]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[hematocrit]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hemoglobin]] (labtest)
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

### Related
- → [[Polycythemia_Vera]] (condition)
```yaml
last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
```
- → [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
```
- → [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
```
- → [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:35.956480'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Polycythemia Vera]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Polycythemia Vera]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Polycythemia_Vera]] (entity)
```yaml
last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
```
- ← [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.211199'
source: obsidian
```
- ← [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.024958'
source: obsidian
```
- ← [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:53.812807'
source: obsidian
```
- → [[Polycythemia_Vera]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
```
- → [[red_blood_cell_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
```
- → [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
```
- → [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.134207'
source: obsidian
```

### May Detect
- ← [[red_blood_cell_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hemoglobin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hematocrit]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.