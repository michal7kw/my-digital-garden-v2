---
created: '2026-02-08T19:29:31.629781Z'
description: A group of rare autoimmune diseases characterized by the hardening and
  tightening of the skin and connective tissues, often affecting internal organs and
  blood vessels.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/scleroderma/
slug: scleroderma
tags:
- condition
- rheumatology
- autoimmune
- dermatology
- function-health
title: Scleroderma
type: condition
updated: '2026-02-08T19:29:31.629781Z'
---

# Scleroderma

## Overview
A group of rare autoimmune diseases characterized by the hardening and tightening of the skin and connective tissues, often affecting internal organs and blood vessels.

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
FROM [[Scleroderma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Scleroderma]] (condition)
```yaml
last_modified: '2026-01-19T09:31:40.841230'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Scleroderma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Scleroderma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Scleroderma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.315625'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.