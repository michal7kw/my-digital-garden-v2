---
created: '2026-02-09T05:54:31.764400Z'
description: Zonulin is a protein that reversibly modulates intestinal tight junction
  permeability. Elevated serum zonulin indicates increased intestinal permeability
  and is associated with autoimmune and inflammatory conditions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/zonulin/
slug: zonulin
tags:
- biomarker
templateEngineOverride: njk
title: Zonulin
type: biomarker
updated: '2026-02-09T05:54:31.764400Z'
---

{% raw %}
<h1>Zonulin</h1>
<h2>Overview</h2>
<p>Zonulin (also known as pre-haptoglobin-2) is a physiological modulator of intercellular tight junctions in the intestinal epithelium. It is the only known physiological mediator of reversible tight junction opening, functioning through protease-activated receptor 2 (PAR2) signaling. Zonulin was discovered by Dr. Alessio Fasano and has become a key biomarker for assessing intestinal barrier integrity.</p>
<p>When zonulin is released in the intestinal lumen (triggered by gliadin, certain bacteria, or other stimuli), it causes the disassembly of tight junction proteins, increasing paracellular permeability. This allows larger molecules, including undigested food proteins, bacterial endotoxins, and other antigens, to pass through the intestinal barrier into the bloodstream, a condition commonly referred to as increased intestinal permeability.</p>
<p>Elevated serum zonulin levels have been associated with numerous conditions including celiac disease, type 1 diabetes, inflammatory bowel disease, multiple sclerosis, rheumatoid arthritis, metabolic syndrome, and obesity. Zonulin testing is used in functional and integrative medicine to assess gut barrier function and guide therapeutic interventions targeting intestinal permeability. However, assay specificity has been debated, as some commercial ELISA kits may cross-react with other proteins.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Low</strong></td>
<td>&lt;10 ng/mL</td>
<td>Healthy gut barrier function</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;30 ng/mL</td>
<td>Within acceptable range</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>30-60 ng/mL</td>
<td>Moderately increased intestinal permeability</td>
</tr>
<tr>
<td><strong>Very High</strong></td>
<td>&gt;60 ng/mL</td>
<td>Significantly compromised gut barrier</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;20 ng/mL</td>
<td>Functional medicine optimal range</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Serum (also available in stool)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; retest 8-12 weeks after gut healing interventions</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li>[[L-Glutamine]] - May decrease zonulin by supporting enterocyte tight junction integrity (moderate, evidence level 3)</li>
<li>[[Zinc]] - May decrease zonulin by strengthening tight junction proteins (mild, evidence level 3)</li>
<li>[[Probiotics]] - May decrease zonulin by modulating gut microbiome and barrier function (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>[[zonulin]] - Serum zonulin ELISA measurement</li>
<li>[[zonulin stool]] - Fecal zonulin for localized intestinal assessment</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ [[Calprotectin]] (biomarker) - Both indicate GI inflammation; often co-ordered</li>
<li>→ [[Hs Crp]] (biomarker) - Systemic inflammation marker correlated with gut permeability</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:28802833 - L-Glutamine supplementation and intestinal permeability</li>
<li>PMID:25869284 - Zinc and intestinal barrier function</li>
<li>PMID:30267869 - Probiotics effects on zonulin and intestinal permeability</li>
<li>PMID:21248165 - Fasano A. Zonulin and its regulation of intestinal barrier function</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Zonulin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}