---
created: '2026-02-08T19:29:31.635051Z'
description: A condition where a blood clot forms in a vein, encompassing Deep Vein
  Thrombosis (DVT) and Pulmonary Embolism (PE).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/venous-thromboembolism/
slug: venous-thromboembolism
tags:
- condition
- hematology
- cardiology
- vascular
- emergency
title: Venous Thromboembolism
type: condition
updated: '2026-02-08T19:29:31.635051Z'
---

# Venous Thromboembolism

## Overview
A condition where a blood clot forms in a vein, encompassing Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE).

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
FROM [[Venous Thromboembolism]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Venous_Thromboembolism]] (condition)
```yaml
last_modified: '2026-01-19T09:31:46.265186'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Venous Thromboembolism]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Venous Thromboembolism]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Venous_Thromboembolism]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.061698'
source: obsidian
```
- → [[Venous_Thromboembolism]] (condition)
```yaml
last_modified: '2026-01-26T07:07:39.061698'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.