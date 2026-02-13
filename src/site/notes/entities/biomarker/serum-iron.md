---
created: '2026-02-13T14:55:28.505100Z'
description: A measure of the amount of circulating iron that is bound to transferrin
  in the blood.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/serum-iron/
slug: serum-iron
tags:
- biomarker
- hematology
- nutrition
- iron_status
templateEngineOverride: njk
title: Serum Iron
type: biomarker
updated: '2026-02-13T14:55:28.505100Z'
---

{% raw %}
<h1>Serum Iron</h1>
<h2>Overview</h2>
<p>Serum iron measures the iron currently being transported in the blood. It is almost always interpreted alongside <strong>Ferritin</strong> (storage iron) and <strong>TIBC</strong> (Total Iron Binding Capacity) to assess overall iron status. Levels fluctuate significantly throughout the day and with dietary intake.</p>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Low Serum Iron:</strong> Iron deficiency anemia, chronic blood loss, pregnancy, chronic disease.</li>
<li><strong>High Serum Iron:</strong> Hemochromatosis, hemolytic anemia, iron poisoning, multiple blood transfusions.</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/serum-iron/" class="internal-link">Serum_Iron</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:23.240306'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/biomarker/serum-iron/" class="internal-link">Serum_Iron</a> (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:12.733460'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Hemochromatosis</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/labtest/ferritin/" class="internal-link">Ferritin</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/labtest/hemoglobin/" class="internal-link">Hemoglobin</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/biomarker/tibc/" class="internal-link">TIBC</a><br />
ASSOCIATED_WITH_BIOMARKER::<a href="/garden/dev_admin/biomarker/transferrin-saturation/" class="internal-link">Transferrin Saturation</a></p>
<h2>References</h2>
<ul>
<li>Abbaspour, N., et al. (2014). Review on iron and its importance for human health. Journal of Research in Medical Sciences.</li>
<li>Mayo Clinic. Iron test.</li>
<li>NIH. Iron - Fact Sheet for Health Professionals.</li>
</ul>

{% endraw %}