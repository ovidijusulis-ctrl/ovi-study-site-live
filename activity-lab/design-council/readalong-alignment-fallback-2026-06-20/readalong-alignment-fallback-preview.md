# Read-Along Alignment Fallback Preview

Generated: 2026-06-20
Mode: preview only
Recommendation: keep-wait

## Decision

Keep read-along alignment fallback research as a report-only proof lane, but wait before dependency setup, production sync writes, caption writes, episode JSON writes, study-site writes, live-route changes, or paid STT calibration.

## Evidence

- Fallback review status: `fallback_review_ready_dependency_gate`
- Fallback review score: `84/100`
- Tech review status: `review_packet_ready_readalong_alignment_tech_gate`
- Tech review score: `87/100`
- Top current candidate: `easyaligner_ground_truth_transcript_probe`
- Stable-ts proof status: `proof_harness_ready_dependency_gate`
- Stable-ts archived/dependency risk: present
- WhisperX runnable without download: `false`
- MFA runnable without setup: `false`
- Fixture packet: `5` problem fixtures, `2` controls, `71.74` selected minutes
- Provider calls: `0`
- Paid calls: `0`
- Cost: `$0.000000`
- Safe to promote or publish: `false`
- Production behavior changed: `false`

## GPT Image 2 Directions

- `assets/gpt-image-2-readalong-dependency-gate.png`
- `assets/gpt-image-2-readalong-council.png`
- `assets/gpt-image-2-readalong-proof-loop.png`

## Current Visual Evidence

Live full-page and true-bottom screenshots were captured for the current fixture packet:

- `https://ovienglish.com/episodes/2026-06-20-spanish-start-ordering-at-a-bakery/`
- `https://ovienglish.com/episodes/2026-07-02-cafe-coffee-and-working-at-a-cafe/`
- `https://ovienglish.com/episodes/2026-06-05-taking-a-taxi/`

Capture report:

- `output/playwright/design-readalong-alignment-current-2026-06-20/summary.json`
- Result: pass
- Route/viewport captures: `6`
- HTTP `200`: `6/6`
- Broken images: `0`
- Overflow: `0`
- Console/page errors: `0`
- Audio elements found: `1` per route/viewport
- Bottom screenshots: captured for every route and viewport

## Council Reading

- Keep the report-only lane because Ovi needs timing/coverage proof on sentence-level fallback fixtures and controls before changing Listen Mode.
- Wait on dependency setup because stable-ts is archived/dependency-gated, WhisperX may need local model/cache policy, and MFA needs dictionary/acoustic-model/corpus proof.
- Reject any path that writes sync/caption/episode JSON/output/study-site/live files from this preview lane.
- Keep paid STT held until local forced-alignment candidates have measured rows and the operator explicitly approves a small spend cap.

## Verification

- `node --check output/playwright/design-readalong-alignment-current-2026-06-20/capture-readalong-alignment-current.mjs`
- `npm run test:readalong-alignment-fallback-review`
- `npm run readalong:alignment:fallback-review:json`

## Next Gate

Owner/test review decides one of:

- satisfy the easyaligner dependency/model-cache gate first as the best non-archived local proof
- accept stable-ts archived risk explicitly for a local-only proof
- reject both near-term gates and hold until WhisperX/MFA setup is worth comparing
- hold alignment dependency setup and redesign the proof packet

No production behavior changed in this preview.
