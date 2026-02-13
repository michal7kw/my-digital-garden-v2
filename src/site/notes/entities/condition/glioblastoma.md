---
created: '2026-02-13T19:12:33.429496Z'
description: An aggressive type of cancer that can occur in the brain or spinal cord,
  formed from cells called astrocytes. It is the most common malignant primary brain
  tumor in adults.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/glioblastoma/
slug: glioblastoma
tags:
- condition
- oncology
- neurology
- brain_tumor
templateEngineOverride: njk
title: Glioblastoma
type: condition
updated: '2026-02-13T19:12:33.429496Z'
---

{% raw %}
<h1>Glioblastoma</h1>
<h2>Overview</h2>
<p><strong>Glioblastoma</strong> (formerly Glioblastoma Multiforme or GBM) is a Grade IV astrocytoma. It arises from astrocytes, the star-shaped support cells of the brain. It is defined by necrosis (dead tissue) and microvascular proliferation.</p>
<p>The 2021 WHO classification strictly defines Glioblastoma as <strong>IDH-wildtype</strong>, meaning it lacks mutations in the IDH genes (which are now classified as IDH-mutant Astrocytomas). This distinction is critical as IDH-wildtype tumors are far more aggressive.</p>
<h2>Molecular Drivers</h2>
<ul>
<li><strong>EGFR Amplification:</strong> Found in ~40% of cases. Drives uncontrolled proliferation.</li>
<li><strong>PTEN Loss:</strong> A tumor suppressor often deleted, leading to hyperactive PI3K/AKT signaling.</li>
<li><strong>TP53 Mutation:</strong> Disables DNA repair and apoptosis mechanisms.</li>
<li><strong>MGMT Promoter Methylation:</strong> A biomarker predicting response to Temozolomide. Methylated tumors respond better.</li>
</ul>
<h2>Management</h2>
<h3>Standard of Care (Stupp Protocol)</h3>
<ol>
<li><strong>Surgical Resection:</strong> Maximal safe resection to remove visible tumor.</li>
<li><strong>Radiation Therapy:</strong> 6 weeks of focal radiation.</li>
<li><strong>Chemotherapy:</strong> Concomitant and adjuvant <strong>Temozolomide</strong> (oral alkylating agent).</li>
</ol>
<h3>Emerging Therapies</h3>
<ul>
<li><strong>Tumor Treating Fields (TTFields):</strong> Electric fields to disrupt cell division.</li>
<li><strong>Immunotherapy:</strong> Checkpoint inhibitors, CAR-T cells (still investigational).</li>
<li><strong>Targeted Therapy:</strong> EGFR inhibitors, VEGF inhibitors (Bevacizumab).</li>
</ul>
<h2>Relationships</h2>
<p>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Brain</a> - Primary site<br />
AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Astrocytes</a> - Cell of origin<br />
DRIVEN_BY::<a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> - Frequent amplification<br />
DRIVEN_BY::<a class="internal-link is-unresolved" href="/404">PI3K/AKT Signaling</a> - Hyperactivated via PTEN loss<br />
ASSOCIATED_WITH_GENE::<a href="/garden/dev_admin/protein/tp53/" class="internal-link">TP53</a> - Frequently mutated<br />
ASSOCIATED_WITH_GENE::<a class="internal-link is-unresolved" href="/404">PTEN</a> - Frequently deleted<br />
ASSOCIATED_WITH_GENE::<a class="internal-link is-unresolved" href="/404">MGMT</a> - Methylation status predicts survival<br />
TREATED_WITH::<a class="internal-link is-unresolved" href="/404">Temozolomide</a> - Standard chemotherapy<br />
TREATED_WITH::<a class="internal-link is-unresolved" href="/404">Radiation Therapy</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Li-Fraumeni Syndrome</a> - Genetic predisposition</p>
<h2>References</h2>
<ul>
<li>Stupp R, et al. Radiotherapy plus concomitant and adjuvant temozolomide for glioblastoma. N Engl J Med. 2005;352(10):987-96.</li>
<li>Louis DN, et al. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol. 2021;23(8):1231-1251.</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:39.447169'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:37.499401'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:08:30.803713'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/glioblastoma/" class="internal-link">Glioblastoma</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:28.444942'
source: obsidian
</code></pre>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Glioblastoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<!-- NEO4J_CONTENT_END -->
{% endraw %}