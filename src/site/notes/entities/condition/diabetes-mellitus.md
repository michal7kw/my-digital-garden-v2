---
created: '2026-04-17T18:59:18.485808Z'
description: A group of metabolic disorders characterized by high blood sugar levels
  over a prolonged period, resulting from defects in insulin secretion, insulin action,
  or both.
dg-home: false
dg-publish: true
permalink: /entities/condition/diabetes-mellitus/
slug: diabetes-mellitus
tags:
- condition
- metabolic
- endocrinology
- chronic
templateEngineOverride: njk
title: Diabetes Mellitus
type: condition
updated: '2026-04-17T18:59:18.485808Z'
---

{% raw %}
<h1>Diabetes Mellitus</h1>
<h2>Overview</h2>
<p>A group of metabolic disorders characterized by high blood sugar levels over a prolonged period, resulting from defects in insulin secretion, insulin action, or both.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<ul>
<li>Frequent urination</li>
<li>Increased thirst</li>
<li>Increased hunger</li>
<li>Blurred vision</li>
<li>Unexplained weight loss</li>
<li>Fatigue</li>
</ul>
<h2>Diagnostic Information</h2>
<h2>Risk Factors- Obesity</h2>
<ul>
<li>Physical inactivity</li>
<li>Family history</li>
<li>Older age</li>
<li>Hypertension</li>
</ul>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Diabetes Mellitus]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<p>No relationships found.</p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Diabetes Mellitus]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Diabetes Mellitus]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/entities/condition/diabetes/" class="internal-link">Diabetes</a><br />
RELATED::<a href="/entities/condition/blood-glucose-imbalance/" class="internal-link">Blood Glucose Imbalance</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/berberine/" class="internal-link">Berberine</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/chromium/" class="internal-link">Chromium</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>Improved By Intervention</h3>
<p>IMPROVED_BY_INTERVENTION::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a><br />
IMPROVED_BY_INTERVENTION::<a href="/entities/intervention/mediterranean-diet/" class="internal-link">Mediterranean Diet</a></p>

{% endraw %}