---
created: '2026-02-13T19:00:15.175244Z'
description: A chronic autoimmune liver disease characterized by the slow destruction
  of the small bile ducts in the liver, leading to bile buildup and scarring.
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/condition/primary-biliary-cholangitis/
slug: primary-biliary-cholangitis
tags:
- condition
- hepatology
- autoimmune
- function-health
templateEngineOverride: njk
title: Primary Biliary Cholangitis
type: condition
updated: '2026-02-13T19:00:15.175244Z'
---

{% raw %}
<h1>Primary Biliary Cholangitis</h1>
<h2>Overview</h2>
<p>A chronic autoimmune liver disease characterized by the slow destruction of the small bile ducts in the liver, leading to bile buildup and scarring.</p>
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
FROM [[Primary Biliary Cholangitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/primary-biliary-cholangitis/" class="internal-link">Primary_Biliary_Cholangitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:37.438429'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-19T09:31:37.438429'
source: obsidian
</code></pre>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Primary Biliary Cholangitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Primary Biliary Cholangitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<!-- NEO4J_CONTENT_START -->
<h2>Relationships</h2>
<h3>Related</h3>
<ul>
<li>→ <a href="/garden/dev_admin/condition/primary-biliary-cholangitis/" class="internal-link">Primary_Biliary_Cholangitis</a> (entity)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.489490'
source: obsidian
</code></pre>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:49.561127'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.489490'
source: obsidian
</code></pre>
<ul>
<li>→ <a href="/garden/dev_admin/condition/primary-biliary-cholangitis/" class="internal-link">Primary_Biliary_Cholangitis</a> (condition)</li>
</ul>
<pre><code class="language-yaml">last_modified: '2026-01-26T07:07:36.489490'
source: obsidian
</code></pre>
<h3>May Detect</h3>
<ul>
<li>← <a href="/garden/dev_admin/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a> (labtest)</li>
</ul>
<pre><code class="language-yaml">confidence: suggested
created_at: '2026-01-18T16:02:36.677740'
source: function-health
</code></pre>
<!-- NEO4J_CONTENT_END -->
<h2>References</h2>
<p>No references available.</p>

{% endraw %}