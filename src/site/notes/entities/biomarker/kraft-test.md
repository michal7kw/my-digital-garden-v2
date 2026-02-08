---
created: '2026-02-08T19:25:12.892514Z'
description: An oral glucose tolerance test with serial insulin measurements (GTIR),
  used to detect early-stage insulin resistance and occult diabetes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/kraft-test/
slug: kraft-test
tags:
- Biomarker
- biomarker
- labtest
- metabolic
- insulin_resistance
title: Kraft Test
type: Biomarker
updated: '2026-02-08T19:25:12.892514Z'
---

# Kraft Test

## Overview
An oral glucose tolerance test with serial insulin measurements (GTIR), used to detect early-stage insulin resistance and occult diabetes.

## Reference Ranges
Reference ranges not available.


## Testing Information
- **Measurement Unit**: Not specified
- **Sample Type**: Blood
- **Fasting Required**: True
- **Recommended Test Frequency**: Once to establish baseline or monitor IR reversal

## Interpretation Guidelines
- Pattern I: Normal (Low fasting, peak at 30-60 min, return to baseline by 3h).
- Pattern II: IGT (Delayed or elevated peak, slow return).
- Pattern III: Occult Diabetes (High insulin peak extending to 2-3h).
- Pattern IV: Hyperinsulinemic Fasting (Elevated fasting insulin).
- Pattern V: Insulinopenia (Low insulin production).


<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Kraft_Test]] (entity)
```yaml
last_modified: '2026-01-26T07:07:14.243375'
source: obsidian
```
- → [[Kraft_Test]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:14.243375'
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
- → [[Kraft_Test]] (entity)
```yaml
last_modified: '2026-01-19T09:30:21.570072'
source: obsidian
```
- → [[Kraft_Test]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:21.570072'
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
FROM [[Kraft Test]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```