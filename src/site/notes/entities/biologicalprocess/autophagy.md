---
created: '2026-04-17T18:59:17.434031Z'
description: Evolutionarily conserved cellular self-digestion process that degrades
  and recycles damaged organelles, misfolded proteins, and intracellular pathogens
  through lysosomal machinery, playing key roles in longevity, neurodegeneration,
  and cancer.
dg-home: false
dg-publish: true
permalink: /entities/biologicalprocess/autophagy/
slug: autophagy
tags:
- biologicalprocess
- biological_process
- longevity
- neurodegeneration
- cellular_recycling
- fasting
templateEngineOverride: njk
title: Autophagy
type: biologicalprocess
updated: '2026-04-17T18:59:17.434031Z'
---

{% raw %}
<h1>Autophagy</h1>
<h2>Overview</h2>
<p>Autophagy (from the Greek &quot;self-eating&quot;) is a fundamental cellular housekeeping mechanism in which cytoplasmic contents -- including damaged organelles, protein aggregates, and intracellular pathogens -- are sequestered within double-membrane vesicles called autophagosomes and delivered to lysosomes for degradation and recycling. The discovery of the molecular machinery governing autophagy earned Yoshinori Ohsumi the 2016 Nobel Prize in Physiology or Medicine, underscoring its importance across biology and medicine.</p>
<p>Three principal forms of autophagy are recognized: macroautophagy (the most studied, involving autophagosome formation), microautophagy (direct lysosomal invagination), and chaperone-mediated autophagy (selective targeting of KFERQ-motif proteins). Macroautophagy is initiated when nutrient-sensing pathways detect energy depletion or stress. The <a href="/entities/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a> activates autophagy under low-energy conditions by phosphorylating ULK1 and inhibiting the <a href="/entities/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a>, which is the master negative regulator of autophagy. When mTOR is active (fed state, growth factor signaling), it suppresses ULK1 complex assembly and autophagosome nucleation.</p>
<p>Autophagy is now recognized as one of the most important longevity-promoting mechanisms across species. Caloric restriction, <a href="/entities/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a>, and exercise all potently induce autophagy, and genetic studies in model organisms consistently show that enhanced autophagic capacity extends lifespan. Natural compounds such as <a href="/entities/supplement/resveratrol/" class="internal-link">Resveratrol</a> and <a href="/entities/supplement/spermidine/" class="internal-link">Spermidine</a> have been shown to induce autophagy and extend lifespan in yeast, flies, worms, and mice. Spermidine in particular acts through inhibition of the acetyltransferase EP300, leading to deacetylation of core autophagy proteins.</p>
<p>Defective autophagy is implicated in a wide range of diseases. In neurodegeneration, impaired clearance of aggregate-prone proteins (alpha-synuclein in Parkinson's, tau and amyloid-beta in Alzheimer's, huntingtin in Huntington's) accelerates neuronal death. In cancer, autophagy plays a dual role: tumor-suppressive in early stages (by preventing genomic instability) and tumor-promoting in established cancers (by supporting metabolic adaptation under hypoxia and nutrient stress). In infectious disease, selective autophagy (xenophagy) targets intracellular bacteria and viruses for destruction.</p>
<h2>Key Mechanisms</h2>
<ul>
<li><strong>Initiation</strong>: AMPK activation and mTOR inhibition relieve suppression of the ULK1/2 complex</li>
<li><strong>Nucleation</strong>: Beclin-1/VPS34 complex generates PI3P on isolation membranes (phagophore)</li>
<li><strong>Elongation</strong>: Two ubiquitin-like conjugation systems (ATG12-ATG5-ATG16L1 and LC3-PE) drive autophagosome membrane expansion</li>
<li><strong>Cargo recognition</strong>: Selective autophagy receptors (p62/SQSTM1, NBR1, OPTN) link ubiquitinated cargo to LC3</li>
<li><strong>Fusion and degradation</strong>: Autophagosomes fuse with lysosomes; acid hydrolases degrade contents</li>
<li><strong>Nutrient recycling</strong>: Amino acids, lipids, and nucleotides are exported back to cytoplasm for biosynthesis</li>
</ul>
<h2>Autophagy Inducers</h2>
<table>
<thead>
<tr>
<th>Inducer</th>
<th>Mechanism</th>
<th>Evidence Level</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/entities/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a></td>
<td>AMPK activation, mTOR suppression</td>
<td>Strong (human + animal)</td>
</tr>
<tr>
<td><a href="/entities/supplement/resveratrol/" class="internal-link">Resveratrol</a></td>
<td>SIRT1 activation, AMPK pathway</td>
<td>Moderate (animal + in vitro)</td>
</tr>
<tr>
<td><a href="/entities/supplement/spermidine/" class="internal-link">Spermidine</a></td>
<td>EP300 inhibition, protein deacetylation</td>
<td>Strong (animal, epidemiological)</td>
</tr>
<tr>
<td>Exercise</td>
<td>AMPK activation, TFEB nuclear translocation</td>
<td>Strong (human + animal)</td>
</tr>
<tr>
<td>Rapamycin</td>
<td>Direct mTOR inhibition</td>
<td>Strong (animal, clinical)</td>
</tr>
<tr>
<td>Metformin</td>
<td>AMPK activation</td>
<td>Moderate (human + animal)</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<p>REGULATED_BY::<a href="/entities/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a><br />
ACTIVATED_BY::<a href="/entities/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a><br />
INDUCED_BY::<a href="/entities/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a><br />
INDUCED_BY::<a href="/entities/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
INDUCED_BY::<a href="/entities/supplement/spermidine/" class="internal-link">Spermidine</a><br />
INVOLVES::<a href="/entities/cellularcomponent/autophagosome/" class="internal-link">Autophagosome</a><br />
PROTECTS_AGAINST::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH::<a class="internal-link is-unresolved" href="/404">Neurodegeneration</a><br />
LONGEVITY_MECHANISM::<a class="internal-link is-unresolved" href="/404">Aging</a></p>
<h3>Merged From pathway</h3>
<p>ASSOCIATED_WITH::<a href="/entities/biomarker/8-ohdg/" class="internal-link">8-OHdG</a><br />
ASSOCIATED_WITH::<a href="/entities/supplement/glutathione/" class="internal-link">Glutathione</a><br />
ASSOCIATED_WITH::<a href="/entities/labtest/hs-crp/" class="internal-link">Hs Crp</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/cancer/" class="internal-link">Cancer</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/parkinsons-disease/" class="internal-link">Parkinson's Disease</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/berberine/" class="internal-link">Berberine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/curcumin/" class="internal-link">Curcumin</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/spermidine/" class="internal-link">Spermidine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/sulforaphane/" class="internal-link">Sulforaphane</a><br />
RELATED::<a href="/entities/pathway/mitophagy/" class="internal-link">Mitophagy</a></p>

{% endraw %}