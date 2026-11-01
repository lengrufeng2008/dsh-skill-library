# Skill index (100)

One bundle; one skill per task. Choose by domain, then open the skill by name.

## coding (10)

- **typescript-types** — Model domain state with discriminated unions and exhaustive checks instead of optional-field soup.
- **python-typing** — Use precise annotations, protocols, and runtime validation at boundaries.
- **go-concurrency** — Bound goroutines, close channels once, and make cancellation explicit.
- **rust-ownership** — Make ownership and lifetimes explicit; avoid cloning to silence the compiler.
- **sql-queries** — Write set-based SQL with explicit joins, null semantics, and an EXPLAIN check.
- **api-design** — Design resources, errors, pagination, and idempotency before implementation.
- **refactoring** — Preserve behavior with small, reversible steps and tests around the seam.
- **debugging** — Reproduce, bisect, and explain the failure before changing the code.
- **code-review** — Review behavior and risk first; style only when it affects comprehension.
- **legacy-code** — Characterize current behavior, find seams, and migrate incrementally.

## testing (8)

- **unit-testing** — Test one behavior with a clear arrange/act/assert and a failing-first check.
- **integration-testing** — Test real boundaries, isolation, and cleanup with a reproducible fixture.
- **e2e-testing** — Drive the user path through the real stack; keep the suite small and deterministic.
- **property-testing** — State invariants, generate inputs, and shrink failures.
- **fuzz-testing** — Fuzz parsers and boundaries with a seed corpus and a crash triage loop.
- **regression-testing** — Turn every real bug into a test that fails before the fix.
- **flaky-tests** — Find the source of nondeterminism; do not add retries to hide it.
- **coverage-strategy** — Use coverage as a map of untested risk, not as a target.

## security (10)

- **threat-modeling** — Map assets, trust boundaries, attacker capability, and mitigations.
- **authentication** — Design identity proofing, session lifetime, and recovery paths.
- **authorization** — Enforce least privilege at every boundary; test object-level access.
- **secrets-management** — Keep secrets out of code, logs, prompts, and artifacts; rotate on exposure.
- **injection-defense** — Treat all input as hostile; parameterize, encode, and validate at the sink.
- **supply-chain-security** — Pin sources, verify provenance, and review lifecycle scripts.
- **cryptography** — Use vetted primitives and protocols; never invent crypto.
- **privacy-review** — Minimize data, define purpose and retention, and redact before sharing.
- **incident-response** — Contain first, preserve evidence, communicate, and write the timeline.
- **secure-code-review** — Look for auth bypass, injection, secrets, unsafe deserialization, and path traversal.

## data (10)

- **sql-analysis** — Answer the decision question with explicit grain, filters, and null handling.
- **pandas-analysis** — Keep transformations explicit, typed, and reproducible.
- **statistics** — State the estimand, assumptions, uncertainty, and multiple-comparison plan.
- **data-visualization** — Choose the mark for the question; label axes and uncertainty.
- **etl-design** — Make ingestion idempotent, schema-aware, and recoverable.
- **data-quality** — Define freshness, completeness, uniqueness, and validity tests.
- **experiment-design** — Pre-register the hypothesis, power, metric, and stopping rule.
- **forecasting** — Backtest on time-ordered splits; report error and uncertainty.
- **ml-evaluation** — Evaluate on a held-out distribution and report slices and failure modes.
- **llm-evaluation** — Use task-specific rubrics, adversarial cases, and human spot checks.

## devops (10)

- **docker** — Build small, pinned, non-root images with a reproducible context.
- **kubernetes** — Define requests/limits, probes, rollout, and rollback.
- **ci-pipelines** — Make CI deterministic, cached, and fail-fast with artifacts.
- **observability** — Instrument the user path with logs, metrics, and traces; redact secrets.
- **incident-ops** — Separate command, communications, and investigation; keep a timeline.
- **terraform** — Plan, review, and pin providers; avoid drift and destructive changes.
- **linux-troubleshooting** — Check resources, permissions, processes, and logs in a fixed order.
- **networking** — Isolate DNS, route, TLS, and firewall layers; test from the real client.
- **backup-recovery** — Back up, restore-test, and document RPO/RTO.
- **cloud-cost** — Attribute cost to owners and workloads; remove idle capacity.

## product (10)

- **requirements** — Separate user problem, outcome, constraints, and non-goals.
- **roadmap** — Sequence outcomes by evidence, risk, and dependency.
- **ux-research** — Ask about past behavior, not hypothetical intent; recruit the right users.
- **wireframing** — Wire the smallest flow that tests the riskiest assumption.
- **accessibility** — Check keyboard, contrast, semantics, focus, and screen-reader flow.
- **design-system** — Define tokens, components, states, and migration rules.
- **pricing-strategy** — Anchor on value and segment; test willingness to pay.
- **onboarding** — Get the user to first value; measure time-to-value and drop-off.
- **product-analytics** — Define events, funnels, and guardrails before launch.
- **feedback-loop** — Close the loop with users; tag, prioritize, and report back.

## writing (10)

- **technical-writing** — Write for a named reader and a concrete task; lead with the decision.
- **documentation** — Make docs discoverable, current, example-first, and owned.
- **api-docs** — Document auth, errors, pagination, idempotency, and runnable examples.
- **copy-editing** — Cut filler, fix ambiguity, and preserve the author's voice.
- **style-guide** — Define terms, tone, formatting, and examples with exceptions.
- **translation** — Preserve meaning, terminology, and locale conventions; review with a native reader.
- **summarization** — Preserve decisions, numbers, uncertainty, and dissent.
- **changelog** — Write for users: what changed, why, impact, and action.
- **release-notes** — Separate features, fixes, breaking changes, and upgrade steps.
- **presentation** — One message per slide; use evidence and a clear ask.

## research (10)

- **literature-review** — Define the question, search strategy, inclusion rules, and synthesis method.
- **citation-check** — Verify each claim against the real source; never cite from memory.
- **experiment-methods** — Pre-specify controls, sample size, stopping, and analysis.
- **peer-review** — Assess claim, method, evidence, and reproducibility, not prose style.
- **reproducibility** — Record environment, data, code, seeds, and exact commands.
- **scientific-visualization** — Show uncertainty and avoid chartjunk; label units and scales.
- **grant-writing** — Align the question, gap, approach, feasibility, and impact.
- **patent-search** — Search claims and prior art by concept, not just keywords.
- **science-writing** — Separate observation, inference, and speculation; state limits.
- **fact-checking** — Trace every factual claim to a primary source and date it.

## career (6)

- **job-fit** — Map must-haves to evidence; score fit and flag dealbreakers.
- **resume-tailoring** — Mirror the role's language with real evidence; never invent.
- **interview-prep** — Build STAR+R stories and a company-specific question bank.
- **salary-negotiation** — Anchor on scope and market data; negotiate the whole package.
- **portfolio** — Show the problem, constraints, decisions, and measured outcome.
- **career-plan** — Choose a direction, close one skill gap, and set a review date.

## marketing (8)

- **positioning** — Name the audience, alternative, differentiated value, and proof.
- **copywriting** — Lead with the reader's problem and a concrete promise; prove it.
- **seo** — Match search intent, structure, and authority; avoid keyword stuffing.
- **content-strategy** — Map audience questions to formats, owners, and distribution.
- **email-marketing** — Segment, personalize, and test one variable; respect consent.
- **paid-ads** — Define the unit economics, creative test, and kill criteria.
- **marketing-analytics** — Instrument source-to-revenue; separate correlation from lift.
- **conversion-optimization** — Find the friction, form one hypothesis, and run a powered test.

## ops (6)

- **project-planning** — Define outcome, milestones, dependencies, owner, and stop rule.
- **risk-register** — Name likelihood, impact, trigger, owner, and mitigation.
- **meeting-facilitation** — Publish the decision question, timebox, and written outcome.
- **decision-log** — Record the decision, alternatives, evidence, owner, and review date.
- **stakeholder-map** — Map influence, interest, concerns, and communication cadence.
- **retrospective** — Separate facts, causes, and experiments; assign one owner.

## misc (2)

- **prompt-engineering** — State role, task, constraints, output schema, and a verification step.
- **context-budget** — Measure what enters context; cut stale and duplicate material first.
