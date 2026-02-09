---
created: '2026-02-09T05:40:20.995027Z'
description: A broad range of conditions that damage the liver and impair its essential
  functions, including detoxification, metabolism, and bile production.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/liver-disease/
slug: liver-disease
tags:
- condition
- hepatology
- gastroenterology
- function-health
templateEngineOverride: njk
title: Liver Disease
type: condition
updated: '2026-02-09T05:40:20.995027Z'
---

{% raw %}
<h1>Liver Disease</h1>
<h2>Overview</h2>
<p>A broad range of conditions that damage the liver and impair its essential functions, including detoxification, metabolism, and bile production.</p>
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
FROM [[Liver Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[total_protein]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Liver_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_protein]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.057980'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Liver Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Liver Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Liver_Disease]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<ul>
<li>← [[total_protein]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:01.071987'
source: obsidian
</code></pre>
<ul>
<li>← [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.949570'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.849989'
source: obsidian
</code></pre>
<ul>
<li>← [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:54.670159'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<ul>
<li>→ [[total_protein]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<ul>
<li>→ [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<ul>
<li>→ [[Liver_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:31.893481'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[total_protein]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[iron_binding_capacity]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[iron_saturation]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[iron]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}