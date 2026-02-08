---
created: '2026-02-08T19:29:31.610671Z'
description: A metabolic state in which the body uses ketones, produced from the breakdown
  of fats, as its primary energy source instead of glucose.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/ketosis/
slug: ketosis
tags:
- condition
- metabolic
- nutrition
- diet
- function-health
title: Ketosis
type: condition
updated: '2026-02-08T19:29:31.610671Z'
---

# Ketosis

## Overview
A metabolic state in which the body uses ketones, produced from the breakdown of fats, as its primary energy source instead of glucose.

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
FROM [[Ketosis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Ketosis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:17.178262'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Ketosis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Ketosis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Ketosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:31.425120'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.