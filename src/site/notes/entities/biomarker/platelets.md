---
created: '2026-02-08T19:29:31.574190Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/platelets/
slug: platelets
tags:
- biomarker
title: Platelets
type: biomarker
updated: '2026-02-08T19:29:31.574190Z'
---

# Platelets

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
- → [[Platelets]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.419776'
source: obsidian
```

### Indicates Organ Health
- → [[Bones]] (organ)
```yaml
specificity: high
function_indicated: Megakaryopoiesis
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
- → [[Platelets]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:24.516868'
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
FROM [[Platelets]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```