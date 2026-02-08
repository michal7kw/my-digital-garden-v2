---
created: '2026-02-08T19:25:12.963360Z'
description: An infection that inflames the air sacs (alveoli) in one or both lungs,
  which may fill with fluid or pus.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/pneumonia/
slug: pneumonia
tags:
- Condition
- condition
- respiratory
- infection
- acute
title: Pneumonia
type: Condition
updated: '2026-02-08T19:25:12.963360Z'
---

# Pneumonia

## Overview
An infection that inflames the air sacs (alveoli) in one or both lungs, which may fill with fluid or pus.

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
FROM [[Pneumonia]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Pneumonia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:35.476968'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pneumonia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pneumonia]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pneumonia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.029243'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.