---
created: '2026-04-17T18:59:17.456566Z'
description: Mitochondrial process coupling electron transport through respiratory
  chain complexes I-IV to ATP synthesis via chemiosmotic proton gradient, producing
  approximately 30-32 ATP per glucose molecule.
dg-home: false
dg-publish: true
permalink: /entities/biologicalprocess/oxidative-phosphorylation/
slug: oxidative-phosphorylation
tags:
- biologicalprocess
- biological_process
- mitochondria
- energy_metabolism
- electron_transport
- atp_synthesis
templateEngineOverride: njk
title: Oxidative Phosphorylation
type: biologicalprocess
updated: '2026-04-17T18:59:17.456566Z'
---

{% raw %}
<h1>Oxidative Phosphorylation</h1>
<h2>Overview</h2>
<p>Oxidative phosphorylation (OXPHOS) is the metabolic process by which cells generate the vast majority of their ATP, occurring in the inner mitochondrial membrane of eukaryotic cells. It couples the transfer of electrons from NADH and FADH2 through the electron transport chain (ETC) to the generation of a proton electrochemical gradient across the inner mitochondrial membrane, which drives ATP synthase (Complex V) to phosphorylate ADP to ATP. Under aerobic conditions, OXPHOS produces approximately 30-32 ATP per glucose molecule, compared to just 2 ATP from glycolysis alone, making it the dominant energy-producing pathway in most human tissues.</p>
<p>The electron transport chain consists of four large multi-subunit protein complexes embedded in the inner mitochondrial membrane. <a href="/entities/protein/complex-i/" class="internal-link">Complex I</a> (NADH:ubiquinone oxidoreductase) accepts electrons from NADH and transfers them to ubiquinone (<a class="internal-link is-unresolved" href="/404">CoQ10</a>) while pumping 4 protons across the membrane. <a href="/entities/protein/complex-ii/" class="internal-link">Complex II</a> (succinate dehydrogenase) accepts electrons from FADH2 via succinate oxidation and passes them to CoQ10 without proton pumping. Complex III (cytochrome bc1) transfers electrons from reduced CoQ10 to <a href="/entities/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, pumping 4 protons. Complex IV (cytochrome c oxidase) completes the chain by transferring electrons from cytochrome c to molecular oxygen, forming water and pumping 2 protons. The cumulative proton gradient (proton-motive force) drives ATP synthase, a remarkable molecular rotary motor.</p>
<p><a href="/entities/ubiquinone/coq10/" class="internal-link">CoQ10</a> (ubiquinone) serves as a mobile electron carrier between Complexes I/II and Complex III, and its role as both an electron shuttle and a lipid-soluble antioxidant makes it clinically significant. CoQ10 supplementation is widely used for conditions associated with mitochondrial dysfunction, including heart failure, statin-induced myopathy, and neurodegenerative diseases. <a class="internal-link is-unresolved" href="/404">NAD</a> (nicotinamide adenine dinucleotide) is the primary electron donor to Complex I, and maintaining adequate NAD+ levels is essential for efficient OXPHOS. Declining NAD+ levels with age are hypothesized to contribute to age-related mitochondrial dysfunction.</p>
<p>Dysfunction of oxidative phosphorylation is implicated in a remarkably wide range of diseases. Primary mitochondrial diseases, caused by mutations in either mitochondrial DNA or nuclear genes encoding ETC subunits, affect approximately 1 in 5,000 individuals and present with multi-system involvement (myopathy, encephalopathy, lactic acidosis). Secondary OXPHOS dysfunction contributes to aging, neurodegeneration (Parkinson's disease involves Complex I deficiency), heart failure, diabetes, and cancer. Reactive oxygen species (ROS), generated as byproducts of electron leakage primarily at Complexes I and III, can cause oxidative damage to mitochondrial DNA, proteins, and lipids, creating a vicious cycle of mitochondrial deterioration.</p>
<h2>Key Mechanisms</h2>
<ul>
<li><strong>Electron transport</strong>: NADH and FADH2 donate electrons through Complexes I-IV to molecular oxygen</li>
<li><strong>Proton pumping</strong>: Complexes I, III, and IV translocate protons from matrix to intermembrane space</li>
<li><strong>Chemiosmotic coupling</strong>: Proton-motive force drives ATP synthase (Complex V) rotary catalysis</li>
<li><strong>CoQ10 shuttle</strong>: Mobile carrier transferring electrons from Complex I/II to Complex III</li>
<li><strong>Cytochrome c shuttle</strong>: Soluble carrier transferring electrons from Complex III to Complex IV</li>
<li><strong>ROS generation</strong>: Superoxide produced at Complexes I and III as unavoidable byproduct</li>
</ul>
<h2>ETC Complexes</h2>
<table>
<thead>
<tr>
<th>Complex</th>
<th>Name</th>
<th>Electrons From</th>
<th>Protons Pumped</th>
<th>Key Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>NADH dehydrogenase</td>
<td>NADH</td>
<td>4 H+</td>
<td>Largest complex; Parkinson's link</td>
</tr>
<tr>
<td>II</td>
<td>Succinate dehydrogenase</td>
<td>FADH2</td>
<td>0</td>
<td>Also TCA cycle enzyme</td>
</tr>
<tr>
<td>III</td>
<td>Cytochrome bc1</td>
<td>CoQH2</td>
<td>4 H+</td>
<td>Q-cycle mechanism</td>
</tr>
<tr>
<td>IV</td>
<td>Cytochrome c oxidase</td>
<td>Cyt c</td>
<td>2 H+</td>
<td>Final O2 reduction to H2O</td>
</tr>
<tr>
<td>V</td>
<td>ATP synthase</td>
<td>--</td>
<td>Uses gradient</td>
<td>Rotary molecular motor</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<p>OCCURS_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
INVOLVES::<a href="/entities/protein/complex-i/" class="internal-link">Complex I</a><br />
INVOLVES::<a href="/entities/protein/complex-ii/" class="internal-link">Complex II</a><br />
INVOLVES::<a href="/entities/protein/cytochrome-c/" class="internal-link">Cytochrome C</a><br />
INVOLVES::<a class="internal-link is-unresolved" href="/404">CoQ10</a><br />
REQUIRES::<a class="internal-link is-unresolved" href="/404">NAD</a><br />
PRODUCES::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
IMPAIRED_IN::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
DOWNSTREAM_OF::<a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a></p>
<h3>Merged From pathway</h3>
<p>ASSOCIATED_WITH::<a href="/entities/biomarker/8-ohdg/" class="internal-link">8-OHdG</a><br />
ASSOCIATED_WITH::<a href="/entities/biomarker/nad/" class="internal-link">NAD+</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/parkinsons-disease/" class="internal-link">Parkinson's Disease</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/l-carnitine/" class="internal-link">L-Carnitine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/nmn/" class="internal-link">NMN</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/pqq/" class="internal-link">PQQ</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
RELATED::<a href="/entities/pathway/alpha-synuclein-aggregation/" class="internal-link">Alpha-Synuclein Aggregation</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">CoQ10</a><br />
RELATED::<a href="/entities/supplement/creatine/" class="internal-link">Creatine</a><br />
RELATED::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED::<a href="/entities/supplement/nmn/" class="internal-link">NMN</a><br />
RELATED::<a href="/entities/metabolite/nicotinamide-riboside/" class="internal-link">Nicotinamide Riboside</a><br />
RELATED::<a href="/entities/supplement/pqq/" class="internal-link">PQQ</a></p>

{% endraw %}