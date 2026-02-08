---
created: '2026-02-08T19:25:12.892258Z'
description: Interleukin-6 is a pleiotropic pro-inflammatory cytokine and key mediator
  of the acute-phase inflammatory response, produced by T cells, macrophages, and
  endothelial cells.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/interleukin-6/
slug: interleukin-6
tags:
- Biomarker
- biomarker
title: Interleukin 6
type: Biomarker
updated: '2026-02-08T19:25:12.892258Z'
---

# Interleukin 6

## Overview
Interleukin-6 (IL-6) is a pleiotropic cytokine with diverse roles in immune regulation, inflammation, hematopoiesis, and metabolism. It is produced by a wide range of cell types including T cells, B cells, monocytes, macrophages, fibroblasts, and endothelial cells. IL-6 is a central mediator of the acute-phase response, stimulating the liver to produce C-reactive protein, fibrinogen, and other acute-phase reactants.

IL-6 signaling occurs through two pathways: classical signaling via the membrane-bound IL-6 receptor (anti-inflammatory, regenerative) and trans-signaling via the soluble IL-6 receptor (pro-inflammatory). Dysregulation of IL-6 signaling is implicated in chronic inflammatory conditions, autoimmune diseases, cardiovascular disease, certain cancers, and cytokine storm syndromes.

Clinically, IL-6 measurement is used to assess the severity of systemic inflammation, monitor response to anti-inflammatory therapies, and guide treatment in conditions such as sepsis, rheumatoid arthritis, and cytokine release syndrome. IL-6 levels rise rapidly in acute inflammation (within 2-4 hours), making it an earlier marker than CRP.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <1.5 pg/mL | Minimal inflammation |
| **Normal** | <7 pg/mL | No significant systemic inflammation |
| **High** | >7 pg/mL | Active inflammatory process |
| **Optimal** | <3 pg/mL | Low inflammatory burden |

## Testing Information
- **Measurement Unit**: pg/mL
- **Sample Type**: Serum
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; useful for monitoring chronic inflammatory conditions

## 💊 Supplements That Affect This Biomarker

- [[Omega-3 Fatty Acids]] - Decreases IL-6 production through resolution of inflammation pathways (moderate, evidence level 3)
- [[Curcumin]] - Decreases IL-6 by inhibiting NF-kB signaling pathway (moderate, evidence level 3)
- [[Vitamin D]] - Decreases IL-6 in vitamin D deficient populations through immunomodulation (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[interleukin 6]] - IL-6 immunoassay (ELISA or chemiluminescence)

### Panel Tests
- [[advanced inflammation panel]] (labtestpanel) - Includes IL-6 in comprehensive cytokine assessment

## Relationships

### Activates
- → [[Hs Crp]] (biomarker)
- → [[Fibrinogen]] (biomarker)

### Correlations
- → [[Hs Crp]] (biomarker) - IL-6 stimulates hepatic CRP production; IL-6 rises earlier in acute inflammation
- → [[TNF Alpha]] (biomarker) - Co-regulated pro-inflammatory cytokines; TNF-alpha stimulates IL-6 production
- → [[Fibrinogen]] (biomarker) - IL-6 drives hepatic fibrinogen synthesis as part of acute-phase response

## References
- PMID:28900017 - Calder PC. Omega-3 fatty acids and inflammatory processes: from molecules to man. Biochem Soc Trans. 2017.
- PMID:27392742 - Sahebkar A et al. Effect of curcuminoids on inflammatory markers: a systematic review and meta-analysis. Crit Rev Food Sci Nutr. 2016.
- PMID:30675873 - Aranow C. Vitamin D and the immune system. J Investig Med. 2019.
- PMID:22317966 - Li K et al. Effect of marine-derived n-3 polyunsaturated fatty acids on C-reactive protein, interleukin 6 and tumor necrosis factor alpha. PLoS One. 2014.

## Dataview Queries
```dataview
LIST
FROM [[Interleukin 6]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```