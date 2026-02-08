---
created: '2026-02-08T19:29:31.580225Z'
description: Fat-soluble secosteroid hormone critical for calcium absorption, bone
  health, immune function, and numerous other physiological processes. Synthesized
  in skin upon sun exposure or obtained through supplementation.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/vitamin-d/
slug: vitamin-d
tags:
- biomarker
title: Vitamin D
type: biomarker
updated: '2026-02-08T19:29:31.580225Z'
---

# Vitamin D

## Overview
Fat-soluble secosteroid hormone critical for calcium absorption, bone health, immune function, and numerous other physiological processes. Synthesized in skin upon sun exposure or obtained through supplementation.

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
- → [[vitamin_d_25-hydroxy]] (entity)
```yaml
last_modified: '2026-01-26T06:47:25.252921'
source: obsidian
```
- → [[Omega-3_DHA]] (entity)
```yaml
last_modified: '2026-01-26T06:47:25.252921'
source: obsidian
```
- → [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T06:47:25.252921'
source: obsidian
```
- → [[Thyroid_Hormones]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[PTH]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Serum_Calcium]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Fasting_Glucose]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Metabolic_Syndrome]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[25-Hydroxyvitamin_D]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[biomarker_log]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Immune_System]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[hs-CRP]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[vitamin_d_25-hydroxy]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- ← [[Omega-3_DHA]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:39.685849'
source: obsidian
```
- ← [[Fatigue]] (phenotype)
```yaml
last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
```
- → [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:18.697116'
source: obsidian
```
- → [[Insulin]] (biomarker)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Skin]] (organ)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Muscles]] (organ)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-26T07:08:42.448102'
source: obsidian
```

### Modulates Biomarker
- → [[Fasting_Glucose]] (entity)
```yaml
effect_direction: modulates
evidence_level: 3
last_modified: '2026-01-26T07:08:42.310187'
magnitude: mild
magnitude_range: 2-5 mg/dL
notes: Improves insulin sensitivity via VDR-mediated effects on pancreatic beta cells.
onset_timeframe: 12 weeks
population_context: insulin resistant
source: obsidian
study_references:
- PMID:24047810
- PMID:26431773
```

### Decreases Biomarker
- → [[PTH]] (entity)
```yaml
effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-26T07:08:42.310187'
magnitude: moderate
magnitude_range: 10-30% reduction
notes: Inverse relationship with 25(OH)D. Normalizes elevated PTH in deficiency.
onset_timeframe: 8-12 weeks
population_context: vitamin D insufficient
source: obsidian
study_references:
- PMID:17634462
- PMID:21118827
```
- → [[hs-CRP]] (entity)
```yaml
effect_direction: decreases
evidence_level: 3
last_modified: '2026-01-26T07:08:42.310187'
magnitude: mild
magnitude_range: 0.3-0.5 mg/L
notes: Anti-inflammatory effects through NF-kB pathway. More pronounced in deficient
  individuals.
onset_timeframe: 8-12 weeks
population_context: elevated inflammation
source: obsidian
study_references:
- PMID:25631715
- PMID:29215416
```

### Increases Biomarker
- → [[25-Hydroxyvitamin_D]] (entity)
```yaml
effect_direction: increases
evidence_level: 5
last_modified: '2026-01-26T07:08:42.310187'
magnitude: strong
magnitude_range: 10-30 ng/mL increase
notes: Direct supplementation of the measured biomarker. Dose-response relationship
  well established.
onset_timeframe: 4-8 weeks
population_context: general
source: obsidian
study_references:
- PMID:17634462
- PMID:21646368
```
- → [[Serum_Calcium]] (entity)
```yaml
effect_direction: increases
evidence_level: 4
last_modified: '2026-01-26T07:08:42.310187'
magnitude: mild
magnitude_range: 0.1-0.3 mg/dL
notes: Enhances intestinal calcium absorption. Effect most notable in deficiency states.
onset_timeframe: 4-8 weeks
population_context: deficient
source: obsidian
study_references:
- PMID:17634462
```

### Improved By Supplement
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
```

### Synergistic With
- → [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.208162'
source: obsidian
```
- → [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.182031'
source: obsidian
```

### May Improve Condition
- → [[Diabetes]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
```
- → [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.076731'
source: obsidian
```
- → [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.052889'
source: obsidian
```

### Affects Organ
- → [[Muscles]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.827160'
source: obsidian
```
- → [[Immune_System]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.801524'
source: obsidian
```
- → [[Skin]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.775939'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.751825'
source: obsidian
```

### Requires Cofactor
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.154588'
source: obsidian
```

### Modulates Hormone
- → [[Thyroid_Hormones]] (hormone)
```yaml
last_modified: '2025-12-28T11:01:27.882177'
source: obsidian
```
- → [[Insulin]] (biomarker)
```yaml
last_modified: '2025-12-28T11:01:27.851922'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Influences
No known influences documented.

### Correlations
No correlations documented.

### Other Relationships
### Has Biomarker
- ← [[biomarker_log]] (entity)
```yaml
date_recorded: '2025-08-20'
isPersonal: true
last_modified: '2026-01-19T08:42:06.076276'
source: obsidian
status: Optimal
unit: ng/mL
value: '45'
```

### Affects Organ
- → [[Bones]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.751825'
source: obsidian
```
- → [[Skin]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.775939'
source: obsidian
```
- → [[Immune_System]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.801524'
source: obsidian
```
- → [[Muscles]] (organ)
```yaml
last_modified: '2025-12-28T11:01:27.827160'
source: obsidian
```

### Modulates Hormone
- → [[Insulin]] (biomarker)
```yaml
last_modified: '2025-12-28T11:01:27.851922'
source: obsidian
```
- → [[Thyroid_Hormones]] (hormone)
```yaml
last_modified: '2025-12-28T11:01:27.882177'
source: obsidian
```

### May Improve Condition
- → [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.052889'
source: obsidian
```
- → [[Metabolic_Syndrome]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.076731'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2025-12-28T11:01:28.103508'
source: obsidian
```

### Requires Cofactor
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.154588'
source: obsidian
```

### Synergistic With
- → [[Vitamin_K2]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.182031'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (supplement)
```yaml
last_modified: '2025-12-28T11:01:28.208162'
source: obsidian
```

### Related
- → [[Vitamin_D]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Omega-3_Fatty_Acids]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Vitamin_K2]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[biomarker_log]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Vitamin_D]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Immune_System]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Thyroid_Hormones]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Chronic_Inflammation]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Metabolic_Syndrome]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[25-Hydroxyvitamin_D]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Serum_Calcium]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[PTH]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[hs-CRP]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Fasting_Glucose]] (entity)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Diabetes]] (condition)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Muscles]] (organ)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Skin]] (organ)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Bones]] (organ)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Magnesium]] (supplement)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```
- → [[Insulin]] (biomarker)
```yaml
last_modified: '2026-01-19T09:30:31.497920'
source: obsidian
```

### Increases Biomarker
- → [[25-Hydroxyvitamin_D]] (entity)
```yaml
effect_direction: increases
evidence_level: 5
last_modified: '2026-01-19T09:07:20.742772'
magnitude: strong
magnitude_range: 10-30 ng/mL increase
notes: Direct supplementation of the measured biomarker. Dose-response relationship
  well established.
onset_timeframe: 4-8 weeks
population_context: general
source: obsidian
study_references:
- PMID:17634462
- PMID:21646368
```
- → [[Serum_Calcium]] (entity)
```yaml
effect_direction: increases
evidence_level: 4
last_modified: '2026-01-19T09:07:20.742772'
magnitude: mild
magnitude_range: 0.1-0.3 mg/dL
notes: Enhances intestinal calcium absorption. Effect most notable in deficiency states.
onset_timeframe: 4-8 weeks
population_context: deficient
source: obsidian
study_references:
- PMID:17634462
```

### Decreases Biomarker
- → [[PTH]] (entity)
```yaml
effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-19T09:07:20.742772'
magnitude: moderate
magnitude_range: 10-30% reduction
notes: Inverse relationship with 25(OH)D. Normalizes elevated PTH in deficiency.
onset_timeframe: 8-12 weeks
population_context: vitamin D insufficient
source: obsidian
study_references:
- PMID:17634462
- PMID:21118827
```
- → [[hs-CRP]] (entity)
```yaml
effect_direction: decreases
evidence_level: 3
last_modified: '2026-01-19T09:07:20.742772'
magnitude: mild
magnitude_range: 0.3-0.5 mg/L
notes: Anti-inflammatory effects through NF-kB pathway. More pronounced in deficient
  individuals.
onset_timeframe: 8-12 weeks
population_context: elevated inflammation
source: obsidian
study_references:
- PMID:25631715
- PMID:29215416
```

### Modulates Biomarker
- → [[Fasting_Glucose]] (entity)
```yaml
effect_direction: modulates
evidence_level: 3
last_modified: '2026-01-19T09:07:20.742772'
magnitude: mild
magnitude_range: 2-5 mg/dL
notes: Improves insulin sensitivity via VDR-mediated effects on pancreatic beta cells.
onset_timeframe: 12 weeks
population_context: insulin resistant
source: obsidian
study_references:
- PMID:24047810
- PMID:26431773
```

### Improved By Supplement
- ← [[Chronic_Inflammation]] (condition)
```yaml
last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
```

## 💊 Supplements That Affect This Biomarker

No supplement effects documented yet. Add effects in the respective supplement notes.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[vitamin d 25-hydroxy]] - Vitamin D (25-OH) measurement

## References
No references available.

## Dataview Queries
```dataview
LIST
FROM [[Vitamin D]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```