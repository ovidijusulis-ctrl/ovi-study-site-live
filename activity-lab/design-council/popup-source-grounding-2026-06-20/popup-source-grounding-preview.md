# Popup Source-Grounding Council Preview

Preview file:
`/Users/ovi/Downloads/Trying things/ovi-english-school/logs/design-redesign-candidates/preview-mode/popup-source-grounding-2026-06-20/popup-source-grounding-preview.html`

Purpose:
- Turn the accepted popup source-grounding repair into an owner-readable preview before any product UI placement.
- Keep exact learner-surface proof separate from source-context-only evidence.
- Use GPT Image 2 as recursive design input, then ground the preview in real browser screenshots.

Fresh proof used:
- `npm run test:popup-backlog-review`: 6/6 passed.
- `npm run test:popup-backlog-row-review`: 6/6 passed.
- `npm run popup:registry:json`: 7,562 entries, 6,655 safe, 383 trusted phrases, missing high-priority 0/0.
- `npm run popup:route:status -- --json`: watch 92, 4 agreed sources, 0 mismatches, 0 missing sources, 1 superseded report ignored.
- `npm run popup:meaning:watch -- --json --include-recent-lessons 999 --max-recent-entries 500 --max-live-bank-entries 500 --max-fixtures 1500 --strategies current,hybrid --max-suite-spend-usd 0`: safe 100, 1,049/1,049 pass, 0 paid calls.

Scope:
- Preview-only.
- No live route, learner-visible UI, model route, TTS, publish flow, output contract, learner-evidence, or mastery-write change.
