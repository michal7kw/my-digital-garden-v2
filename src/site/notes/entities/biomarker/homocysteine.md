---
created: '2026-02-13T14:55:28.307597Z'
description: A sulfur-containing amino acid produced during methionine metabolism.
  Elevated levels are a risk factor for cardiovascular disease, cognitive decline,
  and neural tube defects.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/homocysteine/
slug: homocysteine
tags:
- biomarker
templateEngineOverride: njk
title: Homocysteine
type: biomarker
updated: '2026-02-13T14:55:28.307597Z'
---

{% raw %}
<h1>Homocysteine</h1>
<h2>Overview</h2>
<p>Sulfur-containing amino acid that is an intermediate in the methylation cycle. Elevated homocysteine is an independent risk factor for cardiovascular disease, cognitive decline, and other conditions. Levels are modifiable through B vitamin supplementation.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.188711'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.188711'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-b6/" class="internal-link">Vitamin_B6</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a> (intervention)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:48.486140'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.779185'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.519524'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/metabolite/homocysteine/" class="internal-link">Homocysteine</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.678513'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.310574'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b6/" class="internal-link">Vitamin_B6</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:41.831836'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:41.602027'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:36.975406'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.520330'
source: obsidian
</code></pre>
<h3>Decreases Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-26T07:08:41.501218'
magnitude: moderate
magnitude_range: 15-30% reduction
notes: B12 is cofactor for methionine synthase. Effect enhanced with concurrent folate.
  Most effective in B12-deficient individuals.
onset_timeframe: 4-8 weeks
population_context: elevated homocysteine
source: obsidian
study_references:
- PMID:16522904
- PMID:22493132
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/blood/" class="internal-link">Blood</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: medium
function_indicated: Vascular Health / Methylation
source: curated
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Influences</h3>
<p>No known influences documented.</p>
<h3>Correlations</h3>
<p>No correlations documented.</p>
<h3>Other Relationships</h3>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:03.149967'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:30.196142'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b6/" class="internal-link">Vitamin_B6</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:18.846152'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:15.621784'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/folate/" class="internal-link">Folate</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-b6/" class="internal-link">Vitamin_B6</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/metabolite/homocysteine/" class="internal-link">Homocysteine</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.312640'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:57.049485'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:37.999694'
source: obsidian
</code></pre>
<h3>Decreases Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">effect_direction: decreases
evidence_level: 4
last_modified: '2026-01-19T09:07:17.506662'
magnitude: moderate
magnitude_range: 15-30% reduction
notes: B12 is cofactor for methionine synthase. Effect enhanced with concurrent folate.
  Most effective in B12-deficient individuals.
onset_timeframe: 4-8 weeks
population_context: elevated homocysteine
source: obsidian
study_references:
- PMID:16522904
- PMID:22493132
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Homocysteine]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}