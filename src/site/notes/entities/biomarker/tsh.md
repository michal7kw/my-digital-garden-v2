---
created: '2026-02-09T05:54:31.733577Z'
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/tsh/
slug: tsh
tags:
- biomarker
templateEngineOverride: njk
title: Tsh
type: biomarker
updated: '2026-02-09T05:54:31.733577Z'
---

{% raw %}
<h1>Tsh</h1>
<h2>Overview</h2>
<p>No description available.</p>
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
<li>→ [[Anxiety]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:23.556962'
source: obsidian
</code></pre>
<ul>
<li>→ [[Fatigue]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:23.556962'
source: obsidian
</code></pre>
<ul>
<li>← [[Fatigue]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
</code></pre>
<ul>
<li>← [[Anxiety]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:13.859142'
source: obsidian
</code></pre>
<ul>
<li>→ [[Tsh]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:17.214887'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Thyroid]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: high
function_indicated: Thyroid Regulation
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
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Tsh]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}