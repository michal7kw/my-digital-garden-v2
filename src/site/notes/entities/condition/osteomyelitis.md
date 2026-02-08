---
created: '2026-02-08T19:29:31.619731Z'
description: Infection of the bone, typically caused by bacteria, which can be acute
  or chronic.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/osteomyelitis/
slug: osteomyelitis
tags:
- condition
- orthopedics
- infectious_disease
- bone
title: Osteomyelitis
type: condition
updated: '2026-02-08T19:29:31.619731Z'
---

# Osteomyelitis

## Overview
Infection of the bone, typically caused by bacteria, which can be acute or chronic.

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
FROM [[Osteomyelitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Osteomyelitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:30.232037'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Osteomyelitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Osteomyelitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Osteomyelitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:34.534687'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.