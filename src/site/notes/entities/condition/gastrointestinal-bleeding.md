---
created: '2026-02-13T19:12:33.424196Z'
description: Any bleeding that occurs in the digestive tract, ranging from the esophagus
  to the rectum, which can be acute or chronic.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/gastrointestinal-bleeding/
slug: gastrointestinal-bleeding
tags:
- condition
- gastroenterology
- emergency
- function-health
templateEngineOverride: njk
title: Gastrointestinal Bleeding
type: condition
updated: '2026-02-13T19:12:33.424196Z'
---

{% raw %}
<h1>Gastrointestinal Bleeding</h1>
<h2>Overview</h2>
<p>Any bleeding that occurs in the digestive tract, ranging from the esophagus to the rectum, which can be acute or chronic.</p>
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
FROM [[Gastrointestinal Bleeding]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal_Bleeding</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:07.616781'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Gastrointestinal Bleeding]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Gastrointestinal Bleeding]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal_Bleeding</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.934888'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.852350'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal_Bleeding</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.231284'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.231284'
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
<ul>
<li>← <a href="/garden/dev_admin/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}