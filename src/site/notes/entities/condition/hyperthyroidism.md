---
created: '2026-02-08T19:45:44.480849Z'
description: A condition where the thyroid gland produces and releases excessive amounts
  of thyroid hormones (T3 and T4), accelerating the body's metabolism.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hyperthyroidism/
slug: hyperthyroidism
tags:
- condition
- endocrinology
- thyroid
- metabolic
- function-health
title: Hyperthyroidism
type: condition
updated: '2026-02-08T19:45:44.480849Z'
---

# Hyperthyroidism

## Overview
A condition where the thyroid gland produces and releases excessive amounts of thyroid hormones (T3 and T4), accelerating the body's metabolism.

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
FROM [[Hyperthyroidism]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Increases Risk For
- ← [[thyroid_dysfunction]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

### Related
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-19T09:31:12.442576'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-19T09:31:12.442576'
source: obsidian
```
- ← [[thyroid_dysfunction]] (condition)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hyperthyroidism]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hyperthyroidism]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Thyroid_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
```
- → [[thyroid_dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-25T19:20:43.317242'
source: obsidian
```
- ← [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
```

### Increases Risk For
- ← [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.