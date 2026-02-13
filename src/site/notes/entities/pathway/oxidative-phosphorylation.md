---
created: '2026-02-13T14:58:21.083829Z'
description: The mitochondrial process that couples electron transport from NADH and
  FADH2 to oxygen with ATP synthesis. Produces the vast majority (~90%) of cellular
  ATP through chemiosmotic coupling across the inner mitochondrial membrane.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/oxidative-phosphorylation/
slug: oxidative-phosphorylation
tags:
- pathway
- metabolic
- energy_metabolism
- mitochondrial
- atp_synthesis
- respiration
templateEngineOverride: njk
title: Oxidative Phosphorylation
type: pathway
updated: '2026-02-13T14:58:21.083829Z'
---

{% raw %}
<h1>Oxidative Phosphorylation</h1>
<h2>Overview</h2>
<p>Oxidative phosphorylation (OXPHOS) is the metabolic pathway that produces ATP by coupling electron transport with phosphorylation. It occurs in the inner mitochondrial membrane and is responsible for approximately 90% of cellular ATP production.</p>
<p>The process involves two coupled systems:</p>
<ol>
<li><strong>Electron Transport Chain (ETC)</strong>: Transfers electrons from NADH/FADH2 to O2</li>
<li><strong>ATP Synthase</strong>: Uses the proton gradient to synthesize ATP</li>
</ol>
<p>This coupling, explained by Peter Mitchell's chemiosmotic theory, represents one of the most important discoveries in biochemistry.</p>
<h2>The Electron Transport Chain</h2>
<h3>Complex I (NADH:Ubiquinone Oxidoreductase)</h3>
<ul>
<li><strong>Reaction</strong>: NADH + H⁺ + Q → NAD⁺ + QH₂</li>
<li><strong>Protons pumped</strong>: 4 H⁺/2e⁻</li>
<li><strong>Components</strong>: FMN, 8 iron-sulfur clusters</li>
<li><strong>Size</strong>: ~45 subunits, largest respiratory complex</li>
<li><strong>Inhibitors</strong>: Rotenone, metformin (mild)</li>
</ul>
<h3>Complex II (Succinate Dehydrogenase)</h3>
<ul>
<li><strong>Reaction</strong>: Succinate + Q → Fumarate + QH₂</li>
<li><strong>Protons pumped</strong>: 0 (no proton pumping)</li>
<li><strong>Components</strong>: FAD, 3 iron-sulfur clusters</li>
<li><strong>Also</strong>: TCA cycle enzyme</li>
<li><strong>Note</strong>: Electrons enter at lower energy, fewer ATP</li>
</ul>
<h3>Complex III (Cytochrome bc1 Complex)</h3>
<ul>
<li><strong>Reaction</strong>: QH₂ + 2 Cyt c(ox) → Q + 2 Cyt c(red) + 2H⁺</li>
<li><strong>Protons pumped</strong>: 4 H⁺/2e⁻</li>
<li><strong>Mechanism</strong>: Q-cycle</li>
<li><strong>Components</strong>: Cytochrome b, cytochrome c1, Rieske iron-sulfur</li>
<li><strong>Inhibitors</strong>: Antimycin A, myxothiazol</li>
</ul>
<h3>Complex IV (Cytochrome c Oxidase)</h3>
<ul>
<li><strong>Reaction</strong>: 4 Cyt c(red) + O₂ + 8H⁺ → 4 Cyt c(ox) + 2H₂O + 4H⁺(pumped)</li>
<li><strong>Protons pumped</strong>: 2 H⁺/2e⁻</li>
<li><strong>Components</strong>: Heme a, heme a3, CuA, CuB</li>
<li><strong>Function</strong>: Terminal oxidase, reduces O₂ to H₂O</li>
<li><strong>Inhibitors</strong>: Cyanide, carbon monoxide, azide</li>
</ul>
<h3>Complex V (ATP Synthase)</h3>
<ul>
<li><strong>Reaction</strong>: ADP + Pi + nH⁺(out) → ATP + nH⁺(in)</li>
<li><strong>Mechanism</strong>: Rotary motor driven by proton flow</li>
<li><strong>Structure</strong>: F₀ (membrane rotor) + F₁ (catalytic head)</li>
<li><strong>H⁺/ATP</strong>: ~3-4 protons per ATP</li>
<li><strong>Inhibitors</strong>: Oligomycin</li>
</ul>
<h2>Proton Motive Force</h2>
<p>The proton gradient (Δp) has two components:</p>
<ul>
<li><strong>ΔpH</strong>: Concentration gradient (~0.5 pH units)</li>
<li><strong>Δψ</strong>: Electrical potential (~140 mV)</li>
</ul>
<p><strong>Δp = Δψ - 59·ΔpH ≈ 200 mV (equivalent)</strong></p>
<p>This force drives:</p>
<ol>
<li>ATP synthesis (Complex V)</li>
<li>Metabolite transport</li>
<li>Heat generation (uncoupling)</li>
</ol>
<h2>ATP Yield</h2>
<p>Modern estimates of ATP per substrate:</p>
<table>
<thead>
<tr>
<th>Electron Source</th>
<th>H⁺ Pumped</th>
<th>ATP Yield</th>
</tr>
</thead>
<tbody>
<tr>
<td>NADH</td>
<td>10</td>
<td>~2.5 ATP</td>
</tr>
<tr>
<td>FADH2</td>
<td>6</td>
<td>~1.5 ATP</td>
</tr>
</tbody>
</table>
<p>Complete glucose oxidation: ~30-32 ATP (revised from classic 36-38)</p>
<h2>Respiratory Control</h2>
<p>ATP synthesis rate is controlled by ADP availability:</p>
<ul>
<li><strong>State 3</strong>: ADP present, maximal respiration</li>
<li><strong>State 4</strong>: ADP depleted, respiration slows</li>
<li><strong>Coupling ratio</strong>: State 3/State 4 (typically 4-10)</li>
</ul>
<p>This ensures ATP production matches demand.</p>
<h2>Reactive Oxygen Species</h2>
<p>OXPHOS is the primary source of cellular ROS:</p>
<ul>
<li><strong>Sites</strong>: Complex I (NADH-binding site), Complex III (Q-cycle)</li>
<li><strong>Products</strong>: Superoxide (O₂⁻), hydrogen peroxide (H₂O₂)</li>
<li><strong>Amount</strong>: 0.1-2% of oxygen consumed</li>
<li><strong>Significance</strong>: Oxidative stress, signaling, aging</li>
</ul>
<h2>Supplement Connections</h2>
<table>
<thead>
<tr>
<th>Supplement</th>
<th>Target/Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">CoQ10</a></strong></td>
<td>Electron carrier between CI/CII and CIII</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/supplement/pqq/" class="internal-link">PQQ</a></strong></td>
<td>Supports mitochondrial biogenesis</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a></strong> / <strong><a href="/garden/dev_admin/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide Riboside</a></strong></td>
<td>NAD+ precursor for Complex I</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a></strong></td>
<td>Antioxidant, supports NAD+ metabolism</td>
</tr>
<tr>
<td><strong><a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a></strong></td>
<td>Buffers ATP via phosphocreatine</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>Mitochondrial Diseases</h3>
<ul>
<li>Complex I deficiency (most common)</li>
<li>LHON (Leber hereditary optic neuropathy)</li>
<li>MELAS, MERRF (mtDNA mutations)</li>
<li>Leigh syndrome</li>
</ul>
<h3>Aging</h3>
<ul>
<li>Decline in OXPHOS capacity with age</li>
<li>Increased ROS production</li>
<li>mtDNA damage accumulation</li>
<li>Target of longevity interventions</li>
</ul>
<h3>Pharmacology</h3>
<ul>
<li>Metformin: mild Complex I inhibitor</li>
<li>Statins: may affect CoQ10 synthesis</li>
<li>Anesthetics: affect OXPHOS</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/alpha-lipoic-acid/" class="internal-link">Alpha_Lipoic_Acid</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:41.845781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:41.845781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/alpha-synuclein-aggregation/" class="internal-link">Alpha-Synuclein_Aggregation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:41.845781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide_Riboside</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:41.845781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/metabolite/atp/" class="internal-link">ATP</a> (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:41.845781'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">CoQ10</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/alpha-synuclein-aggregation/" class="internal-link">Alpha-Synuclein_Aggregation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:10.957081'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/metabolite/atp/" class="internal-link">ATP</a> (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:05.909377'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/nicotinamide-riboside/" class="internal-link">Nicotinamide_Riboside</a> (metabolite)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/pqq/" class="internal-link">PQQ</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/alpha-lipoic-acid/" class="internal-link">Alpha_Lipoic_Acid</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.714420'
source: obsidian
</code></pre>
<h3>Related To</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:36.518401'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>LOCATED_IN::<a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Inner membrane<br />
CONSUMES::<a class="internal-link is-unresolved" href="/404">NADH</a> - Primary electron donor<br />
CONSUMES::<a class="internal-link is-unresolved" href="/404">FADH2</a> - Secondary electron donor<br />
CONSUMES::<a class="internal-link is-unresolved" href="/404">Oxygen</a> - Terminal electron acceptor<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">ATP</a> - Primary product<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">Water</a> - Reduction product<br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">NAD+</a> - Regenerated for metabolism<br />
UTILIZES::<a class="internal-link is-unresolved" href="/404">CoQ10</a> - Mobile electron carrier<br />
INCLUDES::<a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a> - Electron flow<br />
INCLUDES::<a href="/garden/dev_admin/protein/atp-synthase/" class="internal-link">ATP Synthase</a> - ATP synthesis<br />
REGULATED_BY::<a class="internal-link is-unresolved" href="/404">ADP</a> - Respiratory control<br />
SUPPORTED_BY::<a href="/garden/dev_admin/supplement/nmn/" class="internal-link">NMN</a> - NAD+ precursor<br />
SUPPORTED_BY::<a class="internal-link is-unresolved" href="/404">CoQ10</a> - Electron carrier<br />
CONNECTED_TO::<a href="/garden/dev_admin/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> - NADH source<br />
CONNECTED_TO::<a href="/garden/dev_admin/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> - NADH/FADH2 source</p>
<h2>References</h2>
<ul>
<li>Mitchell P. Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism. Nature. 1961;191:144-8. PMID: 13771349</li>
<li>Hinkle PC. P/O ratios of mitochondrial oxidative phosphorylation. Biochim Biophys Acta. 2005;1706(1-2):1-11. PMID: 15620362</li>
<li>Murphy MP. How mitochondria produce reactive oxygen species. Biochem J. 2009;417(1):1-13. PMID: 19061483</li>
</ul>

{% endraw %}