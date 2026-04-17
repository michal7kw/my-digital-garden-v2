---
created: '2026-04-17T18:59:19.309912Z'
description: SSRI antidepressant (Celexa) that is the most pharmacologically selective
  SERT inhibitor — minimal off-target receptor binding and fewest CYP-mediated drug
  interactions among SSRIs. Available as racemic mixture (R- and S-enantiomers). Key
  safety concern is dose-dependent QT interval prolongation with FDA-mandated maximum
  dose of 40mg (20mg in elderly and CYP2C19 poor metabolizers). Parent compound of
  escitalopram (S-enantiomer).
dg-home: false
dg-publish: true
permalink: /entities/drug/citalopram/
slug: citalopram
tags:
- drug
- ssri
- antidepressant
- psychiatry
- prescription
templateEngineOverride: njk
title: Citalopram
type: drug
updated: '2026-04-17T18:59:19.309912Z'
---

{% raw %}
<h1>Citalopram</h1>
<h2>Overview</h2>
<p>Citalopram (Celexa/Cipramil) is a racemic SSRI composed of equal parts R-citalopram and S-citalopram. It is the most pharmacologically selective SSRI — almost exclusively targeting SERT with minimal off-target receptor binding, resulting in a relatively clean side effect profile. The S-enantiomer (escitalopram, marketed separately as Lexapro) is responsible for essentially all of the SERT inhibition.</p>
<p>Citalopram's major clinical limitation is dose-dependent QT prolongation caused by hERG potassium channel blockade. In 2011, the FDA issued a safety communication mandating a maximum dose of 40mg/day (20mg for patients &gt;60 years old, hepatic impairment, or CYP2C19 poor metabolizers). This restricts dose optimization for conditions like OCD that may require higher doses.</p>
<h2>Mechanism of Action</h2>
<p>Citalopram inhibits SERT (Ki 1.16 nM for racemate; 1.1 nM for S-enantiomer alone). Key pharmacological features:</p>
<ul>
<li><strong>Highest SERT selectivity</strong>: &gt;3000-fold selectivity for SERT over NET and DAT</li>
<li><strong>Minimal off-target binding</strong>: Negligible affinity for histamine H1, muscarinic, alpha-adrenergic, or dopamine receptors</li>
<li><strong>R-enantiomer</strong>: Essentially inactive at SERT; may weakly inhibit S-citalopram binding (allosteric site hypothesis)</li>
<li><strong>hERG channel blockade</strong>: R-citalopram has higher hERG affinity than S-citalopram → QT prolongation is primarily from R-enantiomer</li>
<li><strong>Low CYP inhibition</strong>: Minimal inhibition of CYP1A2, CYP2D6, CYP2C19, CYP3A4 → fewest drug-drug interactions among SSRIs</li>
</ul>
<h2>QT Prolongation (FDA Black Box)</h2>
<ul>
<li><strong>Mechanism</strong>: hERG potassium channel blockade → delayed ventricular repolarization</li>
<li><strong>Dose-response</strong>: Linear increase in QTc with dose above 20mg</li>
<li><strong>Risk factors</strong>: Age &gt;60, hepatic impairment, CYP2C19 PM genotype, hypokalemia, hypomagnesemia, concomitant QT drugs</li>
<li><strong>Maximum doses</strong>: 40mg (general), 20mg (elderly, hepatic impairment, CYP2C19 PM)</li>
<li><strong>Monitoring</strong>: Consider baseline ECG in at-risk patients; check electrolytes</li>
</ul>
<h2>Pharmacogenomics</h2>
<ul>
<li><strong>CYP2C19</strong>: Primary metabolic pathway. Poor metabolizers (2-5% Caucasian, 15-20% Asian) have ~2x higher plasma levels → dose must not exceed 20mg</li>
<li><strong>CYP3A4</strong>: Secondary pathway</li>
<li><strong>CYP2D6</strong>: Minor pathway; paroxetine/fluoxetine co-administration has minimal effect on citalopram levels (unlike most SSRIs)</li>
</ul>
<h2>Relationships</h2>
<h3>Targets</h3>
<p>TARGETS::<a href="/entities/protein/sert/" class="internal-link">SERT</a><br />
INHIBITS::<a href="/entities/protein/sert/" class="internal-link">SERT</a></p>
<h3>Treats</h3>
<p>TREATS::<a href="/entities/condition/depression/" class="internal-link">Depression</a></p>
<h3>Metabolized By</h3>
<p>METABOLIZED_BY::<a href="/entities/protein/cyp2c19/" class="internal-link">CYP2C19</a><br />
METABOLIZED_BY::<a href="/entities/gene/cyp3a4/" class="internal-link">CYP3A4</a></p>
<h3>Modulates Neurotransmitter</h3>
<p>MODULATES_NEUROTRANSMITTER::<a href="/entities/neurotransmitter/serotonin/" class="internal-link">Serotonin</a></p>
<h3>Interacts With</h3>
<p>INTERACTS_WITH::<a href="/entities/supplement/same/" class="internal-link">SAMe</a><br />
INTERACTS_WITH::<a href="/entities/supplement/l-tryptophan/" class="internal-link">L-Tryptophan</a><br />
INTERACTS_WITH::<a href="/entities/supplement/5-htp/" class="internal-link">5-HTP</a></p>
<h3>Affects Brain Region</h3>
<p>AFFECTS_BRAIN_REGION::<a href="/entities/anatomy/prefrontal-cortex/" class="internal-link">Prefrontal Cortex</a><br />
AFFECTS_BRAIN_REGION::<a href="/entities/anatomy/amygdala/" class="internal-link">Amygdala</a><br />
AFFECTS_BRAIN_REGION::<a href="/entities/anatomy/hippocampus/" class="internal-link">Hippocampus</a></p>
<h3>Side Effects</h3>
<p>CAUSES::<a href="/entities/sideeffect/sexual-dysfunction/" class="internal-link">Sexual Dysfunction</a><br />
CAUSES::<a href="/entities/sideeffect/ssri-discontinuation-syndrome/" class="internal-link">SSRI Discontinuation Syndrome</a><br />
CAUSES::<a href="/entities/sideeffect/serotonin-syndrome/" class="internal-link">Serotonin Syndrome</a><br />
INCREASES_RISK_FOR::<a href="/entities/sideeffect/qt-prolongation/" class="internal-link">QT Prolongation</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/entities/drug/escitalopram/" class="internal-link">Escitalopram</a></p>
<h3>Affects Biomarker</h3>
<p>AFFECTS_BIOMARKER::<a href="/entities/biomarker/bdnf/" class="internal-link">BDNF</a></p>
<h2>References</h2>
<ul>
<li>PMID:22100876 — FDA safety communication: citalopram and QT prolongation</li>
<li>PMID:16803859 — SSRI selectivity profiles</li>
<li>PMID:15190641 — Citalopram enantiomers and hERG channel</li>
</ul>

{% endraw %}