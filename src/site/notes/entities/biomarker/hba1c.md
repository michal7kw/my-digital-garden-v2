---
created: '2026-02-08T19:29:31.565163Z'
description: Hemoglobin A1c (HbA1c) reflects average blood glucose over 2-3 months.
  Used to diagnose and monitor diabetes control.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/hba1c/
slug: hba1c
tags:
- biomarker
title: Hba1C
type: biomarker
updated: '2026-02-08T19:29:31.565163Z'
---

# Hba1C

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
- ← [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T06:42:51.440198'
source: obsidian
```
- ← [[hemoglobin_a1c_hba1c]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:14.650057'
source: obsidian
```
- ← [[hba1c]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:13.914575'
source: obsidian
```
- ← [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
```
- → [[hemoglobin_a1c_hba1c]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.549313'
source: obsidian
```
- → [[hemoglobin_a1c_hba1c]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
```
- → [[hba1c]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
```
- → [[Hba1C]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.190565'
source: obsidian
```

### Indicates Organ Health
- → [[Pancreas]] (organ)
```yaml
specificity: medium
function_indicated: Long-term Glucose Control
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
- → [[Hba1C]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.852736'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

- [[Berberine]] - Decreases HbA1c (moderate effect, evidence level 4)
- [[Magnesium]] - Decreases HbA1c in type 2 diabetics (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[hba1c]] - HbA1c measurement
- [[hemoglobin a1c hba1c]] - Hemoglobin A1c test

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Hba1C]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```