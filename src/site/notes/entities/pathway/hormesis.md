---
created: '2026-02-13T14:58:21.024789Z'
description: A biological phenomenon where a beneficial effect results from exposure
  to low doses of an agent that is otherwise toxic or lethal at higher doses. The
  "what doesn't kill you makes you stronger" mechanism.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/pathway/hormesis/
slug: hormesis
tags:
- pathway
- biological_concept
- adaptation
- stress_response
- longevity
templateEngineOverride: njk
title: Hormesis
type: pathway
updated: '2026-02-13T14:58:21.024789Z'
---

{% raw %}
<h1>Hormesis</h1>
<h2>Overview</h2>
<p><strong>Hormesis</strong> is a fundamental concept in biology and toxicology describing a biphasic dose-response relationship.</p>
<ul>
<li><strong>Low Dose:</strong> Stimulation, adaptation, and beneficial effects.</li>
<li><strong>High Dose:</strong> Inhibition, toxicity, and damage.</li>
</ul>
<p>In the context of health and longevity, hormesis explains how mild, intermittent stressors (exercise, fasting, heat, cold, phytochemicals) trigger adaptive cellular response pathways (like Nrf2, AMPK, SIRT1) that overcompensate, leaving the organism stronger and more resilient than before.</p>
<h2>Mitohormesis</h2>
<p>A specific type of hormesis where mild mitochondrial stress (e.g., a transient burst of Reactive Oxygen Species) acts as a signal to upregulate antioxidant defenses and mitochondrial biogenesis.</p>
<h2>Key Hormetic Stressors</h2>
<ol>
<li><strong>Exercise:</strong> Generates ROS and depletes ATP, triggering mitochondrial biogenesis.</li>
<li><strong>Fasting / Caloric Restriction:</strong> Nutritent scarcity activates autophagy and repair.</li>
<li><strong>Temperature Stress:</strong>
<ul>
<li><strong>Heat (Sauna):</strong> Activates Heat Shock Proteins (HSPs).</li>
<li><strong>Cold (Plunge):</strong> Activates UCP1 and brown fat thermogenesis.</li>
</ul>
</li>
<li><strong>Xenohormetics:</strong> Plant compounds (polyphenols like Resveratrol, Curcumin, Sulforaphane) produced by plants under stress that trigger stress resistance pathways in humans.</li>
</ol>
<h2>Mechanisms</h2>
<ul>
<li><strong>ROS Signaling:</strong> Transient oxidative stress oxidizes cysteine residues on signaling proteins (like KEAP1), releasing Nrf2 to induce antioxidant genes.</li>
<li><strong>Energy Sensing:</strong> ATP depletion activates AMPK.</li>
<li><strong>Protein Damage:</strong> Misfolding triggers the Unfolded Protein Response (UPR).</li>
</ul>
<h2>Relationships</h2>
<p>ACTIVATES::<a href="/garden/dev_admin/pathway/nrf2-pathway/" class="internal-link">Nrf2 Pathway</a> - Via oxidative stress signal<br />
ACTIVATES::<a href="/garden/dev_admin/pathway/ampk-pathway/" class="internal-link">AMPK Pathway</a> - Via energy depletion<br />
ACTIVATES::<a href="/garden/dev_admin/protein/sirt1/" class="internal-link">SIRT1</a> - Via NAD+ elevation<br />
ACTIVATES::<a href="/garden/dev_admin/pathway/autophagy/" class="internal-link">Autophagy</a> - Cellular cleanup<br />
ACTIVATES::<a class="internal-link is-unresolved" href="/404">Heat Shock Proteins</a><br />
INDUCED_BY::<a href="/garden/dev_admin/intervention/exercise/" class="internal-link">Exercise</a><br />
INDUCED_BY::<a href="/garden/dev_admin/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a><br />
INDUCED_BY::<a href="/garden/dev_admin/intervention/cold-exposure/" class="internal-link">Cold Exposure</a><br />
INDUCED_BY::<a class="internal-link is-unresolved" href="/404">Sauna</a><br />
INDUCED_BY::<a href="/garden/dev_admin/supplement/sulforaphane/" class="internal-link">Sulforaphane</a><br />
INDUCED_BY::<a href="/garden/dev_admin/supplement/resveratrol/" class="internal-link">Resveratrol</a><br />
INDUCED_BY::<a href="/garden/dev_admin/supplement/curcumin/" class="internal-link">Curcumin</a><br />
OPPOSITE_OF::<a href="/garden/dev_admin/condition/chronic-stress/" class="internal-link">Chronic Stress</a> - Which exceeds adaptive capacity</p>
<h2>References</h2>
<ul>
<li>Mattson MP. Hormesis: how it works and why it matters. Int J Mol Sci. 2008.</li>
<li>Ristow M, Zarse K. How increased oxidative stress promotes longevity and metabolic health: The concept of mitochondrial hormesis (mitohormesis). Exp Gerontol. 2010.</li>
</ul>

{% endraw %}