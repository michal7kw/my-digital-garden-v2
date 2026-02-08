---
created: '2026-02-08T19:25:12.899770Z'
description: The most accurate blood-based biomarker for Alzheimer's disease, showing
  >95% accuracy in detecting AD pathology. Represents a paradigm shift enabling accessible,
  non-invasive AD diagnosis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/plasma-p-tau217/
slug: plasma-p-tau217
tags:
- Biomarker
- biomarker
- blood-test
- alzheimers
- tau
- cutting-edge
- screening
title: Plasma p-tau217
type: Biomarker
updated: '2026-02-08T19:25:12.899770Z'
---

# Plasma p-tau217

## Overview
Plasma phospho-tau217 (p-tau217) has emerged as the most accurate blood-based biomarker for Alzheimer's disease, with diagnostic performance approaching that of CSF biomarkers and amyloid PET. This represents a potential paradigm shift in AD diagnosis, enabling accessible, cost-effective screening and diagnosis without invasive lumbar puncture or expensive PET imaging.

## Why p-tau217 Over p-tau181?

### Superior Performance
| Metric | p-tau217 | p-tau181 |
|--------|----------|----------|
| AUC for AD vs controls | 0.96-0.98 | 0.85-0.92 |
| Amyloid PET concordance | 91-96% | 85-90% |
| Dynamic range | 10-20 fold | 2-3 fold |
| Earliest detection | ~20 years before symptoms | ~15 years |

### Biological Basis
- Threonine 217 phosphorylation increases more dramatically in AD
- More specific to tau/amyloid copathology
- Greater fold-change from normal to pathological

## Landmark Validation Studies

### TRIAD Study (2020, JAMA)
- 490 participants across AD continuum
- AUC 0.98 for distinguishing Aβ+ from Aβ-
- Outperformed CSF p-tau181 and plasma NfL

### Swedish BioFINDER Studies (2020-2024)
- >1,000 participants with autopsy/PET confirmation
- 96% concordance with amyloid PET
- Predicts future cognitive decline and conversion

### Eli Lilly/TRAILBLAZER Studies
- Validated across anti-amyloid therapy trials
- Tracks treatment response
- FDA submission supporting donanemab

## Clinical Performance

### Diagnostic Accuracy
| Comparison | AUC | Sensitivity | Specificity |
|------------|-----|-------------|-------------|
| AD dementia vs cognitively normal | 0.96-0.98 | 91-95% | 90-96% |
| MCI due to AD vs non-AD MCI | 0.92-0.95 | 88-92% | 85-92% |
| Amyloid PET positive vs negative | 0.94-0.97 | 90-95% | 88-95% |

### When p-tau217 is Most Useful
1. Screening for amyloid positivity before PET
2. Confirming AD etiology in cognitive impairment
3. Determining eligibility for anti-amyloid therapy
4. Population screening for clinical trials

## Available Platforms

### Commercial/Near-Commercial (as of 2025)
| Platform | Manufacturer | Status |
|----------|--------------|--------|
| ALZpath pTau217 | ALZpath | LDT available |
| Lumipulse p-tau217 | Fujirebio | CE-marked, FDA pending |
| Elecsys p-tau217 | Roche | In development |
| p-tau217/np-tau217 ratio | Janssen | Research |

### Key Cutoffs (Platform-Specific)
- ALZpath: ~0.42 pg/mL (amyloid positivity)
- Two-cutoff approach: Low/intermediate/high probability
- Intermediate zone: Consider confirmatory PET

## Integration into Clinical Practice

### Proposed Algorithms (2025)

```
Cognitive Symptoms
       ↓
Plasma p-tau217
       ↓
   ┌───┴───┐
   Low     High
   ↓       ↓
Unlikely   Likely AD
AD         ↓
           Consider:
           - Amyloid PET confirmation
           - Anti-amyloid therapy eligibility
           - Clinical trial enrollment
```

### Two-Cutoff Strategy
| Result | p-tau217 Level | Action |
|--------|----------------|--------|
| Negative | <Low cutoff | Amyloid unlikely; seek other causes |
| Intermediate | Between cutoffs | Confirmatory testing (PET/CSF) |
| Positive | >High cutoff | Amyloid highly likely |

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Plasma_p-tau217]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Blood_NfL]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Lumbar_Puncture]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Frontotemporal_Dementia]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Plasma_p-tau217]] (biomarker)
```yaml
last_modified: '2026-01-26T06:03:12.002350'
source: obsidian
```
- → [[Neurofilament_Light_Chain]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Plasma_A4240_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Amyloid-Beta_4240_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Preclinical_AD]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Retinal_Imaging_for_Neurodegeneration]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Alzheimers_Disease]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Neuron-Derived_Exosome_Biomarkers]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[MTBR-tau243]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Mild_Cognitive_Impairment]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Plasma_Amyloid-Beta_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Amyloid_PET_Imaging]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.556335'
source: obsidian
```
- → [[Lecanemab]] (entity)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Preclinical_AD]] (entity)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Donanemab]] (entity)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Plasma_A4240_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Frontotemporal_Dementia]] (condition)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Amyloid_PET_Imaging]] (examination)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Mild_Cognitive_Impairment]] (condition)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Lumbar_Puncture]] (examination)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Alzheimers_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- ← [[Plasma_Amyloid-Beta_Ratio]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- ← [[Neuron-Derived_Exosome_Biomarkers]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.353378'
source: obsidian
```
- ← [[MTBR-tau243]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:14.924796'
source: obsidian
```
- ← [[GFAP]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:12.668732'
source: obsidian
```
- ← [[Blood_NfL]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:10.597897'
source: obsidian
```
- ← [[Retinal_Imaging_for_Neurodegeneration]] (examination)
```yaml
last_modified: '2026-01-26T07:07:45.549973'
source: obsidian
```
- → [[Neurofilament_Light_Chain]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Phospho-Tau]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[GFAP]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
- → [[Amyloid-Beta_4240_Ratio]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.234462'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Conditions
- → [[Alzheimer's Disease]] (condition) - *Highest accuracy biomarker*
- → [[Mild Cognitive Impairment]] (condition) - *Predicts conversion*
- → [[Preclinical AD]] (condition) - *Early detection*
- → [[Frontotemporal Dementia]] (condition) - *Helps differentiate (normal in FTD)*

### Related Biomarkers
- → [[Amyloid-Beta 42/40 Ratio]] (biomarker) - *CSF/plasma amyloid*
- → [[Phospho-Tau]] (biomarker) - *CSF gold standard*
- → [[Neurofilament Light Chain]] (biomarker) - *Neurodegeneration*
- → [[Plasma Aβ42/40 Ratio]] (biomarker) - *Complementary*
- → [[GFAP]] (biomarker) - *Astrocyte marker*

### Examinations
- ← [[Amyloid PET Imaging]] (examination) - *Confirmatory imaging*
- ← [[Lumbar Puncture]] (examination) - *CSF alternative*

### Therapeutics
- → [[Lecanemab]] (drug) - *Eligibility screening*
- → [[Donanemab]] (drug) - *Eligibility screening*

## Advantages and Limitations

### Advantages
- Blood draw (minimally invasive)
- High accuracy (~95%)
- Cost-effective ($200-400 vs $5,000 PET)
- Scalable for population screening
- Tracks treatment response

### Current Limitations
- Cutoffs still being established
- Platform-to-platform variability
- Intermediate zone requires confirmation
- FDA approval pending for most platforms
- Reimbursement uncertain

## Sample Considerations

### Pre-analytical Factors
- Standard K2-EDTA tubes
- Process within 4-8 hours
- -80°C storage for long-term
- Avoid hemolysis
- Fasting not required

### Stability
- More stable than Aβ42/40 in blood
- Relatively robust to handling variations
- Freeze-thaw cycles minimally affect results

## Future Directions

### Combination Panels
- p-tau217 + Aβ42/40 ratio + NfL
- Multi-marker algorithms
- Machine learning optimization

### Point-of-Care Testing
- Goal: Rapid, in-clinic testing
- Lateral flow or similar technology
- Still in development

### Population Screening
- Potential for 65+ screening
- Cost-effectiveness models favorable
- Implementation considerations ongoing

## References
1. **JAMA Validation**: Palmqvist, S., et al. (2020). "Discriminative accuracy of plasma p-tau217 for AD." *JAMA*.
2. **BioFINDER**: Mattsson-Carlgren, N., et al. (2024). "Plasma p-tau217 in clinical practice." *Nature Medicine*.
3. **Head-to-Head**: Ashton, N.J., et al. (2024). "Comparison of plasma AD biomarkers." *Alzheimer's & Dementia*.
4. **Clinical Implementation**: Hansson, O., et al. (2024). "Blood biomarkers for AD: Moving toward clinical implementation." *The Lancet Neurology*.