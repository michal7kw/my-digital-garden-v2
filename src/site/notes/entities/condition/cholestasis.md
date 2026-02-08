---
created: '2026-02-08T19:45:44.466339Z'
description: A condition where the flow of bile from the liver stops or slows, leading
  to a buildup of bilirubin and bile salts in the blood.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/cholestasis/
slug: cholestasis
tags:
- condition
- hepatology
- gastroenterology
- symptom
- function-health
title: Cholestasis
type: condition
updated: '2026-02-08T19:45:44.466339Z'
---

# Cholestasis

## Overview
A condition where the flow of bile from the liver stops or slows, leading to a buildup of bilirubin and bile salts in the blood.

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
FROM [[Cholestasis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Cholestasis]] (condition)
```yaml
last_modified: '2026-01-19T09:30:54.258233'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Cholestasis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Cholestasis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Cholestasis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:25.198477'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.