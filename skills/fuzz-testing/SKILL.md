---
name: fuzz-testing
description: Fuzz parsers and boundaries with a seed corpus and a crash triage loop.
whenToUse: "Fuzz parsers and boundaries with a seed corpus and a crash triage loop."
---

# Fuzz testing

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Name the risk and the cheapest test that would fail.
2. Isolate the system under test and control time/network.
3. Assert observable behavior, not internals.
4. Make the failure reproducible in CI.

**Focus:** Fuzz testing.

## Verification

- The test fails before the fix and passes after.
- The suite is deterministic in CI.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
