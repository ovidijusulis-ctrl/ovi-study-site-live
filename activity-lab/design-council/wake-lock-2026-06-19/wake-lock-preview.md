# Wake Lock Listen/Read Preview

Preview file: `wake-lock-preview.html`

Decision posture: **Keep-wait**.

- Keep the native first-party Wake Lock wrapper as the reference implementation.
- Wait before any production visible `Keep screen awake` control.
- Hold NoSleep.js, Media Chrome, Howler, Plyr, Able Player, and Shikwasa unless native proof fails a real Ovi route case.

Evidence refreshed on 2026-06-19:

- Producer `node --check src/wake-lock-listen-read-review-packet.js`: pass.
- Producer `npm run test:wake-lock-listen-read-review`: `6/6` pass.
- Producer `npm run wake-lock:listen-read-review:json`: `hidden_exact_long_listen_route_wake_lock_ready_owner_gate`, score `86`, `$0`, provider calls `0`.
- Study-site `npm run test:wake-lock`: `45/45` Node/static plus `20/20` desktop/mobile Playwright pass.
- Study-site `npm run build`: `231` pages.
- Current capture summary: `output/playwright/design-wake-lock-current-2026-06-19/summary.json`, pass true, `14` captures, `4` context caveats.

Current caveats:

- Bridge screenshots show the owner shell and iframe viewport; the full long lesson route is captured separately for whole-page and bottom evidence.
- The long lesson has existing dense inline/vocabulary controls outside the Wake Lock preview gate.

No live route, production UI, dependency, audio model, TTS route, image baseline, publish flow, output contract, learner evidence, or mastery writes changed.
