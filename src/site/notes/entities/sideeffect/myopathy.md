---
created: '2026-04-17T18:59:21.020169Z'
description: Drug-induced muscle damage manifesting as myalgia, weakness, and elevated
  creatine kinase, most commonly associated with statin therapy through mitochondrial
  dysfunction and CoQ10 depletion, ranging from mild symptoms to life-threatening
  rhabdomyolysis.
dg-home: false
dg-publish: true
permalink: /entities/sideeffect/myopathy/
slug: myopathy
tags:
- sideeffect
- side_effect
- muscle
- statin
- mitochondria
- pharmacovigilance
templateEngineOverride: njk
title: Myopathy
type: sideeffect
updated: '2026-04-17T18:59:21.020169Z'
---

{% raw %}
<h1>Myopathy</h1>
<h2>Overview</h2>
<p>Drug-induced myopathy encompasses a spectrum of skeletal muscle disorders caused by medications, ranging from mild myalgia (muscle pain without CK elevation) through myositis (muscle inflammation with CK elevation) to rhabdomyolysis (severe muscle necrosis with massive CK elevation, myoglobinuria, and risk of acute kidney injury). Statin-associated muscle symptoms (SAMS) are by far the most clinically significant and common form, affecting an estimated 5-20% of statin users depending on diagnostic criteria, and representing the leading cause of statin discontinuation.</p>
<p><a href="/entities/drug/atorvastatin/" class="internal-link">Atorvastatin</a> and other HMG-CoA reductase inhibitors cause muscle damage through multiple proposed mechanisms. The most well-established is depletion of <a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> (ubiquinone), which shares the mevalonate biosynthetic pathway with cholesterol. By inhibiting HMG-CoA reductase, statins reduce not only cholesterol synthesis but also the production of downstream isoprenoid intermediates including CoQ10, dolichols, and isoprenylated proteins. CoQ10 depletion impairs mitochondrial electron transport chain function in skeletal muscle, reducing ATP production and increasing oxidative stress. Muscle tissue is particularly vulnerable due to its high energy demands and dependence on oxidative phosphorylation. Additional mechanisms include impaired isoprenylation of small GTPases (affecting membrane integrity and signal transduction), reduced selenoprotein synthesis, and altered calcium homeostasis via impaired prenylation of regulatory proteins.</p>
<p><a href="/entities/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> (CK) is the primary biomarker for monitoring drug-induced myopathy. Baseline CK measurement before statin initiation is recommended, and CK elevation greater than 10 times the upper limit of normal (typically &gt;2,000 U/L) with muscle symptoms defines rhabdomyolysis. Risk factors for statin myopathy include high statin dose, advanced age, female sex, low body mass index, hypothyroidism, renal impairment, and drug interactions (particularly CYP3A4 inhibitors such as clarithromycin, itraconazole, and grapefruit juice that increase statin plasma levels). Simvastatin 80 mg carries the highest myopathy risk among commonly used statins, leading to FDA restriction of this dose.</p>
<p>CoQ10 supplementation (100-200 mg/day) has been widely adopted as a preventive strategy for statin-induced myopathy, supported by biological plausibility and multiple (though not all) randomized controlled trials showing reduction in muscle symptoms. A meta-analysis of 12 RCTs found a statistically significant reduction in statin-associated myalgia with CoQ10 supplementation. Other management strategies include switching to a lower-risk statin (pravastatin, fluvastatin -- which do not undergo CYP3A4 metabolism), reducing dose, alternate-day dosing with long half-life statins (rosuvastatin), or switching to non-statin lipid-lowering therapies (ezetimibe, PCSK9 inhibitors).</p>
<h2>Key Mechanisms</h2>
<ul>
<li><strong>CoQ10 depletion</strong>: HMG-CoA reductase inhibition reduces mevalonate pathway flux, decreasing CoQ10 synthesis</li>
<li><strong>Mitochondrial dysfunction</strong>: Reduced CoQ10 impairs electron transport, decreasing ATP and increasing ROS</li>
<li><strong>Isoprenoid deficiency</strong>: Impaired prenylation of small GTPases (Rab, Rho) disrupts membrane trafficking and signaling</li>
<li><strong>Calcium dysregulation</strong>: Altered sarcoplasmic reticulum calcium handling increases muscle susceptibility</li>
<li><strong>Selenoprotein impairment</strong>: Reduced isopentenyl-tRNA synthesis may decrease selenoprotein expression</li>
<li><strong>Genetic susceptibility</strong>: SLCO1B1 c.521T&gt;C variant increases statin plasma levels and myopathy risk 4-17 fold</li>
</ul>
<h2>Myopathy Spectrum</h2>
<table>
<thead>
<tr>
<th>Severity</th>
<th>CK Level</th>
<th>Symptoms</th>
<th>Incidence (statins)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Myalgia</td>
<td>Normal</td>
<td>Pain, cramping, tenderness</td>
<td>5-20%</td>
</tr>
<tr>
<td>Myositis</td>
<td>3-10x ULN</td>
<td>Pain + weakness</td>
<td>0.5-1%</td>
</tr>
<tr>
<td>Severe myositis</td>
<td>10-50x ULN</td>
<td>Marked weakness, brown urine</td>
<td>0.1%</td>
</tr>
<tr>
<td>Rhabdomyolysis</td>
<td>&gt;50x ULN</td>
<td>AKI, DIC, life-threatening</td>
<td>0.01%</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<p>CAUSED_BY::<a href="/entities/drug/atorvastatin/" class="internal-link">Atorvastatin</a><br />
MITIGATED_BY::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
MONITORED_BY::<a href="/entities/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a><br />
MECHANISM_INVOLVES::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH::<a href="/entities/condition/myalgia/" class="internal-link">Myalgia</a><br />
ASSOCIATED_WITH::<a href="/entities/condition/myositis/" class="internal-link">Myositis</a><br />
RISK_FACTOR::<a class="internal-link is-unresolved" href="/404">Renal Disease</a></p>

{% endraw %}