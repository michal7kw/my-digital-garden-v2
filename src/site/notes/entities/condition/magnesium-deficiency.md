---
created: '2026-02-13T19:12:33.516599Z'
description: A condition where the body does not have enough magnesium, an essential
  mineral involved in over 300 biochemical reactions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/magnesium-deficiency/
slug: magnesium-deficiency
tags:
- condition
- metabolic
- nutrition
- mineral
- function-health
templateEngineOverride: njk
title: Magnesium Deficiency
type: condition
updated: '2026-02-13T19:12:33.516599Z'
---

{% raw %}
<h1>Magnesium Deficiency</h1>
<h2>Overview</h2>
<p>A condition where the body does not have enough magnesium, an essential mineral involved in over 300 biochemical reactions.</p>
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
FROM [[Magnesium Deficiency]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">magnesium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/magnesium-deficiency/" class="internal-link">Magnesium_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.970894'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">magnesium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.970894'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Magnesium Deficiency]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Magnesium Deficiency]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/magnesium-deficiency/" class="internal-link">Magnesium_Deficiency</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">magnesium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.822257'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/magnesium-deficiency/" class="internal-link">Magnesium_Deficiency</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">magnesium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.188508'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">magnesium</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}