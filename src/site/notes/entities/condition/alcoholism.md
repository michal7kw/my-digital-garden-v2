---
created: '2026-02-08T19:29:31.589121Z'
description: Alcohol Use Disorder (AUD) is a chronic relapsing brain disorder characterized
  by compulsive alcohol use, loss of control over intake, and negative emotional state
  when not using. Also known as alcoholism, it involves both physical and psychological
  dependence on alcohol.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/alcoholism/
slug: alcoholism
tags:
- condition
- substance_use_disorder
- chronic
- mental_health
- addiction
title: Alcoholism
type: condition
updated: '2026-02-08T19:29:31.589121Z'
---

# Alcoholism

## Overview
Alcohol Use Disorder (AUD) is a chronic relapsing brain disorder characterized by compulsive alcohol use, loss of control over intake, and negative emotional state when not using. Also known as alcoholism, it involves both physical and psychological dependence on alcohol.

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
FROM [[Alcoholism]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[PRAZOSIN]] (entity)
```yaml
last_modified: '2026-01-19T08:39:29.799805'
source: obsidian
```
- ← [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-19T09:32:02.527184'
source: obsidian
```
- → [[Alcoholism]] (condition)
```yaml
last_modified: '2026-01-19T09:30:46.790609'
source: obsidian
```
- → [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-19T09:30:46.790609'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Alcoholism]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Alcoholism]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-26T07:07:23.015287'
source: obsidian
```
- ← [[PRAZOSIN]] (drug)
```yaml
last_modified: '2026-01-26T07:07:43.289113'
source: obsidian
```
- → [[Alcoholism]] (condition)
```yaml
last_modified: '2026-01-26T07:07:23.015287'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.