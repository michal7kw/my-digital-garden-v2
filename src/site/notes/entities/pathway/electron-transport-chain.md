---
created: '2026-02-09T05:54:32.723328Z'
description: The electron transport chain (ETC) is a series of protein complexes embedded
  in the inner mitochondrial membrane that transfers electrons from NADH and FADH2
  to oxygen, generating the proton gradient used for ATP synthesis. It is the final
  stage of cellular respiration and produces the majority of cellular ATP.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/electron-transport-chain/
slug: electron-transport-chain
tags:
- pathway
- mitochondria
- energy_production
- atp_synthesis
- respiration
templateEngineOverride: njk
title: Electron Transport Chain
type: pathway
updated: '2026-02-09T05:54:32.723328Z'
---

{% raw %}
<h1>Electron Transport Chain</h1>
<h2>Overview</h2>
<p>The electron transport chain (ETC) is the metabolic pathway in the inner mitochondrial membrane responsible for oxidative phosphorylation. It consists of four major protein complexes (I-IV) plus ATP synthase (Complex V).</p>
<h2>Components</h2>
<ul>
<li><strong>Complex I (NADH dehydrogenase)</strong>: Entry point for NADH electrons</li>
<li><strong>Complex II (Succinate dehydrogenase)</strong>: Entry point for FADH2 electrons</li>
<li><strong>Complex III (Cytochrome bc1)</strong>: Electron transfer to cytochrome c</li>
<li><strong>Complex IV (Cytochrome c oxidase)</strong>: Final electron transfer to oxygen</li>
<li><strong>ATP Synthase (Complex V)</strong>: Uses proton gradient for ATP production</li>
</ul>
<h2>Function</h2>
<ol>
<li>Electrons flow through the chain from NADH/FADH2 to oxygen</li>
<li>Protons are pumped across the inner membrane</li>
<li>Proton gradient drives ATP synthesis</li>
<li>Produces ~90% of cellular ATP</li>
</ol>
<h2>Nicotine Effects</h2>
<p>According to PMID:31197632, nicotine affects the respiratory chain as part of its broad effects on mitochondrial function, potentially impacting energy production and ROS generation.</p>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[CoQ10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.766680'
source: obsidian
</code></pre>
<ul>
<li>→ [[Coenzyme_Q10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.766680'
source: obsidian
</code></pre>
<ul>
<li>← [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:19.549791'
source: obsidian
</code></pre>
<ul>
<li>→ [[Nicotine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.766680'
source: obsidian
</code></pre>
<ul>
<li>→ [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:40.766680'
source: obsidian
</code></pre>
<h3>Component</h3>
<ul>
<li>→ [[Coenzyme_Q10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.837447'
source: obsidian
</code></pre>
<h3>Supported By</h3>
<ul>
<li>→ [[CoQ10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.837447'
source: obsidian
</code></pre>
<h3>Affected By</h3>
<ul>
<li>→ [[Nicotine]] (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.837447'
source: obsidian
</code></pre>
<h3>Located In</h3>
<ul>
<li>→ [[Mitochondria]] (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.837447'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<ul>
<li>located_in:: [[Mitochondria]]</li>
<li>produces:: ATP</li>
<li>generates:: Reactive Oxygen Species</li>
<li>affected_by:: [[Nicotine]]</li>
<li>supported_by:: [[CoQ10]]</li>
<li>component:: [[Coenzyme_Q10]]</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:31197632 - Malinska D, et al. (2019) &quot;Mitochondria as a possible target for nicotine action.&quot; J Bioenerg Biomembr.</li>
</ul>

{% endraw %}