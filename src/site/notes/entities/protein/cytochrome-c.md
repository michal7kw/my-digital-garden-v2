---
created: '2026-02-13T17:51:33.603404Z'
description: A small heme protein that serves as an essential electron carrier in
  the mitochondrial electron transport chain, shuttling electrons from Complex III
  to Complex IV. Also plays a crucial role in apoptosis when released into the cytoplasm.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/cytochrome-c/
slug: cytochrome-c
tags:
- protein
- electron_carrier
- mitochondrial
- apoptosis
- heme_protein
- oxidative_phosphorylation
templateEngineOverride: njk
title: Cytochrome C
type: protein
updated: '2026-02-13T17:51:33.603404Z'
---

{% raw %}
<h1>Cytochrome C</h1>
<h2>Overview</h2>
<p>Cytochrome c is a small (~12 kDa), highly conserved heme protein with dual roles in cellular life and death:</p>
<ol>
<li><strong>Life function</strong>: Essential electron carrier in the ETC, transferring electrons from Complex III to Complex IV</li>
<li><strong>Death function</strong>: Trigger of intrinsic apoptosis when released from mitochondria</li>
</ol>
<p>Located in the mitochondrial intermembrane space, cytochrome c is loosely attached to the inner membrane through electrostatic interactions with cardiolipin. This binding is critical for both its electron transfer function and for keeping it sequestered away from cytoplasmic apoptotic machinery.</p>
<h2>Structure</h2>
<h3>Heme Group</h3>
<ul>
<li>Covalently attached to Cys14 and Cys17</li>
<li>Sixth coordination: His18 (proximal) and Met80 (distal)</li>
<li>Iron cycles: Fe²⁺ (ferrocytochrome c) ⇌ Fe³⁺ (ferricytochrome c)</li>
</ul>
<h3>Protein Fold</h3>
<ul>
<li>~104 amino acids (human)</li>
<li>Highly conserved across species (&gt;90% between mammals)</li>
<li>Compact globular structure</li>
<li>Surface lysines important for protein interactions</li>
</ul>
<h3>Cardiolipin Binding</h3>
<ul>
<li>Positively charged lysines interact with cardiolipin</li>
<li>Anchors cytochrome c to inner membrane</li>
<li>Cardiolipin oxidation releases cytochrome c</li>
</ul>
<h2>Electron Transport Function</h2>
<h3>Electron Transfer</h3>
<p><strong>Complex III → Cytochrome c → Complex IV</strong></p>
<ol>
<li>Cytochrome c docks at Complex III (Qo site)</li>
<li>Accepts one electron from Rieske iron-sulfur protein</li>
<li>Fe³⁺ → Fe²⁺ (reduced)</li>
<li>Dissociates and diffuses to Complex IV</li>
<li>Donates electron to CuA center</li>
<li>Fe²⁺ → Fe³⁺ (oxidized)</li>
<li>Returns to Complex III</li>
</ol>
<h3>Kinetics</h3>
<ul>
<li>Fast diffusion in intermembrane space</li>
<li>Rate-limiting step: Complex IV electron acceptance</li>
<li>Essential for oxidative phosphorylation</li>
</ul>
<h3>Redox Potential</h3>
<ul>
<li>E°' = +0.25 V</li>
<li>Positioned between Complex III (+0.22 V) and Complex IV (+0.39 V)</li>
<li>Thermodynamically favorable electron flow</li>
</ul>
<h2>Apoptotic Function</h2>
<h3>Release Triggers</h3>
<ul>
<li><strong>Intrinsic pathway activation</strong>: DNA damage, ER stress, growth factor withdrawal</li>
<li><strong>Bax/Bak pore formation</strong>: Mitochondrial outer membrane permeabilization (MOMP)</li>
<li><strong>Cardiolipin peroxidation</strong>: ROS-mediated release</li>
<li><strong>Calcium overload</strong>: Mitochondrial permeability transition</li>
</ul>
<h3>Apoptosome Formation</h3>
<ol>
<li>Cytochrome c released to cytoplasm</li>
<li>Binds Apaf-1 (apoptotic protease-activating factor 1)</li>
<li>ATP-dependent conformational change</li>
<li>Apaf-1 oligomerizes into wheel-shaped apoptosome</li>
<li>Apoptosome recruits and activates pro-caspase-9</li>
<li>Caspase-9 activates effector caspases (3, 6, 7)</li>
<li>Cellular dismantling</li>
</ol>
<h3>Anti-apoptotic Proteins</h3>
<ul>
<li>Bcl-2, Bcl-xL: Prevent MOMP</li>
<li>XIAP: Inhibits caspases downstream</li>
<li>These are therapeutic targets in cancer</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Cancer</h3>
<ul>
<li>Evading apoptosis is a cancer hallmark</li>
<li>Cytochrome c release pathways as drug targets</li>
<li>BH3 mimetics (venetoclax) promote release</li>
</ul>
<h3>Ischemia-Reperfusion Injury</h3>
<ul>
<li>Cytochrome c release during ischemia</li>
<li>Contributes to cell death</li>
<li>Therapeutic target for protection</li>
</ul>
<h3>Neurodegeneration</h3>
<ul>
<li>Cytochrome c release in multiple conditions</li>
<li>Contributes to neuronal death</li>
<li>Potential therapeutic target</li>
</ul>
<h3>Thrombocytopenia and Anemia (Rare)</h3>
<ul>
<li>CYCS mutations cause autosomal dominant thrombocytopenia</li>
<li>Altered apoptotic function in megakaryocytes</li>
</ul>
<h2>Diagnostic Use</h2>
<h3>Biomarker</h3>
<ul>
<li>Serum cytochrome c indicates cell death</li>
<li>Elevated in acute organ injury</li>
<li>Potential marker for mitochondrial damage</li>
</ul>
<h2>Evolutionary Conservation</h2>
<p>Cytochrome c is remarkably conserved:</p>
<ul>
<li>Human-yeast: ~60% identical</li>
<li>Human-horse: ~90% identical</li>
<li>Classic model for molecular evolution studies</li>
<li>Functional constraints maintain sequence</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<p>No relationships found.</p>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>PART_OF::<a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> - Essential electron carrier<br />
TRANSFERS_ELECTRONS_FROM::<a class="internal-link is-unresolved" href="/404">Complex III</a> - Receives electrons<br />
TRANSFERS_ELECTRONS_TO::<a class="internal-link is-unresolved" href="/404">Complex IV</a> - Donates electrons<br />
LOCATED_IN::<a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Intermembrane space<br />
TRIGGERS::<a class="internal-link is-unresolved" href="/404">Apoptosis</a> - Intrinsic pathway<br />
BINDS::<a class="internal-link is-unresolved" href="/404">Cardiolipin</a> - Inner membrane attachment<br />
ACTIVATES::<a class="internal-link is-unresolved" href="/404">Apaf-1</a> - Apoptosome formation<br />
AFFECTED_BY::<a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative Stress</a> - Cardiolipin peroxidation<br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/dev_admin/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a><br />
RELATED_TO::<a class="internal-link is-unresolved" href="/404">CoQ10</a> - Upstream electron carrier<br />
RELATED_TO::<a class="internal-link is-unresolved" href="/404">ATP</a> - Supports synthesis<br />
RELATED_TO::<a class="internal-link is-unresolved" href="/404">Bcl-2</a> - Anti-apoptotic antagonist<br />
ENCODED_BY::<a class="internal-link is-unresolved" href="/404">CYCS</a> - Nuclear gene</p>
<h2>References</h2>
<ul>
<li>Liu X, et al. Induction of apoptotic program in cell-free extracts: requirement for dATP and cytochrome c. Cell. 1996;86(1):147-57. PMID: 8689682</li>
<li>Hüttemann M, et al. The multiple functions of cytochrome c and their regulation in life and death decisions of the mammalian cell. Mitochondrion. 2011;11(3):369-81. PMID: 21296189</li>
<li>Garrido C, et al. Mechanisms of cytochrome c release from mitochondria. Cell Death Differ. 2006;13(9):1423-33. PMID: 16676004</li>
</ul>

{% endraw %}