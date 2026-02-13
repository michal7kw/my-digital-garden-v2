---
created: '2026-02-13T18:51:24.989903Z'
description: A group of disorders affecting the bone marrow's ability to produce healthy
  blood cells (red cells, white cells, or platelets).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/bone-marrow-disorder/
slug: bone-marrow-disorder
tags:
- condition
- hematology
- oncology
- function-health
templateEngineOverride: njk
title: Bone Marrow Disorder
type: condition
updated: '2026-02-13T18:51:24.989903Z'
---

{% raw %}
<h1>Bone Marrow Disorder</h1>
<h2>Overview</h2>
<p>A group of disorders affecting the bone marrow's ability to produce healthy blood cells (red cells, white cells, or platelets).</p>
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
FROM [[Bone Marrow Disorder]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/platelet-count/" class="internal-link">platelet_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bone-marrow-disorder/" class="internal-link">Bone_Marrow_Disorder</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/platelet-count/" class="internal-link">platelet_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:51.075492'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Bone Marrow Disorder]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Bone Marrow Disorder]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bone-marrow-disorder/" class="internal-link">Bone_Marrow_Disorder</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/platelet-count/" class="internal-link">platelet_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:58.738195'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:57.181105'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/platelet-count/" class="internal-link">platelet_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/bone-marrow-disorder/" class="internal-link">Bone_Marrow_Disorder</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:24.346890'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/platelet-count/" class="internal-link">platelet_count</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}