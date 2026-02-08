---
created: '2026-02-08T19:45:44.432785Z'
description: High-density lipoprotein (HDL) cholesterol transports cholesterol away
  from arteries. Higher levels are protective against cardiovascular disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/hdl/
slug: hdl
tags:
- biomarker
title: Hdl
type: biomarker
updated: '2026-02-08T19:45:44.432785Z'
---

# Hdl

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
- ← [[hdl_cholesterol]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:13.995576'
source: obsidian
```
- ← [[advanced_lipid_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:06.527789'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-26T06:47:18.760722'
source: obsidian
```
- → [[lipid_panel_standard]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.760722'
source: obsidian
```
- → [[advanced_lipid_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.760722'
source: obsidian
```
- → [[hdl_cholesterol]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.760722'
source: obsidian
```
- → [[advanced_lipid_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.379048'
source: obsidian
```
- → [[lipid_panel_standard]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.379048'
source: obsidian
```
- → [[hdl_cholesterol]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.379048'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.379048'
source: obsidian
```
- → [[Hdl]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.379048'
source: obsidian
```

### Indicates Organ Health
- → [[Heart]] (organ)
```yaml
specificity: medium
function_indicated: Reverse Cholesterol Transport
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
- → [[Hdl]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:18.202911'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Increases HDL cholesterol (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[hdl cholesterol]] - Direct HDL measurement

### Panel Tests
- [[lipid panel standard]] - Standard lipid panel
- [[advanced lipid panel]] - Advanced lipid panel with HDL particle analysis

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Hdl]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```