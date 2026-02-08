---
created: '2026-02-08T19:45:44.429676Z'
description: Ferritin is the main iron storage protein. Low levels indicate iron deficiency;
  high levels may indicate iron overload, inflammation, or liver disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/ferritin/
slug: ferritin
tags:
- biomarker
title: Ferritin
type: biomarker
updated: '2026-02-08T19:45:44.429676Z'
---

# Ferritin

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
- ← [[iron_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:16.231051'
source: obsidian
```
- ← [[ferritin]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:12.778690'
source: obsidian
```
- → [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
```
- → [[iron_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
```
- → [[Iron_Deficiency]] (entity)
```yaml
last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
```
- → [[iron_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
```
- ← [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
```
- → [[ferritin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
```
- ← [[Iron_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
```
- → [[Ferritin]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
```

### Requires Biomarker
- ← [[Iron_Deficiency]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
```

### Indicates Organ Health
- → [[Liver]] (organ)
```yaml
specificity: high
function_indicated: Iron Storage
source: curated
```
- → [[Bones]] (organ)
```yaml
specificity: high
function_indicated: Iron Storage / Erythropoiesis
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
- → [[Ferritin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:15.116371'
source: obsidian
```
- → [[Iron_Deficiency_Pattern]] (entity)
```yaml
last_modified: '2026-01-19T09:30:15.116371'
source: obsidian
```
- ← [[Iron_Deficiency_Pattern]] (condition)
```yaml
last_modified: '2026-01-19T09:31:16.661054'
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

### Direct Tests
- [[ferritin]] - Direct ferritin measurement

### Panel Tests
- [[iron panel]] - Part of iron studies panel

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Ferritin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```