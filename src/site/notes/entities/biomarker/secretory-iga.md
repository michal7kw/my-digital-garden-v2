---
created: '2026-02-08T19:45:44.443830Z'
description: Secretory Immunoglobulin A is the predominant antibody in mucosal secretions,
  forming the first line of immune defense in the gut, respiratory tract, and other
  mucosal surfaces. It prevents pathogen adherence and neutralizes toxins without
  triggering inflammatory responses.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/secretory-iga/
slug: secretory-iga
tags:
- biomarker
title: Secretory IgA
type: biomarker
updated: '2026-02-08T19:45:44.443830Z'
---

# Secretory IgA

## Overview
Secretory Immunoglobulin A (sIgA) is a dimeric antibody that constitutes the first line of adaptive immune defense at mucosal surfaces. Produced by plasma cells in the lamina propria of the gut, respiratory tract, urogenital tract, and other mucosal tissues, sIgA is transported across epithelial cells and released into the lumen where it performs immune exclusion - binding pathogens, toxins, and antigens to prevent their adherence to and penetration of mucosal epithelium.

Unlike IgG-mediated immunity, sIgA provides "non-inflammatory" immune protection. It neutralizes pathogens and toxins without activating complement or triggering inflammation, making it essential for maintaining mucosal homeostasis. Approximately 3-5 grams of sIgA are secreted into the gut lumen daily, making it the most abundantly produced antibody in the body.

Low sIgA levels indicate compromised mucosal immunity and are associated with increased susceptibility to gastrointestinal infections, food sensitivities, and autoimmune conditions. Chronic stress is a well-established suppressor of sIgA production. Fecal sIgA measurement is commonly included in comprehensive stool analyses and provides insight into gut immune function.

## Reference Ranges

| Range | Value | Interpretation |
|-------|-------|----------------|
| **Low** | <51 mg/dL (stool) | Compromised mucosal immunity |
| **Normal** | 51-204 mg/dL (stool) | Adequate mucosal defense |
| **High** | >204 mg/dL (stool) | Active mucosal immune response |
| **Optimal** | 100-200 mg/dL | Robust mucosal immunity |

## Testing Information
- **Measurement Unit**: mg/dL (stool) or mg/L (saliva)
- **Sample Type**: Stool (preferred) or saliva
- **Fasting Required**: False
- **Recommended Test Frequency**: Annually or when GI symptoms present

## 💊 Supplements That Affect This Biomarker

- [[Probiotics]] - Increases sIgA by stimulating mucosal immune cells (moderate effect, evidence level 3)
- [[Glutamine]] - Supports mucosal cell integrity and sIgA production (mild effect, evidence level 3)
- [[Vitamin A]] - Essential for mucosal immunity and IgA class switching (mild effect, evidence level 3)
- [[Colostrum]] - Contains sIgA and stimulates endogenous production (moderate effect, evidence level 3)

## 🧪 Lab Tests That Measure This Biomarker

### Direct Tests
- [[gi map]] - Includes fecal sIgA in comprehensive stool analysis
- [[thorne gut health]] - Includes sIgA measurement
- Salivary sIgA test - Non-invasive saliva-based measurement

## Relationships

### Correlations
- → [[Zonulin]] (biomarker) - Gut permeability affects mucosal immune function
- → [[Calprotectin]] (biomarker) - Both reflect gut immune status
- → [[Cortisol]] (biomarker) - Chronic elevated cortisol suppresses sIgA

### Related Conditions
- → [[IgA Deficiency]] (condition)
- → [[Inflammatory Bowel Disease]] (condition)
- → [[Celiac Disease]] (condition)
- → [[Recurrent Infections]] (condition)

## References
- PMID:25268742 - Mantis et al. (2011) Secretory IgA's complex roles at mucosal surfaces
- PMID:18806122 - Gleeson et al. (2011) Exercise, nutrition and immune function
- PMID:11157326 - Mora et al. (2006) Role of retinoic acid in IgA production

## Dataview Queries
```dataview
LIST
FROM [[Secretory IgA]]
WHERE contains(type, "Intervention")
SORT confidence_score DESC
```