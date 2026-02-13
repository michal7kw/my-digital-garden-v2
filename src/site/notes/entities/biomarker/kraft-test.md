---
created: '2026-02-13T14:57:55.927967Z'
description: An oral glucose tolerance test with serial insulin measurements (GTIR),
  used to detect early-stage insulin resistance and occult diabetes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/kraft-test/
slug: kraft-test
tags:
- biomarker
- labtest
- metabolic
- insulin_resistance
templateEngineOverride: njk
title: Kraft Test
type: biomarker
updated: '2026-02-13T14:57:55.927967Z'
---

{% raw %}
<h1>Kraft Test</h1>
<h2>Overview</h2>
<p>An oral glucose tolerance test with serial insulin measurements (GTIR), used to detect early-stage insulin resistance and occult diabetes.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Blood</li>
<li><strong>Fasting Required</strong>: True</li>
<li><strong>Recommended Test Frequency</strong>: Once to establish baseline or monitor IR reversal</li>
</ul>
<h2>Interpretation Guidelines</h2>
<ul>
<li>Pattern I: Normal (Low fasting, peak at 30-60 min, return to baseline by 3h).</li>
<li>Pattern II: IGT (Delayed or elevated peak, slow return).</li>
<li>Pattern III: Occult Diabetes (High insulin peak extending to 2-3h).</li>
<li>Pattern IV: Hyperinsulinemic Fasting (Elevated fasting insulin).</li>
<li>Pattern V: Insulinopenia (Low insulin production).</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/kraft-test/" class="internal-link">Kraft_Test</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.243375'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/kraft-test/" class="internal-link">Kraft_Test</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:14.243375'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<h3>Influences</h3>
<p>No known influences documented.</p>
<h3>Correlations</h3>
<p>No correlations documented.</p>
<h3>Other Relationships</h3>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/kraft-test/" class="internal-link">Kraft_Test</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:21.570072'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/kraft-test/" class="internal-link">Kraft_Test</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:21.570072'
source: obsidian
</code></pre>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Kraft Test]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}