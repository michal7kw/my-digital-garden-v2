---
created: '2026-02-08T19:45:44.431239Z'
description: Blood glucose level after 8+ hours of fasting. Used to diagnose diabetes
  and assess metabolic health.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glucose-fasting/
slug: glucose-fasting
tags:
- biomarker
title: Glucose Fasting
type: biomarker
updated: '2026-02-08T19:45:44.431239Z'
---

# Glucose Fasting

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
- → [[fasting_glucose]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
```
- → [[basic_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.191984'
source: obsidian
```
- → [[comprehensive_metabolic_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[basic_metabolic_panel]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[fasting_glucose]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[Glucose_Fasting]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[Berberine]] (drug)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```
- → [[Glucose_Fasting]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.830920'
source: obsidian
```

### Indicates Organ Health
- → [[Pancreas]] (organ)
```yaml
specificity: medium
function_indicated: Glucose Regulation
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
- → [[Glucose_Fasting]] (entity)
```yaml
last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
```
- → [[Glucose_Fasting]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:17.407835'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

- [[Berberine]] - Decreases fasting glucose (moderate effect, evidence level 4)
- [[Magnesium]] - Modulates fasting glucose in deficient individuals

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[fasting glucose]] - Fasting glucose measurement

### Panel Tests
- [[comprehensive metabolic panel]] - Part of CMP
- [[basic metabolic panel]] - Part of BMP

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Glucose Fasting]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```