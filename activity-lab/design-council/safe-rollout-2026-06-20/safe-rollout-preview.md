# Safe Rollout Preview

Date: 2026-06-20
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether Ovi should keep the safe-rollout / feature-flag governance direction for hidden owner/test variants.

The synthesis is:

- Keep the first-party local wrapper as the default rollout safety layer.
- Use the existing safe-share owner-review bridge as the first exact target.
- Keep GrowthBook local payload and OpenFeature Web SDK as compare paths, not production control planes.
- Wait before production Resources/share integration until owner review accepts default-off, rollback, private-route blocking, context-only assignment logs, and cleanup/expiry rules.

## Current Evidence

- Review packet: `logs/ovi-autoresearch/safe-rollout-review/latest.md`
- Status: `hidden_exact_target_rollback_proof_ready_owner_gate`
- Score: `86/100`
- First hidden target: `safe-share-owner-review`
- Target route: `/activity-lab/safe-share-episode-bridge/`
- Target bridge: `/activity-lab/safe-rollout-target-bridge/`
- Production rollout usage: `0`
- Production GrowthBook/OpenFeature usage: `0`
- Provider calls: `0`
- Cost: `$0.000000`
- Safe to promote or publish: no

Current official source posture checked during this loop:

- GrowthBook JavaScript SDK supports local payload initialization and client-side feature evaluation, but network/remote control-plane modes would add operational surface before Ovi has a proven need.
- GrowthBook build-your-own docs model feature rules, targeting conditions, coverage, and experiment metadata, which supports keeping the Ovi first proof small and explicit.
- OpenFeature Web SDK supports provider abstraction and browser flag evaluation; the spec also requires default/provider readiness behavior, so provider migration should be treated as a controlled assignment change.

## Review Question

Should Ovi use safe rollout as the safety layer for the next owner/test feature variant?

- Keep: approve the direction for a production-like owner-review target after the hidden bridge is reviewed.
- Wait: keep the hidden proof only and require more review before any production route touches flags.
- No: retire the rollout layer and continue with manual hidden routes only.

## Gate

Do not move this into production until the exact target proves:

- Missing or malformed config defaults off.
- Rollback / kill switch works.
- Assignment logs are context-only.
- Private routes and private params are blocked.
- No learner evidence or mastery writes happen.
- Every flag has an owner, purpose, version, expiry/review date, fallback behavior, and removal/promote/extend decision.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/safe-rollout-2026-06-20/safe-rollout-preview.html`

The page includes browser-local `Keep`, `Wait`, `No`, and `Clear` controls.

## No Live Changes

This preview changed no live route, production UI, rollout config, dependencies, analytics writes, model route, TTS baseline, image baseline, publish workflow, output contract, learner evidence, or mastery writes.
