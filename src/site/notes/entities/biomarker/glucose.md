---
created: '2026-02-08T19:29:31.564324Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glucose/
slug: glucose
tags:
- biomarker
title: Glucose
type: biomarker
updated: '2026-02-08T19:29:31.564324Z'
---

# Glucose

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
- ← [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-26T07:07:27.090852'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-26T07:07:12.943509'
source: obsidian
```
- → [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.943509'
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
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-19T09:30:17.188234'
source: obsidian
```
- → [[Glucose]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.188234'
source: obsidian
```
- ← [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-19T09:31:03.553962'
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
FROM [[Glucose]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```