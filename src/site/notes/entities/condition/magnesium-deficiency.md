---
created: '2026-02-08T19:29:31.613176Z'
description: A condition where the body does not have enough magnesium, an essential
  mineral involved in over 300 biochemical reactions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/magnesium-deficiency/
slug: magnesium-deficiency
tags:
- condition
- metabolic
- nutrition
- mineral
- function-health
title: Magnesium Deficiency
type: condition
updated: '2026-02-08T19:29:31.613176Z'
---

# Magnesium Deficiency

## Overview
A condition where the body does not have enough magnesium, an essential mineral involved in over 300 biochemical reactions.

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
FROM [[Magnesium Deficiency]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[magnesium]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Magnesium_Deficiency]] (condition)
```yaml
last_modified: '2026-01-19T09:31:19.970894'
source: obsidian
```
- → [[magnesium]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.970894'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Magnesium Deficiency]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Magnesium Deficiency]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Magnesium_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
```
- ← [[magnesium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.822257'
source: obsidian
```
- → [[Magnesium_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
```
- → [[magnesium]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
```

### May Detect
- ← [[magnesium]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.