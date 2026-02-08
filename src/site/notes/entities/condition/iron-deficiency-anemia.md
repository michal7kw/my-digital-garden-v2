---
created: '2026-02-08T19:29:31.609960Z'
description: A common type of anemia that occurs when the body does not have enough
  iron to produce hemoglobin, the protein in red blood cells that carries oxygen.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/iron-deficiency-anemia/
slug: iron-deficiency-anemia
tags:
- condition
- hematology
- nutrition
- mineral
- function-health
title: Iron Deficiency Anemia
type: condition
updated: '2026-02-08T19:29:31.609960Z'
---

# Iron Deficiency Anemia

## Overview
A common type of anemia that occurs when the body does not have enough iron to produce hemoglobin, the protein in red blood cells that carries oxygen.

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
FROM [[Iron Deficiency Anemia]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[hematocrit]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hemoglobin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_hemoglobin_mch]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_volume_mcv]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[platelet_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[red_cell_distribution_width_rdw]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Increases Risk For
- ← [[Iron_Deficiency_Pattern]] (condition)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

### Related
- → [[Iron_Deficiency_Anemia]] (condition)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_mch]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[mean_corpuscular_volume_mcv]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[red_cell_distribution_width_rdw]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:31:16.043448'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Iron Deficiency Anemia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Iron Deficiency Anemia]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Iron_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T06:47:42.532749'
source: obsidian
```
- → [[Iron_Deficiency_Anemia]] (entity)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- ← [[red_cell_distribution_width_rdw]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:59.426098'
source: obsidian
```
- ← [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:58.738195'
source: obsidian
```
- ← [[mean_corpuscular_volume_mcv]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.098298'
source: obsidian
```
- ← [[mean_corpuscular_hemoglobin_mch]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:57.014948'
source: obsidian
```
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:56.923847'
source: obsidian
```
- ← [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:54.024958'
source: obsidian
```
- ← [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:53.812807'
source: obsidian
```
- → [[platelet_count]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[red_cell_distribution_width_rdw]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[mean_corpuscular_volume_mcv]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[mean_corpuscular_hemoglobin_mch]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[hematocrit]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```
- → [[Iron_Deficiency_Anemia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:30.669493'
source: obsidian
```

### Increases Risk For
- ← [[Iron_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
```

### May Detect
- ← [[red_cell_distribution_width_rdw]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[platelet_count]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_volume_mcv]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_hemoglobin_concentration_mchc]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[mean_corpuscular_hemoglobin_mch]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hemoglobin]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
- ← [[hematocrit]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.