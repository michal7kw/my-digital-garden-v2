---
{"dg-publish":true,"permalink":"/entities/biomarker/plasma-p-tau217/","tags":["biomarker","blood-test","alzheimers","tau","cutting-edge","screening"]}
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

## Relationships

### Conditions
- → [[entities/condition/Alzheimer's Disease\|Alzheimer's Disease]] (condition) - *Highest accuracy biomarker*
- → [[entities/condition/Mild Cognitive Impairment\|Mild Cognitive Impairment]] (condition) - *Predicts conversion*
- → [[Preclinical AD\|Preclinical AD]] (condition) - *Early detection*
- → [[entities/condition/Frontotemporal Dementia\|Frontotemporal Dementia]] (condition) - *Helps differentiate (normal in FTD)*

### Related Biomarkers
- → [[Amyloid-Beta 42/40 Ratio\|Amyloid-Beta 42/40 Ratio]] (biomarker) - *CSF/plasma amyloid*
- → [[entities/biomarker/Phospho-Tau\|Phospho-Tau]] (biomarker) - *CSF gold standard*
- → [[entities/biomarker/Neurofilament Light Chain\|Neurofilament Light Chain]] (biomarker) - *Neurodegeneration*
- → [[Plasma Aβ42/40 Ratio\|Plasma Aβ42/40 Ratio]] (biomarker) - *Complementary*
- → [[entities/biomarker/GFAP\|GFAP]] (biomarker) - *Astrocyte marker*

### Examinations
- ← [[entities/Examination/Amyloid PET Imaging\|Amyloid PET Imaging]] (examination) - *Confirmatory imaging*
- ← [[entities/Examination/Lumbar Puncture\|Lumbar Puncture]] (examination) - *CSF alternative*

### Therapeutics
- → [[Lecanemab\|Lecanemab]] (drug) - *Eligibility screening*
- → [[Donanemab\|Donanemab]] (drug) - *Eligibility screening*

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
