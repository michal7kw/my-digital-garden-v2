---
created: '2026-02-08T19:25:12.942114Z'
description: A chronic, progressive syndrome in which the heart muscle is unable to
  pump enough blood to meet the body's needs for blood and oxygen.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/heart-failure/
slug: heart-failure
tags:
- Condition
- condition
- cardiology
- chronic
- vascular
- function-health
title: Heart Failure
type: Condition
updated: '2026-02-08T19:25:12.942114Z'
---

# Heart Failure

## Overview
A chronic, progressive syndrome in which the heart muscle is unable to pump enough blood to meet the body's needs for blood and oxygen.

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
FROM [[Heart Failure]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[albumin]] (labtest)
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

### Related
- → [[Heart_Failure]] (condition)
```yaml
last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
```
- → [[albumin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:09.723315'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Heart Failure]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Heart Failure]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Heart_Failure]] (entity)
```yaml
last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
```
- ← [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.396088'
source: obsidian
```
- ← [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.479652'
source: obsidian
```
- → [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
```
- → [[Heart_Failure]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.815607'
source: obsidian
```

### May Detect
- ← [[hyaline_casts_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[albumin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.