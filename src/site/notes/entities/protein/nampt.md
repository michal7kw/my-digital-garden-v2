---
created: '2026-02-13T19:04:40.982334Z'
description: Nicotinamide phosphoribosyltransferase, the rate-limiting enzyme in the
  NAD+ salvage pathway. Converts nicotinamide to nicotinamide mononucleotide (NMN),
  representing a critical control point for cellular NAD+ biosynthesis.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/nampt/
slug: nampt
tags:
- protein
- enzyme
- nad_biosynthesis
- salvage_pathway
- rate_limiting
- metabolic_regulation
- longevity
templateEngineOverride: njk
title: NAMPT
type: protein
updated: '2026-02-13T19:04:40.982334Z'
---

{% raw %}
<h1>NAMPT</h1>
<h2>Overview</h2>
<p>NAMPT (Nicotinamide Phosphoribosyltransferase) is the rate-limiting enzyme in the NAD+ salvage pathway, which is responsible for recycling nicotinamide back into NAD+. Because most NAD+ consuming enzymes (sirtuins, PARPs, CD38) release nicotinamide as a product, NAMPT is essential for maintaining cellular NAD+ pools.</p>
<p>NAMPT exists in two forms: intracellular NAMPT (iNAMPT) which catalyzes NMN synthesis, and extracellular NAMPT (eNAMPT), also known as visfatin or PBEF, which has additional cytokine-like functions.</p>
<p>The importance of NAMPT in NAD+ metabolism has made it a key target for understanding and potentially treating age-related NAD+ decline. NAMPT expression and activity decrease with age, contributing to reduced NAD+ levels. Strategies to boost NAMPT function or bypass it (through NMN or NR supplementation) are being explored for their anti-aging potential.</p>
<h2>Mechanism of Action</h2>
<h3>Enzymatic Reaction</h3>
<p><strong>NAD+ Salvage Pathway - Rate-Limiting Step</strong>:</p>
<pre><code>Nicotinamide + PRPP → NMN + PPi
</code></pre>
<ul>
<li><strong>Substrate</strong>: Nicotinamide (vitamin B3, NAD+ breakdown product)</li>
<li><strong>Co-substrate</strong>: 5-phosphoribosyl-1-pyrophosphate (PRPP)</li>
<li><strong>Product</strong>: Nicotinamide mononucleotide (NMN)</li>
<li><strong>Regulation</strong>: Product inhibition, ATP, circadian clock</li>
</ul>
<h3>NAD+ Salvage Pathway Context</h3>
<ol>
<li>NAD+ is consumed by sirtuins, PARPs, CD38 → releases Nicotinamide</li>
<li><strong>NAMPT</strong>: Nicotinamide + PRPP → NMN (RATE-LIMITING)</li>
<li>NMNAT: NMN + ATP → NAD+</li>
</ol>
<h2>Forms and Localization</h2>
<h3>Intracellular NAMPT (iNAMPT)</h3>
<ul>
<li>Primary enzymatic function</li>
<li>Present in cytoplasm and nucleus</li>
<li>Essential for intracellular NAD+ biosynthesis</li>
<li>Activity regulated by circadian clock</li>
</ul>
<h3>Extracellular NAMPT (eNAMPT/Visfatin)</h3>
<ul>
<li>Secreted by adipocytes and other cells</li>
<li>Cytokine-like functions</li>
<li>May contribute to systemic NMN pools</li>
<li>Elevated in obesity and inflammation (controversial role)</li>
</ul>
<h2>Biological Significance</h2>
<h3>NAD+ Homeostasis</h3>
<ul>
<li>Controls ~85% of NAD+ biosynthesis in mammals</li>
<li>Rate-limiting step means NAMPT activity determines NAD+ levels</li>
<li>Small changes in NAMPT activity have large effects on NAD+ pools</li>
</ul>
<h3>Circadian Regulation</h3>
<ul>
<li>NAMPT expression oscillates with 24-hour rhythm</li>
<li>Controlled by CLOCK:BMAL1 transcription factors</li>
<li>Creates circadian fluctuations in NAD+ levels</li>
<li>Links metabolism to biological clock</li>
</ul>
<h3>Aging and NAMPT</h3>
<ul>
<li>NAMPT expression declines with age</li>
<li>Contributes to age-related NAD+ decline</li>
<li>NAMPT overexpression extends lifespan in mice</li>
<li>eNAMPT levels correlate with lifespan in mice</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Therapeutic Approaches</h3>
<p><strong>NAMPT Activators</strong>:</p>
<ul>
<li>P7C3 compounds (neuroprotective)</li>
<li>Exercise upregulates NAMPT</li>
</ul>
<p><strong>Bypassing NAMPT</strong>:</p>
<ul>
<li>NMN supplementation (bypasses NAMPT)</li>
<li>NR supplementation (phosphorylated by NRK, then NMNAT)</li>
</ul>
<p><strong>NAMPT Inhibitors (Cancer)</strong>:</p>
<ul>
<li>FK866/APO866</li>
<li>CHS-828</li>
<li>Target rapidly dividing cancer cells' NAD+ needs</li>
</ul>
<h3>Disease Associations</h3>
<ul>
<li><strong>Aging</strong>: Declining NAMPT contributes to NAD+ decline</li>
<li><strong>Cancer</strong>: Target due to cancer cells' high NAD+ demand</li>
<li><strong>Metabolic Disease</strong>: eNAMPT dysregulation in obesity</li>
<li><strong>Neurodegeneration</strong>: NAMPT activators show neuroprotection</li>
</ul>
<h2>Research Highlights</h2>
<ul>
<li><strong>Revollo et al., 2007</strong> (PMID: 17934455): Established NAMPT as rate-limiting enzyme in NAD+ salvage</li>
<li><strong>Ramsey et al., 2009</strong> (PMID: 19299583): Circadian regulation of NAMPT</li>
<li><strong>Yoshida et al., 2019</strong> (PMID: 31002657): eNAMPT in blood extends lifespan in mice</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<p>No relationships found.</p>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>CATALYZES_PRODUCTION_OF::<a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a> - Produces NMN from nicotinamide<br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/dev_admin/pathway/nad-salvage-pathway/" class="internal-link">NAD+ Salvage Pathway</a> - Rate-limiting enzyme<br />
UPSTREAM_OF::<a class="internal-link is-unresolved" href="/404">NAD+</a> - Controls NAD+ biosynthesis rate<br />
ACTIVATED_BY::<a href="/garden/dev_admin/intervention/exercise/" class="internal-link">Exercise</a> - Upregulates NAMPT expression<br />
ACTIVATED_BY::<a href="/garden/dev_admin/intervention/caloric-restriction/" class="internal-link">Caloric Restriction</a> - Increases NAMPT activity<br />
AFFECTED_BY::<a href="/garden/dev_admin/pathway/circadian-rhythm-pathway/" class="internal-link">Circadian Rhythm Pathway</a> - Circadian expression pattern<br />
RELATED_TO::<a href="/garden/dev_admin/protein/sirt1/" class="internal-link">SIRT1</a> - NAMPT activity determines sirtuin substrate availability<br />
RELATED_TO::<a href="/garden/dev_admin/protein/sirt3/" class="internal-link">SIRT3</a> - Mitochondrial NAD+ pool maintenance<br />
COMPETES_WITH::<a href="/garden/dev_admin/protein/cd38/" class="internal-link">CD38</a> - CD38 consumes NAD+ that NAMPT produces<br />
INHIBITED_BY::<a class="internal-link is-unresolved" href="/404">Nicotinamide</a> - Product inhibition<br />
ENCODED_BY::<a href="/garden/dev_admin/protein/nampt/" class="internal-link">NAMPT</a> - NAMPT gene</p>
<h2>References</h2>
<ul>
<li>Revollo JR, et al. The NAD biosynthesis pathway mediated by nicotinamide phosphoribosyltransferase regulates Sir2 activity in mammalian cells. J Biol Chem. 2004;279(49):50754-63. PMID: 15381699</li>
<li>Ramsey KM, et al. Circadian clock feedback cycle through NAMPT-mediated NAD+ biosynthesis. Science. 2009;324(5927):651-4. PMID: 19299583</li>
<li>Yoshida M, et al. Extracellular Vesicle-Contained eNAMPT Delays Aging and Extends Lifespan in Mice. Cell Metab. 2019;30(2):329-342.e5. PMID: 31155496</li>
<li>Garten A, et al. Physiological and pathophysiological roles of NAMPT and NAD metabolism. Nat Rev Endocrinol. 2015;11(9):535-46. PMID: 26215259</li>
<li>Imai S, Yoshino J. The importance of NAMPT/NAD/SIRT1 in the systemic regulation of metabolism and ageing. Diabetes Obes Metab. 2013;15 Suppl 3:26-33. PMID: 24003918</li>
</ul>

{% endraw %}