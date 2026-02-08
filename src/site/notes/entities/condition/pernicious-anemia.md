---
created: '2026-02-08T19:29:31.623567Z'
description: An autoimmune condition characterized by the body's inability to absorb
  Vitamin B12 due to a lack of intrinsic factor, leading to megaloblastic anemia and
  neurological issues.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pernicious-anemia/
slug: pernicious-anemia
tags:
- condition
- hematology
- immunology
- autoimmune
- function-health
title: Pernicious Anemia
type: condition
updated: '2026-02-08T19:29:31.623567Z'
---

# Pernicious Anemia

## Overview
An autoimmune condition characterized by the body's inability to absorb Vitamin B12 due to a lack of intrinsic factor, leading to megaloblastic anemia and neurological issues.

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
FROM [[Pernicious Anemia]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[methylmalonic_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Pernicious_Anemia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:34.644127'
source: obsidian
```
- → [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:34.644127'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pernicious Anemia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pernicious Anemia]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Pernicious_Anemia]] (entity)
```yaml
last_modified: '2026-01-26T07:07:35.828660'
source: obsidian
```
- ← [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.363959'
source: obsidian
```
- → [[Pernicious_Anemia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:35.828660'
source: obsidian
```
- → [[methylmalonic_acid]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:35.828660'
source: obsidian
```

### May Detect
- ← [[methylmalonic_acid]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.