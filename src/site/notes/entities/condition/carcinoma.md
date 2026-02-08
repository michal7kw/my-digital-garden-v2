---
created: '2026-02-08T19:45:44.465103Z'
description: A type of cancer that starts in cells that make up the skin or the tissue
  lining organs, such as the liver or kidneys.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/carcinoma/
slug: carcinoma
tags:
- condition
- oncology
- cancer
- pathology
title: Carcinoma
type: condition
updated: '2026-02-08T19:45:44.465103Z'
---

# Carcinoma

## Overview
A type of cancer that starts in cells that make up the skin or the tissue lining organs, such as the liver or kidneys.

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
FROM [[Carcinoma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Carcinoma]] (condition)
```yaml
last_modified: '2026-01-19T09:30:52.322641'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Carcinoma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Carcinoma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Carcinoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:24.651878'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.