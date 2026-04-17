---
created: '2026-04-17T18:59:21.426603Z'
description: Complete page-by-page walkthrough of all web dashboard features and pages
dg-home: false
dg-publish: true
permalink: /entities/users_guide/web-dashboard-tour/
slug: web-dashboard-tour
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Web Dashboard Tour
type: users_guide
updated: '2026-04-17T18:59:21.426603Z'
---

{% raw %}
<h1>Web Dashboard Tour</h1>
<p>The MKG web dashboard is a React application that provides visual tools for tracking health data, exploring the knowledge graph, running experiments, and managing your account. This guide walks through every major page.</p>
<h2>Accessing the Dashboard</h2>
<p>Open your MKG web dashboard URL in a browser (e.g., <code>https://your-server.com</code> or <code>http://localhost:3000</code> for local development).</p>
<p><strong>Demo mode:</strong> On the login page, click <strong>&quot;Try Demo&quot;</strong> to explore with preloaded sample data. Demo mode is read-only — you can view everything but can't create or modify data.</p>
<h2>Navigation</h2>
<p>The left sidebar contains links to all major pages. The top header shows your user info, notifications, and settings access.</p>
<h2>Pages Overview</h2>
<h3>Dashboard (Home)</h3>
<p>Your health overview at a glance.</p>
<ul>
<li><strong>Biomarker summary cards</strong> — Recent readings with status indicators (normal/high/low/critical)</li>
<li><strong>Trend overview</strong> — Which biomarkers are improving, declining, or stable</li>
<li><strong>Risk score cards</strong> — Cardiovascular, metabolic, and inflammation risk assessments</li>
<li><strong>Anomaly alerts</strong> — Recent out-of-range values or sudden changes</li>
<li><strong>Recommendations widget</strong> — Time-aware health suggestions (e.g., morning supplements vs. evening routine)</li>
<li><strong>Quick stats</strong> — Total biomarkers tracked, active alerts, insights, recommendations</li>
<li><strong>Customizable layout</strong> — Drag and resize widgets to arrange your dashboard</li>
</ul>
<p>First-time users see a welcome card and product tour.</p>
<h3>Biomarkers</h3>
<p>Track and manage health measurements.</p>
<ul>
<li><strong>List view</strong> — All your biomarker readings with status indicators</li>
<li><strong>Filters</strong> — By status (normal/low/high/critical), category (lipids, hormones, minerals), or search</li>
<li><strong>Add reading</strong> — Manual entry, lab report upload, quick entry, or panel entry</li>
<li><strong>Trend charts</strong> — Click any biomarker to see its history plotted over time</li>
<li><strong>Risk cards</strong> — Aggregate risk scores based on biomarker combinations</li>
<li><strong>Unit converter</strong> — Convert between measurement units (mg/dL ↔ mmol/L)</li>
</ul>
<p>See <a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a> for detailed instructions.</p>
<h3>Knowledge Graph</h3>
<p>Explore your health knowledge visually.</p>
<ul>
<li><strong>Graph Explore tab</strong> — Interactive force-directed graph with colored nodes, type filters, and depth controls</li>
<li><strong>Graph Search tab</strong> — Text search across all entities with type filtering</li>
</ul>
<p>See <a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> for detailed instructions.</p>
<h3>Lab Tests</h3>
<p>Browse and manage laboratory tests.</p>
<ul>
<li><strong>Catalog</strong> — Search all available lab tests, filter by category and sample type</li>
<li><strong>Panels</strong> — Pre-configured test bundles (CBC, CMP, Lipid Panel, Thyroid)</li>
<li><strong>Tracked</strong> — Tests you've completed or are monitoring</li>
<li><strong>Recommended</strong> — AI-suggested tests based on your health profile and goals</li>
<li><strong>Schedule</strong> — Plan future tests with reminders</li>
</ul>
<h3>Health Stacks</h3>
<p>Browse and adopt curated supplement stacks.</p>
<ul>
<li><strong>Stack browser</strong> — Browse 10+ curated stacks by goal category</li>
<li><strong>Stack details</strong> — Supplements with dosages, biomarker targets, evidence ratings</li>
<li><strong>Adopt/Unadopt</strong> — One-click stack adoption adds supplements to your regimen</li>
<li><strong>Personal stacks</strong> — Create custom stacks with your own selections</li>
</ul>
<p>See <a href="/entities/users_guide/supplements-and-health-stacks/" class="internal-link">Supplements and Health Stacks</a> for detailed instructions.</p>
<h3>Experiments</h3>
<p>Design and run N-of-1 self-experiments.</p>
<ul>
<li><strong>Experiment list</strong> — All your experiments with status and progress bars</li>
<li><strong>Create new</strong> — Define hypothesis, intervention, tracked biomarkers, phase durations</li>
<li><strong>Active experiment view</strong> — Add readings, advance phases, view analysis</li>
<li><strong>Results</strong> — Effect sizes, statistical significance, per-biomarker comparison tables</li>
</ul>
<p>See <a href="/entities/users_guide/experiments/" class="internal-link">Experiments</a> for detailed instructions.</p>
<h3>Recommendations</h3>
<p>Personalized health suggestions.</p>
<ul>
<li><strong>Priority-sorted list</strong> — Recommendations ranked by relevance and evidence</li>
<li><strong>AI relevance scoring</strong> — Each recommendation shows why it matters for you</li>
<li><strong>Action tracking</strong> — Mark as complete, dismiss, or snooze</li>
<li><strong>Content Analyzer</strong> — Paste medical content (lab reports, articles) to extract entities and recommendations</li>
</ul>
<h3>BodyMap</h3>
<p>Anatomy-based knowledge graph exploration.</p>
<ul>
<li><strong>Body diagram</strong> — Interactive body outline with highlighted organs</li>
<li><strong>Click organs</strong> — See supplements, biomarkers, and conditions related to that organ</li>
<li><strong>Supplement overlay</strong> — Colored pills showing which supplements target which organs</li>
<li><strong>Connection lines</strong> — Visual links between supplements and their target organs</li>
</ul>
<h3>Brain Explorer</h3>
<p>Specialized view for cognitive and neurological health.</p>
<ul>
<li><strong>Brain regions</strong> — Explore regions and associated pathways</li>
<li><strong>Neurotransmitter connections</strong> — Serotonin, dopamine, GABA, and their interactions</li>
<li><strong>Cognitive functions</strong> — Working memory, attention, executive function</li>
<li><strong>Brain-targeted supplements</strong> — What supports cognitive performance</li>
</ul>
<h3>Chat</h3>
<p>AI-powered health assistant.</p>
<ul>
<li><strong>Conversation interface</strong> — Ask health questions in natural language</li>
<li><strong>KG-grounded answers</strong> — Responses cite entities from your knowledge graph</li>
<li><strong>Session history</strong> — All past conversations accessible in the sidebar</li>
<li><strong>Suggested prompts</strong> — Quick-start questions for common topics</li>
</ul>
<p>See <a href="/entities/users_guide/ai-research-tools/" class="internal-link">AI Research Tools</a> for details.</p>
<h3>Nutrition</h3>
<p>Track dietary patterns and nutrient intake.</p>
<ul>
<li><strong>Patterns tab</strong> — Browse and adopt dietary approaches (Mediterranean, Ketogenic, Paleo, etc.)</li>
<li><strong>Log tab</strong> — Daily meal tracking and nutrient logging</li>
<li><strong>Insights tab</strong> — AI-generated nutritional analysis and recommendations</li>
<li><strong>Nutrients tab</strong> — Browse individual nutrients, their health effects, and food sources</li>
</ul>
<h3>Simulation</h3>
<p>Advanced metabolic pathway simulation.</p>
<ul>
<li><strong>Time Series tab</strong> — Model metabolite concentrations over time</li>
<li><strong>Comparison tab</strong> — Compare different intervention scenarios side-by-side</li>
<li><strong>Causal Network tab</strong> — Interactive pathway visualization (directed acyclic graph)</li>
<li><strong>Dose-Response tab</strong> — Explore optimal dosing with adjustable sliders</li>
<li><strong>Sensitivity tab</strong> — See which parameters most affect outcomes</li>
</ul>
<h3>Bioenergetics</h3>
<p>Energy metabolism exploration.</p>
<ul>
<li><strong>Energy Balance</strong> — ATP production vs. consumption overview</li>
<li><strong>Pathway Explorer</strong> — Interactive metabolic pathway visualization</li>
<li><strong>Interventions</strong> — Supplements and approaches for energy optimization</li>
<li><strong>Metabolic Health</strong> — Energy-related biomarkers and metrics</li>
</ul>
<h3>Drug Interaction Checker</h3>
<p>Check for drug-drug and drug-supplement interactions.</p>
<ul>
<li>Enter your medications and supplements</li>
<li>See interactions with severity ratings (minor, moderate, major)</li>
<li>View interaction mechanisms and clinical significance</li>
<li>Checks against DrugBank's 1.4M+ interaction database</li>
</ul>
<h3>Garden</h3>
<p>Manage your digital garden publishing.</p>
<ul>
<li><strong>Username setup</strong> — Choose your garden identifier</li>
<li><strong>Bio</strong> — Write your garden profile</li>
<li><strong>Publishing controls</strong> — Manage which entities are published</li>
<li><strong>Garden URL</strong> — View and copy your public garden link</li>
</ul>
<p>See <a href="/entities/users_guide/digital-garden/" class="internal-link">Digital Garden</a> for details.</p>
<h3>Import/Export</h3>
<p>Data management tools.</p>
<ul>
<li><strong>Export</strong> — Download your health data in JSON, CSV, or PDF format</li>
<li><strong>Backup &amp; Restore</strong> — Create manual backups, view backup history, restore from previous states</li>
<li><strong>Batch Processing</strong> — Monitor and manage bulk data operations</li>
</ul>
<h3>Settings</h3>
<p>Account and preferences.</p>
<ul>
<li><strong>Profile</strong> — Name, email, account information</li>
<li><strong>Security</strong> — Password, two-factor authentication</li>
<li><strong>Health Goals</strong> — Target weight, exercise frequency, sleep hours, water intake</li>
<li><strong>Notifications</strong> — Email alerts, push notifications, anomaly alerts</li>
<li><strong>Display</strong> — Theme (light/dark), compact mode, trend line visibility, default timeframe</li>
<li><strong>AI &amp; LLM</strong> — Enable/disable AI features, LLM provider settings</li>
<li><strong>Privacy &amp; Data</strong> — Export personal data, delete account, data retention</li>
</ul>
<h3>Developers (Premium)</h3>
<p>Programmatic API access.</p>
<ul>
<li><strong>Generate API keys</strong> — Create named keys for external integrations</li>
<li><strong>Usage stats</strong> — Track request counts per key</li>
<li><strong>Example code</strong> — Copy-paste curl commands using your API key</li>
<li><strong>Key management</strong> — Revoke compromised keys</li>
</ul>
<h3>Admin (Admin Only)</h3>
<p>Platform administration.</p>
<ul>
<li><strong>Overview</strong> — System health and usage statistics</li>
<li><strong>Users</strong> — User management and permissions</li>
<li><strong>Audit Logs</strong> — System action history</li>
<li><strong>Stacks</strong> — Manage curated health stacks</li>
</ul>
<h2>Onboarding Flow</h2>
<p>New users go through an onboarding sequence:</p>
<ol>
<li><strong>Choose your segment</strong> — Consumer, Biohacker, Researcher, or Business</li>
<li><strong>Set health goals</strong> — Select goal categories (cardiovascular, cognitive, energy, sleep, etc.)</li>
<li><strong>Stack recommendations</strong> — AI suggests stacks based on your goals</li>
<li><strong>Adopt stacks</strong> — Select and adopt recommended stacks</li>
</ol>
<p>After onboarding, you're redirected based on your segment:</p>
<ul>
<li>Consumers → Lab Tests page</li>
<li>Biohackers → Experiments page</li>
<li>Researchers → Knowledge Graph page</li>
<li>Business users → Settings page</li>
</ul>
<h2>Download Page</h2>
<p>Download the Obsidian vault template:</p>
<ul>
<li>Check the latest available version</li>
<li>Download the ZIP file</li>
<li>View setup instructions and feature list</li>
</ul>
<h2>Subscription Page</h2>
<p>View and manage your subscription:</p>
<ul>
<li>Compare Free, Pro, and Premium tiers</li>
<li>Upgrade via Stripe checkout</li>
<li>View current plan status</li>
</ul>
<h2>Tips for Dashboard Use</h2>
<ul>
<li><strong>Try demo mode first</strong> — Use &quot;Try Demo&quot; on the login page to explore without creating an account</li>
<li><strong>Customize your dashboard</strong> — Drag and resize widgets on the home page to focus on what matters to you</li>
<li><strong>Use keyboard shortcuts</strong> — The dashboard supports standard browser navigation (Ctrl+F for search, etc.)</li>
<li><strong>Open multiple tabs</strong> — Compare entity detail pages side-by-side in separate browser tabs</li>
<li><strong>Check the knowledge graph regularly</strong> — As you add entities and relationships in Obsidian, the graph gets richer and more useful</li>
</ul>
<h2>Next Steps</h2>
<ul>
<li><a href="/entities/users_guide/getting-started/" class="internal-link">Getting Started</a> — Set up your account and connect Obsidian</li>
<li><a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a> — Deep dive into the graph visualization</li>
<li><a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a> — Start logging your health data</li>
</ul>

{% endraw %}