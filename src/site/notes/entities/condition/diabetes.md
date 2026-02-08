---
created: '2026-02-08T19:29:31.600606Z'
description: Diabetes mellitus is a group of metabolic diseases characterized by high
  blood sugar levels over a prolonged period. This high blood sugar can cause symptoms
  such as frequent urination, increased thirst, and increased hunger. If left untreated,
  diabetes can cause many complications.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/diabetes/
slug: diabetes
tags:
- condition
- metabolic
- chronic
title: Diabetes
type: condition
updated: '2026-02-08T19:29:31.600606Z'
---

# Diabetes

## Overview
Diabetes mellitus is a group of metabolic diseases characterized by high blood sugar levels over a prolonged period. This high blood sugar can cause symptoms such as frequent urination, increased thirst, and increased hunger. If left untreated, diabetes can cause many complications.

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
FROM [[Diabetes]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Complicates
- → [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:07.546536'
source: obsidian
```

### Worsened By Condition
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:07.100000'
source: obsidian
```

### Worsened By Intervention
- → [[Keto_Diet]] (intervention)
```yaml
last_modified: '2025-12-28T11:01:07.449897'
source: obsidian
```

### May Improve Condition
- ← [[Keto_Diet]] (intervention)
```yaml
last_modified: '2025-12-28T11:01:10.311911'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:19.201468'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:22.547804'
source: obsidian
```
- ← [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
```

### Related
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- ← [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.188234'
source: obsidian
```
- → [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[Keto_Diet]] (entity)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[glucose_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-19T09:31:50.148655'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
source: obsidian
```
- → [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-27T18:02:21.238365'
source: obsidian
```
- ← [[glucose_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:32:22.895264'
source: obsidian
```
- ← [[Keto_Diet]] (intervention)
```yaml
last_modified: '2026-01-19T09:32:10.258074'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2026-01-19T09:06:58.948673'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:07.990267'
source: obsidian
```
- ← [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```

### May Detect
- ← [[glucose_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Diabetes]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Diabetes]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- → [[Keto_Diet]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- ← [[glucose_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:53.338942'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:40.282261'
source: obsidian
```
- → [[glucose_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- → [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- ← [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.943509'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- ← [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:38.494293'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:35.916356'
source: obsidian
```
- ← [[Keto_Diet]] (intervention)
```yaml
last_modified: '2026-01-26T07:07:48.239770'
source: obsidian
```
- → [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-27T18:02:21.238365'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
```

### May Detect
- ← [[glucose_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### May Improve Condition
- ← [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
```
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:22.547804'
source: obsidian
```
- ← [[Berberine]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:19.201468'
source: obsidian
```
- ← [[Keto_Diet]] (intervention)
```yaml
last_modified: '2025-12-28T11:01:10.311911'
source: obsidian
```

### Worsened By Intervention
- → [[Keto_Diet]] (intervention)
```yaml
last_modified: '2025-12-28T11:01:07.449897'
source: obsidian
```

### Worsened By Condition
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:07.100000'
source: obsidian
```

### Complicates
- → [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:07.546536'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.