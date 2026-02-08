---
created: '2026-02-08T19:25:12.960124Z'
description: Inflammation of the pancreas, which can be acute (sudden and severe)
  or chronic (long-term and progressive).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/pancreatitis/
slug: pancreatitis
tags:
- Condition
- condition
- gastroenterology
- inflammation
- acute
- chronic
title: Pancreatitis
type: Condition
updated: '2026-02-08T19:25:12.960124Z'
---

# Pancreatitis

## Overview
Inflammation of the pancreas, which can be acute (sudden and severe) or chronic (long-term and progressive).

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
FROM [[Pancreatitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Pancreatitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:32.638296'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pancreatitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pancreatitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pancreatitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.176562'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.