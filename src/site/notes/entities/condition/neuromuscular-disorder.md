---
created: '2026-02-08T19:25:12.955768Z'
description: A broad term for diseases that affect the nerves that control voluntary
  muscles and the communication between nerves and muscles.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/neuromuscular-disorder/
slug: neuromuscular-disorder
tags:
- Condition
- condition
- neurology
- musculoskeletal
- function-health
title: Neuromuscular Disorder
type: Condition
updated: '2026-02-08T19:25:12.955768Z'
---

# Neuromuscular Disorder

## Overview
A broad term for diseases that affect the nerves that control voluntary muscles and the communication between nerves and muscles.

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
FROM [[Neuromuscular Disorder]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Neuromuscular_Disorder]] (condition)
```yaml
last_modified: '2026-01-19T09:31:28.488159'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Neuromuscular Disorder]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Neuromuscular Disorder]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Neuromuscular_Disorder]] (entity)
```yaml
last_modified: '2026-01-26T07:07:34.327317'
source: obsidian
```
- → [[Neuromuscular_Disorder]] (condition)
```yaml
last_modified: '2026-01-26T07:07:34.327317'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.