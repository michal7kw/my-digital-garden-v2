---
created: '2026-02-13T19:00:14.314616Z'
description: Lactate Dehydrogenase is an intracellular enzyme found in virtually all
  body tissues that catalyzes the interconversion of lactate and pyruvate, serving
  as a nonspecific marker of tissue damage and cellular turnover.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/lactate-dehydrogenase/
slug: lactate-dehydrogenase
tags:
- biomarker
templateEngineOverride: njk
title: Lactate Dehydrogenase
type: biomarker
updated: '2026-02-13T19:00:14.314616Z'
---

{% raw %}
<h1>Lactate Dehydrogenase</h1>
<h2>Overview</h2>
<p>Lactate Dehydrogenase (LDH) is a cytoplasmic enzyme present in virtually all cells throughout the body. It catalyzes the reversible conversion of lactate to pyruvate with the concomitant interconversion of NADH and NAD+, a crucial step in anaerobic glycolysis and gluconeogenesis. Because LDH is ubiquitous, elevated serum levels are a nonspecific but sensitive indicator of tissue damage or increased cellular turnover.</p>
<p>LDH exists as five isoenzymes (LDH-1 through LDH-5), each a tetramer composed of varying ratios of H (heart) and M (muscle) subunits. The isoenzyme pattern can help localize the source of tissue damage: LDH-1 predominates in heart and red blood cells, LDH-2 in the reticuloendothelial system, LDH-3 in lung tissue, LDH-4 in kidney and pancreas, and LDH-5 in liver and skeletal muscle.</p>
<p>Clinically, LDH is elevated in a wide range of conditions including hemolytic anemias, megaloblastic anemia, myocardial infarction, liver disease (hepatitis, cirrhosis), muscle injury, pulmonary embolism, and malignancies (particularly lymphoma, leukemia, and germ cell tumors). In oncology, LDH is used as a tumor marker and prognostic indicator, as elevated levels reflect high tumor burden and rapid cell turnover.</p>
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
<td>&lt;120 U/L</td>
<td>Uncommon; may indicate certain genetic variants</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>140-280 U/L</td>
<td>No significant tissue damage</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;280 U/L</td>
<td>Tissue damage, hemolysis, malignancy, or other cellular injury</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>140-220 U/L</td>
<td>Healthy cellular turnover</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: U/L</li>
<li><strong>Sample Type</strong>: Serum (hemolysis-free specimen essential; hemolyzed samples give falsely elevated results)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; serial monitoring in malignancy, hemolytic conditions, or liver disease</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a class="internal-link is-unresolved" href="/404">N-Acetyl Cysteine</a> - May reduce LDH levels in liver conditions through glutathione replenishment and hepatoprotection (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/ldh/" class="internal-link">ldh</a> - Lactate dehydrogenase total activity (enzymatic assay)</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/alanine-transaminase/" class="internal-link">Alanine Transaminase</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/alanine-transaminase/" class="internal-link">Alanine Transaminase</a> (biomarker) - Both elevated in hepatocellular injury; ALT more liver-specific than LDH</li>
<li>→ <a href="/garden/dev_admin/biomarker/aspartate-aminotransferase/" class="internal-link">Aspartate Aminotransferase</a> (biomarker) - Both elevated in liver and muscle damage; AST/LDH ratio helps differentiate etiologies</li>
<li>→ <a href="/garden/dev_admin/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> (biomarker) - Both elevated in muscle injury and myocardial infarction; CK more specific for muscle</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:20424161 - Smilkstein MJ et al. N-Acetylcysteine in the treatment of hepatotoxicity. J Clin Gastroenterol. 2010.</li>
<li>PMID:16490595 - Heard KJ. Acetylcysteine for acetaminophen poisoning. N Engl J Med. 2008.</li>
<li>PMID:29434327 - Drent M et al. Usefulness of lactate dehydrogenase and its isoenzymes as indicators of lung damage or inflammation. Eur Respir J. 1996.</li>
<li>PMID:28373128 - Asghar U et al. The role of LDH as a tumor marker. Cancer Biomark. 2017.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Lactate Dehydrogenase]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}