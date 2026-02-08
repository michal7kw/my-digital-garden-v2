---
created: '2026-02-08T19:25:12.967398Z'
description: Severe pain caused by a kidney stone moving through the urinary tract,
  typically blocking the flow of urine.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/renal-colic/
slug: renal-colic
tags:
- Condition
- condition
- nephrology
- urology
- symptom
- pain
title: Renal Colic
type: Condition
updated: '2026-02-08T19:25:12.967398Z'
---

# Renal Colic

## Overview
Severe pain caused by a kidney stone moving through the urinary tract, typically blocking the flow of urine.

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
FROM [[Renal Colic]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Renal_Colic]] (condition)
```yaml
last_modified: '2026-01-19T09:31:39.089157'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Renal Colic]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Renal Colic]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Renal_Colic]] (entity)
```yaml
last_modified: '2026-01-26T07:07:36.917440'
source: obsidian
```
- → [[Renal_Colic]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.917440'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.