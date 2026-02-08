---
created: '2026-02-08T19:25:12.951025Z'
description: A serious type of skin cancer that develops from the pigment-producing
  cells known as melanocytes. It is less common than other skin cancers but much more
  dangerous if it spreads.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/melanoma/
slug: melanoma
tags:
- Condition
- condition
- oncology
- dermatology
- skin
- cancer
title: Melanoma
type: Condition
updated: '2026-02-08T19:25:12.951025Z'
---

# Melanoma

## Overview
A serious type of skin cancer that develops from the pigment-producing cells known as melanocytes. It is less common than other skin cancers but much more dangerous if it spreads.

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
FROM [[Melanoma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Melanoma]] (condition)
```yaml
last_modified: '2026-01-19T09:31:20.671279'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Melanoma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Melanoma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T06:47:44.788008'
source: obsidian
```
- → [[S100B]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:44.788008'
source: obsidian
```
- ← [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T07:08:33.887168'
source: obsidian
```
- ← [[S100B]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.720220'
source: obsidian
```
- → [[Melanoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:32.301676'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.