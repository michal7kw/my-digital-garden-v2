---
created: '2026-02-08T19:45:44.475034Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/fever/
slug: fever
tags:
- condition
title: Fever
type: condition
updated: '2026-02-08T19:45:44.475034Z'
---

# Fever

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
FROM [[Fever]] AND #intervention
SORT confidence_score DESC
```

## Other Relationships
### Treats
- ← [[DEXIBUPROFEN]] (drug)
```yaml
created_at: '2025-12-16T18:56:20.196353'
max_phase: '3.0'
source: ChEMBL
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Fever]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Fever]] AND #clinical-trial
SORT date DESC
```

## References
No references available.