---
created: '2026-02-08T19:45:44.432169Z'
description: An advanced epigenetic clock that uses DNA methylation patterns to predict
  mortality and biological age.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/grimage/
slug: grimage
tags:
- biomarker
- longevity
- epigenetics
- biological_age
title: GrimAge
type: biomarker
updated: '2026-02-08T19:45:44.432169Z'
---

# GrimAge

## Overview
An advanced epigenetic clock that uses DNA methylation patterns to predict mortality and biological age.

## Reference Ranges
Reference ranges not available.

## Optimal Ranges
```yaml
'{"optimal": "< Chronological Age"}'
```

## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Blood
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually or bi-annually

## Interpretation Guidelines
- GrimAge acceleration (GrimAge - Chronological Age) > 0 indicates faster biological aging.
- GrimAge acceleration < 0 indicates slower biological aging (longevity benefit).


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[GrimAge]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.080197'
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
- → [[GrimAge]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.727242'
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
FROM [[GrimAge]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```