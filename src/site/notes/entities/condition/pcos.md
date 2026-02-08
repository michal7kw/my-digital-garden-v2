---
created: '2026-02-08T19:45:44.494480Z'
description: Polycystic Ovary Syndrome, a complex hormonal and metabolic disorder
  affecting women of reproductive age.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pcos/
slug: pcos
tags:
- condition
- endocrine
- metabolic
- reproductive_health
title: PCOS
type: condition
updated: '2026-02-08T19:45:44.494480Z'
---

# PCOS

## Overview
Polycystic Ovary Syndrome, a complex hormonal and metabolic disorder affecting women of reproductive age.

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
FROM [[PCOS]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Improve Condition
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:19.252065'
source: obsidian
```

### Related
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
```
- ← [[Insulin_Resistance]] (condition)
```yaml
last_modified: '2026-01-19T09:31:13.820465'
source: obsidian
```
- → [[Insulin_Resistance]] (entity)
```yaml
last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:50.148655'
source: obsidian
```
- → [[PCOS]] (condition)
```yaml
last_modified: '2026-01-19T09:31:33.234080'
source: obsidian
```
- → [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-27T18:02:22.303164'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2026-01-19T09:06:58.948673'
source: obsidian
```

### Increases Risk For
- ← [[Insulin_Resistance]] (condition)
```yaml
last_modified: '2026-01-19T09:30:38.659417'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[PCOS]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[PCOS]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Insulin_Resistance]] (entity)
```yaml
last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:40.282261'
source: obsidian
```
- ← [[Insulin_Resistance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:30.181114'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:35.916356'
source: obsidian
```
- → [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-27T18:02:22.303164'
source: obsidian
```
- → [[PCOS]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.529927'
source: obsidian
```

### Increases Risk For
- ← [[Insulin_Resistance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.706349'
source: obsidian
```

### May Improve Condition
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:19.252065'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.