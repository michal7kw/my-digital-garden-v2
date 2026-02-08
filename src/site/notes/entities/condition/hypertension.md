---
created: '2026-02-08T19:45:44.480552Z'
description: Persistently elevated blood pressure (≥130/80 mmHg) that increases risk
  of heart disease, stroke, kidney disease, and premature death. Often called the
  'silent killer' due to lack of symptoms. Affects nearly half of U.S. adults.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hypertension/
slug: hypertension
tags:
- condition
- cardiovascular
- chronic
- hypertension
- modifiable_risk
title: Hypertension
type: condition
updated: '2026-02-08T19:45:44.480552Z'
---

# Hypertension

## Overview
Persistently elevated blood pressure (≥130/80 mmHg) that increases risk of heart disease, stroke, kidney disease, and premature death. Often called the 'silent killer' due to lack of symptoms. Affects nearly half of U.S. adults.

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
FROM [[Hypertension]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Improve Condition
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:22.486474'
source: obsidian
```
- ← [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:24.377214'
source: obsidian
```

### May Detect
- ← [[lead]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[PRAZOSIN]] (entity)
```yaml
last_modified: '2026-01-19T08:39:36.089288'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
```
- ← [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-19T09:32:02.527184'
source: obsidian
```
- → [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
```
- → [[lead]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
```
- → [[Hypertension]] (condition)
```yaml
last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
```
- ← [[lead]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:30.205261'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:07.990267'
source: obsidian
```
- ← [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:12.965838'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hypertension]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hypertension]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Vascular_Dementia]] (entity)
```yaml
last_modified: '2026-01-26T06:47:41.165362'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
```
- ← [[Vascular_Dementia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.779185'
source: obsidian
```
- ← [[lead]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:55.745625'
source: obsidian
```
- → [[lead]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
```
- → [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
```
- ← [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-26T07:07:43.289113'
source: obsidian
```
- ← [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:39.989104'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:38.494293'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
```
- → [[Hypertension]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
```

### May Detect
- ← [[lead]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### May Improve Condition
- ← [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:24.377214'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:22.486474'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.