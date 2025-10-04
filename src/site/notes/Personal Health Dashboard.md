---
{"dg-publish":true,"dg-home":true,"title":"Personal Health Dashboard: John Doe","id":"personal_health_dashboard_john_doe","entity_type":"personal_health_dashboard","tags":["personal","dashboard","user_data","gardenEntry"],"creation_date":"2025-05-10","last_modified":"2025-06-30","user_id":"user_john_doe","permalink":"/personal-health-dashboard/","dgPassFrontmatter":true}
---


# Personal Health Dashboard: John Doe

This dashboard provides a comprehensive overview of John Doe's health status, goals, and interventions, dynamically pulling data from interconnected notes within the vault.

## Overview

```dataview
TABLE
  name AS "Profile",
  age AS "Age",
  weight AS "Weight (kg)",
  bmi AS "BMI",
  "[[user_health_profile_john_doe]]" AS "Details"
FROM #user_health_profile AND #personal AND #user_data
WHERE userId = "user_john_doe"
LIMIT 1
```

## Key Health Concerns

```dataview
TABLE
  join(properties.symptoms, "; ") AS "Symptoms",
  join(properties.risk_factors, "; ") AS "Risk Factors",
  join(properties.treatment_approaches, "; ") AS "Treatment Approaches"
FROM [[user_health_profile_john_doe]]
FLATTEN properties.primary_health_concerns AS Concern
WHERE Concern
SORT file.name ASC
```

## Biomarker Trends & Status

```dataview
TABLE
  properties.value AS "Value",
  properties.unit AS "Unit",
  properties.status AS "Status",
  properties.date_recorded AS "Date"
FROM #biomarker_log AND #personal AND #user_data
WHERE user_id = "user_john_doe"
FLATTEN properties.biomarkers AS biomarker_entry
SORT biomarker_entry.date_recorded DESC
```

**Recent Lab Results Overview (May 1, 2025):**

```dataview
TABLE
  properties.result AS "Result",
  properties.units AS "Units",
  properties.reference_range AS "Ref Range",
  properties.status AS "Status"
FROM [[lab_john_doe_2025_05]]
FLATTEN properties.lipid_panel AS lipid
WHERE lipid
SORT file.name ASC
```

## Health Goals & Progress

```dataview
TABLE
  properties.target AS "Target",
  properties.current_value AS "Current",
  properties.timeline AS "Timeline",
  properties.priority AS "Priority"
FROM #health_goals AND #personal AND #user_data
WHERE user_id = "user_john_doe"
FLATTEN properties.active_goals AS goal
WHERE goal
SORT file.name ASC
```

## Current Supplement Regimen

```dataview
TABLE
  properties.dosage AS "Dosage",
  properties.timing AS "Timing",
  properties.purpose AS "Purpose",
  properties.started AS "Started"
FROM #supplement_regimen AND #personal AND #user_data
WHERE user_id = "user_john_doe"
FLATTEN properties.daily_supplements AS supplement
WHERE supplement
SORT file.name ASC
```

## Interventions and Lifestyle

**Key Lifestyle Factors:**

```dataview
TABLE
  properties.diet_pattern AS "Diet",
  properties.exercise_routine AS "Exercise",
  properties.sleep_habits AS "Sleep",
  properties.stress_management AS "Stress Mgmt"
FROM [[user_health_profile_john_doe]]
WHERE properties.diet_pattern
LIMIT 1
```

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