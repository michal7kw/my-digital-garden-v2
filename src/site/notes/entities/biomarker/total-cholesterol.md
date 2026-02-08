---
created: '2026-02-08T19:25:12.903985Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/total-cholesterol/
slug: total-cholesterol
tags:
- Biomarker
- biomarker
title: Total Cholesterol
type: Biomarker
updated: '2026-02-08T19:25:12.903985Z'
---

# Total Cholesterol

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
- → [[lipid_panel_standard]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:23.644632'
source: obsidian
```
- → [[advanced_lipid_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:23.644632'
source: obsidian
```
- → [[lipid_panel_standard]] (entity)
```yaml
last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
```
- → [[Total_Cholesterol]] (entity)
```yaml
last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
```
- → [[advanced_lipid_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
```
- → [[Total_Cholesterol]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:17.308633'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Influences
No known influences documented.

### Correlations
No correlations documented.

### Other Relationships
### Related
- → [[Total_Cholesterol]] (entity)
```yaml
last_modified: '2026-01-19T09:30:27.491036'
source: obsidian
```
- → [[Total_Cholesterol]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:27.491036'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

### Panel Tests
- [[lipid panel standard]] - Standard lipid panel (primary measurement)
- [[advanced lipid panel]] - Advanced lipid panel with additional markers

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Total Cholesterol]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```