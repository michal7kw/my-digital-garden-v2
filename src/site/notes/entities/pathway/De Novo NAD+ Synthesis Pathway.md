---
{"dg-publish":true,"permalink":"/entities/pathway/de-novo-nad-synthesis-pathway/","tags":["pathway","metabolic","nad_metabolism","tryptophan","kynurenine","de_novo"]}
---


# De Novo NAD+ Synthesis Pathway

## Overview

The De Novo NAD+ Synthesis Pathway, also known as the kynurenine pathway, converts the essential amino acid L-tryptophan into NAD+ through a series of eight enzymatic steps. While this pathway contributes less to total NAD+ production than the salvage pathway in most tissues, it serves important functions in specific contexts.

This pathway is particularly significant in the liver, where it can account for a substantial portion of NAD+ production. It also plays crucial roles in immune regulation, as many of its intermediates (kynurenine, quinolinic acid) have immunomodulatory and neuroactive properties.

The pathway branches at multiple points, with intermediates feeding into neurotransmitter synthesis, immune signaling, and energy metabolism. Understanding this pathway is important for comprehending the complex interplay between tryptophan metabolism, inflammation, and NAD+ homeostasis.

## Pathway Steps

### Complete Biosynthetic Route

```
L-Tryptophan
    ↓ TDO2 / IDO1 / IDO2
N-Formylkynurenine
    ↓ AFMID (arylformamidase)
L-Kynurenine
    ↓ KMO (kynurenine monooxygenase)
3-Hydroxykynurenine
    ↓ KYNU (kynureninase)
3-Hydroxyanthranilic acid (3-HAA)
    ↓ HAAO (3-hydroxyanthranilate 3,4-dioxygenase)
α-amino-β-carboxymuconate-ε-semialdehyde (ACMS)
    ↓ Non-enzymatic (or ACMSD)
Quinolinic acid
    ↓ QPRT (quinolinate phosphoribosyltransferase)
Nicotinic acid mononucleotide (NaMN)
    ↓ NMNAT
Nicotinic acid adenine dinucleotide (NaAD)
    ↓ NADS (NAD synthetase)
NAD+
```

## Key Enzymes

### Rate-Limiting Enzymes

**TDO2 (Tryptophan 2,3-dioxygenase)**
- Location: Primarily liver
- Regulation: Substrate (tryptophan), glucocorticoids
- Function: First step, rate-limiting in liver

**IDO1/IDO2 (Indoleamine 2,3-dioxygenase)**
- Location: Immune cells, many tissues
- Regulation: Inflammatory cytokines (IFN-γ)
- Function: First step, induced during inflammation

**QPRT (Quinolinate phosphoribosyltransferase)**
- Function: Converts quinolinic acid to NaMN
- Clinical significance: Low activity limits pathway flux

### Other Pathway Enzymes

| Enzyme | Function | Notes |
|--------|----------|-------|
| AFMID | Formyl removal | Cytosolic |
| KMO | Hydroxylation | Branch point |
| KYNU | Kynurenine cleavage | Vitamin B6 dependent |
| HAAO | Ring opening | Creates ACMS |
| NMNAT | Adenylation | Shared with salvage pathway |
| NADS | Amidation | Final NAD+ step |

## Pathway Branches

### Kynurenine Branch

At L-kynurenine, the pathway can diverge to produce:
- **Kynurenic acid**: Neuroprotective, NMDA antagonist
- **Anthranilic acid**: Leads to kynurenic acid

### Quinolinic Acid

- Potent NMDA receptor agonist
- Neurotoxic at high concentrations
- Elevated in neuroinflammation

## Regulation

### Positive Regulators

- **Tryptophan availability**: Dietary intake
- **Inflammation**: IFN-γ induces IDO1
- **Glucocorticoids**: Induce hepatic TDO2
- **Stress**: Increases pathway activity

### Negative Regulators

- **NAD+**: Feedback inhibition
- **Quinolinic acid accumulation**: Can limit flux
- **Vitamin B6 deficiency**: Impairs KYNU

## Tissue Distribution

| Tissue | Primary Enzyme | Contribution to NAD+ |
|--------|---------------|---------------------|
| Liver | TDO2 | High (~15% of NAD+) |
| Immune cells | IDO1 | Moderate during inflammation |
| Brain | Both | Limited (BBB restricts tryptophan) |
| Kidney | Low expression | Minimal |

## Clinical Significance

### Neurological Conditions

- **Depression**: Kynurenine pathway dysregulation
- **Schizophrenia**: Altered kynurenine metabolites
- **Neurodegeneration**: Quinolinic acid neurotoxicity

### Immune Function

- IDO1 induction depletes tryptophan locally
- Creates immunosuppressive microenvironment
- Exploited by tumors for immune evasion

### Infectious Disease

- Tryptophan depletion inhibits pathogen growth
- Part of antimicrobial immune response

### Cancer

- IDO1 overexpression in tumors
- IDO inhibitors in clinical trials
- Balance between NAD+ production and immune effects

## Comparison with Salvage Pathway

| Feature | De Novo | Salvage |
|---------|---------|---------|
| Substrate | Tryptophan | Nicotinamide/NR |
| Steps | 8 | 2 |
| Rate-limiting | TDO2/IDO1, QPRT | NAMPT |
| Contribution | ~15% (liver) | ~85% |
| Efficiency | Low | High |
| Regulation | Inflammation, diet | Circadian, metabolic |

## Relationships

USES_SUBSTRATE::[[entities/Supplement/L-Tryptophan\|L-Tryptophan]] - Essential amino acid starting point
PRODUCES::[[entities/Metabolite/NAD+\|NAD+]] - End product
PRODUCES::[[Quinolinic Acid\|Quinolinic Acid]] - Intermediate, neuroactive
ACTIVATED_BY::[[entities/pathway/NF-kB Pathway\|NF-kB Pathway]] - Inflammatory induction of IDO1
RELATED_TO::[[entities/pathway/NAD+ Salvage Pathway\|NAD+ Salvage Pathway]] - Alternative NAD+ biosynthesis
AFFECTS::[[entities/Organ/Brain\|Brain]] - Kynurenine metabolites cross BBB
UPSTREAM_OF::[[entities/protein/SIRT1\|SIRT1]] - Provides NAD+ substrate
UPSTREAM_OF::[[entities/protein/SIRT3\|SIRT3]] - Contributes to NAD+ pool
AFFECTED_BY::[[entities/condition/Chronic Inflammation\|Chronic Inflammation]] - Pathway upregulated

## References

- Schwarcz R, et al. Kynurenines in the mammalian brain: when physiology meets pathology. Nat Rev Neurosci. 2012;13(7):465-77. PMID: 22678511
- Cervenka I, Agudelo LZ, Ruas JL. Kynurenines: Tryptophan's metabolites in exercise, inflammation, and mental health. Science. 2017;357(6349):eaaf9794. PMID: 28751584
- Badawy AA. Kynurenine Pathway of Tryptophan Metabolism: Regulatory and Functional Aspects. Int J Tryptophan Res. 2017;10:1178646917691938. PMID: 28469468
- Platten M, et al. Tryptophan metabolism as a common therapeutic target in cancer, neurodegeneration and beyond. Nat Rev Drug Discov. 2019;18(5):379-401. PMID: 30760888
