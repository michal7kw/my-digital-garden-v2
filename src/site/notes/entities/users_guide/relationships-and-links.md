---
created: '2026-04-17T18:59:21.356440Z'
description: Connecting entities with typed relationships — syntax, 160+ relationship
  types, and the visual editor
dg-home: false
dg-publish: true
permalink: /entities/users_guide/relationships-and-links/
slug: relationships-and-links
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Relationships and Links
type: users_guide
updated: '2026-04-17T18:59:21.356440Z'
---

{% raw %}
<h1>Relationships and Links</h1>
<p>Relationships are what turn a collection of notes into a knowledge graph. When you write <code>IMPROVES_BIOMARKER::[[HbA1c]]</code> inside a Magnesium note, you're creating an edge in the graph that says &quot;Magnesium improves the biomarker HbA1c.&quot; These connections are the most valuable part of your knowledge graph.</p>
<h2>How Relationships Work</h2>
<p>In Neo4j, a relationship is a typed, directed connection between two nodes:</p>
<pre><code>[Magnesium] ---IMPROVES_BIOMARKER---&gt; [HbA1c]
[Metformin] ---TREATS_CONDITION---&gt;   [Diabetes]
[Cortisol]  ---INDICATES---&gt;          [Stress]
</code></pre>
<p>You define these relationships in your entity notes, and the sync engine creates them in the database. The web dashboard then visualizes them as edges in the graph.</p>
<h2>Where to Write Relationships</h2>
<p>The sync engine looks for relationships in specific sections of your note. The primary section is <code>## Relationships</code>, but it also recognizes:</p>
<ul>
<li><code>## Relationships</code> (primary — always use this)</li>
<li><code>## Health Connections</code></li>
<li><code>## Other Relationships</code></li>
<li><code>## Management</code></li>
<li><code>## Risk Factors</code></li>
<li><code>## PrimeKG</code> (for enrichment data)</li>
<li><code>## DrugBank</code> (for drug interaction data)</li>
</ul>
<p>Relationships written outside these sections will not be synced to Neo4j.</p>
<h2>Relationship Syntax</h2>
<h3>Recommended Format</h3>
<pre><code>RELATIONSHIP_TYPE::[[Target Entity Name]]
</code></pre>
<p><strong>Examples:</strong></p>
<pre><code class="language-markdown">## Relationships

IMPROVES_BIOMARKER::[[Blood Pressure]]
TREATS_CONDITION::[[Hypertension]]
SYNERGISTIC_WITH::[[Potassium]]
AFFECTS_ORGAN::[[Heart]]
ACTIVATES::[[AMPK Pathway]]
INTERACTS_WITH::[[Calcium Channel Blockers]]
</code></pre>
<p><strong>Rules:</strong></p>
<ul>
<li>One relationship per line</li>
<li>The type must be UPPERCASE_WITH_UNDERSCORES</li>
<li>The target name in <code>[[brackets]]</code> must exactly match an existing entity filename (without <code>.md</code>)</li>
<li>You can add a brief note after: <code>TREATS_CONDITION::[[Hypertension]] - RCT evidence, dose-dependent</code></li>
</ul>
<h3>Alternative Formats (Also Supported)</h3>
<p><strong>Arrow format:</strong></p>
<pre><code class="language-markdown">- → [[Blood Pressure]] (improves_biomarker)
- ← [[Vitamin D]] (synergistic_with)
</code></pre>
<p><strong>Section header format:</strong></p>
<pre><code class="language-markdown">### Activates
- [[AMPK Pathway]]
- [[Autophagy]]

### Inhibits
- [[mTOR Pathway]]
</code></pre>
<p>Both formats work, but the <code>TYPE::[[Target]]</code> format is recommended for clarity and consistency.</p>
<h2>Common Relationship Types</h2>
<h3>Supplement / Drug → Biomarker</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>IMPROVES_BIOMARKER</code></td>
<td>Positively affects a biomarker</td>
<td>Omega-3 → Triglycerides</td>
</tr>
<tr>
<td><code>REDUCES_BIOMARKER</code></td>
<td>Lowers a biomarker value</td>
<td>Berberine → Blood Glucose</td>
</tr>
<tr>
<td><code>INCREASES_BIOMARKER</code></td>
<td>Raises a biomarker value</td>
<td>Iron → Ferritin</td>
</tr>
<tr>
<td><code>DECREASES_BIOMARKER</code></td>
<td>Lowers a biomarker value</td>
<td>Niacin → LDL Cholesterol</td>
</tr>
<tr>
<td><code>STABILIZES_BIOMARKER</code></td>
<td>Keeps a biomarker steady</td>
<td>Chromium → Blood Sugar</td>
</tr>
<tr>
<td><code>AFFECTS_BIOMARKER</code></td>
<td>General effect (direction unclear)</td>
<td>Zinc → Testosterone</td>
</tr>
</tbody>
</table>
<h3>Supplement / Drug → Condition</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>TREATS_CONDITION</code></td>
<td>Used to treat</td>
<td>Metformin → Diabetes</td>
</tr>
<tr>
<td><code>MAY_IMPROVE_CONDITION</code></td>
<td>Evidence suggests benefit</td>
<td>Curcumin → Inflammation</td>
</tr>
<tr>
<td><code>REDUCES_CONDITION</code></td>
<td>Reduces severity or risk</td>
<td>Exercise → Depression</td>
</tr>
<tr>
<td><code>WORSENS_CONDITION</code></td>
<td>Can make worse</td>
<td>Caffeine → Anxiety</td>
</tr>
<tr>
<td><code>INCREASES_RISK_FOR</code></td>
<td>Raises risk</td>
<td>Smoking → Lung Cancer</td>
</tr>
<tr>
<td><code>ASSOCIATED_WITH_CONDITION</code></td>
<td>Statistically associated</td>
<td>Obesity → Sleep Apnea</td>
</tr>
</tbody>
</table>
<h3>Supplement / Drug Interactions</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>INTERACTS_WITH</code></td>
<td>Has an interaction (check details)</td>
<td>Warfarin → Vitamin K</td>
</tr>
<tr>
<td><code>SYNERGISTIC_WITH</code></td>
<td>Works better together</td>
<td>Vitamin D → Vitamin K2</td>
</tr>
<tr>
<td><code>MAY_DEPLETE</code></td>
<td>Can reduce levels of</td>
<td>Metformin → Vitamin B12</td>
</tr>
<tr>
<td><code>REQUIRES_COFACTOR</code></td>
<td>Needs this to work properly</td>
<td>Iron → Vitamin C</td>
</tr>
<tr>
<td><code>SIMILAR_MECHANISM</code></td>
<td>Works by similar mechanism</td>
<td>Berberine → Metformin</td>
</tr>
</tbody>
</table>
<h3>Pathway and Mechanism</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ACTIVATES</code></td>
<td>Turns on or upregulates</td>
<td>Resveratrol → AMPK</td>
</tr>
<tr>
<td><code>INHIBITS</code></td>
<td>Turns off or downregulates</td>
<td>Rapamycin → mTOR</td>
</tr>
<tr>
<td><code>MODULATES</code></td>
<td>Adjusts activity</td>
<td>Ashwagandha → Cortisol</td>
</tr>
<tr>
<td><code>PARTICIPATES_IN_PATHWAY</code></td>
<td>Is part of</td>
<td>Glucose → Glycolysis</td>
</tr>
<tr>
<td><code>UPSTREAM_OF</code></td>
<td>Triggers downstream effects</td>
<td>Insulin → mTOR</td>
</tr>
<tr>
<td><code>DOWNSTREAM_OF</code></td>
<td>Triggered by upstream signal</td>
<td>Autophagy → AMPK</td>
</tr>
</tbody>
</table>
<h3>Organ and Tissue</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>AFFECTS_ORGAN</code></td>
<td>Has an effect on</td>
<td>Alcohol → Liver</td>
</tr>
<tr>
<td><code>EXPRESSED_IN</code></td>
<td>Found in (for proteins/genes)</td>
<td>BDNF → Hippocampus</td>
</tr>
<tr>
<td><code>LOCATED_IN</code></td>
<td>Physically located in</td>
<td>Mitochondria → Muscle Cell</td>
</tr>
</tbody>
</table>
<h3>Gene and Protein</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ENCODES</code></td>
<td>Gene produces this protein</td>
<td>MTHFR → MTHFR Enzyme</td>
</tr>
<tr>
<td><code>BINDS_TO</code></td>
<td>Physically binds</td>
<td>Caffeine → Adenosine Receptor</td>
</tr>
<tr>
<td><code>REGULATES</code></td>
<td>Controls expression</td>
<td>Cortisol → NF-kB</td>
</tr>
</tbody>
</table>
<h3>General</h3>
<table>
<thead>
<tr>
<th>Relationship</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>RELATED_TO</code></td>
<td>General connection</td>
<td>Sleep → Memory</td>
</tr>
<tr>
<td><code>PART_OF</code></td>
<td>Component of</td>
<td>Hippocampus → Brain</td>
</tr>
<tr>
<td><code>CORRELATED_WITH</code></td>
<td>Statistically correlated</td>
<td>Exercise → BDNF</td>
</tr>
</tbody>
</table>
<h2>Creating Relationships from the Plugin</h2>
<p>Besides writing them manually, you can use plugin features:</p>
<h3>Add Relationship to a Link</h3>
<ol>
<li>Select an existing <code>[[wikilink]]</code> in your note</li>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Add Edge Type to Internal Link&quot;</strong></li>
<li>Choose the relationship type from the dropdown</li>
<li>The plugin converts the link to proper relationship syntax</li>
</ol>
<h3>AI-Powered Relationship Suggestions</h3>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Suggest Relationships in Current Note&quot;</strong></li>
<li>The AI analyzes your note and the knowledge graph</li>
<li>It suggests potential relationships with confidence scores</li>
<li>Accept or reject each suggestion</li>
</ol>
<h3>Visual Relationship Editor</h3>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Open Visual Relationship Editor&quot;</strong></li>
<li>An interactive graph view opens where you can:
<ul>
<li>See the current entity and its connections</li>
<li>Drag to create new relationships</li>
<li>Click edges to edit or remove them</li>
</ul>
</li>
</ol>
<h3>Validate and Fix Relationships</h3>
<p>If you're unsure about your relationship syntax:</p>
<ul>
<li><strong>&quot;Validate relationship format in current file&quot;</strong> — Checks syntax and reports errors</li>
<li><strong>&quot;Fix relationships to canonical format in current file&quot;</strong> — Auto-corrects formatting issues</li>
</ul>
<h2>Enrichment from Reference Databases</h2>
<p>You can pull relationships from the built-in reference databases:</p>
<p><strong>From PrimeKG</strong> (100,000+ biomedical entities):</p>
<ol>
<li>Open an entity note</li>
<li>Command: <strong>&quot;Enrich Current Entity from PrimeKG&quot;</strong></li>
<li>The plugin searches PrimeKG for matching entities</li>
<li>Found relationships are added to a <code>## PrimeKG</code> section</li>
</ol>
<p><strong>From DrugBank</strong> (14,000+ drugs):</p>
<ol>
<li>Open a drug or supplement note</li>
<li>Command: <strong>&quot;Enrich Current Entity from DrugBank&quot;</strong></li>
<li>Drug interaction data is added to a <code>## DrugBank</code> section</li>
</ol>
<p>These enrichment sections sync to Neo4j just like manually written relationships.</p>
<h2>Best Practices</h2>
<p><strong>Be specific.</strong> Use the most specific relationship type available. <code>TREATS_CONDITION</code> is better than <code>RELATED_TO</code> — it carries more meaning in the graph.</p>
<p><strong>Use existing entities.</strong> Make sure the target entity name in <code>[[brackets]]</code> matches an existing file. Relationships pointing to non-existent entities won't create edges.</p>
<p><strong>Aim for 5-15 relationships per entity.</strong> Too few and the entity is isolated; too many with vague types (all <code>RELATED_TO</code>) adds noise without value.</p>
<p><strong>Include both directions.</strong> If Magnesium improves blood pressure, consider also adding a relationship in the Blood Pressure note pointing back to Magnesium.</p>
<p><strong>Document the evidence.</strong> Add a brief note when helpful: <code>TREATS_CONDITION::[[Diabetes]] - meta-analysis of 12 RCTs, NNT=10</code></p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a> — How your relationships get synced to the graph database</li>
<li><a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> — See your relationships visualized in the web dashboard</li>
<li><a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a> — Quality standards for relationship building</li>
</ul>

{% endraw %}