---
created: '2026-02-13T18:51:24.967288Z'
description: A chronic liver disease in which the body's immune system mistakenly
  attacks liver cells, causing inflammation and liver damage.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/autoimmune-hepatitis/
slug: autoimmune-hepatitis
tags:
- condition
- hepatology
- immunology
- autoimmune
- function-health
templateEngineOverride: njk
title: Autoimmune Hepatitis
type: condition
updated: '2026-02-13T18:51:24.967288Z'
---

{% raw %}
<h1>Autoimmune Hepatitis</h1>
<h2>Overview</h2>
<p>A chronic liver disease in which the body's immune system mistakenly attacks liver cells, causing inflammation and liver damage.</p>
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
FROM [[Autoimmune Hepatitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/arthralgia/" class="internal-link">Arthralgia</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:07.420190'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:18.378061'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/anxiety/" class="internal-link">Anxiety</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:33.556534'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-hepatitis/" class="internal-link">Autoimmune_Hepatitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/arthralgia/" class="internal-link">Arthralgia</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/anxiety/" class="internal-link">Anxiety</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:49.116700'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Autoimmune Hepatitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Autoimmune Hepatitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-hepatitis/" class="internal-link">Autoimmune_Hepatitis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.215543'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/anxiety/" class="internal-link">Anxiety</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/autoimmune-hepatitis/" class="internal-link">Autoimmune_Hepatitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/phenotype/arthralgia/" class="internal-link">Arthralgia</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.911901'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/anxiety/" class="internal-link">Anxiety</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:33.556534'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:18.378061'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/phenotype/arthralgia/" class="internal-link">Arthralgia</a> (phenotype)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-18T17:27:07.420190'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}