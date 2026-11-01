---
name: pandas-analysis
description: Keep transformations explicit, typed, and reproducible.
whenToUse: "Keep transformations explicit, typed, and reproducible."
---

# Pandas analysis

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. State the decision and the unit of analysis.
2. Profile grain, coverage, missingness, and leakage.
3. Choose a method and write its assumptions.
4. Validate on a holdout or independent slice.

**Focus:** Pandas analysis.

## Verification

- Numbers reproduce from the written query/code.
- Assumptions and exclusions are visible.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
