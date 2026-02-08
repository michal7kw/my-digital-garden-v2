---
created: '2026-02-08T19:29:31.563107Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/folate/
slug: folate
tags:
- biomarker
title: Folate
type: biomarker
updated: '2026-02-08T19:29:31.563107Z'
---

# Folate

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
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Vitamin_B6]] (entity)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Blood]] (organ)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Homocysteine]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Dopamine]] (neurotransmitter)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Serotonin]] (neurotransmitter)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Brain]] (organ)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Methylfolate]] (metabolite)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
```
- → [[Folate]] (supplement)
```yaml
last_modified: '2026-01-26T07:07:12.310574'
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
- → [[Homocysteine]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Methylfolate]] (metabolite)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Dopamine]] (neurotransmitter)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Serotonin]] (neurotransmitter)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Blood]] (organ)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Brain]] (organ)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Vitamin_B6]] (entity)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
```
- → [[Folate]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:15.621784'
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
FROM [[Folate]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```