---
created: '2026-02-09T05:54:31.947627Z'
description: A long-term infection where the pathogen remains in the body for an extended
  period, often leading to persistent inflammation and organ damage.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/chronic-infection/
slug: chronic-infection
tags:
- condition
- infectious_disease
- immunology
- chronic
- function-health
templateEngineOverride: njk
title: Chronic Infection
type: condition
updated: '2026-02-09T05:54:31.947627Z'
---

{% raw %}
<h1>Chronic Infection</h1>
<h2>Overview</h2>
<p>A long-term infection where the pathogen remains in the body for an extended period, often leading to persistent inflammation and organ damage.</p>
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
FROM [[Chronic Infection]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[monocytes]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Chronic_Infection]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:56.127712'
source: obsidian
</code></pre>
<ul>
<li>→ [[monocytes]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:56.127712'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Chronic Infection]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Chronic Infection]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Chronic_Infection]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.307542'
source: obsidian
</code></pre>
<ul>
<li>← [[monocytes]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.436126'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Infection]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.307542'
source: obsidian
</code></pre>
<ul>
<li>→ [[monocytes]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:25.307542'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[monocytes]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}