---
created: '2026-02-08T19:25:12.881798Z'
description: C-terminal telopeptide of type I collagen is a degradation product released
  during bone resorption. It is the preferred marker for monitoring anti-resorptive
  therapy efficacy in osteoporosis treatment.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/ctx/
slug: ctx
tags:
- Biomarker
- biomarker
title: CTX
type: Biomarker
updated: '2026-02-08T19:25:12.881798Z'
---

# CTX

## Overview
C-terminal telopeptide (CTX), also known as beta-CrossLaps, is a degradation fragment of type I collagen released during osteoclast-mediated bone resorption. Type I collagen constitutes approximately 90% of bone organic matrix, and its breakdown products serve as reliable indicators of bone resorption rate.

CTX is the preferred bone resorption marker recommended by the International Osteoporosis Foundation (IOF) and the International Federation of Clinical Chemistry (IFCC) for monitoring anti-resorptive therapy. It is particularly useful for assessing response to bisphosphonates, denosumab, and hormone replacement therapy. A significant decrease in CTX (typically >25-30% from baseline) within 3-6 months of starting treatment confirms therapeutic efficacy.

CTX levels exhibit significant pre-analytical variability. A strong circadian rhythm causes peak levels in the early morning with a nadir in the afternoon. Fasting is required because food intake causes an acute decrease in CTX levels. For these reasons, samples should be collected in the fasting state before 10 AM for consistent and comparable results. CTX is also influenced by renal function, as it is cleared by the kidneys.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Normal (Males)** | <584 pg/mL | Healthy adult male range |
| **Normal (Premenopausal Females)** | <573 pg/mL | Healthy premenopausal female range |
| **Normal (Postmenopausal Females)** | <1008 pg/mL | Higher due to increased bone resorption |
| **Low** | Significantly below normal | May indicate over-suppression of bone turnover (bisphosphonate use) |
| **High** | Above age/sex-specific range | Accelerated bone loss; increased fracture risk |
| **Optimal** | Lower half of normal range | Controlled bone resorption |

## Testing Information
- **Measurement Unit**: pg/mL
- **Sample Type**: Serum
- **Fasting Required**: True (morning collection before 10 AM required)
- **Recommended Test Frequency**: Every 3-6 months during osteoporosis treatment; baseline and follow-up

## 💊 Supplements That Affect This Biomarker

- [[Calcium]] - Decreases bone resorption markers including CTX (moderate, evidence level 2)
- [[Vitamin D]] - Decreases CTX by improving calcium homeostasis and reducing secondary hyperparathyroidism (moderate, evidence level 2)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[ctx]] - C-terminal telopeptide measurement (beta-CrossLaps)

## Relationships

### Correlations
- → [[Osteocalcin]] (biomarker) - Formation/resorption ratio assessment in bone turnover
- → [[Calcium]] (biomarker) - Calcium homeostasis affects bone resorption rate
- → [[Vitamin D]] (biomarker) - Vitamin D deficiency causes secondary hyperparathyroidism and increased CTX
- → [[Alkaline Phosphatase]] (biomarker) - Co-elevated in high bone turnover states

## References
- PMID:17513446 - Calcium supplementation effects on bone resorption markers
- PMID:22536767 - Vitamin D effects on bone turnover markers
- PMID:22290186 - IOF/IFCC recommendations for bone turnover marker use
- PMID:25825574 - CTX as a monitoring tool for osteoporosis treatment

## Dataview Queries
```dataview
LIST
FROM [[CTX]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```