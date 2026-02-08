---
created: '2026-02-08T19:29:31.592862Z'
description: A broad category of disorders affecting the urinary bladder, including
  infections, functional issues, stones, and cancers.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/bladder-disease/
slug: bladder-disease
tags:
- condition
- urology
- function-health
title: Bladder Disease
type: condition
updated: '2026-02-08T19:29:31.592862Z'
---

# Bladder Disease

## Overview
A broad category of disorders affecting the urinary bladder, including infections, functional issues, stones, and cancers.

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
FROM [[Bladder Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[appearance_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Bladder_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:30:50.387423'
source: obsidian
```
- → [[appearance_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:50.387423'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Bladder Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Bladder Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Bladder_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
```
- ← [[appearance_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.265588'
source: obsidian
```
- → [[Bladder_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
```
- → [[appearance_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:24.188177'
source: obsidian
```

### May Detect
- ← [[appearance_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.