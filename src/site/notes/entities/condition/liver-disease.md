---
created: '2026-02-08T19:45:44.485043Z'
description: A broad range of conditions that damage the liver and impair its essential
  functions, including detoxification, metabolism, and bile production.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/liver-disease/
slug: liver-disease
tags:
- condition
- hepatology
- gastroenterology
- function-health
title: Liver Disease
type: condition
updated: '2026-02-08T19:45:44.485043Z'
---

# Liver Disease

## Overview
A broad range of conditions that damage the liver and impair its essential functions, including detoxification, metabolism, and bile production.

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
FROM [[Liver Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[iron]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[iron_saturation]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[iron_binding_capacity]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[total_protein]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Liver_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
```
- → [[iron]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
```
- → [[iron_saturation]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
```
- → [[iron_binding_capacity]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
```
- → [[total_protein]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Liver Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Liver Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Liver_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```
- ← [[total_protein]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:01.071987'
source: obsidian
```
- ← [[iron]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.949570'
source: obsidian
```
- ← [[iron_saturation]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.849989'
source: obsidian
```
- ← [[iron_binding_capacity]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.670159'
source: obsidian
```
- → [[iron]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```
- → [[total_protein]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```
- → [[iron_binding_capacity]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```
- → [[iron_saturation]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```
- → [[Liver_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
```

### May Detect
- ← [[total_protein]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[iron_binding_capacity]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[iron_saturation]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[iron]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.