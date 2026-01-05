---
{"dg-publish":true,"permalink":"/templates/entity-templates/clinical-pattern/","tags":["clinical_pattern"]}
---


# {{name}}

## Overview

{{description}}

Evidence Level: {{evidence_level}}/5
Risk Multiplier: {{risk_multiplier}}x

## Diagnostic Criteria

Diagnosis requires meeting **{{minimum_criteria}} or more** of the following {{criteria_count}} criteria:

{{#each biomarker_criteria}}
- {{this}}
{{/each}}

## Key Biomarkers

{{#each biomarker_criteria}}
- **{{this}}**
{{/each}}

## Associated Conditions

{{#each associated_conditions}}
- [[{{this}}\|{{this}}]]
{{/each}}

## Organ Systems Affected

{{#each organ_systems_affected}}
- {{this}}
{{/each}}

## Management Recommendations

### Dietary Recommendations

{{#each dietary_recommendations}}
- {{this}}
{{/each}}

### Supplement Considerations

{{#each supplement_considerations}}
- [[{{this}}\|{{this}}]]
{{/each}}

### Lifestyle Modifications

{{#each lifestyle_modifications}}
- {{this}}
{{/each}}

## Medical Considerations

{{#each medical_considerations}}
- {{this}}
{{/each}}

## Suggested Follow-up Tests

{{#each suggested_tests}}
- {{this}}
{{/each}}

## Relationships

{{#each biomarker_criteria}}
- REQUIRES_BIOMARKER::[[{{this}}\|{{this}}]]
{{/each}}

{{#each associated_conditions}}
- INCREASES_RISK_FOR::[[{{this}}\|{{this}}]]
{{/each}}

{{#each supplement_considerations}}
- IMPROVED_BY_SUPPLEMENT::[[{{this}}\|{{this}}]]
{{/each}}

## References

{{#each references}}
- {{this}}
{{/each}}
