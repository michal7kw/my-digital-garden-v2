---
created: '2026-02-13T19:27:04.278858Z'
description: Persistently elevated blood pressure (≥130/80 mmHg) that increases risk
  of heart disease, stroke, kidney disease, and premature death. Often called the
  'silent killer' due to lack of symptoms. Affects nearly half of U.S. adults.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/hypertension/
slug: hypertension
tags:
- condition
- cardiovascular
- chronic
- hypertension
- modifiable_risk
templateEngineOverride: njk
title: Hypertension
type: condition
updated: '2026-02-13T19:27:04.278858Z'
---

{% raw %}
<h1>Hypertension</h1>
<h2>Overview</h2>
<p>Persistently elevated blood pressure (≥130/80 mmHg) that increases risk of heart disease, stroke, kidney disease, and premature death. Often called the 'silent killer' due to lack of symptoms. Affects nearly half of U.S. adults.</p>
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
FROM [[Hypertension]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:22.486474'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:24.377214'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/drug/prazosin/" class="internal-link">PRAZOSIN</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T08:39:36.089288'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/drug/prazosin/" class="internal-link">PRAZOSIN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:02.527184'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/drug/prazosin/" class="internal-link">PRAZOSIN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hypertension/" class="internal-link">Hypertension</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:11.853683'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:32:30.205261'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:07.990267'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:12.965838'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Hypertension]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Hypertension]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:41.165362'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.779185'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.745625'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/drug/prazosin/" class="internal-link">PRAZOSIN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/drug/prazosin/" class="internal-link">PRAZOSIN</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:43.289113'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:39.989104'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:38.494293'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/hypertension/" class="internal-link">Hypertension</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:29.661054'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/lead/" class="internal-link">lead</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:24.377214'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/magnesium/" class="internal-link">Magnesium</a> (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2025-12-28T11:01:22.486474'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}