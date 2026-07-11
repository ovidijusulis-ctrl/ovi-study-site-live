# Navigation Prefetch Preview

Date: 2026-06-20
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether Ovi should keep the navigation prefetch direction for smoother public lesson discovery.

The synthesis is:

- Keep Astro selective `data-astro-prefetch` as the first production candidate.
- Keep native Speculation Rules as the browser-platform compare.
- Keep `quicklink` and `instant.page` as hidden package compares only.
- Wait before production config changes until owner review accepts one exact public surface and slow/offline/back-forward behavior is repeated.

## Current Evidence

- Review packet: `logs/ovi-autoresearch/navigation-prefetch-review/latest.md`
- Status: `hidden_exact_navigation_surface_timing_ready_owner_gate`
- Score: `86/100`
- First public navigation surface: `homepage-archive-card-to-lesson`
- Target route: `/episodes/2026-06-05-shopping-at-a-convenience-store/`
- Target bridge: `/activity-lab/navigation-prefetch-surface-bridge/`
- Production prefetch usage: `0`
- Provider calls: `0`
- Cost: `$0.000000`
- Safe to promote or publish: no

Current official source posture checked during this loop:

- Astro prefetch remains opt-in and supports `hover`, `tap`, `viewport`, and `load`; the Ovi first target should stay selective and `prefetchAll:false`.
- MDN's Speculation Rules guidance supports feature detection and prefetch-only document rules, while warning that unused prefetches still spend resources.
- Chrome's implementation guide keeps conservative/moderate prefetch as the low-risk starting point; more eager or prerender paths require additional analytics/state safety proof.

## Review Question

Should Ovi keep the public navigation prefetch direction for the first homepage/archive card to lesson path?

- Keep: approve the exact public surface for a production-like owner review.
- Wait: keep the hidden proof only and require more route timing or slow/offline proof.
- No: retire this lane and keep current navigation unchanged.

## Gate

Do not move this into production until the exact target proves:

- Public document route only.
- No private, API, media, image, audio, JSON/data sidecar, current-page, external, or mail prefetch.
- No prerender.
- Save-Data and slow/unsupported browser fallbacks.
- Slow/offline/back-forward behavior repeated on the production-like route.
- No learner evidence or mastery writes.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/navigation-prefetch-2026-06-20/navigation-prefetch-preview.html`

The page includes browser-local `Keep`, `Wait`, `No`, and `Clear` controls.

## No Live Changes

This preview changed no live route, production UI, prefetch config, navigation behavior, dependencies, service worker/cache behavior, model route, TTS baseline, image baseline, publish workflow, output contract, learner evidence, or mastery writes.
