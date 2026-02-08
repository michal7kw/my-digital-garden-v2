---
created: '2026-02-08T19:25:12.906672Z'
description: Ubiquitin C-terminal Hydrolase L1, a neuron-specific enzyme released
  upon neuronal injury. FDA-cleared for traumatic brain injury assessment in combination
  with GFAP.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Biomarker/uch-l1/
slug: uch-l1
tags:
- Biomarker
- biomarker
- blood-test
- neuronal-injury
- tbi
- fda-cleared
title: UCH-L1
type: Biomarker
updated: '2026-02-08T19:25:12.906672Z'
---

# UCH-L1 (Ubiquitin C-terminal Hydrolase L1)

## Overview
Ubiquitin C-terminal Hydrolase L1 (UCH-L1) is a deubiquitinating enzyme highly expressed in neurons, comprising 1-2% of total brain protein. Upon neuronal damage, UCH-L1 is rapidly released into blood, making it a sensitive acute biomarker for brain injury. Combined with GFAP, UCH-L1 is FDA-cleared for traumatic brain injury triage.

## Biological Background

### Normal Function
- Deubiquitinating enzyme (protein recycling)
- Highly abundant in neurons
- Involved in synaptic function
- Regulates protein degradation

### Release in Injury
- Released from damaged neurons
- Peaks early (hours after injury)
- Shorter half-life than GFAP
- Complements GFAP kinetics

## FDA-Cleared Application

### TBI Triage (Abbott i-STAT TBI Plasma Test)
- Combined UCH-L1 + GFAP algorithm
- Indicated for adults with suspected mild TBI
- Rules out need for head CT
- Point-of-care testing (~15 minutes)

### Clinical Performance
| Metric | Value |
|--------|-------|
| NPV for intracranial lesion | 99.6% |
| Sensitivity | >97% |
| Specificity | ~37% (optimized for NPV) |
| Time to result | ~15 minutes |

### When to Use
- Glasgow Coma Scale 13-15 (mild TBI)
- Within 12 hours of injury
- Presentation where CT is considered

## Kinetics After Brain Injury

### UCH-L1 vs GFAP Timing
| Biomarker | Peak | Half-life | Window |
|-----------|------|-----------|--------|
| UCH-L1 | 6-12 hours | 7-9 hours | 0-24 hours |
| GFAP | 24-48 hours | 24-48 hours | 0-7 days |

### Complementary Kinetics
- UCH-L1: Early detection (first 12 hours)
- GFAP: Extended window (days)
- Combined: Broad temporal coverage

## Other Clinical Contexts

### Cardiac Arrest
- Elevated in hypoxic brain injury
- Prognostic potential
- Less studied than NSE for this indication

### Stroke
- Acute elevation
- May correlate with infarct size
- Research stage

### Neurodegeneration
- Some studies show elevation in AD
- Less validated than NfL, p-tau
- Research interest

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[Cardiac_Arrest]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- → [[Blood_NfL]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- → [[Hypoxic_Brain_Injury]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- → [[Neurofilament_Light_Chain]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- → [[Traumatic_Brain_Injury]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- → [[CT_Head]] (entity)
```yaml
last_modified: '2026-01-26T06:47:24.670857'
source: obsidian
```
- ← [[NSE]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:21.693422'
source: obsidian
```
- ← [[Neurofilament_Light_Chain]] (biomarker)
```yaml
last_modified: '2026-01-26T06:47:20.980878'
source: obsidian
```
- → [[CT_Head]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[Stroke]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[Cardiac_Arrest]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[Hypoxic_Brain_Injury]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[Traumatic_Brain_Injury]] (entity)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- ← [[S100B]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:16.720220'
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
- → [[Neurofilament_Light_Chain]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[NSE]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[GFAP]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
- → [[S100B]] (biomarker)
```yaml
last_modified: '2026-01-26T07:07:18.184073'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Conditions
- → [[Traumatic Brain Injury]] (condition) - *FDA-cleared indication*
- → [[Hypoxic Brain Injury]] (condition) - *Elevated acutely*
- → [[Stroke]] (condition) - *Research*
- → [[Cardiac Arrest]] (condition) - *Prognostic potential*

### Related Biomarkers
- → [[GFAP]] (biomarker) - *Combined in TBI test*
- → [[S100B]] (biomarker) - *Alternative TBI marker*
- → [[NSE]] (biomarker) - *Neuronal marker*
- → [[Neurofilament Light Chain]] (biomarker) - *Axonal damage*

### Examinations
- ← [[CT Head]] (examination) - *Imaging decision support*

## Advantages and Limitations

### Advantages
- FDA-cleared, point-of-care
- Neuron-specific
- Rapid results (15 minutes)
- High NPV for CT decision
- Early detection after injury

### Limitations
- Short half-life (miss delayed presentation)
- Lower specificity (false positives)
- Limited to acute injury window
- Not validated for neurodegeneration
- Only in combination with GFAP

## Sample Considerations

### Collection
- Plasma (K2-EDTA) or serum
- Within 12 hours of injury for optimal sensitivity
- Standard handling procedures

### Interference
- Hemolysis may affect results
- Following manufacturer protocol critical

## Clinical Decision Support

### Negative Result (Low UCH-L1 + GFAP)
- Low probability of intracranial lesion
- CT may not be needed
- Clinical judgment still applies
- Observe for symptom changes

### Positive Result (Elevated)
- Does not confirm lesion (low specificity)
- CT imaging recommended
- Rule-in test, not rule-out

## References
1. **FDA Clearance**: Abbott i-STAT TBI Plasma test (2018, updated 2021).
2. **Validation**: Bazarian, J.J., et al. (2018). "Serum GFAP and UCH-L1 for prediction of absence of intracranial injuries." *The Lancet Neurology*.
3. **Kinetics**: Papa, L., et al. (2016). "Time course and diagnostic accuracy of glial and neuronal blood biomarkers GFAP and UCH-L1." *JAMA Neurology*.