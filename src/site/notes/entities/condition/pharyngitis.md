---
created: '2026-02-08T19:25:12.962615Z'
description: Inflammation of the pharynx, causing a sore throat.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/pharyngitis/
slug: pharyngitis
tags:
- Condition
- condition
- otolaryngology
- infection
- acute
title: Pharyngitis
type: Condition
updated: '2026-02-08T19:25:12.962615Z'
---

# Pharyngitis

## Overview
Inflammation of the pharynx, causing a sore throat.

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
FROM [[Pharyngitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Pharyngitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:34.853231'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pharyngitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pharyngitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pharyngitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.901420'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.