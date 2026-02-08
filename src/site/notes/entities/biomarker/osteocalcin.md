---
created: '2026-02-08T19:29:31.572071Z'
description: Osteocalcin is a non-collagenous protein produced by osteoblasts that
  serves as a marker of bone formation. It also functions as a hormone affecting glucose
  metabolism and energy expenditure.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/osteocalcin/
slug: osteocalcin
tags:
- biomarker
title: Osteocalcin
type: biomarker
updated: '2026-02-08T19:29:31.572071Z'
---

# Osteocalcin

## Overview
Osteocalcin (also called bone Gla protein) is a small protein produced by osteoblasts during bone formation. It is the most abundant non-collagenous protein in bone matrix and is vitamin K-dependent, requiring carboxylation for full biological activity. Carboxylated osteocalcin binds to hydroxyapatite in bone matrix, while undercarboxylated osteocalcin is released into the circulation.

As a bone turnover marker, osteocalcin reflects the rate of bone formation and is used clinically to monitor osteoporosis treatment, assess fracture risk, and evaluate metabolic bone diseases. It is elevated in conditions with high bone turnover including osteoporosis, Paget's disease, hyperparathyroidism, and bone metastases. Osteocalcin levels follow a circadian rhythm with peak levels in the early morning.

Beyond its skeletal role, osteocalcin has emerged as an important endocrine hormone. Undercarboxylated osteocalcin stimulates insulin secretion from pancreatic beta cells, enhances insulin sensitivity in adipose tissue and muscle, and increases energy expenditure. This bone-pancreas axis has significant implications for understanding the metabolic benefits of exercise and the relationship between osteoporosis and type 2 diabetes.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Normal (Males)** | 14-42 ng/mL | Healthy adult male range |
| **Normal (Premenopausal Females)** | 11-43 ng/mL | Healthy premenopausal female range |
| **Normal (Postmenopausal Females)** | 15-46 ng/mL | Higher due to increased bone turnover |
| **Low** | Below age/sex-specific range | May indicate impaired bone formation |
| **High** | Above age/sex-specific range | Increased bone turnover; may indicate bone disease |
| **Optimal** | Mid-range for age/sex | Balanced bone formation activity |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Serum
- **Fasting Required**: True
- **Recommended Test Frequency**: As needed for bone health assessment; every 3-6 months during osteoporosis treatment

## 💊 Supplements That Affect This Biomarker

- [[Vitamin K2]] - Increases carboxylation of osteocalcin, improving bone matrix binding (moderate, evidence level 2)
- [[Vitamin D]] - Increases osteocalcin production by stimulating osteoblast activity (moderate, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[osteocalcin]] - Total osteocalcin measurement
- [[undercarboxylated osteocalcin]] - Reflects vitamin K status

## Relationships

### Correlations
- → [[Calcium]] (biomarker) - Co-regulated in bone metabolism
- → [[Vitamin D]] (biomarker) - Vitamin D stimulates osteocalcin gene expression
- → [[Alkaline Phosphatase]] (biomarker) - Co-elevated in high bone turnover states

## References
- PMID:25516361 - Vitamin K2 supplementation and osteocalcin carboxylation
- PMID:22536767 - Vitamin D supplementation effects on osteocalcin levels
- PMID:23717318 - Osteocalcin as an endocrine hormone affecting glucose metabolism
- PMID:27424088 - Osteocalcin in metabolic regulation review

## Dataview Queries
```dataview
LIST
FROM [[Osteocalcin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```