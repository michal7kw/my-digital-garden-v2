---
created: '2026-02-09T05:40:22.067198Z'
description: AMP-activated protein kinase, the master cellular energy sensor that
  responds to decreased ATP/AMP ratio by activating catabolic pathways (fatty acid
  oxidation, autophagy) and inhibiting anabolic pathways (protein synthesis, lipogenesis).
  A key metabolic regulator and therapeutic target.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/ampk/
slug: ampk
tags:
- protein
- kinase
- energy_sensor
- metabolism
- autophagy
- therapeutic_target
templateEngineOverride: njk
title: AMPK
type: protein
updated: '2026-02-09T05:40:22.067198Z'
---

{% raw %}
<h1>AMPK</h1>
<h2>Overview</h2>
<p>AMPK (AMP-activated protein kinase) is the master regulator of cellular energy homeostasis. Often called the &quot;fuel gauge&quot; of the cell, it senses when energy (ATP) is low and activates compensatory mechanisms to restore energy balance.</p>
<p>AMPK responds to:</p>
<ul>
<li><strong>Falling ATP levels</strong> (increased AMP/ADP)</li>
<li><strong>Metabolic stress</strong> (hypoxia, glucose deprivation)</li>
<li><strong>Exercise</strong> (muscle contraction)</li>
<li><strong>Hormones</strong> (adiponectin, leptin)</li>
<li><strong>Pharmacological agents</strong> (metformin, berberine)</li>
</ul>
<p>When activated, AMPK turns on ATP-generating pathways (glucose uptake, fatty acid oxidation) and turns off ATP-consuming pathways (protein synthesis, lipogenesis).</p>
<h2>Structure and Activation</h2>
<h3>Heterotrimer Structure</h3>
<ul>
<li><strong>α subunit</strong> (α1 or α2): Catalytic kinase domain</li>
<li><strong>β subunit</strong> (β1 or β2): Scaffolding, glycogen binding</li>
<li><strong>γ subunit</strong> (γ1, γ2, or γ3): Regulatory, AMP/ADP/ATP binding</li>
</ul>
<h3>Activation Mechanisms</h3>
<h4>1. Allosteric Activation (AMP binding)</h4>
<ul>
<li>AMP binds γ subunit CBS domains</li>
<li>Causes conformational change</li>
<li>2-10 fold activation</li>
<li>Protects against Thr172 dephosphorylation</li>
</ul>
<h4>2. Phosphorylation at Thr172</h4>
<ul>
<li><strong>LKB1</strong> (constitutively active tumor suppressor)</li>
<li><strong>CaMKKβ</strong> (Ca²⁺-dependent, exercise)</li>
<li>Essential for full activation (~100-fold)</li>
</ul>
<h4>3. Allosteric Protection</h4>
<ul>
<li>AMP/ADP binding inhibits phosphatase access</li>
<li>Prolongs activated state</li>
</ul>
<h2>Major Downstream Targets</h2>
<h3>Stimulated Pathways (Catabolic)</h3>
<table>
<thead>
<tr>
<th>Target</th>
<th>Effect</th>
<th>Outcome</th>
</tr>
</thead>
<tbody>
<tr>
<td>ACC1/2</td>
<td>Inhibition (phosphorylation)</td>
<td>↑ Fatty acid oxidation, ↓ lipogenesis</td>
</tr>
<tr>
<td>GLUT4</td>
<td>Translocation</td>
<td>↑ Glucose uptake</td>
</tr>
<tr>
<td>PGC-1α</td>
<td>Activation</td>
<td>↑ Mitochondrial biogenesis</td>
</tr>
<tr>
<td>ULK1</td>
<td>Activation</td>
<td>↑ Autophagy</td>
</tr>
<tr>
<td>FOXO3</td>
<td>Activation</td>
<td>↑ Stress resistance</td>
</tr>
<tr>
<td>p53</td>
<td>Activation</td>
<td>Cell cycle arrest if severe stress</td>
</tr>
</tbody>
</table>
<h3>Inhibited Pathways (Anabolic)</h3>
<table>
<thead>
<tr>
<th>Target</th>
<th>Effect</th>
<th>Outcome</th>
</tr>
</thead>
<tbody>
<tr>
<td>mTORC1</td>
<td>Inhibition (via TSC2, Raptor)</td>
<td>↓ Protein synthesis</td>
</tr>
<tr>
<td>SREBP-1c</td>
<td>Inhibition</td>
<td>↓ Lipogenesis</td>
</tr>
<tr>
<td>HMGCR</td>
<td>Inhibition</td>
<td>↓ Cholesterol synthesis</td>
</tr>
<tr>
<td>GS</td>
<td>Inhibition</td>
<td>↓ Glycogen synthesis</td>
</tr>
<tr>
<td>CRTC2</td>
<td>Inhibition</td>
<td>↓ Gluconeogenesis (short-term)</td>
</tr>
</tbody>
</table>
<h2>Physiological Roles</h2>
<h3>Exercise</h3>
<ul>
<li>Muscle contraction activates AMPK via AMP rise and Ca²⁺</li>
<li>Increases glucose uptake independent of insulin</li>
<li>Promotes mitochondrial biogenesis (via PGC-1α)</li>
<li>Underlies many exercise benefits</li>
</ul>
<h3>Fasting/Caloric Restriction</h3>
<ul>
<li>Low glucose activates AMPK</li>
<li>Shifts metabolism to fat oxidation</li>
<li>Activates autophagy</li>
<li>Mediates some CR longevity benefits</li>
</ul>
<h3>Metabolic Regulation</h3>
<ul>
<li>Suppresses hepatic gluconeogenesis (acutely)</li>
<li>Inhibits de novo lipogenesis</li>
<li>Enhances insulin sensitivity</li>
<li>Reduces inflammation</li>
</ul>
<h3>Longevity</h3>
<ul>
<li>AMPK activation extends lifespan in model organisms</li>
<li>Linked to caloric restriction benefits</li>
<li>Target of longevity drugs (metformin)</li>
</ul>
<h2>Pharmacological Activators</h2>
<table>
<thead>
<tr>
<th>Agent</th>
<th>Mechanism</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Metformin</strong></td>
<td>Complex I inhibition → ↑AMP</td>
<td>First-line diabetes drug</td>
</tr>
<tr>
<td><strong>[[Berberine]]</strong></td>
<td>Similar to metformin</td>
<td>Natural compound</td>
</tr>
<tr>
<td><strong>AICAR</strong></td>
<td>AMP analog</td>
<td>Research tool</td>
</tr>
<tr>
<td><strong>A-769662</strong></td>
<td>Direct β subunit binding</td>
<td>Research compound</td>
</tr>
<tr>
<td><strong>Salicylate</strong></td>
<td>Direct β1 binding</td>
<td>High doses</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>Type 2 Diabetes</h3>
<ul>
<li>AMPK activators improve glucose control</li>
<li>Metformin mechanism involves AMPK</li>
<li>Increases insulin sensitivity</li>
<li>Reduces hepatic glucose output</li>
</ul>
<h3>Cancer</h3>
<ul>
<li>AMPK is a tumor suppressor (via LKB1)</li>
<li>mTORC1 inhibition slows proliferation</li>
<li>Metformin reduces cancer incidence</li>
<li>Complex role in established tumors</li>
</ul>
<h3>Cardiovascular Disease</h3>
<ul>
<li>Cardiac AMPK protects during ischemia</li>
<li>Improves endothelial function</li>
<li>Reduces atherosclerosis</li>
</ul>
<h3>Neurodegeneration</h3>
<ul>
<li>AMPK activation can be protective or harmful</li>
<li>Context-dependent effects</li>
<li>Active area of research</li>
</ul>
<h2>Supplement Connections</h2>
<table>
<thead>
<tr>
<th>Supplement</th>
<th>Effect on AMPK</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>[[Berberine]]</strong></td>
<td>Potent activator (similar to metformin)</td>
</tr>
<tr>
<td><strong>[[Alpha Lipoic Acid]]</strong></td>
<td>May activate AMPK</td>
</tr>
<tr>
<td><strong>[[Resveratrol]]</strong></td>
<td>Indirect via SIRT1, also direct effects</td>
</tr>
<tr>
<td><strong>[[Quercetin]]</strong></td>
<td>May activate AMPK</td>
</tr>
<tr>
<td><strong>[[EGCG]]</strong></td>
<td>Activates AMPK</td>
</tr>
<tr>
<td><strong>[[Curcumin]]</strong></td>
<td>May activate AMPK</td>
</tr>
</tbody>
</table>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← [[Resveratrol]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:53.933138'
source: obsidian
</code></pre>
<ul>
<li>← [[Quercetin]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:53.794401'
source: obsidian
</code></pre>
<ul>
<li>← [[Curcumin]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:49.757693'
source: obsidian
</code></pre>
<ul>
<li>← [[Alpha_Lipoic_Acid]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:42:47.821091'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:58.583262'
source: obsidian
</code></pre>
<ul>
<li>→ [[Alpha_Lipoic_Acid]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:58.583262'
source: obsidian
</code></pre>
<ul>
<li>→ [[Autophagy-Lysosomal_Pathway]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:58.583262'
source: obsidian
</code></pre>
<ul>
<li>→ [[ATP]] (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:58.583262'
source: obsidian
</code></pre>
<ul>
<li>← [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:56.150744'
source: obsidian
</code></pre>
<ul>
<li>→ [[EGCG]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<ul>
<li>← [[Autophagy-Lysosomal_Pathway]] (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.341134'
source: obsidian
</code></pre>
<ul>
<li>← [[ATP]] (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:05.909377'
source: obsidian
</code></pre>
<ul>
<li>← [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<ul>
<li>→ [[Resveratrol]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<ul>
<li>→ [[Quercetin]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<ul>
<li>→ [[Alpha_Lipoic_Acid]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<ul>
<li>→ [[Berberine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<ul>
<li>→ [[Curcumin]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:28.642108'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>ACTIVATED_BY::[[AMP]] - Primary energy signal<br />
ACTIVATED_BY::[[ADP]] - Secondary energy signal<br />
ACTIVATED_BY::[[Exercise]] - Via AMP rise and Ca²⁺<br />
ACTIVATED_BY::[[Berberine]] - Pharmacological activator<br />
ACTIVATED_BY::[[Metformin]] - Via Complex I inhibition<br />
ACTIVATED_BY::[[Caloric Restriction]] - Fasting state<br />
PHOSPHORYLATES::[[PGC-1alpha]] - Mitochondrial biogenesis<br />
PHOSPHORYLATES::[[ACC]] - Inhibits lipogenesis<br />
INHIBITS::[[mTORC1]] - Protein synthesis suppression<br />
INHIBITS::[[Gluconeogenesis]] - Acute suppression<br />
PROMOTES::[[Autophagy]] - Via ULK1<br />
PROMOTES::[[Fatty Acid Oxidation]] - Via ACC inhibition<br />
REGULATED_BY::[[LKB1]] - Upstream kinase<br />
RELATED_TO::[[NAD+]] - Linked to energy status<br />
RELATED_TO::[[ATP]] - Senses ATP levels<br />
RELATED_TO::[[Mitochondria]] - Energy metabolism hub</p>
<h2>References</h2>
<ul>
<li>Hardie DG. AMPK: a key regulator of energy balance in the single cell and the whole organism. Int J Obes. 2008;32 Suppl 4:S7-12. PMID: 18719601</li>
<li>Steinberg GR, Kemp BE. AMPK in Health and Disease. Physiol Rev. 2009;89(3):1025-78. PMID: 19584320</li>
<li>Garcia D, Shaw RJ. AMPK: Mechanisms of Cellular Energy Sensing and Restoration of Metabolic Balance. Mol Cell. 2017;66(6):789-800. PMID: 28622524</li>
</ul>

{% endraw %}