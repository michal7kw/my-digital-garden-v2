---
created: '2026-02-08T19:25:12.935605Z'
description: Liver damage caused by medications, herbal products, or other xenobiotics,
  which can range from mild enzyme elevations to acute liver failure.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/drug-induced-liver-injury/
slug: drug-induced-liver-injury
tags:
- Condition
- condition
- hepatology
- toxicology
- function-health
title: Drug-Induced Liver Injury
type: Condition
updated: '2026-02-08T19:25:12.935605Z'
---

# Drug-Induced Liver Injury

## Overview
Liver damage caused by medications, herbal products, or other xenobiotics, which can range from mild enzyme elevations to acute liver failure.

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
FROM [[Drug-Induced Liver Injury]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[bilirubin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Drug-Induced_Liver_Injury]] (condition)
```yaml
last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
```
- → [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
```
- → [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Drug-Induced Liver Injury]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Drug-Induced Liver Injury]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Drug-Induced_Liver_Injury]] (entity)
```yaml
last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
```
- ← [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:53.061334'
source: obsidian
```
- ← [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.709630'
source: obsidian
```
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.215543'
source: obsidian
```
- → [[bilirubin_urine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
```
- → [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
```
- → [[Drug-Induced_Liver_Injury]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
```

### May Detect
- ← [[bilirubin_urine]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.