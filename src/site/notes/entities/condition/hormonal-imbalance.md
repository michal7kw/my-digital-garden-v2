---
created: '2026-02-09T05:40:20.960973Z'
description: A condition where there is too much or too little of one or more hormones
  in the body, which can disrupt many essential processes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hormonal-imbalance/
slug: hormonal-imbalance
tags:
- condition
- endocrinology
- hormones
- function-health
templateEngineOverride: njk
title: Hormonal Imbalance
type: condition
updated: '2026-02-09T05:40:20.960973Z'
---

{% raw %}
<h1>Hormonal Imbalance</h1>
<h2>Overview</h2>
<p>A condition where there is too much or too little of one or more hormones in the body, which can disrupt many essential processes.</p>
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
FROM [[Hormonal Imbalance]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[follicle_stimulating_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[luteinizing_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[prolactin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[sex_hormone_binding_globulin_shbg]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[leptin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Hormonal_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<ul>
<li>→ [[follicle_stimulating_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<ul>
<li>→ [[luteinizing_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<ul>
<li>→ [[prolactin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<ul>
<li>→ [[sex_hormone_binding_globulin_shbg]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<ul>
<li>→ [[leptin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.439906'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Hormonal Imbalance]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Hormonal Imbalance]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Hormonal_Imbalance]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>← [[sex_hormone_binding_globulin_shbg]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:59.671283'
source: obsidian
</code></pre>
<ul>
<li>← [[prolactin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:58.920010'
source: obsidian
</code></pre>
<ul>
<li>← [[luteinizing_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.551127'
source: obsidian
</code></pre>
<ul>
<li>← [[leptin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.853821'
source: obsidian
</code></pre>
<ul>
<li>← [[follicle_stimulating_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:52.960824'
source: obsidian
</code></pre>
<ul>
<li>→ [[sex_hormone_binding_globulin_shbg]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>→ [[prolactin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>→ [[luteinizing_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>→ [[Hormonal_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>→ [[follicle_stimulating_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<ul>
<li>→ [[leptin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.342057'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[leptin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[sex_hormone_binding_globulin_shbg]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[prolactin]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[luteinizing_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[follicle_stimulating_hormone]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}