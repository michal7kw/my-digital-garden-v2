---
created: '2026-02-08T19:45:44.426393Z'
description: Creatinine is a waste product from muscle metabolism filtered by the
  kidneys. Elevated levels indicate reduced kidney function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/creatinine/
slug: creatinine
tags:
- biomarker
title: Creatinine
type: biomarker
updated: '2026-02-08T19:45:44.426393Z'
---

# Creatinine

## Overview
No description available.

## Reference Ranges
Reference ranges not available.


## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Not specified
- **Fasting Required**: False
- **Recommended Test Frequency**: Not specified



<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- ← [[kidney_function_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:16.954326'
source: obsidian
```
- ← [[comprehensive_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:11.031900'
source: obsidian
```
- ← [[basic_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:09.217964'
source: obsidian
```
- ← [[creatinine]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:11.828388'
source: obsidian
```
- → [[basic_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:15.961023'
source: obsidian
```
- → [[Edema]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:15.961023'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:15.961023'
source: obsidian
```
- → [[kidney_function_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:15.961023'
source: obsidian
```
- → [[kidney_function_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```
- → [[Kidney_Stress_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```
- → [[basic_metabolic_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```
- ← [[Edema]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:17.447357'
source: obsidian
```
- → [[creatinine]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-26T07:07:21.071221'
source: obsidian
```
- → [[Creatinine]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.161815'
source: obsidian
```

### Requires Biomarker
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-26T07:07:21.334944'
source: obsidian
```

### Indicates Organ Health
- → [[Kidneys]] (organ)
```yaml
specificity: high
function_indicated: Glomerular Filtration
source: curated
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Influences
No known influences documented.

### Correlations
No correlations documented.

### Other Relationships
### Related
- → [[Creatinine]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:12.971686'
source: obsidian
```
- → [[Kidney_Stress_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:30:12.971686'
source: obsidian
```
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-19T09:30:40.674431'
source: obsidian
```

### Requires Biomarker
- ← [[Kidney_Stress_Pattern]] (clinicalpattern)
```yaml
last_modified: '2026-01-19T09:30:40.032727'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[creatinine]] - Direct creatinine measurement

### Panel Tests
- [[comprehensive metabolic panel]] - Part of CMP
- [[basic metabolic panel]] - Part of BMP
- [[kidney function panel]] - Part of renal function assessment

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Creatinine]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```