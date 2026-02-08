---
created: '2026-02-08T19:25:12.968648Z'
description: A broad group of cancers that begin in the bones and soft tissues (muscle,
  fat, blood vessels, nerves, tendons, and lining of joints).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/sarcoma/
slug: sarcoma
tags:
- Condition
- condition
- oncology
- cancer
- orthopedics
- rare_disease
title: Sarcoma
type: Condition
updated: '2026-02-08T19:25:12.968648Z'
---

# Sarcoma

## Overview
A broad group of cancers that begin in the bones and soft tissues (muscle, fat, blood vessels, nerves, tendons, and lining of joints).

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
FROM [[Sarcoma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Sarcoma]] (condition)
```yaml
last_modified: '2026-01-19T09:31:40.142684'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Sarcoma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Sarcoma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Sarcoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.130561'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.