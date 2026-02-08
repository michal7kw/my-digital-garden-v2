---
created: '2026-02-08T19:25:12.954982Z'
description: Non-Alcoholic Fatty Liver Disease, characterized by excessive fat accumulation
  in the liver not caused by alcohol consumption.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/nafld/
slug: nafld
tags:
- Condition
- condition
- metabolic
- hepatic
- obesity
title: NAFLD
type: Condition
updated: '2026-02-08T19:25:12.954982Z'
---

# NAFLD

## Overview
Non-Alcoholic Fatty Liver Disease, characterized by excessive fat accumulation in the liver not caused by alcohol consumption.

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
FROM [[NAFLD]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- ← [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-19T09:31:23.144461'
source: obsidian
```
- → [[Metabolic_Syndrome]] (entity)
```yaml
last_modified: '2026-01-19T09:31:27.704877'
source: obsidian
```
- → [[NAFLD]] (condition)
```yaml
last_modified: '2026-01-19T09:31:27.704877'
source: obsidian
```

### Increases Risk For
- ← [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-19T09:30:42.706915'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[NAFLD]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[NAFLD]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Metabolic_Syndrome]] (entity)
```yaml
last_modified: '2026-01-26T07:07:34.088445'
source: obsidian
```
- ← [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-26T07:07:32.678592'
source: obsidian
```
- → [[NAFLD]] (condition)
```yaml
last_modified: '2026-01-26T07:07:34.088445'
source: obsidian
```

### Increases Risk For
- ← [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2026-01-26T07:07:21.922538'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.