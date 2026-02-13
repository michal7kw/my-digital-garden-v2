---
created: '2026-02-13T17:51:32.019238Z'
description: A chronic autoimmune disease that speeds up the growth cycle of skin
  cells, causing patches of thick, red skin and silvery scales.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/psoriasis/
slug: psoriasis
tags:
- condition
- dermatology
- autoimmune
- inflammation
- chronic
templateEngineOverride: njk
title: Psoriasis
type: condition
updated: '2026-02-13T17:51:32.019238Z'
---

{% raw %}
<h1>Psoriasis</h1>
<h2>Overview</h2>
<p>A chronic autoimmune disease that speeds up the growth cycle of skin cells, causing patches of thick, red skin and silvery scales.</p>
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
FROM [[Psoriasis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/psoriasis/" class="internal-link">Psoriasis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:38.065994'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Psoriasis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Psoriasis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/psoriasis/" class="internal-link">Psoriasis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.727953'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}