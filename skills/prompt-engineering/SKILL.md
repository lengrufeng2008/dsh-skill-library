---
name: prompt-engineering
description: State role, task, constraints, output schema, and a verification step.
whenToUse: "State role, task, constraints, output schema, and a verification step."
---

# Prompt engineering

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. State the context, constraints, and output contract.
2. Remove anything that does not change the decision.
3. Test one failure mode.
4. Record what was verified.

**Focus:** Prompt engineering.

## Verification

- Output matches the schema.
- One failure mode was tested.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
