---
created: '2026-04-17T18:59:21.406307Z'
description: Designing and running N-of-1 self-experiments with phases, biomarker
  tracking, and statistical analysis
dg-home: false
dg-publish: true
permalink: /entities/users_guide/experiments/
slug: experiments
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Experiments
type: users_guide
updated: '2026-04-17T18:59:21.406307Z'
---

{% raw %}
<h1>Experiments</h1>
<p>MKG includes a framework for designing and running N-of-1 self-experiments — systematic, structured experiments where you test how a specific intervention affects your health. This is one of the most powerful features for biohackers and anyone who wants to go beyond anecdotal evidence.</p>
<h2>What Is an N-of-1 Experiment?</h2>
<p>An N-of-1 experiment is a structured self-experiment where you:</p>
<ol>
<li><strong>Define a hypothesis</strong> — What you expect to happen (e.g., &quot;Taking 400mg magnesium before bed will improve my sleep quality&quot;)</li>
<li><strong>Establish a baseline</strong> — Track your biomarkers for a period without the intervention</li>
<li><strong>Apply the intervention</strong> — Start the intervention and continue tracking</li>
<li><strong>Analyze the results</strong> — Compare baseline vs. intervention with statistical methods</li>
</ol>
<p>Unlike casual &quot;I'll try this for a week and see how I feel,&quot; N-of-1 experiments give you measurable, statistically analyzed results.</p>
<h2>Experiment Phases</h2>
<p>Every experiment moves through these phases:</p>
<h3>1. Planning</h3>
<p>You define:</p>
<ul>
<li><strong>Title</strong> — A clear name for the experiment</li>
<li><strong>Hypothesis</strong> — What you expect to observe (be specific and measurable)</li>
<li><strong>Intervention</strong> — What you'll do differently (supplement, diet change, exercise, etc.)</li>
<li><strong>Tracked biomarkers</strong> — Which biomarkers you'll measure during the experiment</li>
<li><strong>Phase durations</strong> — How long each phase lasts</li>
</ul>
<h3>2. Baseline (Default: 7 days)</h3>
<p>Collect biomarker readings without any intervention. This establishes your &quot;normal&quot; values.</p>
<p><strong>Tips for a good baseline:</strong></p>
<ul>
<li>Take readings at the same time of day</li>
<li>Maintain your usual routine</li>
<li>Record at least 3-5 readings per biomarker</li>
<li>Note any confounding factors (illness, travel, stress)</li>
</ul>
<h3>3. Intervention (Default: 14 days)</h3>
<p>Start the intervention and continue tracking the same biomarkers.</p>
<p><strong>Tips for the intervention phase:</strong></p>
<ul>
<li>Be consistent with the intervention (same dose, same timing)</li>
<li>Continue measuring at the same times as baseline</li>
<li>Record compliance (did you actually take it every day?)</li>
<li>Note any side effects or changes</li>
</ul>
<h3>4. Washout (Optional)</h3>
<p>Stop the intervention and let your body return to baseline. This confirms the effects were due to the intervention, not a coincidence.</p>
<h3>5. Follow-Up / Completed</h3>
<p>Take final measurements and view the analysis results.</p>
<h2>Creating an Experiment</h2>
<ol>
<li>Open the <strong>Experiments</strong> page from the web dashboard</li>
<li>Click <strong>&quot;New Experiment&quot;</strong></li>
<li>Fill in:
<ul>
<li><strong>Title</strong> — e.g., &quot;Magnesium L-Threonate for Sleep Quality&quot;</li>
<li><strong>Hypothesis</strong> — e.g., &quot;400mg Magnesium L-Threonate taken 1 hour before bed will reduce the time it takes to fall asleep and increase deep sleep duration&quot;</li>
<li><strong>Intervention name</strong> — e.g., &quot;Magnesium L-Threonate&quot;</li>
<li><strong>Intervention dosage</strong> — e.g., &quot;400mg, 1 hour before bed&quot;</li>
<li><strong>Tracked biomarkers</strong> — e.g., &quot;Sleep Latency, Deep Sleep Duration, Morning Cortisol&quot;</li>
<li><strong>Baseline days</strong> — How many days of baseline data (default: 7)</li>
<li><strong>Intervention days</strong> — How many days of intervention (default: 14)</li>
</ul>
</li>
<li>Click <strong>&quot;Create&quot;</strong></li>
</ol>
<h2>Running an Experiment</h2>
<p>Once created, your experiment appears on the Experiments page with a progress bar showing the current phase.</p>
<h3>Advancing Phases</h3>
<p>The experiment moves through phases manually — you control when to start the next phase:</p>
<ol>
<li>Complete enough readings in the current phase</li>
<li>Click <strong>&quot;Advance to Next Phase&quot;</strong></li>
<li>The experiment moves to the next phase</li>
</ol>
<h3>Adding Readings</h3>
<p>During active phases (baseline and intervention):</p>
<ol>
<li>Open the experiment</li>
<li>Click <strong>&quot;Add Reading&quot;</strong></li>
<li>Enter:
<ul>
<li><strong>Biomarker name</strong> — Select from your tracked biomarkers</li>
<li><strong>Value</strong> — The measurement</li>
<li><strong>Unit</strong> — The unit of measurement</li>
<li><strong>Date</strong> — When the measurement was taken (defaults to today)</li>
<li><strong>Notes</strong> (optional) — Any relevant context</li>
</ul>
</li>
<li>The reading is tagged with the current phase (baseline or intervention)</li>
</ol>
<p>Readings are displayed grouped by phase with the phase label color-coded.</p>
<h2>Understanding the Analysis</h2>
<p>When your experiment is complete (or has enough data), MKG calculates statistics for each tracked biomarker:</p>
<h3>Per-Biomarker Statistics</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>What It Means</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Baseline Mean</strong></td>
<td>Average value during baseline</td>
</tr>
<tr>
<td><strong>Intervention Mean</strong></td>
<td>Average value during intervention</td>
</tr>
<tr>
<td><strong>Change (%)</strong></td>
<td>Percentage change from baseline to intervention</td>
</tr>
<tr>
<td><strong>Effect Size (Cohen's d)</strong></td>
<td>Standardized measure of the difference</td>
</tr>
<tr>
<td><strong>P-value</strong></td>
<td>Statistical significance of the change</td>
</tr>
</tbody>
</table>
<h3>Interpreting Effect Sizes</h3>
<p>Cohen's d tells you how large the effect was in standardized units:</p>
<table>
<thead>
<tr>
<th>Cohen's d</th>
<th>Interpretation</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt; 0.2</td>
<td><strong>Negligible</strong></td>
<td>No meaningful difference</td>
</tr>
<tr>
<td>0.2 - 0.5</td>
<td><strong>Small</strong></td>
<td>A noticeable but modest effect</td>
</tr>
<tr>
<td>0.5 - 0.8</td>
<td><strong>Medium</strong></td>
<td>A clearly meaningful effect</td>
</tr>
<tr>
<td>&gt; 0.8</td>
<td><strong>Large</strong></td>
<td>A strong, obvious effect</td>
</tr>
</tbody>
</table>
<h3>Statistical Significance</h3>
<p>The p-value tells you how likely the result is due to chance:</p>
<ul>
<li><strong>p &lt; 0.05</strong> (marked with *) — Statistically significant. The change is unlikely to be random.</li>
<li><strong>p &gt; 0.05</strong> (marked with &quot;n.s.&quot;) — Not significant. The change could be random variation.</li>
</ul>
<p><strong>Important:</strong> Statistical significance depends heavily on sample size. With only 5-7 readings per phase, even real effects may not reach significance. Use effect size as your primary guide for N-of-1 experiments.</p>
<h2>Example Experiment</h2>
<p><strong>Title:</strong> Magnesium L-Threonate for Sleep Quality</p>
<p><strong>Hypothesis:</strong> 400mg before bed reduces sleep latency and increases deep sleep</p>
<p><strong>Baseline (7 days):</strong></p>
<table>
<thead>
<tr>
<th>Day</th>
<th>Sleep Latency (min)</th>
<th>Deep Sleep (min)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>35</td>
<td>45</td>
</tr>
<tr>
<td>2</td>
<td>28</td>
<td>52</td>
</tr>
<tr>
<td>3</td>
<td>42</td>
<td>38</td>
</tr>
<tr>
<td>4</td>
<td>30</td>
<td>48</td>
</tr>
<tr>
<td>5</td>
<td>38</td>
<td>42</td>
</tr>
<tr>
<td>6</td>
<td>33</td>
<td>47</td>
</tr>
<tr>
<td>7</td>
<td>36</td>
<td>44</td>
</tr>
</tbody>
</table>
<p><strong>Intervention (14 days):</strong> 400mg Mg L-Threonate, 1h before bed</p>
<table>
<thead>
<tr>
<th>Day</th>
<th>Sleep Latency (min)</th>
<th>Deep Sleep (min)</th>
</tr>
</thead>
<tbody>
<tr>
<td>8</td>
<td>25</td>
<td>50</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>21</td>
<td>18</td>
<td>62</td>
</tr>
</tbody>
</table>
<p><strong>Analysis Results:</strong></p>
<table>
<thead>
<tr>
<th>Biomarker</th>
<th>Baseline Mean</th>
<th>Intervention Mean</th>
<th>Change</th>
<th>Effect Size</th>
<th>Sig</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sleep Latency</td>
<td>34.6 min</td>
<td>22.1 min</td>
<td>-36%</td>
<td>1.42 (Large)</td>
<td>*</td>
</tr>
<tr>
<td>Deep Sleep</td>
<td>45.1 min</td>
<td>58.3 min</td>
<td>+29%</td>
<td>0.95 (Large)</td>
<td>*</td>
</tr>
</tbody>
</table>
<p><strong>Conclusion:</strong> Large, statistically significant improvement in both sleep latency and deep sleep duration. Continue supplementation and retest in 3 months.</p>
<h2>Tips for Better Experiments</h2>
<p><strong>Control your variables.</strong> Change only one thing at a time. If you start a new supplement AND change your diet, you won't know which caused the effect.</p>
<p><strong>Be consistent with measurements.</strong> Measure at the same time of day, under the same conditions. Morning cortisol measured at 7am vs. 10am are different things.</p>
<p><strong>Collect enough data.</strong> More readings = more statistical power. The minimum recommended is 5 readings per phase, but 7-14 is better.</p>
<p><strong>Note confounding factors.</strong> Record anything unusual — illness, travel, poor sleep, stress — in the notes field. This helps explain unexpected results.</p>
<p><strong>Use washout phases.</strong> A washout period between intervention and follow-up helps confirm that effects disappear when the intervention stops, strengthening the causal claim.</p>
<p><strong>One intervention at a time.</strong> Start a new experiment for each intervention. Stacking multiple new supplements simultaneously makes it impossible to attribute effects.</p>
<h2>Experiment Ideas</h2>
<table>
<thead>
<tr>
<th>Intervention</th>
<th>Tracked Biomarkers</th>
<th>Duration</th>
</tr>
</thead>
<tbody>
<tr>
<td>Magnesium Glycinate 400mg</td>
<td>Sleep latency, deep sleep, morning HRV</td>
<td>7 + 14 days</td>
</tr>
<tr>
<td>Cold exposure (2 min cold shower)</td>
<td>Morning cortisol, CRP, subjective energy</td>
<td>7 + 21 days</td>
</tr>
<tr>
<td>Creatine 5g daily</td>
<td>Cognitive test scores, exercise performance</td>
<td>7 + 28 days</td>
</tr>
<tr>
<td>Elimination diet (no dairy)</td>
<td>CRP, IgE, subjective digestion score</td>
<td>7 + 21 days</td>
</tr>
<tr>
<td>16:8 intermittent fasting</td>
<td>Fasting glucose, HbA1c, weight</td>
<td>7 + 28 days</td>
</tr>
</tbody>
</table>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a> — Track the biomarkers you'll use in experiments</li>
<li><a href="/entities/users_guide/supplements-and-health-stacks/" class="internal-link">Supplements and Health Stacks</a> — Find supplements to experiment with</li>
<li><a href="/entities/users_guide/ai-research-tools/" class="internal-link">AI Research Tools</a> — Research the science behind your experiment design</li>
</ul>

{% endraw %}