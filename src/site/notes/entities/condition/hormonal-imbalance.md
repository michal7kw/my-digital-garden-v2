---
created: '2026-02-08T19:45:44.479921Z'
description: A condition where there is too much or too little of one or more hormones
  in the body, which can disrupt many essential processes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hormonal-imbalance/
slug: hormonal-imbalance
tags:
- condition
- endocrinology
- hormones
- function-health
title: Hormonal Imbalance
type: condition
updated: '2026-02-08T19:45:44.479921Z'
---

# Hormonal Imbalance

## Overview
A condition where there is too much or too little of one or more hormones in the body, which can disrupt many essential processes.

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
FROM [[Hormonal Imbalance]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[follicle_stimulating_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[luteinizing_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[prolactin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[leptin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Hormonal_Imbalance]] (condition)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```
- → [[follicle_stimulating_hormone]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```
- → [[luteinizing_hormone]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```
- → [[prolactin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```
- → [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```
- → [[leptin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hormonal Imbalance]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hormonal Imbalance]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Hormonal_Imbalance]] (entity)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- ← [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.671283'
source: obsidian
```
- ← [[prolactin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:58.920010'
source: obsidian
```
- ← [[luteinizing_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.551127'
source: obsidian
```
- ← [[leptin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:55.853821'
source: obsidian
```
- ← [[follicle_stimulating_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:52.960824'
source: obsidian
```
- → [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- → [[prolactin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- → [[luteinizing_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- → [[Hormonal_Imbalance]] (condition)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- → [[follicle_stimulating_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```
- → [[leptin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
```

### May Detect
- ← [[leptin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[prolactin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[luteinizing_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[follicle_stimulating_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.