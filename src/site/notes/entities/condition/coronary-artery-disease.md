---
created: '2026-02-08T19:45:44.470926Z'
description: A type of heart disease characterized by the narrowing or blockage of
  the coronary arteries, usually caused by atherosclerosis, which reduces blood flow
  to the heart muscle.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/coronary-artery-disease/
slug: coronary-artery-disease
tags:
- condition
- cardiology
- vascular
- chronic
- function-health
title: Coronary Artery Disease
type: condition
updated: '2026-02-08T19:45:44.470926Z'
---

# Coronary Artery Disease

## Overview
A type of heart disease characterized by the narrowing or blockage of the coronary arteries, usually caused by atherosclerosis, which reduces blood flow to the heart muscle.

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
FROM [[Coronary Artery Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Increases Risk For
- ← [[Cardiovascular_Risk_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-19T09:30:36.399745'
source: obsidian
```

### Related
- → [[Coronary_Artery_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:02.307529'
source: obsidian
```
- → [[Cardiovascular_Risk_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:31:02.307529'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Coronary Artery Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Coronary Artery Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Coronary_Artery_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:26.706824'
source: obsidian
```
- → [[Cardiovascular_Risk_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:26.706824'
source: obsidian
```
- → [[Coronary_Artery_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:26.706824'
source: obsidian
```

### Increases Risk For
- ← [[Cardiovascular_Risk_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-26T07:07:20.311340'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.