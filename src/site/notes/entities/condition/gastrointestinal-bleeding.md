---
created: '2026-02-08T19:25:12.938953Z'
description: Any bleeding that occurs in the digestive tract, ranging from the esophagus
  to the rectum, which can be acute or chronic.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/gastrointestinal-bleeding/
slug: gastrointestinal-bleeding
tags:
- Condition
- condition
- gastroenterology
- emergency
- function-health
title: Gastrointestinal Bleeding
type: Condition
updated: '2026-02-08T19:25:12.938953Z'
---

# Gastrointestinal Bleeding

## Overview
Any bleeding that occurs in the digestive tract, ranging from the esophagus to the rectum, which can be acute or chronic.

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
FROM [[Gastrointestinal Bleeding]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[blood_urea_nitrogen]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Gastrointestinal_Bleeding]] (condition)
```yaml
last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
```
- → [[blood_urea_nitrogen]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
```
- → [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Gastrointestinal Bleeding]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Gastrointestinal Bleeding]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Gastrointestinal_Bleeding]] (entity)
```yaml
last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
```
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.934888'
source: obsidian
```
- ← [[blood_urea_nitrogen]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.852350'
source: obsidian
```
- → [[Gastrointestinal_Bleeding]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
```
- → [[bun_creatinine_ratio]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
```
- → [[blood_urea_nitrogen]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
```

### May Detect
- ← [[bun_creatinine_ratio]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[blood_urea_nitrogen]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.