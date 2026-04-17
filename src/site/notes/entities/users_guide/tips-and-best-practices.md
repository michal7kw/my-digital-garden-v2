---
created: '2026-04-17T18:59:21.441403Z'
description: Quality standards, evidence level scale, naming conventions, tagging,
  and relationship best practices
dg-home: false
dg-publish: true
permalink: /entities/users_guide/tips-and-best-practices/
slug: tips-and-best-practices
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Tips and Best Practices
type: users_guide
updated: '2026-04-17T18:59:21.441403Z'
---

{% raw %}
<h1>Tips and Best Practices</h1>
<p>This guide covers quality standards, naming conventions, evidence ratings, and best practices for building a high-quality knowledge graph. Following these guidelines makes your knowledge graph more useful, your notes more findable, and your digital garden more credible.</p>
<h2>Evidence Level Scale</h2>
<p>MKG uses a 0-5 scale to rate the strength of scientific evidence for supplements, interventions, and health claims:</p>
<table>
<thead>
<tr>
<th>Level</th>
<th>Label</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>5</strong></td>
<td>Strong</td>
<td>Multiple large RCTs, systematic reviews, strong consensus</td>
<td>Omega-3 for triglycerides</td>
</tr>
<tr>
<td><strong>4</strong></td>
<td>Good</td>
<td>RCTs and meta-analyses with consistent results</td>
<td>Magnesium for blood pressure</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td>Moderate</td>
<td>Some RCTs, mixed results, moderate sample sizes</td>
<td>Ashwagandha for cortisol</td>
</tr>
<tr>
<td><strong>2</strong></td>
<td>Limited</td>
<td>Mostly observational studies, small RCTs</td>
<td>Lion's Mane for cognition</td>
</tr>
<tr>
<td><strong>1</strong></td>
<td>Preliminary</td>
<td>Animal studies, cell culture, pilot human studies</td>
<td>NMN for aging</td>
</tr>
<tr>
<td><strong>0</strong></td>
<td>Traditional</td>
<td>Traditional use only, no clinical evidence</td>
<td>Some herbal remedies</td>
</tr>
</tbody>
</table>
<p>Include the evidence level in your note's frontmatter (<code>evidence_level: 4</code>) and mention it in the Overview section (&quot;Evidence Level: 4/5&quot;).</p>
<h2>Content Quality Standards</h2>
<h3>What Makes a Good Entity Note</h3>
<p><strong>Accuracy</strong> — Every claim should be evidence-based. Don't write &quot;Zinc cures the common cold&quot; when the evidence actually says &quot;Zinc may reduce the duration of cold symptoms by 1-2 days when taken within 24 hours of onset.&quot;</p>
<p><strong>Citations</strong> — Include references for key claims. Use PubMed IDs (PMIDs) when possible — they're universally accessible and permanent. Format: <code>Author et al. Journal Year — Key finding</code>.</p>
<p><strong>Completeness</strong> — Fill in all recommended sections for the entity type. A supplement note should have mechanism of action, dosage, safety information, and relationships — not just an overview.</p>
<p><strong>Clarity</strong> — Write for an educated non-expert. Someone with a science background but not a specialist in this area should understand your note. Avoid unnecessary jargon; define specialized terms when you first use them.</p>
<p><strong>Objectivity</strong> — Present balanced information. Include limitations, conflicting evidence, and caveats alongside benefits. &quot;Curcumin shows promise for inflammation (Level 3), though bioavailability remains a challenge&quot; is better than &quot;Curcumin is a powerful anti-inflammatory.&quot;</p>
<h3>What to Avoid</h3>
<ul>
<li>Unsubstantiated health claims</li>
<li>Marketing language (&quot;miracle,&quot; &quot;breakthrough,&quot; &quot;game-changer&quot;)</li>
<li>Personal opinions presented as facts</li>
<li>Outdated information (check publication dates)</li>
<li>Copyrighted content (paraphrase and cite instead)</li>
<li>Overly technical language without explanation</li>
</ul>
<h2>Naming Conventions</h2>
<h3>File Names</h3>
<table>
<thead>
<tr>
<th>Rule</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Use Title Case with spaces</td>
<td><code>Omega-3 Fatty Acids.md</code></td>
</tr>
<tr>
<td>Keep hyphens where natural</td>
<td><code>N-Acetyl Cysteine.md</code></td>
</tr>
<tr>
<td>Use full names, not abbreviations</td>
<td><code>Coenzyme Q10.md</code> not <code>CoQ10.md</code></td>
</tr>
<tr>
<td>Match the <code>name</code> field exactly</td>
<td>filename = <code>Zinc.md</code>, frontmatter = <code>name: Zinc</code></td>
</tr>
</tbody>
</table>
<h3>ID Field</h3>
<p>The <code>id</code> field is derived from the filename:</p>
<ul>
<li>Convert to lowercase</li>
<li>Replace spaces with underscores</li>
<li>Keep hyphens or convert to underscores</li>
</ul>
<table>
<thead>
<tr>
<th>Filename</th>
<th>ID</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Omega-3 Fatty Acids.md</code></td>
<td><code>omega_3_fatty_acids</code></td>
</tr>
<tr>
<td><code>Coenzyme Q10.md</code></td>
<td><code>coenzyme_q10</code></td>
</tr>
<tr>
<td><code>HbA1c.md</code></td>
<td><code>hba1c</code></td>
</tr>
</tbody>
</table>
<h3>Type Field</h3>
<p>Must use exact PascalCase. These are the valid values:</p>
<p><code>Supplement</code>, <code>Drug</code>, <code>Condition</code>, <code>Biomarker</code>, <code>Intervention</code>, <code>Organ</code>, <code>Hormone</code>, <code>Neurotransmitter</code>, <code>Metabolite</code>, <code>CellularComponent</code>, <code>Pathway</code>, <code>Protein</code>, <code>Gene</code>, <code>Nutrient</code>, <code>BiologicalProcess</code>, <code>LabTest</code>, <code>LabTestPanel</code>, <code>ClinicalPattern</code>, <code>Phenotype</code>, <code>CognitiveFunction</code>, <code>Anatomy</code>, <code>Research</code>, <code>SideEffect</code>, <code>Exposure</code>, <code>HealthStack</code></p>
<h2>Tagging Best Practices</h2>
<h3>Required Tags</h3>
<p>Every entity should have at least:</p>
<ol>
<li>The entity type tag (lowercase): <code>supplement</code>, <code>condition</code>, <code>biomarker</code></li>
<li>One or more category tags</li>
</ol>
<h3>Common Tag Categories</h3>
<p><strong>Body systems:</strong> <code>cardiovascular</code>, <code>neurological</code>, <code>immune</code>, <code>digestive</code>, <code>endocrine</code>, <code>metabolic</code>, <code>musculoskeletal</code>, <code>respiratory</code></p>
<p><strong>Mechanisms:</strong> <code>anti_inflammatory</code>, <code>antioxidant</code>, <code>neuroprotective</code>, <code>insulin_sensitizing</code>, <code>immune_modulating</code>, <code>hormone_regulating</code></p>
<p><strong>Categories:</strong> <code>essential_nutrient</code>, <code>amino_acid</code>, <code>vitamin</code>, <code>mineral</code>, <code>herb</code>, <code>adaptogen</code>, <code>probiotic</code></p>
<p><strong>Risk areas:</strong> <code>cardiovascular_risk</code>, <code>diabetes_risk</code>, <code>cancer_risk</code>, <code>cognitive_decline</code></p>
<h3>Tagging Examples</h3>
<pre><code class="language-yaml"># Supplement
tags: [supplement, mineral, cardiovascular, neuroprotective, essential_nutrient]

# Condition
tags: [condition, metabolic, chronic, endocrinology, diabetes_risk]

# Biomarker
tags: [biomarker, cardiovascular_risk, lipid, blood_test]

# Intervention
tags: [intervention, exercise, cardiovascular, metabolic]
</code></pre>
<h2>Relationship Best Practices</h2>
<h3>Be Specific</h3>
<p>Use the most specific relationship type available:</p>
<table>
<thead>
<tr>
<th>Instead of...</th>
<th>Use...</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>RELATED_TO::[[Diabetes]]</code></td>
<td><code>TREATS_CONDITION::[[Diabetes]]</code></td>
</tr>
<tr>
<td><code>RELATED_TO::[[HbA1c]]</code></td>
<td><code>REDUCES_BIOMARKER::[[HbA1c]]</code></td>
</tr>
<tr>
<td><code>RELATED_TO::[[Aspirin]]</code></td>
<td><code>INTERACTS_WITH::[[Aspirin]]</code></td>
</tr>
</tbody>
</table>
<p><code>RELATED_TO</code> should be a last resort for connections that don't fit any specific type.</p>
<h3>Aim for 5-15 Relationships Per Entity</h3>
<ul>
<li><strong>Too few</strong> (0-3): The entity is an isolated island in the graph — less useful for exploration and AI features</li>
<li><strong>Just right</strong> (5-15): Well-connected, discoverable, meaningful</li>
<li><strong>Too many</strong> (20+): Check if you're using vague types like <code>RELATED_TO</code> instead of specific ones</li>
</ul>
<h3>Include Both Directions</h3>
<p>If Magnesium improves HbA1c, consider also adding a note in the HbA1c entity pointing back to Magnesium. This makes the graph navigable from both sides.</p>
<h3>Document Evidence When Possible</h3>
<p>Add brief context after relationships:</p>
<pre><code>TREATS_CONDITION::[[Diabetes]] - UKPDS trial, first-line therapy
REDUCES_BIOMARKER::[[HbA1c]] - Average reduction 1.0-1.5% (meta-analysis)
</code></pre>
<h2>Frontmatter Best Practices</h2>
<h3>Keep It Flat</h3>
<p>All values should be at the top level — no nested <code>properties:</code> wrapper:</p>
<pre><code class="language-yaml"># Correct
name: Zinc
type: Supplement
evidence_level: 4

# Incorrect — don't nest
properties:
  name: Zinc
  type: Supplement
</code></pre>
<h3>Use ISO Timestamps</h3>
<pre><code class="language-yaml">created: 2026-04-14T12:00:00+0000
last_modified: 2026-04-14T12:00:00+0000
</code></pre>
<h3>Don't Edit System Fields</h3>
<p>Leave these alone — the sync engine manages them:</p>
<ul>
<li><code>element_id</code></li>
<li><code>content_hash</code></li>
<li><code>last_sync_hash</code></li>
<li><code>simple_id</code></li>
<li><code>node_id</code></li>
</ul>
<h2>Writing Style Guide</h2>
<ul>
<li><strong>Active voice</strong> — &quot;Magnesium reduces blood pressure&quot; not &quot;Blood pressure is reduced by magnesium&quot;</li>
<li><strong>Be specific with numbers</strong> — &quot;200-400 mg daily&quot; not &quot;moderate doses&quot;</li>
<li><strong>Include units</strong> — &quot;HbA1c &lt; 5.7%&quot; not &quot;HbA1c in normal range&quot;</li>
<li><strong>Use tables for comparisons</strong> — Especially for reference ranges, dosage comparisons, study results</li>
<li><strong>Most important information first</strong> — Lead sections with the key takeaway</li>
<li><strong>Keep paragraphs focused</strong> — 3-5 sentences, one idea per paragraph</li>
</ul>
<h2>Confidence Scores</h2>
<p>The <code>confidence_score</code> field (0.0-1.0) rates how reliable the entity's data is:</p>
<table>
<thead>
<tr>
<th>Score</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>0.9-1.0</td>
<td>Verified against multiple authoritative sources</td>
</tr>
<tr>
<td>0.7-0.9</td>
<td>Well-researched, from reliable sources</td>
</tr>
<tr>
<td>0.5-0.7</td>
<td>Reasonable but not fully verified</td>
</tr>
<tr>
<td>0.3-0.5</td>
<td>Preliminary, needs more research</td>
</tr>
<tr>
<td>0.0-0.3</td>
<td>Uncertain, based on limited data</td>
</tr>
</tbody>
</table>
<h2>Quality Checklist</h2>
<p>Before syncing a new entity, check:</p>
<p><strong>Frontmatter:</strong></p>
<ul>
<li>[ ] All required fields present (name, type, description, source, dates, tags)</li>
<li>[ ] <code>name</code> matches filename exactly</li>
<li>[ ] <code>type</code> uses exact PascalCase</li>
<li>[ ] <code>id</code> is lowercase with underscores</li>
<li>[ ] <code>description</code> is 1-3 clear sentences</li>
<li>[ ] <code>tags</code> are lowercase with underscores</li>
<li>[ ] ISO timestamps with timezone</li>
<li>[ ] <code>dg-publish: true</code> if you want it in your garden</li>
</ul>
<p><strong>Content:</strong></p>
<ul>
<li>[ ] <code># Entity Name</code> heading matches filename</li>
<li>[ ] Overview section present with evidence level (for supplements)</li>
<li>[ ] Relationships section present with specific types</li>
<li>[ ] References section with at least one citation</li>
<li>[ ] No broken wikilinks in relationships</li>
<li>[ ] No marketing language or unsubstantiated claims</li>
</ul>
<p><strong>Relationships:</strong></p>
<ul>
<li>[ ] Using <code>RELATIONSHIP_TYPE::[[Target]]</code> format</li>
<li>[ ] Target names match existing entity filenames</li>
<li>[ ] Relationship types are UPPERCASE_WITH_UNDERSCORES</li>
<li>[ ] At least 3-5 meaningful relationships</li>
</ul>
<h2>Data Hygiene</h2>
<p>Periodically review your knowledge graph:</p>
<ul>
<li><strong>Remove duplicates</strong> — Search for entities that represent the same thing with different names</li>
<li><strong>Standardize names</strong> — Make sure similar entities use consistent naming</li>
<li><strong>Fix broken links</strong> — Validate that all relationship targets point to existing entities</li>
<li><strong>Update evidence</strong> — Check if newer research has changed evidence levels</li>
<li><strong>Archive outdated info</strong> — Remove or update entries based on superseded research</li>
</ul>
<h2>Reference Resources</h2>
<p>When researching entities, these are useful sources:</p>
<table>
<thead>
<tr>
<th>Source</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr>
<td>PubMed</td>
<td>Clinical studies, systematic reviews</td>
</tr>
<tr>
<td>Examine.com</td>
<td>Supplement evidence summaries</td>
</tr>
<tr>
<td>DrugBank</td>
<td>Drug interactions, pharmacology</td>
</tr>
<tr>
<td>NIH Office of Dietary Supplements</td>
<td>Nutrient fact sheets</td>
</tr>
<tr>
<td>Lab Tests Online</td>
<td>Biomarker reference ranges</td>
</tr>
<tr>
<td>KEGG</td>
<td>Biological pathways</td>
</tr>
<tr>
<td>UniProt</td>
<td>Protein information</td>
</tr>
</tbody>
</table>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Apply these standards to new entities</li>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Build high-quality relationships</li>
<li><a href="/entities/users_guide/digital-garden/" class="internal-link">Digital Garden</a> — Publish your best work</li>
</ul>

{% endraw %}