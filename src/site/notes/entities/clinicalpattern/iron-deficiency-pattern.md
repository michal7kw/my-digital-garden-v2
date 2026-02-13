---
created: '2026-02-13T14:57:56.099100Z'
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
updated: '2026-02-13T14:57:56.099100Z'
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
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">Ferritin</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/tibc/" class="internal-link">TIBC</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/biomarker/transferrin-saturation/" class="internal-link">Transferrin Saturation</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/iron-deficiency-anemia/" class="internal-link">Iron Deficiency Anemia</a></li>
<li>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Restless Leg Syndrome</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Bone Marrow</a></li>
<li>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Brain</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Iron Bisglycinate</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/vitamin-c/" class="internal-link">Vitamin C</a></li>
<li>MODULATED_BY_PATHWAY::<a class="internal-link is-unresolved" href="/404">Iron Metabolism</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Camaschella C. Iron-Deficiency Anemia. New England Journal of Medicine. 2015</li>
<li>WHO Guidelines on Daily Iron Supplementation. 2016</li>
</ul>

{% endraw %}