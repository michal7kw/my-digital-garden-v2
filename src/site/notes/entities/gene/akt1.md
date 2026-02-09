---
created: '2026-02-09T05:40:21.216188Z'
description: Encodes AKT1 (Protein Kinase B alpha), a serine/threonine kinase that
  is a central node in the PI3K/AKT pathway. Regulates cell survival, proliferation,
  metabolism, and insulin signaling.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/gene/akt1/
slug: akt1
tags:
- gene
- kinase
- insulin_signaling
- mtor_pathway
- cancer_biology
- imported
- primekg
templateEngineOverride: njk
title: AKT1
type: gene
updated: '2026-02-09T05:40:21.216188Z'
---

{% raw %}
<h1>AKT1</h1>
<h2>Overview</h2>
<p><strong>AKT1</strong> (also known as Protein Kinase B alpha) is a serine/threonine kinase that serves as a critical signaling hub in human biology. It acts as the primary downstream effector of Phosphoinositide 3-kinase (PI3K) and is essential for translating extracellular signals (like insulin and growth factors) into cellular responses.</p>
<p>Because it promotes cell survival and growth while inhibiting apoptosis, the PI3K/AKT pathway is one of the most frequently hyperactivated pathways in human cancer.</p>
<h2>Biological Functions</h2>
<h3>1. Cell Survival and Anti-Apoptosis</h3>
<p>AKT1 promotes survival by phosphorylating and inhibiting pro-apoptotic proteins:</p>
<ul>
<li><strong>Inhibits BAD and BAX:</strong> Prevents them from triggering mitochondrial apoptosis.</li>
<li><strong>Inhibits FOXO Transcription Factors:</strong> Prevents the expression of pro-apoptotic genes (e.g., <em>BIM</em>, <em>FasL</em>).</li>
<li><strong>Activates MDM2:</strong> Promotes the degradation of p53, suppressing DNA damage-induced apoptosis.</li>
</ul>
<h3>2. Metabolism and Insulin Signaling</h3>
<p>AKT1 is the master regulator of insulin's metabolic effects:</p>
<ul>
<li><strong>Glucose Uptake:</strong> Stimulates the translocation of <strong>GLUT4</strong> transporters to the cell membrane in muscle and fat cells.</li>
<li><strong>Glycogen Synthesis:</strong> Phosphorylates and inhibits <strong>GSK3beta</strong>, thereby activating glycogen synthase.</li>
<li><strong>Lipogenesis:</strong> Activates mTORC1 to promote lipid synthesis.</li>
</ul>
<h3>3. Cell Growth and Proliferation</h3>
<ul>
<li><strong>mTOR Activation:</strong> AKT1 activates <strong>mTORC1</strong> (by inhibiting TSC2), which drives protein synthesis and cell growth.</li>
<li><strong>Cell Cycle:</strong> Regulates Cyclin D1 and inhibits p27 (CDKN1B) to promote G1/S progression.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Cancer:</strong> Hyperactivation of AKT1 (via PIK3CA mutation, PTEN loss, or AKT1 E17K mutation) drives uncontrolled tumor growth and chemoresistance.</li>
<li><strong>Diabetes:</strong> Impaired AKT1 signaling (insulin resistance) leads to reduced glucose uptake and hyperglycemia.</li>
<li><strong>Proteus Syndrome:</strong> A rare overgrowth disorder caused by somatic activating mutations in AKT1.</li>
</ul>
<h2>Relationships</h2>
<p>ENCODES::[[AKT1 Protein]]<br />
PARTICIPATES_IN_PATHWAY::[[Insulin Signaling]]<br />
PARTICIPATES_IN_PATHWAY::[[mTOR Pathway]]<br />
PARTICIPATES_IN_PATHWAY::[[PI3K/AKT Signaling]]<br />
ACTIVATED_BY::[[PI3K]] - Upstream kinase<br />
ACTIVATED_BY::[[Insulin]] - Primary hormonal activator<br />
ACTIVATED_BY::[[IGF-1]]<br />
INHIBITED_BY::[[PTEN]] - Tumor suppressor that antagonizes PI3K<br />
ACTIVATES::[[mTOR]] - Promotes growth<br />
ACTIVATES::[[eNOS]] - Promotes vasodilation<br />
INHIBITS::[[GSK3beta]] - Promotes glycogen synthesis<br />
INHIBITS::[[FOXO]] - Promotes survival<br />
INHIBITS::[[BAD]] - Anti-apoptotic<br />
ASSOCIATED_WITH_CONDITION::[[Cancer]] - Frequently hyperactivated<br />
ASSOCIATED_WITH_CONDITION::[[Type 2 Diabetes]] - Insulin resistance<br />
ASSOCIATED_WITH_CONDITION::[[Proteus Syndrome]]</p>
<h2>References</h2>
<ul>
<li>Manning BD, Toker A. AKT/PKB Signaling: Navigating the Network. Cell. 2017;169(3):381-405.</li>
<li>Engelman JA, Luo J, Cantley LC. The evolution of phosphatidylinositol 3-kinases as regulators of growth and metabolism. Nat Rev Genet. 2006;7(8):606-619.</li>
<li>Carnero A, Blanco-Aparicio C, Renner O, Link W, Leal JF. The PTEN/PI3K/AKT signalling pathway in cancer, therapeutic implications. Curr Cancer Drug Targets. 2008;8(3):187-198.</li>
</ul>

{% endraw %}