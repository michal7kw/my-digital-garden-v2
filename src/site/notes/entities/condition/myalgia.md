---
created: '2026-02-08T19:29:31.616600Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/myalgia/
slug: myalgia
tags:
- condition
title: Myalgia
type: condition
updated: '2026-02-08T19:29:31.616600Z'
---

# Myalgia

## Overview
No description available.

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
FROM [[Myalgia]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Myalgia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
```
- → [[INDOMETHACIN]] (entity)
```yaml
last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
```
- → [[Pain]] (phenotype)
```yaml
last_modified: '2026-01-19T09:31:26.941983'
source: obsidian
```
- ← [[Pain]] (phenotype)
```yaml
last_modified: '2026-01-19T09:06:29.345319'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Myalgia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Myalgia]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[INDOMETHACIN]] (entity)
```yaml
last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
```
- ← [[Pain]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:23.771829'
source: obsidian
```
- → [[Myalgia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
```
- → [[Pain]] (phenotype)
```yaml
last_modified: '2026-01-26T07:07:33.807696'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.