---
created: '2026-02-08T19:25:12.919134Z'
description: A spectrum of liver damage resulting from excessive alcohol consumption,
  ranging from fatty liver to cirrhosis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/alcohol-related-liver-injury/
slug: alcohol-related-liver-injury
tags:
- Condition
- condition
- hepatology
- gastroenterology
- addiction
- function-health
title: Alcohol-Related Liver Injury
type: Condition
updated: '2026-02-08T19:25:12.919134Z'
---

# Alcohol-Related Liver Injury

## Overview
A spectrum of liver damage resulting from excessive alcohol consumption, ranging from fatty liver to cirrhosis.

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
FROM [[Alcohol-Related Liver Injury]] AND #intervention
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
- ← [[aspartate_aminotransferase_ast]] (labtest)
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

### Related
- → [[Alcohol-Related_Liver_Injury]] (condition)
```yaml
last_modified: '2026-01-19T09:30:46.499532'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:46.499532'
source: obsidian
```
- → [[aspartate_aminotransferase_ast]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:46.499532'
source: obsidian
```
- → [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-19T09:30:46.499532'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Alcohol-Related Liver Injury]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Alcohol-Related Liver Injury]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Alcohol-Related_Liver_Injury]] (entity)
```yaml
last_modified: '2026-01-26T07:07:22.914283'
source: obsidian
```
- ← [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:53.061334'
source: obsidian
```
- ← [[aspartate_aminotransferase_ast]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:50.445548'
source: obsidian
```
- ← [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.215543'
source: obsidian
```
- → [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:22.914283'
source: obsidian
```
- → [[aspartate_aminotransferase_ast]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:22.914283'
source: obsidian
```
- → [[alanine_transaminase_alt]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:22.914283'
source: obsidian
```
- → [[Alcohol-Related_Liver_Injury]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.914283'
source: obsidian
```

### May Detect
- ← [[gamma_glutamyl_transferase_ggt]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[aspartate_aminotransferase_ast]] (labtest)
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