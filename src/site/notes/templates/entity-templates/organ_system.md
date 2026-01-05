---
{"dg-publish":true,"permalink":"/templates/entity-templates/organ-system/","tags":["organ_system"]}
---


# {{name}}

## Overview

{{description}}

## Component Organs

{{#each organs}}
- [[{{this}}\|{{this}}]]
{{/each}}

## Primary Functions

{{#each primary_functions}}
- {{this}}
{{/each}}

## Key Biomarkers

The following biomarkers are used to assess the health of this organ system:

{{#each key_biomarkers}}
- [[{{this}}\|{{this}}]]
{{/each}}

## Common Conditions

{{#each common_conditions}}
- [[{{this}}\|{{this}}]]
{{/each}}

## Protective Interventions

{{#each protective_interventions}}
- [[{{this}}\|{{this}}]]
{{/each}}

## Risk Factors

{{#each risk_factors}}
- {{this}}
{{/each}}

## Relationships

{{#each organs}}
- CONTAINS_ORGAN::[[{{this}}\|{{this}}]]
{{/each}}

{{#each key_biomarkers}}
- ASSESSED_BY_BIOMARKER::[[{{this}}\|{{this}}]]
{{/each}}

{{#each common_conditions}}
- AFFECTED_BY_CONDITION::[[{{this}}\|{{this}}]]
{{/each}}

## Dataview Queries

### Biomarkers for this System

{ .block-language-dataview}

### Related Conditions

{ .block-language-dataview}
