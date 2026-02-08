---
created: '2026-02-08T19:45:44.458304Z'
description: A group of disorders occurring when the adrenal glands produce too much
  or too little of essential hormones, such as cortisol and aldosterone.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/adrenal-disease/
slug: adrenal-disease
tags:
- condition
- endocrinology
- hormones
- function-health
title: Adrenal Disease
type: condition
updated: '2026-02-08T19:45:44.458304Z'
---

# Adrenal Disease

## Overview
A group of disorders occurring when the adrenal glands produce too much or too little of essential hormones, such as cortisol and aldosterone.

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
FROM [[Adrenal Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[chloride]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Adrenal_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:30:46.180646'
source: obsidian
```
- → [[chloride]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:46.180646'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Adrenal Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Adrenal Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Adrenal_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
```
- ← [[chloride]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:51.345636'
source: obsidian
```
- → [[Adrenal_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
```
- → [[chloride]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
```

### May Detect
- ← [[chloride]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.