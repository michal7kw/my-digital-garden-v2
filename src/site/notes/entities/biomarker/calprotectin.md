---
created: '2026-02-08T19:45:44.424843Z'
description: Fecal calprotectin is a neutrophil-derived protein that serves as a non-invasive
  marker of gastrointestinal inflammation. It is the gold standard stool biomarker
  for distinguishing inflammatory bowel disease from irritable bowel syndrome.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/calprotectin/
slug: calprotectin
tags:
- biomarker
title: Calprotectin
type: biomarker
updated: '2026-02-08T19:45:44.424843Z'
---

# Calprotectin

## Overview
Calprotectin is a calcium- and zinc-binding protein belonging to the S100 protein family, constituting approximately 60% of the cytosolic protein content of neutrophils. It is also expressed by monocytes and macrophages. When neutrophils migrate to the intestinal mucosa during inflammation, calprotectin is released and can be detected in stool samples in amounts proportional to the degree of mucosal inflammation.

Fecal calprotectin is the gold standard non-invasive biomarker for distinguishing inflammatory bowel disease (IBD) from irritable bowel syndrome (IBS). It has high sensitivity and specificity for detecting intestinal inflammation and strongly correlates with endoscopic and histological disease activity. A normal fecal calprotectin essentially excludes significant intestinal inflammation and can spare patients from unnecessary colonoscopy.

Fecal calprotectin is used clinically for initial diagnosis of IBD, monitoring disease activity and treatment response, predicting relapse in patients in clinical remission, and assessing mucosal healing. It can also be elevated in other conditions causing intestinal inflammation including infectious gastroenteritis, NSAID-induced enteropathy, colorectal cancer, and diverticulitis. The protein is remarkably stable in stool at room temperature for up to 7 days, making it a practical clinical test.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Normal** | <50 mcg/g | No significant intestinal inflammation |
| **Borderline** | 50-200 mcg/g | Possible low-grade inflammation; repeat testing or clinical correlation |
| **Elevated** | >200 mcg/g | Likely organic intestinal inflammation; strongly suggestive of IBD |
| **Very Elevated** | >500 mcg/g | Active IBD; high disease activity |
| **Optimal** | <50 mcg/g | No mucosal inflammation |

## Testing Information
- **Measurement Unit**: mcg/g (micrograms per gram of stool)
- **Sample Type**: Stool
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; every 3-6 months during active IBD monitoring

## 💊 Supplements That Affect This Biomarker

- [[Curcumin]] - May decrease fecal calprotectin in IBD patients as adjunct therapy (moderate, evidence level 3)
- [[Omega-3 Fatty Acids]] - May decrease intestinal inflammation and calprotectin levels (mild, evidence level 3)
- [[Probiotics]] - May decrease calprotectin in mild-moderate IBD (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[fecal calprotectin]] - Quantitative fecal calprotectin measurement by ELISA

## Relationships

### Correlations
- → [[Zonulin]] (biomarker) - Both assess intestinal health; zonulin measures permeability while calprotectin measures inflammation
- → [[Hs Crp]] (biomarker) - Systemic inflammation marker; calprotectin is more specific for GI inflammation
- → [[Erythrocyte Sedimentation Rate]] (biomarker) - Non-specific inflammation marker co-monitored in IBD

## References
- PMID:31299865 - Curcumin effects on fecal calprotectin in IBD
- PMID:30065775 - Omega-3 supplementation and intestinal inflammation markers
- PMID:29532975 - Probiotics and fecal calprotectin in inflammatory bowel disease
- PMID:28397648 - Fecal calprotectin in diagnosis and monitoring of IBD

## Dataview Queries
```dataview
LIST
FROM [[Calprotectin]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```