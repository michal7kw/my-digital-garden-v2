---
created: '2026-04-17T18:59:21.341462Z'
description: Vault folder structure, all 26 entity types explained, naming conventions,
  and what gets synced
dg-home: false
dg-publish: true
permalink: /entities/users_guide/understanding-the-vault/
slug: understanding-the-vault
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Understanding the Vault
type: users_guide
updated: '2026-04-17T18:59:21.341462Z'
---

{% raw %}
<h1>Understanding the Vault</h1>
<p>Your MKG vault is an Obsidian vault with a specific folder structure designed for knowledge graph management. Each markdown file in the <code>entities/</code> folder represents a node in your knowledge graph, and the links between them become edges (relationships) in the graph database.</p>
<h2>Vault Structure Overview</h2>
<pre><code>your-vault/
├── entities/                    # Your knowledge graph nodes
│   ├── supplement/              # Supplements (Magnesium, Zinc, etc.)
│   ├── drug/                    # Pharmaceutical drugs
│   ├── condition/               # Health conditions and diseases
│   ├── biomarker/               # Lab values and health markers
│   ├── pathway/                 # Biological pathways (mTOR, AMPK, etc.)
│   ├── organ/                   # Body organs and systems
│   ├── intervention/            # Lifestyle interventions (exercise, fasting, etc.)
│   ├── ... (19 more types)      # See full list below
│   └── healthstack/             # Curated supplement combinations
├── _review/                     # Review queue for new entities
│   ├── pending/                 # Awaiting review
│   ├── approved/                # Review log
│   └── rejected/                # Rejected entries
├── templates/                   # Note templates for each entity type
│   └── entity-templates/        # YAML schemas and markdown templates
├── users_guide/                 # This guide (you are here)
├── cypher_queries/              # Reusable database query snippets
└── .obsidian/                   # Obsidian configuration
</code></pre>
<h2>The <code>entities/</code> Folder</h2>
<p>This is the heart of your knowledge graph. Every markdown file inside <code>entities/</code> can be synced to Neo4j as a graph node. Files are organized into subfolders by entity type.</p>
<p><strong>Key rules:</strong></p>
<ul>
<li>Each file = one entity (one node in the graph)</li>
<li>The filename = the entity name (e.g., <code>Magnesium.md</code> creates an entity named &quot;Magnesium&quot;)</li>
<li>The subfolder determines the entity type (e.g., <code>entities/supplement/Magnesium.md</code> is a Supplement)</li>
<li>Files must have proper YAML frontmatter to sync (see <a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a>)</li>
</ul>
<h2>All 26 Entity Types</h2>
<h3>Core Health Types</h3>
<table>
<thead>
<tr>
<th>Type</th>
<th>Folder</th>
<th>What It Represents</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Supplement</strong></td>
<td><code>supplement/</code></td>
<td>Vitamins, minerals, herbs, nutrients</td>
<td>Magnesium, Omega-3, Curcumin</td>
</tr>
<tr>
<td><strong>Drug</strong></td>
<td><code>drug/</code></td>
<td>Pharmaceutical medications</td>
<td>Metformin, Aspirin, Levothyroxine</td>
</tr>
<tr>
<td><strong>Condition</strong></td>
<td><code>condition/</code></td>
<td>Diseases and health conditions</td>
<td>Diabetes, Hypertension, Depression</td>
</tr>
<tr>
<td><strong>Biomarker</strong></td>
<td><code>biomarker/</code></td>
<td>Measurable health indicators</td>
<td>HbA1c, Cortisol, Vitamin D</td>
</tr>
<tr>
<td><strong>Intervention</strong></td>
<td><code>intervention/</code></td>
<td>Lifestyle practices and therapies</td>
<td>Cold Exposure, Meditation, HIIT</td>
</tr>
</tbody>
</table>
<h3>Biological and Molecular Types</h3>
<table>
<thead>
<tr>
<th>Type</th>
<th>Folder</th>
<th>What It Represents</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Pathway</strong></td>
<td><code>pathway/</code></td>
<td>Cellular signaling and metabolic pathways</td>
<td>mTOR, AMPK, NF-kB</td>
</tr>
<tr>
<td><strong>Organ</strong></td>
<td><code>organ/</code></td>
<td>Body organs and systems</td>
<td>Liver, Brain, Heart</td>
</tr>
<tr>
<td><strong>Hormone</strong></td>
<td><code>hormone/</code></td>
<td>Hormones and endocrine factors</td>
<td>Insulin, Cortisol, Melatonin</td>
</tr>
<tr>
<td><strong>Neurotransmitter</strong></td>
<td><code>neurotransmitter/</code></td>
<td>Neural signaling molecules</td>
<td>Serotonin, Dopamine, GABA</td>
</tr>
<tr>
<td><strong>Protein</strong></td>
<td><code>protein/</code></td>
<td>Enzymes and structural proteins</td>
<td>Albumin, CRP, Hemoglobin</td>
</tr>
<tr>
<td><strong>Gene</strong></td>
<td><code>gene/</code></td>
<td>Genetic information</td>
<td>MTHFR, APOE, BRCA1</td>
</tr>
<tr>
<td><strong>Metabolite</strong></td>
<td><code>metabolite/</code></td>
<td>Metabolic intermediates</td>
<td>Glucose, Lactate, Uric Acid</td>
</tr>
<tr>
<td><strong>Nutrient</strong></td>
<td><code>nutrient/</code></td>
<td>Dietary nutrients</td>
<td>Fiber, Iron, Folate</td>
</tr>
<tr>
<td><strong>CellularComponent</strong></td>
<td><code>cellularcomponent/</code></td>
<td>Cell structures</td>
<td>Mitochondria, Ribosome</td>
</tr>
<tr>
<td><strong>BiologicalProcess</strong></td>
<td><code>biologicalprocess/</code></td>
<td>Cellular processes</td>
<td>Autophagy, Apoptosis</td>
</tr>
</tbody>
</table>
<h3>Clinical and Diagnostic Types</h3>
<table>
<thead>
<tr>
<th>Type</th>
<th>Folder</th>
<th>What It Represents</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>LabTest</strong></td>
<td><code>labtest/</code></td>
<td>Individual laboratory tests</td>
<td>Complete Blood Count, Lipid Panel</td>
</tr>
<tr>
<td><strong>LabTestPanel</strong></td>
<td><code>labtestpanel/</code></td>
<td>Grouped test panels</td>
<td>Comprehensive Metabolic Panel</td>
</tr>
<tr>
<td><strong>ClinicalPattern</strong></td>
<td><code>clinicalpattern/</code></td>
<td>Symptom patterns</td>
<td>Metabolic Syndrome, Insulin Resistance</td>
</tr>
<tr>
<td><strong>Phenotype</strong></td>
<td><code>phenotype/</code></td>
<td>Observable genetic traits</td>
<td>Slow Caffeine Metabolizer</td>
</tr>
<tr>
<td><strong>CognitiveFunction</strong></td>
<td><code>cognitivefunction/</code></td>
<td>Cognitive abilities</td>
<td>Working Memory, Attention</td>
</tr>
<tr>
<td><strong>Anatomy</strong></td>
<td><code>anatomy/</code></td>
<td>Anatomical structures</td>
<td>Hippocampus, Prefrontal Cortex</td>
</tr>
</tbody>
</table>
<h3>Research and Other Types</h3>
<table>
<thead>
<tr>
<th>Type</th>
<th>Folder</th>
<th>What It Represents</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Research</strong></td>
<td><code>research/</code></td>
<td>Research papers and studies</td>
<td>Clinical trials, meta-analyses</td>
</tr>
<tr>
<td><strong>SideEffect</strong></td>
<td><code>sideeffect/</code></td>
<td>Adverse effects</td>
<td>Nausea, Headache, Insomnia</td>
</tr>
<tr>
<td><strong>Exposure</strong></td>
<td><code>exposure/</code></td>
<td>Environmental exposures</td>
<td>Blue Light, Air Pollution</td>
</tr>
<tr>
<td><strong>HealthStack</strong></td>
<td><code>healthstack/</code></td>
<td>Curated supplement combinations</td>
<td>Heart Health Stack, Sleep Stack</td>
</tr>
</tbody>
</table>
<h2>Naming Conventions</h2>
<p><strong>File names:</strong> Use Title Case with spaces. Hyphens are fine where they naturally occur.</p>
<table>
<thead>
<tr>
<th>Correct</th>
<th>Incorrect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Omega-3 Fatty Acids.md</code></td>
<td><code>omega_3_fatty_acids.md</code></td>
</tr>
<tr>
<td><code>Red Light Therapy.md</code></td>
<td><code>Red_Light_Therapy.md</code></td>
</tr>
<tr>
<td><code>HbA1c.md</code></td>
<td><code>hba1c.md</code></td>
</tr>
<tr>
<td><code>Coenzyme Q10.md</code></td>
<td><code>CoQ10.md</code> (use full name)</td>
</tr>
</tbody>
</table>
<p><strong>Why this matters:</strong> The filename becomes the entity name in the knowledge graph and must match the <code>name</code> field in your frontmatter exactly.</p>
<h2>What Gets Synced</h2>
<p>When you sync your vault with Neo4j:</p>
<p><strong>Synced (becomes part of your knowledge graph):</strong></p>
<ul>
<li>All files in <code>entities/</code> subfolders with valid frontmatter</li>
<li>Properties from YAML frontmatter (name, type, description, tags, etc.)</li>
<li>Relationships defined in the note body (see <a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a>)</li>
</ul>
<p><strong>Not synced:</strong></p>
<ul>
<li>Files outside <code>entities/</code> (daily notes, personal notes, this guide)</li>
<li>Files in <code>_review/pending/</code> (until approved)</li>
<li>Files without proper YAML frontmatter</li>
<li>Personal health logs (supplement logs, biomarker targets) — these are managed through the web dashboard</li>
</ul>
<h2>The <code>_review/</code> Folder</h2>
<p>New entities imported from external sources (PubMed, DrugBank, web pages) land in <code>_review/pending/</code> before joining your main knowledge graph. This human-in-the-loop workflow ensures quality:</p>
<ol>
<li><strong>Import</strong> — An entity is ingested from an external source</li>
<li><strong>Pending</strong> — The entity sits in <code>_review/pending/{type}/</code> for your review</li>
<li><strong>Approve</strong> — Move it to <code>entities/{type}/</code> and sync to Neo4j</li>
<li><strong>Reject</strong> — Move it to <code>_review/rejected/</code> with a reason</li>
</ol>
<p>You can browse and manage the review queue from the Obsidian plugin or the web dashboard.</p>
<h2>The <code>templates/</code> Folder</h2>
<p>Contains markdown templates for each entity type. When you create a new entity using the wizard (see <a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a>), the appropriate template is applied automatically. Templates include:</p>
<ul>
<li>Pre-filled YAML frontmatter with all recommended fields</li>
<li>Standard section headings for the entity type</li>
<li>Placeholder text explaining what to write in each section</li>
<li>A Relationships section ready for you to fill in</li>
</ul>
<h2>Curated vs. Personal Data</h2>
<p>Entities in the knowledge graph can be either:</p>
<ul>
<li><strong>Curated</strong> (shared knowledge) — General health information like &quot;Magnesium improves blood pressure.&quot; These are what you'll publish in a digital garden and share with others.</li>
<li><strong>Personal</strong> (<code>isPersonal: true</code>) — Your own health data. These are excluded from publishing and kept private.</li>
</ul>
<p>Most entities you create will be curated knowledge. Your personal biomarker readings, supplement logs, and health targets are stored separately through the web dashboard, not as entity files.</p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Learn how to create new entity notes</li>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Connect entities with typed relationships</li>
<li><a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a> — Sync your vault with the knowledge graph database</li>
</ul>

{% endraw %}