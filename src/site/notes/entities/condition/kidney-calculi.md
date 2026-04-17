---
created: '2026-04-17T18:59:18.714752Z'
description: Hard deposits made of minerals and salts that form inside the kidneys,
  often causing severe pain when passing through the urinary tract.
dg-home: false
dg-publish: true
permalink: /entities/condition/kidney-calculi/
slug: kidney-calculi
tags:
- condition
- nephrology
- urology
- acute
templateEngineOverride: njk
title: Kidney Calculi
type: condition
updated: '2026-04-17T18:59:18.714752Z'
---

{% raw %}
<h1>Kidney Calculi</h1>
<h2>Overview</h2>
<p>Hard deposits made of minerals and salts that form inside the kidneys, often causing severe pain when passing through the urinary tract.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<ul>
<li>Severe pain in side and back</li>
<li>Pain radiating to lower abdomen/groin</li>
<li>Blood in urine (hematuria)</li>
<li>Nausea and vomiting</li>
<li>Frequent need to urinate</li>
<li>Fever/chills (if infected)</li>
</ul>
<h2>Diagnostic Information</h2>
<h2>Risk Factors- Dehydration</h2>
<ul>
<li>High-protein/salt diet</li>
<li>Obesity</li>
<li>Family history</li>
<li>Hyperparathyroidism</li>
</ul>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Kidney Calculi]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<p>No relationships found.</p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Kidney Calculi]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Kidney Calculi]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/entities/condition/kidney-stones/" class="internal-link">Kidney Stones</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/magnesium/" class="internal-link">Magnesium</a><br />
IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Potassium Citrate</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/vitamin-b6/" class="internal-link">Vitamin B6</a></p>
<h3>Improved By Intervention</h3>
<p>IMPROVED_BY_INTERVENTION::<a class="internal-link is-unresolved" href="/404">Hydration Therapy</a><br />
IMPROVED_BY_INTERVENTION::<a href="/entities/intervention/mediterranean-diet/" class="internal-link">Mediterranean Diet</a></p>

{% endraw %}