---
created: '2026-02-08T19:45:44.490591Z'
description: A kidney disorder that causes the body to excrete too much protein in
  the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/nephrotic-syndrome/
slug: nephrotic-syndrome
tags:
- condition
- nephrology
- function-health
title: Nephrotic Syndrome
type: condition
updated: '2026-02-08T19:45:44.490591Z'
---

# Nephrotic Syndrome

## Overview
A kidney disorder that causes the body to excrete too much protein in the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.

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
FROM [[Nephrotic Syndrome]] AND #intervention
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

### Related
- → [[Nephrotic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-19T09:31:28.032486'
source: obsidian
```
- → [[albumin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:28.032486'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Nephrotic Syndrome]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Nephrotic Syndrome]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Nephrotic_Syndrome]] (entity)
```yaml
last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
```
- ← [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.479652'
source: obsidian
```
- → [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
```
- → [[Nephrotic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-26T07:07:34.185599'
source: obsidian
```

### May Detect
- ← [[albumin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.