---
created: '2026-02-08T19:25:12.916935Z'
description: A sudden episode of kidney failure or kidney damage that happens within
  a few hours or a few days, causing a build-up of waste products in the blood.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Condition/acute-kidney-injury/
slug: acute-kidney-injury
tags:
- Condition
- condition
- nephrology
- acute
- renal_failure
title: Acute Kidney Injury
type: Condition
updated: '2026-02-08T19:25:12.916935Z'
---

# Acute Kidney Injury

## Overview

Acute Kidney Injury (AKI), previously known as acute renal failure, is a sudden and rapid decline in kidney function. This impairment prevents the kidneys from effectively filtering waste products from the blood and maintaining the proper balance of fluids and electrolytes. AKI is common in hospitalized patients and can range from mild impairment to complete organ failure requiring dialysis.

## Causes

AKI causes are traditionally categorized into three types:
1. **Prerenal:** Decreased blood flow to the kidney (e.g., dehydration, sepsis, heart failure, blood loss).
2. **Intrinsic (Renal):** Direct damage to the kidney tissue (e.g., glomerulonephritis, acute tubular necrosis, nephrotoxic drugs like NSAIDs).
3. **Postrenal:** Blockage of urine flow (e.g., kidney stones, enlarged prostate, bladder tumors).

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Acute_Kidney_Injury]] (entity)
```yaml
last_modified: '2026-01-26T06:47:29.304561'
source: obsidian
```
- → [[Acute_Kidney_Injury]] (condition)
```yaml
last_modified: '2026-01-26T06:03:21.269179'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

TREATS_CONDITION::[[Hydration]] - For prerenal AKI.
REDUCES_BIOMARKER::[[Glomerular Filtration Rate]]
ASSOCIATED_WITH_BIOMARKER::[[Creatinine]] - Increased levels indicate AKI.
ASSOCIATED_WITH_BIOMARKER::[[Blood Urea Nitrogen]]
INCREASED_RISK_OF::[[Chronic Kidney Disease]]
COMPLICATION_OF::[[Sepsis]]
COMPLICATION_OF::[[Diabetes Mellitus]]
CAUSED_BY_DRUG::[[Ibuprofen]] - Through prerenal and intrinsic mechanisms.

## References

- KDIGO Clinical Practice Guideline for Acute Kidney Injury. (2012). Kidney International Supplements.
- Hoste, E. A., et al. (2018). Global epidemiology and outcomes of acute kidney injury. Nature Reviews Nephrology.
- Mayo Clinic. Acute kidney failure.