---
created: '2026-02-08T19:25:12.967157Z'
description: A serious type of urinary tract infection (UTI) that affects one or both
  kidneys, often causing systemic symptoms like fever and flank pain.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/pyelonephritis/
slug: pyelonephritis
tags:
- Condition
- condition
- nephrology
- urology
- infection
- function-health
title: Pyelonephritis
type: Condition
updated: '2026-02-08T19:25:12.967157Z'
---

# Pyelonephritis

## Overview
A serious type of urinary tract infection (UTI) that affects one or both kidneys, often causing systemic symptoms like fever and flank pain.

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
FROM [[Pyelonephritis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Pyelonephritis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:38.880605'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pyelonephritis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pyelonephritis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pyelonephritis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.844393'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.