---
created: '2026-02-09T05:40:20.877029Z'
description: A complete or partial break in the continuity of bone tissue, usually
  caused by trauma or underlying disease.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/bone-fractures/
slug: bone-fractures
tags:
- condition
- orthopedics
- trauma
- injury
templateEngineOverride: njk
title: Bone Fractures
type: condition
updated: '2026-02-09T05:40:20.877029Z'
---

{% raw %}
<h1>Bone Fractures</h1>
<h2>Overview</h2>
<p>A bone fracture is a medical condition where the continuity of the bone is broken. Fractures fall into two main categories: <strong>Traumatic fractures</strong> caused by direct force (falls, car accidents) and <strong>Pathologic fractures</strong> caused by disease weakening the bone (osteoporosis, cancer).</p>
<h2>Classification</h2>
<ul>
<li><strong>Closed (Simple):</strong> Skin is intact.</li>
<li><strong>Open (Compound):</strong> Bone breaks through the skin (high infection risk).</li>
<li><strong>Comminuted:</strong> Bone shatters into 3+ pieces.</li>
<li><strong>Greenstick:</strong> Incomplete break (common in children).</li>
<li><strong>Stress:</strong> Hairline crack from overuse.</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Bone_Fractures]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:32.356629'
source: obsidian
</code></pre>
<ul>
<li>→ [[Bone_Fractures]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:26.355558'
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>CAUSED_BY::[[Trauma]]<br />
ASSOCIATED_WITH_CONDITION::[[Osteoporosis]]<br />
ASSOCIATED_WITH_CONDITION::[[Osteopenia]]<br />
ASSOCIATED_WITH_CONDITION::[[Bone Cancer]]<br />
AFFECTS_ORGAN::[[Bone]]<br />
TREATED_BY_INTERVENTION::[[Immobilization]] - Casting/Splinting.<br />
TREATED_BY_INTERVENTION::[[Surgery]] - ORIF (Open Reduction Internal Fixation).<br />
REQUIRES_COFACTOR::[[Calcium]] - For healing.<br />
REQUIRES_COFACTOR::[[Vitamin D]]</p>
<h2>References</h2>
<ul>
<li>American Academy of Orthopaedic Surgeons (AAOS). Fractures (Broken Bones).</li>
<li>Marsh, J. L., et al. (2007). Fracture and dislocation classification compendium - 2007. Journal of Orthopaedic Trauma.</li>
<li>Court-Brown, C. M., &amp; Caesar, B. (2006). Epidemiology of adult fractures: A review. Injury.</li>
</ul>

{% endraw %}