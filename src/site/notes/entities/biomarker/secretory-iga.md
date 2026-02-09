---
created: '2026-02-09T08:04:39.973793Z'
description: Secretory Immunoglobulin A is the predominant antibody in mucosal secretions,
  forming the first line of immune defense in the gut, respiratory tract, and other
  mucosal surfaces. It prevents pathogen adherence and neutralizes toxins without
  triggering inflammatory responses.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/secretory-iga/
slug: secretory-iga
tags:
- biomarker
templateEngineOverride: njk
title: Secretory IgA
type: biomarker
updated: '2026-02-09T08:04:39.973793Z'
---

{% raw %}
<h1>Secretory IgA</h1>
<h2>Overview</h2>
<p>Secretory Immunoglobulin A (sIgA) is a dimeric antibody that constitutes the first line of adaptive immune defense at mucosal surfaces. Produced by plasma cells in the lamina propria of the gut, respiratory tract, urogenital tract, and other mucosal tissues, sIgA is transported across epithelial cells and released into the lumen where it performs immune exclusion - binding pathogens, toxins, and antigens to prevent their adherence to and penetration of mucosal epithelium.</p>
<p>Unlike IgG-mediated immunity, sIgA provides &quot;non-inflammatory&quot; immune protection. It neutralizes pathogens and toxins without activating complement or triggering inflammation, making it essential for maintaining mucosal homeostasis. Approximately 3-5 grams of sIgA are secreted into the gut lumen daily, making it the most abundantly produced antibody in the body.</p>
<p>Low sIgA levels indicate compromised mucosal immunity and are associated with increased susceptibility to gastrointestinal infections, food sensitivities, and autoimmune conditions. Chronic stress is a well-established suppressor of sIgA production. Fecal sIgA measurement is commonly included in comprehensive stool analyses and provides insight into gut immune function.</p>
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
<td>&lt;51 mg/dL (stool)</td>
<td>Compromised mucosal immunity</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>51-204 mg/dL (stool)</td>
<td>Adequate mucosal defense</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;204 mg/dL (stool)</td>
<td>Active mucosal immune response</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>100-200 mg/dL</td>
<td>Robust mucosal immunity</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mg/dL (stool) or mg/L (saliva)</li>
<li><strong>Sample Type</strong>: Stool (preferred) or saliva</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually or when GI symptoms present</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/probiotics/" class="internal-link">Probiotics</a> - Increases sIgA by stimulating mucosal immune cells (moderate effect, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Glutamine</a> - Supports mucosal cell integrity and sIgA production (mild effect, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Vitamin A</a> - Essential for mucosal immunity and IgA class switching (mild effect, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Colostrum</a> - Contains sIgA and stimulates endogenous production (moderate effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/gi-map/" class="internal-link">gi map</a> - Includes fecal sIgA in comprehensive stool analysis</li>
<li><a href="/garden/dev_admin/labtest/thorne-gut-health/" class="internal-link">thorne gut health</a> - Includes sIgA measurement</li>
<li>Salivary sIgA test - Non-invasive saliva-based measurement</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/zonulin/" class="internal-link">Zonulin</a> (biomarker) - Gut permeability affects mucosal immune function</li>
<li>→ <a href="/garden/dev_admin/biomarker/calprotectin/" class="internal-link">Calprotectin</a> (biomarker) - Both reflect gut immune status</li>
<li>→ <a href="/garden/dev_admin/labtest/cortisol/" class="internal-link">Cortisol</a> (biomarker) - Chronic elevated cortisol suppresses sIgA</li>
</ul>
<h3>Related Conditions</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/iga-deficiency/" class="internal-link">IgA Deficiency</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/inflammatory-bowel-disease/" class="internal-link">Inflammatory Bowel Disease</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/celiac-disease/" class="internal-link">Celiac Disease</a> (condition)</li>
<li>→ <a href="/garden/dev_admin/condition/recurrent-infections/" class="internal-link">Recurrent Infections</a> (condition)</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:25268742 - Mantis et al. (2011) Secretory IgA's complex roles at mucosal surfaces</li>
<li>PMID:18806122 - Gleeson et al. (2011) Exercise, nutrition and immune function</li>
<li>PMID:11157326 - Mora et al. (2006) Role of retinoic acid in IgA production</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Secretory IgA]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}