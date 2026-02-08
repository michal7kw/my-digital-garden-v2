---
created: '2026-02-08T19:29:31.579082Z'
description: Cardiac troponin (I and T) is the gold standard biomarker for detecting
  myocardial injury and diagnosing acute myocardial infarction.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/troponin/
slug: troponin
tags:
- biomarker
title: Troponin
type: biomarker
updated: '2026-02-08T19:29:31.579082Z'
---

# Troponin

## Overview
Cardiac troponin is a regulatory protein complex found in cardiac muscle cells that plays an essential role in the calcium-mediated regulation of cardiac contraction. There are two clinically relevant isoforms: cardiac troponin I (cTnI) and cardiac troponin T (cTnT). Because these isoforms are highly specific to the myocardium, their presence in the bloodstream serves as definitive evidence of myocardial cell injury.

High-sensitivity troponin (hs-Tn) assays can detect very small amounts of troponin in the blood, enabling earlier detection of myocardial infarction and improved risk stratification. Troponin is now the preferred biomarker for the diagnosis of acute myocardial infarction (MI) as part of the universal definition, replacing older markers such as CK-MB.

Troponin elevations are not exclusive to MI; they can also occur in myocarditis, pulmonary embolism, heart failure, sepsis, renal failure, and after strenuous exercise. The pattern of rise and fall (delta change) over serial measurements is critical for differentiating acute MI from chronic troponin elevation.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <3 ng/L | Normal, no detectable myocardial injury |
| **Normal** | <14 ng/L (hs-TnI and hs-TnT) | Within 99th percentile upper reference limit |
| **High** | >14 ng/L with rising/falling pattern | Suggestive of acute myocardial injury |
| **Optimal** | <5 ng/L | Minimal cardiovascular risk |

## Testing Information
- **Measurement Unit**: ng/L
- **Sample Type**: Blood (serum or plasma)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed (serial measurements at 0, 3, and 6 hours in acute chest pain evaluation)

## 💊 Supplements That Affect This Biomarker

- [[Coenzyme Q10]] - May support cardiac function and reduce troponin release in heart failure (mild, evidence level 3)
- [[Omega-3 Fatty Acids]] - Cardioprotective effects may reduce low-grade troponin elevations (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[troponin i]] - Cardiac troponin I measurement (high-sensitivity assay preferred)
- [[troponin t high sensitivity]] - High-sensitivity cardiac troponin T measurement

## Relationships

### Activates
- → [[Creatine Kinase]] (biomarker)
- → [[BNP]] (biomarker)

### Correlations
- → [[Creatine Kinase]] (biomarker) - Both elevated in myocardial injury; troponin more specific and sensitive
- → [[BNP]] (biomarker) - Concurrent elevation suggests acute heart failure with myocardial injury
- → [[Hs Crp]] (biomarker) - Inflammation may accompany troponin elevation in acute coronary syndromes

## References
- PMID:25282031 - Mortensen SA et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO. JACC Heart Fail. 2014.
- PMID:31475379 - Manson JE et al. Marine n-3 fatty acids and prevention of cardiovascular disease and cancer. N Engl J Med. 2019.
- PMID:29474816 - Thygesen K et al. Fourth Universal Definition of Myocardial Infarction (2018). Circulation. 2018.
- PMID:32227580 - Nicholls SJ et al. Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events. JAMA. 2020.

## Dataview Queries
```dataview
LIST
FROM [[Troponin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```