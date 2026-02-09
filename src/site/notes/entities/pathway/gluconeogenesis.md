---
created: '2026-02-09T05:54:32.730613Z'
description: Gluconeogenesis is the metabolic pathway that synthesizes glucose from
  non-carbohydrate precursors, essential for maintaining blood glucose during fasting
  and providing glucose to glucose-dependent tissues.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/gluconeogenesis/
slug: gluconeogenesis
tags:
- pathway
- metabolic
- glucose_metabolism
- biosynthetic
- fasting
templateEngineOverride: njk
title: Gluconeogenesis
type: pathway
updated: '2026-02-09T05:54:32.730613Z'
---

{% raw %}
<h1>Gluconeogenesis</h1>
<h2>Description</h2>
<p>Gluconeogenesis is the metabolic pathway that synthesizes glucose from non-carbohydrate precursors, essential for maintaining blood glucose during fasting and providing glucose to glucose-dependent tissues.</p>
<h2>Overview</h2>
<p>The pathway is essentially the reverse of glycolysis, but uses four bypass reactions to circumvent the three irreversible steps of glycolysis. This ensures thermodynamic favorability and allows independent regulation. The liver can produce up to 200g glucose per day through this pathway.</p>
<h2>The Four Bypass Reactions</h2>
<h3>1. Pyruvate → Phosphoenolpyruvate (2 enzymes)</h3>
<p><strong>A. Pyruvate Carboxylase (mitochondria)</strong></p>
<ul>
<li>Pyruvate + CO₂ + ATP → Oxaloacetate + ADP + Pi</li>
<li>Requires biotin cofactor</li>
<li>Activated by acetyl-CoA</li>
</ul>
<p><strong>B. PEPCK (mitochondria/cytosol)</strong></p>
<ul>
<li>Oxaloacetate + GTP → PEP + GDP + CO₂</li>
<li>Rate-limiting, transcriptionally regulated</li>
</ul>
<h3>2. Fructose-1,6-bisphosphate → Fructose-6-phosphate</h3>
<p><strong>Fructose-1,6-bisphosphatase (FBPase-1)</strong></p>
<ul>
<li>Inhibited by AMP, F-2,6-BP</li>
</ul>
<h3>3. Glucose-6-phosphate → Glucose</h3>
<p><strong>Glucose-6-phosphatase (G6Pase)</strong></p>
<ul>
<li>Only in liver, kidney (not muscle)</li>
<li>Releases glucose to blood</li>
</ul>
<h2>Energy Cost</h2>
<ul>
<li>2 Pyruvate → 1 Glucose: 4 ATP + 2 GTP + 2 NADH = 6 ATP equivalents (net)</li>
</ul>
<h2>Metabolic Cycles</h2>
<h3>Cori Cycle</h3>
<p>Muscle lactate → Liver → Glucose → Muscle</p>
<h3>Glucose-Alanine Cycle</h3>
<p>Muscle alanine → Liver → Glucose + Urea → Muscle</p>
<h2>Supplement/Drug Connections</h2>
<table>
<thead>
<tr>
<th>Agent</th>
<th>Effect</th>
<th>Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>[[Berberine]]</strong></td>
<td>Inhibits</td>
<td>AMPK activation</td>
</tr>
<tr>
<td><strong>Metformin</strong></td>
<td>Inhibits</td>
<td>Complex I inhibition, AMPK</td>
</tr>
<tr>
<td><strong>[[Biotin]]</strong></td>
<td>Supports</td>
<td>Cofactor for pyruvate carboxylase</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
</code></pre>
<ul>
<li>→ [[Biotin]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.945657'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.945657'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>LOCATED_IN::[[Liver]] - Primary site<br />
LOCATED_IN::[[Kidney]] - Secondary site<br />
PRODUCES::[[Glucose]] - End product<br />
CONSUMES::[[Pyruvate]] - Major precursor<br />
CONSUMES::[[Lactate]] - Via Cori cycle<br />
CONSUMES::[[Oxaloacetate]] - Key intermediate<br />
CONSUMES::[[ATP]] - Energy requirement<br />
CONNECTED_TO::[[Glycolysis]] - Reverse pathway<br />
CONNECTED_TO::[[Citric Acid Cycle]] - Via oxaloacetate<br />
REGULATED_BY::[[Glucagon]] - Stimulates<br />
REGULATED_BY::[[Insulin]] - Inhibits<br />
INHIBITED_BY::[[Berberine]] - AMPK activator<br />
REQUIRES_COFACTOR::[[Biotin]] - For pyruvate carboxylase<br />
RELATED_TO::[[PGC-1alpha]] - Transcriptional coactivator</p>
<h2>References</h2>
<ul>
<li>Pilkis SJ, Granner DK. Molecular physiology of the regulation of hepatic gluconeogenesis and glycolysis. Annu Rev Physiol. 1992;54:885-909.</li>
<li>Rui L. Energy metabolism in the liver. Compr Physiol. 2014;4(1):177-97.</li>
</ul>

{% endraw %}