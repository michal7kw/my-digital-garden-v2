---
created: '2026-02-08T19:45:44.473658Z'
description: A condition where the levels of essential minerals (electrolytes) in
  the blood are too high or too low, disrupting vital bodily functions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/electrolyte-imbalance/
slug: electrolyte-imbalance
tags:
- condition
- metabolic
- endocrinology
- function-health
title: Electrolyte Imbalance
type: condition
updated: '2026-02-08T19:45:44.473658Z'
---

# Electrolyte Imbalance

## Overview
A condition where the levels of essential minerals (electrolytes) in the blood are too high or too low, disrupting vital bodily functions.

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
FROM [[Electrolyte Imbalance]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[carbon_dioxide]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Electrolyte_Imbalance]] (condition)
```yaml
last_modified: '2026-01-19T09:31:05.647256'
source: obsidian
```
- → [[carbon_dioxide]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:05.647256'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Electrolyte Imbalance]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Electrolyte Imbalance]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Electrolyte_Imbalance]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
```
- ← [[carbon_dioxide]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:51.144441'
source: obsidian
```
- → [[Electrolyte_Imbalance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
```
- → [[carbon_dioxide]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.525508'
source: obsidian
```

### May Detect
- ← [[carbon_dioxide]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.