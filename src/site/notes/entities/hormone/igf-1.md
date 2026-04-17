---
created: '2026-04-17T18:59:17.724344Z'
description: Insulin-like Growth Factor 1 — peptide hormone primarily produced by
  the liver in response to Growth Hormone stimulation. Major mediator of growth, anabolism,
  and tissue repair. The IGF-1/mTOR axis is a central node in the longevity-vs-growth
  trade-off, with low levels associated with extended lifespan in model organisms.
dg-home: false
dg-publish: true
permalink: /entities/hormone/igf-1/
slug: igf-1
tags:
- hormone
- peptide
- growth
- anabolic
- longevity
templateEngineOverride: njk
title: IGF-1
type: hormone
updated: '2026-04-17T18:59:17.724344Z'
---

{% raw %}
<h1>IGF-1</h1>
<h2>Overview</h2>
<p>Insulin-like Growth Factor 1 — peptide hormone primarily produced by the liver in response to Growth Hormone stimulation. Major mediator of growth, anabolism, and tissue repair. The IGF-1/mTOR axis is a central node in the longevity-vs-growth trade-off, with low levels associated with extended lifespan in model organisms.</p>
<h2>Reference RangesReference ranges not available.</h2>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/entities/labtest/insulin/" class="internal-link">insulin</a><br />
RELATED::<a href="/entities/hormone/growth-hormone/" class="internal-link">Growth_Hormone</a><br />
RELATED::<a href="/entities/hormone/testosterone/" class="internal-link">Testosterone</a></p>
<h3>Promotes</h3>
<p>PROMOTES::<a class="internal-link is-unresolved" href="/404">Muscle_Hypertrophy</a></p>
<h3>Modulated By Intervention</h3>
<p>MODULATED_BY_INTERVENTION::<a href="/entities/intervention/caloric-restriction/" class="internal-link">Caloric_Restriction</a><br />
MODULATED_BY_INTERVENTION::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a><br />
MODULATED_BY_INTERVENTION::<a href="/entities/intervention/strength-training/" class="internal-link">Strength_Training</a><br />
MODULATED_BY_INTERVENTION::<a href="/entities/intervention/intermittent-fasting/" class="internal-link">Intermittent_Fasting</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/liver/" class="internal-link">Liver</a></p>
<h3>Produced By</h3>
<p>PRODUCED_BY::<a href="/entities/organ/liver/" class="internal-link">Liver</a></p>
<h3>Activates Pathway</h3>
<p>ACTIVATES_PATHWAY::<a class="internal-link is-unresolved" href="/404">PI3K-Akt_Pathway</a><br />
ACTIVATES_PATHWAY::<a href="/entities/pathway/mtor-pathway/" class="internal-link">mTOR_Pathway</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Acromegaly</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/sarcopenia/" class="internal-link">Sarcopenia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/cancer/" class="internal-link">Cancer</a></p>
<h3>Activates</h3>
<p>ACTIVATES::<a href="/entities/pathway/mtor-pathway/" class="internal-link">mTOR_Pathway</a><br />
ACTIVATES::<a href="/entities/gene/akt1/" class="internal-link">AKT1</a></p>
<h3>Inhibits</h3>
<p>INHIBITS::<a href="/entities/biologicalprocess/autophagy/" class="internal-link">Autophagy</a><br />
INHIBITS::<a href="/entities/gene/foxo3/" class="internal-link">FOXO3</a></p>
<h3>Regulated By</h3>
<p>REGULATED_BY::<a href="/entities/hormone/growth-hormone/" class="internal-link">Growth_Hormone</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[IGF-1]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}