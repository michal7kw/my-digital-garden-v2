---
created: '2026-02-13T17:51:32.279333Z'
description: Dietary pattern that cycles between periods of eating and voluntary fasting
  on a regular schedule. Improves metabolic health, promotes autophagy, enhances insulin
  sensitivity, and supports weight management. Multiple protocols ranging from 12-hour
  to multi-day fasts.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/intervention/intermittent-fasting/
slug: intermittent-fasting
tags:
- intervention
- diet
- metabolic
- longevity
- autophagy
- weight_loss
templateEngineOverride: njk
title: Intermittent Fasting
type: intervention
updated: '2026-02-13T17:51:32.279333Z'
---

{% raw %}
<h1>Intermittent Fasting</h1>
<h2>Overview</h2>
<p>Dietary pattern that cycles between periods of eating and voluntary fasting on a regular schedule. Improves metabolic health, promotes autophagy, enhances insulin sensitivity, and supports weight management. Multiple protocols ranging from 12-hour to multi-day fasts.</p>
<h2>Mechanism of Action</h2>
<p>Not specified.</p>
<h2>Protocol</h2>
<h2>Safety Information</h2>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/bdnf/" class="internal-link">BDNF</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:05.491263'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/pathway/autophagy-lysosomal-pathway/" class="internal-link">Autophagy-Lysosomal_Pathway</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:05.491263'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/intermittent-fasting/" class="internal-link">Intermittent_Fasting</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.152919'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/pathway/autophagy-lysosomal-pathway/" class="internal-link">Autophagy-Lysosomal_Pathway</a> (pathway)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:11.341134'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/biomarker/bdnf/" class="internal-link">BDNF</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:10.191066'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/intermittent-fasting/" class="internal-link">Intermittent_Fasting</a> (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.152919'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/intermittent-fasting/" class="internal-link">Intermittent_Fasting</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:09.294607'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/intermittent-fasting/" class="internal-link">Intermittent_Fasting</a> (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:09.294607'
source: obsidian
</code></pre>
<h3>Influences on Biomarkers</h3>
<pre><code class="language-dataview">LIST effect
FROM [[Intermittent Fasting]] AND #biomarker
SORT confidence_score DESC
</code></pre>
<h3>Conditions Treated</h3>
<pre><code class="language-dataview">LIST effectiveness
FROM [[Intermittent Fasting]] AND #condition
SORT confidence_score DESC
</code></pre>
<h3>Interactions with Other Interventions</h3>
<pre><code class="language-dataview">LIST interaction_type
FROM [[Intermittent Fasting]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Research Support</h2>
<p>No research studies documented yet.</p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}