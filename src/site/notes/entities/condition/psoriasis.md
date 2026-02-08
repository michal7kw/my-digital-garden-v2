---
created: '2026-02-08T19:29:31.626872Z'
description: A chronic autoimmune disease that speeds up the growth cycle of skin
  cells, causing patches of thick, red skin and silvery scales.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/psoriasis/
slug: psoriasis
tags:
- condition
- dermatology
- autoimmune
- inflammation
- chronic
title: Psoriasis
type: condition
updated: '2026-02-08T19:29:31.626872Z'
---

# Psoriasis

## Overview
A chronic autoimmune disease that speeds up the growth cycle of skin cells, causing patches of thick, red skin and silvery scales.

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
FROM [[Psoriasis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Psoriasis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:38.065994'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Psoriasis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Psoriasis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Psoriasis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.727953'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.