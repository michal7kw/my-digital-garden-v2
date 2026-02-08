---
created: '2026-02-08T19:45:44.441587Z'
description: Blood-based measurement of amyloid-beta 42/40 ratio using mass spectrometry
  or immunoassay. Enables non-invasive screening for brain amyloid pathology with
  moderate accuracy.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/plasma-amyloid-beta-ratio/
slug: plasma-amyloid-beta-ratio
tags:
- biomarker
- blood-test
- alzheimers
- amyloid
- screening
title: Plasma Amyloid-Beta Ratio
type: biomarker
updated: '2026-02-08T19:45:44.441587Z'
---

# Plasma Amyloid-Beta Ratio

## Overview
Plasma amyloid-beta 42/40 (Aβ42/40) ratio measurement enables non-invasive detection of brain amyloid pathology. Like CSF, a decreased plasma Aβ42/40 ratio indicates amyloid accumulation in the brain. However, plasma concentrations are ~50-fold lower than CSF, making accurate measurement technically challenging. Mass spectrometry-based methods show the best performance.

## Measurement Challenges

### Why Plasma Aβ Is Difficult
- Very low concentrations (pg/mL)
- Peripheral sources (platelets, muscle)
- Matrix interference
- Standardization issues
- High-precision assays required

### Technology Comparison
| Method | Performance | Availability | Notes |
|--------|-------------|--------------|-------|
| IP-MS (Shimadzu) | Best (AUC ~0.90) | Limited | Research standard |
| LC-MS/MS (C2N) | Very good (AUC ~0.88) | Commercial (PrecivityAD) | CLIA lab |
| Immunoassay (Elecsys) | Moderate (AUC ~0.75-0.82) | Broad | Fully automated |
| SIMOA | Variable | Research | Platform-dependent |

## Clinical Performance

### Mass Spectrometry-Based
| Comparison | AUC | Sensitivity | Specificity |
|------------|-----|-------------|-------------|
| Amyloid PET + vs - | 0.85-0.92 | 80-88% | 80-90% |
| AD vs controls | 0.75-0.85 | Variable | Variable |

### Immunoassay-Based
- Generally lower accuracy than MS
- AUC 0.70-0.82 for amyloid detection
- Improving with newer platforms

## Commercial Tests

### PrecivityAD (C2N Diagnostics)
- LC-MS/MS based
- CLIA laboratory test
- Aβ42/40 + ApoE proteotype
- Amyloid Probability Score (APS)
- FDA breakthrough designation

### PrecivityAD2
- Adds p-tau217 to Aβ42/40 ratio
- Improved accuracy
- Multi-analyte panel

### Elecsys Plasma Aβ42/40 (Roche)
- Fully automated immunoassay
- Available on cobas platform
- Research/clinical use expanding

## Interpretation

### Ratio Direction
- **Decreased ratio** = Brain amyloid deposition
- Opposite to CSF convention (same biology)
- Ratio normalizes for production variability

### Amyloid Probability Score (C2N)
| Score | Interpretation |
|-------|----------------|
| 0-35 | Low likelihood of amyloid pathology |
| 36-57 | Intermediate (consider additional testing) |
| 58-100 | High likelihood of amyloid pathology |

## Role in Diagnostic Algorithm

### Pre-Screening for PET/CSF
```
Cognitive Symptoms
       ↓
Plasma Aβ42/40 + p-tau217
       ↓
   ┌───┴───┐
Low prob.  High prob.
   ↓          ↓
Consider   Confirm with PET
other      or proceed to treatment
causes     discussion
```

### Cost-Effectiveness
- Blood test: $200-500
- Amyloid PET: $3,000-6,000
- Two-step approach saves ~50% in testing costs

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Plasma_Amyloid-Beta_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Amyloid-Beta_4240_Ratio]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Mild_Cognitive_Impairment]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Alzheimers_Disease]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Plasma_p-tau217]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Neurofilament_Light_Chain]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Cerebral_Amyloid_Angiopathy]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Amyloid_PET_Imaging]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Lumbar_Puncture]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Neuron-Derived_Exosome_Biomarkers]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Amyloid_Cascade]] (entity)
```yaml
last_modified: '2026-01-26T06:47:22.284460'
source: obsidian
```
- → [[Plasma_Amyloid-Beta_Ratio]] (biomarker)
```yaml
last_modified: '2026-01-26T06:03:11.835566'
source: obsidian
```
- → [[Cerebral_Amyloid_Angiopathy]] (entity)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Amyloid_Cascade]] (pathway)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Mild_Cognitive_Impairment]] (condition)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Alzheimers_Disease]] (condition)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Plasma_p-tau217]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Lumbar_Puncture]] (examination)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Amyloid_PET_Imaging]] (examination)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- ← [[Neuron-Derived_Exosome_Biomarkers]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.353378'
source: obsidian
```
- → [[Amyloid-Beta_4240_Ratio]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[GFAP]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
- → [[Neurofilament_Light_Chain]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:15.960616'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Conditions
- → [[Alzheimer's Disease]] (condition) - *Amyloid biomarker*
- → [[Mild Cognitive Impairment]] (condition) - *Risk stratification*
- → [[Cerebral Amyloid Angiopathy]] (condition) - *May be abnormal*

### Related Biomarkers
- → [[Amyloid-Beta 42/40 Ratio]] (biomarker) - *CSF gold standard*
- → [[Plasma p-tau217]] (biomarker) - *Combination panel*
- → [[Neurofilament Light Chain]] (biomarker) - *Neurodegeneration*
- → [[GFAP]] (biomarker) - *Astrocyte marker*

### Examinations
- ← [[Amyloid PET Imaging]] (examination) - *Gold standard confirmation*
- ← [[Lumbar Puncture]] (examination) - *CSF alternative*

### Pathways
- → [[Amyloid Cascade]] (pathway) - *Reflects plaque burden*

## Comparison: Plasma Aβ vs p-tau217

| Feature | Plasma Aβ42/40 | Plasma p-tau217 |
|---------|----------------|-----------------|
| Accuracy (AUC) | 0.80-0.90 | 0.94-0.98 |
| Reflects | Amyloid plaques | Tau + amyloid pathology |
| Technical ease | More challenging | Easier |
| Specificity | Amyloid-specific | AD-specific |
| Current role | Adjunct/combination | Primary blood marker |

## Advantages and Limitations

### Advantages
- Non-invasive (blood draw)
- Cost-effective screening
- Complement to tau markers
- PrecivityAD CLIA-certified

### Limitations
- Lower accuracy than p-tau217
- Mass spec not widely available
- Immunoassay less accurate
- Peripheral sources may confound
- Requires high-precision methodology

## Pre-analytical Considerations

### Sample Collection
- K2-EDTA plasma typically
- Polypropylene tubes (Aβ binds polystyrene)
- Process within specified time (2-4 hours)
- Freeze at -80°C

### Quality Control
- Hemolysis affects results
- Standardized handling essential
- Platform-specific protocols

## Future Developments

### Improved Immunoassays
- Higher sensitivity platforms
- Point-of-care potential
- Automated clinical analyzers

### Combination Algorithms
- Aβ42/40 + p-tau217 + NfL + GFAP
- Machine learning optimization
- Personalized probability estimates

## References
1. **Mass Spec Validation**: Nakamura, A., et al. (2018). "High-performance plasma Aβ biomarkers." *Nature*.
2. **PrecivityAD**: Kirmess, K.M., et al. (2021). "LC-MS/MS for plasma Aβ and ApoE proteotypes." *Clinical Chemistry*.
3. **Immunoassay**: Janelidze, S., et al. (2021). "Plasma Aβ42/40 and Aβ42/P-tau181 ratios." *Alzheimer's & Dementia*.