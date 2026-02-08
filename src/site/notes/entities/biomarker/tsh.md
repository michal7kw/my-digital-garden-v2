---
created: '2026-02-08T19:29:31.577118Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/tsh/
slug: tsh
tags:
- biomarker
title: Tsh
type: biomarker
updated: '2026-02-08T19:29:31.577118Z'
---

# Tsh

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
- → [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:23.556962'
source: obsidian
```
- → [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:23.556962'
source: obsidian
```
- ← [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
```
- ← [[Anxiety]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:13.859142'
source: obsidian
```
- → [[Tsh]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:17.214887'
source: obsidian
```

### Indicates Organ Health
- → [[Thyroid]] (organ)
```yaml
specificity: high
function_indicated: Thyroid Regulation
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

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Tsh]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```