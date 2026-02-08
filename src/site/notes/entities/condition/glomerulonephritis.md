---
created: '2026-02-08T19:45:44.477048Z'
description: A group of diseases that cause inflammation and damage to the glomeruli,
  the tiny filtering units within the kidneys.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/glomerulonephritis/
slug: glomerulonephritis
tags:
- condition
- nephrology
- inflammation
- autoimmune
- function-health
title: Glomerulonephritis
type: condition
updated: '2026-02-08T19:45:44.477048Z'
---

# Glomerulonephritis

## Overview
A group of diseases that cause inflammation and damage to the glomeruli, the tiny filtering units within the kidneys.

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
FROM [[Glomerulonephritis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Glomerulonephritis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:08.615205'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Glomerulonephritis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Glomerulonephritis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Glomerulonephritis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.539787'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.