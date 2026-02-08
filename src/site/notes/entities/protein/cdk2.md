---
created: '2026-02-08T19:25:13.090718Z'
description: Serine/threonine-protein kinase essential for the G1/S transition and
  DNA synthesis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/Protein/cdk2/
slug: cdk2
tags:
- Protein
- protein
- kinase
- cell_cycle
- proliferation
title: CDK2
type: Protein
updated: '2026-02-08T19:25:13.090718Z'
---

# CDK2

## Overview
**Cyclin-Dependent Kinase 2 (CDK2)** is a core component of the cell cycle machinery. It is inactive as a monomer and requires binding to Cyclins to form an active kinase complex.

1.  **G1/S Transition**: Binds **Cyclin E**. Phosphorylates Retinoblastoma protein (Rb), releasing E2F transcription factors to drive DNA synthesis genes.
2.  **S Phase**: Binds **Cyclin A**. Required for DNA replication progression.

<!-- NEO4J_CONTENT_START -->
## Relationships
### Related
- → [[DNA_Replication]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.783094'
source: obsidian
```
- → [[Cell_Cycle]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.783094'
source: obsidian
```
- → [[Cyclin_A]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.783094'
source: obsidian
```
- → [[Cyclin_E]] (entity)
```yaml
last_modified: '2026-01-26T06:48:59.783094'
source: obsidian
```
- ← [[Cancer]] (condition)
```yaml
last_modified: '2026-01-26T06:47:32.664708'
source: obsidian
```
- → [[p27]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[DNA_Replication]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[Cyclin_A]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[p21]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[Cyclin_E]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[Rb]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[Cell_Cycle]] (entity)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[Cancer]] (condition)
```yaml
last_modified: '2026-01-26T07:08:29.529226'
source: obsidian
```
- → [[CDK2]] (protein)
```yaml
last_modified: '2026-01-26T07:07:46.097945'
source: obsidian
```
<!-- NEO4J_CONTENT_END -->
## Relationships

### Participates in Pathway
- → [[Cell Cycle]] (pathway) - *G1/S and S phase*
- → [[DNA Replication]] (pathway)

### Interacts With
- ← [[Cyclin E]] (protein) - *Activator*
- ← [[Cyclin A]] (protein) - *Activator*
- → [[Rb]] (protein) - *Target (Phosphorylation inhibits Rb)*
- ← [[p21]] (protein) - *Inhibitor (CDKN1A)*
- ← [[p27]] (protein) - *Inhibitor (CDKN1B)*

### Related Conditions
- → [[Cancer]] (condition) - *Uncontrolled proliferation*

## References
1. **UniProt**: P24941 (CDK2_HUMAN)
2. **Review**: Malumbres, M. (2014). "Cyclin-dependent kinases." *Genome Biology*.