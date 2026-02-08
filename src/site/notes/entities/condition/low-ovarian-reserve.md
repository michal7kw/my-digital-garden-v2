---
created: '2026-02-08T19:29:31.612524Z'
description: A condition where a woman has a lower number of eggs remaining in her
  ovaries than expected for her age, which can impact fertility.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/low-ovarian-reserve/
slug: low-ovarian-reserve
tags:
- condition
- gynecology
- reproductive_health
- function-health
title: Low Ovarian Reserve
type: condition
updated: '2026-02-08T19:29:31.612524Z'
---

# Low Ovarian Reserve

## Overview
A condition where a woman has a lower number of eggs remaining in her ovaries than expected for her age, which can impact fertility.

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
FROM [[Low Ovarian Reserve]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[anti_mullerian_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Low_Ovarian_Reserve]] (condition)
```yaml
last_modified: '2026-01-19T09:31:19.445067'
source: obsidian
```
- → [[anti_mullerian_hormone]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:19.445067'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Low Ovarian Reserve]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Low Ovarian Reserve]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Low_Ovarian_Reserve]] (entity)
```yaml
last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
```
- ← [[anti_mullerian_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.785719'
source: obsidian
```
- → [[Low_Ovarian_Reserve]] (condition)
```yaml
last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
```
- → [[anti_mullerian_hormone]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
```

### May Detect
- ← [[anti_mullerian_hormone]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.