---
created: '2026-02-09T05:40:21.790110Z'
description: The biosynthetic pathway that converts dietary tryptophan to NAD+ through
  a series of enzymatic reactions. Also known as the kynurenine pathway, this route
  provides a mechanism for producing NAD+ from an essential amino acid.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/de-novo-nad-synthesis-pathway/
slug: de-novo-nad-synthesis-pathway
tags:
- pathway
- metabolic
- nad_metabolism
- tryptophan
- kynurenine
- de_novo
templateEngineOverride: njk
title: De Novo NAD+ Synthesis Pathway
type: pathway
updated: '2026-02-09T05:40:21.790110Z'
---

{% raw %}
<h1>De Novo NAD+ Synthesis Pathway</h1>
<h2>Overview</h2>
<p>The De Novo NAD+ Synthesis Pathway, also known as the kynurenine pathway, converts the essential amino acid L-tryptophan into NAD+ through a series of eight enzymatic steps. While this pathway contributes less to total NAD+ production than the salvage pathway in most tissues, it serves important functions in specific contexts.</p>
<p>This pathway is particularly significant in the liver, where it can account for a substantial portion of NAD+ production. It also plays crucial roles in immune regulation, as many of its intermediates (kynurenine, quinolinic acid) have immunomodulatory and neuroactive properties.</p>
<p>The pathway branches at multiple points, with intermediates feeding into neurotransmitter synthesis, immune signaling, and energy metabolism. Understanding this pathway is important for comprehending the complex interplay between tryptophan metabolism, inflammation, and NAD+ homeostasis.</p>
<h2>Pathway Steps</h2>
<h3>Complete Biosynthetic Route</h3>
<pre><code>L-Tryptophan
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
</code></pre>
<h2>Key Enzymes</h2>
<h3>Rate-Limiting Enzymes</h3>
<p><strong>TDO2 (Tryptophan 2,3-dioxygenase)</strong></p>
<ul>
<li>Location: Primarily liver</li>
<li>Regulation: Substrate (tryptophan), glucocorticoids</li>
<li>Function: First step, rate-limiting in liver</li>
</ul>
<p><strong>IDO1/IDO2 (Indoleamine 2,3-dioxygenase)</strong></p>
<ul>
<li>Location: Immune cells, many tissues</li>
<li>Regulation: Inflammatory cytokines (IFN-γ)</li>
<li>Function: First step, induced during inflammation</li>
</ul>
<p><strong>QPRT (Quinolinate phosphoribosyltransferase)</strong></p>
<ul>
<li>Function: Converts quinolinic acid to NaMN</li>
<li>Clinical significance: Low activity limits pathway flux</li>
</ul>
<h3>Other Pathway Enzymes</h3>
<table>
<thead>
<tr>
<th>Enzyme</th>
<th>Function</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>AFMID</td>
<td>Formyl removal</td>
<td>Cytosolic</td>
</tr>
<tr>
<td>KMO</td>
<td>Hydroxylation</td>
<td>Branch point</td>
</tr>
<tr>
<td>KYNU</td>
<td>Kynurenine cleavage</td>
<td>Vitamin B6 dependent</td>
</tr>
<tr>
<td>HAAO</td>
<td>Ring opening</td>
<td>Creates ACMS</td>
</tr>
<tr>
<td>NMNAT</td>
<td>Adenylation</td>
<td>Shared with salvage pathway</td>
</tr>
<tr>
<td>NADS</td>
<td>Amidation</td>
<td>Final NAD+ step</td>
</tr>
</tbody>
</table>
<h2>Pathway Branches</h2>
<h3>Kynurenine Branch</h3>
<p>At L-kynurenine, the pathway can diverge to produce:</p>
<ul>
<li><strong>Kynurenic acid</strong>: Neuroprotective, NMDA antagonist</li>
<li><strong>Anthranilic acid</strong>: Leads to kynurenic acid</li>
</ul>
<h3>Quinolinic Acid</h3>
<ul>
<li>Potent NMDA receptor agonist</li>
<li>Neurotoxic at high concentrations</li>
<li>Elevated in neuroinflammation</li>
</ul>
<h2>Regulation</h2>
<h3>Positive Regulators</h3>
<ul>
<li><strong>Tryptophan availability</strong>: Dietary intake</li>
<li><strong>Inflammation</strong>: IFN-γ induces IDO1</li>
<li><strong>Glucocorticoids</strong>: Induce hepatic TDO2</li>
<li><strong>Stress</strong>: Increases pathway activity</li>
</ul>
<h3>Negative Regulators</h3>
<ul>
<li><strong>NAD+</strong>: Feedback inhibition</li>
<li><strong>Quinolinic acid accumulation</strong>: Can limit flux</li>
<li><strong>Vitamin B6 deficiency</strong>: Impairs KYNU</li>
</ul>
<h2>Tissue Distribution</h2>
<table>
<thead>
<tr>
<th>Tissue</th>
<th>Primary Enzyme</th>
<th>Contribution to NAD+</th>
</tr>
</thead>
<tbody>
<tr>
<td>Liver</td>
<td>TDO2</td>
<td>High (~15% of NAD+)</td>
</tr>
<tr>
<td>Immune cells</td>
<td>IDO1</td>
<td>Moderate during inflammation</td>
</tr>
<tr>
<td>Brain</td>
<td>Both</td>
<td>Limited (BBB restricts tryptophan)</td>
</tr>
<tr>
<td>Kidney</td>
<td>Low expression</td>
<td>Minimal</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>Neurological Conditions</h3>
<ul>
<li><strong>Depression</strong>: Kynurenine pathway dysregulation</li>
<li><strong>Schizophrenia</strong>: Altered kynurenine metabolites</li>
<li><strong>Neurodegeneration</strong>: Quinolinic acid neurotoxicity</li>
</ul>
<h3>Immune Function</h3>
<ul>
<li>IDO1 induction depletes tryptophan locally</li>
<li>Creates immunosuppressive microenvironment</li>
<li>Exploited by tumors for immune evasion</li>
</ul>
<h3>Infectious Disease</h3>
<ul>
<li>Tryptophan depletion inhibits pathogen growth</li>
<li>Part of antimicrobial immune response</li>
</ul>
<h3>Cancer</h3>
<ul>
<li>IDO1 overexpression in tumors</li>
<li>IDO inhibitors in clinical trials</li>
<li>Balance between NAD+ production and immune effects</li>
</ul>
<h2>Comparison with Salvage Pathway</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>De Novo</th>
<th>Salvage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Substrate</td>
<td>Tryptophan</td>
<td>Nicotinamide/NR</td>
</tr>
<tr>
<td>Steps</td>
<td>8</td>
<td>2</td>
</tr>
<tr>
<td>Rate-limiting</td>
<td>TDO2/IDO1, QPRT</td>
<td>NAMPT</td>
</tr>
<tr>
<td>Contribution</td>
<td>~15% (liver)</td>
<td>~85%</td>
</tr>
<tr>
<td>Efficiency</td>
<td>Low</td>
<td>High</td>
</tr>
<tr>
<td>Regulation</td>
<td>Inflammation, diet</td>
<td>Circadian, metabolic</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<p>No relationships found.</p>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>USES_SUBSTRATE::[[L-Tryptophan]] - Essential amino acid starting point<br />
PRODUCES::[[NAD+]] - End product<br />
PRODUCES::[[Quinolinic Acid]] - Intermediate, neuroactive<br />
ACTIVATED_BY::[[NF-kB Pathway]] - Inflammatory induction of IDO1<br />
RELATED_TO::[[NAD+ Salvage Pathway]] - Alternative NAD+ biosynthesis<br />
AFFECTS::[[Brain]] - Kynurenine metabolites cross BBB<br />
UPSTREAM_OF::[[SIRT1]] - Provides NAD+ substrate<br />
UPSTREAM_OF::[[SIRT3]] - Contributes to NAD+ pool<br />
AFFECTED_BY::[[Chronic Inflammation]] - Pathway upregulated</p>
<h2>References</h2>
<ul>
<li>Schwarcz R, et al. Kynurenines in the mammalian brain: when physiology meets pathology. Nat Rev Neurosci. 2012;13(7):465-77. PMID: 22678511</li>
<li>Cervenka I, Agudelo LZ, Ruas JL. Kynurenines: Tryptophan's metabolites in exercise, inflammation, and mental health. Science. 2017;357(6349):eaaf9794. PMID: 28751584</li>
<li>Badawy AA. Kynurenine Pathway of Tryptophan Metabolism: Regulatory and Functional Aspects. Int J Tryptophan Res. 2017;10:1178646917691938. PMID: 28469468</li>
<li>Platten M, et al. Tryptophan metabolism as a common therapeutic target in cancer, neurodegeneration and beyond. Nat Rev Drug Discov. 2019;18(5):379-401. PMID: 30760888</li>
</ul>

{% endraw %}