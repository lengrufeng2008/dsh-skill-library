---
name: networking
description: Isolate DNS, route, TLS, and firewall layers; test from the real client.
whenToUse: "Isolate DNS, route, TLS, and firewall layers; test from the real client."
---

# Networking

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Inventory current state and dependencies.
2. Reproduce in a disposable environment.
3. Change one variable with a rollback path.
4. Define success metrics and alerting.

**Focus:** Networking.

## Verification

- Dry run/plan reviewed; rollback tested.
- Metrics and alerts cover the failure.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
