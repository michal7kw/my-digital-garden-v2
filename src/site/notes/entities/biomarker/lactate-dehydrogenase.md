---
created: '2026-02-08T19:29:31.567819Z'
description: Lactate Dehydrogenase is an intracellular enzyme found in virtually all
  body tissues that catalyzes the interconversion of lactate and pyruvate, serving
  as a nonspecific marker of tissue damage and cellular turnover.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/lactate-dehydrogenase/
slug: lactate-dehydrogenase
tags:
- biomarker
title: Lactate Dehydrogenase
type: biomarker
updated: '2026-02-08T19:29:31.567819Z'
---

# Lactate Dehydrogenase

## Overview
Lactate Dehydrogenase (LDH) is a cytoplasmic enzyme present in virtually all cells throughout the body. It catalyzes the reversible conversion of lactate to pyruvate with the concomitant interconversion of NADH and NAD+, a crucial step in anaerobic glycolysis and gluconeogenesis. Because LDH is ubiquitous, elevated serum levels are a nonspecific but sensitive indicator of tissue damage or increased cellular turnover.

LDH exists as five isoenzymes (LDH-1 through LDH-5), each a tetramer composed of varying ratios of H (heart) and M (muscle) subunits. The isoenzyme pattern can help localize the source of tissue damage: LDH-1 predominates in heart and red blood cells, LDH-2 in the reticuloendothelial system, LDH-3 in lung tissue, LDH-4 in kidney and pancreas, and LDH-5 in liver and skeletal muscle.

Clinically, LDH is elevated in a wide range of conditions including hemolytic anemias, megaloblastic anemia, myocardial infarction, liver disease (hepatitis, cirrhosis), muscle injury, pulmonary embolism, and malignancies (particularly lymphoma, leukemia, and germ cell tumors). In oncology, LDH is used as a tumor marker and prognostic indicator, as elevated levels reflect high tumor burden and rapid cell turnover.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <120 U/L | Uncommon; may indicate certain genetic variants |
| **Normal** | 140-280 U/L | No significant tissue damage |
| **High** | >280 U/L | Tissue damage, hemolysis, malignancy, or other cellular injury |
| **Optimal** | 140-220 U/L | Healthy cellular turnover |

## Testing Information
- **Measurement Unit**: U/L
- **Sample Type**: Serum (hemolysis-free specimen essential; hemolyzed samples give falsely elevated results)
- **Fasting Required**: False
- **Recommended Test Frequency**: As needed; serial monitoring in malignancy, hemolytic conditions, or liver disease

## 💊 Supplements That Affect This Biomarker

- [[N-Acetyl Cysteine]] - May reduce LDH levels in liver conditions through glutathione replenishment and hepatoprotection (mild, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[ldh]] - Lactate dehydrogenase total activity (enzymatic assay)

## Relationships

### Activates
- → [[Alanine Transaminase]] (biomarker)

### Correlations
- → [[Alanine Transaminase]] (biomarker) - Both elevated in hepatocellular injury; ALT more liver-specific than LDH
- → [[Aspartate Aminotransferase]] (biomarker) - Both elevated in liver and muscle damage; AST/LDH ratio helps differentiate etiologies
- → [[Creatine Kinase]] (biomarker) - Both elevated in muscle injury and myocardial infarction; CK more specific for muscle

## References
- PMID:20424161 - Smilkstein MJ et al. N-Acetylcysteine in the treatment of hepatotoxicity. J Clin Gastroenterol. 2010.
- PMID:16490595 - Heard KJ. Acetylcysteine for acetaminophen poisoning. N Engl J Med. 2008.
- PMID:29434327 - Drent M et al. Usefulness of lactate dehydrogenase and its isoenzymes as indicators of lung damage or inflammation. Eur Respir J. 1996.
- PMID:28373128 - Asghar U et al. The role of LDH as a tumor marker. Cancer Biomark. 2017.

## Dataview Queries
```dataview
LIST
FROM [[Lactate Dehydrogenase]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```