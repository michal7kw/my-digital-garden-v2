---
created: '2026-02-13T19:27:03.610497Z'
description: Osteocalcin is a non-collagenous protein produced by osteoblasts that
  serves as a marker of bone formation. It also functions as a hormone affecting glucose
  metabolism and energy expenditure.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/osteocalcin/
slug: osteocalcin
tags:
- biomarker
templateEngineOverride: njk
title: Osteocalcin
type: biomarker
updated: '2026-02-13T19:27:03.610497Z'
---

{% raw %}
<h1>Osteocalcin</h1>
<h2>Overview</h2>
<p>Osteocalcin (also called bone Gla protein) is a small protein produced by osteoblasts during bone formation. It is the most abundant non-collagenous protein in bone matrix and is vitamin K-dependent, requiring carboxylation for full biological activity. Carboxylated osteocalcin binds to hydroxyapatite in bone matrix, while undercarboxylated osteocalcin is released into the circulation.</p>
<p>As a bone turnover marker, osteocalcin reflects the rate of bone formation and is used clinically to monitor osteoporosis treatment, assess fracture risk, and evaluate metabolic bone diseases. It is elevated in conditions with high bone turnover including osteoporosis, Paget's disease, hyperparathyroidism, and bone metastases. Osteocalcin levels follow a circadian rhythm with peak levels in the early morning.</p>
<p>Beyond its skeletal role, osteocalcin has emerged as an important endocrine hormone. Undercarboxylated osteocalcin stimulates insulin secretion from pancreatic beta cells, enhances insulin sensitivity in adipose tissue and muscle, and increases energy expenditure. This bone-pancreas axis has significant implications for understanding the metabolic benefits of exercise and the relationship between osteoporosis and type 2 diabetes.</p>
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
<td>14-42 ng/mL</td>
<td>Healthy adult male range</td>
</tr>
<tr>
<td><strong>Normal (Premenopausal Females)</strong></td>
<td>11-43 ng/mL</td>
<td>Healthy premenopausal female range</td>
</tr>
<tr>
<td><strong>Normal (Postmenopausal Females)</strong></td>
<td>15-46 ng/mL</td>
<td>Higher due to increased bone turnover</td>
</tr>
<tr>
<td><strong>Low</strong></td>
<td>Below age/sex-specific range</td>
<td>May indicate impaired bone formation</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>Above age/sex-specific range</td>
<td>Increased bone turnover; may indicate bone disease</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>Mid-range for age/sex</td>
<td>Balanced bone formation activity</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: True</li>
<li><strong>Recommended Test Frequency</strong>: As needed for bone health assessment; every 3-6 months during osteoporosis treatment</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/vitamin-k2/" class="internal-link">Vitamin K2</a> - Increases carboxylation of osteocalcin, improving bone matrix binding (moderate, evidence level 2)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> - Increases osteocalcin production by stimulating osteoblast activity (moderate, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/osteocalcin/" class="internal-link">osteocalcin</a> - Total osteocalcin measurement</li>
<li><a class="internal-link is-unresolved" href="/404">undercarboxylated osteocalcin</a> - Reflects vitamin K status</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/calcium/" class="internal-link">Calcium</a> (biomarker) - Co-regulated in bone metabolism</li>
<li>→ <a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> (biomarker) - Vitamin D stimulates osteocalcin gene expression</li>
<li>→ <a href="/garden/dev_admin/biomarker/alkaline-phosphatase/" class="internal-link">Alkaline Phosphatase</a> (biomarker) - Co-elevated in high bone turnover states</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:25516361 - Vitamin K2 supplementation and osteocalcin carboxylation</li>
<li>PMID:22536767 - Vitamin D supplementation effects on osteocalcin levels</li>
<li>PMID:23717318 - Osteocalcin as an endocrine hormone affecting glucose metabolism</li>
<li>PMID:27424088 - Osteocalcin in metabolic regulation review</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Osteocalcin]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}