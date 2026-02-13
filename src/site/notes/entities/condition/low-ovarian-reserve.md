---
created: '2026-02-13T19:00:15.031350Z'
description: A condition where a woman has a lower number of eggs remaining in her
  ovaries than expected for her age, which can impact fertility.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/low-ovarian-reserve/
slug: low-ovarian-reserve
tags:
- condition
- gynecology
- reproductive_health
- function-health
templateEngineOverride: njk
title: Low Ovarian Reserve
type: condition
updated: '2026-02-13T19:00:15.031350Z'
---

{% raw %}
<h1>Low Ovarian Reserve</h1>
<h2>Overview</h2>
<p>A condition where a woman has a lower number of eggs remaining in her ovaries than expected for her age, which can impact fertility.</p>
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
FROM [[Low Ovarian Reserve]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/anti-mullerian-hormone/" class="internal-link">anti_mullerian_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/low-ovarian-reserve/" class="internal-link">Low_Ovarian_Reserve</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.445067'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/anti-mullerian-hormone/" class="internal-link">anti_mullerian_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:19.445067'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Low Ovarian Reserve]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Low Ovarian Reserve]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/low-ovarian-reserve/" class="internal-link">Low_Ovarian_Reserve</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/anti-mullerian-hormone/" class="internal-link">anti_mullerian_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.785719'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/low-ovarian-reserve/" class="internal-link">Low_Ovarian_Reserve</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/anti-mullerian-hormone/" class="internal-link">anti_mullerian_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:32.038200'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/anti-mullerian-hormone/" class="internal-link">anti_mullerian_hormone</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}