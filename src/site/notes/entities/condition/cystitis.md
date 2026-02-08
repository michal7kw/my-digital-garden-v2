---
created: '2026-02-08T19:29:31.599725Z'
description: Inflammation of the bladder, most often caused by a bacterial urinary
  tract infection (UTI).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/cystitis/
slug: cystitis
tags:
- condition
- urology
- inflammation
- infection
- function-health
title: Cystitis
type: condition
updated: '2026-02-08T19:29:31.599725Z'
---

# Cystitis

## Overview
Inflammation of the bladder, most often caused by a bacterial urinary tract infection (UTI).

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
FROM [[Cystitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Cystitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:02.708372'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Cystitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Cystitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Cystitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:26.806101'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.