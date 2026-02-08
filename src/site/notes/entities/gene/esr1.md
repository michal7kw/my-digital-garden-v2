---
created: '2026-02-08T19:29:31.655819Z'
description: '...'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/gene/esr1/
slug: esr1
tags:
- gene
- endocrine
- cancer_biology
- nuclear_receptor
- imported
- primekg
title: ESR1
type: gene
updated: '2026-02-08T19:29:31.655819Z'
---

# "ESR1"

## Overview

The **ESR1** gene encodes **Estrogen Receptor Alpha (ERα)**, a ligand-activated transcription factor belonging to the nuclear hormone receptor superfamily. It is the primary mediator of estrogen signaling in the breast, uterus, and pituitary gland.

Upon binding estrogen (Estradiol), ERα undergoes a conformational change, dimerizes, and translocates to the nucleus where it binds to Estrogen Response Elements (EREs) in DNA to regulate gene expression.

## Biological Functions

### 1. Reproductive Physiology
- **Growth & Development:** Essential for the development of secondary sexual characteristics, breast tissue, and uterine lining proliferation.
- **HPG Axis:** Regulates the feedback loop with the pituitary (LH/FSH secretion).

### 2. Systemic Effects
- **Bone:** Maintains bone density by inhibiting osteoclasts.
- **Cardiovascular:** Mediates the cardioprotective effects of estrogen (vasodilation, lipid profile).

## Clinical Significance

- **Breast Cancer:** ERα is overexpressed in ~70% of breast cancers (ER-positive). It drives tumor growth by activating proliferation genes.
    - **Endocrine Therapy:** These cancers are treated with drugs that target ERα, either by blocking it (Tamoxifen) or degrading it (Fulvestrant), or by blocking estrogen synthesis (Aromatase Inhibitors).
- **Therapy Resistance:** ESR1 mutations (e.g., Y537S, D538G) often emerge in metastatic breast cancer after Aromatase Inhibitor treatment. These mutations render the receptor constitutively active (always "on") even without estrogen, leading to resistance.

## Relationships

ENCODES::[[Estrogen Receptor Alpha]]
ACTIVATED_BY::[[Estrogen]] - Primary ligand
ACTIVATED_BY::[[Estradiol]] - High affinity ligand
INHIBITED_BY::[[Tamoxifen]] - SERM (Selective Estrogen Receptor Modulator)
INHIBITED_BY::[[Fulvestrant]] - SERD (Selective Estrogen Receptor Degrader)
REGULATES::[[Gene Expression]] - Via ERE binding
ASSOCIATED_WITH_CONDITION::[[Breast Cancer]] - ER+ subtype
ASSOCIATED_WITH_CONDITION::[[Osteoporosis]] - Loss of signaling causes bone loss
INTERACTS_WITH::[[ESR2]] - Estrogen Receptor Beta (can heterodimerize)
INTERACTS_WITH::[[EP300]] - Co-activator
INTERACTS_WITH::[[SRC]] - Co-activator (NCOA1)

## References

- Green S, et al. Human oestrogen receptor cDNA: sequence, expression and homology to v-erb-A. Nature. 1986;320(6058):134-9.
- Robinson DR, et al. Activating ESR1 mutations in hormone-resistant metastatic breast cancer. Nat Genet. 2013;45(12):1446-51.