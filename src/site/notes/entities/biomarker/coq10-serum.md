---
created: '2026-04-17T18:59:17.567146Z'
dg-home: false
dg-publish: true
permalink: /entities/biomarker/coq10-serum/
slug: coq10-serum
tags:
- biomarker
templateEngineOverride: njk
title: CoQ10 (Serum)
type: biomarker
updated: '2026-04-17T18:59:17.567146Z'
---

{% raw %}
<h1>CoQ10 (Serum)</h1>
<h2>Overview</h2>
<p>No description available.</p>
<h2>Reference RangesReference ranges not available.</h2>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a> (essential for mitochondrial energy production in cardiac tissue, Evidence Level 2a)<br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/muscles/" class="internal-link">Muscles</a> (cofactor in electron transport chain critical for skeletal muscle function, Evidence Level 2b)</p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CoQ10 (Serum)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}