---
created: '2026-02-08T19:29:31.630214Z'
description: A viral respiratory illness caused by a coronavirus (SARS-CoV), first
  identified in 2003.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/severe-acute-respiratory-syndrome/
slug: severe-acute-respiratory-syndrome
tags:
- condition
- infectious_disease
- viral
- respiratory
- historical
title: Severe Acute Respiratory Syndrome
type: condition
updated: '2026-02-08T19:29:31.630214Z'
---

# Severe Acute Respiratory Syndrome

## Overview
A viral respiratory illness caused by a coronavirus (SARS-CoV), first identified in 2003.

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
FROM [[Severe Acute Respiratory Syndrome]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Severe_Acute_Respiratory_Syndrome]] (condition)
```yaml
last_modified: '2026-01-19T09:31:41.258420'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Severe Acute Respiratory Syndrome]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Severe Acute Respiratory Syndrome]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Severe_Acute_Respiratory_Syndrome]] (entity)
```yaml
last_modified: '2026-01-26T07:07:37.482466'
source: obsidian
```
- → [[Severe_Acute_Respiratory_Syndrome]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.482466'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.