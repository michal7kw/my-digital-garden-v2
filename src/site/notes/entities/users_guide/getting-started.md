---
created: '2026-04-17T18:59:21.334903Z'
description: 'Step-by-step setup guide: download the vault, install the plugin, configure
  settings, and first login'
dg-home: false
dg-publish: true
permalink: /entities/users_guide/getting-started/
slug: getting-started
tags:
- users_guide
- documentation
templateEngineOverride: njk
title: Getting Started
type: users_guide
updated: '2026-04-17T18:59:21.334903Z'
---

{% raw %}
<h1>Getting Started</h1>
<p>This guide walks you through setting up MKG from scratch — downloading the vault, installing the plugin, connecting to the backend, and exploring your first entities.</p>
<h2>Prerequisites</h2>
<p>Before you begin, you need:</p>
<ul>
<li><strong>Obsidian</strong> (version 0.15.0 or later) — Download free from <a href="https://obsidian.md">obsidian.md</a></li>
<li><strong>An MKG backend server</strong> — Either self-hosted or provided by your organization</li>
<li><strong>Internet connection</strong> — For initial setup and AI features (the platform works offline for basic editing)</li>
</ul>
<h2>Step 1: Get the Vault</h2>
<p>There are two ways to get started:</p>
<h3>Option A: Download the Vault Template (Recommended)</h3>
<ol>
<li>Go to your MKG web dashboard (e.g., <code>https://your-server.com</code>)</li>
<li>Navigate to the <strong>Download</strong> page</li>
<li>Click <strong>Download Vault Template</strong> to get the ZIP file</li>
<li>Unzip it to a location on your computer (e.g., <code>Documents/MKG-Vault/</code>)</li>
</ol>
<p>The template includes:</p>
<ul>
<li>Pre-curated medical knowledge (1,000+ entity files across all types)</li>
<li>The MKG plugin pre-installed</li>
<li>Obsidian settings optimized for knowledge graph work</li>
<li>Templates for all 26 entity types</li>
<li>This user guide</li>
</ul>
<h3>Option B: Clone via Git (Advanced)</h3>
<p>If your server supports Git-based vaults:</p>
<ol>
<li>Open the Obsidian plugin</li>
<li>Use the command <strong>&quot;Get Vault Git Clone URL (Self-Hosted)&quot;</strong></li>
<li>Clone the repository to your local machine</li>
<li>Open the cloned folder as an Obsidian vault</li>
</ol>
<h2>Step 2: Open the Vault in Obsidian</h2>
<ol>
<li>Open Obsidian</li>
<li>Click <strong>&quot;Open folder as vault&quot;</strong> (or &quot;Open another vault&quot; if you have existing vaults)</li>
<li>Navigate to your unzipped vault folder and select it</li>
<li>Obsidian will ask about community plugins — click <strong>&quot;Trust author and enable plugins&quot;</strong></li>
<li>The MKG plugin should activate automatically (look for the brain icon in the left sidebar)</li>
</ol>
<p>If the plugin doesn't appear:</p>
<ul>
<li>Go to <strong>Settings &gt; Community Plugins</strong></li>
<li>Make sure &quot;Restricted mode&quot; is turned <strong>off</strong></li>
<li>Look for &quot;Medical Knowledge Graph Companion&quot; in the installed plugins list</li>
<li>Toggle it <strong>on</strong></li>
</ul>
<h2>Step 3: Configure the Plugin</h2>
<p>Open <strong>Settings &gt; Community Plugins &gt; Medical Knowledge Graph Companion</strong> (click the gear icon).</p>
<h3>Essential Settings</h3>
<p><strong>API Base URL</strong> — The address of your MKG backend server.</p>
<ul>
<li>If the server runs on your machine: <code>http://localhost:8000</code></li>
<li>If it's on another machine: <code>http://your-server-ip:8000</code></li>
<li>If it's behind HTTPS: <code>https://your-domain.com</code></li>
</ul>
<blockquote>
<p><strong>Windows users:</strong> If <code>localhost</code> doesn't work, try <code>127.0.0.1</code> instead. This is a common Windows networking issue.</p>
</blockquote>
<p><strong>Web App URL</strong> — The address of the web dashboard (used for &quot;Open in Dashboard&quot; links).</p>
<ul>
<li>Usually the same domain as the API, without the port number</li>
</ul>
<h3>Optional Settings</h3>
<p><strong>AI Features</strong> — If you want AI-powered analysis, research, and chat:</p>
<ul>
<li>Toggle <strong>&quot;Enable LLM Features&quot;</strong> on</li>
<li>Choose your LLM provider (OpenAI, Anthropic, Google, or Ollama for local AI)</li>
<li>Enter your API key (not needed for Ollama)</li>
</ul>
<p><strong>Auto-Sync</strong> — Controls whether changes sync automatically:</p>
<ul>
<li><strong>Auto-sync on Create</strong> — New entity files sync to Neo4j automatically</li>
<li><strong>Auto-sync on Modify</strong> — Edited entity files sync after a 2-second delay</li>
</ul>
<p><strong>Digital Garden</strong> — If you plan to publish:</p>
<ul>
<li>Set the <strong>Target Folder</strong> to <code>entities/</code></li>
</ul>
<h2>Step 4: Create Your Account</h2>
<ol>
<li>Open the web dashboard in your browser</li>
<li>Click <strong>Register</strong> to create an account</li>
<li>Fill in your email and password</li>
<li>Complete the onboarding flow:
<ul>
<li><strong>Choose your role</strong> — Consumer, Biohacker, Researcher, or Business</li>
<li><strong>Set health goals</strong> — Select what matters to you (cardiovascular, cognitive, energy, sleep, etc.)</li>
<li><strong>Adopt starter stacks</strong> — The system recommends health stacks based on your goals</li>
</ul>
</li>
</ol>
<h2>Step 5: Log In from Obsidian</h2>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Login to MKG Platform&quot;</strong></li>
<li>Enter the email and password you just registered</li>
<li>You should see a green dot (●) in the Obsidian status bar — this means you're connected</li>
</ol>
<p><strong>Status bar indicators:</strong></p>
<ul>
<li>● (green) — Connected to the backend</li>
<li>... (gray) — Checking connection</li>
<li>○ (red) — Cannot reach the backend (check your API Base URL)</li>
</ul>
<p>You can enable <strong>&quot;Auto-login&quot;</strong> in plugin settings so you don't need to log in every time you open Obsidian.</p>
<h2>Step 6: Explore Your Vault</h2>
<p>Now that you're set up, take a few minutes to explore:</p>
<p><strong>In Obsidian:</strong></p>
<ul>
<li>Open the <code>entities/</code> folder in the file explorer</li>
<li>Browse a few entity files (try <code>entities/supplement/Magnesium.md</code>)</li>
<li>Notice the YAML frontmatter at the top (between <code>---</code> markers) and the structured content below</li>
<li>Try the Obsidian graph view (Ctrl/Cmd + G) to see how entities connect</li>
</ul>
<p><strong>In the web dashboard:</strong></p>
<ul>
<li>Open the <strong>Knowledge Graph</strong> page — see your entities as an interactive graph</li>
<li>Open the <strong>Dashboard</strong> — see health metrics at a glance</li>
<li>Open the <strong>Biomarkers</strong> page — this is where you'll track lab results</li>
</ul>
<p><strong>From the plugin:</strong></p>
<ul>
<li>Click the brain icon in the left sidebar to open the MKG Dashboard panel</li>
<li>Try the command palette (Ctrl/Cmd + P) and type &quot;MKG&quot; to see all available commands</li>
</ul>
<h2>Step 7: Your First Sync</h2>
<p>If auto-sync is enabled, your vault is already syncing. To trigger a manual sync:</p>
<ol>
<li>Open the command palette (Ctrl/Cmd + P)</li>
<li>Search for <strong>&quot;Open Cloud Backup Manager&quot;</strong></li>
<li>Click <strong>&quot;Sync to Neo4j&quot;</strong></li>
</ol>
<p>This sends all your entity notes to the Neo4j database, where they become nodes in the knowledge graph. See <a href="/entities/users_guide/syncing-with-neo4j/" class="internal-link">Syncing with Neo4j</a> for details on how sync works.</p>
<h2>What's Next?</h2>
<p>You're set up and ready to go. Here's what to explore next based on what you want to do:</p>
<table>
<thead>
<tr>
<th>I want to...</th>
<th>Read...</th>
</tr>
</thead>
<tbody>
<tr>
<td>Understand how the vault is organized</td>
<td><a href="/entities/users_guide/understanding-the-vault/" class="internal-link">Understanding the Vault</a></td>
</tr>
<tr>
<td>Create my first entity note</td>
<td><a href="/entities/users_guide/creating-entities/" class="internal-link">Creating Entities</a></td>
</tr>
<tr>
<td>Track my lab results</td>
<td><a href="/entities/users_guide/tracking-biomarkers/" class="internal-link">Tracking Biomarkers</a></td>
</tr>
<tr>
<td>Explore the knowledge graph visually</td>
<td><a href="/entities/users_guide/exploring-the-knowledge-graph/" class="internal-link">Exploring the Knowledge Graph</a></td>
</tr>
<tr>
<td>Set up supplement stacks</td>
<td><a href="/entities/users_guide/supplements-and-health-stacks/" class="internal-link">Supplements and Health Stacks</a></td>
</tr>
<tr>
<td>Try AI research features</td>
<td><a href="/entities/users_guide/ai-research-tools/" class="internal-link">AI Research Tools</a></td>
</tr>
<tr>
<td>Run a self-experiment</td>
<td><a href="/entities/users_guide/experiments/" class="internal-link">Experiments</a></td>
</tr>
</tbody>
</table>
<p>If something isn't working, see <a href="/entities/users_guide/troubleshooting/" class="internal-link">Troubleshooting</a> for common setup issues.</p>

{% endraw %}