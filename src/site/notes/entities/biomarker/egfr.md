---
created: '2026-02-08T19:29:31.562086Z'
description: Receptor tyrosine kinase that regulates cell growth, survival, and differentiation.
  A major target for cancer therapies (TKIs).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/egfr/
slug: egfr
tags:
- biomarker
title: EGFR
type: biomarker
updated: '2026-02-08T19:29:31.562086Z'
---

# Egfr

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
- ← [[AKT1]] (protein)
```yaml
last_modified: '2026-01-26T06:48:58.404292'
source: obsidian
```
- ← [[Glioblastoma]] (condition)
```yaml
last_modified: '2026-01-26T06:47:39.447169'
source: obsidian
```
- → [[Egfr]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.969487'
source: obsidian
```
- → [[Colorectal_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[EGFR_Status]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[Lung_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[MAPK_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[EGFR_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[Gefitinib]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Cetuximab]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[EGF]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[KRAS]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[TGF-alpha]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[EGFR_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[MAPK_Signaling_Pathway]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Colorectal_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Erlotinib]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[Lung_Cancer]] (entity)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- ← [[SRC]] (protein)
```yaml
last_modified: '2026-01-26T07:08:33.887168'
source: obsidian
```
- → [[Glioblastoma]] (condition)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- → [[AKT1]] (protein)
```yaml
last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
```
- ← [[EGFR_Status]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
```
- ← [[UBC]] (protein)
```yaml
last_modified: '2026-01-26T07:08:34.416393'
source: obsidian
```
- → [[UBC]] (protein)
```yaml
last_modified: '2026-01-26T06:47:17.003644'
source: obsidian
```
- → [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:46.410223'
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

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Egfr]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```