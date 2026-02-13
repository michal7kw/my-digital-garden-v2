---
created: '2026-02-13T19:04:40.213222Z'
description: The primary route for NAD+ biosynthesis in mammals, recycling nicotinamide
  released by NAD+-consuming enzymes back into NAD+. Accounts for approximately 85%
  of NAD+ production and is essential for maintaining cellular NAD+ homeostasis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/nad-salvage-pathway/
slug: nad-salvage-pathway
tags:
- pathway
- metabolic
- nad_metabolism
- longevity
- energy_metabolism
- salvage
templateEngineOverride: njk
title: NAD+ Salvage Pathway
type: pathway
updated: '2026-02-13T19:04:40.213222Z'
---

{% raw %}
<h1>NAD+ Salvage Pathway</h1>
<h2>Overview</h2>
<p>The NAD+ Salvage Pathway is the predominant route for NAD+ biosynthesis in mammalian cells. It recycles nicotinamide, the product released when NAD+ is consumed by sirtuins, PARPs, and CD38, back into NAD+. This pathway is essential for maintaining cellular NAD+ pools and metabolic homeostasis.</p>
<p>Unlike de novo synthesis from tryptophan, the salvage pathway operates continuously to regenerate NAD+ from its breakdown products. This recycling is highly efficient and accounts for the vast majority of NAD+ production in most tissues.</p>
<p>The rate-limiting step is catalyzed by NAMPT (nicotinamide phosphoribosyltransferase), making it a critical control point for NAD+ metabolism. Interventions targeting this pathway—whether through NAMPT activation or supplementation with pathway intermediates (NMN, NR)—have shown promise for treating age-related NAD+ decline.</p>
<h2>Pathway Steps</h2>
<h3>Main Salvage Route (Nicotinamide → NAD+)</h3>
<pre><code>Step 1: Nicotinamide + PRPP → NMN + PPi
        Enzyme: NAMPT (rate-limiting)

Step 2: NMN + ATP → NAD+ + PPi
        Enzyme: NMNATs (NMNAT1/2/3)
</code></pre>
<h3>Alternative Route via Nicotinamide Riboside (NR → NAD+)</h3>
<pre><code>Step 1: NR + ATP → NMN + ADP
        Enzyme: NRK1/NRK2

Step 2: NMN + ATP → NAD+ + PPi
        Enzyme: NMNATs
</code></pre>
<h2>Key Enzymes</h2>
<h3>NAMPT (Nicotinamide Phosphoribosyltransferase)</h3>
<ul>
<li><strong>Function</strong>: Converts nicotinamide to NMN</li>
<li><strong>Significance</strong>: Rate-limiting enzyme of the pathway</li>
<li><strong>Regulation</strong>: Circadian clock, nutrient status, exercise</li>
<li><strong>Age-related change</strong>: Expression declines with age</li>
</ul>
<h3>NMNAT (NMN Adenylyltransferases)</h3>
<p>Three isoforms with distinct subcellular locations:</p>
<ul>
<li><strong>NMNAT1</strong>: Nuclear</li>
<li><strong>NMNAT2</strong>: Cytoplasmic and Golgi</li>
<li><strong>NMNAT3</strong>: Mitochondrial</li>
</ul>
<h3>NRK (Nicotinamide Riboside Kinases)</h3>
<ul>
<li><strong>NRK1</strong>: Ubiquitously expressed</li>
<li><strong>NRK2</strong>: Enriched in muscle and heart</li>
<li><strong>Function</strong>: Phosphorylate NR to NMN, bypassing NAMPT</li>
</ul>
<h2>Regulation</h2>
<h3>Positive Regulators</h3>
<ul>
<li><strong>Fasting/Caloric Restriction</strong>: Upregulates NAMPT</li>
<li><strong>Exercise</strong>: Increases NAMPT expression</li>
<li><strong>Circadian Clock</strong>: NAMPT expression peaks during active phase</li>
<li><strong>AMPK</strong>: Activates during energy stress</li>
</ul>
<h3>Negative Regulators</h3>
<ul>
<li><strong>Nicotinamide</strong>: Product inhibition of NAMPT and sirtuins</li>
<li><strong>High glucose</strong>: May suppress pathway activity</li>
<li><strong>Chronic inflammation</strong>: Dysregulates NAD+ metabolism</li>
</ul>
<h2>Pathway Inputs</h2>
<h3>Primary Substrate Sources</h3>
<ol>
<li><strong>Nicotinamide</strong>: From NAD+ consumption (sirtuins, PARPs, CD38)</li>
<li><strong>Nicotinamide Riboside (NR)</strong>: Dietary source, supplements</li>
<li><strong>NMN</strong>: Direct supplement, some dietary contribution</li>
</ol>
<h3>Cofactors Required</h3>
<ul>
<li><strong>PRPP</strong> (5-phosphoribosyl-1-pyrophosphate): From pentose phosphate pathway</li>
<li><strong>ATP</strong>: Energy for phosphorylation steps</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Age-Related NAD+ Decline</h3>
<p>The salvage pathway is central to age-related NAD+ decline:</p>
<ul>
<li>NAMPT expression decreases with age</li>
<li>CD38 increases, consuming more NAD+</li>
<li>Net result: reduced NAD+ regeneration capacity</li>
</ul>
<h3>Therapeutic Strategies</h3>
<ol>
<li><strong>NMN Supplementation</strong>: Bypasses rate-limiting NAMPT step</li>
<li><strong>NR Supplementation</strong>: Enters via NRK pathway</li>
<li><strong>NAMPT Activators</strong>: Enhance endogenous pathway activity</li>
<li><strong>CD38 Inhibitors</strong>: Reduce NAD+ consumption</li>
</ol>
<h3>Disease Relevance</h3>
<ul>
<li><strong>Metabolic Syndrome</strong>: Impaired pathway function</li>
<li><strong>Neurodegeneration</strong>: NAD+ depletion in neurons</li>
<li><strong>Cardiac Disease</strong>: Pathway dysfunction in heart failure</li>
<li><strong>Cancer</strong>: Rapidly dividing cells depend on pathway</li>
</ul>
<h2>Tissue-Specific Considerations</h2>
<table>
<thead>
<tr>
<th>Tissue</th>
<th>Primary NMNAT</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Neurons</td>
<td>NMNAT2 (axons)</td>
<td>Critical for axonal survival</td>
</tr>
<tr>
<td>Muscle</td>
<td>NMNAT3 (mito)</td>
<td>Mitochondrial NAD+ important</td>
</tr>
<tr>
<td>Liver</td>
<td>NMNAT1/3</td>
<td>High metabolic activity</td>
</tr>
<tr>
<td>Adipose</td>
<td>NMNAT1</td>
<td>eNAMPT secretion</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<p>No relationships found.</p>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>CONTAINS_ENZYME::<a href="/garden/dev_admin/protein/nampt/" class="internal-link">NAMPT</a> - Rate-limiting enzyme<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">NAD+</a> - End product<br />
PRODUCES::<a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a> - Intermediate product<br />
USES_SUBSTRATE::<a href="/garden/dev_admin/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide Riboside</a> - Alternative entry point<br />
REGULATED_BY::<a href="/garden/dev_admin/pathway/circadian-rhythm-pathway/" class="internal-link">Circadian Rhythm Pathway</a> - Circadian NAMPT expression<br />
ACTIVATED_BY::<a href="/garden/dev_admin/intervention/caloric-restriction/" class="internal-link">Caloric Restriction</a> - Upregulates pathway<br />
ACTIVATED_BY::<a href="/garden/dev_admin/intervention/exercise/" class="internal-link">Exercise</a> - Increases NAMPT<br />
AFFECTED_BY::<a href="/garden/dev_admin/protein/cd38/" class="internal-link">CD38</a> - Competes for NAD+<br />
AFFECTS::<a href="/garden/dev_admin/protein/sirt1/" class="internal-link">SIRT1</a> - Provides NAD+ substrate<br />
AFFECTS::<a href="/garden/dev_admin/protein/sirt3/" class="internal-link">SIRT3</a> - Mitochondrial NAD+ supply<br />
RELATED_TO::<a href="/garden/dev_admin/pathway/de-novo-nad-synthesis-pathway/" class="internal-link">De Novo NAD+ Synthesis Pathway</a> - Alternative biosynthesis route<br />
UPSTREAM_OF::<a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> - NAD+ required for ETC</p>
<h2>References</h2>
<ul>
<li>Revollo JR, Grimm AA, Imai S. The NAD biosynthesis pathway mediated by nicotinamide phosphoribosyltransferase regulates Sir2 activity in mammalian cells. J Biol Chem. 2004;279(49):50754-63. PMID: 15381699</li>
<li>Bieganowski P, Brenner C. Discoveries of nicotinamide riboside as a nutrient and conserved NRK genes establish a Preiss-Handler independent route to NAD+ in fungi and humans. Cell. 2004;117(4):495-502. PMID: 15137942</li>
<li>Cantó C, et al. The NAD(+) precursor nicotinamide riboside enhances oxidative metabolism and protects against high-fat diet-induced obesity. Cell Metab. 2012;15(6):838-47. PMID: 22682224</li>
<li>Yang Y, Sauve AA. NAD(+) metabolism: Bioenergetics, signaling and manipulation for therapy. Biochim Biophys Acta. 2016;1864(12):1787-1800. PMID: 27374990</li>
</ul>

{% endraw %}