---
created: '2026-02-08T19:25:12.881048Z'
description: C-Peptide is a 31-amino acid polypeptide cleaved from proinsulin during
  insulin biosynthesis, serving as a direct measure of endogenous insulin production
  by pancreatic beta cells.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/c-peptide/
slug: c-peptide
tags:
- Biomarker
- biomarker
title: C-Peptide
type: Biomarker
updated: '2026-02-08T19:25:12.881048Z'
---

# C-Peptide

## Overview
C-Peptide (connecting peptide) is a 31-amino acid polypeptide that is cleaved from proinsulin in the pancreatic beta cells during the enzymatic conversion of proinsulin to insulin. For every molecule of insulin produced, one molecule of C-Peptide is released in equimolar amounts into the portal circulation. This stoichiometric relationship makes C-Peptide a reliable surrogate marker for endogenous insulin secretion.

Unlike insulin, C-Peptide is not extracted by the liver during first-pass metabolism and has a longer half-life (approximately 30 minutes vs 5 minutes for insulin), resulting in more stable plasma levels. These pharmacokinetic properties make C-Peptide superior to direct insulin measurement for assessing beta cell function, particularly in patients receiving exogenous insulin therapy.

C-Peptide measurement is clinically valuable for differentiating Type 1 from Type 2 diabetes (low vs normal/high), evaluating residual beta cell function, identifying factitious hypoglycemia (exogenous insulin use will suppress C-Peptide), and diagnosing insulinomas (both C-Peptide and insulin will be elevated). Serial C-Peptide measurements can track the progression of beta cell decline in Type 1 diabetes and guide therapeutic decisions in Type 2 diabetes.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <0.8 ng/mL (fasting) | Reduced beta cell function; consistent with Type 1 DM or late-stage Type 2 DM |
| **Normal** | 0.8-3.1 ng/mL (fasting) | Adequate endogenous insulin production |
| **High** | >3.1 ng/mL (fasting) | Insulin resistance, insulinoma, or early Type 2 DM with hyperinsulinemia |
| **Optimal** | 1.0-2.5 ng/mL (fasting) | Healthy beta cell function with good insulin sensitivity |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Serum
- **Fasting Required**: True (fasting C-Peptide is standard; stimulated C-Peptide with glucagon also used)
- **Recommended Test Frequency**: As needed; at diagnosis to classify diabetes type; periodically to monitor beta cell function

## 💊 Supplements That Affect This Biomarker

- [[Berberine]] - May improve insulin secretion and beta cell function in Type 2 diabetes (mild increase, evidence level 3)
- [[Chromium]] - May improve insulin sensitivity and secondarily support insulin secretion (mild increase, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[c-peptide]] - Fasting C-Peptide immunoassay (chemiluminescence or ELISA)

## Relationships

### Activates
- → [[Insulin]] (biomarker)
- → [[Insulin Fasting]] (biomarker)

### Correlations
- → [[Insulin]] (biomarker) - C-Peptide and insulin are co-secreted; C-Peptide reflects endogenous production without hepatic extraction interference
- → [[Insulin Fasting]] (biomarker) - Fasting C-Peptide correlates with fasting insulin in the absence of exogenous insulin therapy
- → [[HbA1c]] (biomarker) - Declining C-Peptide over time corresponds with worsening glycemic control
- → [[Glucose Fasting]] (biomarker) - Low C-Peptide with high fasting glucose indicates absolute insulin deficiency

## References
- PMID:18442638 - Yin J et al. Efficacy of berberine in patients with type 2 diabetes mellitus. Metabolism. 2008.
- PMID:25498346 - Dong H et al. Berberine in the treatment of type 2 diabetes mellitus: a systemic review and meta-analysis. Evid Based Complement Alternat Med. 2012.
- PMID:17109600 - Balk EM et al. Effect of chromium supplementation on glucose metabolism and lipids. Diabetes Care. 2007.
- PMID:24635480 - Suksomboon N et al. Systematic review and meta-analysis of the efficacy and safety of chromium supplementation in diabetes. J Clin Pharm Ther. 2014.

## Dataview Queries
```dataview
LIST
FROM [[C-Peptide]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```