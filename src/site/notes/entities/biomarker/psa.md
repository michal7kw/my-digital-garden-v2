---
created: '2026-02-08T19:29:31.572844Z'
description: Prostate-specific antigen is a serine protease produced by prostatic
  epithelial cells. It is the primary screening biomarker for prostate cancer, though
  elevations also occur in benign prostatic hyperplasia and prostatitis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/psa/
slug: psa
tags:
- biomarker
title: PSA
type: biomarker
updated: '2026-02-08T19:29:31.572844Z'
---

# PSA

## Overview
Prostate-specific antigen (PSA) is a serine protease glycoprotein produced almost exclusively by the epithelial cells of the prostate gland. It functions to liquefy semen after ejaculation, but small amounts normally leak into the bloodstream where it can be measured as a biomarker.

PSA is the primary screening biomarker for prostate cancer, though it lacks specificity because elevated levels also occur in benign prostatic hyperplasia (BPH), prostatitis, urinary tract infections, and after prostate manipulation. Age-specific reference ranges improve diagnostic accuracy, as PSA levels naturally increase with age and prostate volume.

The ratio of free PSA to total PSA (percent free PSA) helps distinguish between prostate cancer and benign conditions. A lower free-to-total ratio (<10%) is more suggestive of cancer, while higher ratios (>25%) suggest benign disease. PSA velocity (rate of change over time) and PSA density (PSA relative to prostate volume) provide additional diagnostic refinement.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <1.0 ng/mL | Normal, low prostate cancer risk |
| **Normal** | <4.0 ng/mL | Generally considered normal (age-dependent) |
| **High** | >4.0 ng/mL | Warrants further evaluation; may indicate cancer, BPH, or prostatitis |
| **Optimal** | <2.5 ng/mL | Functional medicine optimal; lower risk threshold |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Blood (serum)
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually for men over 50; earlier for high-risk populations

## 💊 Supplements That Affect This Biomarker

- [[Saw Palmetto]] - May decrease PSA in men with BPH (mild, evidence level 3)
- [[Lycopene]] - May reduce PSA levels in men with elevated PSA (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[prostate specific antigen psa total]] - Total PSA measurement
- [[prostate specific antigen psa free]] - Free PSA for calculating free-to-total ratio

## Relationships

### Correlations
- → [[Testosterone Total]] (biomarker) - Testosterone influences prostate growth and PSA production
- → [[Testosterone Free]] (biomarker) - Free testosterone directly affects prostatic tissue

## References
- PMID:19118655 - Saw palmetto extract effects on PSA levels in BPH
- PMID:25411333 - Lycopene supplementation and PSA reduction meta-analysis
- PMID:26058024 - AUA/ASTRO/SUO guidelines on PSA-based screening

## Dataview Queries
```dataview
LIST
FROM [[PSA]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```