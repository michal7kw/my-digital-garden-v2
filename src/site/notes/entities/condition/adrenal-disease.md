---
created: '2026-02-13T14:55:28.674866Z'
description: A group of disorders occurring when the adrenal glands produce too much
  or too little of essential hormones, such as cortisol and aldosterone.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/adrenal-disease/
slug: adrenal-disease
tags:
- condition
- endocrinology
- hormones
- function-health
templateEngineOverride: njk
title: Adrenal Disease
type: condition
updated: '2026-02-13T14:55:28.674866Z'
---

{% raw %}
<h1>Adrenal Disease</h1>
<h2>Overview</h2>
<p>A group of disorders occurring when the adrenal glands produce too much or too little of essential hormones, such as cortisol and aldosterone.</p>
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
FROM [[Adrenal Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/chloride/" class="internal-link">chloride</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/adrenal-disease/" class="internal-link">Adrenal_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:46.180646'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/chloride/" class="internal-link">chloride</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:46.180646'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Adrenal Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Adrenal Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/adrenal-disease/" class="internal-link">Adrenal_Disease</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/chloride/" class="internal-link">chloride</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:51.345636'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/adrenal-disease/" class="internal-link">Adrenal_Disease</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/chloride/" class="internal-link">chloride</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.791059'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/chloride/" class="internal-link">chloride</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}