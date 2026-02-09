---
created: '2026-02-09T05:40:21.235326Z'
description: Insulin-like Growth Factor 1. An anabolic hormone structurally similar
  to insulin that promotes growth and tissue repair but inhibits longevity pathways
  (mTOR activation).
dg-home: false
dg-publish: true
gardenUsername: dev_admin
permalink: /garden/dev_admin/hormone/igf-1/
slug: igf-1
tags:
- hormone
- anabolic
- growth
- aging
- mtor_activator
templateEngineOverride: njk
title: IGF-1
type: hormone
updated: '2026-02-09T05:40:21.235326Z'
---

{% raw %}
<h1>IGF-1</h1>
<h2>Overview</h2>
<p><strong>IGF-1 (Insulin-like Growth Factor 1)</strong> is the primary mediator of the effects of Growth Hormone (GH). Produced mainly in the liver, it drives systemic growth, muscle protein synthesis, and tissue repair.</p>
<p>It represents a fundamental evolutionary trade-off: high levels promote muscle mass and bone density (&quot;Growth&quot;) but also accelerate aging and cancer risk by constantly activating mTOR and suppressing repair mechanisms like autophagy (&quot;Longevity&quot;).</p>
<h2>Mechanism</h2>
<ul>
<li><strong>Signaling:</strong> Binds to the IGF-1 Receptor (IGF1R), activating the <strong>PI3K/AKT/mTOR</strong> pathway.</li>
<li><strong>Inhibition of FOXO:</strong> AKT phosphorylation keeps FOXO transcription factors in the cytoplasm, preventing them from activating stress resistance genes.</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Laron Syndrome:</strong> A genetic form of dwarfism with very low IGF-1 activity. These individuals are extremely resistant to cancer and diabetes, highlighting the link between low IGF-1 and disease protection.</li>
<li><strong>Sarcopenia:</strong> Levels decline with age (&quot;Somatopause&quot;), contributing to muscle loss and frailty.</li>
<li><strong>Longevity:</strong> In almost every model organism (worms, flies, mice), reducing IGF-1 signaling extends lifespan.</li>
</ul>
<h2>Relationships</h2>
<p>PRODUCED_BY::[[Liver]]<br />
REGULATED_BY::[[Growth Hormone]]<br />
ACTIVATES::[[mTOR Pathway]] - Strong activator<br />
ACTIVATES::[[AKT1]]<br />
INHIBITS::[[FOXO3]] - Prevents stress resistance<br />
INHIBITS::[[Autophagy]] - Via mTOR<br />
PROMOTES::[[Muscle Hypertrophy]]<br />
ASSOCIATED_WITH_CONDITION::[[Cancer]] - High levels correlate with risk<br />
ASSOCIATED_WITH_CONDITION::[[Sarcopenia]] - Low levels correlate with risk<br />
ASSOCIATED_WITH_CONDITION::[[Acromegaly]] - Excess GH/IGF-1</p>
<h2>References</h2>
<ul>
<li>Kenyon C. The plasticity of aging: insights from long-lived mutants. Cell. 2005.</li>
<li>Guevara-Aguirre J, et al. Growth hormone receptor deficiency is associated with a major reduction in pro-aging signaling, cancer, and diabetes in humans. Sci Transl Med. 2011.</li>
</ul>

{% endraw %}