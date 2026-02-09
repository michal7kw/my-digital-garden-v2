---
created: '2026-02-09T05:54:31.633613Z'
description: Predictive biomarker for lung and colorectal cancer. Measures EGFR protein
  expression (IHC) or gene mutations (PCR/NGS).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/egfr-status/
slug: egfr-status
tags:
- biomarker
- cancer
- predictive
- pharmacogenomics
- imported
- primekg
templateEngineOverride: njk
title: EGFR Status
type: biomarker
updated: '2026-02-09T05:54:31.633613Z'
---

{% raw %}
<h1>EGFR Status</h1>
<h2>Overview</h2>
<p><strong>EGFR Status</strong> is a critical predictive biomarker in oncology.</p>
<ol>
<li><strong>NSCLC (Lung Cancer)</strong>: Testing for <em>sensitizing mutations</em> (e.g., Exon 19 deletion, L858R) determines eligibility for EGFR-TKI therapy (Gefitinib, Osimertinib).</li>
<li><strong>Colorectal Cancer</strong>: Testing for <em>expression</em> (IHC) is sometimes done, but lack of downstream RAS mutations is the primary driver for anti-EGFR antibody therapy (Cetuximab).</li>
</ol>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Positive Mutation (Lung)</strong>: Predicts response to EGFR Tyrosine Kinase Inhibitors.</li>
<li><strong>T790M Mutation</strong>: Mechanism of acquired resistance; indicates need for 3rd generation TKI (Osimertinib).</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[EGFR_Status]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:16.613705'
source: obsidian
</code></pre>
<ul>
<li>→ [[Lung_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[EGFR_Status]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[Colorectal_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[Lung_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Gefitinib]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[Osimertinib]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[Erlotinib]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[Colorectal_Cancer]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
</code></pre>
<ul>
<li>→ [[Cetuximab]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ [[EGFR]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ [[Kidneys]] (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: very_high
function_indicated: Glomerular Filtration Rate
source: curated
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Measures</h3>
<ul>
<li>→ [[EGFR]] (protein) - <em>Expression/Sequence</em></li>
</ul>
<h3>Predicts Response To</h3>
<ul>
<li>→ [[Gefitinib]] (drug)</li>
<li>→ [[Erlotinib]] (drug)</li>
<li>→ [[Osimertinib]] (drug)</li>
<li>→ [[Cetuximab]] (drug)</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ [[Lung Cancer]] (condition)</li>
<li>→ [[Colorectal Cancer]] (condition)</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>Guidelines</strong>: NCCN Guidelines for Non-Small Cell Lung Cancer.</li>
</ol>

{% endraw %}