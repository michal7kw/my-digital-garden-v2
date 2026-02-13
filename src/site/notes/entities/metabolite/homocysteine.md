---
created: '2026-02-13T18:51:26.470691Z'
description: A sulfur-containing amino acid produced during methionine metabolism.
  Elevated levels are a risk factor for cardiovascular disease, cognitive decline,
  and neural tube defects.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/metabolite/homocysteine/
slug: homocysteine
tags:
- metabolite
- cardiovascular_risk
- methylation
- amino_acid
templateEngineOverride: njk
title: Homocysteine
type: metabolite
updated: '2026-02-13T18:51:26.470691Z'
---

{% raw %}
<h1>Homocysteine</h1>
<h2>Overview</h2>
<p><strong>Homocysteine</strong> is a non-proteinogenic amino acid synthesized from methionine. It occupies a central intersection in the methylation cycle and transsulfuration pathway. It is not obtained from the diet directly but is produced via the demethylation of S-adenosylmethionine (SAMe).</p>
<p>Efficient recycling of homocysteine is critical for health. When recycling pathways are impaired (often due to nutrient deficiencies or genetic variants like MTHFR), homocysteine accumulates, causing endothelial damage, oxidative stress, and neurotoxicity.</p>
<h2>Metabolism Pathways</h2>
<p>Homocysteine has two metabolic fates:</p>
<h3>1. Remethylation (Back to Methionine)</h3>
<ul>
<li><strong>Folate-Dependent Pathway:</strong> Requires <strong>5-MTHF</strong> (active folate) and <strong>Vitamin B12</strong>. Catalyzed by Methionine Synthase (MTR).</li>
<li><strong>Betaine-Dependent Pathway:</strong> Uses Betaine (TMG) as a methyl donor. Catalyzed by Betaine-Homocysteine Methyltransferase (BHMT), primarily in the liver.</li>
</ul>
<h3>2. Transsulfuration (To Cysteine/Glutathione)</h3>
<ul>
<li>Irreversibly converts homocysteine to cystathionine and then cysteine.</li>
<li>Requires <strong>Vitamin B6</strong> (P5P).</li>
<li>Critical for the synthesis of <strong>Glutathione</strong>, the body's master antioxidant.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Cardiovascular Disease:</strong> Hyperhomocysteinemia damages blood vessel linings (endothelial dysfunction) and promotes clotting, increasing the risk of atherosclerosis, heart attack, and stroke.</li>
<li><strong>Cognitive Decline:</strong> High levels are strongly associated with brain atrophy, vascular dementia, and Alzheimer's disease.</li>
<li><strong>Bone Health:</strong> High levels disrupt collagen cross-linking, increasing osteoporosis and fracture risk.</li>
<li><strong>Pregnancy:</strong> Associated with neural tube defects and pre-eclampsia.</li>
</ul>
<h2>Relationships</h2>
<p>PRODUCED_FROM::<a class="internal-link is-unresolved" href="/404">Methionine</a> - Via SAMe pathway<br />
CONVERTED_TO::<a href="/garden/dev_admin/labtest/glutathione/" class="internal-link">Glutathione</a> - Via transsulfuration (requires B6)<br />
CONVERTED_TO::<a class="internal-link is-unresolved" href="/404">Methionine</a> - Via remethylation (requires B12/Folate)<br />
REQUIRES_COFACTOR::<a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a> - For remethylation<br />
REQUIRES_COFACTOR::<a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> - For remethylation<br />
REQUIRES_COFACTOR::<a href="/garden/dev_admin/supplement/vitamin-b6/" class="internal-link">Vitamin B6</a> - For transsulfuration<br />
REQUIRES_COFACTOR::<a class="internal-link is-unresolved" href="/404">Betaine</a> - Alternate remethylation donor<br />
INCREASED_BY::<a class="internal-link is-unresolved" href="/404">MTHFR Gene</a> - MTHFR C677T variant impairs folate cycle<br />
INCREASED_BY::<a class="internal-link is-unresolved" href="/404">Vitamin B12 Deficiency</a><br />
INCREASED_BY::<a class="internal-link is-unresolved" href="/404">Folate Deficiency</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> - Independent risk factor<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a> - Risk factor<br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/osteoporosis/" class="internal-link">Osteoporosis</a></p>
<h2>References</h2>
<ul>
<li>Seshadri S, et al. Plasma homocysteine as a risk factor for dementia and Alzheimer's disease. N Engl J Med. 2002;346(7):476-83.</li>
<li>Refsum H, Smith AD. Ueland PM, et al. Facts and recommendations about total homocysteine determinations: an expert opinion. Clin Chem. 2004;50(1):3-32.</li>
<li>Homocysteine Studies Collaboration. Homocysteine and risk of ischemic heart disease and stroke: a meta-analysis. JAMA. 2002;288(16):2015-22.</li>
</ul>

{% endraw %}