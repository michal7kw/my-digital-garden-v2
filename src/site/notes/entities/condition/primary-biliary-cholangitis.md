---
created: '2026-02-08T19:25:12.965468Z'
description: A chronic autoimmune liver disease characterized by the slow destruction
  of the small bile ducts in the liver, leading to bile buildup and scarring.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/primary-biliary-cholangitis/
slug: primary-biliary-cholangitis
tags:
- Condition
- condition
- hepatology
- autoimmune
- function-health
title: Primary Biliary Cholangitis
type: Condition
updated: '2026-02-08T19:25:12.965468Z'
---

# Primary Biliary Cholangitis

## Overview
A chronic autoimmune liver disease characterized by the slow destruction of the small bile ducts in the liver, leading to bile buildup and scarring.

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
FROM [[Primary Biliary Cholangitis]] AND #intervention
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
- → [[Primary_Biliary_Cholangitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:37.438429'
source: obsidian
```
- → [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:37.438429'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Primary Biliary Cholangitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Primary Biliary Cholangitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Primary_Biliary_Cholangitis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:36.489490'
source: obsidian
```
- ← [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.561127'
source: obsidian
```
- → [[alkaline_phosphatase_alp]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:36.489490'
source: obsidian
```
- → [[Primary_Biliary_Cholangitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:36.489490'
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