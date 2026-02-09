---
created: '2026-02-09T05:54:31.778047Z'
description: Iron deficiency indicated by low ferritin, elevated TIBC, and low transferrin
  saturation. Most common nutritional deficiency worldwide.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/iron-deficiency-pattern/
slug: iron-deficiency-pattern
tags:
- clinicalpattern
- clinical_pattern
- nutritional
- iron
- anemia
- hematologic
templateEngineOverride: njk
title: Iron Deficiency Pattern
type: clinicalpattern
updated: '2026-02-09T05:54:31.778047Z'
---

{% raw %}
<h1>Iron Deficiency Pattern</h1>
<h2>Overview</h2>
<p>Iron Deficiency is the most common nutritional deficiency worldwide, affecting approximately 30% of the global population. It can progress from iron depletion to iron-deficient erythropoiesis to iron deficiency anemia.</p>
<p>Evidence Level: 5/5 (Well-established diagnostic criteria)<br />
Risk Multiplier: 1.3x for anemia-related complications</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>Ferritin</strong>: Storage iron (&lt; 30 ng/mL indicates depletion)</li>
<li><strong>TIBC (Total Iron Binding Capacity)</strong>: Elevated (&gt; 400 ug/dL) when iron deficient</li>
<li><strong>Transferrin Saturation</strong>: &lt; 20% indicates functional deficiency</li>
</ul>
<h2>Stages of Iron Deficiency</h2>
<ol>
<li><strong>Iron Depletion</strong>: Low ferritin, normal hemoglobin</li>
<li><strong>Iron-Deficient Erythropoiesis</strong>: Low ferritin, low transferrin sat, normal Hgb</li>
<li><strong>Iron Deficiency Anemia</strong>: Low ferritin, low Hgb, microcytic RBCs</li>
</ol>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::[[Ferritin]]</li>
<li>REQUIRES_BIOMARKER::[[TIBC]]</li>
<li>REQUIRES_BIOMARKER::[[Transferrin Saturation]]</li>
<li>INCREASES_RISK_FOR::[[Iron Deficiency Anemia]]</li>
<li>INCREASES_RISK_FOR::[[Restless Leg Syndrome]]</li>
<li>AFFECTS_ORGAN::[[Bone Marrow]]</li>
<li>AFFECTS_ORGAN::[[Brain]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Iron Bisglycinate]]</li>
<li>IMPROVED_BY_SUPPLEMENT::[[Vitamin C]]</li>
<li>MODULATED_BY_PATHWAY::[[Iron Metabolism]]</li>
</ul>
<h2>References</h2>
<ul>
<li>Camaschella C. Iron-Deficiency Anemia. New England Journal of Medicine. 2015</li>
<li>WHO Guidelines on Daily Iron Supplementation. 2016</li>
</ul>

{% endraw %}