---
created: '2026-02-08T19:25:12.882037Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/calcium/
slug: calcium
tags:
- Biomarker
- biomarker
title: Calcium
type: Biomarker
updated: '2026-02-08T19:25:12.882037Z'
---

# Calcium

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
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-26T07:07:10.766631'
source: obsidian
```
- ← [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:42.690925'
source: obsidian
```
- → [[Calcium]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:10.766631'
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
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-19T09:30:11.335702'
source: obsidian
```
- → [[Calcium]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:11.335702'
source: obsidian
```
- ← [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2026-01-19T09:07:22.084024'
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
FROM [[Calcium]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```