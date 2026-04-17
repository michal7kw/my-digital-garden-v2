---
created: '2026-04-17T18:59:17.754901Z'
dg-home: false
dg-publish: true
permalink: /entities/biomarker/ldl-cholesterol/
slug: ldl-cholesterol
tags:
- biomarker
templateEngineOverride: njk
title: LDL Cholesterol
type: biomarker
updated: '2026-04-17T18:59:17.754901Z'
---

{% raw %}
<h1>LDL Cholesterol</h1>
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
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Atherosclerosis</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a href="/entities/condition/stroke/" class="internal-link">Stroke</a> (when elevated, Evidence Level 1a)</p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/berberine/" class="internal-link">Berberine</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[LDL Cholesterol]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}