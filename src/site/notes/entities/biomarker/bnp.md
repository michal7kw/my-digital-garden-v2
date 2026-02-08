---
created: '2026-02-08T19:45:44.422297Z'
description: B-type Natriuretic Peptide is a hormone released by ventricular cardiomyocytes
  in response to increased wall stress from volume overload or pressure overload,
  serving as the primary biomarker for heart failure diagnosis and monitoring.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/bnp/
slug: bnp
tags:
- biomarker
title: BNP
type: biomarker
updated: '2026-02-08T19:45:44.422297Z'
---

# BNP

## Overview
B-type Natriuretic Peptide (BNP) is a 32-amino acid polypeptide hormone secreted primarily by the ventricular cardiomyocytes in response to myocardial wall stress caused by volume expansion or pressure overload. It is synthesized as a preprohormone (preproBNP), which is cleaved to proBNP and then to the biologically active BNP and the inactive N-terminal fragment (NT-proBNP).

BNP acts as a counter-regulatory hormone to the renin-angiotensin-aldosterone system (RAAS), promoting vasodilation, natriuresis, and diuresis. Its primary clinical utility is in the diagnosis, risk stratification, and monitoring of heart failure. BNP and NT-proBNP levels correlate with the severity of heart failure and left ventricular dysfunction.

Both BNP and NT-proBNP are used clinically, though they have different half-lives and reference ranges. NT-proBNP has a longer half-life (120 minutes vs 20 minutes for BNP) and is cleared by the kidneys, making it more affected by renal function. Elevated levels may also be seen in atrial fibrillation, pulmonary embolism, sepsis, and advanced age.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <50 pg/mL (BNP) | Heart failure very unlikely |
| **Normal** | <100 pg/mL (BNP); <125 pg/mL NT-proBNP (<75 yr) | Heart failure unlikely |
| **High** | >400 pg/mL (BNP); >450-1800 pg/mL NT-proBNP (age-dependent) | Heart failure likely |
| **Optimal** | <50 pg/mL (BNP); <100 pg/mL (NT-proBNP) | Minimal cardiac wall stress |

## Testing Information
- **Measurement Unit**: pg/mL
- **Sample Type**: Blood (EDTA plasma for BNP, serum or plasma for NT-proBNP)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; serial monitoring in established heart failure patients

## 💊 Supplements That Affect This Biomarker

- [[Coenzyme Q10]] - Decreases BNP in heart failure patients by improving myocardial energetics (moderate, evidence level 3)
- [[Hawthorn]] - Limited evidence suggests mild BNP reduction in NYHA class I-III heart failure (mild, evidence level 2)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[bnp]] - B-type natriuretic peptide immunoassay
- [[nt-probnp]] - N-terminal pro-B-type natriuretic peptide measurement (longer half-life, renal clearance)

## Relationships

### Activates
- → [[Troponin]] (biomarker)

### Correlations
- → [[Troponin]] (biomarker) - Concurrent elevation suggests acute heart failure with myocardial injury
- → [[Creatinine]] (biomarker) - NT-proBNP levels affected by renal clearance; must interpret in context of kidney function
- → [[Hs Crp]] (biomarker) - Inflammatory state may contribute to cardiac decompensation

## References
- PMID:25282031 - Mortensen SA et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: Q-SYMBIO trial. JACC Heart Fail. 2014.
- PMID:17482506 - Molyneux SL et al. Coenzyme Q10: an independent predictor of mortality in chronic heart failure. J Am Coll Cardiol. 2008.
- PMID:18254076 - Pittler MH et al. Hawthorn extract for treating chronic heart failure. Cochrane Database Syst Rev. 2008.
- PMID:15557542 - Maisel AS et al. Rapid measurement of B-type natriuretic peptide in the emergency diagnosis of heart failure. N Engl J Med. 2002.

## Dataview Queries
```dataview
LIST
FROM [[BNP]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```