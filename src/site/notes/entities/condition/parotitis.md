---
created: '2026-02-08T19:25:12.960758Z'
description: Inflammation of one or both parotid glands, the major salivary glands
  located on either side of the face.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/parotitis/
slug: parotitis
tags:
- Condition
- condition
- ent
- infection
- inflammation
- function-health
title: Parotitis
type: Condition
updated: '2026-02-08T19:25:12.960758Z'
---

# Parotitis

## Overview
Inflammation of one or both parotid glands, the major salivary glands located on either side of the face.

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
FROM [[Parotitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Parotitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:32.805752'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Parotitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Parotitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Parotitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.442327'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.