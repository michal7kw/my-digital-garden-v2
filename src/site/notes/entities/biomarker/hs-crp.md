---
created: '2026-02-09T05:40:20.657697Z'
description: High-sensitivity C-reactive protein is a marker of systemic inflammation.
  Elevated levels are associated with cardiovascular disease risk.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/hs-crp/
slug: hs-crp
tags:
- biomarker
templateEngineOverride: njk
title: Hs Crp
type: biomarker
updated: '2026-02-09T05:40:20.657697Z'
---

{% raw %}
<h1>Hs Crp</h1>
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
<li>→ [[hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
</code></pre>
<ul>
<li>→ [[high_sensitivity_c_reactive_protein_hs_crp]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
</code></pre>
<ul>
<li>→ [[Omega-3_Fatty_Acids]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
</code></pre>
<ul>
<li>→ [[Arthralgia]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:19.365461'
source: obsidian
</code></pre>
<ul>
<li>→ [[hs_crp]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hs_Crp]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>→ [[high_sensitivity_c_reactive_protein_hs_crp]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>← [[Arthralgia]] (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:14.748757'
source: obsidian
</code></pre>
<ul>
<li>→ [[Omega-3_Fatty_Acids]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>→ [[Magnesium]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>→ [[Curcumin]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hs_Crp]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.822195'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Heart]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: low
function_indicated: Vascular Inflammation
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
<li>→ [[Hs_Crp]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.926715'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hs_Crp]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:19.926715'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[Omega-3 Fatty Acids]] - Decreases hs-CRP (moderate effect, evidence level 4)</li>
<li>[[Magnesium]] - Decreases hs-CRP (moderate effect, evidence level 3)</li>
<li>[[Curcumin]] - Decreases hs-CRP in inflammatory conditions (moderate effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[hs crp]] - High-sensitivity C-reactive protein measurement</li>
<li>[[high sensitivity c reactive protein hs crp]] - hs-CRP test</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Hs Crp]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}