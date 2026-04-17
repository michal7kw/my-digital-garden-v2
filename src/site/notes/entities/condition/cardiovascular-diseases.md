---
created: '2026-04-17T18:59:18.339928Z'
description: A group of disorders of the heart and blood vessels, including coronary
  heart disease, cerebrovascular disease, and rheumatic heart disease.
dg-home: false
dg-publish: true
permalink: /entities/condition/cardiovascular-diseases/
slug: cardiovascular-diseases
tags:
- condition
- cardiology
- vascular
- chronic
- global_health
templateEngineOverride: njk
title: Cardiovascular Diseases
type: condition
updated: '2026-04-17T18:59:18.339928Z'
---

{% raw %}
<h1>Cardiovascular Diseases</h1>
<h2>Overview</h2>
<p>A group of disorders of the heart and blood vessels, including coronary heart disease, cerebrovascular disease, and rheumatic heart disease.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<ul>
<li>Chest pain (Angina)</li>
<li>Shortness of breath</li>
<li>Fatigue</li>
<li>Palpitations</li>
<li>Dizziness</li>
<li>Swelling in legs</li>
</ul>
<h2>Diagnostic Information</h2>
<h2>Risk Factors- Hypertension</h2>
<ul>
<li>High cholesterol</li>
<li>Smoking</li>
<li>Diabetes</li>
<li>Obesity</li>
<li>Physical inactivity</li>
<li>Unhealthy diet</li>
</ul>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Cardiovascular Diseases]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<p>No relationships found.</p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Cardiovascular Diseases]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Cardiovascular Diseases]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
RELATED::<a href="/entities/condition/coronary-artery-disease/" class="internal-link">Coronary Artery Disease</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a><br />
IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">CoQ10</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/entities/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>Improved By Intervention</h3>
<p>IMPROVED_BY_INTERVENTION::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a><br />
IMPROVED_BY_INTERVENTION::<a href="/entities/intervention/mediterranean-diet/" class="internal-link">Mediterranean Diet</a></p>

{% endraw %}