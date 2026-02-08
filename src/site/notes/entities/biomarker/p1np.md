---
created: '2026-02-08T19:25:12.898441Z'
description: Procollagen type I N-terminal propeptide is the most sensitive marker
  of bone formation. It is cleaved from type I collagen during bone synthesis and
  reflects osteoblast activity. Used to monitor osteoporosis treatment response and
  assess bone turnover.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/p1np/
slug: p1np
tags:
- Biomarker
- biomarker
title: P1NP
type: Biomarker
updated: '2026-02-08T19:25:12.898441Z'
---

# P1NP

## Overview
Procollagen type I N-terminal propeptide (P1NP) is a byproduct of type I collagen synthesis, which constitutes approximately 90% of the organic bone matrix. When osteoblasts synthesize new type I collagen, the procollagen molecule is cleaved at both ends, releasing N-terminal (P1NP) and C-terminal (P1CP) propeptides into the bloodstream. P1NP thus serves as a direct quantitative marker of bone formation rate.

P1NP is recommended by the International Osteoporosis Foundation (IOF) and the International Federation of Clinical Chemistry (IFCC) as the reference bone formation marker. It has several advantages over other formation markers: it is relatively stable in serum, shows low diurnal variation, is not affected by food intake, and has well-established reference ranges across age groups and sexes.

Clinically, P1NP is most valuable for monitoring response to osteoporosis treatments, particularly anabolic therapies (teriparatide, romosozumab) which increase P1NP, and anti-resorptive therapies (bisphosphonates, denosumab) which decrease P1NP. A significant change in P1NP (>25% from baseline) at 3-6 months reliably predicts long-term treatment efficacy and fracture risk reduction.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Premenopausal F** | 15-59 mcg/L | Normal bone turnover |
| **Postmenopausal F** | 20-76 mcg/L | Normal (higher due to bone loss) |
| **Men** | 20-76 mcg/L | Normal bone turnover |
| **Elevated** | >76 mcg/L | Increased bone formation (anabolic Tx, fracture healing, Paget's) |

## Testing Information
- **Measurement Unit**: mcg/L (or ng/mL)
- **Sample Type**: Blood (serum)
- **Fasting Required**: False (minimal diurnal variation)
- **Recommended Test Frequency**: Every 3-6 months during osteoporosis treatment

## 💊 Supplements That Affect This Biomarker

- [[Vitamin D]] - Increases P1NP by supporting osteoblast function (moderate effect, evidence level 2)
- [[Calcium]] - Supports bone formation when adequate (moderate effect, evidence level 2)
- [[Vitamin K2]] - Supports osteocalcin carboxylation and bone formation (mild effect, evidence level 3)
- [[Collagen Peptides]] - May increase P1NP through providing collagen precursors (mild effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- Total P1NP assay (Roche Elecsys) - Automated electrochemiluminescence immunoassay
- Intact P1NP assay - Measures intact trimeric form only

## Relationships

### Correlations
- → [[Osteocalcin]] (biomarker) - Both are bone formation markers (complementary)
- → [[CTX]] (biomarker) - Formation vs resorption; ratio indicates bone balance
- → [[Alkaline Phosphatase]] (biomarker) - ALP partly reflects bone-specific formation
- → [[Vitamin D]] (biomarker) - Vitamin D status affects bone formation rate
- → [[Calcium]] (biomarker) - Calcium homeostasis linked to bone turnover

### Related Conditions
- → [[Osteoporosis]] (condition)
- → [[Osteopenia]] (condition)
- → [[Paget's Disease]] (condition)

## References
- PMID:21118827 - Vasikaran et al. (2011) IOF-IFCC bone turnover markers
- PMID:24625729 - Szulc (2012) Use of P1NP in monitoring osteoporosis treatment
- PMID:25516361 - Knapen et al. (2015) Vitamin K2 and bone health

## Dataview Queries
```dataview
LIST
FROM [[P1NP]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```