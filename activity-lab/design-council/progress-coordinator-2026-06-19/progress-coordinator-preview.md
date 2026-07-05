# Progress Coordinator Lesson Bridge Preview

Date: 2026-06-19
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether the Progress Coordinator direction should continue from hidden transport proof into a visible duplicate-submit or stale-tab feedback experiment.

The design council synthesis is:

- Keep the first-party BroadcastChannel and Web Locks coordinator direction.
- Keep the owner proof-gate direction.
- Wait before adding learner-visible duplicate-submit or stale-tab messages to production.
- Do not promote held compare dependencies or change mastery/evidence truth.

## Current Evidence

- Review packet: `logs/ovi-autoresearch/progress-coordinator-review/latest.md`
- Status: `hidden_exact_progress_surface_proof_ready_owner_gate`
- Score: `87/100`
- Exact route: `/episodes/2026-06-05-shopping-at-a-convenience-store/`
- Exact surface: `lesson-learning-check`
- First-party coordinator ready: yes
- Hidden lab ready: yes
- BroadcastChannel proof ready: yes
- Web Locks one-owner proof ready: yes
- Event ID dedupe ready: yes
- Privacy stripping ready: yes
- Unsupported fallback proof ready: yes
- No learner/mastery evidence writes: yes
- Production progress surface integrated: no
- Safe to promote or publish: no

Fresh proof:

- Producer review command: `npm run progress:coordinator-review:json`
- Study-site proof command: `npm run test:progress-coordinator`
- Study-site result: `37/37` Node/static checks and `14/14` Playwright checks passed
- Study-site build: `npm run build`
- Build result: `224 page(s) built`
- Current capture summary: `output/playwright/design-progress-coordinator-current-2026-06-19/summary.json`
- Capture result: pass
- Progress lab desktop/mobile: received `2`, duplicates `2`, max concurrent owner `1`, `0` overflow, `0` console/page errors, lab controls `44px+`
- Lesson bridge desktop/mobile: ready, access param stripped, no private payload, `0` overflow, bridge controls `44px+`
- Lesson surface desktop/mobile: `3/3` images loaded, learning-check choice visible, bottom resources captured

## GPT Image 2 Directions

Saved assets:

- `assets/gpt-image-2-learner-duplicate-feedback.png`
- `assets/gpt-image-2-owner-proof-gate.png`
- `assets/gpt-image-2-stale-tab-sync-recovery.png`

Direction A: Learner Duplicate Feedback

- Best future learner-facing route if duplicate-submit feedback belongs inside a lesson.

Direction B: Owner Proof Gate

- Best current keep-wait route because it makes the hidden proof readable without implying production integration.

Direction C: Stale-Tab Recovery

- Best future safety pattern if real stale-tab confusion appears in classroom or profile practice.

## Gate

Do not promote this publicly until a hidden exact visible-feedback variant proves:

- One exact visible behavior: duplicate-submit or stale-tab.
- Desktop and mobile route behavior.
- Focus return and accessible status language.
- Copy is understandable to learners and not scary.
- Event IDs plus storage/API validation remain durable truth.
- BroadcastChannel stays hint transport only.
- No private payload appears.
- No learner evidence write.
- No mastery write.
- No production UI, dependency, model route, TTS route, image baseline, publish workflow, or output contract change happens from preview mode.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/progress-coordinator-2026-06-19/progress-coordinator-preview.html`

The page includes browser-local `Keep direction`, `Wait for visible proof`, `No / revise`, and `Clear decision` controls.

## No Live Changes

This preview changed no live route, learner-visible production UI, owner data, learner state, account state, dependencies, model route, TTS route, image baseline, publish workflow, output contract, learner evidence, or mastery writes.
