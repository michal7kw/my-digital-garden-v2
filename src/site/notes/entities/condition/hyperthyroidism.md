---
created: '2026-02-13T19:04:38.508764Z'
description: A condition where the thyroid gland produces and releases excessive amounts
  of thyroid hormones (T3 and T4), accelerating the body's metabolism.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hyperthyroidism/
slug: hyperthyroidism
tags:
- condition
- endocrinology
- thyroid
- metabolic
- function-health
templateEngineOverride: njk
title: Hyperthyroidism
type: condition
updated: '2026-02-13T19:04:38.508764Z'
---

{% raw %}
<h1>Hyperthyroidism</h1>
<h2>Overview</h2>
<p>A condition where the thyroid gland produces and releases excessive amounts of thyroid hormones (T3 and T4), accelerating the body's metabolism.</p>
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
FROM [[Hyperthyroidism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:43.393690'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:12.442576'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:12.442576'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:44.205334'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Hyperthyroidism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Hyperthyroidism]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-25T19:20:43.317242'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.158795'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.823238'
source: obsidian
</code></pre>
<h3>Increases Risk For</h3>
<ul>
<li>← <a href="/garden/dev_admin/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:22.098625'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}