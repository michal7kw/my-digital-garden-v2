---
created: '2026-02-08T19:45:44.478958Z'
description: The release of blood from a broken blood vessel, either inside or outside
  the body.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hemorrhage/
slug: hemorrhage
tags:
- condition
- trauma
- hematology
- emergency
title: Hemorrhage
type: condition
updated: '2026-02-08T19:45:44.478958Z'
---

# Hemorrhage

## Overview
The release of blood from a broken blood vessel, either inside or outside the body.

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
FROM [[Hemorrhage]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Hemorrhage]] (condition)
```yaml
last_modified: '2026-01-19T09:31:10.163379'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hemorrhage]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hemorrhage]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Hemorrhage]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.965419'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.