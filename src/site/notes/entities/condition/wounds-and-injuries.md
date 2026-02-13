---
created: '2026-02-13T18:17:34.517081Z'
description: Damage to any part of the body caused by external force, ranging from
  minor skin breaks to life-threatening internal trauma.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/wounds-and-injuries/
slug: wounds-and-injuries
tags:
- condition
- trauma
- surgery
- emergency
templateEngineOverride: njk
title: Wounds and Injuries
type: condition
updated: '2026-02-13T18:17:34.517081Z'
---

{% raw %}
<h1>Wounds and Injuries</h1>
<h2>Overview</h2>
<p>Wounds are injuries that break the skin or other body tissues. They include cuts, scrapes, scratches, and punctured skin. Injuries also include internal damage such as broken bones, sprains, and internal bleeding. Proper wound care is essential to prevent <strong>Infection</strong>.</p>
<h2>Types of Wounds</h2>
<ul>
<li><strong>Abrasion:</strong> Scrape.</li>
<li><strong>Laceration:</strong> Cut or tear.</li>
<li><strong>Puncture:</strong> Small hole from a sharp object.</li>
<li><strong>Avulsion:</strong> Tissue torn away.</li>
<li><strong>Incision:</strong> Clean cut (surgical).</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/wounds-and-injuries/" class="internal-link">Wounds_and_Injuries</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:55.198863'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/wounds-and-injuries/" class="internal-link">Wounds_and_Injuries</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:04:02.812561'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Infection</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/inflammation/" class="internal-link">Inflammation</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/dev_admin/condition/hemorrhage/" class="internal-link">Hemorrhage</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Sepsis</a> - Risk from wound infection.<br />
TREATED_BY_INTERVENTION::<a class="internal-link is-unresolved" href="/404">Surgery</a><br />
TREATED_BY_DRUG::<a class="internal-link is-unresolved" href="/404">Antibiotics</a> - For infected wounds.<br />
TREATED_BY_DRUG::<a class="internal-link is-unresolved" href="/404">Lidocaine</a> - Local anesthetic.</p>
<h2>References</h2>
<ul>
<li>MedlinePlus. Wounds and Injuries.</li>
<li>WHO. Injuries and violence.</li>
<li>Gabriel, A., et al. (2021). Wound Healing and Care. Medscape.</li>
</ul>

{% endraw %}