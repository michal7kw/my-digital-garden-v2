---
created: '2026-02-13T14:58:21.046379Z'
description: The continuous remodeling of the mitochondrial network through fusion
  and fission events. Essential for maintaining mitochondrial quality, distribution,
  and function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/mitochondrial-dynamics/
slug: mitochondrial-dynamics
tags:
- pathway
- mitochondria
- cellular_health
- quality_control
templateEngineOverride: njk
title: Mitochondrial Dynamics
type: pathway
updated: '2026-02-13T14:58:21.046379Z'
---

{% raw %}
<h1>Mitochondrial Dynamics</h1>
<h2>Overview</h2>
<p>Mitochondria are not static, isolated organelles. They form a highly dynamic network that constantly undergoes <strong>Fission</strong> (dividing) and <strong>Fusion</strong> (merging). This dynamics is crucial for:</p>
<ol>
<li><strong>Quality Control:</strong> Segregating damaged components for removal (mitophagy).</li>
<li><strong>Energy Efficiency:</strong> Sharing metabolites and potential across the network.</li>
<li><strong>Apoptosis:</strong> Regulating cell death signaling.</li>
</ol>
<h2>Mechanisms</h2>
<h3>1. Mitochondrial Fusion</h3>
<p>Merges two mitochondria into one.</p>
<ul>
<li><strong>Function:</strong> Mixes contents (mtDNA, proteins, metabolites) to &quot;dilute&quot; damage and maximize oxidative phosphorylation efficiency during stress or starvation.</li>
<li><strong>Key Proteins:</strong>
<ul>
<li><strong>Mitofusin 1 &amp; 2 (Mfn1/Mfn2):</strong> Fuse the <em>Outer</em> Mitochondrial Membranes.</li>
<li><strong>OPA1:</strong> Fuses the <em>Inner</em> Mitochondrial Membranes.</li>
</ul>
</li>
</ul>
<h3>2. Mitochondrial Fission</h3>
<p>Splits one mitochondrion into two.</p>
<ul>
<li><strong>Function:</strong> Facilitates distribution during cell division and isolates damaged segments for degradation.</li>
<li><strong>Key Proteins:</strong>
<ul>
<li><strong>Drp1 (Dynamin-related protein 1):</strong> Constricts the mitochondria from the outside to sever it.</li>
</ul>
</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Neurodegeneration:</strong> Neurons are highly dependent on transport of mitochondria to synapses. Defects in fusion/fission cause Charcot-Marie-Tooth disease and Optic Atrophy.</li>
<li><strong>Metabolic Disease:</strong> In obesity/diabetes, mitochondria often become fragmented (excessive fission), reducing efficiency.</li>
<li><strong>Aging:</strong> Dynamics shift towards fission/fragmentation with age.</li>
</ul>
<h2>Relationships</h2>
<p>REGULATES::<a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Network morphology<br />
REGULATES::<a href="/garden/dev_admin/pathway/mitophagy/" class="internal-link">Mitophagy</a> - Fission required to isolate cargo<br />
DRIVEN_BY::<a class="internal-link is-unresolved" href="/404">Drp1</a> - Fission protein<br />
DRIVEN_BY::<a class="internal-link is-unresolved" href="/404">Mfn1</a> - Fusion protein<br />
DRIVEN_BY::<a class="internal-link is-unresolved" href="/404">Mfn2</a> - Fusion protein<br />
DRIVEN_BY::<a class="internal-link is-unresolved" href="/404">OPA1</a> - Fusion protein<br />
ACTIVATED_BY::<a href="/garden/dev_admin/protein/ampk/" class="internal-link">AMPK</a> - Promotes fission to clear damage (mitophagy)<br />
INHIBITED_BY::<a href="/garden/dev_admin/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a> - Can suppress quality control<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/parkinsons-disease/" class="internal-link">Parkinson's Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/diabetes/" class="internal-link">Diabetes</a></p>
<h2>References</h2>
<ul>
<li>Chan DC. Fusion and fission: interlinked processes critical for mitochondrial health. Annu Rev Genet. 2012.</li>
<li>Youle RJ, van der Bliek AM. Mitochondrial fission, fusion, and stress. Science. 2012.</li>
</ul>

{% endraw %}