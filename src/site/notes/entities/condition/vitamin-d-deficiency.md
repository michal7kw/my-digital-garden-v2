---
created: '2026-02-08T19:29:31.635263Z'
description: A condition characterized by inadequate levels of vitamin D in the body,
  which is essential for calcium absorption, bone health, and immune function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/vitamin-d-deficiency/
slug: vitamin-d-deficiency
tags:
- condition
- nutrition
- metabolic
- bone_health
- function-health
title: Vitamin D Deficiency
type: condition
updated: '2026-02-08T19:29:31.635263Z'
---

# vitamin_d_deficiency

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
FROM [[vitamin_d_deficiency]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Requires Biomarker
- → [[25-OH_Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

### Increases Risk For
- → [[Osteoporosis]] (entity)
```yaml
last_modified: '2026-01-19T08:39:28.472510'
source: obsidian
```
- → [[Depression]] (entity)
```yaml
last_modified: '2026-01-19T08:39:28.472510'
source: obsidian
```
- → [[Immune_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```
- → [[Depression]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

### Improved By Supplement
- → [[Vitamin_D3]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```
- → [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

### Modulated By Pathway
- → [[Calcium_Homeostasis]] (entity)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

### Related
- → [[vitamin_d_deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[25-OH_Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Depression]] (condition)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Immune_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Vitamin_D3]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Calcium_Homeostasis]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- → [[Immune_System]] (entity)
```yaml
last_modified: '2026-01-19T09:31:46.670105'
source: obsidian
```
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:14.149711'
source: obsidian
```
- ← [[calcium]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:17.743724'
source: obsidian
```
- ← [[vitamin_d]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:45.400773'
source: obsidian
```

### Affects Organ
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```
- → [[Immune_System]] (organ)
```yaml
last_modified: '2026-01-19T09:30:43.988175'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[vitamin_d_deficiency]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[vitamin_d_deficiency]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Vitamin_D_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T06:47:54.726785'
source: obsidian
```
- → [[Calcium_Homeostasis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Immune_System]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[25-OH_Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Vitamin_D3]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[vitamin_d_deficiency]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Immune_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:41:56.167045'
source: obsidian
```
- ← [[Immune_System]] (organ)
```yaml
last_modified: '2026-01-19T09:39:29.403418'
source: obsidian
```
- ← [[Bones]] (organ)
```yaml
last_modified: '2026-01-19T09:39:23.827651'
source: obsidian
```
- → [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[calcium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[vitamin_d]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- ← [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-19T09:37:21.316851'
source: obsidian
```
- ← [[Depression]] (condition)
```yaml
last_modified: '2026-01-19T09:36:45.740417'
source: obsidian
```
- ← [[vitamin_d]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.620736'
source: obsidian
```
- ← [[calcium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:51.050601'
source: obsidian
```
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.561127'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Depression]] (condition)
```yaml
last_modified: '2026-01-26T07:07:39.191758'
source: obsidian
```
- → [[Vitamin_D_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T06:04:02.247137'
source: obsidian
```

### Modulated By Pathway
- → [[Calcium_Homeostasis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```

### Improved By Supplement
- → [[Vitamin_D3]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
- → [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```

### Increases Risk For
- → [[Immune_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
- → [[Osteoporosis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
- → [[Depression]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```

### Requires Biomarker
- → [[25-OH_Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```

### Affects Organ
- → [[Immune_System]] (organ)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-26T07:07:22.279649'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.