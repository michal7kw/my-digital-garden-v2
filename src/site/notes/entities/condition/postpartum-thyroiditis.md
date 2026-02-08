---
created: '2026-02-08T19:29:31.625538Z'
description: An autoimmune inflammatory condition of the thyroid gland that occurs
  within the first year after childbirth, characterized by a transient hyperthyroid
  phase followed by a hypothyroid phase.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/postpartum-thyroiditis/
slug: postpartum-thyroiditis
tags:
- condition
- endocrinology
- thyroid
- autoimmune
- function-health
title: Postpartum Thyroiditis
type: condition
updated: '2026-02-08T19:29:31.625538Z'
---

# Postpartum Thyroiditis

## Overview
An autoimmune inflammatory condition of the thyroid gland that occurs within the first year after childbirth, characterized by a transient hyperthyroid phase followed by a hypothyroid phase.

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
FROM [[Postpartum Thyroiditis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Postpartum_Thyroiditis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:36.711401'
source: obsidian
```
- → [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:36.711401'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Postpartum Thyroiditis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Postpartum Thyroiditis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Postpartum_Thyroiditis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:36.280450'
source: obsidian
```
- ← [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:00.528520'
source: obsidian
```
- → [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.280450'
source: obsidian
```
- → [[Postpartum_Thyroiditis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.280450'
source: obsidian
```

### May Detect
- ← [[thyroid_peroxidase_antibodies_tpo]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.