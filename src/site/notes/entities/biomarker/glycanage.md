---
created: '2026-02-13T14:55:28.294195Z'
description: A biomarker test that measures biological age through the analysis of
  IgG glycosylation patterns, indicating levels of chronic inflammation.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/glycanage/
slug: glycanage
tags:
- biomarker
- longevity
- inflammation
- immune_system
templateEngineOverride: njk
title: GlycanAge
type: biomarker
updated: '2026-02-13T14:55:28.294195Z'
---

{% raw %}
<h1>GlycanAge</h1>
<h2>Overview</h2>
<p>A biomarker test that measures biological age through the analysis of IgG glycosylation patterns, indicating levels of chronic inflammation.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Blood (Dry Blood Spot or Venous)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Every 6-12 months</li>
</ul>
<h2>Interpretation Guidelines</h2>
<ul>
<li>Higher GlycanAge indicates higher levels of 'inflammaging'.</li>
<li>Sensitive to short-term lifestyle changes (3-6 months).</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/glycanage/" class="internal-link">GlycanAge</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:13.003067'
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
<li>→ <a href="/garden/dev_admin/biomarker/glycanage/" class="internal-link">GlycanAge</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:30:17.564820'
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
FROM [[GlycanAge]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}