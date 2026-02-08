---
created: '2026-02-08T19:45:44.481370Z'
description: A broad category of diseases caused by the invasion and multiplication
  of pathogenic microorganisms (bacteria, viruses, fungi, parasites) in the body.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/infections/
slug: infections
tags:
- condition
- infectious_disease
- general
- pathology
title: Infections
type: condition
updated: '2026-02-08T19:45:44.481370Z'
---

# Infections

## Overview
A broad category of diseases caused by the invasion and multiplication of pathogenic microorganisms (bacteria, viruses, fungi, parasites) in the body.

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
FROM [[Infections]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Infections]] (condition)
```yaml
last_modified: '2026-01-19T09:31:12.847082'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Infections]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Infections]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Infections]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.969520'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.