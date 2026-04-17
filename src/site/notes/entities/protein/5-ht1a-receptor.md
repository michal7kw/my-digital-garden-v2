---
created: '2026-04-17T18:59:20.801319Z'
description: Serotonin 1A receptor, a Gi/Go-coupled GPCR that serves as both presynaptic
  autoreceptor on raphe neurons (inhibiting serotonin release) and postsynaptic heteroreceptor
  in cortex and hippocampus. Autoreceptor desensitization after chronic SSRI exposure
  explains the 2-4 week delay in therapeutic onset. Target of buspirone (partial agonist)
  and vilazodone/vortioxetine.
dg-home: false
dg-publish: true
permalink: /entities/protein/5-ht1a-receptor/
slug: 5-ht1a-receptor
tags:
- protein
- receptor
- serotonin
- gpcr
- autoreceptor
- anxiolytic
- neuroscience
templateEngineOverride: njk
title: 5-HT1A Receptor
type: protein
updated: '2026-04-17T18:59:20.801319Z'
---

{% raw %}
<h1>5-HT1A Receptor</h1>
<h2>Overview</h2>
<p>The 5-HT1A receptor (UniProt: P08908) is a G-protein coupled receptor (GPCR) that couples to inhibitory Gi/Go proteins. It is encoded by the HTR1A gene on chromosome 5q12.3. This receptor plays a dual role in serotonergic neurotransmission depending on its location:</p>
<ul>
<li><strong>Presynaptic autoreceptor</strong> (somatodendritic, on raphe neurons): Detects synaptic serotonin levels and inhibits further serotonin release via negative feedback. When serotonin binds, it activates Gi signaling → opens GIRK K+ channels → hyperpolarizes the neuron → reduces firing rate and serotonin release.</li>
<li><strong>Postsynaptic heteroreceptor</strong> (cortex, hippocampus, amygdala): Mediates serotonin's effects on mood, anxiety, cognition, and neuroplasticity.</li>
</ul>
<h2>Role in SSRI Pharmacology</h2>
<p>The 5-HT1A autoreceptor is the key to understanding why SSRIs take 2-4 weeks to achieve full therapeutic effect:</p>
<ol>
<li><strong>Acute SSRI administration</strong> (Day 1-3): SERT blockade increases synaptic serotonin in raphe nuclei</li>
<li><strong>Autoreceptor activation</strong> (Week 1): Elevated serotonin activates 5-HT1A autoreceptors → reduces raphe firing → partially counteracts SERT blockade</li>
<li><strong>Autoreceptor desensitization</strong> (Week 2-4): Sustained serotonin elevation downregulates/desensitizes autoreceptors → raphe neurons resume normal firing rate despite elevated serotonin → full therapeutic effect achieved</li>
<li><strong>Postsynaptic effects</strong> (Week 4+): Enhanced postsynaptic 5-HT1A signaling contributes to anxiolysis and neuroplasticity (BDNF induction, hippocampal neurogenesis)</li>
</ol>
<h2>Pharmacological Targeting</h2>
<table>
<thead>
<tr>
<th>Agent</th>
<th>Action at 5-HT1A</th>
<th>Clinical Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>Buspirone</td>
<td>Partial agonist</td>
<td>Anxiolytic (GAD)</td>
</tr>
<tr>
<td>Vilazodone</td>
<td>Partial agonist + SSRI</td>
<td>Depression</td>
</tr>
<tr>
<td>Vortioxetine</td>
<td>Agonist + multimodal SSRI</td>
<td>Depression</td>
</tr>
<tr>
<td>Tandospirone</td>
<td>Partial agonist</td>
<td>Anxiolytic (Japan)</td>
</tr>
<tr>
<td>Pindolol</td>
<td>Antagonist/partial agonist</td>
<td>SSRI augmentation (experimental)</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<h3>Ligand</h3>
<p>BINDS_TO::<a href="/entities/neurotransmitter/serotonin/" class="internal-link">Serotonin</a></p>
<h3>Encoded By</h3>
<p>ENCODED_BY::<a href="/entities/gene/htr1a/" class="internal-link">HTR1A</a></p>
<h3>Located In</h3>
<p>LOCATED_IN::<a href="/entities/organ/dorsal-raphe-nucleus/" class="internal-link">Dorsal Raphe Nucleus</a><br />
LOCATED_IN::<a href="/entities/anatomy/hippocampus/" class="internal-link">Hippocampus</a><br />
LOCATED_IN::<a href="/entities/anatomy/prefrontal-cortex/" class="internal-link">Prefrontal Cortex</a><br />
LOCATED_IN::<a href="/entities/anatomy/amygdala/" class="internal-link">Amygdala</a></p>
<h3>Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/raphe-serotonin-pathway/" class="internal-link">Raphe Serotonin Pathway</a></p>
<h3>Targeted By</h3>
<p>ACTIVATED_BY::<a href="/entities/drug/vilazodone/" class="internal-link">Vilazodone</a><br />
ACTIVATED_BY::<a href="/entities/drug/vortioxetine/" class="internal-link">Vortioxetine</a></p>
<h3>Associated Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/depression/" class="internal-link">Depression</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/anxiety/" class="internal-link">Anxiety</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/ocd/" class="internal-link">OCD</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/entities/protein/sert/" class="internal-link">SERT</a><br />
RELATED::<a href="/entities/biomarker/bdnf/" class="internal-link">BDNF</a><br />
RELATED::<a href="/entities/biologicalprocess/neurogenesis/" class="internal-link">Neurogenesis</a></p>
<h2>References</h2>
<ul>
<li>PMID:8876023 — 5-HT1A receptor function in depression and antidepressant treatment</li>
<li>PMID:15337581 — 5-HT1A receptor pharmacogenomics and antidepressant response</li>
<li>PMID:20826172 — Role of 5-HT1A autoreceptor desensitization in SSRI mechanism</li>
</ul>

{% endraw %}