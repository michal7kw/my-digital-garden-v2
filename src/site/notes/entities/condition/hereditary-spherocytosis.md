---
created: '2026-02-13T18:17:34.122700Z'
description: An inherited blood disorder characterized by spherical red blood cells
  that are fragile and prone to premature destruction in the spleen.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hereditary-spherocytosis/
slug: hereditary-spherocytosis
tags:
- condition
- hematology
- genetic
- function-health
templateEngineOverride: njk
title: Hereditary Spherocytosis
type: condition
updated: '2026-02-13T18:17:34.122700Z'
---

{% raw %}
<h1>Hereditary Spherocytosis</h1>
<h2>Overview</h2>
<p>An inherited blood disorder characterized by spherical red blood cells that are fragile and prone to premature destruction in the spleen.</p>
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
FROM [[Hereditary Spherocytosis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hereditary-spherocytosis/" class="internal-link">Hereditary_Spherocytosis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:10.377523'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:10.377523'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Hereditary Spherocytosis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Hereditary Spherocytosis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hereditary-spherocytosis/" class="internal-link">Hereditary_Spherocytosis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.923847'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hereditary-spherocytosis/" class="internal-link">Hereditary_Spherocytosis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.032147'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}