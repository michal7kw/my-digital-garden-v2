---
created: '2026-02-09T05:54:31.620575Z'
description: An enzyme found in the heart, brain, and skeletal muscle that catalyzes
  the conversion of creatine to phosphocreatine.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/biomarker/creatine-kinase/
slug: creatine-kinase
tags:
- biomarker
- enzyme
- muscle_damage
- cardiology
- musculoskeletal
- enzyme
templateEngineOverride: njk
title: Creatine Kinase
type: biomarker
updated: '2026-02-09T05:54:31.620575Z'
---

{% raw %}
<h1>Creatine Kinase</h1>
<h2>Overview</h2>
<p><strong>Creatine Kinase (CK)</strong> is an enzyme found primarily in skeletal muscle, heart muscle, and the brain. It catalyzes the reversible conversion of creatine and ATP to phosphocreatine and ADP. This reaction serves as an energy buffer, allowing for the rapid regeneration of ATP during high-intensity activity.</p>
<p>When muscle or nerve cells are injured, CK leaks into the bloodstream, making it a key marker for tissue damage.</p>
<h2>Isoforms</h2>
<p>CK exists as three main isoenzymes (dimers of M and B subunits):</p>
<ol>
<li><strong>CK-MM (Skeletal Muscle):</strong> Accounts for 98% of CK in skeletal muscle and the vast majority of circulating CK in healthy individuals.</li>
<li><strong>CK-MB (Heart Muscle):</strong> Found mainly in the heart (myocardium). Historically used to diagnose heart attacks (now largely replaced by Troponin).</li>
<li><strong>CK-BB (Brain):</strong> Found in the brain and lungs. Rarely measured in blood as it does not cross the blood-brain barrier easily.</li>
</ol>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Rhabdomyolysis:</strong> Massive breakdown of muscle tissue leads to extremely high CK levels (&gt;5,000 U/L, often &gt;10,000). The released myoglobin can cause acute kidney injury.</li>
<li><strong>Myocardial Infarction (Heart Attack):</strong> CK-MB rises 4-6 hours after injury. Useful for detecting <em>reinfarction</em> shortly after an initial event (as it clears faster than Troponin).</li>
<li><strong>Muscle Diseases:</strong> Elevated in muscular dystrophies (e.g., Duchenne) and inflammatory myopathies.</li>
<li><strong>Statin-Induced Myopathy:</strong> Statins can cause muscle pain and mild to moderate CK elevations.</li>
</ul>
<h2>Relationships</h2>
<p>INDICATES_DAMAGE_TO::[[Muscle]] - CK-MM<br />
INDICATES_DAMAGE_TO::[[Heart]] - CK-MB<br />
INDICATES_DAMAGE_TO::[[Brain]] - CK-BB<br />
PARTICIPATES_IN_PATHWAY::[[Creatine Metabolism]]<br />
ASSOCIATED_WITH_CONDITION::[[Rhabdomyolysis]] - Hallmark marker<br />
ASSOCIATED_WITH_CONDITION::[[Myocardial Infarction]]<br />
ASSOCIATED_WITH_CONDITION::[[Muscular Dystrophy]]<br />
INCREASED_BY::[[Exercise]] - Strenuous exercise causes transient spikes<br />
INCREASED_BY::[[Statins]] - Potential side effect<br />
AFFECTED_BY::[[Creatine]] - Supplementation increases intracellular phosphocreatine pool</p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<ul>
<li>Brancaccio P, Maffulli N, Limongelli FM. Creatine kinase monitoring in sport medicine. Br Med Bull. 2007;81-82:209-30.</li>
<li>Baird MF, et al. Creatine-kinase- and exercise-related muscle damage implications for muscle performance and recovery. J Nutr Metab. 2012;2012:960363.</li>
</ul>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ [[Coenzyme_Q10]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
</code></pre>
<ul>
<li>→ [[Coenzyme_Q10]] (supplement)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:03:04.161172'
source: obsidian
</code></pre>
<ul>
<li>→ [[Amyotrophic_Lateral_Sclerosis]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
</code></pre>
<ul>
<li>→ [[EMG_and_Nerve_Conduction_Studies]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T06:47:15.815531'
source: obsidian
</code></pre>
<ul>
<li>→ [[Creatine_Kinase]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
</code></pre>
<ul>
<li>→ [[biomarker_log]] (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
</code></pre>
<ul>
<li>← [[EMG_and_Nerve_Conduction_Studies]] (examination)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:44.705253'
source: obsidian
</code></pre>
<ul>
<li>← [[Amyotrophic_Lateral_Sclerosis]] (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:23.446168'
source: obsidian
</code></pre>
<ul>
<li>→ [[Creatine_Kinase]] (biomarker)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:11.087399'
source: obsidian
</code></pre>
<h3>Decreases Biomarker</h3>
<ul>
<li>← [[Coenzyme_Q10]] (supplement)</li>
</ul>
<pre><code class="language-yaml">effect_direction: decreases
evidence_level: 0
last_modified: '2026-01-26T07:08:36.325525'
magnitude: mild
notes: May ameliorate statin-induced elevations.
population_context: general
source: obsidian
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Creatine Kinase]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}