---
created: '2026-02-08T19:45:44.535459Z'
description: Insulin-like Growth Factor 1. An anabolic hormone structurally similar
  to insulin that promotes growth and tissue repair but inhibits longevity pathways
  (mTOR activation).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/hormone/igf-1/
slug: igf-1
tags:
- hormone
- anabolic
- growth
- aging
- mtor_activator
title: IGF-1
type: hormone
updated: '2026-02-08T19:45:44.535459Z'
---

# IGF-1

## Overview

**IGF-1 (Insulin-like Growth Factor 1)** is the primary mediator of the effects of Growth Hormone (GH). Produced mainly in the liver, it drives systemic growth, muscle protein synthesis, and tissue repair.

It represents a fundamental evolutionary trade-off: high levels promote muscle mass and bone density ("Growth") but also accelerate aging and cancer risk by constantly activating mTOR and suppressing repair mechanisms like autophagy ("Longevity").

## Mechanism

- **Signaling:** Binds to the IGF-1 Receptor (IGF1R), activating the **PI3K/AKT/mTOR** pathway.
- **Inhibition of FOXO:** AKT phosphorylation keeps FOXO transcription factors in the cytoplasm, preventing them from activating stress resistance genes.

## Clinical Significance

- **Laron Syndrome:** A genetic form of dwarfism with very low IGF-1 activity. These individuals are extremely resistant to cancer and diabetes, highlighting the link between low IGF-1 and disease protection.
- **Sarcopenia:** Levels decline with age ("Somatopause"), contributing to muscle loss and frailty.
- **Longevity:** In almost every model organism (worms, flies, mice), reducing IGF-1 signaling extends lifespan.

## Relationships

PRODUCED_BY::[[Liver]]
REGULATED_BY::[[Growth Hormone]]
ACTIVATES::[[mTOR Pathway]] - Strong activator
ACTIVATES::[[AKT1]]
INHIBITS::[[FOXO3]] - Prevents stress resistance
INHIBITS::[[Autophagy]] - Via mTOR
PROMOTES::[[Muscle Hypertrophy]]
ASSOCIATED_WITH_CONDITION::[[Cancer]] - High levels correlate with risk
ASSOCIATED_WITH_CONDITION::[[Sarcopenia]] - Low levels correlate with risk
ASSOCIATED_WITH_CONDITION::[[Acromegaly]] - Excess GH/IGF-1

## References

- Kenyon C. The plasticity of aging: insights from long-lived mutants. Cell. 2005.
- Guevara-Aguirre J, et al. Growth hormone receptor deficiency is associated with a major reduction in pro-aging signaling, cancer, and diabetes in humans. Sci Transl Med. 2011.