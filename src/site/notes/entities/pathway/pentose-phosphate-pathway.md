---
created: '2026-02-13T19:12:35.276958Z'
description: A metabolic pathway parallel to glycolysis that generates NADPH for biosynthesis
  and antioxidant defense, and ribose-5-phosphate for nucleotide synthesis. Essential
  for rapidly dividing cells and cells requiring high antioxidant capacity.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/pentose-phosphate-pathway/
slug: pentose-phosphate-pathway
tags:
- pathway
- metabolic
- carbohydrate
- nadph
- biosynthesis
- antioxidant
templateEngineOverride: njk
title: Pentose Phosphate Pathway
type: pathway
updated: '2026-02-13T19:12:35.276958Z'
---

{% raw %}
<h1>Pentose Phosphate Pathway</h1>
<h2>Overview</h2>
<p>The pentose phosphate pathway (PPP) is a cytoplasmic metabolic pathway that runs parallel to glycolysis, branching off from glucose-6-phosphate. It serves two essential functions:</p>
<ol>
<li><strong>NADPH production</strong>: Reducing equivalents for biosynthesis and antioxidant defense</li>
<li><strong>Ribose-5-phosphate synthesis</strong>: Sugar backbone for nucleotides (DNA/RNA)</li>
</ol>
<p>The pathway consists of two phases:</p>
<ul>
<li><strong>Oxidative phase</strong>: Irreversible, generates NADPH</li>
<li><strong>Non-oxidative phase</strong>: Reversible, interconverts sugars</li>
</ul>
<h2>Oxidative Phase</h2>
<h3>Reaction 1: Glucose-6-phosphate Dehydrogenase (G6PD)</h3>
<p><strong>Glucose-6-phosphate + NADP⁺ → 6-Phosphoglucono-δ-lactone + NADPH</strong></p>
<ul>
<li>Rate-limiting, committed step</li>
<li>First NADPH produced</li>
<li>Inhibited by NADPH (product)</li>
<li>Deficiency causes hemolytic anemia</li>
</ul>
<h3>Reaction 2: Lactonase</h3>
<p><strong>6-Phosphoglucono-δ-lactone + H₂O → 6-Phosphogluconate</strong></p>
<ul>
<li>Spontaneous or enzyme-catalyzed</li>
<li>Prepares for next oxidation</li>
</ul>
<h3>Reaction 3: 6-Phosphogluconate Dehydrogenase</h3>
<p><strong>6-Phosphogluconate + NADP⁺ → Ribulose-5-phosphate + CO₂ + NADPH</strong></p>
<ul>
<li>Second NADPH produced</li>
<li>Oxidative decarboxylation</li>
<li>CO₂ released (one carbon lost)</li>
</ul>
<p><strong>Net oxidative phase (per glucose-6-P):</strong></p>
<ul>
<li>2 NADPH</li>
<li>1 CO₂</li>
<li>1 Ribulose-5-phosphate</li>
</ul>
<h2>Non-Oxidative Phase</h2>
<p>This phase interconverts sugars based on cellular needs:</p>
<h3>Key Enzymes</h3>
<ul>
<li><strong>Ribose-5-phosphate isomerase</strong>: Ribulose-5-P ⇌ Ribose-5-P</li>
<li><strong>Ribulose-5-phosphate epimerase</strong>: Ribulose-5-P ⇌ Xylulose-5-P</li>
<li><strong>Transketolase</strong>: Transfers 2-carbon units (requires TPP)</li>
<li><strong>Transaldolase</strong>: Transfers 3-carbon units</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong>Ribose-5-phosphate</strong>: For nucleotide synthesis</li>
<li><strong>Fructose-6-phosphate</strong>: Returns to glycolysis</li>
<li><strong>Glyceraldehyde-3-phosphate</strong>: Returns to glycolysis</li>
<li><strong>Erythrose-4-phosphate</strong>: For aromatic amino acid synthesis</li>
</ul>
<h2>Pathway Modes</h2>
<p>The PPP can operate in different modes based on cellular needs:</p>
<h3>Mode 1: NADPH and Ribose-5-P needed equally</h3>
<ul>
<li>Oxidative phase runs once</li>
<li>Products used directly</li>
</ul>
<h3>Mode 2: More Ribose-5-P than NADPH needed</h3>
<ul>
<li>Non-oxidative phase runs in reverse</li>
<li>F-6-P + G-3-P → Ribose-5-P</li>
<li>Bypasses oxidative phase</li>
</ul>
<h3>Mode 3: More NADPH than Ribose-5-P needed</h3>
<ul>
<li>Oxidative phase runs repeatedly</li>
<li>Ribose-5-P converted back to F-6-P</li>
<li>Complete oxidation of glucose-6-P to CO₂</li>
</ul>
<h3>Mode 4: Both NADPH and ATP needed</h3>
<ul>
<li>Oxidative phase → NADPH</li>
<li>Non-oxidative phase → glycolysis → ATP</li>
</ul>
<h2>NADPH Functions</h2>
<h3>Biosynthesis</h3>
<ul>
<li>Fatty acid synthesis (8 NADPH per palmitate)</li>
<li>Cholesterol synthesis</li>
<li>Steroid hormone synthesis</li>
<li>Neurotransmitter synthesis</li>
</ul>
<h3>Antioxidant Defense</h3>
<ul>
<li>Glutathione reductase: GSSG + NADPH → 2 GSH</li>
<li>Thioredoxin reductase: Maintains protein thiols</li>
<li>Catalase: H₂O₂ detoxification (indirectly)</li>
</ul>
<h3>Other Functions</h3>
<ul>
<li>Cytochrome P450 reactions (drug metabolism)</li>
<li>Nitric oxide synthesis</li>
<li>Respiratory burst in immune cells</li>
</ul>
<h2>Clinical Significance</h2>
<h3>G6PD Deficiency</h3>
<ul>
<li>Most common enzyme deficiency (~400 million affected)</li>
<li>X-linked recessive</li>
<li>Red blood cells cannot maintain glutathione</li>
<li>Hemolytic anemia triggered by:
<ul>
<li>Fava beans (favism)</li>
<li>Antimalarial drugs</li>
<li>Sulfonamides</li>
<li>Oxidant stress</li>
</ul>
</li>
<li>Provides malaria resistance (heterozygote advantage)</li>
</ul>
<h3>Cancer Metabolism</h3>
<ul>
<li>Upregulated PPP supports proliferation</li>
<li>NADPH for lipid synthesis</li>
<li>Ribose-5-P for DNA replication</li>
<li>Therapeutic target research</li>
</ul>
<h3>Diabetes</h3>
<ul>
<li>Altered flux through PPP</li>
<li>May contribute to complications</li>
<li>Aldose reductase pathway competes for glucose</li>
</ul>
<h2>Supplement Connections</h2>
<table>
<thead>
<tr>
<th>Supplement</th>
<th>Connection</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">Thiamine</a></strong></td>
<td>Cofactor for transketolase</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/supplement/nac/" class="internal-link">NAC</a></strong></td>
<td>Requires NADPH for glutathione synthesis</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/labtest/glutathione/" class="internal-link">Glutathione</a></strong></td>
<td>Requires NADPH for regeneration</td>
</tr>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">Riboflavin</a></strong></td>
<td>Component of FAD for glutathione reductase</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Thiamine</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Riboflavin</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/nac/" class="internal-link">NAC</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/glutathione/" class="internal-link">Glutathione</a> (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.802349'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>BRANCHES_FROM::<a href="/garden/dev_admin/pathway/glycolysis/" class="internal-link">Glycolysis</a> - At glucose-6-phosphate<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">NADPH</a> - Two per glucose-6-P oxidized<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">Ribose-5-phosphate</a> - For nucleotide synthesis<br />
FEEDS_BACK_TO::<a href="/garden/dev_admin/pathway/glycolysis/" class="internal-link">Glycolysis</a> - Via F-6-P and G-3-P<br />
SUPPORTS::<a href="/garden/dev_admin/labtest/glutathione/" class="internal-link">Glutathione</a> - NADPH for regeneration<br />
SUPPORTS::<a class="internal-link is-unresolved" href="/404">Fatty Acid Synthesis</a> - NADPH source<br />
LOCATED_IN::<a class="internal-link is-unresolved" href="/404">Cytosol</a> - Cytoplasmic pathway<br />
REQUIRES_COFACTOR::<a class="internal-link is-unresolved" href="/404">Thiamine</a> - For transketolase<br />
KEY_ENZYME::<a class="internal-link is-unresolved" href="/404">G6PD</a> - Rate-limiting enzyme<br />
RELATED_TO::<a class="internal-link is-unresolved" href="/404">NAD+</a> - Different coenzyme pool (NADP+)<br />
AFFECTED_BY::<a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative Stress</a> - Increases flux</p>
<h2>References</h2>
<ul>
<li>Stanton RC. Glucose-6-phosphate dehydrogenase, NADPH, and cell survival. IUBMB Life. 2012;64(5):362-9. PMID: 22431005</li>
<li>Cappellini MD, Fiorelli G. Glucose-6-phosphate dehydrogenase deficiency. Lancet. 2008;371(9606):64-74. PMID: 18177777</li>
<li>Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 20.</li>
</ul>

{% endraw %}