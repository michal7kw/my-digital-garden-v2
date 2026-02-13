---
created: '2026-02-13T19:12:33.834842Z'
description: Nicotine is a naturally occurring alkaloid found in tobacco plants that
  acts as a nicotinic acetylcholine receptor agonist. It influences mitochondrial
  function both in vitro and in vivo, affecting the respiratory chain, oxidative stress,
  calcium homeostasis, mitochondrial dynamics, biogenesis, and mitophagy.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/drug/nicotine/
slug: nicotine
tags:
- drug
- alkaloid
- nicotinic_receptor_agonist
- mitochondria
- oxidative_stress
templateEngineOverride: njk
title: Nicotine
type: drug
updated: '2026-02-13T19:12:33.834842Z'
---

{% raw %}
<h1>Nicotine</h1>
<h2>Overview</h2>
<p>Nicotine is a potent parasympathomimetic alkaloid derived from the nightshade family of plants. It is the primary psychoactive compound in tobacco products and acts primarily on nicotinic acetylcholine receptors (nAChRs).</p>
<h2>Mitochondrial Effects</h2>
<p>According to the review by Malinska et al. (2019, PMID:31197632), nicotine influences mitochondrial function through:</p>
<ul>
<li><strong>Respiratory Chain</strong>: Effects on electron transport chain complexes</li>
<li><strong>Oxidative Stress</strong>: Modulation of reactive oxygen species production</li>
<li><strong>Calcium Homeostasis</strong>: Regulation of mitochondrial calcium handling</li>
<li><strong>Mitochondrial Dynamics</strong>: Effects on fission and fusion processes</li>
<li><strong>Biogenesis</strong>: Influence on mitochondrial DNA and protein synthesis</li>
<li><strong>Mitophagy</strong>: Selective autophagy of damaged mitochondria</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Modulates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:42.749430'
source: obsidian
</code></pre>
<h3>Affects</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:42.749430'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/mitophagy/" class="internal-link">Mitophagy</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:42.749430'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:42.749430'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.766680'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<h3>Modulated By</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:37:22.629336'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/mitophagy/" class="internal-link">Mitophagy</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.248727'
source: obsidian
</code></pre>
<h3>Affected By</h3>
<ul>
<li>← <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.837447'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<ul>
<li>affects:: <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></li>
<li>affects:: <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a></li>
<li>modulates:: <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a></li>
<li>affects:: <a href="/garden/dev_admin/pathway/mitophagy/" class="internal-link">Mitophagy</a></li>
<li>binds_to:: Nicotinic Acetylcholine Receptors</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:31197632 - Malinska D, et al. (2019) &quot;Mitochondria as a possible target for nicotine action.&quot; J Bioenerg Biomembr. 51(4).</li>
</ul>

{% endraw %}