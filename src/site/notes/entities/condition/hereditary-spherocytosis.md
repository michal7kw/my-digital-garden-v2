---
created: '2026-02-08T19:45:44.479170Z'
description: An inherited blood disorder characterized by spherical red blood cells
  that are fragile and prone to premature destruction in the spleen.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hereditary-spherocytosis/
slug: hereditary-spherocytosis
tags:
- condition
- hematology
- genetic
- function-health
title: Hereditary Spherocytosis
type: condition
updated: '2026-02-08T19:45:44.479170Z'
---

# Hereditary Spherocytosis

## Overview
An inherited blood disorder characterized by spherical red blood cells that are fragile and prone to premature destruction in the spleen.

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
FROM [[Hereditary Spherocytosis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Hereditary_Spherocytosis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:10.377523'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:10.377523'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hereditary Spherocytosis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hereditary Spherocytosis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Hereditary_Spherocytosis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
```
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.923847'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
```
- → [[Hereditary_Spherocytosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
```

### May Detect
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.