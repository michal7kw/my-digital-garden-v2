---
created: '2026-02-08T19:29:31.590678Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/arthralgia/
slug: arthralgia
tags:
- condition
title: Arthralgia
type: condition
updated: '2026-02-08T19:29:31.590678Z'
---

# Arthralgia

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
FROM [[Arthralgia]] AND #intervention
SORT confidence_score DESC
```

## Other Relationships
### Treats
- ← [[INDOMETHACIN]] (drug)
```yaml
created_at: '2025-12-16T18:56:07.994435'
max_phase: '4.0'
source: ChEMBL
```

### Relatedtophenotype
- → [[Pain]] (phenotype)
```yaml
imported: '2025-12-26T09:40:28.731000+00:00'
source: PrimeKG
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Arthralgia]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Arthralgia]] AND #clinical-trial
SORT date DESC
```

## References
No references available.