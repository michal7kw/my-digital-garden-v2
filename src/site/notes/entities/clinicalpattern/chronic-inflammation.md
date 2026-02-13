---
created: '2026-02-13T17:51:31.612813Z'
description: Persistent low-grade inflammation indicated by elevated inflammatory
  biomarkers. Associated with accelerated aging and chronic disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/clinicalpattern/chronic-inflammation/
slug: chronic-inflammation
tags:
- clinicalpattern
- clinical_pattern
- inflammation
- cardiovascular
- aging
- autoimmune
templateEngineOverride: njk
title: Chronic Inflammation
type: clinicalpattern
updated: '2026-02-13T17:51:31.612813Z'
---

{% raw %}
<h1>Chronic Inflammation</h1>
<h2>Overview</h2>
<p>Chronic Inflammation is a persistent, low-grade inflammatory state that accelerates aging and increases risk of multiple chronic diseases including cardiovascular disease, cancer, and neurodegeneration. It is a key driver of the &quot;inflammaging&quot; phenomenon.</p>
<p>Evidence Level: 4/5 (Strong epidemiological and mechanistic evidence)<br />
Risk Multiplier: 1.5x for cardiovascular events</p>
<h2>Key Biomarkers</h2>
<ul>
<li><strong>hs-CRP</strong>: Primary inflammatory marker (&gt; 3 mg/L high cardiovascular risk)</li>
<li><strong>ESR</strong>: General inflammation (&gt; 20 mm/hr elevated)</li>
<li><strong>Homocysteine</strong>: Vascular inflammation (&gt; 10 umol/L elevated)</li>
<li><strong>Fibrinogen</strong>: Clotting factor elevated in inflammation</li>
</ul>
<h2>Relationships</h2>
<ul>
<li>REQUIRES_BIOMARKER::<a class="internal-link is-unresolved" href="/404">hs-CRP</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/esr/" class="internal-link">ESR</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/metabolite/homocysteine/" class="internal-link">Homocysteine</a></li>
<li>REQUIRES_BIOMARKER::<a href="/garden/dev_admin/labtest/fibrinogen/" class="internal-link">Fibrinogen</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a></li>
<li>INCREASES_RISK_FOR::<a href="/garden/dev_admin/condition/cancer/" class="internal-link">Cancer</a></li>
<li>MODULATED_BY_PATHWAY::<a href="/garden/dev_admin/pathway/nf-kb-pathway/" class="internal-link">NF-kB Pathway</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Fish Oil</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/curcumin/" class="internal-link">Curcumin</a></li>
<li>IMPROVED_BY_SUPPLEMENT::<a href="/garden/dev_admin/supplement/vitamin-d/" class="internal-link">Vitamin D</a></li>
</ul>
<h2>References</h2>
<ul>
<li>Franceschi C, et al. Inflammaging and Anti-inflammaging. Nat Rev Endocrinol. 2018</li>
<li>Ridker PM, et al. JUPITER Trial: Rosuvastatin in Primary Prevention. NEJM. 2008</li>
</ul>

{% endraw %}