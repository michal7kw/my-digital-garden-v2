---
created: '2026-02-09T05:40:22.172379Z'
description: The Q-SYMBIO trial was a landmark multicenter, randomized, double-blind,
  placebo-controlled study demonstrating that CoQ10 supplementation (300 mg/day for
  2 years) significantly reduced cardiovascular mortality and hospitalizations in
  patients with chronic heart failure. This study established CoQ10 as the first adjunctive
  therapy in over a decade to improve survival in heart failure.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/research/q-symbio-coenzyme-q10-as-adjunctive-treatment-of-chronic-heart-failure/
slug: q-symbio-coenzyme-q10-as-adjunctive-treatment-of-chronic-heart-failure
tags:
- research
- CoQ10
- heart failure
- cardiovascular
- mortality
- clinical trial
- mitochondria
- ATP
templateEngineOverride: njk
title: 'Q-SYMBIO: Coenzyme Q10 as adjunctive treatment of chronic heart failure'
type: research
updated: '2026-02-09T05:40:22.172379Z'
---

{% raw %}
<h1>Q-SYMBIO: Coenzyme Q10 as adjunctive treatment of chronic heart failure</h1>
<h2>Study Information</h2>
<p><strong>Authors</strong>: Mortensen SA, Rosenfeldt F, Kumar A, Dolliner P, Filipiak KJ, Pella D, Alehagen U, Steurer G, Littarru GP, Q-SYMBIO Study Investigators<br />
<strong>Journal</strong>: JACC: Heart Failure<br />
<strong>Publication Date</strong>: 2014-12-01<br />
<strong>Type</strong>: Clinical Trial<br />
<strong>Study Design</strong>: Randomized Controlled Trial<br />
<strong>Evidence Level</strong>: 1b<br />
<strong>Citations</strong>: 892<br />
<strong>DOI</strong>: <a href="https://doi.org/10.1016/j.jchf.2014.06.008">10.1016/j.jchf.2014.06.008</a><br />
<strong>PMID</strong>: <a href="https://pubmed.ncbi.nlm.nih.gov/25282031/">25282031</a><br />
<strong>Semantic Scholar</strong>: <a href="https://www.semanticscholar.org/paper/PMID:25282031">View</a></p>
<h2>Abstract</h2>
<p>The Q-SYMBIO trial was a landmark multicenter, randomized, double-blind, placebo-controlled study demonstrating that CoQ10 supplementation (300 mg/day for 2 years) significantly reduced cardiovascular mortality and hospitalizations in patients with chronic heart failure. This study established CoQ10 as the first adjunctive therapy in over a decade to improve survival in heart failure.</p>
<h2>Keywords</h2>
<p>CoQ10, coenzyme Q10, heart failure, cardiovascular mortality, mitochondria, ATP, ubiquinone</p>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<p>No relationships found.</p>
<!-- NEO4J_CONTENT_END -->
<h2>Relationships</h2>
<p>STUDIES::[[Coenzyme Q10]] - Primary intervention (300 mg/day)<br />
STUDIES::[[CoQ10]] - Alternative supplement name reference<br />
TREATS::[[Heart Failure]] - Target condition (NYHA class III-IV)<br />
AFFECTS::[[Heart]] - Target organ<br />
INCREASES::[[ATP]] - Mechanism: enhanced mitochondrial energy production<br />
AFFECTS::[[Mitochondria]] - Primary site of action (electron transport chain)<br />
DECREASES::[[Cardiovascular Disease]] - Reduced CV mortality outcome<br />
INVOLVES::[[Cytochrome C]] - Electron transport chain component<br />
RELATED_TO::[[ATP Synthase]] - Terminal enzyme in oxidative phosphorylation</p>
<h2>Methodology</h2>
<pre><code class="language-yaml">design: Multicenter, randomized, double-blind, placebo-controlled trial
centers: 17
countries:
  - Denmark
  - Sweden
  - Austria
  - Slovakia
  - Poland
  - India
  - Malaysia
  - Australia
randomization: Centralized computer-generated
blinding: Double-blind (patients, investigators, outcome assessors)
intervention: CoQ10 100 mg three times daily (300 mg/day) or placebo
</code></pre>
<h3>Study Design</h3>
<ul>
<li><strong>Sample Size</strong>: n=420</li>
<li><strong>Duration</strong>: 2 years</li>
</ul>
<h4>Population Characteristics</h4>
<pre><code class="language-yaml">age_mean: 62 years
gender: Both (68% male)
health_status: Chronic heart failure (NYHA class III-IV)
inclusion_criteria:
  - NYHA class III or IV
  - LVEF &lt;40%
  - Optimal standard therapy
exclusion_criteria:
  - Acute MI within 3 months
  - Unstable angina
  - Planned cardiac surgery
</code></pre>
<h2>Results</h2>
<h3>Key Findings</h3>
<pre><code class="language-yaml">primary:
  - name: Major adverse cardiovascular events (MACE)
    components:
      - Cardiovascular death
      - Hospitalization for HF
      - Mechanical circulatory support
      - Heart transplant
    result: 43% relative risk reduction
    p_value: 0.003
    nnt: 7
secondary:
  - name: All-cause mortality
    result: 42% reduction
    p_value: 0.036
  - name: Cardiovascular mortality
    result: 43% reduction
    p_value: 0.039
  - name: NYHA class improvement
    result: Significant improvement
    p_value: 0.028
  - name: Hospitalizations for heart failure
    result: Significantly reduced
</code></pre>
<h3>Statistical Analysis</h3>
<h4>Statistical Significance</h4>
<pre><code class="language-yaml">mace: HR 0.50, 95% CI 0.32-0.80, p = 0.003
cv_mortality: HR 0.57, 95% CI 0.33-0.97, p = 0.039
all_cause_mortality: HR 0.58, 95% CI 0.35-0.96, p = 0.036
</code></pre>
<h4>Effect Sizes</h4>
<pre><code class="language-yaml">mace_reduction: 43% (HR 0.50)
nnt_for_mace: 7 patients over 2 years
absolute_risk_reduction: 14%
</code></pre>
<h2>Limitations</h2>
<ul>
<li>Moderate sample size (n=420)</li>
<li>Primarily European and Australian centers</li>
<li>High dropout rate (~20%)</li>
<li>No biomarker-guided treatment</li>
<li>Older population (mean 62 years)</li>
</ul>
<h2>Research Integrity</h2>
<h3>Funding Sources</h3>
<ul>
<li>Pharma Nord (provided study drug)</li>
<li>Heart Research Institute</li>
<li>Various national heart foundations</li>
</ul>
<h3>Conflicts of Interest</h3>
<ul>
<li>Pharma Nord provided study medication and partial funding</li>
<li>Some investigators received speaking fees from Pharma Nord</li>
</ul>
<h2>Replication Status</h2>
<p>Results consistent with smaller prior studies; no formal replication attempted</p>
<h2>References</h2>
<ul>
<li>Mortensen SA et al. Mol Aspects Med. 1997;18 Suppl:S137-144. PMID: 9266516</li>
<li>Rosenfeldt FL et al. J Card Fail. 2007;13(7):596-602. PMID: 17826652</li>
<li>Langsjoen PH et al. Int J Tissue React. 1990;12(3):163-168. PMID: 2276895</li>
</ul>
<h2>Source Data</h2>
<ul>
<li><strong>Source System:</strong> PubMed</li>
<li><strong>Last Modified in Source:</strong> 2025-01-22</li>
</ul>

{% endraw %}