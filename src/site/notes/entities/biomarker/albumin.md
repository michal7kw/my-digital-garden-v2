---
created: '2026-02-08T19:29:31.554205Z'
description: The most abundant protein in the blood, produced by the liver. Maintains
  fluid balance and transports nutrients, hormones, and drugs through the bloodstream.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/albumin/
slug: albumin
tags:
- biomarker
title: Albumin
type: biomarker
updated: '2026-02-08T19:29:31.554205Z'
---

# Albumin

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
- ← [[liver_function_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:19.480389'
source: obsidian
```
- ← [[comprehensive_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:11.031900'
source: obsidian
```
- ← [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:07.123823'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
```
- → [[liver_function_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
```
- → [[Edema]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
```
- → [[liver_function_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:13.652856'
source: obsidian
```
- ← [[Edema]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:17.447357'
source: obsidian
```
- → [[albumin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
```
- → [[Albumin]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:09.703173'
source: obsidian
```

### Indicates Organ Health
- → [[Liver]] (organ)
```yaml
specificity: high
function_indicated: Protein Synthesis
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
- → [[Albumin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:08.882759'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[albumin]] - Direct albumin measurement

### Panel Tests
- [[comprehensive metabolic panel]] - Part of standard CMP
- [[liver function panel]] - Part of liver function assessment

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Albumin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```