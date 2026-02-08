---
created: '2026-02-08T19:29:31.615878Z'
description: A rare autoimmune disorder characterized by overlapping features of at
  least two other systemic autoimmune diseases, such as lupus, scleroderma, and polymyositis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/mixed-connective-tissue-disease/
slug: mixed-connective-tissue-disease
tags:
- condition
- rheumatology
- autoimmune
- immunology
- function-health
title: Mixed Connective Tissue Disease
type: condition
updated: '2026-02-08T19:29:31.615878Z'
---

# Mixed Connective Tissue Disease

## Overview
A rare autoimmune disorder characterized by overlapping features of at least two other systemic autoimmune diseases, such as lupus, scleroderma, and polymyositis.

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
FROM [[Mixed Connective Tissue Disease]] AND #intervention
SORT confidence_score DESC
```





## Other Relationships
### May Detect
- ← [[antinuclear_antibodies_ana_screen]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```

### Related
- → [[Mixed_Connective_Tissue_Disease]] (condition)
```yaml
last_modified: '2026-01-19T09:31:26.029056'
source: obsidian
```
- → [[antinuclear_antibodies_ana_screen]] (labtest)
```yaml
last_modified: '2026-01-19T09:31:26.029056'
source: obsidian
```

## Research
### Recent Studies
```dataview
LIST
FROM [[Mixed Connective Tissue Disease]] AND #research
WHERE date >= date(today) - dur(1 year)
SORT date DESC
```

### Clinical Trials
```dataview
LIST status
FROM [[Mixed Connective Tissue Disease]] AND #clinical-trial
SORT date DESC
```

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Mixed_Connective_Tissue_Disease]] (entity)
```yaml
last_modified: '2026-01-26T07:07:33.634548'
source: obsidian
```
- ← [[antinuclear_antibodies_ana_screen]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:49.893599'
source: obsidian
```
- → [[antinuclear_antibodies_ana_screen]] (labtest)
```yaml
last_modified: '2026-01-26T07:07:33.634548'
source: obsidian
```
- → [[Mixed_Connective_Tissue_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:33.634548'
source: obsidian
```

### May Detect
- ← [[antinuclear_antibodies_ana_screen]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## References
No references available.