---
created: '2026-02-08T19:45:44.433181Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/hemoglobin/
slug: hemoglobin
tags:
- biomarker
title: Hemoglobin
type: biomarker
updated: '2026-02-08T19:45:44.433181Z'
---

# Hemoglobin

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
- ← [[complete_blood_count]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:10.815417'
source: obsidian
```
- ← [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T06:48:14.856201'
source: obsidian
```
- → [[Dyspnea]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:18.975721'
source: obsidian
```
- → [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:18.975721'
source: obsidian
```
- → [[complete_blood_count]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:18.975721'
source: obsidian
```
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.512799'
source: obsidian
```
- → [[complete_blood_count]] (entity)
```yaml
last_modified: '2026-01-26T07:07:13.512799'
source: obsidian
```
- ← [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
```
- ← [[Dyspnea]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:16.835648'
source: obsidian
```
- → [[hemoglobin]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:13.512799'
source: obsidian
```
- ← [[Vitamin_B12]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:41.602027'
source: obsidian
```
- → [[Hemoglobin]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:13.512799'
source: obsidian
```

### Increases Biomarker
- ← [[Vitamin_B12]] (biomarker)
```yaml
effect_direction: increases
evidence_level: 4
last_modified: '2026-01-26T07:08:41.501218'
magnitude: moderate
magnitude_range: 1-2 g/dL
notes: Corrects megaloblastic anemia. Reticulocyte response within 1 week, hemoglobin
  normalizes over 2 months.
onset_timeframe: 4-8 weeks
population_context: B12 deficiency anemia
source: obsidian
study_references:
- PMID:23325609
```

### Indicates Organ Health
- → [[Bones]] (organ)
```yaml
specificity: high
function_indicated: Erythropoiesis
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
- → [[Vitamin_B12]] (entity)
```yaml
last_modified: '2026-01-19T09:30:18.663564'
source: obsidian
```
- → [[Hemoglobin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:18.663564'
source: obsidian
```
- ← [[Vitamin_B12]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:30.196142'
source: obsidian
```

### Increases Biomarker
- ← [[Vitamin_B12]] (biomarker)
```yaml
effect_direction: increases
evidence_level: 4
last_modified: '2026-01-19T09:07:17.506662'
magnitude: moderate
magnitude_range: 1-2 g/dL
notes: Corrects megaloblastic anemia. Reticulocyte response within 1 week, hemoglobin
  normalizes over 2 months.
onset_timeframe: 4-8 weeks
population_context: B12 deficiency anemia
source: obsidian
study_references:
- PMID:23325609
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[hemoglobin]] - Direct hemoglobin measurement

### Panel Tests
- [[complete blood count]] - Part of CBC panel

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Hemoglobin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```