---
created: '2026-02-08T19:25:12.887843Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/free-t4/
slug: free-t4
tags:
- Biomarker
- biomarker
title: Free T4
type: Biomarker
updated: '2026-02-08T19:25:12.887843Z'
---

# Free T4

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
- → [[thyroid_dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
```
- → [[Free_T4]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-25T20:32:12.713341'
source: obsidian
```
- → [[Free_T4]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.510643'
source: obsidian
```

### Requires Biomarker
- ← [[Thyroid_Dysfunction]] (condition)
```yaml
last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
```

### Indicates Organ Health
- → [[Thyroid]] (organ)
```yaml
specificity: high
function_indicated: Thyroid Hormone Production
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
- → [[Free_T4]] (entity)
```yaml
last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
```
- → [[Free_T4]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
```
- → [[Thyroid_Dysfunction]] (entity)
```yaml
last_modified: '2026-01-19T09:30:16.567866'
source: obsidian
```

### Requires Biomarker
- ← [[thyroid_dysfunction]] (condition)
```yaml
last_modified: '2026-01-19T09:30:43.393690'
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
FROM [[Free T4]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```