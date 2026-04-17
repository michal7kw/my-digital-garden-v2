---
created: '2026-04-17T18:59:17.545952Z'
dg-home: false
dg-publish: true
permalink: /entities/biomarker/crp-hs/
slug: crp-hs
tags:
- biomarker
templateEngineOverride: njk
title: CRP (hs)
type: biomarker
updated: '2026-04-17T18:59:17.545952Z'
---

{% raw %}
<h1>CRP (hs)</h1>
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
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a> (key predictor of cardiovascular risk from systemic inflammation, Evidence Level 1a)<br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/immune-system/" class="internal-link">Immune System</a> (acute phase reactant reflecting systemic inflammatory status, Evidence Level 1a)</p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Type 2 Diabetes</a> (when elevated, Evidence Level 2a)</p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/vitamin-d/" class="internal-link">vitamin_d</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/curcumin/" class="internal-link">Curcumin</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/probiotics/" class="internal-link">Probiotics</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/nac/" class="internal-link">NAC</a></p>
<h3>Measured By Test</h3>
<p>MEASURED_BY_TEST::<a href="/entities/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a><br />
MEASURED_BY_TEST::<a href="/entities/labtest/hs-crp/" class="internal-link">hs_crp</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CRP (hs)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}