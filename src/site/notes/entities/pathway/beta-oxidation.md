---
created: '2026-02-09T05:40:21.777177Z'
description: The mitochondrial pathway for fatty acid catabolism that sequentially
  removes two-carbon units as acetyl-CoA. Each cycle generates NADH and FADH2 for
  ATP production, making it highly efficient for energy generation from stored fat.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/beta-oxidation/
slug: beta-oxidation
tags:
- pathway
- metabolic
- energy_metabolism
- fatty_acid
- catabolic
- mitochondrial
templateEngineOverride: njk
title: Beta-Oxidation
type: pathway
updated: '2026-02-09T05:40:21.777177Z'
---

{% raw %}
<h1>Beta-Oxidation</h1>
<h2>Overview</h2>
<p>Beta-oxidation is the mitochondrial pathway that breaks down fatty acids into acetyl-CoA units for energy production. The process occurs in the mitochondrial matrix and involves the sequential removal of two-carbon units from the fatty acid chain, generating NADH and FADH2 with each cycle.</p>
<p>The pathway is named for the oxidation that occurs at the β-carbon (carbon 3) of the fatty acid. Each complete cycle shortens the fatty acid by two carbons and produces:</p>
<ul>
<li>1 Acetyl-CoA</li>
<li>1 FADH2</li>
<li>1 NADH</li>
</ul>
<h2>Fatty Acid Activation and Transport</h2>
<h3>Activation (Cytoplasm)</h3>
<p><strong>Fatty acid + ATP + CoA-SH → Fatty acyl-CoA + AMP + PPi</strong></p>
<ul>
<li>Catalyzed by acyl-CoA synthetase (thiokinase)</li>
<li>Costs 2 ATP equivalents (due to PPi hydrolysis)</li>
<li>Required for transport into mitochondria</li>
</ul>
<h3>Carnitine Shuttle</h3>
<p>Long-chain fatty acids cannot cross the inner mitochondrial membrane and require the carnitine shuttle:</p>
<ol>
<li><strong>CPT-I</strong> (outer membrane): Acyl-CoA + Carnitine → Acylcarnitine + CoA</li>
<li><strong>CACT</strong> (inner membrane): Acylcarnitine transport</li>
<li><strong>CPT-II</strong> (matrix side): Acylcarnitine + CoA → Acyl-CoA + Carnitine</li>
</ol>
<p><strong>CPT-I is the rate-limiting step</strong>, inhibited by malonyl-CoA (fed state signal).</p>
<h2>The Beta-Oxidation Spiral</h2>
<p>Each cycle consists of four reactions:</p>
<h3>1. Oxidation (Acyl-CoA Dehydrogenase)</h3>
<p><strong>Acyl-CoA + FAD → Trans-Δ²-Enoyl-CoA + FADH₂</strong></p>
<ul>
<li>Creates double bond between C2 and C3</li>
<li>Different isozymes for different chain lengths:
<ul>
<li>VLCAD: Very long chain (C14-C20)</li>
<li>LCAD: Long chain (C12-C18)</li>
<li>MCAD: Medium chain (C4-C14)</li>
<li>SCAD: Short chain (C4-C6)</li>
</ul>
</li>
<li>Electrons transferred to ETF → ETC</li>
</ul>
<h3>2. Hydration (Enoyl-CoA Hydratase)</h3>
<p><strong>Trans-Δ²-Enoyl-CoA + H₂O → L-3-Hydroxyacyl-CoA</strong></p>
<ul>
<li>Adds water across double bond</li>
<li>Stereospecific for L-isomer</li>
</ul>
<h3>3. Oxidation (3-Hydroxyacyl-CoA Dehydrogenase)</h3>
<p><strong>L-3-Hydroxyacyl-CoA + NAD⁺ → 3-Ketoacyl-CoA + NADH</strong></p>
<ul>
<li>Oxidizes hydroxyl to ketone</li>
<li>NADH enters ETC at Complex I</li>
</ul>
<h3>4. Thiolysis (3-Ketoacyl-CoA Thiolase)</h3>
<p><strong>3-Ketoacyl-CoA + CoA-SH → Acetyl-CoA + Acyl-CoA(n-2)</strong></p>
<ul>
<li>Cleaves two-carbon unit</li>
<li>Releases acetyl-CoA</li>
<li>Shortened acyl-CoA continues cycle</li>
</ul>
<h2>Energy Yield</h2>
<p>For palmitate (16:0):</p>
<ul>
<li><strong>Activation</strong>: -2 ATP</li>
<li><strong>7 cycles of β-oxidation</strong>: 7 FADH2 + 7 NADH = 7(1.5) + 7(2.5) = 28 ATP</li>
<li><strong>8 Acetyl-CoA → TCA cycle</strong>: 8 × 10 = 80 ATP</li>
<li><strong>Total</strong>: 106 ATP (net)</li>
</ul>
<p>Compared to glucose (32 ATP), fat is &gt;3x more energy-dense per carbon.</p>
<h2>Regulation</h2>
<h3>Fed State (Insulin)</h3>
<ul>
<li>Malonyl-CoA inhibits CPT-I</li>
<li>Beta-oxidation suppressed</li>
<li>Fatty acids directed to storage</li>
</ul>
<h3>Fasted State (Glucagon)</h3>
<ul>
<li>Low malonyl-CoA (ACC inhibited)</li>
<li>CPT-I active</li>
<li>Beta-oxidation proceeds</li>
<li>Liver produces ketone bodies</li>
</ul>
<h3>AMPK Activation</h3>
<ul>
<li>Phosphorylates and inhibits ACC</li>
<li>Lowers malonyl-CoA</li>
<li>Promotes fatty acid oxidation</li>
</ul>
<h2>Supplement Connections</h2>
<table>
<thead>
<tr>
<th>Supplement</th>
<th>Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>[[Carnitine]]</strong></td>
<td>Essential for fatty acid transport</td>
</tr>
<tr>
<td><strong>[[Coenzyme Q10]]</strong></td>
<td>Electron acceptor from ETF</td>
</tr>
<tr>
<td><strong>[[Riboflavin]]</strong></td>
<td>Precursor for FAD (acyl-CoA DH)</td>
</tr>
<tr>
<td><strong>[[Pantothenic Acid]]</strong></td>
<td>Component of CoA</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>MCAD Deficiency</h3>
<ul>
<li>Most common fatty acid oxidation disorder (1:15,000)</li>
<li>Cannot oxidize medium-chain fatty acids</li>
<li>Hypoglycemia during fasting</li>
<li>Newborn screening available</li>
</ul>
<h3>Carnitine Deficiency</h3>
<ul>
<li>Primary (genetic) or secondary (drugs, conditions)</li>
<li>Impaired fatty acid transport</li>
<li>Muscle weakness, cardiomyopathy</li>
<li>Treatment: carnitine supplementation</li>
</ul>
<h3>Diabetic Ketoacidosis</h3>
<ul>
<li>Excessive beta-oxidation in liver</li>
<li>Overwhelming acetyl-CoA production</li>
<li>Ketone body accumulation</li>
<li>Metabolic acidosis</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← [[Coenzyme_Q10]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:49.159387'
source: obsidian
</code></pre>
<ul>
<li>→ [[Pantothenic_Acid]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
</code></pre>
<ul>
<li>→ [[Coenzyme_Q10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.393431'
source: obsidian
</code></pre>
<ul>
<li>→ [[Riboflavin]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
</code></pre>
<ul>
<li>→ [[Pantothenic_Acid]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
</code></pre>
<ul>
<li>→ [[Carnitine]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
</code></pre>
<ul>
<li>← [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<ul>
<li>→ [[Coenzyme_Q10]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.545600'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>LOCATED_IN::[[Mitochondria]] - Matrix location<br />
PRODUCES::[[Acetyl-CoA]] - Two-carbon product<br />
PRODUCES::[[NADH]] - Per cycle<br />
PRODUCES::[[FADH2]] - Per cycle<br />
FEEDS_INTO::[[Citric Acid Cycle]] - Via acetyl-CoA<br />
FEEDS_INTO::[[Electron Transport Chain]] - Via NADH, FADH2<br />
REQUIRES::[[Carnitine]] - Fatty acid transport<br />
REGULATED_BY::[[Insulin]] - Suppresses pathway<br />
REGULATED_BY::[[Glucagon]] - Activates pathway<br />
REGULATED_BY::[[AMPK]] - Activates pathway<br />
INHIBITED_BY::[[Malonyl-CoA]] - CPT-I inhibitor<br />
SUPPORTED_BY::[[Riboflavin]] - FAD precursor<br />
SUPPORTED_BY::[[Pantothenic Acid]] - CoA component<br />
RELATED_TO::[[Ketogenesis]] - Liver fate of acetyl-CoA</p>
<h2>References</h2>
<ul>
<li>Houten SM, Wanders RJ. A general introduction to the biochemistry of mitochondrial fatty acid β-oxidation. J Inherit Metab Dis. 2010;33(5):469-77. PMID: 20195903</li>
<li>Rinaldo P, et al. Fatty acid oxidation disorders. Annu Rev Physiol. 2002;64:477-502. PMID: 11826276</li>
<li>Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 22.</li>
</ul>

{% endraw %}