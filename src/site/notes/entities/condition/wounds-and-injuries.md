---
created: '2026-02-08T19:29:31.635742Z'
description: Damage to any part of the body caused by external force, ranging from
  minor skin breaks to life-threatening internal trauma.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/wounds-and-injuries/
slug: wounds-and-injuries
tags:
- condition
- trauma
- surgery
- emergency
title: Wounds and Injuries
type: condition
updated: '2026-02-08T19:29:31.635742Z'
---

# Wounds and Injuries

## Overview

Wounds are injuries that break the skin or other body tissues. They include cuts, scrapes, scratches, and punctured skin. Injuries also include internal damage such as broken bones, sprains, and internal bleeding. Proper wound care is essential to prevent **Infection**.

## Types of Wounds

- **Abrasion:** Scrape.
- **Laceration:** Cut or tear.
- **Puncture:** Small hole from a sharp object.
- **Avulsion:** Tissue torn away.
- **Incision:** Clean cut (surgical).

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Wounds_and_Injuries]] (entity)
```yaml
last_modified: '2026-01-26T06:47:55.198863'
source: obsidian
```
- → [[Wounds_and_Injuries]] (condition)
```yaml
last_modified: '2026-01-26T06:04:02.812561'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

ASSOCIATED_WITH_CONDITION::[[Infection]]
ASSOCIATED_WITH_CONDITION::[[Inflammation]]
ASSOCIATED_WITH_CONDITION::[[Hemorrhage]]
ASSOCIATED_WITH_CONDITION::[[Sepsis]] - Risk from wound infection.
TREATED_BY_INTERVENTION::[[Surgery]]
TREATED_BY_DRUG::[[Antibiotics]] - For infected wounds.
TREATED_BY_DRUG::[[Lidocaine]] - Local anesthetic.

## References

- MedlinePlus. Wounds and Injuries.
- WHO. Injuries and violence.
- Gabriel, A., et al. (2021). Wound Healing and Care. Medscape.