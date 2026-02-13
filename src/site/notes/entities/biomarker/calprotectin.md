---
created: '2026-02-13T19:27:03.367999Z'
description: Fecal calprotectin is a neutrophil-derived protein that serves as a non-invasive
  marker of gastrointestinal inflammation. It is the gold standard stool biomarker
  for distinguishing inflammatory bowel disease from irritable bowel syndrome.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/calprotectin/
slug: calprotectin
tags:
- biomarker
templateEngineOverride: njk
title: Calprotectin
type: biomarker
updated: '2026-02-13T19:27:03.367999Z'
---

{% raw %}
<h1>Calprotectin</h1>
<h2>Overview</h2>
<p>Calprotectin is a calcium- and zinc-binding protein belonging to the S100 protein family, constituting approximately 60% of the cytosolic protein content of neutrophils. It is also expressed by monocytes and macrophages. When neutrophils migrate to the intestinal mucosa during inflammation, calprotectin is released and can be detected in stool samples in amounts proportional to the degree of mucosal inflammation.</p>
<p>Fecal calprotectin is the gold standard non-invasive biomarker for distinguishing inflammatory bowel disease (IBD) from irritable bowel syndrome (IBS). It has high sensitivity and specificity for detecting intestinal inflammation and strongly correlates with endoscopic and histological disease activity. A normal fecal calprotectin essentially excludes significant intestinal inflammation and can spare patients from unnecessary colonoscopy.</p>
<p>Fecal calprotectin is used clinically for initial diagnosis of IBD, monitoring disease activity and treatment response, predicting relapse in patients in clinical remission, and assessing mucosal healing. It can also be elevated in other conditions causing intestinal inflammation including infectious gastroenteritis, NSAID-induced enteropathy, colorectal cancer, and diverticulitis. The protein is remarkably stable in stool at room temperature for up to 7 days, making it a practical clinical test.</p>
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
<td><strong>Normal</strong></td>
<td>&lt;50 mcg/g</td>
<td>No significant intestinal inflammation</td>
</tr>
<tr>
<td><strong>Borderline</strong></td>
<td>50-200 mcg/g</td>
<td>Possible low-grade inflammation; repeat testing or clinical correlation</td>
</tr>
<tr>
<td><strong>Elevated</strong></td>
<td>&gt;200 mcg/g</td>
<td>Likely organic intestinal inflammation; strongly suggestive of IBD</td>
</tr>
<tr>
<td><strong>Very Elevated</strong></td>
<td>&gt;500 mcg/g</td>
<td>Active IBD; high disease activity</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;50 mcg/g</td>
<td>No mucosal inflammation</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mcg/g (micrograms per gram of stool)</li>
<li><strong>Sample Type</strong>: Stool</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; every 3-6 months during active IBD monitoring</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/curcumin/" class="internal-link">Curcumin</a> - May decrease fecal calprotectin in IBD patients as adjunct therapy (moderate, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - May decrease intestinal inflammation and calprotectin levels (mild, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/probiotics/" class="internal-link">Probiotics</a> - May decrease calprotectin in mild-moderate IBD (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/fecal-calprotectin/" class="internal-link">fecal calprotectin</a> - Quantitative fecal calprotectin measurement by ELISA</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/zonulin/" class="internal-link">Zonulin</a> (biomarker) - Both assess intestinal health; zonulin measures permeability while calprotectin measures inflammation</li>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - Systemic inflammation marker; calprotectin is more specific for GI inflammation</li>
<li>→ <a href="/garden/dev_admin/biomarker/erythrocyte-sedimentation-rate/" class="internal-link">Erythrocyte Sedimentation Rate</a> (biomarker) - Non-specific inflammation marker co-monitored in IBD</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:31299865 - Curcumin effects on fecal calprotectin in IBD</li>
<li>PMID:30065775 - Omega-3 supplementation and intestinal inflammation markers</li>
<li>PMID:29532975 - Probiotics and fecal calprotectin in inflammatory bowel disease</li>
<li>PMID:28397648 - Fecal calprotectin in diagnosis and monitoring of IBD</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Calprotectin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}