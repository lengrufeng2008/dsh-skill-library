---
name: flaky-tests
description: Find the source of nondeterminism; do not add retries to hide it.
whenToUse: "Find the source of nondeterminism; do not add retries to hide it."
---

# Flaky tests

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Name the risk and the cheapest test that would fail.
2. Isolate the system under test and control time/network.
3. Assert observable behavior, not internals.
4. Make the failure reproducible in CI.

**Focus:** Flaky tests.

## Verification

- The test fails before the fix and passes after.
- The suite is deterministic in CI.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
