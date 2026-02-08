---
created: '2026-02-08T19:45:44.504613Z'
description: An allergic response to specific allergens like pollen that occurs at
  certain times of the year, commonly known as Hay Fever.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/seasonal-allergic-rhinitis/
slug: seasonal-allergic-rhinitis
tags:
- condition
- immunology
- allergy
- ent
title: Seasonal Allergic Rhinitis
type: condition
updated: '2026-02-08T19:45:44.504613Z'
---

# Seasonal Allergic Rhinitis

## Overview
An allergic response to specific allergens like pollen that occurs at certain times of the year, commonly known as Hay Fever.

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
FROM [[Seasonal Allergic Rhinitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Seasonal_Allergic_Rhinitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:41.052499'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Seasonal Allergic Rhinitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Seasonal Allergic Rhinitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Seasonal_Allergic_Rhinitis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:37.407491'
source: obsidian
```
- → [[Seasonal_Allergic_Rhinitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.407491'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.