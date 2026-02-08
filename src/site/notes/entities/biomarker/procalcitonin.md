---
created: '2026-02-08T19:25:12.900575Z'
description: Procalcitonin is a precursor peptide of calcitonin that is markedly elevated
  in systemic bacterial infections and sepsis, serving as a key biomarker for distinguishing
  bacterial from viral infections and guiding antibiotic stewardship.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/procalcitonin/
slug: procalcitonin
tags:
- Biomarker
- biomarker
title: Procalcitonin
type: Biomarker
updated: '2026-02-08T19:25:12.900575Z'
---

# Procalcitonin

## Overview
Procalcitonin (PCT) is a 116-amino acid precursor peptide of the hormone calcitonin, normally produced in small amounts by the C-cells of the thyroid gland. Under physiological conditions, procalcitonin is almost entirely converted to calcitonin before release, resulting in undetectable or very low serum PCT levels. However, during systemic bacterial infections, virtually all tissues in the body (including liver, kidney, adipose tissue, and muscle) begin producing PCT in large quantities through a process independent of calcitonin production.

The induction of PCT during bacterial infection is mediated by bacterial lipopolysaccharides (endotoxin) and pro-inflammatory cytokines (IL-6, TNF-alpha, IL-1beta). Importantly, PCT production is attenuated by interferon-gamma, which is released during viral infections. This differential response makes PCT a valuable tool for distinguishing bacterial from viral etiologies.

Clinically, PCT is used to guide antibiotic initiation and discontinuation, particularly in lower respiratory tract infections and sepsis. PCT-guided antibiotic stewardship protocols have been shown to reduce antibiotic exposure without adversely affecting clinical outcomes. PCT levels also correlate with the severity of bacterial infection and can be used for prognostication in sepsis.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <0.1 ng/mL | Bacterial infection very unlikely; consider viral etiology |
| **Normal** | <0.25 ng/mL | Low risk for bacterial infection; antibiotics generally not recommended |
| **High** | 0.25-0.5 ng/mL possible bacterial; >0.5 ng/mL bacterial likely; >2.0 ng/mL severe sepsis; >10 ng/mL septic shock | Bacterial infection increasingly likely with higher levels |
| **Optimal** | <0.05 ng/mL | No active bacterial infection |

## Testing Information
- **Measurement Unit**: ng/mL
- **Sample Type**: Serum
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; serial measurements every 24-48 hours recommended for antibiotic stewardship

## 💊 Supplements That Affect This Biomarker

No significant supplement interactions documented. Procalcitonin is primarily a marker of bacterial infection and is not meaningfully influenced by nutritional supplementation.

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[procalcitonin]] - Procalcitonin immunoassay (BRAHMS PCT assay, chemiluminescence)

## Relationships

### Activates
- → [[White Blood Cell Count]] (biomarker)
- → [[Hs Crp]] (biomarker)

### Correlations
- → [[White Blood Cell Count]] (biomarker) - Both elevated in bacterial infection; WBC less specific than PCT for bacterial vs viral differentiation
- → [[Hs Crp]] (biomarker) - CRP rises in both bacterial and viral infections; PCT is more specific for bacterial etiology
- → [[Interleukin 6]] (biomarker) - IL-6 drives PCT production; IL-6 rises earlier but is less specific for bacterial infection

## References
- PMID:29320413 - Schuetz P et al. Effect of procalcitonin-guided antibiotic treatment on mortality in acute respiratory infections: a meta-analysis. Lancet Infect Dis. 2018.
- PMID:28141960 - Vijayan AL et al. Procalcitonin: a promising diagnostic marker for sepsis and antibiotic therapy. J Intensive Care. 2017.
- PMID:27044824 - de Jong E et al. Efficacy and safety of procalcitonin guidance in reducing duration of antibiotic treatment in critically ill patients. Lancet Infect Dis. 2016.
- PMID:28236480 - Schuetz P et al. Procalcitonin to initiate or discontinue antibiotics in acute respiratory tract infections. Cochrane Database Syst Rev. 2017.

## Dataview Queries
```dataview
LIST
FROM [[Procalcitonin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```