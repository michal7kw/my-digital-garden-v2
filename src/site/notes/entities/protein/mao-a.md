---
created: '2026-03-27T09:46:14.308403Z'
description: Monoamine oxidase A, a mitochondrial outer membrane-bound flavoenzyme
  that catalyzes the oxidative deamination of monoamine neurotransmitters including
  serotonin, norepinephrine, and dopamine. Key pharmacological target for antidepressant
  therapy (MAO inhibitors) and relevant to Methylene Blue's mechanism as a reversible
  MAO-A inhibitor. Produces hydrogen peroxide (H2O2) as a byproduct, linking neurotransmitter
  metabolism to oxidative stress.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/mao-a/
slug: mao-a
tags:
- protein
- enzyme
- monoamine
- neurotransmitter_metabolism
- mitochondrial
- antidepressant_target
- oxidative_stress
templateEngineOverride: njk
title: MAO-A
type: protein
updated: '2026-03-27T09:46:14.308403Z'
---

{% raw %}
<h1>MAO-A</h1>
<h2>Overview</h2>
<p>Monoamine oxidase A (MAO-A) is one of two MAO isoforms (MAO-A and MAO-B) responsible for the metabolic inactivation of monoamine neurotransmitters. MAO-A preferentially degrades serotonin, norepinephrine, and dopamine (the latter shared with MAO-B), making it a critical regulator of monoaminergic neurotransmission. The enzyme is localized to the outer mitochondrial membrane, positioning it to intercept cytoplasmic monoamines that escape synaptic vesicles.</p>
<p>MAO-A is a major pharmacological target: classical MAO inhibitors (phenelzine, tranylcypromine) were among the first effective antidepressants. Methylene blue, one of the 6 core entities in this knowledge graph expansion, acts as a reversible MAO-A inhibitor — this contributes to its mood-enhancing and cognitive effects by increasing monoamine availability. Importantly, MAO-A produces hydrogen peroxide (H2O2) as a stoichiometric byproduct of each catalytic cycle, directly linking neurotransmitter degradation to mitochondrial oxidative stress. This H2O2 production increases with age as MAO-A expression rises, contributing to oxidative damage in neurodegenerative diseases.</p>
<p><strong>Evidence Level:</strong> 5/5</p>
<h2>Key Functions</h2>
<h3>Catalytic Mechanism</h3>
<ul>
<li>Uses covalently bound FAD (flavin adenine dinucleotide) as the redox cofactor</li>
<li>Oxidatively deaminates monoamines: R-CH2-NH2 + O2 + H2O → R-CHO + NH3 + H2O2</li>
<li>Substrate preference: serotonin &gt; norepinephrine &gt; dopamine &gt; tyramine</li>
<li>MAO-B preference: phenylethylamine &gt; dopamine &gt; tyramine (different but overlapping substrate profile)</li>
</ul>
<h3>Neurotransmitter Regulation</h3>
<ul>
<li><strong>Serotonin</strong>: MAO-A is the primary degradation enzyme; serotonin levels are inversely proportional to MAO-A activity</li>
<li><strong>Norepinephrine</strong>: Degraded by MAO-A in central and peripheral noradrenergic neurons</li>
<li><strong>Dopamine</strong>: Degraded by both MAO-A and MAO-B; relative contribution varies by brain region</li>
<li><strong>Tyramine</strong>: Dietary tyramine is metabolized by intestinal MAO-A; inhibiting this causes the &quot;cheese reaction&quot; (hypertensive crisis)</li>
</ul>
<h3>Oxidative Stress Production</h3>
<ul>
<li>Each catalytic cycle produces one molecule of H2O2</li>
<li>H2O2 is a reactive oxygen species that can damage mitochondrial DNA, proteins, and lipids</li>
<li>MAO-A expression and activity increase with age → increased H2O2 → oxidative mitochondrial damage</li>
<li>This links monoamine metabolism to age-related neurodegeneration</li>
</ul>
<h3>Genetic Variation</h3>
<ul>
<li>MAOA-uVNTR: Variable number tandem repeat in the promoter region</li>
<li>Low-activity variant (MAOA-L or &quot;warrior gene&quot;): associated with increased aggression, impulsivity, and antisocial behavior when combined with childhood adversity</li>
<li>High-activity variant: associated with increased depression and anxiety (faster serotonin degradation)</li>
</ul>
<h2>Clinical Relevance</h2>
<h3>Antidepressant MAOIs</h3>
<ul>
<li><strong>Irreversible, nonselective</strong>: Phenelzine, tranylcypromine — effective but require dietary tyramine restriction</li>
<li><strong>Reversible MAO-A selective (RIMAs)</strong>: Moclobemide — does not require strict dietary restriction</li>
<li><strong>Methylene blue</strong>: Reversible MAO-A inhibitor at therapeutic doses; risk of serotonin syndrome when combined with SSRIs/SNRIs</li>
</ul>
<h3>Serotonin Syndrome Risk</h3>
<p>Combining MAO-A inhibitors with serotonergic drugs (SSRIs, SNRIs, tramadol, dextromethorphan, triptans) can cause serotonin syndrome — a potentially fatal condition. This is clinically relevant for Methylene Blue, which has caused serotonin syndrome when given IV to patients on serotonergic antidepressants.</p>
<h3>Neurodegeneration</h3>
<p>MAO-A-mediated H2O2 production contributes to oxidative damage in Parkinson's and Alzheimer's disease. MAO-B inhibitors (selegiline, rasagiline) are used in Parkinson's treatment partly for this reason.</p>
<h2>Key Research</h2>
<ul>
<li><strong>MAO structure and function</strong>: Crystal structure and catalytic mechanism of human MAO-A and MAO-B, revealing substrate selectivity determinants (PMID:16389188)</li>
<li><strong>MAO inhibitors in depression</strong>: Review of MAOIs from first-generation to modern RIMAs and their clinical efficacy and safety profiles (PMID:26268529)</li>
<li><strong>Methylene blue as MAO-A inhibitor</strong>: Demonstration that methylene blue inhibits MAO-A at clinically relevant concentrations, with implications for serotonin syndrome risk (PMID:17005251)</li>
<li><strong>MAOA gene and behavior</strong>: Meta-analysis of MAOA-uVNTR polymorphism interactions with adversity in predicting antisocial behavior (PMID:24326626)</li>
</ul>
<h2>Relationships</h2>
<h3>Metabolizes</h3>
<p>METABOLIZES::<a href="/garden/dev_admin/neurotransmitter/serotonin/" class="internal-link">Serotonin</a><br />
METABOLIZES::<a href="/garden/dev_admin/neurotransmitter/norepinephrine/" class="internal-link">Norepinephrine</a><br />
METABOLIZES::<a href="/garden/dev_admin/neurotransmitter/dopamine/" class="internal-link">Dopamine</a></p>
<h3>Inhibited By</h3>
<p>INHIBITED_BY::<a href="/garden/dev_admin/drug/methylene-blue/" class="internal-link">Methylene Blue</a></p>
<h3>Affects</h3>
<p>AFFECTS::<a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/dev_admin/pathway/dopamine-synthesis/" class="internal-link">Dopamine Synthesis</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/dev_admin/pathway/serotonin-synthesis/" class="internal-link">Serotonin Synthesis</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/dev_admin/condition/depression/" class="internal-link">Depression</a><br />
RELATED::<a href="/garden/dev_admin/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a><br />
RELATED::<a href="/garden/dev_admin/hormone/epinephrine/" class="internal-link">Epinephrine</a></p>
<h2>References</h2>
<ul>
<li>PMID:16389188 - MAO-A and MAO-B structure and function</li>
<li>PMID:26268529 - MAO inhibitors in treatment of depression</li>
<li>PMID:17005251 - Methylene blue as MAO-A inhibitor</li>
<li>PMID:24326626 - MAOA gene polymorphism and behavior</li>
</ul>

{% endraw %}