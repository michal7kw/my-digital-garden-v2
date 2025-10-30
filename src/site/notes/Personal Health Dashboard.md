---
{"dg-publish":true,"permalink":"/personal-health-dashboard/","title":"Personal Health Dashboard: John Doe","tags":["personal","dashboard","user_data"]}
---


# Personal Health Dashboard: John Doe

This dashboard provides a comprehensive overview of John Doe's health status, goals, and interventions, dynamically pulling data from interconnected notes within the vault.

## Overview

| File | Profile | Age | Weight (kg) | BMI | Details |
| ---- | ------- | --- | ----------- | --- | ------- |

{ .block-language-dataview}

## Key Health Concerns

| File | Symptoms | Risk Factors | Treatment Approaches |
| ---- | -------- | ------------ | -------------------- |

{ .block-language-dataview}

## Biomarker Trends & Status

| File                                                        | Value | Unit | Status | Date |
| ----------------------------------------------------------- | ----- | ---- | ------ | ---- |
| [[entities/users/john_doe/biomarker_log\|biomarker_log]] | \-    | \-   | \-     | \-   |

{ .block-language-dataview}

**Recent Lab Results Overview (May 1, 2025):**

| File | Result | Units | Ref Range | Status |
| ---- | ------ | ----- | --------- | ------ |

{ .block-language-dataview}

## Health Goals & Progress

| File | Target | Current | Timeline | Priority |
| ---- | ------ | ------- | -------- | -------- |

{ .block-language-dataview}

## Current Supplement Regimen

| File | Dosage | Timing | Purpose | Started |
| ---- | ------ | ------ | ------- | ------- |

{ .block-language-dataview}

## Interventions and Lifestyle

**Key Lifestyle Factors:**

| File | Diet | Exercise | Sleep | Stress Mgmt |
| ---- | ---- | -------- | ----- | ----------- |

{ .block-language-dataview}

**Interventions:**

- [[entities/intervention/Keto Diet\|Keto Diet]] principles are being explored to support metabolic health.
- [[entities/intervention/Red Light Therapy\|Red Light Therapy]] is under consideration for its potential benefits on cellular health and inflammation.

## Key Knowledge Graph Connections

This section highlights how John Doe's personal health data connects to the broader medical knowledge graph.

**Related Conditions:**
- [[HAS_CONDITION::[[Hypercholesterolemia\|HAS_CONDITION::[[Hypercholesterolemia]]]]
- [[HAS_CONDITION::[[Vitamin D Insufficiency\|HAS_CONDITION::[[Vitamin D Insufficiency]]]]
- [[HAS_CONDITION::[[Chronic Inflammation\|HAS_CONDITION::[[Chronic Inflammation]]]]
- [[HAS_CONDITION::[[Diabetes\|HAS_CONDITION::[[Diabetes]]]] (monitoring risk)

**Related Supplements & Medications:**
- [[TAKES_SUPPLEMENT::[[Vitamin D3\|TAKES_SUPPLEMENT::[[Vitamin D3]]]]
- [[TAKES_SUPPLEMENT::[[Fish Oil\|TAKES_SUPPLEMENT::[[Fish Oil]]]]
- [[TAKES_SUPPLEMENT::[[Magnesium Glycinate\|TAKES_SUPPLEMENT::[[Magnesium Glycinate]]]]
- [[TAKES_SUPPLEMENT::[[Creatine\|TAKES_SUPPLEMENT::[[Creatine]]]]
- [[TAKES_SUPPLEMENT::[[Coenzyme Q10\|TAKES_SUPPLEMENT::[[entities/drug/Coenzyme Q10\|Coenzyme Q10]]]]
- [[TAKES_SUPPLEMENT::[[Turmeric\|TAKES_SUPPLEMENT::[[entities/drug/Turmeric\|Turmeric]]]]
- [[TAKES_SUPPLEMENT::[[Ashwagandha\|TAKES_SUPPLEMENT::[[Ashwagandha]]]]
- [[TAKES_SUPPLEMENT::[[MCT8 Oil\|TAKES_SUPPLEMENT::[[MCT8 Oil]]]]

**Related Biomarkers:**
- [[HAS_BIOMARKER::[[Vitamin D Level\|HAS_BIOMARKER::[[Vitamin D Level]]]]
- [[HAS_BIOMARKER::[[Total Cholesterol\|HAS_BIOMARKER::[[Total Cholesterol]]]]
- [[HAS_BIOMARKER::[[LDL Cholesterol\|HAS_BIOMARKER::[[LDL Cholesterol]]]]
- [[HAS_BIOMARKER::[[hsCRP\|HAS_BIOMARKER::[[hsCRP]]]]
- [[HAS_BIOMARKER::[[homocysteine\|HAS_BIOMARKER::[[homocysteine]]]]
- [[HAS_BIOMARKER::[[Creatine Kinase\|HAS_BIOMARKER::[[Creatine Kinase]]]]
- [[HAS_BIOMARKER::[[CoQ10 Level\|HAS_BIOMARKER::[[CoQ10 Level]]]]

**Cellular & Biological Connections:**
- [[AFFECTS_CELLULAR_COMPONENT::[[Mitochondria\|AFFECTS_CELLULAR_COMPONENT::[[Mitochondria]]]] (affected by diet, interventions, supplements)
- [[AFFECTS_BIOLOGICAL_PROCESS::[[Cellular Energy\|AFFECTS_BIOLOGICAL_PROCESS::[[Cellular Energy]]]]
- [[AFFECTS_BIOLOGICAL_PROCESS::[[Inflammatory Response\|AFFECTS_BIOLOGICAL_PROCESS::[[Inflammatory Response]]]]

**Recommendations Integration:**
Recommendations are generated based on current lab results, health goals, and knowledge graph insights. These may include suggestions for specific supplements (like [[Turmeric]] for inflammation or [[Coenzyme Q10]] for mitochondrial support), lifestyle interventions (like exploring [[entities/intervention/Keto Diet\|Keto Diet]] principles or [[entities/intervention/Red Light Therapy\|Red Light Therapy]]), or further testing. This section will be dynamically updated by the recommendation engine. The `ObsidianRecommendationFormatter` service formats these recommendations into a readable Markdown format and updates this dashboard.