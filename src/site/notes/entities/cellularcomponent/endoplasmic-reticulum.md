---
created: '2026-02-08T19:25:12.909076Z'
description: An extensive membrane network responsible for protein folding, lipid
  synthesis, and calcium storage. Communicates directly with mitochondria via MAMs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/CellularComponent/endoplasmic-reticulum/
slug: endoplasmic-reticulum
tags:
- CellularComponent
- cellular_component
- organelle
- protein_folding
- calcium_storage
- stress_response
title: Endoplasmic Reticulum
type: CellularComponent
updated: '2026-02-08T19:25:12.909076Z'
---

# Endoplasmic Reticulum

## Overview

The **Endoplasmic Reticulum (ER)** is the largest organelle in the cell, forming an interconnected network of flattened sacs and tubules. It is divided into two types:
1.  **Rough ER:** Studded with ribosomes; site of protein synthesis and folding.
2.  **Smooth ER:** Site of lipid synthesis, detoxification, and calcium storage.

## Key Functions

### 1. Protein Folding & Quality Control
The ER ensures that newly synthesized proteins are folded correctly. If misfolded proteins accumulate, the ER triggers the **Unfolded Protein Response (UPR)** to restore homeostasis or induce apoptosis if the stress is unresolved.

### 2. Calcium Storage
The ER is the primary intracellular reservoir for Calcium (Ca2+). It releases calcium signals to regulate muscle contraction, neurotransmission, and gene expression.

### 3. Mitochondrial Crosstalk (MAMs)
**Mitochondria-Associated Membranes (MAMs)** are physical contact points where the ER and Mitochondria touch. They are critical for:
- Transferring Calcium to mitochondria (to stimulate ATP production).
- Lipid transfer.
- Regulating apoptosis and mitochondrial fission.

## Clinical Significance

- **ER Stress:** Chronic activation of the UPR is a driver of metabolic disease (insulin resistance in obesity) and neurodegeneration (accumulation of misfolded proteins like Tau/Amyloid).
- **Diabetes:** Pancreatic beta-cells are highly susceptible to ER stress due to the massive demand for insulin production.

## Relationships

SYNTHESIZES::[[Protein]] - Rough ER
SYNTHESIZES::[[Lipids]] - Smooth ER
STORES::[[Calcium]]
REGULATES::[[Unfolded Protein Response]]
INTERACTS_WITH::[[Mitochondria]] - Via MAMs
INTERACTS_WITH::[[Golgi Apparatus]] - Downstream trafficking
ASSOCIATED_WITH_CONDITION::[[Insulin Resistance]] - ER stress link
ASSOCIATED_WITH_CONDITION::[[Neurodegeneration]]
ASSOCIATED_WITH_GENE::[[PSEN1]] - Localized to ER/MAMs

## References

- Walter P, Ron D. The unfolded protein response: from stress pathway to homeostasis. Science. 2011;334(6059):1081-6.
- Rizzuto R, et al. ER-mitochondria associations: in the heart of signal transduction. Nat Rev Mol Cell Biol. 2012.