---
created: '2026-02-08T19:29:31.602449Z'
description: A transient and generally benign increase in the excretion of protein
  in the urine following strenuous physical activity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/exercise-induced-proteinuria/
slug: exercise-induced-proteinuria
tags:
- condition
- nephrology
- sports_medicine
- function-health
title: Exercise-Induced Proteinuria
type: condition
updated: '2026-02-08T19:29:31.602449Z'
---

# Exercise-Induced Proteinuria

## Overview
A transient and generally benign increase in the excretion of protein in the urine following strenuous physical activity.

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
FROM [[Exercise-Induced Proteinuria]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[hyaline_casts_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Exercise-Induced_Proteinuria]] (condition)
```yaml
last_modified: '2026-01-19T09:31:06.320350'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:06.320350'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Exercise-Induced Proteinuria]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Exercise-Induced Proteinuria]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Exercise-Induced_Proteinuria]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.684328'
source: obsidian
```
- ← [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.396088'
source: obsidian
```
- → [[Exercise-Induced_Proteinuria]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.684328'
source: obsidian
```
- → [[hyaline_casts_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.684328'
source: obsidian
```

### May Detect
- ← [[hyaline_casts_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.