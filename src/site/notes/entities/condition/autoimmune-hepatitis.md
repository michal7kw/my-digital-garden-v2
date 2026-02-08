---
created: '2026-02-08T19:45:44.461833Z'
description: A chronic liver disease in which the body's immune system mistakenly
  attacks liver cells, causing inflammation and liver damage.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/autoimmune-hepatitis/
slug: autoimmune-hepatitis
tags:
- condition
- hepatology
- immunology
- autoimmune
- function-health
title: Autoimmune Hepatitis
type: condition
updated: '2026-02-08T19:45:44.461833Z'
---

# Autoimmune Hepatitis

## Overview
A chronic liver disease in which the body's immune system mistakenly attacks liver cells, causing inflammation and liver damage.

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
FROM [[Autoimmune Hepatitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- ← [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:07.420190'
source: obsidian
```
- ← [[Abdominal_pain]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:18.378061'
source: obsidian
```
- ← [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:33.556534'
source: obsidian
```
- → [[Autoimmune_Hepatitis]] (condition)
```yaml
last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
```
- → [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
```
- → [[Abdominal_pain]] (entity)
```yaml
last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
```
- → [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Autoimmune Hepatitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Autoimmune Hepatitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Abdominal_pain]] (entity)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- → [[Autoimmune_Hepatitis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.215543'
source: obsidian
```
- → [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- → [[Autoimmune_Hepatitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- → [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
```
- ← [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:33.556534'
source: obsidian
```
- ← [[Abdominal_pain]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:18.378061'
source: obsidian
```
- ← [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-18T17:27:07.420190'
source: obsidian
```

### May Detect
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.