---
created: '2026-02-08T19:25:12.925087Z'
description: A complete or partial break in the continuity of bone tissue, usually
  caused by trauma or underlying disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/bone-fractures/
slug: bone-fractures
tags:
- Condition
- condition
- orthopedics
- trauma
- injury
title: Bone Fractures
type: Condition
updated: '2026-02-08T19:25:12.925087Z'
---

# Bone Fractures

## Overview

A bone fracture is a medical condition where the continuity of the bone is broken. Fractures fall into two main categories: **Traumatic fractures** caused by direct force (falls, car accidents) and **Pathologic fractures** caused by disease weakening the bone (osteoporosis, cancer).

## Classification

- **Closed (Simple):** Skin is intact.
- **Open (Compound):** Bone breaks through the skin (high infection risk).
- **Comminuted:** Bone shatters into 3+ pieces.
- **Greenstick:** Incomplete break (common in children).
- **Stress:** Hairline crack from overuse.

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Bone_Fractures]] (entity)
```yaml
last_modified: '2026-01-26T06:47:32.356629'
source: obsidian
```
- → [[Bone_Fractures]] (condition)
```yaml
last_modified: '2026-01-26T06:03:26.355558'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

CAUSED_BY::[[Trauma]]
ASSOCIATED_WITH_CONDITION::[[Osteoporosis]]
ASSOCIATED_WITH_CONDITION::[[Osteopenia]]
ASSOCIATED_WITH_CONDITION::[[Bone Cancer]]
AFFECTS_ORGAN::[[Bone]]
TREATED_BY_INTERVENTION::[[Immobilization]] - Casting/Splinting.
TREATED_BY_INTERVENTION::[[Surgery]] - ORIF (Open Reduction Internal Fixation).
REQUIRES_COFACTOR::[[Calcium]] - For healing.
REQUIRES_COFACTOR::[[Vitamin D]]

## References

- American Academy of Orthopaedic Surgeons (AAOS). Fractures (Broken Bones).
- Marsh, J. L., et al. (2007). Fracture and dislocation classification compendium - 2007. Journal of Orthopaedic Trauma.
- Court-Brown, C. M., & Caesar, B. (2006). Epidemiology of adult fractures: A review. Injury.