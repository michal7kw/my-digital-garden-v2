---
created: '2026-02-08T19:29:31.621340Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/pain/
slug: pain
tags:
- condition
title: Pain
type: condition
updated: '2026-02-08T19:29:31.621340Z'
---

# Pain

## Overview
No description available.

## Clinical Presentation
### Symptoms
Not specified.

## Diagnostic Information

## Risk Factors

## Management

### Interventions
```dataview
TABLE 
    effectiveness AS "Effectiveness",
    confidence_score AS "Confidence"
FROM [[Pain]] AND #intervention
SORT confidence_score DESC
```

## Other Relationships
### Treats
- ← [[DEXIBUPROFEN]] (drug)
```yaml
created_at: '2025-12-16T18:56:20.175542'
max_phase: '2.0'
source: ChEMBL
```
- ← [[IBUPROFEN_SODIUM]] (drug)
```yaml
created_at: '2025-12-16T18:56:21.383516'
max_phase: '3.0'
source: ChEMBL
```

### Relatedtophenotype
- → [[Abdominal_pain]] (phenotype)
```yaml
imported: '2025-12-26T09:40:26.410000+00:00'
source: PrimeKG
```
- ← [[Abdominal_pain]] (phenotype)
```yaml
imported: '2025-12-26T09:40:26.430000+00:00'
source: PrimeKG
```
- → [[Arthralgia]] (phenotype)
```yaml
imported: '2025-12-26T09:40:30.172000+00:00'
source: PrimeKG
```
- ← [[Arthralgia]] (phenotype)
```yaml
imported: '2025-12-26T09:40:30.190000+00:00'
source: PrimeKG
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Pain]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Pain]] AND #clinical-trial
SORT date DESC
```

## References
No references available.