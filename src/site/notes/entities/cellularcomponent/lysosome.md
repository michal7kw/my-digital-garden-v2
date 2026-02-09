---
created: '2026-02-09T08:04:40.015204Z'
description: Membrane-bound organelle containing hydrolytic enzymes. The cell's recycling
  center and a central hub for nutrient sensing via mTOR/AMPK.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/cellularcomponent/lysosome/
slug: lysosome
tags:
- cellularcomponent
- cellular_component
- organelle
- autophagy
- waste_management
- nutrient_sensing
templateEngineOverride: njk
title: Lysosome
type: cellularcomponent
updated: '2026-02-09T08:04:40.015204Z'
---

{% raw %}
<h1>Lysosome</h1>
<h2>Overview</h2>
<p>The <strong>Lysosome</strong> is an acidic (pH ~4.5-5.0), membrane-bound organelle filled with over 50 different hydrolytic enzymes. It serves as the terminal degradation station for the autophagy pathway, breaking down cellular waste, damaged organelles, and pathogens into basic building blocks (amino acids, fatty acids, sugars) that are recycled back into the cytoplasm.</p>
<p>Far from being a simple garbage bin, the lysosome is now recognized as a sophisticated signaling hub that integrates nutrient sensing.</p>
<h2>Mechanism and Function</h2>
<h3>1. Degradation (Autophagy Endpoint)</h3>
<p>Autophagosomes carrying cargo fuse with lysosomes to form <strong>autolysosomes</strong>. The acidic environment activates hydrolases (proteases, lipases, nucleases) to digest the cargo.</p>
<ul>
<li><strong>TFEB Regulation:</strong> The Transcription Factor EB (TFEB) is the master regulator of lysosomal biogenesis. During starvation, TFEB enters the nucleus to produce more lysosomes and autophagy proteins.</li>
</ul>
<h3>2. Nutrient Sensing (mTORC1)</h3>
<p>The lysosomal surface is the &quot;headquarters&quot; for <strong>mTORC1</strong>.</p>
<ul>
<li><strong>High Nutrients:</strong> mTORC1 docks to the lysosome surface (via Rag GTPases), becomes active, and inhibits TFEB (keeping it in the cytoplasm). This promotes growth.</li>
<li><strong>Starvation:</strong> mTORC1 falls off the lysosome and becomes inactive. TFEB is released to trigger autophagy.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Lysosomal Storage Diseases:</strong> Genetic defects in specific hydrolases lead to the accumulation of undigested toxic waste (e.g., Tay-Sachs, Gaucher's).</li>
<li><strong>Neurodegeneration:</strong> In Alzheimer's and Parkinson's, lysosomal acidification often fails, preventing the clearance of toxic protein aggregates (Amyloid/Tau).</li>
<li><strong>Longevity:</strong> Lysosomal function declines with age. Enhancing lysosomal activity extends lifespan in model organisms.</li>
</ul>
<h2>Relationships</h2>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/dev_admin/pathway/autophagy/" class="internal-link">Autophagy</a> - Terminal step<br />
REGULATES::<a href="/garden/dev_admin/pathway/mtor-pathway/" class="internal-link">mTOR Pathway</a> - Site of activation<br />
REGULATED_BY::<a class="internal-link is-unresolved" href="/404">TFEB</a> - Master transcriptional regulator<br />
CONTAINS::<a class="internal-link is-unresolved" href="/404">Hydrolytic Enzymes</a><br />
REQUIRES::<a class="internal-link is-unresolved" href="/404">Acidic pH</a> - Maintained by V-ATPase proton pumps<br />
DEGRADES::<a class="internal-link is-unresolved" href="/404">Amyloid Beta</a><br />
DEGRADES::<a class="internal-link is-unresolved" href="/404">Damaged Mitochondria</a> - Via Mitophagy<br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Lysosomal Storage Diseases</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> - Failure of clearance</p>
<h2>References</h2>
<ul>
<li>Settembre C, et al. TFEB links autophagy to lysosomal biogenesis. Science. 2011;332(6036):1429-33.</li>
<li>Zoncu R, et al. mTORC1 sensing of lysosomal amino acids. Science. 2011;334(6056):678-83.</li>
</ul>

{% endraw %}