---
created: '2026-02-08T19:25:12.993119Z'
description: Encodes AKT1 (Protein Kinase B alpha), a serine/threonine kinase that
  is a central node in the PI3K/AKT pathway. Regulates cell survival, proliferation,
  metabolism, and insulin signaling.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Gene/akt1/
slug: akt1
tags:
- Gene
- gene
- kinase
- insulin_signaling
- mtor_pathway
- cancer_biology
- imported
- primekg
title: AKT1
type: Gene
updated: '2026-02-08T19:25:12.993119Z'
---

# AKT1

## Overview

**AKT1** (also known as Protein Kinase B alpha) is a serine/threonine kinase that serves as a critical signaling hub in human biology. It acts as the primary downstream effector of Phosphoinositide 3-kinase (PI3K) and is essential for translating extracellular signals (like insulin and growth factors) into cellular responses.

Because it promotes cell survival and growth while inhibiting apoptosis, the PI3K/AKT pathway is one of the most frequently hyperactivated pathways in human cancer.

## Biological Functions

### 1. Cell Survival and Anti-Apoptosis
AKT1 promotes survival by phosphorylating and inhibiting pro-apoptotic proteins:
- **Inhibits BAD and BAX:** Prevents them from triggering mitochondrial apoptosis.
- **Inhibits FOXO Transcription Factors:** Prevents the expression of pro-apoptotic genes (e.g., *BIM*, *FasL*).
- **Activates MDM2:** Promotes the degradation of p53, suppressing DNA damage-induced apoptosis.

### 2. Metabolism and Insulin Signaling
AKT1 is the master regulator of insulin's metabolic effects:
- **Glucose Uptake:** Stimulates the translocation of **GLUT4** transporters to the cell membrane in muscle and fat cells.
- **Glycogen Synthesis:** Phosphorylates and inhibits **GSK3beta**, thereby activating glycogen synthase.
- **Lipogenesis:** Activates mTORC1 to promote lipid synthesis.

### 3. Cell Growth and Proliferation
- **mTOR Activation:** AKT1 activates **mTORC1** (by inhibiting TSC2), which drives protein synthesis and cell growth.
- **Cell Cycle:** Regulates Cyclin D1 and inhibits p27 (CDKN1B) to promote G1/S progression.

## Clinical Significance

- **Cancer:** Hyperactivation of AKT1 (via PIK3CA mutation, PTEN loss, or AKT1 E17K mutation) drives uncontrolled tumor growth and chemoresistance.
- **Diabetes:** Impaired AKT1 signaling (insulin resistance) leads to reduced glucose uptake and hyperglycemia.
- **Proteus Syndrome:** A rare overgrowth disorder caused by somatic activating mutations in AKT1.

## Relationships

ENCODES::[[AKT1 Protein]]
PARTICIPATES_IN_PATHWAY::[[Insulin Signaling]]
PARTICIPATES_IN_PATHWAY::[[mTOR Pathway]]
PARTICIPATES_IN_PATHWAY::[[PI3K/AKT Signaling]]
ACTIVATED_BY::[[PI3K]] - Upstream kinase
ACTIVATED_BY::[[Insulin]] - Primary hormonal activator
ACTIVATED_BY::[[IGF-1]]
INHIBITED_BY::[[PTEN]] - Tumor suppressor that antagonizes PI3K
ACTIVATES::[[mTOR]] - Promotes growth
ACTIVATES::[[eNOS]] - Promotes vasodilation
INHIBITS::[[GSK3beta]] - Promotes glycogen synthesis
INHIBITS::[[FOXO]] - Promotes survival
INHIBITS::[[BAD]] - Anti-apoptotic
ASSOCIATED_WITH_CONDITION::[[Cancer]] - Frequently hyperactivated
ASSOCIATED_WITH_CONDITION::[[Type 2 Diabetes]] - Insulin resistance
ASSOCIATED_WITH_CONDITION::[[Proteus Syndrome]]

## References

- Manning BD, Toker A. AKT/PKB Signaling: Navigating the Network. Cell. 2017;169(3):381-405.
- Engelman JA, Luo J, Cantley LC. The evolution of phosphatidylinositol 3-kinases as regulators of growth and metabolism. Nat Rev Genet. 2006;7(8):606-619.
- Carnero A, Blanco-Aparicio C, Renner O, Link W, Leal JF. The PTEN/PI3K/AKT signalling pathway in cancer, therapeutic implications. Curr Cancer Drug Targets. 2008;8(3):187-198.