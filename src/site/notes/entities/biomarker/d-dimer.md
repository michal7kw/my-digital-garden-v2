---
created: '2026-02-08T19:29:31.559959Z'
description: D-Dimer is a fibrin degradation product released when cross-linked fibrin
  is broken down by plasmin, serving as a sensitive marker for the presence of intravascular
  clot formation and fibrinolysis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/d-dimer/
slug: d-dimer
tags:
- biomarker
title: D-Dimer
type: biomarker
updated: '2026-02-08T19:29:31.559959Z'
---

# D-Dimer

## Overview
D-Dimer is a small protein fragment produced when cross-linked fibrin is degraded by the fibrinolytic enzyme plasmin. Its presence in the blood indicates that both thrombin generation (clot formation) and plasmin-mediated fibrinolysis (clot breakdown) have occurred. D-Dimer is therefore a highly sensitive, though not specific, marker of thrombotic activity.

The primary clinical utility of D-Dimer testing lies in its high negative predictive value for venous thromboembolism (VTE). A normal D-Dimer level effectively rules out deep vein thrombosis (DVT) and pulmonary embolism (PE) in patients with low-to-moderate pre-test probability. However, D-Dimer is elevated in many non-thrombotic conditions, limiting its specificity.

D-Dimer levels are commonly elevated in pregnancy, post-surgical states, active cancer, infection, liver disease, atrial fibrillation, and advanced age. Age-adjusted D-Dimer cutoffs (age x 10 ng/mL for patients >50 years) have been adopted to improve specificity in older populations. D-Dimer is also used in the diagnosis of disseminated intravascular coagulation (DIC) and for monitoring anticoagulant therapy response.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <250 ng/mL FEU | Normal, VTE very unlikely |
| **Normal** | <500 ng/mL FEU | Standard negative cutoff for VTE exclusion |
| **High** | >500 ng/mL FEU | Requires further investigation; does not confirm VTE |
| **Optimal** | <250 ng/mL FEU | Minimal fibrinolytic activity |

## Testing Information
- **Measurement Unit**: ng/mL FEU (Fibrinogen Equivalent Units)
- **Sample Type**: Blood (citrated plasma)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed (acute evaluation for suspected VTE or DIC)

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Mild effect on coagulation parameters and D-Dimer levels (mild, evidence level 3)
- [[Nattokinase]] - Fibrinolytic enzyme with direct effects on clot degradation and D-Dimer reduction (moderate, evidence level 2)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[d-dimer]] - Quantitative D-Dimer immunoassay (turbidimetric or ELISA)

## Relationships

### Activates
- → [[Fibrinogen]] (biomarker)

### Correlations
- → [[Fibrinogen]] (biomarker) - Both elevated in hypercoagulable states; fibrinogen is the precursor of fibrin from which D-Dimer is derived
- → [[Platelets]] (biomarker) - Platelet consumption may occur alongside elevated D-Dimer in DIC

## References
- PMID:19358878 - Hsia CH et al. Nattokinase decreases plasma levels of fibrinogen, factor VII, and factor VIII in human subjects. Nutr Res. 2009.
- PMID:26740084 - Weng Y et al. Nattokinase: an oral antithrombotic agent. Clin Lab. 2017.
- PMID:31475379 - Manson JE et al. Marine n-3 fatty acids and prevention of cardiovascular disease and cancer. N Engl J Med. 2019.
- PMID:23337346 - Righini M et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism. JAMA. 2014.

## Dataview Queries
```dataview
LIST
FROM [[D-Dimer]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```