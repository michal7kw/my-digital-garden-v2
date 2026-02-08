---
created: '2026-02-08T19:29:31.631306Z'
description: A family of inflammatory rheumatic diseases that cause arthritis, primarily
  affecting the spine and sacroiliac joints.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/spondyloarthropathy/
slug: spondyloarthropathy
tags:
- condition
- rheumatology
- autoimmune
- inflammation
- chronic
title: Spondyloarthropathy
type: condition
updated: '2026-02-08T19:29:31.631306Z'
---

# Spondyloarthropathy

## Overview
A family of inflammatory rheumatic diseases that cause arthritis, primarily affecting the spine and sacroiliac joints.

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
FROM [[Spondyloarthropathy]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### Related
- → [[Spondyloarthropathy]] (condition)
```yaml
last_modified: '2026-01-19T09:31:42.353904'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Spondyloarthropathy]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Spondyloarthropathy]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Spondyloarthropathy]] (condition)
```yaml
last_modified: '2026-01-26T07:07:37.707083'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.