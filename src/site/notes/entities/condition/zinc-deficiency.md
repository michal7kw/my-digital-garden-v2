---
created: '2026-02-08T19:29:31.635941Z'
description: A nutritional deficiency state characterized by insufficient levels of
  zinc, an essential trace element involved in immune function, protein synthesis,
  and wound healing.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/zinc-deficiency/
slug: zinc-deficiency
tags:
- condition
- nutrition
- metabolic
- mineral
- function-health
title: Zinc Deficiency
type: condition
updated: '2026-02-08T19:29:31.635941Z'
---

# Zinc Deficiency

## Overview
A nutritional deficiency state characterized by insufficient levels of zinc, an essential trace element involved in immune function, protein synthesis, and wound healing.

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
FROM [[Zinc Deficiency]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[zinc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Zinc_Deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:31:47.790606'
source: obsidian
```
- → [[zinc]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:47.790606'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Zinc Deficiency]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Zinc Deficiency]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Zinc_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
```
- ← [[zinc]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:02.110806'
source: obsidian
```
- → [[Zinc_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
```
- → [[zinc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:39.463462'
source: obsidian
```

### May Detect
- ← [[zinc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.