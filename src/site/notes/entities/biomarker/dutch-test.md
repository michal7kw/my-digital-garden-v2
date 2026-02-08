---
created: '2026-02-08T19:25:12.884362Z'
description: Dried Urine Test for Comprehensive Hormones, providing a detailed look
  at sex hormones, adrenal function (cortisol), and their metabolites.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/dutch-test/
slug: dutch-test
tags:
- Biomarker
- biomarker
- labtest
- endocrine
- hormonal_health
title: DUTCH Test
type: Biomarker
updated: '2026-02-08T19:25:12.884362Z'
---

# DUTCH Test

## Overview
Dried Urine Test for Comprehensive Hormones, providing a detailed look at sex hormones, adrenal function (cortisol), and their metabolites.

## Reference Ranges
Reference ranges not available.


## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Dried Urine (and sometimes Saliva)
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually or for mapping specific hormonal issues

## Interpretation Guidelines
- Measures 24-hour free cortisol pattern.
- Measures cortisol metabolites (Total Cortisol Production/Clearance).
- Measures Estrogen metabolism (2-OH, 4-OH, 16-OH pathways).
- Measures Methylation capacity (via 2-Methoxyestrone).


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[DUTCH_Test]] (entity)
```yaml
last_modified: '2026-01-26T07:07:11.561833'
source: obsidian
```
- → [[DUTCH_Test]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:11.561833'
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
- → [[DUTCH_Test]] (entity)
```yaml
last_modified: '2026-01-19T09:30:14.112652'
source: obsidian
```
- → [[DUTCH_Test]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:14.112652'
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
FROM [[DUTCH Test]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```