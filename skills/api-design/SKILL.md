---
name: api-design
description: Design resources, errors, pagination, and idempotency before implementation.
whenToUse: "Design resources, errors, pagination, and idempotency before implementation."
---

# API design

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Pin the contract, inputs, outputs, and constraints.
2. Make the smallest coherent change.
3. Exercise success, boundary, and failure paths.
4. Review the diff for unintended behavior.

**Focus:** API design.

## Verification

- Tests pass, including a new failure-path test.
- Diff is minimal and reviewed.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
