---
created: '2026-02-09T05:54:32.138509Z'
description: A condition where the kidneys are unable to properly regulate the concentration
  of urine, leading to urine that is either too concentrated (high specific gravity)
  or too dilute (low specific gravity).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/urinary-concentration-imbalance/
slug: urinary-concentration-imbalance
tags:
- condition
- nephrology
- metabolic
- function-health
templateEngineOverride: njk
title: Urinary Concentration Imbalance
type: condition
updated: '2026-02-09T05:54:32.138509Z'
---

{% raw %}
<h1>Urinary Concentration Imbalance</h1>
<h2>Overview</h2>
<p>A condition where the kidneys are unable to properly regulate the concentration of urine, leading to urine that is either too concentrated (high specific gravity) or too dilute (low specific gravity).</p>
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
FROM [[Urinary Concentration Imbalance]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← [[specific_gravity_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ [[Urinary_Concentration_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:45.422595'
source: obsidian
</code></pre>
<ul>
<li>→ [[specific_gravity_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:45.422595'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Urinary Concentration Imbalance]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Urinary Concentration Imbalance]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Urinary_Concentration_Imbalance]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
</code></pre>
<ul>
<li>← [[specific_gravity_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:59.926138'
source: obsidian
</code></pre>
<ul>
<li>→ [[specific_gravity_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
</code></pre>
<ul>
<li>→ [[Urinary_Concentration_Imbalance]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:38.546204'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[specific_gravity_urine]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}