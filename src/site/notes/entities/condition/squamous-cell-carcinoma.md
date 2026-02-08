---
created: '2026-02-08T19:25:12.971278Z'
description: An uncontrolled growth of abnormal cells arising from the squamous cells
  in the epidermis (skin) or linings of digestive/respiratory tracts.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/squamous-cell-carcinoma/
slug: squamous-cell-carcinoma
tags:
- Condition
- condition
- oncology
- dermatology
- skin
- cancer
title: Squamous Cell Carcinoma
type: Condition
updated: '2026-02-08T19:25:12.971278Z'
---

# Squamous Cell Carcinoma

## Overview
An uncontrolled growth of abnormal cells arising from the squamous cells in the epidermis (skin) or linings of digestive/respiratory tracts.

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
FROM [[Squamous Cell Carcinoma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Squamous_Cell_Carcinoma]] (condition)
```yaml
last_modified: '2026-01-19T09:31:42.555695'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Squamous Cell Carcinoma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Squamous Cell Carcinoma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Squamous_Cell_Carcinoma]] (entity)
```yaml
last_modified: '2026-01-26T07:07:37.770243'
source: obsidian
```
- → [[Squamous_Cell_Carcinoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.770243'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.