---
created: '2026-02-08T19:25:12.932232Z'
description: A medical condition characterized by either a deficiency or an excess
  (toxicity) of copper, an essential trace mineral required for various physiological
  processes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/copper-imbalance/
slug: copper-imbalance
tags:
- Condition
- condition
- metabolic
- nutrition
- mineral
- function-health
title: Copper Imbalance
type: Condition
updated: '2026-02-08T19:25:12.932232Z'
---

# Copper Imbalance

## Overview
A medical condition characterized by either a deficiency or an excess (toxicity) of copper, an essential trace mineral required for various physiological processes.

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
FROM [[Copper Imbalance]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[zinc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Copper_Imbalance]] (condition)
```yaml
last_modified: '2026-01-19T09:31:01.840816'
source: obsidian
```
- → [[zinc]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:01.840816'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Copper Imbalance]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Copper Imbalance]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Copper_Imbalance]] (entity)
```yaml
last_modified: '2026-01-26T07:07:26.592612'
source: obsidian
```
- ← [[zinc]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:02.110806'
source: obsidian
```
- → [[Copper_Imbalance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:26.592612'
source: obsidian
```
- → [[zinc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:26.592612'
source: obsidian
```

### May Detect
- ← [[zinc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.