---
created: '2026-02-08T19:45:44.476527Z'
description: A group of eye conditions that damage the optic nerve, often caused by
  abnormally high pressure in the eye, leading to progressive vision loss.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/glaucoma/
slug: glaucoma
tags:
- condition
- ophthalmology
- chronic
- neurodegenerative
title: Glaucoma
type: condition
updated: '2026-02-08T19:45:44.476527Z'
---

# Glaucoma

## Overview
A group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye, leading to progressive vision loss.

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
FROM [[Glaucoma]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Glaucoma]] (condition)
```yaml
last_modified: '2026-01-19T09:31:08.276896'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Glaucoma]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Glaucoma]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Retinal_Imaging_for_Neurodegeneration]] (entity)
```yaml
last_modified: '2026-01-26T06:47:39.359650'
source: obsidian
```
- ← [[Retinal_Imaging_for_Neurodegeneration]] (examination)
```yaml
last_modified: '2026-01-26T07:07:45.549973'
source: obsidian
```
- → [[Glaucoma]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.389126'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.