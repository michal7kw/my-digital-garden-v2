---
created: '2026-02-13T19:27:04.189172Z'
description: Liver damage caused by medications, herbal products, or other xenobiotics,
  which can range from mild enzyme elevations to acute liver failure.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/drug-induced-liver-injury/
slug: drug-induced-liver-injury
tags:
- condition
- hepatology
- toxicology
- function-health
templateEngineOverride: njk
title: Drug-Induced Liver Injury
type: condition
updated: '2026-02-13T19:27:04.189172Z'
---

{% raw %}
<h1>Drug-Induced Liver Injury</h1>
<h2>Overview</h2>
<p>Liver damage caused by medications, herbal products, or other xenobiotics, which can range from mild enzyme elevations to acute liver failure.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<p>Not specified.</p>
<h2>Diagnostic Information</h2>
<h2>Risk Factors</h2>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Drug-Induced Liver Injury]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/drug-induced-liver-injury/" class="internal-link">Drug-Induced_Liver_Injury</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:05.096122'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Drug-Induced Liver Injury]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Drug-Induced Liver Injury]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/drug-induced-liver-injury/" class="internal-link">Drug-Induced_Liver_Injury</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:53.061334'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:50.709630'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.215543'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/drug-induced-liver-injury/" class="internal-link">Drug-Induced_Liver_Injury</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:27.359033'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}