---
created: '2026-02-08T19:25:12.891357Z'
description: High-sensitivity C-reactive protein is a marker of systemic inflammation.
  Elevated levels are associated with cardiovascular disease risk.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/hs-crp/
slug: hs-crp
tags:
- Biomarker
- biomarker
title: Hs Crp
type: Biomarker
updated: '2026-02-08T19:25:12.891357Z'
---

# Hs Crp

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
- → [[hs_crp]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
```
- → [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
```
- → [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
```
- → [[hs_crp]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- → [[Hs_Crp]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- → [[high_sensitivity_c_reactive_protein_hs_crp]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- ← [[Arthralgia]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:14.748757'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- → [[Curcumin]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```
- → [[Hs_Crp]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
```

### Indicates Organ Health
- → [[Heart]] (organ)
```yaml
specificity: low
function_indicated: Vascular Inflammation
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
- → [[Hs_Crp]] (entity)
```yaml
last_modified: '2026-01-19T09:30:19.926715'
source: obsidian
```
- → [[Hs_Crp]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:19.926715'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Decreases hs-CRP (moderate effect, evidence level 4)
- [[Magnesium]] - Decreases hs-CRP (moderate effect, evidence level 3)
- [[Curcumin]] - Decreases hs-CRP in inflammatory conditions (moderate effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[hs crp]] - High-sensitivity C-reactive protein measurement
- [[high sensitivity c reactive protein hs crp]] - hs-CRP test

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Hs Crp]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```