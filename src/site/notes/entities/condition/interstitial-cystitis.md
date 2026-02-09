---
created: '2026-02-09T05:54:32.024291Z'
description: A chronic, non-infectious condition causing bladder pressure, bladder
  pain, and sometimes pelvic pain, also known as bladder pain syndrome.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/interstitial-cystitis/
slug: interstitial-cystitis
tags:
- condition
- urology
- chronic_pain
- function-health
templateEngineOverride: njk
title: Interstitial Cystitis
type: condition
updated: '2026-02-09T05:54:32.024291Z'
---

{% raw %}
<h1>Interstitial Cystitis</h1>
<h2>Overview</h2>
<p>A chronic, non-infectious condition causing bladder pressure, bladder pain, and sometimes pelvic pain, also known as bladder pain syndrome.</p>
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
FROM [[Interstitial Cystitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[leukocyte_esterase_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[leukocyte_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Interstitial_Cystitis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
</code></pre>
<ul>
<li>→ [[leukocyte_esterase_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
</code></pre>
<ul>
<li>→ [[leukocyte_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:14.877747'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Interstitial Cystitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Interstitial Cystitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Interstitial_Cystitis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
</code></pre>
<ul>
<li>← [[leukocyte_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:56.078688'
source: obsidian
</code></pre>
<ul>
<li>← [[leukocyte_esterase_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:55.960613'
source: obsidian
</code></pre>
<ul>
<li>→ [[Interstitial_Cystitis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
</code></pre>
<ul>
<li>→ [[leukocyte_esterase_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
</code></pre>
<ul>
<li>→ [[leukocyte_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:30.533635'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[leukocyte_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[leukocyte_esterase_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}