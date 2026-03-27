---
created: '2026-03-27T09:46:14.290018Z'
description: Cytochrome P450 2C19, a polymorphic drug-metabolizing enzyme critical
  for the metabolism of proton pump inhibitors (omeprazole, pantoprazole) and the
  bioactivation of clopidogrel. Poor metabolizers have increased PPI exposure and
  critically reduced clopidogrel efficacy, with major implications for cardiovascular
  outcomes.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/protein/cyp2c19/
slug: cyp2c19
tags:
- protein
- drug_metabolism
- liver
- pharmacogenomics
- cyp450
templateEngineOverride: njk
title: CYP2C19
type: protein
updated: '2026-03-27T09:46:14.290018Z'
---

{% raw %}
<h1>CYP2C19</h1>
<h2>Overview</h2>
<p>CYP2C19 is a clinically significant cytochrome P450 enzyme that metabolizes approximately 10% of commonly prescribed drugs. Its importance lies in two critical drug classes: proton pump inhibitors (PPIs) and the antiplatelet agent clopidogrel. For clopidogrel (a prodrug), CYP2C19 is required for bioactivation — poor metabolizers cannot convert it to its active thiol metabolite, resulting in inadequate antiplatelet effect and increased risk of cardiovascular events.</p>
<p>The FDA has issued a boxed warning on clopidogrel regarding CYP2C19 poor metabolizer status. Pharmacogenomic testing for CYP2C19 is one of the most actionable genetic tests in clinical medicine.</p>
<h2>Key Substrates</h2>
<ul>
<li><strong>PPIs</strong>: Omeprazole, lansoprazole, pantoprazole (partial)</li>
<li><strong>Antiplatelet</strong>: Clopidogrel (prodrug activation — critical)</li>
<li><strong>Antidepressants</strong>: Citalopram, escitalopram, amitriptyline, clomipramine</li>
<li><strong>Antifungals</strong>: Voriconazole</li>
<li><strong>Other</strong>: Diazepam, phenytoin (partial)</li>
</ul>
<h2>Metabolizer Phenotypes</h2>
<table>
<thead>
<tr>
<th>Phenotype</th>
<th>Frequency</th>
<th>Clopidogrel Impact</th>
<th>PPI Impact</th>
</tr>
</thead>
<tbody>
<tr>
<td>Poor (PM)</td>
<td>2-5% Caucasian, 15-20% Asian</td>
<td>Inadequate activation → treatment failure</td>
<td>Excessive exposure → more acid suppression</td>
</tr>
<tr>
<td>Intermediate (IM)</td>
<td>18-45%</td>
<td>Reduced activation</td>
<td>Moderate increase</td>
</tr>
<tr>
<td>Extensive (EM)</td>
<td>35-50%</td>
<td>Normal</td>
<td>Normal</td>
</tr>
<tr>
<td>Ultra-rapid (UM)</td>
<td>5-30%</td>
<td>Enhanced activation</td>
<td>Rapid clearance → may need higher PPI dose</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Clopidogrel + CYP2C19 PM</strong>: FDA boxed warning — consider alternative antiplatelet (prasugrel, ticagrelor)</li>
<li><strong>Omeprazole + CYP2C19 inhibitors</strong>: Increased PPI levels, potential for interaction with clopidogrel</li>
<li><strong>Voriconazole</strong>: Poor metabolizers have 4x higher exposure — dose reduction required</li>
</ul>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/dev_admin/gene/cyp3a4/" class="internal-link">CYP3A4</a><br />
RELATED::<a href="/garden/dev_admin/drug/omeprazole/" class="internal-link">Omeprazole</a><br />
RELATED::<a href="/garden/dev_admin/organ/liver/" class="internal-link">Liver</a></p>
<h2>References</h2>
<ul>
<li>Scott SA et al. Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19 genotype and clopidogrel therapy. Clin Pharmacol Ther. 2013;94(3):317-323. PMID:23698643</li>
<li>Desta Z et al. Clinical significance of the cytochrome P450 2C19 genetic polymorphism. Clin Pharmacokinet. 2002;41(12):913-958. PMID:12222994</li>
</ul>

{% endraw %}