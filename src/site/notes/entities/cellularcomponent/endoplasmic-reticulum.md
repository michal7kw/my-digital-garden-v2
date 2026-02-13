---
created: '2026-02-13T18:51:24.815561Z'
description: An extensive membrane network responsible for protein folding, lipid
  synthesis, and calcium storage. Communicates directly with mitochondria via MAMs.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/cellularcomponent/endoplasmic-reticulum/
slug: endoplasmic-reticulum
tags:
- cellularcomponent
- cellular_component
- organelle
- protein_folding
- calcium_storage
- stress_response
templateEngineOverride: njk
title: Endoplasmic Reticulum
type: cellularcomponent
updated: '2026-02-13T18:51:24.815561Z'
---

{% raw %}
<h1>Endoplasmic Reticulum</h1>
<h2>Overview</h2>
<p>The <strong>Endoplasmic Reticulum (ER)</strong> is the largest organelle in the cell, forming an interconnected network of flattened sacs and tubules. It is divided into two types:</p>
<ol>
<li><strong>Rough ER:</strong> Studded with ribosomes; site of protein synthesis and folding.</li>
<li><strong>Smooth ER:</strong> Site of lipid synthesis, detoxification, and calcium storage.</li>
</ol>
<h2>Key Functions</h2>
<h3>1. Protein Folding &amp; Quality Control</h3>
<p>The ER ensures that newly synthesized proteins are folded correctly. If misfolded proteins accumulate, the ER triggers the <strong>Unfolded Protein Response (UPR)</strong> to restore homeostasis or induce apoptosis if the stress is unresolved.</p>
<h3>2. Calcium Storage</h3>
<p>The ER is the primary intracellular reservoir for Calcium (Ca2+). It releases calcium signals to regulate muscle contraction, neurotransmission, and gene expression.</p>
<h3>3. Mitochondrial Crosstalk (MAMs)</h3>
<p><strong>Mitochondria-Associated Membranes (MAMs)</strong> are physical contact points where the ER and Mitochondria touch. They are critical for:</p>
<ul>
<li>Transferring Calcium to mitochondria (to stimulate ATP production).</li>
<li>Lipid transfer.</li>
<li>Regulating apoptosis and mitochondrial fission.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>ER Stress:</strong> Chronic activation of the UPR is a driver of metabolic disease (insulin resistance in obesity) and neurodegeneration (accumulation of misfolded proteins like Tau/Amyloid).</li>
<li><strong>Diabetes:</strong> Pancreatic beta-cells are highly susceptible to ER stress due to the massive demand for insulin production.</li>
</ul>
<h2>Relationships</h2>
<p>SYNTHESIZES::<a class="internal-link is-unresolved" href="/404">Protein</a> - Rough ER<br />
SYNTHESIZES::<a class="internal-link is-unresolved" href="/404">Lipids</a> - Smooth ER<br />
STORES::<a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a><br />
REGULATES::<a class="internal-link is-unresolved" href="/404">Unfolded Protein Response</a><br />
INTERACTS_WITH::<a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Via MAMs<br />
INTERACTS_WITH::<a class="internal-link is-unresolved" href="/404">Golgi Apparatus</a> - Downstream trafficking<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a> - ER stress link<br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Neurodegeneration</a><br />
ASSOCIATED_WITH_GENE::<a href="/garden/dev_admin/gene/psen1/" class="internal-link">PSEN1</a> - Localized to ER/MAMs</p>
<h2>References</h2>
<ul>
<li>Walter P, Ron D. The unfolded protein response: from stress pathway to homeostasis. Science. 2011;334(6059):1081-6.</li>
<li>Rizzuto R, et al. ER-mitochondria associations: in the heart of signal transduction. Nat Rev Mol Cell Biol. 2012.</li>
</ul>

{% endraw %}