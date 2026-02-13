---
created: '2026-02-13T17:51:32.030839Z'
description: A progressive and generalized skeletal muscle disorder characterized
  by the age-related loss of muscle mass, strength, and function.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/sarcopenia/
slug: sarcopenia
tags:
- condition
- geriatric
- musculoskeletal
- metabolic
- function-health
templateEngineOverride: njk
title: Sarcopenia
type: condition
updated: '2026-02-13T17:51:32.030839Z'
---

{% raw %}
<h1>Sarcopenia</h1>
<h2>Overview</h2>
<p><strong>Sarcopenia</strong> is the age-related, involuntary loss of skeletal muscle mass and strength. Once considered an inevitable part of aging, it is now recognized as a distinct disease entity (ICD-10-CM code M62.84).</p>
<p>It typically begins in the 4th decade of life and accelerates after age 60. Sarcopenia is a primary driver of physical disability, loss of independence, and metabolic dysregulation in the elderly.</p>
<h2>Clinical Presentation</h2>
<ul>
<li><strong>Symptoms:</strong> Weakness, slow walking speed, difficulty climbing stairs, poor balance, and unintentional weight loss.</li>
<li><strong>Diagnosis (EWGSOP2 Guidelines):</strong>
<ol>
<li><strong>Probable Sarcopenia:</strong> Detected by low muscle strength (e.g., grip strength &lt;27kg for men, &lt;16kg for women).</li>
<li><strong>Confirmed Sarcopenia:</strong> Low strength + Low muscle quantity (Appendicular Skeletal Muscle Mass via DXA).</li>
<li><strong>Severe Sarcopenia:</strong> Low strength + Low quantity + Low physical performance (e.g., gait speed &lt;0.8 m/s).</li>
</ol>
</li>
</ul>
<h2>Pathophysiology</h2>
<ul>
<li><strong>Anabolic Resistance:</strong> Older muscle becomes less responsive to protein and exercise signals.</li>
<li><strong>Neuromuscular Changes:</strong> Loss of alpha motor neurons and motor unit remodeling.</li>
<li><strong>Inflammation:</strong> &quot;Inflammaging&quot; (chronic elevated IL-6, TNF-alpha) promotes catabolism.</li>
<li><strong>Hormonal Decline:</strong> Drops in Testosterone, IGF-1, and Growth Hormone.</li>
</ul>
<h2>Management</h2>
<p>Sarcopenia is one of the few conditions that is potentially reversible, primarily through lifestyle interventions.</p>
<ol>
<li><strong>Resistance Training:</strong> The most potent stimulus for muscle protein synthesis. Essential for reversing strength loss.</li>
<li><strong>Protein Intake:</strong> Higher requirements for older adults (1.2-1.5 g/kg/day) to overcome anabolic resistance. Leucine is particularly critical.</li>
<li><strong>Creatine:</strong> Improves muscle mass and strength when combined with exercise.</li>
</ol>
<h2>Relationships</h2>
<p>IMPROVED_BY_INTERVENTION::<a class="internal-link is-unresolved" href="/404">Resistance Training</a> - Primary treatment<br />
IMPROVED_BY_INTERVENTION::<a class="internal-link is-unresolved" href="/404">Protein Intake</a> - Essential nutrient<br />
IMPROVED_BY_INTERVENTION::<a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> - Ergogenic aid<br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> - Marker of muscle mass/turnover<br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/hormone/igf-1/" class="internal-link">IGF-1</a> - Anabolic factor<br />
RISK_FACTOR_FOR::<a class="internal-link is-unresolved" href="/404">Falls</a><br />
RISK_FACTOR_FOR::<a href="/garden/dev_admin/condition/osteoporosis/" class="internal-link">Osteoporosis</a> - &quot;Osteosarcopenia&quot;<br />
RISK_FACTOR_FOR::<a class="internal-link is-unresolved" href="/404">Frailty</a><br />
CAUSED_BY::<a class="internal-link is-unresolved" href="/404">Aging</a><br />
CAUSED_BY::<a class="internal-link is-unresolved" href="/404">Sedentary Lifestyle</a><br />
CAUSED_BY::<a href="/garden/dev_admin/condition/chronic-inflammation/" class="internal-link">Chronic Inflammation</a></p>
<h2>Other Relationships</h2>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:07:01.825845'
source: obsidian
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/sarcopenia/" class="internal-link">Sarcopenia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:40.327345'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:40.327345'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:54.843123'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Sarcopenia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Sarcopenia]] AND #clinical-trial
SORT date DESC
</code></pre>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Sarcopenia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:41.099790'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.192580'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/sarcopenia/" class="internal-link">Sarcopenia</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:37.192580'
source: obsidian
</code></pre>
<h3>May Improve Condition</h3>
<ul>
<li>← <a href="/garden/dev_admin/supplement/creatine/" class="internal-link">Creatine</a> (drug)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:36.518401'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<ul>
<li>Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16-31.</li>
<li>Dent E, et al. International Clinical Practice Guidelines for Sarcopenia (ICFSR): Screening, Diagnosis and Management. J Frailty Aging. 2018;7(4):202-205.</li>
</ul>

{% endraw %}