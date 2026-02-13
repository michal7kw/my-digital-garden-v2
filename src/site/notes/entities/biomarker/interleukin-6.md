---
created: '2026-02-13T19:27:03.524588Z'
description: Interleukin-6 is a pleiotropic pro-inflammatory cytokine and key mediator
  of the acute-phase inflammatory response, produced by T cells, macrophages, and
  endothelial cells.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/interleukin-6/
slug: interleukin-6
tags:
- biomarker
templateEngineOverride: njk
title: Interleukin 6
type: biomarker
updated: '2026-02-13T19:27:03.524588Z'
---

{% raw %}
<h1>Interleukin 6</h1>
<h2>Overview</h2>
<p>Interleukin-6 (IL-6) is a pleiotropic cytokine with diverse roles in immune regulation, inflammation, hematopoiesis, and metabolism. It is produced by a wide range of cell types including T cells, B cells, monocytes, macrophages, fibroblasts, and endothelial cells. IL-6 is a central mediator of the acute-phase response, stimulating the liver to produce C-reactive protein, fibrinogen, and other acute-phase reactants.</p>
<p>IL-6 signaling occurs through two pathways: classical signaling via the membrane-bound IL-6 receptor (anti-inflammatory, regenerative) and trans-signaling via the soluble IL-6 receptor (pro-inflammatory). Dysregulation of IL-6 signaling is implicated in chronic inflammatory conditions, autoimmune diseases, cardiovascular disease, certain cancers, and cytokine storm syndromes.</p>
<p>Clinically, IL-6 measurement is used to assess the severity of systemic inflammation, monitor response to anti-inflammatory therapies, and guide treatment in conditions such as sepsis, rheumatoid arthritis, and cytokine release syndrome. IL-6 levels rise rapidly in acute inflammation (within 2-4 hours), making it an earlier marker than CRP.</p>
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
<td>&lt;1.5 pg/mL</td>
<td>Minimal inflammation</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>&lt;7 pg/mL</td>
<td>No significant systemic inflammation</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;7 pg/mL</td>
<td>Active inflammatory process</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;3 pg/mL</td>
<td>Low inflammatory burden</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: pg/mL</li>
<li><strong>Sample Type</strong>: Serum</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As needed; useful for monitoring chronic inflammatory conditions</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/dev_admin/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Decreases IL-6 production through resolution of inflammation pathways (moderate, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/curcumin/" class="internal-link">Curcumin</a> - Decreases IL-6 by inhibiting NF-kB signaling pathway (moderate, evidence level 3)</li>
<li><a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a> - Decreases IL-6 in vitamin D deficient populations through immunomodulation (mild, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtest/interleukin-6/" class="internal-link">interleukin 6</a> - IL-6 immunoassay (ELISA or chemiluminescence)</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/dev_admin/labtestpanel/advanced-inflammation-panel/" class="internal-link">advanced inflammation panel</a> (labtestpanel) - Includes IL-6 in comprehensive cytokine assessment</li>
</ul>
<h2>Relationships</h2>
<h3>Activates</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker)</li>
<li>→ <a href="/garden/dev_admin/labtest/fibrinogen/" class="internal-link">Fibrinogen</a> (biomarker)</li>
</ul>
<h3>Correlations</h3>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/hs-crp/" class="internal-link">Hs Crp</a> (biomarker) - IL-6 stimulates hepatic CRP production; IL-6 rises earlier in acute inflammation</li>
<li>→ <a href="/garden/dev_admin/labtest/tnf-alpha/" class="internal-link">TNF Alpha</a> (biomarker) - Co-regulated pro-inflammatory cytokines; TNF-alpha stimulates IL-6 production</li>
<li>→ <a href="/garden/dev_admin/labtest/fibrinogen/" class="internal-link">Fibrinogen</a> (biomarker) - IL-6 drives hepatic fibrinogen synthesis as part of acute-phase response</li>
</ul>
<h2>References</h2>
<ul>
<li>PMID:28900017 - Calder PC. Omega-3 fatty acids and inflammatory processes: from molecules to man. Biochem Soc Trans. 2017.</li>
<li>PMID:27392742 - Sahebkar A et al. Effect of curcuminoids on inflammatory markers: a systematic review and meta-analysis. Crit Rev Food Sci Nutr. 2016.</li>
<li>PMID:30675873 - Aranow C. Vitamin D and the immune system. J Investig Med. 2019.</li>
<li>PMID:22317966 - Li K et al. Effect of marine-derived n-3 polyunsaturated fatty acids on C-reactive protein, interleukin 6 and tumor necrosis factor alpha. PLoS One. 2014.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Interleukin 6]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}