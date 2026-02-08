---
created: '2026-02-08T19:25:12.947006Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/iron-deficiency/
slug: iron-deficiency
tags:
- Condition
- condition
title: Iron Deficiency
type: Condition
updated: '2026-02-08T19:25:12.947006Z'
---

# Iron Deficiency

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
FROM [[iron_deficiency]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Requires Biomarker
- → [[Ferritin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```
- → [[TIBC]] (entity)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```
- → [[Transferrin_Saturation]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Increases Risk For
- → [[Iron_Deficiency_Anemia]] (entity)
```yaml
last_modified: '2026-01-19T08:39:25.239061'
source: obsidian
```
- → [[Restless_Leg_Syndrome]] (entity)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```
- → [[Iron_Deficiency_Anemia]] (condition)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Affects Organ
- → [[Bone_Marrow]] (entity)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```
- → [[Brain]] (organ)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Improved By Supplement
- → [[Iron_Bisglycinate]] (entity)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```
- → [[Vitamin_C]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Modulated By Pathway
- → [[Iron_Metabolism]] (entity)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Related
- → [[Iron_Deficiency_Pattern]] (condition)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Ferritin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[TIBC]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Transferrin_Saturation]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Iron_Deficiency_Anemia]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Restless_Leg_Syndrome]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Bone_Marrow]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Brain]] (organ)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Iron_Bisglycinate]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Vitamin_C]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- → [[Iron_Metabolism]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
```
- ← [[iron]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:26.595154'
source: obsidian
```
- ← [[iron_binding_capacity]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:26.895499'
source: obsidian
```
- ← [[iron_saturation]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:27.471024'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[iron_deficiency]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[iron_deficiency]] AND #clinical-trial
SORT date DESC
```

## References
No references available.