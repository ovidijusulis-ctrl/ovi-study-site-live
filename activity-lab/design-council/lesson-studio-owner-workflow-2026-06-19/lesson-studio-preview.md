# Lesson Studio Owner Workflow Preview

Generated: 2026-06-19

Status: preview-only owner decision surface.
Score: 85/100 owner evidence capture gate.
Privacy metadata: noindex, no-referrer.

## What This Tests

- Whether Lesson Studio should be redesigned around one visible loop: build a visual blueprint, save it, reload it, assign it, generate from it, and prove `lesson_blueprint` provenance.
- Whether GPT Image 2 directions should become a recurring input to the design council before code changes.
- Whether the owner gate is clear enough that the design does not accidentally imply production readiness.

## Evidence Used

- Current review packet: `logs/ovi-autoresearch/lesson-studio-owner-workflow/latest.md`
- Platform foundation: `logs/platform-foundation/latest.md`
- Activation packet: `logs/platform-activation-packet/latest.md`
- Passing current UI spec: `cd /Users/ovi/Downloads/Trying things/ovi-study-site && npx playwright test --config=playwright.config.mjs tests/school-lesson-studio-design.spec.js --reporter=line` (`4/4` passed)
- Current screenshot proof folder: `output/playwright/design-lesson-studio-current-2026-06-19/`

## GPT Image 2 Directions

- A. Blueprint First Builder: keep the block canvas and save/load checklist central.
- B. Assignment Handoff: show how a loaded draft moves into Student OS.
- C. Generate With Provenance: make the missing real-owner proof and `source_ref` visible.

Recommended synthesis: A for the base Lesson Studio builder, B for assignment, C for generated-result proof and gates.

## Gate

This is a keep-wait preview, not a keep-ship recommendation.

Missing before promotion:

- Real owner-account save/load/assign/generate pass.
- Protected screenshots for owner auth, saved/reloaded draft, assignment target, and generated result.
- Refresh of `npm run lesson:blocks-proof:json`, `npm run platform:foundation:json`, `npm run platform:activation:json`, and `npm run platform:activation-completion:json`.

No live route, owner data, learner UI, production behavior, generated lesson import, model/TTS/image baseline, publish flow, output contract, learner evidence, or mastery writes changed.
