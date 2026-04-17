---
created: '2026-04-17T18:59:21.347790Z'
description: How to create knowledge graph entries using the wizard, templates, or
  manual creation with YAML frontmatter
dg-home: false
dg-publish: true
permalink: /entities/users_guide/creating-entities/
slug: creating-entities
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Creating Entities
type: users_guide
updated: '2026-04-17T18:59:21.347790Z'
---

{% raw %}
<h1>Creating Entities</h1>
<p>Every note in your <code>entities/</code> folder represents a node in your knowledge graph. This guide shows you how to create new entities — whether through the guided wizard, templates, or from scratch.</p>
<h2>Three Ways to Create an Entity</h2>
<h3>Method 1: Entity Creation Wizard (Recommended)</h3>
<p>The easiest way to create a new entity:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Create New Entity (Wizard)&quot;</strong></li>
<li>The wizard walks you through:
<ul>
<li><strong>Select entity type</strong> — Choose from the 26 available types</li>
<li><strong>Enter a name</strong> — The name becomes the filename</li>
<li><strong>Fill in properties</strong> — Type-specific fields appear automatically</li>
<li><strong>Preview</strong> — See the generated note before creating it</li>
</ul>
</li>
<li>Click <strong>Create</strong> — The file is saved to the correct <code>entities/{type}/</code> folder</li>
</ol>
<p>The wizard checks for duplicates in Neo4j before creating, so you won't accidentally create an entity that already exists.</p>
<h3>Method 2: Smart Templates</h3>
<p>If you're already writing a note and want to convert it to a proper entity:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Get Smart Template Suggestions&quot;</strong></li>
<li>The AI analyzes your note content and suggests the most appropriate entity template</li>
<li>Select a suggestion to apply the template structure</li>
</ol>
<h3>Method 3: Manual Creation</h3>
<p>Create a new markdown file directly:</p>
<ol>
<li>Navigate to the correct folder (e.g., <code>entities/supplement/</code>)</li>
<li>Create a new file with the entity name (e.g., <code>Zinc.md</code>)</li>
<li>Add the required YAML frontmatter (see below)</li>
<li>Write the content sections</li>
<li>Save — if auto-sync is enabled, it syncs to Neo4j automatically</li>
</ol>
<h2>Understanding YAML Frontmatter</h2>
<p>Every entity file starts with YAML frontmatter — a block of structured data between <code>---</code> markers. This is the bridge between your Obsidian note and the knowledge graph database. The frontmatter defines the entity's properties, while the markdown body contains detailed content.</p>
<pre><code class="language-yaml">---
name: Zinc
type: Supplement
description: Essential trace mineral for immune function and enzymatic reactions.
source: Manual
created: 2026-04-14T12:00:00+0000
last_modified: 2026-04-14T12:00:00+0000
dg-publish: true
last_sync: null
confidence_score: 0.0
isPersonal: false
tags:
  - supplement
  - mineral
  - immune
---
</code></pre>
<h2>Required Fields (All Entity Types)</h2>
<p>Every entity must have these fields:</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>What It Is</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code></td>
<td>Display name (must match filename)</td>
<td><code>Zinc</code></td>
</tr>
<tr>
<td><code>type</code></td>
<td>Entity type in PascalCase</td>
<td><code>Supplement</code></td>
</tr>
<tr>
<td><code>description</code></td>
<td>1-3 sentence summary</td>
<td><code>Essential trace mineral...</code></td>
</tr>
<tr>
<td><code>source</code></td>
<td>Where the data came from</td>
<td><code>Manual</code></td>
</tr>
<tr>
<td><code>created</code></td>
<td>ISO datetime with timezone</td>
<td><code>2026-04-14T12:00:00+0000</code></td>
</tr>
<tr>
<td><code>last_modified</code></td>
<td>Last edit timestamp</td>
<td><code>2026-04-14T12:00:00+0000</code></td>
</tr>
<tr>
<td><code>dg-publish</code></td>
<td>Include in digital garden?</td>
<td><code>true</code> or <code>false</code></td>
</tr>
<tr>
<td><code>last_sync</code></td>
<td>Last sync timestamp (leave null for new)</td>
<td><code>null</code></td>
</tr>
<tr>
<td><code>confidence_score</code></td>
<td>How reliable (0.0-1.0)</td>
<td><code>0.85</code></td>
</tr>
<tr>
<td><code>isPersonal</code></td>
<td>Is this private health data?</td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>tags</code></td>
<td>Lowercase category tags</td>
<td><code>[supplement, mineral]</code></td>
</tr>
</tbody>
</table>
<h3>Important rules</h3>
<ul>
<li>The <code>name</code> field must exactly match the filename (without <code>.md</code>)</li>
<li>The <code>type</code> field must use exact PascalCase: <code>Supplement</code>, not <code>supplement</code> or <code>SUPPLEMENT</code></li>
<li>Keep frontmatter flat — no nested objects. Complex data goes in the markdown body</li>
<li>Fields you should never edit manually: <code>element_id</code>, <code>content_hash</code>, <code>last_sync_hash</code> — the sync system manages these</li>
</ul>
<h2>Type-Specific Fields</h2>
<p>Different entity types have additional fields. Here are the most common ones:</p>
<h3>Supplement Fields</h3>
<pre><code class="language-yaml">mechanism_of_action: &quot;Cofactor in 300+ enzymatic reactions&quot;
dosage_info: &quot;200-400 mg daily with food&quot;
evidence_level: 4
pubchem_id: &quot;5462224&quot;
synonyms:
  - Magnesium Citrate
  - Magnesium Glycinate
purchaseLink: &quot;https://example.com/magnesium&quot;
</code></pre>
<p>The <code>evidence_level</code> uses a 0-5 scale (see <a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a> for details).</p>
<h3>Drug Fields</h3>
<pre><code class="language-yaml">drugbank_id: DB00331
drug_class: &quot;Biguanide&quot;
indication: &quot;Type 2 Diabetes Mellitus&quot;
half_life: &quot;6.2 hours&quot;
contraindications:
  - Renal impairment
  - Metabolic acidosis
side_effects:
  - Gastrointestinal discomfort
  - Lactic acidosis (rare)
</code></pre>
<h3>Condition Fields</h3>
<pre><code class="language-yaml">condition_type: disease
icd10_code: E11.9
symptoms:
  - Frequent urination
  - Increased thirst
  - Fatigue
risk_factors:
  - Obesity
  - Physical inactivity
  - Family history
treatment_approaches:
  - Lifestyle intervention
  - Metformin
  - Insulin therapy
</code></pre>
<h3>Biomarker Fields</h3>
<pre><code class="language-yaml">measurement_unit: &quot;mg/dL&quot;
sample_type: &quot;Blood&quot;
fasting_required: true
reference_ranges:
  normal: &quot;&lt;100 mg/dL&quot;
  borderline: &quot;100-125 mg/dL&quot;
  high: &quot;&gt;125 mg/dL&quot;
</code></pre>
<h3>Intervention Fields</h3>
<pre><code class="language-yaml">intervention_type: exercise
mechanism_of_action: &quot;Increases BDNF and promotes neuroplasticity&quot;
frequency: &quot;3-5 times per week&quot;
duration: &quot;30-60 minutes per session&quot;
</code></pre>
<h3>Pathway Fields</h3>
<pre><code class="language-yaml">pathway_type: signaling
pathway_category: Cell Growth
kegg_id: hsa04150
reactome_id: R-HSA-165159
</code></pre>
<h2>Content Structure</h2>
<p>After the frontmatter, write the entity content in standard markdown. Each entity type has recommended sections:</p>
<h3>Supplement Content Template</h3>
<pre><code class="language-markdown"># Magnesium

## Overview
Brief description. Evidence Level: 4/5.

## Mechanism of Action
How the supplement works at a biological level.

## Research Summary
Key findings from clinical studies.

## Administration Guide
- **Dosage:** 200-400 mg daily
- **Timing:** Evening, with food
- **Forms:** Citrate (general), Glycinate (sleep), L-Threonate (cognitive)

## Safety Information
Contraindications, side effects, drug interactions.

## Relationships
(See [[Relationships and Links]] for syntax)

## References
- Author et al. Journal Year — Key finding
</code></pre>
<h3>Condition Content Template</h3>
<pre><code class="language-markdown"># Diabetes

## Overview
Description and epidemiology.

## Subtypes
Type 1, Type 2, Gestational, LADA, MODY.

## Diagnostic Criteria
How it's diagnosed.

## Risk Factors
What increases the likelihood.

## Treatment Approaches
Evidence-based treatment options.

## Complications
What can happen if unmanaged.

## Relationships
(Connections to biomarkers, supplements, drugs, etc.)

## References
- Clinical guidelines, studies
</code></pre>
<h3>Biomarker Content Template</h3>
<pre><code class="language-markdown"># HbA1c

## Overview
What this biomarker measures and why it matters.

## Reference Ranges
| Range | Value | Interpretation |
|-------|-------|----------------|
| Normal | &lt; 5.7% | No diabetes |
| Prediabetes | 5.7-6.4% | Increased risk |
| Diabetes | &gt;= 6.5% | Diagnostic threshold |

## Testing Information
Sample type, fasting requirements, frequency.

## Factors That Affect Levels
Supplements, medications, lifestyle factors.

## Relationships

## References
</code></pre>
<h2>Tagging Guidelines</h2>
<p>Tags help organize and filter entities. Use lowercase with underscores:</p>
<pre><code class="language-yaml">tags:
  - supplement          # Always include the entity type
  - mineral             # Category
  - immune              # System it affects
  - anti_inflammatory   # Mechanism
  - cardiovascular      # Another system
</code></pre>
<p><strong>Common tag categories:</strong></p>
<ul>
<li><strong>Body systems:</strong> cardiovascular, neurological, immune, digestive, endocrine, metabolic</li>
<li><strong>Mechanisms:</strong> anti_inflammatory, antioxidant, neuroprotective, insulin_sensitizing</li>
<li><strong>Categories:</strong> essential_nutrient, amino_acid, vitamin, mineral, herb</li>
<li><strong>Risk areas:</strong> cardiovascular_risk, diabetes_risk, cancer_risk</li>
</ul>
<h2>Bulk Import</h2>
<p>To import multiple entities at once:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Bulk Import Entities&quot;</strong></li>
<li>Provide data in CSV or JSON format</li>
<li>The plugin creates entity files for each row/entry</li>
</ol>
<p>This is useful when migrating existing data or importing from external databases.</p>
<h2>Complete Example: Minimal Supplement Entity</h2>
<p>Here's a ready-to-use example you can copy as a starting point:</p>
<pre><code class="language-markdown">---
name: Zinc
type: Supplement
description: Essential trace mineral supporting immune function, wound healing, and protein synthesis.
source: Manual
created: 2026-04-14T12:00:00+0000
last_modified: 2026-04-14T12:00:00+0000
dg-publish: true
last_sync: null
confidence_score: 0.8
isPersonal: false
evidence_level: 4
mechanism_of_action: &quot;Cofactor in 100+ enzymes, supports T-cell development&quot;
dosage_info: &quot;15-30 mg daily&quot;
tags:
  - supplement
  - mineral
  - immune
---

# Zinc

## Overview

Zinc is an essential trace mineral involved in over 100 enzymatic reactions. It plays critical roles in immune function, protein synthesis, wound healing, and DNA synthesis. Evidence Level: 4/5.

## Mechanism of Action

Zinc supports the development and function of immune cells including T-lymphocytes and natural killer cells. It acts as a structural component in zinc-finger transcription factors and as a cofactor for metalloenzymes.

## Administration Guide

- **Dosage:** 15-30 mg daily (elemental zinc)
- **Timing:** With meals to reduce nausea
- **Best forms:** Picolinate (high absorption), Citrate (general), Gluconate (lozenges)
- **Duration:** Safe for long-term use at recommended doses

## Safety Information

- **Side effects:** Nausea at doses &gt;50 mg, copper depletion with chronic use &gt;40 mg
- **Interactions:** Competes with copper absorption; take 2h apart from antibiotics
- **Upper limit:** 40 mg/day for adults (Institute of Medicine)

## Relationships

IMPROVES_BIOMARKER::[[White Blood Cell Count]]
SYNERGISTIC_WITH::[[Vitamin C]]
MAY_IMPROVE_CONDITION::[[Common Cold]]
AFFECTS_ORGAN::[[Thymus]]
INTERACTS_WITH::[[Copper]]

## References

- Prasad AS. Zinc in Human Health. Biomedical Research Trace Elements 2009
- Read SA et al. The Role of Zinc in Antiviral Immunity. Advances in Nutrition 2019
</code></pre>
<h2>What Happens After Creation</h2>
<p>When you save a new entity file:</p>
<ol>
<li>If <strong>auto-sync</strong> is enabled, the plugin waits 2 seconds for you to finish editing</li>
<li>It parses the frontmatter and relationships</li>
<li>It creates a node in Neo4j with all the properties</li>
<li>It creates edges for any relationships it finds</li>
<li>It updates the <code>last_sync</code> and <code>element_id</code> fields in your frontmatter</li>
</ol>
<p>The entity now appears in the web dashboard's knowledge graph, search results, and entity browser.</p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Learn how to connect entities with typed relationships</li>
<li><a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a> — Understand the full sync workflow</li>
<li><a href="/entities/users_guide/tips-and-best-practices/" class="internal-link">Tips and Best Practices</a> — Quality standards for great entity notes</li>
</ul>

{% endraw %}