---
created: '2026-02-08T19:29:31.593495Z'
description: A group of disorders affecting the bone marrow's ability to produce healthy
  blood cells (red cells, white cells, or platelets).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/bone-marrow-disorder/
slug: bone-marrow-disorder
tags:
- condition
- hematology
- oncology
- function-health
title: Bone Marrow Disorder
type: condition
updated: '2026-02-08T19:29:31.593495Z'
---

# Bone Marrow Disorder

## Overview
A group of disorders affecting the bone marrow's ability to produce healthy blood cells (red cells, white cells, or platelets).

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
FROM [[Bone Marrow Disorder]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[mean_platelet_volume_mpv]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[platelet_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Bone_Marrow_Disorder]] (condition)
```yaml
last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
```
- → [[mean_platelet_volume_mpv]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
```
- → [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Bone Marrow Disorder]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Bone Marrow Disorder]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Bone_Marrow_Disorder]] (entity)
```yaml
last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
```
- ← [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:58.738195'
source: obsidian
```
- ← [[mean_platelet_volume_mpv]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.181105'
source: obsidian
```
- → [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
```
- → [[mean_platelet_volume_mpv]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
```
- → [[Bone_Marrow_Disorder]] (condition)
```yaml
last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
```

### May Detect
- ← [[platelet_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_platelet_volume_mpv]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.