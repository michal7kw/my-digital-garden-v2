---
created: '2026-02-08T19:25:12.941070Z'
description: An autoimmune disorder that causes overactivity of the thyroid gland
  (hyperthyroidism) through the production of stimulating antibodies.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/graves-disease/
slug: graves-disease
tags:
- Condition
- condition
- endocrinology
- autoimmune
- thyroid
- function-health
title: Graves Disease
type: Condition
updated: '2026-02-08T19:25:12.941070Z'
---

# Graves Disease

## Overview
An autoimmune disorder that causes overactivity of the thyroid gland (hyperthyroidism) through the production of stimulating antibodies.

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
FROM [[Graves Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Graves_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:09.040854'
source: obsidian
```
- → [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:09.040854'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Graves Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Graves Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Graves_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:28.634376'
source: obsidian
```
- → [[Graves_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.634376'
source: obsidian
```
- → [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.634376'
source: obsidian
```

### May Detect
- ← [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.