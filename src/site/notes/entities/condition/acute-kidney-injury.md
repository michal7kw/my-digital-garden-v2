---
created: '2026-02-09T05:54:31.899024Z'
description: A sudden episode of kidney failure or kidney damage that happens within
  a few hours or a few days, causing a build-up of waste products in the blood.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/acute-kidney-injury/
slug: acute-kidney-injury
tags:
- condition
- nephrology
- acute
- renal_failure
templateEngineOverride: njk
title: Acute Kidney Injury
type: condition
updated: '2026-02-09T05:54:31.899024Z'
---

{% raw %}
<h1>Acute Kidney Injury</h1>
<h2>Overview</h2>
<p>Acute Kidney Injury (AKI), previously known as acute renal failure, is a sudden and rapid decline in kidney function. This impairment prevents the kidneys from effectively filtering waste products from the blood and maintaining the proper balance of fluids and electrolytes. AKI is common in hospitalized patients and can range from mild impairment to complete organ failure requiring dialysis.</p>
<h2>Causes</h2>
<p>AKI causes are traditionally categorized into three types:</p>
<ol>
<li><strong>Prerenal:</strong> Decreased blood flow to the kidney (e.g., dehydration, sepsis, heart failure, blood loss).</li>
<li><strong>Intrinsic (Renal):</strong> Direct damage to the kidney tissue (e.g., glomerulonephritis, acute tubular necrosis, nephrotoxic drugs like NSAIDs).</li>
<li><strong>Postrenal:</strong> Blockage of urine flow (e.g., kidney stones, enlarged prostate, bladder tumors).</li>
</ol>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Acute_Kidney_Injury]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:29.304561'
source: obsidian
</code></pre>
<ul>
<li>→ [[Acute_Kidney_Injury]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:21.269179'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>TREATS_CONDITION::[[Hydration]] - For prerenal AKI.<br />
REDUCES_BIOMARKER::[[Glomerular Filtration Rate]]<br />
ASSOCIATED_WITH_BIOMARKER::[[Creatinine]] - Increased levels indicate AKI.<br />
ASSOCIATED_WITH_BIOMARKER::[[Blood Urea Nitrogen]]<br />
INCREASED_RISK_OF::[[Chronic Kidney Disease]]<br />
COMPLICATION_OF::[[Sepsis]]<br />
COMPLICATION_OF::[[Diabetes Mellitus]]<br />
CAUSED_BY_DRUG::[[Ibuprofen]] - Through prerenal and intrinsic mechanisms.</p>
<h2>References</h2>
<ul>
<li>KDIGO Clinical Practice Guideline for Acute Kidney Injury. (2012). Kidney International Supplements.</li>
<li>Hoste, E. A., et al. (2018). Global epidemiology and outcomes of acute kidney injury. Nature Reviews Nephrology.</li>
<li>Mayo Clinic. Acute kidney failure.</li>
</ul>

{% endraw %}