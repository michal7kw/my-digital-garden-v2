---
{"dg-publish":true,"permalink":"/entities/research/pmid-25282031-co-q10-qsymbio-trial/","tags":["CoQ10","heart failure","cardiovascular","mortality","clinical trial","mitochondria","ATP"]}
---


# Q-SYMBIO: Coenzyme Q10 as adjunctive treatment of chronic heart failure

## Study Information
**Authors**: Mortensen SA, Rosenfeldt F, Kumar A, Dolliner P, Filipiak KJ, Pella D, Alehagen U, Steurer G, Littarru GP, Q-SYMBIO Study Investigators
**Journal**: JACC: Heart Failure
**Publication Date**: 2014-12-01
**Type**: Clinical Trial
**Study Design**: Randomized Controlled Trial
**Evidence Level**: 1b
**Citations**: 892
**DOI**: [10.1016/j.jchf.2014.06.008](https://doi.org/10.1016/j.jchf.2014.06.008)
**PMID**: [25282031](https://pubmed.ncbi.nlm.nih.gov/25282031/)
**Semantic Scholar**: [View](https://www.semanticscholar.org/paper/PMID:25282031)

## Abstract
The Q-SYMBIO trial was a landmark multicenter, randomized, double-blind, placebo-controlled study demonstrating that CoQ10 supplementation (300 mg/day for 2 years) significantly reduced cardiovascular mortality and hospitalizations in patients with chronic heart failure. This study established CoQ10 as the first adjunctive therapy in over a decade to improve survival in heart failure.

## Keywords
CoQ10, coenzyme Q10, heart failure, cardiovascular mortality, mitochondria, ATP, ubiquinone

## Relationships
STUDIES::[[entities/Supplement/Coenzyme Q10\|Coenzyme Q10]] - Primary intervention (300 mg/day)
STUDIES::[[entities/Supplement/CoQ10\|CoQ10]] - Alternative supplement name reference
TREATS::[[entities/condition/Heart Failure\|Heart Failure]] - Target condition (NYHA class III-IV)
AFFECTS::[[entities/Organ/Heart\|Heart]] - Target organ
INCREASES::[[entities/Metabolite/ATP\|ATP]] - Mechanism: enhanced mitochondrial energy production
AFFECTS::[[entities/cellularcomponent/Mitochondria\|Mitochondria]] - Primary site of action (electron transport chain)
DECREASES::[[entities/condition/Cardiovascular Disease\|Cardiovascular Disease]] - Reduced CV mortality outcome
INVOLVES::[[entities/protein/Cytochrome C\|Cytochrome C]] - Electron transport chain component
RELATED_TO::[[entities/protein/ATP Synthase\|ATP Synthase]] - Terminal enzyme in oxidative phosphorylation

## Methodology
```yaml
design: Multicenter, randomized, double-blind, placebo-controlled trial
centers: 17
countries:
  - Denmark
  - Sweden
  - Austria
  - Slovakia
  - Poland
  - India
  - Malaysia
  - Australia
randomization: Centralized computer-generated
blinding: Double-blind (patients, investigators, outcome assessors)
intervention: CoQ10 100 mg three times daily (300 mg/day) or placebo
```

### Study Design
- **Sample Size**: n=420
- **Duration**: 2 years
#### Population Characteristics
```yaml
age_mean: 62 years
gender: Both (68% male)
health_status: Chronic heart failure (NYHA class III-IV)
inclusion_criteria:
  - NYHA class III or IV
  - LVEF <40%
  - Optimal standard therapy
exclusion_criteria:
  - Acute MI within 3 months
  - Unstable angina
  - Planned cardiac surgery
```

## Results
### Key Findings
```yaml
primary:
  - name: Major adverse cardiovascular events (MACE)
    components:
      - Cardiovascular death
      - Hospitalization for HF
      - Mechanical circulatory support
      - Heart transplant
    result: 43% relative risk reduction
    p_value: 0.003
    nnt: 7
secondary:
  - name: All-cause mortality
    result: 42% reduction
    p_value: 0.036
  - name: Cardiovascular mortality
    result: 43% reduction
    p_value: 0.039
  - name: NYHA class improvement
    result: Significant improvement
    p_value: 0.028
  - name: Hospitalizations for heart failure
    result: Significantly reduced
```

### Statistical Analysis
#### Statistical Significance
```yaml
mace: HR 0.50, 95% CI 0.32-0.80, p = 0.003
cv_mortality: HR 0.57, 95% CI 0.33-0.97, p = 0.039
all_cause_mortality: HR 0.58, 95% CI 0.35-0.96, p = 0.036
```
#### Effect Sizes
```yaml
mace_reduction: 43% (HR 0.50)
nnt_for_mace: 7 patients over 2 years
absolute_risk_reduction: 14%
```

## Limitations
- Moderate sample size (n=420)
- Primarily European and Australian centers
- High dropout rate (~20%)
- No biomarker-guided treatment
- Older population (mean 62 years)

## Research Integrity
### Funding Sources
- Pharma Nord (provided study drug)
- Heart Research Institute
- Various national heart foundations
### Conflicts of Interest
- Pharma Nord provided study medication and partial funding
- Some investigators received speaking fees from Pharma Nord

## Replication Status
Results consistent with smaller prior studies; no formal replication attempted

## References
- Mortensen SA et al. Mol Aspects Med. 1997;18 Suppl:S137-144. PMID: 9266516
- Rosenfeldt FL et al. J Card Fail. 2007;13(7):596-602. PMID: 17826652
- Langsjoen PH et al. Int J Tissue React. 1990;12(3):163-168. PMID: 2276895

## Source Data
- **Source System:** PubMed
- **Last Modified in Source:** 2025-01-22