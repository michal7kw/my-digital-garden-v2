---
created: '2026-02-08T19:25:12.942395Z'
description: The presence of red blood cells in the urine, which can be visible (gross)
  or only detectable under a microscope (microscopic).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/hematuria/
slug: hematuria
tags:
- Condition
- condition
- urology
- nephrology
- symptom
- function-health
title: Hematuria
type: Condition
updated: '2026-02-08T19:25:12.942395Z'
---

# Hematuria

## Overview
The presence of red blood cells in the urine, which can be visible (gross) or only detectable under a microscope (microscopic).

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
FROM [[Hematuria]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Hematuria]] (condition)
```yaml
last_modified: '2026-01-19T09:31:09.992538'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Hematuria]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Hematuria]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Hematuria]] (condition)
```yaml
last_modified: '2026-01-26T07:07:28.904795'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.