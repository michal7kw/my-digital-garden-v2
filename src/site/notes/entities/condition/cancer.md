---
created: '2026-02-08T19:25:12.976097Z'
description: A large group of diseases characterized by the uncontrolled growth and
  spread of abnormal cells, which can invade nearby tissues and metastasize to distant
  organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/cancer/
slug: cancer
tags:
- Condition
- condition
- oncology
- malignant_neoplasm
- genetic_disorder
title: Cancer
type: Condition
updated: '2026-02-08T19:25:12.976097Z'
---

# Cancer

## Overview
A large group of diseases characterized by the uncontrolled growth and spread of abnormal cells, which can invade nearby tissues and metastasize to distant organs.

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
FROM [[Cancer]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Increases Risk For
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
```

### Related
- → [[Cancer]] (condition)
```yaml
last_modified: '2026-01-19T09:30:51.934014'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-19T09:30:51.934014'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Cancer]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Cancer]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- → [[CTCF]] (protein)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- → [[CDK2]] (protein)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- → [[AKT1]] (protein)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T07:07:24.513258'
source: obsidian
```
- ← [[CTCF]] (protein)
```yaml
last_modified: '2026-01-26T07:08:29.769335'
source: obsidian
```
- ← [[CDK2]] (protein)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- ← [[AKT1]] (protein)
```yaml
last_modified: '2026-01-26T07:08:28.530000'
source: obsidian
```
- ← [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T07:07:46.919120'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
```
- → [[Cancer]] (condition)
```yaml
last_modified: '2026-01-26T07:07:24.513258'
source: obsidian
```

### Increases Risk For
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.