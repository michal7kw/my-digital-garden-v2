---
created: '2026-02-13T19:27:03.425586Z'
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
updated: '2026-02-13T19:27:03.425586Z'
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
<li>→ <a href="/garden/dev_admin/biomarker/egfr-status/" class="internal-link">EGFR_Status</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:16.613705'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Lung_Cancer</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/egfr-status/" class="internal-link">EGFR_Status</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Colorectal_Cancer</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Lung_Cancer</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Gefitinib</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Osimertinib</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Erlotinib</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Colorectal_Cancer</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.649703'
source: obsidian
</code></pre>
<ul>
<li>→ <a class="internal-link is-unresolved" href="/404">Cetuximab</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.766148'
source: obsidian
</code></pre>
<h3>Indicates Organ Health</h3>
<ul>
<li>→ <a href="/garden/dev_admin/organ/kidneys/" class="internal-link">Kidneys</a> (organ)</li>
</ul>
<pre><code class="language-yaml">specificity: very_high
function_indicated: Glomerular Filtration Rate
source: curated
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Measures</h3>
<ul>
<li>→ <a href="/garden/dev_admin/protein/egfr/" class="internal-link">EGFR</a> (protein) - <em>Expression/Sequence</em></li>
</ul>
<h3>Predicts Response To</h3>
<ul>
<li>→ <a href="/garden/dev_admin/drug/gefitinib/" class="internal-link">Gefitinib</a> (drug)</li>
<li>→ <a href="/garden/dev_admin/drug/erlotinib/" class="internal-link">Erlotinib</a> (drug)</li>
<li>→ <a href="/garden/dev_admin/drug/osimertinib/" class="internal-link">Osimertinib</a> (drug)</li>
<li>→ <a href="/garden/dev_admin/drug/cetuximab/" class="internal-link">Cetuximab</a> (drug)</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/lung-cancer/" class="internal-link">Lung Cancer</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/colorectal-cancer/" class="internal-link">Colorectal Cancer</a> (condition)</li>
</ul>
<h2>References</h2>
<ol>
<li><strong>Guidelines</strong>: NCCN Guidelines for Non-Small Cell Lung Cancer.</li>
</ol>

{% endraw %}