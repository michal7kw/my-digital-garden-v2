---
created: '2026-02-08T19:29:31.594151Z'
description: A fungal infection caused by an overgrowth of Candida species, primarily
  Candida albicans, affecting the skin, mucous membranes, or internal organs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/candidiasis/
slug: candidiasis
tags:
- condition
- infection
- fungal
- dermatology
- gynecology
- function-health
title: Candidiasis
type: condition
updated: '2026-02-08T19:29:31.594151Z'
---

# Candidiasis

## Overview
A fungal infection caused by an overgrowth of Candida species, primarily Candida albicans, affecting the skin, mucous membranes, or internal organs.

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
FROM [[Candidiasis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Candidiasis]] (condition)
```yaml
last_modified: '2026-01-19T09:30:52.137631'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Candidiasis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Candidiasis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Candidiasis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:24.588715'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.