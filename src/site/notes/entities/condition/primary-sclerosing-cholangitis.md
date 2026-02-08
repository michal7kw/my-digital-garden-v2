---
created: '2026-02-08T19:45:44.500541Z'
description: A chronic, progressive disease of the bile ducts characterized by inflammation,
  scarring, and narrowing of the ducts both inside and outside the liver.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/primary-sclerosing-cholangitis/
slug: primary-sclerosing-cholangitis
tags:
- condition
- hepatology
- gastroenterology
- autoimmune
- function-health
title: Primary Sclerosing Cholangitis
type: condition
updated: '2026-02-08T19:45:44.500541Z'
---

# Primary Sclerosing Cholangitis

## Overview
A chronic, progressive disease of the bile ducts characterized by inflammation, scarring, and narrowing of the ducts both inside and outside the liver.

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
FROM [[Primary Sclerosing Cholangitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Primary_Sclerosing_Cholangitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:37.655705'
source: obsidian
```
- → [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:37.655705'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Primary Sclerosing Cholangitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Primary Sclerosing Cholangitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Primary_Sclerosing_Cholangitis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:36.573940'
source: obsidian
```
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.561127'
source: obsidian
```
- → [[Primary_Sclerosing_Cholangitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.573940'
source: obsidian
```
- → [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.573940'
source: obsidian
```

### May Detect
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.