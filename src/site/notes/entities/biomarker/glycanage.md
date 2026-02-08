---
created: '2026-02-08T19:45:44.431930Z'
description: A biomarker test that measures biological age through the analysis of
  IgG glycosylation patterns, indicating levels of chronic inflammation.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glycanage/
slug: glycanage
tags:
- biomarker
- longevity
- inflammation
- immune_system
title: GlycanAge
type: biomarker
updated: '2026-02-08T19:45:44.431930Z'
---

# GlycanAge

## Overview
A biomarker test that measures biological age through the analysis of IgG glycosylation patterns, indicating levels of chronic inflammation.

## Reference Ranges
Reference ranges not available.


## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Blood (Dry Blood Spot or Venous)
- **Fasting Required**: False
- **Recommended Test Frequency**: Every 6-12 months

## Interpretation Guidelines
- Higher GlycanAge indicates higher levels of 'inflammaging'.
- Sensitive to short-term lifestyle changes (3-6 months).


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[GlycanAge]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.003067'
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
- → [[GlycanAge]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.564820'
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
FROM [[GlycanAge]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```