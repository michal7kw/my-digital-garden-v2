---
created: '2026-04-17T18:59:21.331068Z'
description: Overview of the MKG platform — what it does, who it's for, and what's
  possible
dg-home: false
dg-publish: true
permalink: /entities/users_guide/welcome-to-mkg/
slug: welcome-to-mkg
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Welcome to MKG
type: users_guide
updated: '2026-04-17T18:59:21.331068Z'
---

{% raw %}
<h1>Welcome to MKG</h1>
<p>The Medical Knowledge Graph (MKG) is a self-hosted platform for organizing, exploring, and acting on health and biomedical knowledge. It combines three tools that work together:</p>
<ul>
<li><strong>Obsidian vault</strong> — Your personal knowledge base where you write and curate health notes</li>
<li><strong>Neo4j graph database</strong> — A powerful database that connects your notes into an explorable knowledge graph</li>
<li><strong>Web dashboard</strong> — A visual interface for tracking biomarkers, exploring the graph, running experiments, and getting AI-powered insights</li>
</ul>
<p>Your data remains under your control. It stays either on your local machine or the specific backend server you connect to. Your health data is never sent to unauthorized third-party servers (except when you explicitly use AI features that call language model providers).</p>
<h2>Who Is MKG For?</h2>
<p><strong>Health-conscious individuals</strong> who want to organize their health data, understand their lab results, and track how supplements and lifestyle changes affect their biomarkers.</p>
<p><strong>Biohackers</strong> who run systematic self-experiments, track dozens of biomarkers, and want evidence-based supplement stacks with proper dosing and interaction checking.</p>
<p><strong>Researchers</strong> who build knowledge bases from biomedical literature, map relationships between biological entities, and want AI-assisted literature review tools.</p>
<p><strong>Health professionals</strong> who create and share curated medical knowledge through digital gardens, and want a structured way to organize clinical patterns and treatment approaches.</p>
<h2>What You Can Do</h2>
<p><strong>Build a knowledge graph.</strong> Create structured notes for supplements, drugs, conditions, biomarkers, pathways, and 20+ other entity types. Each note becomes a node in your knowledge graph, with typed relationships connecting them (e.g., &quot;Magnesium IMPROVES_BIOMARKER Blood Pressure&quot;).</p>
<p><strong>Track your health.</strong> Log biomarker readings manually or by uploading lab reports (PDF/CSV). See trends over time, get anomaly alerts when values fall outside reference ranges, and track risk scores across health categories.</p>
<p><strong>Manage supplements.</strong> Browse evidence-rated supplement information, adopt curated &quot;health stacks&quot; (bundles of supplements + biomarker targets for specific goals like heart health or cognitive performance), and check for drug-supplement interactions.</p>
<p><strong>Run self-experiments.</strong> Design N-of-1 experiments with baseline, intervention, and washout phases. Track biomarker changes and get statistical analysis including effect sizes and significance testing.</p>
<p><strong>Research with AI.</strong> Search PubMed and other biomedical databases, get AI-powered research synthesis, discover relationships between entities, and chat with an AI assistant that has context from your knowledge graph.</p>
<p><strong>Explore visually.</strong> Navigate your knowledge graph with an interactive force-directed visualization, explore anatomy with the BodyMap overlay, and drill into entity detail pages with molecular structure viewers.</p>
<p><strong>Share your knowledge.</strong> Publish selected notes as a &quot;digital garden&quot; — a public website where others can browse your curated health knowledge.</p>
<h2>How It All Fits Together</h2>
<pre><code>Your Obsidian Vault          Web Dashboard
(write &amp; curate notes)       (visualize &amp; track)
        |                          |
        +--- Backend Server -------+
                  |
            Neo4j Databases
         (store the knowledge graph)
</code></pre>
<p>You write notes in Obsidian. The MKG plugin syncs them to Neo4j. The web dashboard reads from Neo4j to show visualizations, track biomarkers, and power AI features. Changes flow both ways — enrich an entity from the web and the note updates in your vault.</p>
<p>The system includes four databases:</p>
<ul>
<li><strong>Curated KG</strong> — Your personal, editable knowledge graph</li>
<li><strong>PrimeKG</strong> — 100,000+ biomedical entities from scientific literature (read-only reference)</li>
<li><strong>DrugBank</strong> — 14,000+ pharmaceutical drugs with interaction data (read-only reference)</li>
<li><strong>BiomedKG</strong> — Biomedical data from UniProt, Reactome, and other databases (read-only reference)</li>
</ul>
<p>You can enrich your personal entities by pulling data from these reference databases.</p>
<h2>Subscription Tiers</h2>
<p>MKG offers three tiers:</p>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Free</th>
<th>Pro</th>
<th>Premium</th>
</tr>
</thead>
<tbody>
<tr>
<td>Core knowledge graph</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Biomarker tracking</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Health stacks</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Experiments</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>AI chat messages/day</td>
<td>3</td>
<td>100</td>
<td>500</td>
</tr>
<tr>
<td>Deep research</td>
<td>-</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Digital garden</td>
<td>-</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>API access</td>
<td>-</td>
<td>Basic</td>
<td>Full</td>
</tr>
</tbody>
</table>
<p>The core platform is fully functional on the free tier. Pro and Premium unlock AI-intensive features and publishing.</p>
<h2>Important Disclaimer</h2>
<p>MKG is an educational and organizational tool for health knowledge. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical decisions. The information in this platform is for research and informational purposes only.</p>
<h2>Next Steps</h2>
<p>Ready to get started? Head to <a href="/entities/users_guide/getting-started/" class="internal-link">Getting Started</a> to set up your vault and plugin.</p>
<p>Want to understand the vault structure first? See <a href="/entities/users_guide/understanding-the-vault/" class="internal-link">Understanding the Vault</a>.</p>
<p>Prefer to explore the web dashboard? See <a href="/entities/users_guide/web-dashboard-tour/" class="internal-link">Web Dashboard Tour</a>.</p>

{% endraw %}