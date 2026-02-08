---
created: '2026-02-08T19:45:44.499844Z'
description: A pregnancy complication characterized by high blood pressure and signs
  of damage to another organ system, most often the liver and kidneys.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pre-eclampsia/
slug: pre-eclampsia
tags:
- condition
- obstetrics
- pregnancy
- hypertension
- emergency
title: Pre-Eclampsia
type: condition
updated: '2026-02-08T19:45:44.499844Z'
---

# Pre-Eclampsia

## Overview
A pregnancy complication characterized by high blood pressure and signs of damage to another organ system, most often the liver and kidneys.

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
FROM [[Pre-Eclampsia]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Pre-Eclampsia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:36.938982'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pre-Eclampsia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pre-Eclampsia]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pre-Eclampsia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.354027'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.