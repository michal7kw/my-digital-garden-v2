---
created: '2026-02-08T19:29:31.578631Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/transferrin-saturation/
slug: transferrin-saturation
tags:
- biomarker
title: Transferrin Saturation
type: biomarker
updated: '2026-02-08T19:29:31.578631Z'
---

# Transferrin Saturation

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
- → [[Iron_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.301328'
source: obsidian
```
- → [[Transferrin_Saturation]] (entity)
```yaml
last_modified: '2026-01-26T07:07:17.855874'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:17.855874'
source: obsidian
```
- → [[Transferrin_Saturation]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:17.855874'
source: obsidian
```

### Requires Biomarker
- ← [[Iron_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.890940'
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
- → [[Transferrin_Saturation]] (entity)
```yaml
last_modified: '2026-01-19T09:30:28.599453'
source: obsidian
```
- → [[Transferrin_Saturation]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:28.599453'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:30:28.599453'
source: obsidian
```

### Requires Biomarker
- ← [[Iron_Deficiency_Pattern]] (condition)
```yaml
last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Transferrin Saturation]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```