---
created: '2026-02-08T19:45:44.482262Z'
description: A chronic, non-infectious condition causing bladder pressure, bladder
  pain, and sometimes pelvic pain, also known as bladder pain syndrome.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/interstitial-cystitis/
slug: interstitial-cystitis
tags:
- condition
- urology
- chronic_pain
- function-health
title: Interstitial Cystitis
type: condition
updated: '2026-02-08T19:45:44.482262Z'
---

# Interstitial Cystitis

## Overview
A chronic, non-infectious condition causing bladder pressure, bladder pain, and sometimes pelvic pain, also known as bladder pain syndrome.

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
FROM [[Interstitial Cystitis]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[leukocyte_esterase_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[leukocyte_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Interstitial_Cystitis]] (condition)
```yaml
last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
```
- → [[leukocyte_esterase_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
```
- → [[leukocyte_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Interstitial Cystitis]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Interstitial Cystitis]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Interstitial_Cystitis]] (entity)
```yaml
last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
```
- ← [[leukocyte_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.078688'
source: obsidian
```
- ← [[leukocyte_esterase_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:55.960613'
source: obsidian
```
- → [[Interstitial_Cystitis]] (condition)
```yaml
last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
```
- → [[leukocyte_esterase_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
```
- → [[leukocyte_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
```

### May Detect
- ← [[leukocyte_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[leukocyte_esterase_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.