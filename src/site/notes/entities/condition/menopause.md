---
created: '2026-02-08T19:45:44.487599Z'
description: A natural biological process marking the end of a woman's reproductive
  years, defined as 12 consecutive months without a menstrual period.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/menopause/
slug: menopause
tags:
- condition
- gynecology
- endocrinology
- aging
- function-health
title: Menopause
type: condition
updated: '2026-02-08T19:45:44.487599Z'
---

# Menopause

## Overview
A natural biological process marking the end of a woman's reproductive years, defined as 12 consecutive months without a menstrual period.

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
FROM [[Menopause]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Menopause]] (condition)
```yaml
last_modified: '2026-01-19T09:31:21.253884'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Menopause]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Menopause]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Menopause]] (condition)
```yaml
last_modified: '2026-01-26T07:07:32.472099'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.