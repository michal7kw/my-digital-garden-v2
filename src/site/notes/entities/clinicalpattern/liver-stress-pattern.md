---
created: '2026-02-09T05:54:31.780159Z'
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
updated: '2026-02-09T05:54:31.780159Z'
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
<li>REQUIRES_BIOMARKER::[[ALT]]</li>
<li>REQUIRES_BIOMARKER::[[AST]]</li>
<li>REQUIRES_BIOMARKER::[[GGT]]</li>
<li>INCREASES_RISK_FOR::[[Non-Alcoholic Fatty Liver Disease]]</li>
<li>INCREASES_RISK_FOR::[[Cirrhosis]]</li>
<li>AFFECTS_ORGAN::[[Liver]]</li>
<li>AFFECTS_ORGAN::[[Gallbladder]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Milk Thistle]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[N-Acetyl Cysteine]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Vitamin E]]</li>
<li>RELATED_PATTERN::[[Metabolic Syndrome]]</li>
</ul>
<h2>References</h2>
<ul>
<li>Chalasani N, et al. AASLD Practice Guidance on Diagnosis and Management of NAFLD. Hepatology. 2018</li>
<li>European Association for Study of Liver. EASL Clinical Practice Guidelines on NAFLD. J Hepatol. 2016</li>
</ul>

{% endraw %}