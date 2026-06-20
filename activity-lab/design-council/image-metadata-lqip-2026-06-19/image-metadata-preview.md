# Lesson Image Metadata + Tiny WebP LQIP Preview

Date: 2026-06-19
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether the image metadata and tiny WebP LQIP direction is ready for owner review after the repeated real import-path freshness proof.

The design council synthesis is:

- Keep the image loading hierarchy direction.
- Keep the owner import-gate direction.
- Keep the homepage thumbnail stability direction.
- Wait before public LQIP sidecar adoption until owner/test review accepts the repeated freshness proof and chooses one public sidecar integration.

## Current Evidence

- Review packet: `logs/ovi-autoresearch/image-metadata-lqip-review/latest.md`
- Status: `repeat_import_path_freshness_proof_ready_owner_gate`
- Score: `89/100`
- Source fixture: `2026-06-10-choosing-something-fun-to-do-with-friends-a1`
- Fixture images: `4`
- Hidden image metadata lab ready: yes
- First-party manifest ready: yes
- Hero-only priority ready: yes
- Lazy below-fold ready: yes
- Dimensions ready: yes
- LQIP sidecars ready: yes
- Max LQIP sidecar bytes: `326`
- Reviewed art unchanged: yes
- Private paths absent: yes
- Public route proof ready: yes
- Public route used for visual proof: `/episodes/2026-05-17-kofu-and-yamanashi-modern-cafe-culture/`
- Real import-path freshness proof ready: yes, convenience-store `4/4` matched scenes
- Repeat import-path freshness proof ready: yes, AI Agent Swarms `6/6` matched scenes
- Public asset hashes match producer output: yes
- Import-gate hashes match reviewed output: yes
- Live production route published: no

Current browser proof:

- Study-site image metadata spec: `npm run test:image-metadata`
- Result: `36/36` Node/static checks and `12/12` Playwright checks passed
- Study-site build: `npm run build`
- Result: `221 page(s) built`
- Current capture summary: `output/playwright/design-image-metadata-current-2026-06-19/summary.json`
- Capture result: pass
- Hidden lab desktop/mobile: `4/4` images loaded, `0` broken images, `0` horizontal overflow
- Public Kofu route desktop/mobile: `7/7` images loaded, `0` broken images, `0` horizontal overflow
- Homepage desktop/mobile: `112` image elements, `8` initially loaded, `0` broken images, `0` horizontal overflow
- Full-page and bottom screenshots captured for hidden lab, public route, and homepage

## GPT Image 2 Directions

Saved assets:

- `assets/gpt-image-2-lesson-image-loading-hierarchy.png`
- `assets/gpt-image-2-image-metadata-import-gate.png`
- `assets/gpt-image-2-homepage-thumbnail-stability.png`

Direction A: Lesson Image Loading Hierarchy

- Best learner-facing representation of hero priority, lazy scenes, stable dimensions, and no layout shift.

Direction B: Image Metadata Import Gate

- Best owner workflow for keep-held, wait-for-proof, and no-revise decisions before public adoption.

Direction C: Homepage Thumbnail Stability

- Best homepage QA layer for dimensions reserved, priority bounded, lazy loading below first cards, and no broken fallbacks.

## Gate

Do not promote public LQIP sidecars until owner/test review confirms:

- The repeated import-path freshness proof is accepted for the current image import/publish path.
- One public sidecar integration is chosen for a bounded owner-reviewed trial.
- Private import paths do not appear in rendered HTML.
- Hero-only priority remains explicit.
- Below-fold scenes remain lazy-loaded.
- Dimensions remain stable.
- Reviewed lesson art remains unchanged.
- No live publish, learner evidence write, mastery write, dependency change, model route change, TTS route change, image baseline change, or output contract change happens from preview mode.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/image-metadata-lqip-2026-06-19/image-metadata-preview.html`

The page includes browser-local `Keep direction`, `Wait for owner review`, `No / revise`, and `Clear decision` controls.

## No Live Changes

This preview changed no live route, learner-visible production UI, owner data, learner state, account state, dependencies, model route, TTS route, image baseline, publish workflow, output contract, learner evidence, or mastery writes.
