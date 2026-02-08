---
created: '2026-02-08T19:29:31.611110Z'
description: Hard deposits made of minerals and salts that form inside the kidneys,
  often causing severe pain when passing through the urinary tract.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/kidney-stones/
slug: kidney-stones
tags:
- condition
- urology
- nephrology
- metabolic
- function-health
title: Kidney Stones
type: condition
updated: '2026-02-08T19:29:31.611110Z'
---

# Kidney Stones

## Overview
Hard deposits made of minerals and salts that form inside the kidneys, often causing severe pain when passing through the urinary tract.

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
FROM [[Kidney Stones]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[occult_blood_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[ph_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[red_blood_cell_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[white_blood_cell_urine]] (labtest)
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

### Related
- → [[Kidney_Stones]] (condition)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```
- → [[occult_blood_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```
- → [[ph_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```
- → [[red_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```
- → [[white_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```
- → [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:17.698895'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Kidney Stones]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Kidney Stones]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Kidney_Stones]] (entity)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- ← [[white_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.794338'
source: obsidian
```
- ← [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.406769'
source: obsidian
```
- ← [[red_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.327453'
source: obsidian
```
- ← [[ph_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:58.579568'
source: obsidian
```
- ← [[occult_blood_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.822281'
source: obsidian
```
- → [[occult_blood_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- → [[Kidney_Stones]] (condition)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- → [[uric_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- → [[ph_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- → [[red_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```
- → [[white_blood_cell_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.535622'
source: obsidian
```

### May Detect
- ← [[uric_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[white_blood_cell_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[red_blood_cell_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[ph_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[occult_blood_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.