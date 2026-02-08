---
created: '2026-02-08T19:25:12.943397Z'
description: A dietary state characterized by a high proportion of protein consumption,
  which can impact metabolic markers and kidney function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/high-protein-intake/
slug: high-protein-intake
tags:
- Condition
- condition
- nutrition
- metabolic
- function-health
title: High Protein Intake
type: Condition
updated: '2026-02-08T19:25:12.943397Z'
---

# High Protein Intake

## Overview
A dietary state characterized by a high proportion of protein consumption, which can impact metabolic markers and kidney function.

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
FROM [[High Protein Intake]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[High_Protein_Intake]] (condition)
```yaml
last_modified: '2026-01-19T09:31:10.916582'
source: obsidian
```
- → [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:10.916582'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[High Protein Intake]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[High Protein Intake]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[High_Protein_Intake]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
```
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.934888'
source: obsidian
```
- → [[High_Protein_Intake]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
```
- → [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
```

### May Detect
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.