---
created: '2026-02-08T19:25:12.938647Z'
description: A range of conditions affecting the gallbladder, most commonly involving
  gallstones or inflammation (cholecystitis).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/gallbladder-disease/
slug: gallbladder-disease
tags:
- Condition
- condition
- gastroenterology
- function-health
title: Gallbladder Disease
type: Condition
updated: '2026-02-08T19:25:12.938647Z'
---

# Gallbladder Disease

## Overview
A range of conditions affecting the gallbladder, most commonly involving gallstones or inflammation (cholecystitis).

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
FROM [[Gallbladder Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[amylase]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[lipase]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[bilirubin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Gallbladder_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
```
- → [[amylase]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
```
- → [[lipase]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
```
- → [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:07.269459'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Gallbladder Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Gallbladder Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Gallbladder_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
```
- ← [[lipase]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.162445'
source: obsidian
```
- ← [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.709630'
source: obsidian
```
- ← [[amylase]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.692341'
source: obsidian
```
- → [[Gallbladder_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
```
- → [[lipase]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
```
- → [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
```
- → [[amylase]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.084583'
source: obsidian
```

### May Detect
- ← [[bilirubin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[lipase]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[amylase]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.