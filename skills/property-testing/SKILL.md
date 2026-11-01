---
name: property-testing
description: State invariants, generate inputs, and shrink failures.
whenToUse: "State invariants, generate inputs, and shrink failures."
---

# Property-based testing

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Name the risk and the cheapest test that would fail.
2. Isolate the system under test and control time/network.
3. Assert observable behavior, not internals.
4. Make the failure reproducible in CI.

**Focus:** Property-based testing.

## Verification

- The test fails before the fix and passes after.
- The suite is deterministic in CI.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
