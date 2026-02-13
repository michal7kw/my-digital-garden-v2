---
created: '2026-02-13T17:51:31.975504Z'
description: A range of disorders where the ovaries fail to produce eggs or the correct
  balance of hormones, affecting fertility and systemic health.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/ovarian-dysfunction/
slug: ovarian-dysfunction
tags:
- condition
- gynecology
- endocrinology
- reproductive_health
- function-health
templateEngineOverride: njk
title: Ovarian Dysfunction
type: condition
updated: '2026-02-13T17:51:31.975504Z'
---

{% raw %}
<h1>Ovarian Dysfunction</h1>
<h2>Overview</h2>
<p>A range of disorders where the ovaries fail to produce eggs or the correct balance of hormones, affecting fertility and systemic health.</p>
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
FROM [[Ovarian Dysfunction]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/follicle-stimulating-hormone/" class="internal-link">follicle_stimulating_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/luteinizing-hormone/" class="internal-link">luteinizing_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/ovarian-dysfunction/" class="internal-link">Ovarian_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.126386'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/follicle-stimulating-hormone/" class="internal-link">follicle_stimulating_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.126386'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/luteinizing-hormone/" class="internal-link">luteinizing_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:31.126386'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Ovarian Dysfunction]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Ovarian Dysfunction]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/ovarian-dysfunction/" class="internal-link">Ovarian_Dysfunction</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.791556'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/luteinizing-hormone/" class="internal-link">luteinizing_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.551127'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/follicle-stimulating-hormone/" class="internal-link">follicle_stimulating_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:52.960824'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/follicle-stimulating-hormone/" class="internal-link">follicle_stimulating_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.791556'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/luteinizing-hormone/" class="internal-link">luteinizing_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.791556'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/ovarian-dysfunction/" class="internal-link">Ovarian_Dysfunction</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:34.791556'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/luteinizing-hormone/" class="internal-link">luteinizing_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/follicle-stimulating-hormone/" class="internal-link">follicle_stimulating_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}