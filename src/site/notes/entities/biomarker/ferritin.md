---
created: '2026-02-09T08:04:39.887379Z'
description: Ferritin is the main iron storage protein. Low levels indicate iron deficiency;
  high levels may indicate iron overload, inflammation, or liver disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/ferritin/
slug: ferritin
tags:
- biomarker
templateEngineOverride: njk
title: Ferritin
type: biomarker
updated: '2026-02-09T08:04:39.887379Z'
---

{% raw %}
<h1>Ferritin</h1>
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
<li>← <a href="/garden/dev_admin/labtest/iron-panel/" class="internal-link">iron_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:16.231051'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">ferritin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:48:12.778690'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/fatigue/" class="internal-link">Fatigue</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/iron-panel/" class="internal-link">iron_panel</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/iron-deficiency/" class="internal-link">Iron_Deficiency</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:17.277692'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/iron-panel/" class="internal-link">iron_panel</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/iron-deficiency-pattern/" class="internal-link">Iron_Deficiency_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/fatigue/" class="internal-link">Fatigue</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:18.588212'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">ferritin</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/iron-deficiency/" class="internal-link">Iron_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.184931'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">Ferritin</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:12.099734'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/iron-deficiency/" class="internal-link">Iron_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:20.890940'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: high
function_indicated: Iron Storage
source: curated
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/organ/bones/" class="internal-link">Bones</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: high
function_indicated: Iron Storage / Erythropoiesis
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
<li>→ <a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">Ferritin</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:15.116371'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/clinicalpattern/iron-deficiency-pattern/" class="internal-link">Iron_Deficiency_Pattern</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:15.116371'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/iron-deficiency-pattern/" class="internal-link">Iron_Deficiency_Pattern</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:16.661054'
source: obsidian
</code></pre>
<h3>Requires Biomarker</h3>
<ul>
<li>← <a href="/garden/dev_admin/clinicalpattern/iron-deficiency-pattern/" class="internal-link">Iron_Deficiency_Pattern</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:39.366268'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">ferritin</a> - Direct ferritin measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/iron-panel/" class="internal-link">iron panel</a> - Part of iron studies panel</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Ferritin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}