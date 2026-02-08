---
created: '2026-02-08T19:45:44.507956Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/thyroid-dysfunction/
slug: thyroid-dysfunction
tags:
- condition
title: Thyroid Dysfunction
type: condition
updated: '2026-02-08T19:45:44.507956Z'
---

# Thyroid Dysfunction

## Overview
No description available.

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
FROM [[thyroid_dysfunction]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Requires Biomarker
- → [[TSH]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Free_T4]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Free_T3]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

### Increases Risk For
- → [[Hypothyroidism]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Hyperthyroidism]] (entity)
```yaml
last_modified: '2026-01-19T08:39:27.872842'
source: obsidian
```
- → [[Cardiovascular_Disease]] (entity)
```yaml
last_modified: '2026-01-19T08:39:27.872842'
source: obsidian
```
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Cardiovascular_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

### Improved By Supplement
- → [[Zinc]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Selenium]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

### Modulated By Pathway
- → [[Thyroid_Hormone_Synthesis]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

### Related
- → [[thyroid_dysfunction]] (condition)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[TSH]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Free_T4]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Free_T3]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Hypothyroidism]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Cardiovascular_Disease]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Zinc]] (biomarker)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Selenium]] (supplement)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Thyroid_Hormone_Synthesis]] (entity)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Thyroid]] (organ)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- → [[Heart]] (organ)
```yaml
last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
```
- ← [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:40.642238'
source: obsidian
```

### Affects Organ
- → [[Thyroid]] (organ)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```
- → [[Heart]] (organ)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[thyroid_dysfunction]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[thyroid_dysfunction]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Thyroid_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T06:47:53.290959'
source: obsidian
```
- → [[Thyroid_Hormone_Synthesis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Free_T3]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[thyroid_dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[TSH]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Hypothyroidism]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Free_T4]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Cardiovascular_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- ← [[Selenium]] (supplement)
```yaml
last_modified: '2026-01-19T12:01:04.847792'
source: obsidian
```
- ← [[Thyroid]] (organ)
```yaml
last_modified: '2026-01-19T11:58:53.643214'
source: obsidian
```
- ← [[Heart]] (organ)
```yaml
last_modified: '2026-01-19T11:58:46.695381'
source: obsidian
```
- → [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- ← [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-25T19:20:43.317242'
source: obsidian
```
- ← [[Cardiovascular_Disease]] (condition)
```yaml
last_modified: '2026-01-25T19:20:04.835843'
source: obsidian
```
- ← [[Zinc]] (biomarker)
```yaml
last_modified: '2026-01-25T20:32:36.355190'
source: obsidian
```
- ← [[Free_T4]] (biomarker)
```yaml
last_modified: '2026-01-25T20:32:12.713341'
source: obsidian
```
- ← [[Free_T3]] (biomarker)
```yaml
last_modified: '2026-01-25T20:32:12.387828'
source: obsidian
```
- ← [[sex_hormone_binding_globulin_shbg]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.671283'
source: obsidian
```
- → [[Zinc]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Heart]] (organ)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Selenium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-26T06:03:59.757278'
source: obsidian
```
- → [[Thyroid]] (organ)
```yaml
last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
```

### Modulated By Pathway
- → [[Thyroid_Hormone_Synthesis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```

### Increases Risk For
- → [[Hypothyroidism]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Cardiovascular_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Hyperthyroidism]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```

### Requires Biomarker
- → [[TSH]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Free_T3]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Free_T4]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```

### Improved By Supplement
- → [[Zinc]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Selenium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```

### Affects Organ
- → [[Thyroid]] (organ)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
- → [[Heart]] (organ)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.