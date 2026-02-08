---
created: '2026-02-08T19:25:12.967880Z'
description: A serious medical condition involving the rapid breakdown of damaged
  skeletal muscle, releasing toxic cell contents into the bloodstream.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/rhabdomyolysis/
slug: rhabdomyolysis
tags:
- Condition
- condition
- musculoskeletal
- emergency
- nephrology
- function-health
title: Rhabdomyolysis
type: Condition
updated: '2026-02-08T19:25:12.967880Z'
---

# Rhabdomyolysis

## Overview
A serious medical condition involving the rapid breakdown of damaged skeletal muscle, releasing toxic cell contents into the bloodstream.

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
FROM [[Rhabdomyolysis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Rhabdomyolysis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:39.464069'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Rhabdomyolysis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Rhabdomyolysis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Rhabdomyolysis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.996714'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.