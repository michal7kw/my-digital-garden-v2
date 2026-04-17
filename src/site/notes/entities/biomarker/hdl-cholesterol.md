---
created: '2026-04-17T18:59:17.683208Z'
dg-home: false
dg-publish: true
permalink: /entities/biomarker/hdl-cholesterol/
slug: hdl-cholesterol
tags:
- biomarker
templateEngineOverride: njk
title: HDL Cholesterol
type: biomarker
updated: '2026-04-17T18:59:17.683208Z'
---

{% raw %}
<h1>HDL Cholesterol</h1>
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
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/niacin/" class="internal-link">Niacin</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[HDL Cholesterol]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}