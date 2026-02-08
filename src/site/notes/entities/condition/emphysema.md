---
created: '2026-02-08T19:29:31.602021Z'
description: A chronic lung condition where the air sacs (alveoli) are damaged and
  enlarged, causing breathlessness. It is a main type of COPD.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/emphysema/
slug: emphysema
tags:
- condition
- respiratory
- chronic
- lung
title: Emphysema
type: condition
updated: '2026-02-08T19:29:31.602021Z'
---

# Emphysema

## Overview
A chronic lung condition where the air sacs (alveoli) are damaged and enlarged, causing breathlessness. It is a main type of COPD.

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
FROM [[Emphysema]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Emphysema]] (condition)
```yaml
last_modified: '2026-01-19T09:31:05.846216'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Emphysema]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Emphysema]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Emphysema]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.598464'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.