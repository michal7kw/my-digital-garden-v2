---
created: '2026-02-08T19:29:31.617095Z'
description: A group of rare autoimmune diseases characterized by chronic muscle inflammation
  and weakness, including polymyositis and dermatomyositis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/myositis/
slug: myositis
tags:
- condition
- rheumatology
- autoimmune
- musculoskeletal
- function-health
title: Myositis
type: condition
updated: '2026-02-08T19:29:31.617095Z'
---

# Myositis

## Overview
A group of rare autoimmune diseases characterized by chronic muscle inflammation and weakness, including polymyositis and dermatomyositis.

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
FROM [[Myositis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Myositis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:27.516749'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Myositis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Myositis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Myositis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:33.981066'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.