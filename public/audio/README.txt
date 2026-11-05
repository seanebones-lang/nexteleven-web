FirstRing demo audio
====================

The MP3s in this folder are REAL recordings of live test calls to the
FirstRing demo line — not scripts read by actors:

- firstring-demo-call.mp3 — Retell call call_961e8219cb61c08c78e6bf1f8a7,
  2026-11-05, 1m 28s: an oil-change booking for a 2019 Ford F-150, a time
  change, and a brake-price question the front desk refused to guess at.
- firstring-demo-call-2.mp3 — Retell call call_69889d47faa1ff45b4a98c27a3a,
  2026-11-05, 1m 12s: a caller asking for an oil change on a Tesla and
  offering a joke callback number; the front desk rejected both, politely.

They are served as /audio/firstring-demo-call.mp3 and
/audio/firstring-demo-call-2.mp3, and the <audio> players on the /frontdesk
page are wired to exactly those paths.

Do not replace them with generated or stock recordings — the page promises
"A real call to our demo line."

Privacy redactions
------------------
In both calls the caller dictated his real personal cell number and the
front desk read it back. Those seconds are MUTED in these recordings, and
the transcripts on the page show the number masked (817-•••-9898). The
unredacted masters are kept off this repo.

Why these files are not committed directly
------------------------------------------
The push route used for this repo cannot carry binary files, so the
recordings are committed as base64 text under assets/
(firstring-demo-call.mp3.b64, firstring-demo-call-2.mp3.b64 — or numbered
.partN files if a single file is ever too large to push). The npm
`prebuild` step (scripts/materialize-audio.mjs) decodes them into this
folder on every build, locally and on Vercel. A future cleanup with a
credentialed git client can replace the base64 assets and this script
with direct binary commits of the two MP3s.
