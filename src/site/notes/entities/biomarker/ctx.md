---
created: '2026-02-09T08:04:39.861067Z'
description: C-terminal telopeptide of type I collagen is a degradation product released
  during bone resorption. It is the preferred marker for monitoring anti-resorptive
  therapy efficacy in osteoporosis treatment.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/ctx/
slug: ctx
tags:
- biomarker
templateEngineOverride: njk
title: CTX
type: biomarker
updated: '2026-02-09T08:04:39.861067Z'
---

{% raw %}
<h1>CTX</h1>
<h2>Overview</h2>
<p>C-terminal telopeptide (CTX), also known as beta-CrossLaps, is a degradation fragment of type I collagen released during osteoclast-mediated bone resorption. Type I collagen constitutes approximately 90% of bone organic matrix, and its breakdown products serve as reliable indicators of bone resorption rate.</p>
<p>CTX is the preferred bone resorption marker recommended by the International Osteoporosis Foundation (IOF) and the International Federation of Clinical Chemistry (IFCC) for monitoring anti-resorptive therapy. It is particularly useful for assessing response to bisphosphonates, denosumab, and hormone replacement therapy. A significant decrease in CTX (typically &gt;25-30% from baseline) within 3-6 months of starting treatment confirms therapeutic efficacy.</p>
<p>CTX levels exhibit significant pre-analytical variability. A strong circadian rhythm causes peak levels in the early morning with a nadir in the afternoon. Fasting is required because food intake causes an acute decrease in CTX levels. For these reasons, samples should be collected in the fasting state before 10 AM for consistent and comparable results. CTX is also influenced by renal function, as it is cleared by the kidneys.</p>
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
<td><strong>Normal (Males)</strong></td>
<td>&lt;584 pg/mL</td>
<td>Healthy adult male range</td>
</tr>
<tr>
<td><strong>Normal (Premenopausal Females)</strong></td>
<td>&lt;573 pg/mL</td>
<td>Healthy premenopausal female range</td>
</tr>
<tr>
<td><strong>Normal (Postmenopausal Females)</strong></td>
<td>&lt;1008 pg/mL</td>
<td>Higher due to increased bone resorption</td>
</tr>
<tr>
<td><strong>Low</strong></td>
<td>Significantly below normal</td>
<td>May indicate over-suppression of bone turnover (bisphosphonate use)</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>Above age/sex-specific range</td>
<td>Accelerated bone loss; increased fracture risk</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>Lower half of normal range</td>
<td>Controlled bone resorption</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: pg/mL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: True (morning collection before 10 AM required)</li>
<li><strong>Recommended Test Frequency</strong>: Every 3-6 months during osteoporosis treatment; baseline and follow-up</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a> - Decreases bone resorption markers including CTX (moderate, evidence level 2)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> - Decreases CTX by improving calcium homeostasis and reducing secondary hyperparathyroidism (moderate, evidence level 2)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/ctx/" class="internal-link">ctx</a> - C-terminal telopeptide measurement (beta-CrossLaps)</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/osteocalcin/" class="internal-link">Osteocalcin</a> (biomarker) - Formation/resorption ratio assessment in bone turnover</li>
<li>→ <a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a> (biomarker) - Calcium homeostasis affects bone resorption rate</li>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> (biomarker) - Vitamin D deficiency causes secondary hyperparathyroidism and increased CTX</li>
<li>→ <a href="/garden/dev_admin/biomarker/alkaline-phosphatase/" class="internal-link">Alkaline Phosphatase</a> (biomarker) - Co-elevated in high bone turnover states</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:17513446 - Calcium supplementation effects on bone resorption markers</li>
<li>PMID:22536767 - Vitamin D effects on bone turnover markers</li>
<li>PMID:22290186 - IOF/IFCC recommendations for bone turnover marker use</li>
<li>PMID:25825574 - CTX as a monitoring tool for osteoporosis treatment</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CTX]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}