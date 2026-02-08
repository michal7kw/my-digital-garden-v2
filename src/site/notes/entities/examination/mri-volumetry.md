---
created: '2026-02-08T19:29:31.651813Z'
description: Quantitative magnetic resonance imaging measuring brain structure volumes,
  particularly hippocampal atrophy. Used for neurodegeneration assessment in the ATN
  framework and clinical trials.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/examination/mri-volumetry/
slug: mri-volumetry
tags:
- examination
- neuroimaging
- mri
- atrophy
- neurodegeneration
title: MRI Volumetry
type: examination
updated: '2026-02-08T19:29:31.651813Z'
---

# MRI Volumetry

## Overview
MRI volumetry uses high-resolution structural MRI to quantitatively measure brain structure volumes, providing objective assessment of neurodegeneration. Hippocampal volume is particularly important in Alzheimer's disease, while other regional measures help differentiate between dementia subtypes. Automated software now enables clinical use with standardized, FDA-cleared reports.

## Key Measurements

### Hippocampal Volume
- Most validated measure for AD
- Early atrophy correlates with memory impairment
- Age and head-size corrected (percentile ranking)
- Threshold: ~5th percentile often considered abnormal

### Additional Regions of Interest
| Structure | Clinical Relevance |
|-----------|-------------------|
| Entorhinal cortex | Earliest AD involvement |
| Amygdala | Emotional processing, FTD |
| Temporal lobe | AD, semantic dementia |
| Frontal lobe | bvFTD |
| Parietal lobe | AD, posterior cortical atrophy |
| Caudate | Huntington's disease |
| Midbrain | PSP ("hummingbird sign") |
| Cerebellum | MSA-C |

### Global Measures
- Total brain volume
- Ventricular volume (inverse of parenchymal volume)
- Cortical thickness maps
- White matter hyperintensity volume

## Analysis Methods

### FDA-Cleared Commercial Software
| Software | Manufacturer | Features |
|----------|--------------|----------|
| NeuroQuant | Cortechs.ai | Hippocampal, brain aging index |
| Neuroreader | Brainreader | Multiple regions, asymmetry |
| Quantib ND | Quantib | European, research features |
| Icobrain | Icometrix | MS and dementia applications |

### Research Tools
- **FreeSurfer**: Open-source, gold standard for research
- **FSL**: Flexible analysis suite
- **SPM**: Voxel-based morphometry
- **ADNI protocols**: Standardized acquisition

## Disease-Specific Patterns

### Alzheimer's Disease
- **Early**: Hippocampal/entorhinal atrophy
- **Moderate**: Temporal and parietal atrophy
- **Advanced**: Global atrophy, ventricular enlargement
- **Asymmetry**: Usually symmetric

### Frontotemporal Dementia
- **bvFTD**: Frontal and anterior temporal atrophy
- **svPPA**: Left anterior temporal (knife-edge atrophy)
- **nfvPPA**: Left frontal operculum, insula
- Often asymmetric

### Dementia with Lewy Bodies
- Less hippocampal atrophy than AD
- More diffuse cortical thinning
- Preserved medial temporal volume (early)

### Vascular Dementia
- White matter hyperintensities (Fazekas score)
- Lacunar infarcts
- Strategic infarct locations
- Less hippocampal atrophy than AD

### Huntington's Disease
- Caudate atrophy (earliest and most sensitive)
- Putamen atrophy
- Correlates with CAG repeat length

### Progressive Supranuclear Palsy
- Midbrain atrophy ("hummingbird sign" sagittal)
- "Morning glory sign" (axial midbrain)
- Superior cerebellar peduncle atrophy

## Clinical Applications

### Dementia Differential Diagnosis
- Hippocampal atrophy: Supports AD
- Frontal atrophy: Suggests FTD
- Caudate atrophy: Consider HD
- Midbrain atrophy: Consider PSP

### ATN Framework: "N" Component
- Neurodegeneration biomarker (alongside FDG-PET, CSF t-tau)
- Hippocampal volume as primary measure
- Rates of atrophy for progression

### Clinical Trials
- Inclusion/exclusion (confirm atrophy)
- Outcome measure (rate of atrophy)
- Sample size reduction using enrichment

### Longitudinal Monitoring
- Annual atrophy rates:
  - Normal aging: ~0.5%/year
  - MCI: ~1-2%/year
  - AD: ~2-4%/year hippocampal
- Boundary shift integral for whole brain

## Interpretation

### Age-Adjusted Percentiles
| Percentile | Interpretation |
|------------|----------------|
| >25th | Normal for age |
| 5th-25th | Below average; monitor |
| <5th | Abnormally low; concerning |
| <1st | Severe atrophy |

### Confounders
- Head size (normalize by intracranial volume)
- Age (use age-matched norms)
- Sex (slight differences)
- Scanner and sequence (standardize)

## Relationships

### Conditions
- → [[Alzheimer's Disease]] (condition) - *Hippocampal atrophy*
- → [[Mild Cognitive Impairment]] (condition) - *Predicts conversion*
- → [[Frontotemporal Dementia]] (condition) - *Frontal pattern*
- → [[Huntington's Disease]] (condition) - *Caudate atrophy*
- → [[Progressive Supranuclear Palsy]] (condition) - *Midbrain atrophy*

### Brain Regions
- → [[Hippocampus]] (organ) - *Key measurement*
- → [[Entorhinal Cortex]] (organ) - *Earliest change*
- → [[Prefrontal Cortex]] (organ) - *FTD involvement*

### Related Imaging
- ← [[Amyloid PET Imaging]] (examination) - *ATN A component*
- ← [[Tau PET Imaging]] (examination) - *ATN T component*
- ← [[FDG-PET]] (examination) - *Functional correlate*

### Biomarkers
- → [[Neurofilament Light Chain]] (biomarker) - *Correlates with atrophy*
- → [[Total Tau]] (biomarker) - *Neurodegeneration marker*

## Advantages and Limitations

### Advantages
- No radiation
- Widely available
- Objective, quantitative
- Tracks progression
- FDA-cleared automated analysis

### Limitations
- Motion artifact sensitivity
- Scanner variability
- Normal aging overlap
- Not specific for etiology
- Single timepoint less informative

## Practical Considerations

### Optimal Acquisition
- 3D T1-weighted MPRAGE or IR-FGRE
- 1mm isotropic resolution
- Minimal motion (head restraint, short scan)
- Consistent scanner for longitudinal

### Report Components
- Hippocampal volume (bilateral)
- Age-adjusted percentiles
- Comparison to normative database
- Longitudinal change (if prior scan)
- Visual atrophy confirmation

## References
1. **NeuroQuant Validation**: Brewer, J.B. (2009). "Fully-automated volumetric MRI with normative ranges." *Radiology*.
2. **ADNI Methods**: Jack, C.R., et al. (2008). "The ADNI MRI core." *Alzheimer's & Dementia*.
3. **Clinical Utility**: Defined, E., et al. (2021). "MRI volumetry in dementia." *Neuroradiology*.