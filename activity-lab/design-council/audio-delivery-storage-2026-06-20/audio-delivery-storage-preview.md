# Audio Delivery Storage Preview

Date: 2026-06-20
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether Ovi should keep a dedicated object-storage/CDN audio lane before the public lesson MP3 library grows further.

The synthesis is:

- Keep Cloudflare R2 with a custom audio domain as the first candidate.
- Keep S3 plus CloudFront as the strong fallback if AWS governance is preferred.
- Hold Supabase Storage for account-linked or private assets, not first public MP3 egress.
- Keep local `/audio/...` paths as fallback and rollback.
- Wait before any production migration until one real MP3 proves HEAD metadata, Content-Type, CORS, cache, and Range GET or browser seek behavior.

## Current Evidence

- Review packet: `logs/ovi-autoresearch/audio-delivery-storage-review/latest.md`
- Status: `review_packet_ready_audio_delivery_storage_gate`
- Score: `86/100`
- Current static audio footprint: `558M`
- Current MP3 count: `204`
- Renderer fallback: local `public/audio` filename resolver and `/audio/...` player path
- Production audio hosting changes: `0`
- Provider calls: `0`
- Cost: `$0.000000`
- Safe to promote or publish: no

## Review Question

Should Ovi keep the object-storage/CDN audio direction and prepare one remote MP3 proof?

- Keep: owner can set up a test R2 bucket/custom domain and run the one-object proof.
- Wait: keep this as a documented scaling lane and revisit when traffic or library size grows.
- No: retire the lane and keep static audio as the only public delivery path.

## Gate

Do not move this into production until the exact target proves:

- One non-private MP3 object on the chosen audio origin.
- `audio/mpeg` Content-Type and stable HEAD metadata.
- CORS from `https://ovienglish.com` using an Origin header.
- Single-byte Range GET behavior or accepted browser seek proof.
- Additive `audio_url` preference with local `/audio/...` fallback.
- RSS/Spotify/enclosure behavior unchanged.
- Roleplay and pronunciation audio references unaffected.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/audio-delivery-storage-2026-06-20/audio-delivery-storage-preview.html`

The page includes browser-local `Keep`, `Wait`, `No`, and `Clear` controls.

## No Live Changes

This preview changed no live route, production UI, audio hosting, episode contract, publish workflow, dependency, model route, TTS baseline, image baseline, learner evidence, or mastery writes.
