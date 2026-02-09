---
created: '2026-02-09T05:54:31.962025Z'
description: A broad term for long-term respiratory conditions that impair breathing
  and lung function, including obstructive and restrictive diseases.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/chronic-lung-disease/
slug: chronic-lung-disease
tags:
- condition
- respiratory
- chronic
- function-health
templateEngineOverride: njk
title: Chronic Lung Disease
type: condition
updated: '2026-02-09T05:54:31.962025Z'
---

{% raw %}
<h1>Chronic Lung Disease</h1>
<h2>Overview</h2>
<p>Chronic Lung Disease (CLD) encompasses disorders such as <strong>COPD</strong>, <strong>Asthma</strong>, <strong>Pulmonary Fibrosis</strong>, and <strong>Bronchiectasis</strong>. These conditions lead to persistent respiratory symptoms and airflow limitation or impaired gas exchange.</p>
<h2>Categories</h2>
<ul>
<li><strong>Obstructive:</strong> Difficulty exhaling (COPD, Asthma).</li>
<li><strong>Restrictive:</strong> Difficulty expanding lungs (Pulmonary Fibrosis, Sarcoidosis).</li>
<li><strong>Vascular:</strong> Affecting blood vessels (Pulmonary Hypertension).</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Chronic_Lung_Disease]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.051041'
source: obsidian
</code></pre>
<ul>
<li>← [[hematocrit]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.812807'
source: obsidian
</code></pre>
<ul>
<li>← [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:51.144441'
source: obsidian
</code></pre>
<ul>
<li>→ [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.051041'
source: obsidian
</code></pre>
<ul>
<li>→ [[hematocrit]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:36.051041'
source: obsidian
</code></pre>
<ul>
<li>→ [[Chronic_Lung_Disease]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:32.155467'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[carbon_dioxide]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← [[hematocrit]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>INCLUDES_CONDITION::[[Chronic Obstructive Pulmonary Disease]]<br />
INCLUDES_CONDITION::[[Asthma]]<br />
INCLUDES_CONDITION::[[Pulmonary Fibrosis]]<br />
AFFECTS_ORGAN::[[Lung]]<br />
ASSOCIATED_WITH_CONDITION::[[Chronic Hypoxia]]<br />
TREATED_BY_DRUG::[[Bronchodilators]]<br />
TREATED_BY_INTERVENTION::[[Oxygen Therapy]]</p>
<h2>References</h2>
<ul>
<li>WHO. Chronic respiratory diseases.</li>
<li>American Lung Association. Lung Disease Lookup.</li>
<li>Global Strategy for the Diagnosis, Management, and Prevention of COPD (GOLD).</li>
</ul>

{% endraw %}