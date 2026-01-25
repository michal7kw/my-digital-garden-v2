---
{"dg-publish":true,"permalink":"/entities/biomarker/plasma-amyloid-beta-ratio/","tags":["biomarker","blood-test","alzheimers","amyloid","screening"]}
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

## Relationships

### Conditions
- → [[entities/condition/Alzheimer's Disease\|Alzheimer's Disease]] (condition) - *Amyloid biomarker*
- → [[entities/condition/Mild Cognitive Impairment\|Mild Cognitive Impairment]] (condition) - *Risk stratification*
- → [[Cerebral Amyloid Angiopathy\|Cerebral Amyloid Angiopathy]] (condition) - *May be abnormal*

### Related Biomarkers
- → [[Amyloid-Beta 42/40 Ratio\|Amyloid-Beta 42/40 Ratio]] (biomarker) - *CSF gold standard*
- → [[entities/biomarker/Plasma p-tau217\|Plasma p-tau217]] (biomarker) - *Combination panel*
- → [[entities/biomarker/Neurofilament Light Chain\|Neurofilament Light Chain]] (biomarker) - *Neurodegeneration*
- → [[entities/biomarker/GFAP\|GFAP]] (biomarker) - *Astrocyte marker*

### Examinations
- ← [[entities/Examination/Amyloid PET Imaging\|Amyloid PET Imaging]] (examination) - *Gold standard confirmation*
- ← [[entities/Examination/Lumbar Puncture\|Lumbar Puncture]] (examination) - *CSF alternative*

### Pathways
- → [[entities/pathway/Amyloid Cascade\|Amyloid Cascade]] (pathway) - *Reflects plaque burden*

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
