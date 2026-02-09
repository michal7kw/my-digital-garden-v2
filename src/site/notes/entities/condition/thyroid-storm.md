---
created: '2026-02-09T05:54:32.136413Z'
description: A life-threatening medical emergency characterized by a sudden, extreme
  overproduction of thyroid hormones, leading to a hypermetabolic state.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/thyroid-storm/
slug: thyroid-storm
tags:
- condition
- endocrinology
- thyroid
- emergency
- acute
- function-health
templateEngineOverride: njk
title: Thyroid Storm
type: condition
updated: '2026-02-09T05:54:32.136413Z'
---

{% raw %}
<h1>Thyroid Storm</h1>
<h2>Overview</h2>
<p>Thyroid Storm (Thyrotoxic Crisis) is the extreme end of the <strong>Hyperthyroidism</strong> spectrum. It is triggered by an acute stressor in a patient with underlying thyroid overactivity. Without rapid treatment, it progresses to multi-organ failure and death.</p>
<h2>Management</h2>
<ul>
<li><strong>Antithyroid Drugs:</strong> High-dose Propylthiouracil (PTU) or Methimazole.</li>
<li><strong>Beta-blockers:</strong> Propranolol to control heart rate and tremors.</li>
<li><strong>Iodine Solutions:</strong> To block hormone release.</li>
<li><strong>Corticosteroids:</strong> To block peripheral conversion of T4 to T3.</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Thyroid_Storm]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:53.735169'
source: obsidian
</code></pre>
<ul>
<li>← [[thyroxine_t4_free]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:00.714808'
source: obsidian
</code></pre>
<ul>
<li>→ [[Thyroid_Storm]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:04:00.278308'
source: obsidian
</code></pre>
<ul>
<li>→ [[thyroxine_t4_free]] (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:53.735169'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← [[thyroxine_t4_free]] (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>ASSOCIATED_WITH_CONDITION::[[Hyperthyroidism]]<br />
ASSOCIATED_WITH_CONDITION::[[Graves Disease]]<br />
ASSOCIATED_WITH_CONDITION::[[Atrial Fibrillation]]<br />
AFFECTS_ORGAN::[[Thyroid Gland]]<br />
AFFECTS_ORGAN::[[Heart]]<br />
AFFECTS_ORGAN::[[Brain]]<br />
ASSOCIATED_WITH_BIOMARKER::[[Free T4]] - Markedly elevated.<br />
ASSOCIATED_WITH_BIOMARKER::[[TSH]] - Markedly suppressed.<br />
TREATED_BY_DRUG::[[Propylthiouracil]]<br />
TREATED_BY_DRUG::[[Propranolol]]</p>
<h2>References</h2>
<ul>
<li>Nayak, B., &amp; Burman, K. (2006). Thyrotoxicosis and thyroid storm. Endocrinology and Metabolism Clinics.</li>
<li>Wikipedia. Thyroid storm.</li>
<li>Cleveland Clinic. Thyroid Storm.</li>
</ul>

{% endraw %}