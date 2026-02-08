---
created: '2026-02-08T19:29:31.553809Z'
description: Adiponectin is an anti-inflammatory adipokine hormone produced by adipose
  tissue that enhances insulin sensitivity and has cardioprotective effects. Low levels
  are associated with obesity, metabolic syndrome, and increased cardiovascular risk.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/adiponectin/
slug: adiponectin
tags:
- biomarker
title: Adiponectin
type: biomarker
updated: '2026-02-08T19:29:31.553809Z'
---

# Adiponectin

## Overview
Adiponectin is a 244-amino acid protein hormone (also called GBP-28, apM1, or AdipoQ) secreted exclusively by adipocytes. It is paradoxically the most abundant adipokine in circulation despite being produced by fat tissue, with concentrations 1,000 times higher than most other hormones. Adiponectin circulates in three oligomeric forms: trimers, hexamers, and high-molecular-weight (HMW) multimers, with the HMW form being the most biologically active.

Adiponectin exerts potent anti-inflammatory, insulin-sensitizing, and anti-atherogenic effects. It activates AMP-activated protein kinase (AMPK) in skeletal muscle and liver, enhancing fatty acid oxidation and glucose uptake. In the vasculature, adiponectin suppresses endothelial adhesion molecule expression, inhibits macrophage-to-foam cell transformation, and reduces smooth muscle cell proliferation, conferring significant cardioprotection.

Unlike most adipokines, adiponectin levels are inversely correlated with adiposity. Obese individuals have significantly lower adiponectin than lean individuals. Low adiponectin levels are independently associated with insulin resistance, type 2 diabetes, metabolic syndrome, non-alcoholic fatty liver disease, coronary artery disease, and certain cancers. Higher levels are associated with longevity and reduced all-cause mortality.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low (Males)** | <2 mcg/mL | Increased metabolic and cardiovascular risk |
| **Normal (Males)** | 2-30 mcg/mL | Healthy adult male range |
| **Low (Females)** | <5 mcg/mL | Increased metabolic and cardiovascular risk |
| **Normal (Females)** | 5-30 mcg/mL | Healthy adult female range |
| **High** | >30 mcg/mL | Favorable; associated with good insulin sensitivity |
| **Optimal** | Upper quartile for age/sex | Higher levels associated with better metabolic health |

## Testing Information
- **Measurement Unit**: mcg/mL (micrograms per milliliter)
- **Sample Type**: Serum
- **Fasting Required**: False (though fasting may reduce variability)
- **Recommended Test Frequency**: As needed for metabolic assessment; retest 3-6 months after intervention

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Increases adiponectin in metabolic syndrome patients (mild, evidence level 3)
- [[Berberine]] - Increases adiponectin via AMPK activation and improved insulin sensitivity (mild, evidence level 3)
- [[Resveratrol]] - Increases adiponectin in overweight/obese individuals (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[adiponectin]] - Total adiponectin measurement
- [[hmw adiponectin]] - High-molecular-weight adiponectin (most active form)

## Relationships

### Correlations
- → [[Insulin]] (biomarker) - Inversely correlated; adiponectin enhances insulin sensitivity
- → [[Homa Ir]] (biomarker) - Inversely correlated; low adiponectin predicts insulin resistance
- → [[Triglycerides]] (biomarker) - Inversely correlated; adiponectin promotes triglyceride clearance
- → [[Hdl]] (biomarker) - Positively correlated; adiponectin promotes HDL production

## References
- PMID:25388747 - Omega-3 fatty acid supplementation and adiponectin levels meta-analysis
- PMID:22580569 - Berberine effects on adiponectin and metabolic parameters
- PMID:25290725 - Resveratrol supplementation and adipokine profiles
- PMID:24504425 - Adiponectin in metabolic syndrome and cardiovascular disease
- PMID:26666176 - Adiponectin signaling pathways and therapeutic implications

## Dataview Queries
```dataview
LIST
FROM [[Adiponectin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```