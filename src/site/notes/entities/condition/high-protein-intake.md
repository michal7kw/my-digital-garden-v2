---
created: '2026-02-13T19:12:33.444313Z'
description: A dietary state characterized by a high proportion of protein consumption,
  which can impact metabolic markers and kidney function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/high-protein-intake/
slug: high-protein-intake
tags:
- condition
- nutrition
- metabolic
- function-health
templateEngineOverride: njk
title: High Protein Intake
type: condition
updated: '2026-02-13T19:12:33.444313Z'
---

{% raw %}
<h1>High Protein Intake</h1>
<h2>Overview</h2>
<p>A dietary state characterized by a high proportion of protein consumption, which can impact metabolic markers and kidney function.</p>
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
FROM [[High Protein Intake]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/high-protein-intake/" class="internal-link">High_Protein_Intake</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:10.916582'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:10.916582'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[High Protein Intake]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[High Protein Intake]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/high-protein-intake/" class="internal-link">High_Protein_Intake</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.934888'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/high-protein-intake/" class="internal-link">High_Protein_Intake</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.216757'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}