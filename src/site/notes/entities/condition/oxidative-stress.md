---
created: '2026-02-13T19:27:04.462932Z'
description: Oxidative stress is an imbalance between the production of reactive oxygen
  species (ROS) and the biological system's ability to detoxify or repair the resulting
  damage. It is implicated in many pathological conditions including neurodegeneration,
  cardiovascular diseases, and metabolic disorders.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/oxidative-stress/
slug: oxidative-stress
tags:
- condition
- cellular_stress
- reactive_oxygen_species
- mitochondria
- aging
templateEngineOverride: njk
title: Oxidative Stress
type: condition
updated: '2026-02-13T19:27:04.462932Z'
---

{% raw %}
<h1>Oxidative Stress</h1>
<h2>Overview</h2>
<p>Oxidative stress is an imbalance between the production of reactive oxygen species (ROS) and the biological system's ability to detoxify or repair the resulting damage. It is implicated in many pathological conditions including neurodegeneration, cardiovascular diseases, and metabolic disorders.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<p>Not specified.</p>
<h2>Diagnostic Information</h2>
<h2>Risk Factors</h2>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Oxidative Stress]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Involves</h3>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.414383'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.414383'
source: obsidian
</code></pre>
<h3>Modulated By</h3>
<ul>
<li>→ <a href="/garden/dev_admin/drug/nicotine/" class="internal-link">Nicotine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.414383'
source: obsidian
</code></pre>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/nrf2-pathway/" class="internal-link">Nrf2_Pathway</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.414383'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.681292'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.681292'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.681292'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/drug/nicotine/" class="internal-link">Nicotine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.681292'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/nrf2-pathway/" class="internal-link">Nrf2_Pathway</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.681292'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Oxidative Stress]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Oxidative Stress]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:48.905499'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/nrf2-pathway/" class="internal-link">Nrf2_Pathway</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/neuroinflammation/" class="internal-link">Neuroinflammation</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:12.428247'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/drug/nicotine/" class="internal-link">Nicotine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/oxidative-stress/" class="internal-link">Oxidative_Stress</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.918464'
source: obsidian
</code></pre>
<h3>Modulated By</h3>
<ul>
<li>→ <a href="/garden/dev_admin/drug/nicotine/" class="internal-link">Nicotine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:37:22.629336'
source: obsidian
</code></pre>
<h3>Involves</h3>
<ul>
<li>→ <a href="/garden/dev_admin/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> (cellularcomponent)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:37:22.629336'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}