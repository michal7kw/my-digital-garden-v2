---
created: '2026-02-09T05:54:32.260115Z'
description: Encodes the transcription factor FOXO3, a key "longevity gene" regulating
  stress resistance, autophagy, and apoptosis. Strongly associated with human centenarians.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/gene/foxo3/
slug: foxo3
tags:
- gene
- longevity
- transcription_factor
- stress_response
- insulin_signaling
templateEngineOverride: njk
title: FOXO3
type: gene
updated: '2026-02-09T05:54:32.260115Z'
---

{% raw %}
<h1>FOXO3</h1>
<h2>Overview</h2>
<p>The <strong>FOXO3</strong> gene encodes a transcription factor that functions as a master switch for cellular resilience. It translates environmental signals (like nutrient scarcity or oxidative stress) into gene expression programs that promote survival.</p>
<p>FOXO3 variants are consistently found in <strong>centenarians</strong> across diverse ethnic groups, making it one of the most validated &quot;longevity genes&quot; in humans.</p>
<h2>Biological Functions</h2>
<h3>1. Stress Resistance</h3>
<p>Upregulates antioxidant enzymes (e.g., Manganese Superoxide Dismutase <strong>SOD2</strong>, Catalase) to neutralize ROS.</p>
<h3>2. Proteostasis</h3>
<p>Induces autophagy genes (e.g., <em>LC3</em>, <em>BNIP3</em>) to clear damaged proteins and organelles.</p>
<h3>3. Cell Cycle &amp; Apoptosis</h3>
<p>Induces cell cycle arrest (via <em>p27</em>) to allow time for repair. If damage is too severe, it can trigger apoptosis (via <em>Bim</em>).</p>
<h2>Regulation (The &quot;See-Saw&quot;)</h2>
<p>FOXO3 activity is negatively regulated by insulin/growth factor signaling.</p>
<ul>
<li><strong>High Insulin/IGF-1:</strong> Activates <strong>AKT</strong>, which phosphorylates FOXO3. This keeps FOXO3 trapped in the cytoplasm (inactive) and targets it for degradation.</li>
<li><strong>Low Insulin/Fasting:</strong> AKT is inactive. FOXO3 enters the nucleus to drive stress resistance genes.</li>
</ul>
<h2>Relationships</h2>
<p>ENCODES::[[FOXO3 Protein]]<br />
REGULATES::[[Autophagy]]<br />
REGULATES::[[Antioxidant Defense]]<br />
REGULATES::[[Longevity]]<br />
INHIBITED_BY::[[AKT1]] - Phosphorylation excludes it from nucleus<br />
INHIBITED_BY::[[Insulin Signaling]]<br />
ACTIVATED_BY::[[AMPK]] - Enhances transcriptional activity<br />
ACTIVATED_BY::[[SIRT1]] - Deacetylation enhances function<br />
ACTIVATED_BY::[[Fasting]]<br />
TARGETS::[[SOD2]] - Antioxidant gene<br />
TARGETS::[[Bim]] - Pro-apoptotic gene</p>
<h2>References</h2>
<ul>
<li>Willcox BJ, et al. FOXO3A genotype is strongly associated with human longevity. PNAS. 2008.</li>
<li>Webb AE, Brunet A. FOXO transcription factors: key regulators of cellular quality control. Trends Biochem Sci. 2014.</li>
</ul>

{% endraw %}