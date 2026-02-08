---
created: '2026-02-08T19:25:13.054622Z'
description: A sulfur-containing amino acid produced during methionine metabolism.
  Elevated levels are a risk factor for cardiovascular disease, cognitive decline,
  and neural tube defects.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Metabolite/homocysteine/
slug: homocysteine
tags:
- Metabolite
- metabolite
- cardiovascular_risk
- methylation
- amino_acid
title: Homocysteine
type: Metabolite
updated: '2026-02-08T19:25:13.054622Z'
---

# Homocysteine

## Overview

**Homocysteine** is a non-proteinogenic amino acid synthesized from methionine. It occupies a central intersection in the methylation cycle and transsulfuration pathway. It is not obtained from the diet directly but is produced via the demethylation of S-adenosylmethionine (SAMe).

Efficient recycling of homocysteine is critical for health. When recycling pathways are impaired (often due to nutrient deficiencies or genetic variants like MTHFR), homocysteine accumulates, causing endothelial damage, oxidative stress, and neurotoxicity.

## Metabolism Pathways

Homocysteine has two metabolic fates:

### 1. Remethylation (Back to Methionine)
- **Folate-Dependent Pathway:** Requires **5-MTHF** (active folate) and **Vitamin B12**. Catalyzed by Methionine Synthase (MTR).
- **Betaine-Dependent Pathway:** Uses Betaine (TMG) as a methyl donor. Catalyzed by Betaine-Homocysteine Methyltransferase (BHMT), primarily in the liver.

### 2. Transsulfuration (To Cysteine/Glutathione)
- Irreversibly converts homocysteine to cystathionine and then cysteine.
- Requires **Vitamin B6** (P5P).
- Critical for the synthesis of **Glutathione**, the body's master antioxidant.

## Clinical Significance

- **Cardiovascular Disease:** Hyperhomocysteinemia damages blood vessel linings (endothelial dysfunction) and promotes clotting, increasing the risk of atherosclerosis, heart attack, and stroke.
- **Cognitive Decline:** High levels are strongly associated with brain atrophy, vascular dementia, and Alzheimer's disease.
- **Bone Health:** High levels disrupt collagen cross-linking, increasing osteoporosis and fracture risk.
- **Pregnancy:** Associated with neural tube defects and pre-eclampsia.

## Relationships

PRODUCED_FROM::[[Methionine]] - Via SAMe pathway
CONVERTED_TO::[[Glutathione]] - Via transsulfuration (requires B6)
CONVERTED_TO::[[Methionine]] - Via remethylation (requires B12/Folate)
REQUIRES_COFACTOR::[[Vitamin B12]] - For remethylation
REQUIRES_COFACTOR::[[Folate]] - For remethylation
REQUIRES_COFACTOR::[[Vitamin B6]] - For transsulfuration
REQUIRES_COFACTOR::[[Betaine]] - Alternate remethylation donor
INCREASED_BY::[[MTHFR Gene]] - MTHFR C677T variant impairs folate cycle
INCREASED_BY::[[Vitamin B12 Deficiency]]
INCREASED_BY::[[Folate Deficiency]]
ASSOCIATED_WITH_CONDITION::[[Cardiovascular Disease]] - Independent risk factor
ASSOCIATED_WITH_CONDITION::[[Alzheimer's Disease]] - Risk factor
ASSOCIATED_WITH_CONDITION::[[Osteoporosis]]

## References

- Seshadri S, et al. Plasma homocysteine as a risk factor for dementia and Alzheimer's disease. N Engl J Med. 2002;346(7):476-83.
- Refsum H, Smith AD. Ueland PM, et al. Facts and recommendations about total homocysteine determinations: an expert opinion. Clin Chem. 2004;50(1):3-32.
- Homocysteine Studies Collaboration. Homocysteine and risk of ischemic heart disease and stroke: a meta-analysis. JAMA. 2002;288(16):2015-22.