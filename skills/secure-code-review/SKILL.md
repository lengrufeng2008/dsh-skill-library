---
name: secure-code-review
description: Look for auth bypass, injection, secrets, unsafe deserialization, and path traversal.
whenToUse: "Look for auth bypass, injection, secrets, unsafe deserialization, and path traversal."
---

# Secure code review

## Use

Apply this when the task matches the description. Keep the output decision-useful and mark unknowns.

## Method

1. Map assets, trust boundaries, and attacker capability.
2. Assume attacker control of every input.
3. Apply least privilege and defense in depth.
4. Verify with a reproducible exploit or test.

**Focus:** Secure code review.

## Verification

- The attack path is blocked or explicitly accepted.
- No secret appears in logs or artifacts.
- State clearly what was not verified.

## Boundaries

- This is a checklist, not proof of correctness.
- No fabricated sources, data, or test results.
- If the task falls outside the method, say so and stop.
