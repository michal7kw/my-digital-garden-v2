---
created: '2026-02-08T19:25:12.973613Z'
description: A condition where the kidneys are unable to properly regulate the concentration
  of urine, leading to urine that is either too concentrated (high specific gravity)
  or too dilute (low specific gravity).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/urinary-concentration-imbalance/
slug: urinary-concentration-imbalance
tags:
- Condition
- condition
- nephrology
- metabolic
- function-health
title: Urinary Concentration Imbalance
type: Condition
updated: '2026-02-08T19:25:12.973613Z'
---

# Urinary Concentration Imbalance

## Overview
A condition where the kidneys are unable to properly regulate the concentration of urine, leading to urine that is either too concentrated (high specific gravity) or too dilute (low specific gravity).

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
FROM [[Urinary Concentration Imbalance]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[specific_gravity_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Urinary_Concentration_Imbalance]] (condition)
```yaml
last_modified: '2026-01-19T09:31:45.422595'
source: obsidian
```
- → [[specific_gravity_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:45.422595'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Urinary Concentration Imbalance]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Urinary Concentration Imbalance]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Urinary_Concentration_Imbalance]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
```
- ← [[specific_gravity_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.926138'
source: obsidian
```
- → [[specific_gravity_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
```
- → [[Urinary_Concentration_Imbalance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
```

### May Detect
- ← [[specific_gravity_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.