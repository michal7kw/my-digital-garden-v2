---
created: '2026-02-08T19:25:12.885778Z'
description: Predictive biomarker for lung and colorectal cancer. Measures EGFR protein
  expression (IHC) or gene mutations (PCR/NGS).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/egfr-status/
slug: egfr-status
tags:
- Biomarker
- biomarker
- cancer
- predictive
- pharmacogenomics
- imported
- primekg
title: EGFR Status
type: Biomarker
updated: '2026-02-08T19:25:12.885778Z'
---

# EGFR Status

## Overview
Predictive biomarker for lung and colorectal cancer. Measures EGFR protein expression (IHC) or gene mutations (PCR/NGS).

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
- → [[Lung_Cancer]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[Gefitinib]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[Osimertinib]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[Erlotinib]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[Colorectal_Cancer]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[Cetuximab]] (entity)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
- → [[EGFR]] (biomarker)
```yaml
last_modified: '2026-01-25T21:21:10.951119'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

No lab tests linked yet. Add biomarker measurements in the respective lab test notes.

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[EGFR Status]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```