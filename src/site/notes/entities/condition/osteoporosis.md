---
created: '2026-02-08T19:25:12.958095Z'
description: A chronic condition characterized by decreased bone mass and deterioration
  of bone tissue, making bones fragile and more likely to fracture.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/osteoporosis/
slug: osteoporosis
tags:
- Condition
- condition
- rheumatology
- musculoskeletal
- endocrinology
- function-health
title: Osteoporosis
type: Condition
updated: '2026-02-08T19:25:12.958095Z'
---

# Osteoporosis

## Overview
A chronic condition characterized by decreased bone mass and deterioration of bone tissue, making bones fragile and more likely to fracture.

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
FROM [[Osteoporosis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Increases Risk For
- ← [[vitamin_d_deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

### Related
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:30.423893'
source: obsidian
```
- → [[Vitamin_D_Deficiency]] (entity)
```yaml
last_modified: '2026-01-19T09:31:30.423893'
source: obsidian
```
- ← [[vitamin_d_deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Osteoporosis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Osteoporosis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Vitamin_D_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
```
- → [[vitamin_d_deficiency]] (entity)
```yaml
last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
```
- → [[Vitamin_D_Deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:37:21.316851'
source: obsidian
```
- ← [[Vitamin_D_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:34.601180'
source: obsidian
```

### Increases Risk For
- ← [[Vitamin_D_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.