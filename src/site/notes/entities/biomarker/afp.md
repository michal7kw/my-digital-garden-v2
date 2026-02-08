---
created: '2026-02-08T19:45:44.418858Z'
description: Alpha-fetoprotein is a major fetal plasma protein that serves as a tumor
  marker for hepatocellular carcinoma and certain germ cell tumors. Elevated levels
  in non-pregnant adults suggest hepatic malignancy, testicular cancer, or liver disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/afp/
slug: afp
tags:
- biomarker
title: AFP
type: biomarker
updated: '2026-02-08T19:45:44.418858Z'
---

# AFP

## Overview
Alpha-fetoprotein (AFP) is a glycoprotein produced by the fetal yolk sac and liver during embryonic development. It is the predominant serum protein in the fetus, analogous to albumin in adults. After birth, AFP levels decline rapidly and reach normal adult levels by 1-2 years of age.

In clinical practice, AFP serves as a critical tumor marker for hepatocellular carcinoma (HCC) and non-seminomatous germ cell tumors (testicular and ovarian). For HCC, AFP is used in conjunction with ultrasound for surveillance in high-risk populations, including patients with cirrhosis and chronic hepatitis B or C. In testicular cancer, AFP is part of the standard tumor marker panel alongside beta-hCG and LDH.

AFP can be mildly to moderately elevated in non-malignant conditions including acute and chronic hepatitis, cirrhosis, liver regeneration, and pregnancy. In obstetrics, maternal serum AFP is measured as part of prenatal screening, where abnormal levels may indicate neural tube defects (elevated) or chromosomal abnormalities (decreased). The AFP-L3 fraction (lens culinaris-reactive AFP) improves specificity for hepatocellular carcinoma versus benign liver disease.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <5 ng/mL | Normal adult range |
| **Normal** | <10 ng/mL | Upper limit of normal for adults |
| **High** | 10-400 ng/mL | May indicate hepatitis, cirrhosis, or early malignancy |
| **Very High** | >400 ng/mL | Strongly suggestive of HCC or germ cell tumor |
| **Optimal** | <7 ng/mL | Functional medicine optimal |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Blood (serum)
- **Fasting Required**: False
- **Recommended Test Frequency**: Every 6 months for HCC surveillance in high-risk patients

## 💊 Supplements That Affect This Biomarker

No significant supplement interactions with AFP levels have been established in clinical literature.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[afp]] - Alpha-fetoprotein measurement
- [[afp l3]] - AFP-L3 fraction for improved HCC specificity

## Relationships

### Correlations
- → [[CEA]] (biomarker) - Co-measured tumor marker for GI malignancies
- → [[Alanine Transaminase]] (biomarker) - Liver function context for AFP interpretation
- → [[Gamma-Glutamyl Transferase]] (biomarker) - Liver disease marker used alongside AFP

## References
- PMID:29307414 - AASLD guidelines for HCC surveillance using AFP
- PMID:25123274 - AFP and AFP-L3 in hepatocellular carcinoma diagnosis
- PMID:27374108 - AFP in germ cell tumor management

## Dataview Queries
```dataview
LIST
FROM [[AFP]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```