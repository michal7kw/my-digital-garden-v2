---
created: '2026-04-17T18:59:20.822653Z'
description: Family of FAD-dependent enzymes catalyzing the first step of each beta-oxidation
  cycle. Introduces a trans double bond in the fatty acyl-CoA chain, producing enoyl-CoA
  and transferring electrons to the ETC via ETF/ETFQO.
dg-home: false
dg-publish: true
permalink: /entities/protein/acyl-coa-dehydrogenase/
slug: acyl-coa-dehydrogenase
tags:
- protein
- enzyme
- beta-oxidation
- energy-metabolism
templateEngineOverride: njk
title: Acyl-CoA Dehydrogenase
type: protein
updated: '2026-04-17T18:59:20.822653Z'
---

{% raw %}
<h1>Acyl-CoA Dehydrogenase</h1>
<h2>Overview</h2>
<p>Acyl-CoA dehydrogenases (ACADs) catalyze the first reaction of each <a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> cycle, oxidizing <a class="internal-link is-unresolved" href="/404">Fatty Acyl-CoA</a> to <a class="internal-link is-unresolved" href="/404">Enoyl-CoA</a> while producing <a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a>. Multiple chain-length-specific isoforms ensure efficient processing of fatty acids of all lengths.</p>
<h2>Isoforms</h2>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Gene</th>
<th>Chain Length</th>
<th>Disease</th>
</tr>
</thead>
<tbody>
<tr>
<td>VLCAD</td>
<td>ACADVL</td>
<td>C14-C20</td>
<td>VLCAD deficiency</td>
</tr>
<tr>
<td>LCAD</td>
<td>ACADL</td>
<td>C12-C18</td>
<td>Rare</td>
</tr>
<tr>
<td>MCAD</td>
<td>ACADM</td>
<td>C6-C12</td>
<td>MCAD deficiency (most common FAOD)</td>
</tr>
<tr>
<td>SCAD</td>
<td>ACADS</td>
<td>C4-C6</td>
<td>SCAD deficiency</td>
</tr>
</tbody>
</table>
<h2>Mechanism of Action</h2>
<ul>
<li><strong>Oxidation</strong>: Fatty acyl-CoA → trans-Δ2-<a class="internal-link is-unresolved" href="/404">Enoyl-CoA</a> (introduces C2=C3 double bond)</li>
<li><strong>Electron transfer</strong>: FAD → FADH2 → ETF → ETFQO → ubiquinone pool → <a href="/entities/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></li>
<li><strong>Each cycle</strong>: Produces 1 FADH2 (≈1.5 ATP via ETC)</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>MCAD deficiency</strong> is the most common fatty acid oxidation disorder (1:10,000-20,000), presenting with hypoketotic hypoglycemia during fasting</li>
<li>Newborn screening detects MCAD deficiency via acylcarnitine profiling (elevated C8)</li>
<li><a href="/entities/supplement/l-carnitine/" class="internal-link">L-Carnitine</a> and avoidance of fasting are mainstays of treatment</li>
</ul>
<h2>Relationships</h2>
<h3>Catalyzes</h3>
<p>CATALYZES::<a class="internal-link is-unresolved" href="/404">Fatty_Acyl-CoA</a><br />
CATALYZES::<a class="internal-link is-unresolved" href="/404">Enoyl-CoA</a></p>
<h3>Participates In Pathway</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/electron-transport-chain/" class="internal-link">Electron_Transport_Chain</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a></p>

{% endraw %}