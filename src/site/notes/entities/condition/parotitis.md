---
created: '2026-02-08T19:29:31.622264Z'
description: Inflammation of one or both parotid glands, the major salivary glands
  located on either side of the face.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/parotitis/
slug: parotitis
tags:
- condition
- ent
- infection
- inflammation
- function-health
title: Parotitis
type: condition
updated: '2026-02-08T19:29:31.622264Z'
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