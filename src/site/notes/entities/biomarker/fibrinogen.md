---
created: '2026-02-08T19:25:12.887273Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/fibrinogen/
slug: fibrinogen
tags:
- Biomarker
- biomarker
title: Fibrinogen
type: Biomarker
updated: '2026-02-08T19:25:12.887273Z'
---

# Fibrinogen

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
- → [[Vascular_Dementia]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.411131'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.212593'
source: obsidian
```
- ← [[Vascular_Dementia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:38.779185'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
```
- → [[Fibrinogen]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.212593'
source: obsidian
```

### Requires Biomarker
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.520330'
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
- → [[Fibrinogen]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:15.318329'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-19T09:30:15.318329'
source: obsidian
```
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
```

### Requires Biomarker
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:37.999694'
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
FROM [[Fibrinogen]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```