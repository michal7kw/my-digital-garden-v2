---
created: '2026-02-09T05:40:22.135138Z'
description: Sirtuin 1, an NAD+-dependent deacetylase that regulates cellular metabolism,
  stress responses, and aging. Key longevity protein that removes acetyl groups from
  histone and non-histone proteins, affecting gene expression and metabolic pathways.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/sirt1/
slug: sirt1
tags:
- protein
- enzyme
- sirtuin
- longevity
- deacetylase
- metabolic_regulation
- nad_dependent
templateEngineOverride: njk
title: SIRT1
type: protein
updated: '2026-02-09T05:40:22.135138Z'
---

{% raw %}
<h1>SIRT1</h1>
<h2>Overview</h2>
<p>SIRT1 (Sirtuin 1) is the most extensively studied member of the sirtuin family of NAD+-dependent protein deacetylases. Originally discovered as a longevity factor in yeast (Sir2), SIRT1 plays a central role in metabolic regulation, stress responses, circadian rhythms, and aging in mammals.</p>
<p>SIRT1's requirement for NAD+ as a cofactor creates a direct link between cellular energy status and epigenetic regulation. When NAD+ levels are high (indicating energy abundance or metabolic stress like fasting), SIRT1 activity increases, triggering adaptive responses that promote cellular survival and metabolic efficiency.</p>
<p>SIRT1 has been called a &quot;master metabolic regulator&quot; due to its broad influence on glucose and lipid metabolism, inflammation, and cellular stress responses. Its activity is enhanced by caloric restriction, exercise, and various natural compounds like resveratrol.</p>
<h2>Mechanism of Action</h2>
<h3>Enzymatic Activity</h3>
<p>SIRT1 catalyzes the removal of acetyl groups from lysine residues:</p>
<ul>
<li><strong>Reaction</strong>: Acetyl-lysine + NAD+ → Lysine + Nicotinamide + O-acetyl-ADP-ribose</li>
<li><strong>NAD+ Requirement</strong>: Absolute cofactor requirement links activity to metabolic state</li>
<li><strong>Product Inhibition</strong>: Nicotinamide inhibits SIRT1 activity (feedback regulation)</li>
</ul>
<h3>Key Substrates</h3>
<ol>
<li><strong>Histones</strong>: H3K9ac, H4K16ac - chromatin remodeling</li>
<li><strong>PGC-1α</strong>: Master regulator of mitochondrial biogenesis</li>
<li><strong>FOXO1/3</strong>: Stress resistance and autophagy transcription factors</li>
<li><strong>p53</strong>: Tumor suppressor, cell death regulation</li>
<li><strong>NF-κB (p65)</strong>: Inflammatory signaling</li>
<li><strong>LXR/SREBP</strong>: Lipid metabolism</li>
</ol>
<h2>Biological Functions</h2>
<h3>Metabolic Regulation</h3>
<ul>
<li><strong>Gluconeogenesis</strong>: Activates PGC-1α and FOXO1 in fasted state</li>
<li><strong>Fatty Acid Oxidation</strong>: Enhances lipid catabolism via PGC-1α and PPARα</li>
<li><strong>Mitochondrial Biogenesis</strong>: Deacetylates and activates PGC-1α</li>
<li><strong>Insulin Sensitivity</strong>: Modulates insulin signaling through multiple targets</li>
</ul>
<h3>Stress Responses</h3>
<ul>
<li><strong>DNA Repair</strong>: Recruited to DNA damage sites</li>
<li><strong>Autophagy</strong>: Activates FOXO-dependent autophagy genes</li>
<li><strong>Antioxidant Defense</strong>: Activates FOXO-mediated SOD2 and catalase</li>
</ul>
<h3>Aging and Longevity</h3>
<ul>
<li><strong>Caloric Restriction Mediator</strong>: Required for many CR benefits</li>
<li><strong>Circadian Rhythm</strong>: Regulates circadian clock proteins</li>
<li><strong>Cellular Senescence</strong>: Modulates senescence-associated phenotypes</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Disease Associations</h3>
<ul>
<li><strong>Metabolic Syndrome</strong>: SIRT1 activation improves metabolic parameters</li>
<li><strong>Type 2 Diabetes</strong>: Enhances insulin sensitivity</li>
<li><strong>Cardiovascular Disease</strong>: Protective through metabolic and anti-inflammatory effects</li>
<li><strong>Neurodegeneration</strong>: Neuroprotective in Alzheimer's and Parkinson's models</li>
<li><strong>Cancer</strong>: Context-dependent tumor suppressor/promoter</li>
</ul>
<h3>Therapeutic Targeting</h3>
<ul>
<li><strong>SIRT1 Activators</strong>: Resveratrol, SRT1720, other STACs</li>
<li><strong>NAD+ Precursors</strong>: NMN, NR increase NAD+ availability for SIRT1</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:49:04.523353'
source: obsidian
</code></pre>
<ul>
<li>← [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>REQUIRES_COFACTOR::[[NAD+]] - Absolute requirement for catalytic activity<br />
ACTIVATED_BY::[[Nicotinamide Riboside]] - Via NAD+ elevation<br />
ACTIVATED_BY::[[Resveratrol]] - Direct allosteric activator<br />
ACTIVATED_BY::[[Caloric Restriction]] - Elevated NAD+/NADH ratio<br />
ACTIVATED_BY::[[Exercise]] - Metabolic activation<br />
ACTIVATED_BY::[[Intermittent Fasting]] - Via NAD+ elevation<br />
INHIBITED_BY::[[Nicotinamide]] - Product inhibition<br />
PARTICIPATES_IN_PATHWAY::[[NAD+ Salvage Pathway]] - NAD+ consumer<br />
ACTIVATES::[[Autophagy]] - Via FOXO deacetylation<br />
ACTIVATES::[[Mitochondria]] - Via PGC-1α deacetylation<br />
SUPPRESSES::[[NF-kB Pathway]] - Anti-inflammatory effect<br />
RELATED_TO::[[SIRT3]] - Mitochondrial sirtuin family member<br />
ENCODED_BY::[[SIRT1]] - SIRT1 gene</p>
<h2>References</h2>
<ul>
<li>Haigis MC, Sinclair DA. Mammalian sirtuins: biological insights and disease relevance. Annu Rev Pathol. 2010;5:253-95. PMID: 20078221</li>
<li>Satoh A, et al. SIRT1 promotes the central adaptive response to diet restriction through activation of the dorsomedial and lateral nuclei of the hypothalamus. J Neurosci. 2010;30(30):10220-32. PMID: 20668205</li>
<li>Cantó C, Auwerx J. Targeting sirtuin 1 to improve metabolism: all you need is NAD(+)? Pharmacol Rev. 2012;64(1):166-87. PMID: 22106091</li>
<li>Hubbard BP, et al. Evidence for a common mechanism of SIRT1 regulation by allosteric activators. Science. 2013;339(6124):1216-9. PMID: 23471411</li>
</ul>

{% endraw %}