---
created: '2026-04-17T18:59:21.393233Z'
description: AI chat, deep research, PubMed search, entity extraction, note analysis,
  and citation suggestions
dg-home: false
dg-publish: true
permalink: /entities/users_guide/ai-research-tools/
slug: ai-research-tools
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: AI Research Tools
type: users_guide
updated: '2026-04-17T18:59:21.393233Z'
---

{% raw %}
<h1>AI Research Tools</h1>
<p>MKG includes a suite of AI-powered features for biomedical research, note analysis, and knowledge discovery. These tools help you find scientific evidence, extract entities from literature, get answers grounded in your knowledge graph, and improve the quality of your notes.</p>
<h2>Setting Up AI Features</h2>
<p>AI features require a language model provider. Configure this in the plugin settings:</p>
<ol>
<li>Open <strong>Settings &gt; Community Plugins &gt; MKG</strong></li>
<li>Toggle <strong>&quot;Enable LLM Features&quot;</strong> on</li>
<li>Choose your provider:
<ul>
<li><strong>OpenAI</strong> — GPT models (requires API key from openai.com)</li>
<li><strong>Anthropic</strong> — Claude models (requires API key from anthropic.com)</li>
<li><strong>Google Gemini</strong> — Google's models (requires API key)</li>
<li><strong>Ollama</strong> — Run models locally for free (requires Ollama installed on your machine)</li>
</ul>
</li>
<li>Enter your API key (not needed for Ollama)</li>
</ol>
<p>For Ollama users:</p>
<ul>
<li>Install Ollama from <a href="https://ollama.com">ollama.com</a></li>
<li>Set the <strong>Ollama Base URL</strong> (default: <code>http://localhost:11434</code>)</li>
<li>Click <strong>&quot;Fetch Models&quot;</strong> to see available models</li>
<li>Select the model you want to use</li>
</ul>
<p>AI features are optional — all core MKG functionality works without them.</p>
<h2>AI Chat</h2>
<p>The chat feature gives you a conversational AI assistant with full context from your knowledge graph.</p>
<h3>From the Web Dashboard</h3>
<ol>
<li>Open the <strong>Chat</strong> page from the sidebar</li>
<li>Type a question or select from suggested prompts:
<ul>
<li>&quot;What supplements should I consider for better sleep?&quot;</li>
<li>&quot;Explain the relationship between cortisol and magnesium&quot;</li>
<li>&quot;Based on my biomarkers, what should I focus on?&quot;</li>
</ul>
</li>
<li>The AI searches your knowledge graph for relevant entities</li>
<li>It generates an answer grounded in your KG data, citing specific entities</li>
<li>Click cited entity names to navigate to their detail pages</li>
</ol>
<h3>From Obsidian</h3>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Chat: Open Health Chat Panel&quot;</strong></li>
<li>A chat panel opens in the Obsidian sidebar</li>
<li>Ask questions just like the web version</li>
</ol>
<p><strong>Message limits by tier:</strong> Free: 3/day, Pro: 100/day, Premium: 500/day</p>
<h2>Deep Research</h2>
<p>Deep research lets you conduct multi-source literature reviews on biomedical topics. This is a Pro-tier feature.</p>
<h3>Available Research Commands</h3>
<p>Open the command palette and search for any of these:</p>
<table>
<thead>
<tr>
<th>Command</th>
<th>What It Does</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Research: Open Deep Research</strong></td>
<td>Comprehensive multi-source research on a topic</td>
</tr>
<tr>
<td><strong>Research: Quick Research on Topic</strong></td>
<td>Fast overview from top sources</td>
</tr>
<tr>
<td><strong>Research: Evidence Synthesis</strong></td>
<td>Synthesize findings across multiple papers</td>
</tr>
<tr>
<td><strong>Research: Trend Analysis</strong></td>
<td>Analyze publication trends over time</td>
</tr>
<tr>
<td><strong>Research: Find Research Gaps</strong></td>
<td>Identify understudied areas and contradictions</td>
</tr>
<tr>
<td><strong>Research: Compare Entities</strong></td>
<td>Side-by-side comparison of two or more entities</td>
</tr>
</tbody>
</table>
<h3>How Deep Research Works</h3>
<ol>
<li>Choose your research topic (e.g., &quot;Berberine for insulin resistance&quot;)</li>
<li>Select research depth:
<ul>
<li><strong>Quick</strong> — Fast overview, top findings only</li>
<li><strong>Standard</strong> — Balanced depth and breadth</li>
<li><strong>Comprehensive</strong> — Deep dive with web search included</li>
</ul>
</li>
<li>The system queries multiple databases:
<ul>
<li>PubMed (biomedical literature)</li>
<li>Semantic Scholar (academic papers)</li>
<li>OpenAlex (250M+ scholarly works)</li>
<li>ClinicalTrials.gov (clinical trial data)</li>
<li>Your own knowledge graph</li>
</ul>
</li>
<li>AI synthesizes the results into a structured report</li>
<li>Optionally save the report to your vault</li>
</ol>
<p>Research reports include:</p>
<ul>
<li>Key findings summary</li>
<li>Evidence quality assessment</li>
<li>Relevant study details (study type, sample size, outcomes)</li>
<li>Identified knowledge gaps</li>
<li>Suggested next steps</li>
</ul>
<h3>PubMed Search</h3>
<p>For direct literature searches:</p>
<ol>
<li>Command: <strong>&quot;Search PubMed for Research Papers&quot;</strong></li>
<li>Enter your search query (supports MeSH terms and Boolean operators)</li>
<li>Browse results with abstracts</li>
<li>Click papers to view details</li>
<li>Import papers as Research entities to your vault</li>
</ol>
<h3>Process a Paper</h3>
<p>Found a relevant paper?</p>
<ol>
<li>Command: <strong>&quot;Process PubMed Paper&quot;</strong> (Ctrl+Shift+P)</li>
<li>Enter the PMID (PubMed ID)</li>
<li>The system fetches the paper metadata and abstract</li>
<li>AI extracts key entities, findings, and relationships</li>
<li>Creates a structured Research entity note in your vault</li>
</ol>
<h2>Note Analysis and Enhancement</h2>
<h3>Analyze Current Note</h3>
<p>Get AI-powered insights about a note you're working on:</p>
<ol>
<li>Open any entity note in Obsidian</li>
<li>Command: <strong>&quot;Analyze Current Note with AI&quot;</strong></li>
<li>The AI reads your note and provides:
<ul>
<li>Key health insights</li>
<li>Potential risk factors identified</li>
<li>Recommendations based on the content</li>
<li>Quality and completeness scores</li>
<li>Missing information suggestions</li>
</ul>
</li>
</ol>
<p>You can set this to trigger automatically when you open entity notes (in plugin settings, set Note Analysis trigger to &quot;Auto&quot;).</p>
<h3>Enhance Note Content</h3>
<p>Improve the structure and completeness of a note:</p>
<ol>
<li>Open an entity note</li>
<li>Command: <strong>&quot;Enhance Note with AI Suggestions&quot;</strong></li>
<li>The AI suggests:
<ul>
<li>Missing sections that should be added</li>
<li>Information gaps to fill</li>
<li>Structural improvements</li>
<li>Additional relationships to consider</li>
</ul>
</li>
<li>Review and apply the suggestions</li>
</ol>
<h3>Contextual Insights Panel</h3>
<p>A live sidebar that provides real-time insights as you work:</p>
<ol>
<li>Command: <strong>&quot;Show Health Insights Panel&quot;</strong></li>
<li>The insights panel opens in the right sidebar</li>
<li>As you edit entity notes, the panel updates with:
<ul>
<li>Related entities from the knowledge graph</li>
<li>Research connections</li>
<li>Health recommendations</li>
<li>Pattern recognition across your data</li>
</ul>
</li>
</ol>
<p>Toggle it on/off with <strong>&quot;Toggle Contextual Insights&quot;</strong>.</p>
<h2>Entity Extraction</h2>
<p>AI can automatically identify biomedical entities in text and create knowledge graph entries.</p>
<h3>Extract from Current Note</h3>
<ol>
<li>Open any note with health-related content</li>
<li>Command: <strong>&quot;KG: Extract Entities from Note&quot;</strong></li>
<li>The AI identifies supplements, conditions, biomarkers, drugs, and other entities</li>
<li>Extracted entities appear in the <strong>Entity Suggestions Panel</strong></li>
<li>For each suggestion:
<ul>
<li>Review the entity name, type, and properties</li>
<li>Click <strong>Accept</strong> to create a new entity file</li>
<li>Click <strong>Reject</strong> to dismiss</li>
</ul>
</li>
</ol>
<h3>Extract from Text</h3>
<ol>
<li>Copy health-related text to your clipboard (from a paper, website, etc.)</li>
<li>Command: <strong>&quot;Extract Entities from Text&quot;</strong></li>
<li>The AI processes the clipboard content</li>
<li>Same accept/reject workflow as above</li>
</ol>
<h3>Agent Oversight Modes</h3>
<p>The extraction system supports three levels of human oversight:</p>
<table>
<thead>
<tr>
<th>Mode</th>
<th>Behavior</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Auto</strong></td>
<td>High-confidence extractions are committed automatically</td>
<td>Trusted sources, bulk processing</td>
</tr>
<tr>
<td><strong>Queue</strong></td>
<td>All extractions go to the review queue</td>
<td>Careful curation, quality control</td>
</tr>
<tr>
<td><strong>Inline</strong></td>
<td>Suggestions shown inline for manual action</td>
<td>Interactive editing</td>
</tr>
</tbody>
</table>
<p>Configure the default mode in plugin settings.</p>
<h2>Relationship Suggestions</h2>
<p>AI can discover potential relationships between entities:</p>
<ol>
<li>Open an entity note</li>
<li>Command: <strong>&quot;Suggest Relationships in Current Note&quot;</strong></li>
<li>The AI analyzes the entity's content and the broader knowledge graph</li>
<li>It suggests relationships with:
<ul>
<li>Target entity name</li>
<li>Relationship type</li>
<li>Confidence score</li>
<li>Brief explanation</li>
</ul>
</li>
<li>Accept suggestions to add them to the Relationships section</li>
</ol>
<h2>Medical Term Explanations</h2>
<p>Encounter an unfamiliar term while reading?</p>
<ol>
<li>Select the term in your note</li>
<li>Command: <strong>&quot;Explain Selected Medical Term&quot;</strong></li>
<li>Get a plain-language explanation including:
<ul>
<li>Definition</li>
<li>Clinical significance</li>
<li>Related entities in your knowledge graph</li>
</ul>
</li>
</ol>
<h2>Citation Suggestions</h2>
<p>Need scientific backing for a claim in your note?</p>
<ol>
<li>Select the text you want to cite</li>
<li>Command: <strong>&quot;Suggest Citations for Selection&quot;</strong></li>
<li>The AI searches for relevant research papers</li>
<li>Choose from suggested citations</li>
<li>The citation is added to your References section</li>
</ol>
<h2>Ingest from External Sources</h2>
<p>Import entities directly from biomedical databases:</p>
<ol>
<li>Command: <strong>&quot;KG: Ingest from Source&quot;</strong></li>
<li>Choose the source:
<ul>
<li><strong>PubMed</strong> — Enter a PMID or search query</li>
<li><strong>DrugBank</strong> — Enter a drug name or DrugBank ID</li>
<li><strong>PubChem</strong> — Enter a compound name or CID</li>
<li><strong>Web URL</strong> — Paste a URL to extract entities from</li>
</ul>
</li>
<li>The system fetches data and creates entity notes</li>
<li>New entities go to the review queue (see <a href="/entities/users_guide/understanding-the-vault/" class="internal-link">Understanding the Vault</a>)</li>
</ol>
<h2>Research Feed</h2>
<p>Stay updated on topics you care about:</p>
<ol>
<li>Command: <strong>&quot;View Research Feed&quot;</strong></li>
<li>Browse saved searches and recently published papers</li>
<li>See new findings relevant to your knowledge graph</li>
<li>Import interesting papers to your vault</li>
</ol>
<h2>AI Feature Keyboard Shortcuts</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Default Shortcut</th>
</tr>
</thead>
<tbody>
<tr>
<td>Process PubMed Paper</td>
<td>Ctrl+Shift+P</td>
</tr>
<tr>
<td>Open MKG Dashboard</td>
<td>Ctrl+Shift+D</td>
</tr>
</tbody>
</table>
<p>Other AI features can have custom hotkeys assigned in the plugin settings under &quot;Hotkey Configuration.&quot;</p>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a> — Create entities to build the knowledge graph AI draws from</li>
<li><a href="/entities/users_guide/relationships-and-links/" class="internal-link">Relationships and Links</a> — Add relationships that AI chat and research use for context</li>
<li><a href="/entities/users_guide/experiments/" class="internal-link">Experiments</a> — Design experiments informed by your research findings</li>
</ul>

{% endraw %}