---
created: '2026-02-13T19:12:33.428450Z'
description: A group of eye conditions that damage the optic nerve, often caused by
  abnormally high pressure in the eye, leading to progressive vision loss.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/glaucoma/
slug: glaucoma
tags:
- condition
- ophthalmology
- chronic
- neurodegenerative
templateEngineOverride: njk
title: Glaucoma
type: condition
updated: '2026-02-13T19:12:33.428450Z'
---

{% raw %}
<h1>Glaucoma</h1>
<h2>Overview</h2>
<p>A group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye, leading to progressive vision loss.</p>
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
FROM [[Glaucoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/glaucoma/" class="internal-link">Glaucoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:08.276896'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Glaucoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Glaucoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/examination/retinal-imaging-for-neurodegeneration/" class="internal-link">Retinal_Imaging_for_Neurodegeneration</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:39.359650'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/examination/retinal-imaging-for-neurodegeneration/" class="internal-link">Retinal_Imaging_for_Neurodegeneration</a> (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:45.549973'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/glaucoma/" class="internal-link">Glaucoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.389126'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}