---
created: '2026-04-17T18:59:17.441287Z'
description: Fundamental metabolic pathway converting glucose to pyruvate with net
  production of 2 ATP and 2 NADH per glucose molecule, serving as the entry point
  for both aerobic respiration and anaerobic fermentation.
dg-home: false
dg-publish: true
permalink: /entities/biologicalprocess/glycolysis/
slug: glycolysis
tags:
- biologicalprocess
- biological_process
- metabolism
- energy
- glucose
- cancer_biology
templateEngineOverride: njk
title: Glycolysis
type: biologicalprocess
updated: '2026-04-17T18:59:17.441287Z'
---

{% raw %}
<h1>Glycolysis</h1>
<h2>Overview</h2>
<p>Glycolysis is a universal, oxygen-independent metabolic pathway present in virtually all living organisms. It consists of ten enzymatic reactions that convert one molecule of <a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a> into two molecules of pyruvate, producing a net yield of 2 ATP (via substrate-level phosphorylation) and 2 NADH. This ancient pathway occurs in the cytoplasm and serves as the primary entry point for carbohydrate catabolism, feeding into the TCA cycle and <a href="/entities/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> under aerobic conditions, or into fermentation (lactate or ethanol production) when oxygen is limiting.</p>
<p>The pathway is divided into two phases: the energy investment phase (steps 1-5), where 2 ATP are consumed to phosphorylate and cleave glucose into two glyceraldehyde-3-phosphate molecules, and the energy payoff phase (steps 6-10), where 4 ATP and 2 NADH are generated per glucose. Three enzymes catalyze essentially irreversible, rate-limiting steps and serve as major regulatory nodes: hexokinase (step 1), phosphofructokinase-1 (PFK-1, step 3 -- the committed step), and pyruvate kinase (step 10). PFK-1 is the most important regulatory enzyme, allosterically activated by AMP and fructose-2,6-bisphosphate and inhibited by ATP and citrate.</p>
<p>The relationship between glycolysis and cancer is one of the most actively studied areas in oncology. The Warburg effect, first described by Otto Warburg in the 1920s, refers to the observation that cancer cells preferentially utilize glycolysis even in the presence of adequate oxygen (aerobic glycolysis). This metabolic reprogramming supports the biosynthetic demands of rapidly proliferating cells by providing glycolytic intermediates for nucleotide, amino acid, and lipid synthesis. Oncogenes (MYC, RAS, AKT) and loss of tumor suppressors (p53) drive upregulation of glycolytic enzymes and glucose transporters (GLUT1). The clinical exploitation of the Warburg effect is the basis for FDG-PET imaging, where the glucose analog 18F-fluorodeoxyglucose preferentially accumulates in glycolytically active tumors.</p>
<p><a href="/entities/labtest/insulin/" class="internal-link">Insulin</a> is the primary hormonal activator of glycolysis, stimulating glucose uptake via GLUT4 translocation and activating key glycolytic enzymes through dephosphorylation cascades. In the fed state, insulin-driven glycolysis processes dietary glucose for energy and biosynthesis. Conversely, glucagon and epinephrine suppress glycolysis in the liver, redirecting glucose carbon toward gluconeogenesis. Dysregulation of this hormonal control is central to the pathophysiology of type 2 diabetes and insulin resistance.</p>
<h2>Key Mechanisms</h2>
<ul>
<li><strong>Energy investment phase</strong>: 2 ATP consumed to phosphorylate glucose to fructose-1,6-bisphosphate</li>
<li><strong>Energy payoff phase</strong>: 4 ATP and 2 NADH produced from 2 glyceraldehyde-3-phosphate molecules</li>
<li><strong>Net yield</strong>: 2 ATP, 2 NADH, 2 pyruvate per glucose</li>
<li><strong>PFK-1 regulation</strong>: Allosteric activation by AMP, ADP, fructose-2,6-bisphosphate; inhibition by ATP, citrate</li>
<li><strong>Warburg effect</strong>: Cancer cells upregulate glycolysis even under normoxic conditions</li>
<li><strong>Hormonal control</strong>: Insulin activates; glucagon inhibits (hepatic glycolysis)</li>
</ul>
<h2>Relationships</h2>
<p>USES_SUBSTRATE::<a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a><br />
PRODUCES::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
FEEDS_INTO::<a href="/entities/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a><br />
OCCURS_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
REGULATED_BY::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a><br />
ASSOCIATED_WITH::<a href="/entities/condition/carcinoma/" class="internal-link">Carcinoma</a><br />
ASSOCIATED_WITH::<a href="/entities/condition/blood-glucose-imbalance/" class="internal-link">Blood Glucose Imbalance</a></p>
<h3>Merged From pathway</h3>
<p>ASSOCIATED_WITH::<a href="/entities/biomarker/glucose-fasting/" class="internal-link">Glucose Fasting</a><br />
ASSOCIATED_WITH::<a href="/entities/labtest/hba1c/" class="internal-link">Hba1C</a><br />
ASSOCIATED_WITH::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a><br />
ASSOCIATED_WITH::<a href="/entities/biomarker/nad/" class="internal-link">NAD+</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/cancer/" class="internal-link">Cancer</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/diabetes/" class="internal-link">Diabetes</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/berberine/" class="internal-link">Berberine</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/magnesium/" class="internal-link">Magnesium</a><br />
MODULATED_BY_SUPPLEMENT::<a href="/entities/supplement/niacin/" class="internal-link">Niacin</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a></p>

{% endraw %}