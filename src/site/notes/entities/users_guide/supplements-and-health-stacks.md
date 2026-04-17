---
created: '2026-04-17T18:59:21.383066Z'
description: Managing supplements, adopting curated health stacks, personalized recommendations,
  and drug interaction checking
dg-home: false
dg-publish: true
permalink: /entities/users_guide/supplements-and-health-stacks/
slug: supplements-and-health-stacks
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Supplements and Health Stacks
type: users_guide
updated: '2026-04-17T18:59:21.383066Z'
---

{% raw %}
<h1>Supplements and Health Stacks</h1>
<p>MKG helps you manage your supplement regimen with evidence-based information, track what you're taking, and adopt curated &quot;health stacks&quot; — bundles of supplements and biomarker targets designed for specific health goals.</p>
<h2>Supplement Information in the Knowledge Graph</h2>
<p>Each supplement in the knowledge graph contains:</p>
<ul>
<li><strong>Mechanism of action</strong> — How the supplement works at a biological level</li>
<li><strong>Dosage information</strong> — Recommended doses, forms, and timing</li>
<li><strong>Evidence level</strong> — A 0-5 rating of the scientific evidence (see <a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a>)</li>
<li><strong>Biomarker effects</strong> — Which biomarkers the supplement affects, in what direction, and how strongly</li>
<li><strong>Drug interactions</strong> — Known interactions with pharmaceutical drugs</li>
<li><strong>Contraindications</strong> — When not to take the supplement</li>
<li><strong>Side effects</strong> — Common and serious adverse effects</li>
<li><strong>Organ effects</strong> — Which organs the supplement targets (visible on the BodyMap)</li>
</ul>
<p>You can view this information by:</p>
<ul>
<li>Opening a supplement entity note in Obsidian</li>
<li>Clicking a supplement node in the knowledge graph visualization</li>
<li>Searching for a supplement on the web dashboard</li>
</ul>
<h2>Managing Your Supplements</h2>
<p>From the web dashboard, you can track your personal supplement regimen:</p>
<h3>Adding a Supplement</h3>
<ol>
<li>Find a supplement in the knowledge graph or search</li>
<li>Open its entity detail page</li>
<li>Click <strong>&quot;Add to My Supplements&quot;</strong></li>
<li>Set your personal details:
<ul>
<li><strong>Dosage</strong> — How much you take (e.g., 400 mg)</li>
<li><strong>Frequency</strong> — How often (daily, twice daily, weekly)</li>
<li><strong>Timing</strong> — When you take it (morning, evening, with meals)</li>
</ul>
</li>
<li>The supplement is added to your active regimen</li>
</ol>
<h3>Supplement Lifecycle</h3>
<p>Your supplements can be in different states:</p>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active</strong></td>
<td>Currently taking regularly</td>
</tr>
<tr>
<td><strong>Paused</strong></td>
<td>Temporarily stopped (e.g., during an experiment washout)</td>
</tr>
<tr>
<td><strong>Discontinued</strong></td>
<td>No longer taking</td>
</tr>
</tbody>
</table>
<p>You can change a supplement's status at any time from its detail page.</p>
<h2>Health Stacks</h2>
<p>Health stacks are curated combinations of supplements and biomarker targets designed around specific health goals. Think of them as evidence-based &quot;starter kits&quot; for health optimization.</p>
<h3>Browsing Stacks</h3>
<p>Open the <strong>Stacks</strong> page from the web dashboard sidebar. You'll see a split-panel view:</p>
<ul>
<li><strong>Left panel</strong> — List of all available stacks with filters</li>
<li><strong>Right panel</strong> — Details of the selected stack</li>
</ul>
<p>Each stack card shows:</p>
<ul>
<li>Stack name and description</li>
<li>Number of supplements and biomarkers included</li>
<li>Difficulty level (beginner, intermediate, advanced)</li>
<li>Goal categories (e.g., cardiovascular, cognitive, energy)</li>
</ul>
<h3>Pre-Built Stacks</h3>
<p>MKG comes with curated stacks for common health goals:</p>
<table>
<thead>
<tr>
<th>Stack</th>
<th>Goal</th>
<th>Key Supplements</th>
</tr>
</thead>
<tbody>
<tr>
<td>Heart Health</td>
<td>Cardiovascular support</td>
<td>Omega-3, CoQ10, Magnesium</td>
</tr>
<tr>
<td>Cognitive Performance</td>
<td>Brain function</td>
<td>Lion's Mane, Omega-3, Creatine</td>
</tr>
<tr>
<td>Sleep Quality</td>
<td>Better sleep</td>
<td>Magnesium, Melatonin, L-Theanine</td>
</tr>
<tr>
<td>Energy &amp; Vitality</td>
<td>Daily energy</td>
<td>CoQ10, B-Complex, Iron</td>
</tr>
<tr>
<td>Anti-Inflammation</td>
<td>Reduce inflammation</td>
<td>Curcumin, Omega-3, Vitamin D</td>
</tr>
<tr>
<td>Immune Support</td>
<td>Immune function</td>
<td>Zinc, Vitamin C, Vitamin D</td>
</tr>
<tr>
<td>Mood &amp; Stress</td>
<td>Emotional balance</td>
<td>Ashwagandha, Magnesium, B6</td>
</tr>
<tr>
<td>Athletic Performance</td>
<td>Exercise support</td>
<td>Creatine, Beta-Alanine, Electrolytes</td>
</tr>
<tr>
<td>Weight Management</td>
<td>Healthy weight</td>
<td>Fiber, Green Tea Extract, Chromium</td>
</tr>
<tr>
<td>Longevity</td>
<td>Healthy aging</td>
<td>NMN, Resveratrol, Vitamin D</td>
</tr>
</tbody>
</table>
<h3>What's Inside a Stack</h3>
<p>Each stack contains:</p>
<p><strong>Supplements</strong> with:</p>
<ul>
<li>Specific dosage recommendations</li>
<li>Suggested frequency and timing</li>
<li>Evidence references for each supplement</li>
<li>Notes on form selection (e.g., &quot;Magnesium Glycinate preferred for sleep&quot;)</li>
</ul>
<p><strong>Biomarker targets</strong> with:</p>
<ul>
<li>Target ranges (what to aim for)</li>
<li>Optimal ranges (ideal values)</li>
<li>Rationale for each target</li>
<li>How the stack's supplements are expected to affect each biomarker</li>
</ul>
<p><strong>Evidence summary:</strong></p>
<ul>
<li>Overall evidence rating</li>
<li>Key studies supporting the stack</li>
<li>Goal categories it addresses</li>
</ul>
<h3>Adopting a Stack</h3>
<p>When you adopt a stack:</p>
<ol>
<li>Click <strong>&quot;Adopt Stack&quot;</strong> on the stack detail page</li>
<li>The system automatically:
<ul>
<li>Adds all the stack's supplements to your active supplement regimen</li>
<li>Sets the recommended dosages, frequencies, and timing</li>
<li>Creates biomarker targets for each biomarker in the stack</li>
<li>Avoids duplicates (if you're already taking a supplement, it won't add it twice)</li>
</ul>
</li>
<li>Your Dashboard and Biomarkers page now show the stack's targets</li>
</ol>
<p><strong>To unadopt a stack:</strong> Click <strong>&quot;Unadopt&quot;</strong> on the stack page. This removes the supplements and biomarker targets that came from that stack.</p>
<h3>Creating Personal Stacks</h3>
<p>You can create your own custom stacks:</p>
<ol>
<li>On the Stacks page, click <strong>&quot;Create Personal Stack&quot;</strong></li>
<li>Give it a name and description</li>
<li>Add supplements with your preferred dosages</li>
<li>Add biomarker targets with your desired ranges</li>
<li>Save</li>
</ol>
<p>Personal stacks appear with a &quot;Personal&quot; badge and can be managed just like curated stacks.</p>
<h2>Recommendations</h2>
<p>The <strong>Recommendations</strong> page provides personalized health suggestions based on your knowledge graph, biomarker data, and health goals.</p>
<h3>How Recommendations Work</h3>
<p>The recommendation engine considers:</p>
<ul>
<li>Your current biomarker readings and trends</li>
<li>Your active conditions and health goals</li>
<li>Relationships in the knowledge graph (what supplements help what conditions)</li>
<li>Evidence levels (stronger evidence = higher priority)</li>
<li>Your current supplement regimen (avoids redundancy)</li>
</ul>
<h3>Reading Recommendations</h3>
<p>Each recommendation shows:</p>
<ul>
<li><strong>Title</strong> — What's being recommended (e.g., &quot;Consider adding Omega-3&quot;)</li>
<li><strong>Priority</strong> — High, medium, or low based on relevance</li>
<li><strong>Reasoning</strong> — Why this is recommended for you specifically</li>
<li><strong>Evidence level</strong> — Strength of the supporting evidence</li>
<li><strong>Related entities</strong> — Links to the supplements, biomarkers, or conditions involved</li>
</ul>
<h3>Acting on Recommendations</h3>
<p>For each recommendation, you can:</p>
<ul>
<li><strong>Complete</strong> — Mark it as done (e.g., you've adopted the suggestion)</li>
<li><strong>Dismiss</strong> — Not interested right now</li>
<li><strong>Snooze</strong> — Remind you later</li>
</ul>
<h2>Drug Interaction Checker</h2>
<p>Before adding supplements to your regimen, check for interactions:</p>
<ol>
<li>Open the <strong>Drug Interaction Checker</strong> from the dashboard</li>
<li>Enter the drugs and supplements you're currently taking or considering</li>
<li>The system checks against DrugBank's 1.4M+ interaction database</li>
<li>Results show:
<ul>
<li>Interaction severity (minor, moderate, major)</li>
<li>Mechanism of interaction</li>
<li>Clinical significance</li>
<li>Recommended actions</li>
</ul>
</li>
</ol>
<p>This is especially important if you take prescription medications.</p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a> — Track biomarker changes after adopting stacks</li>
<li><a href="/entities/users_guide/experiments/" class="internal-link">Experiments</a> — Run experiments to measure supplement effects</li>
<li><a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> — Explore supplement-biomarker connections in the graph</li>
</ul>

{% endraw %}