---
created: '2026-02-08T19:29:31.568390Z'
description: Low-density lipoprotein (LDL) cholesterol carries cholesterol to tissues.
  High levels increase cardiovascular disease risk.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/ldl/
slug: ldl
tags:
- biomarker
title: Ldl
type: biomarker
updated: '2026-02-08T19:29:31.568390Z'
---

# Ldl

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
- ← [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:53.153209'
source: obsidian
```
- ← [[lipid_panel_standard]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:19.242090'
source: obsidian
```
- ← [[ldl_cholesterol]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:17.088376'
source: obsidian
```
- ← [[advanced_lipid_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:06.527789'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
```
- → [[advanced_lipid_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
```
- → [[ldl_cholesterol]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
```
- → [[lipid_panel_standard]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:20.114995'
source: obsidian
```
- → [[lipid_panel_standard]] (entity)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```
- → [[advanced_lipid_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```
- → [[ldl_cholesterol]] (entity)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```
- → [[Ldl]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:14.497617'
source: obsidian
```

### Indicates Organ Health
- → [[Heart]] (organ)
```yaml
specificity: medium
function_indicated: Atherogenic Lipid Transport
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
- → [[Ldl]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:22.037424'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

- [[Berberine]] - Decreases LDL cholesterol (moderate effect, evidence level 4)
- [[Omega-3 Fatty Acids]] - Decreases LDL cholesterol (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[ldl cholesterol]] - Direct LDL measurement

### Panel Tests
- [[lipid panel standard]] - Standard lipid panel
- [[advanced lipid panel]] - Advanced lipid panel with LDL particle analysis

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Ldl]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```