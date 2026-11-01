# DSH Skill Library

> **One installable bundle, 100 practical skills.** This is not 100 separate npm plugins; it is a
> single skill provider with 100 focused checklists across coding, testing, security, data, DevOps,
> product, writing, research, career, marketing, and operations.

## Use

```bash
dsh plugin --profile web add /home/lrf/dsh/products/dsh-skill-library
```

Ask for a skill by name, or let the router/agent discover it from the skill catalog.

## Design

- Each skill has `name`, `description`, `whenToUse`, a method, verification, and explicit boundaries.
- Skills are checklists, not proof of correctness; no fabricated sources or results.
- Structural tests validate 100 unique skills, frontmatter, body length, and provider resolution.
- Behavioral quality varies by skill; spot-check before relying on one.

## Limits

- 100 skills ≠ 100 independent host tools or 100 deep domain agents.
- No benchmark proves all 100 improve task outcomes.
- No open-problem or security-certification claims.
- This library is separate from the 17 host/tool plugins in the portfolio.

## Tests

```bash
npm test
```
