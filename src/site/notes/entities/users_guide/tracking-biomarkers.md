---
created: '2026-04-17T18:59:21.376539Z'
description: Adding biomarker readings, uploading lab reports, reference ranges, trends,
  and anomaly alerts
dg-home: false
dg-publish: true
permalink: /entities/users_guide/tracking-biomarkers/
slug: tracking-biomarkers
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Tracking Biomarkers
type: users_guide
updated: '2026-04-17T18:59:21.376539Z'
---

{% raw %}
<h1>Tracking Biomarkers</h1>
<p>Biomarkers are measurable health indicators — lab values, vital signs, and other quantifiable health data. MKG lets you track biomarker readings over time, visualize trends, detect anomalies, and understand how your supplements and lifestyle changes affect your health markers.</p>
<h2>Adding Biomarker Readings</h2>
<p>You add biomarker readings through the web dashboard's <strong>Biomarkers</strong> page. There are several ways to enter data:</p>
<h3>Manual Entry</h3>
<ol>
<li>Open the <strong>Biomarkers</strong> page</li>
<li>Click <strong>&quot;Add Reading&quot;</strong></li>
<li>Fill in:
<ul>
<li><strong>Biomarker name</strong> — Start typing to search (e.g., &quot;HbA1c&quot;, &quot;Vitamin D&quot;, &quot;TSH&quot;)</li>
<li><strong>Value</strong> — The measurement (e.g., 5.4)</li>
<li><strong>Unit</strong> — The measurement unit (e.g., %, ng/mL, mIU/L)</li>
<li><strong>Test date</strong> — When the test was performed</li>
<li><strong>Lab name</strong> (optional) — Which laboratory performed the test</li>
<li><strong>Notes</strong> (optional) — Additional context (fasting state, time of day, etc.)</li>
</ul>
</li>
<li>Click <strong>Save</strong></li>
</ol>
<h3>Lab Report Upload</h3>
<p>Upload a PDF or image of your lab report and let AI extract the values:</p>
<ol>
<li>Click <strong>&quot;Upload Lab Report&quot;</strong> on the Biomarkers page</li>
<li><strong>Step 1 — Upload:</strong> Drop your PDF, CSV, or image file</li>
<li><strong>Step 2 — Parse:</strong> AI reads the document and extracts biomarker values</li>
<li><strong>Step 3 — Map:</strong> Match extracted columns to biomarker fields (for CSV files)</li>
<li><strong>Step 4 — Review:</strong> Verify each extracted value, correct any errors</li>
<li><strong>Step 5 — Save:</strong> Confirm and save all readings to your profile</li>
</ol>
<p>This is the fastest way to enter a complete lab panel — one upload captures all values.</p>
<h3>Quick Entry</h3>
<p>For entering common biomarkers rapidly:</p>
<ol>
<li>Click <strong>&quot;Quick Entry&quot;</strong> on the Biomarkers page</li>
<li>Select a biomarker from your frequently-tracked list</li>
<li>Enter the value</li>
<li>Date defaults to today</li>
<li>Save and move to the next one</li>
</ol>
<h3>Panel Entry</h3>
<p>Enter an entire lab panel at once (e.g., Complete Blood Count, Lipid Panel):</p>
<ol>
<li>Click <strong>&quot;Panel Entry&quot;</strong></li>
<li>Select the panel type</li>
<li>Fill in all values in the panel form</li>
<li>Save the entire panel in one action</li>
</ol>
<h2>Understanding Your Readings</h2>
<h3>Status Indicators</h3>
<p>Each biomarker reading is color-coded by status:</p>
<table>
<thead>
<tr>
<th>Color</th>
<th>Status</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Green</td>
<td>Normal</td>
<td>Within the healthy reference range</td>
</tr>
<tr>
<td>Yellow</td>
<td>Low/High</td>
<td>Outside normal but not critical</td>
</tr>
<tr>
<td>Orange</td>
<td>Borderline</td>
<td>Approaching critical levels</td>
</tr>
<tr>
<td>Red</td>
<td>Critical</td>
<td>Significantly outside normal range</td>
</tr>
</tbody>
</table>
<h3>Reference Ranges</h3>
<p>MKG maintains reference ranges for each biomarker:</p>
<ul>
<li><strong>Normal range</strong> — The standard clinical range (e.g., HbA1c &lt; 5.7%)</li>
<li><strong>Optimal range</strong> — A tighter, health-optimized range (e.g., HbA1c 4.5-5.2%)</li>
<li><strong>Your target</strong> — A personal target you can set based on your goals</li>
</ul>
<p>Reference ranges come from the curated knowledge graph. When you view a biomarker, you'll see where your reading falls relative to these ranges.</p>
<h3>Trends</h3>
<p>The Biomarkers page shows trend analysis for each biomarker:</p>
<ul>
<li><strong>Trend direction</strong> — Improving, declining, stable, or fluctuating</li>
<li><strong>Trend arrows</strong> — Visual indicators showing the direction of change</li>
<li><strong>Time series charts</strong> — Line graphs showing your readings over time</li>
<li><strong>Statistical insights</strong> — Average, min, max, standard deviation</li>
</ul>
<h2>Anomaly Alerts</h2>
<p>MKG's anomaly detection system watches your biomarker readings and alerts you when:</p>
<ul>
<li>A value falls outside the reference range</li>
<li>A sudden change occurs (e.g., a large jump between tests)</li>
<li>A value has been trending in a concerning direction</li>
<li>A reading is significantly different from your baseline</li>
</ul>
<p>Alerts appear on your Dashboard and in the Biomarkers page. They include:</p>
<ul>
<li>The biomarker name and current value</li>
<li>The reference range for context</li>
<li>How the value compares to your recent readings</li>
<li>Suggested actions (if available)</li>
</ul>
<h2>Risk Score Cards</h2>
<p>MKG calculates risk scores across health categories:</p>
<ul>
<li><strong>Cardiovascular risk</strong> — Based on cholesterol, blood pressure, CRP, triglycerides</li>
<li><strong>Metabolic risk</strong> — Based on glucose, HbA1c, insulin, triglycerides</li>
<li><strong>Inflammation</strong> — Based on CRP, ESR, ferritin, IL-6</li>
</ul>
<p>Each risk card shows:</p>
<ul>
<li>An overall score (low / moderate / high)</li>
<li>Contributing biomarkers with their current status</li>
<li>Trend direction for the overall risk</li>
</ul>
<h2>The Lab Tests Page</h2>
<p>The <strong>Lab Tests</strong> page complements the Biomarkers page with test-centric features:</p>
<h3>Catalog Tab</h3>
<p>Browse all available lab tests with filters:</p>
<ul>
<li>Filter by category (lipids, hormones, minerals, thyroid, liver, etc.)</li>
<li>Filter by sample type (blood, urine, saliva, stool)</li>
<li>Search by test name</li>
<li>View test details including normal ranges and turnaround time</li>
</ul>
<h3>Panels Tab</h3>
<p>Pre-configured test bundles:</p>
<ul>
<li><strong>Complete Blood Count (CBC)</strong> — Red cells, white cells, platelets</li>
<li><strong>Comprehensive Metabolic Panel (CMP)</strong> — Glucose, electrolytes, kidney, liver</li>
<li><strong>Lipid Panel</strong> — Total cholesterol, LDL, HDL, triglycerides</li>
<li><strong>Thyroid Panel</strong> — TSH, Free T3, Free T4</li>
<li>And many more</li>
</ul>
<h3>Recommended Tab</h3>
<p>AI-suggested tests based on:</p>
<ul>
<li>Your current biomarker gaps (tests you haven't done recently)</li>
<li>Your health goals and conditions</li>
<li>Your adopted health stacks (each stack has target biomarkers)</li>
<li>Your risk profile</li>
</ul>
<h3>Schedule Tab</h3>
<p>Plan upcoming lab tests:</p>
<ul>
<li>Set reminders for periodic tests</li>
<li>Track which tests you've completed</li>
<li>See when tests are due</li>
</ul>
<h2>Biomarker Entities in the Knowledge Graph</h2>
<p>Besides tracking your personal readings, the knowledge graph contains biomarker entity notes with rich information:</p>
<ul>
<li>What the biomarker measures and why it matters</li>
<li>Complete reference ranges by age and sex</li>
<li>What supplements, drugs, and lifestyle factors affect it</li>
<li>Associated conditions</li>
<li>Testing requirements (fasting, sample type)</li>
</ul>
<p>To explore a biomarker's knowledge graph entry, click its name anywhere in the dashboard to open the entity detail page. See <a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> for more on entity exploration.</p>
<h2>Connecting Biomarkers to Supplements</h2>
<p>One of MKG's most powerful features is understanding how supplements affect biomarkers:</p>
<ul>
<li>Supplement entity notes include a <code>biomarker_effects</code> section listing which biomarkers they affect, the direction (increase/decrease), magnitude, and evidence level</li>
<li>The knowledge graph visualization shows these connections as edges</li>
<li>The BodyMap shows supplements connected to the organs where biomarkers are measured</li>
<li>Recommendations take your biomarker readings into account when suggesting supplements</li>
</ul>
<h2>Unit Conversion</h2>
<p>The dashboard includes a unit converter for common biomarker units:</p>
<ul>
<li>mg/dL ↔ mmol/L (glucose, cholesterol)</li>
<li>ng/mL ↔ nmol/L (vitamins, hormones)</li>
<li>And more</li>
</ul>
<p>Access it from the Biomarkers page toolbar.</p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/supplements-and-health-stacks/" class="internal-link">Supplements and Health Stacks</a> — Manage supplements based on your biomarker insights</li>
<li><a href="/entities/users_guide/experiments/" class="internal-link">Experiments</a> — Run experiments tracking how interventions affect your biomarkers</li>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Create biomarker entity notes in your vault</li>
</ul>

{% endraw %}