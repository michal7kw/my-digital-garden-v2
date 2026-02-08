---
created: '2026-02-08T19:45:44.509215Z'
description: A blockage that inhibits the normal flow of urine through the urinary
  tract, potentially leading to kidney damage and infection.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/urinary-tract-obstruction/
slug: urinary-tract-obstruction
tags:
- condition
- urology
- nephrology
- function-health
title: Urinary Tract Obstruction
type: condition
updated: '2026-02-08T19:45:44.509215Z'
---

# Urinary Tract Obstruction

## Overview
A blockage that inhibits the normal flow of urine through the urinary tract, potentially leading to kidney damage and infection.

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
FROM [[Urinary Tract Obstruction]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[creatinine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Urinary_Tract_Obstruction]] (condition)
```yaml
last_modified: '2026-01-19T09:31:45.856303'
source: obsidian
```
- → [[creatinine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:45.856303'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Urinary Tract Obstruction]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Urinary Tract Obstruction]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Urinary_Tract_Obstruction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.647165'
source: obsidian
```
- ← [[creatinine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:52.253411'
source: obsidian
```
- → [[creatinine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:38.647165'
source: obsidian
```
- → [[Urinary_Tract_Obstruction]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.647165'
source: obsidian
```

### May Detect
- ← [[creatinine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.