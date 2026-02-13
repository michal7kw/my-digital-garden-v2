---
created: '2026-02-13T19:38:05.185353Z'
description: Elevated liver enzymes indicating hepatocyte damage or stress. May suggest
  fatty liver disease, medication toxicity, or other hepatic conditions.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/liver-stress-pattern/
slug: liver-stress-pattern
tags:
- clinicalpattern
- clinical_pattern
- hepatic
- liver
- enzymes
- nafld
templateEngineOverride: njk
title: Liver Stress Pattern
type: clinicalpattern
updated: '2026-02-13T19:38:05.185353Z'
---

{% raw %}
<h1>Liver Stress Pattern</h1>
<h2>Overview</h2>
<p>The Liver Stress Pattern identifies individuals with elevated liver enzymes, indicating hepatocyte damage or stress. This pattern can be caused by fatty liver disease (NAFLD/NASH), alcohol consumption, medications, or viral hepatitis.</p>
<p>Evidence Level: 4/5 (Well-established clinical markers)<br />
Risk Multiplier: 1.8x for liver disease progression</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>ALT (Alanine Aminotransferase)</strong>: Primary liver enzyme (&gt; 40 U/L elevated)</li>
<li><strong>AST (Aspartate Aminotransferase)</strong>: Liver and muscle enzyme (&gt; 40 U/L elevated)</li>
<li><strong>GGT (Gamma-Glutamyl Transferase)</strong>: Biliary enzyme (&gt; 60 U/L elevated)</li>
<li><strong>AST/ALT Ratio</strong>: &gt; 2.0 suggests alcoholic liver disease</li>
</ul>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/alt/" class="internal-link">ALT</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/ast/" class="internal-link">AST</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/ggt/" class="internal-link">GGT</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/non-alcoholic-fatty-liver-disease/" class="internal-link">Non-Alcoholic Fatty Liver Disease</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Cirrhosis</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Liver</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Gallbladder</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Milk Thistle</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">N-Acetyl Cysteine</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/vitamin-e/" class="internal-link">Vitamin E</a></li>
<li>RELATED_PATTERN::<a href="/garden/dev_admin/condition/metabolic-syndrome/" class="internal-link">Metabolic Syndrome</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Chalasani N, et al. AASLD Practice Guidance on Diagnosis and Management of NAFLD. Hepatology. 2018</li>
<li>European Association for Study of Liver. EASL Clinical Practice Guidelines on NAFLD. J Hepatol. 2016</li>
</ul>

{% endraw %}