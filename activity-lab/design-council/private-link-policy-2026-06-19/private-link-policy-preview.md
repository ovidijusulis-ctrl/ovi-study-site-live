# Private Student/Classroom Link Policy Preview

Preview path:
`logs/design-redesign-candidates/preview-mode/private-link-policy-2026-06-19/private-link-policy-preview.html`

## Recommendation

Keep the hardened first-party private-link foundation, but wait on broader rollout or visual promotion until protected owner/learner evidence exists.

The policy packet now scores `91/100` and is `private_link_evidence_capture_gate_ready`. It is not safe to publish or promote because the protected owner/learner pass still has `0` evidence rows and `0` protected screenshots.

## What This Preview Includes

- Three GPT Image 2 recursive design directions:
  - Safer learner `/student/go/` entry
  - Owner-only private link and PIN controls
  - Owner proof-gate dashboard
- Current full-page and bottom screenshots for:
  - Student manual entry
  - Student code/PIN entry
  - Student opened state
  - Student claimed state
  - Profile after claim
  - Owner child access panel
  - Owner fresh link and one-time PIN state
- Focused panel crops for the exact owner/learner states the redesign should clarify.
- Browser-local Keep / Wait / No controls.
- Preview HTML has `noindex, nofollow`, `no-referrer`, and browser-local decision controls only.

## Verified Inputs

- `node --check src/private-link-policy-review-packet.js`
- `npm run test:private-link-policy-review` -> latest packet suite
- `npm run private-link:policy-review:json`
- Study-site `npx playwright test --config=playwright.config.mjs tests/student-access-link-account.spec.js` -> `2/2`
- Study-site `npm run build` -> `231 page(s) built`
- Current capture summary: `output/playwright/design-private-link-current-2026-06-19/summary.json` -> pass, `14` results, `0` real private marker leaks

## Keep

- Random access-code generation.
- Generated PIN path and server-side hash/verify.
- Expiry and revoke.
- No-store APIs.
- Signed-in claim requirement.
- Claim hijack protection.
- Masked reports and observation proof.
- Public safe-share, offline, and prefetch blockers for private routes.
- `/student/go/` `noindex, nofollow` and no-referrer metadata.
- Student-link PIN attempt throttling.
- Session-only PIN memory and no remembered-PIN auto-open.
- One-time fresh owner link+PIN copy plus active owner link-only copy.

## Wait / Remaining Gate

- Copy `data/private-link-evidence/protected-owner-learner-pass-template.json` to a dated evidence file.
- Complete all five required proof rows: owner fresh link/PIN generation, learner private-link open, learner PIN submit/account claim, assignment snapshot check, durable masked report review.
- Capture at least four protected/masked screenshots.
- Rerun `npm run private-link:policy-review:json` so the packet records evidence rows above zero.
- Keep owner link-and-PIN copy as a one-time owner-only moment with masked durable reports.
- Do not reuse the public safe-share wrapper for private classroom, student, owner, PIN, token, or API links.

## Caveats

- All private codes and PINs shown are synthetic fixtures.
- This preview changed no production private-link route, workflow, API, or learner surface.
- The profile-after-claim screenshots include compact controls outside the private-link gate; they are context, not blockers for this lane.
