---
created: '2026-02-08T19:25:12.973143Z'
description: A life-threatening medical emergency characterized by a sudden, extreme
  overproduction of thyroid hormones, leading to a hypermetabolic state.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/thyroid-storm/
slug: thyroid-storm
tags:
- Condition
- condition
- endocrinology
- thyroid
- emergency
- acute
- function-health
title: Thyroid Storm
type: Condition
updated: '2026-02-08T19:25:12.973143Z'
---

# Thyroid Storm

## Overview

Thyroid Storm (Thyrotoxic Crisis) is the extreme end of the **Hyperthyroidism** spectrum. It is triggered by an acute stressor in a patient with underlying thyroid overactivity. Without rapid treatment, it progresses to multi-organ failure and death.

## Management

- **Antithyroid Drugs:** High-dose Propylthiouracil (PTU) or Methimazole.
- **Beta-blockers:** Propranolol to control heart rate and tremors.
- **Iodine Solutions:** To block hormone release.
- **Corticosteroids:** To block peripheral conversion of T4 to T3.

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Thyroid_Storm]] (entity)
```yaml
last_modified: '2026-01-26T06:47:53.735169'
source: obsidian
```
- ← [[thyroxine_t4_free]] (labtest)
```yaml
last_modified: '2026-01-26T07:08:00.714808'
source: obsidian
```
- → [[Thyroid_Storm]] (condition)
```yaml
last_modified: '2026-01-26T06:04:00.278308'
source: obsidian
```
- → [[thyroxine_t4_free]] (labtest)
```yaml
last_modified: '2026-01-26T06:47:53.735169'
source: obsidian
```

### May Detect
- ← [[thyroxine_t4_free]] (labtest)
```yaml
confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
```
<!-- NEO4J_CONTENT_END -->
## Relationships

ASSOCIATED_WITH_CONDITION::[[Hyperthyroidism]]
ASSOCIATED_WITH_CONDITION::[[Graves Disease]]
ASSOCIATED_WITH_CONDITION::[[Atrial Fibrillation]]
AFFECTS_ORGAN::[[Thyroid Gland]]
AFFECTS_ORGAN::[[Heart]]
AFFECTS_ORGAN::[[Brain]]
ASSOCIATED_WITH_BIOMARKER::[[Free T4]] - Markedly elevated.
ASSOCIATED_WITH_BIOMARKER::[[TSH]] - Markedly suppressed.
TREATED_BY_DRUG::[[Propylthiouracil]]
TREATED_BY_DRUG::[[Propranolol]]

## References

- Nayak, B., & Burman, K. (2006). Thyrotoxicosis and thyroid storm. Endocrinology and Metabolism Clinics.
- Wikipedia. Thyroid storm.
- Cleveland Clinic. Thyroid Storm.