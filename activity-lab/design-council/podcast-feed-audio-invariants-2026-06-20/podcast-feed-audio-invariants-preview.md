# Podcast Feed Audio Invariants Preview

Date: 2026-06-20
Status: preview-only decision surface
Recommended decision: keep-wait

## What This Tests

This preview tests whether Ovi should repair RSS podcast enclosure selection before moving any MP3s to remote object storage.

The current feed is XML-valid, but the review packet found a stronger issue:

- `6` feed items.
- `6` unique HTTPS `audio/mpeg` enclosures.
- `0` duplicate enclosure URLs.
- `0` duplicate GUIDs.
- `0` byte-length mismatches against local files.
- `5` roleplay/support-looking enclosures.
- `5` matching primary lesson MP3 candidates already exist.

## Current Finding

The likely current bug is that RSS generation picks the first MP3 in an output folder, so recent roleplay/stem audio can become the public podcast enclosure even when the full lesson MP3 exists.

## Review Question

Should Ovi make RSS primary-audio selection repair the next publishing/distribution improvement before remote audio migration?

- Keep: stage a narrow repair that prefers declared primary lesson audio, then run feed diff and public proof.
- Wait: keep the finding in the review queue and avoid remote audio work until it is resolved.
- No: leave RSS tied to current directory-order selection.

## Gate

Do not change the public feed until the staged proof shows:

- Enclosure filename matches `episode.audio.filename`, `audio.primaryFilename`, or `artifacts.audio_primary_filename`.
- No roleplay, speaker stem, host stem, or backup MP3 appears as a public podcast enclosure unless intentionally modeled as a bonus feed item.
- GUIDs stay stable.
- Enclosure URLs are unique, HTTPS, ASCII, positive-length, and `audio/mpeg`.
- Byte lengths match the selected public audio files.
- Remote-audio fixture and HEAD/Range/browser-seek proof come after this repair, not before.

## Preview

Open:

`logs/design-redesign-candidates/preview-mode/podcast-feed-audio-invariants-2026-06-20/podcast-feed-audio-invariants-preview.html`

The page includes browser-local `Keep`, `Wait`, `No`, and `Clear` controls.

## No Live Changes

This preview changed no live route, production UI, feed XML, audio hosting, episode contract, publish workflow, dependency, model route, TTS baseline, image baseline, learner evidence, or mastery writes.
