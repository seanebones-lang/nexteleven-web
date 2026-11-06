#!/usr/bin/env node
/**
 * materialize-deadbolt-assets.mjs — build-time materializer for the two
 * binary assets of the DeadBolt snapshot (power mark + walkthrough poster).
 *
 * Why this exists: the /deadbolt page snapshot (content/deadbolt/) references
 * two binary assets whose bytes are pinned by sha256 in
 * content/deadbolt/source.json and must land under
 * public/deadbolt-assets/<revision>/. The push route used for this snapshot
 * cannot carry binary files, so — same arrangement as the FirstRing media
 * (materialize-audio.mjs, materialize-og-image.mjs, materialize-video.mjs) —
 * the assets are committed as base64 text under assets/ and this script
 * (appended to the npm `prebuild` chain) decodes them into public/ before
 * `next build` runs — locally and on Vercel.
 *
 * Each asset is either a single file (assets/<name>.b64) or a series of
 * numbered parts (assets/<name>.b64.part1, .part2, ...) which are
 * concatenated in numeric order before decoding, so the parts can be merged
 * back into one file later without touching this script.
 *
 * Fail-closed: a missing base64 source or a sha256 mismatch against
 * source.json's record exits 1 — a wrong asset must never deploy silently.
 *
 * Node stdlib only. Idempotent: a target that already hashes to the recorded
 * sha256 is left untouched and never fails the build.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const snapshot = JSON.parse(readFileSync(join(root, "content", "deadbolt", "source.json"), "utf8"));
const outDir = join(root, "public", "deadbolt-assets", snapshot.revision);

const MEDIA = [
  { base: "deadbolt-power-mark.png", target: join(outDir, "deadbolt-power-mark.png"), sourceKey: "assets/deadbolt-power-mark.png" },
  { base: "deadbolt-poster.jpg", target: join(outDir, "media", "poster.jpg"), sourceKey: "assets/media/poster.jpg" },
];

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function readBase64Asset(base) {
  const single = join(assetsDir, `${base}.b64`);
  if (existsSync(single)) {
    return readFileSync(single, "utf8");
  }
  const partPattern = new RegExp(`^${base.replace(/\./g, "\\.")}\\.b64\\.part(\\d+)$`);
  const parts = readdirSync(assetsDir)
    .map((name) => {
      const match = name.match(partPattern);
      return match ? { name, index: Number(match[1]) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index);
  if (parts.length === 0) {
    return null;
  }
  return parts.map((part) => readFileSync(join(assetsDir, part.name), "utf8")).join("");
}

for (const { base, target, sourceKey } of MEDIA) {
  const expected = snapshot.sha256[sourceKey];
  if (existsSync(target) && sha256(readFileSync(target)) === expected) {
    console.log(`[materialize-deadbolt-assets] ${base}: already present (sha256 ${expected.slice(0, 12)}…), skipping`);
    continue;
  }
  const encoded = readBase64Asset(base);
  if (encoded === null) {
    console.error(`[materialize-deadbolt-assets] ${base}: no base64 asset found in assets/ — cannot materialize`);
    process.exitCode = 1;
    continue;
  }
  const bytes = Buffer.from(encoded.replace(/\s+/g, ""), "base64");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, bytes);
  const actual = sha256(bytes);
  console.log(`[materialize-deadbolt-assets] ${base}: wrote ${bytes.length} bytes to public/deadbolt-assets/${snapshot.revision}/`);
  if (actual !== expected) {
    console.error(`[materialize-deadbolt-assets] ${base}: sha256 mismatch — decoded ${actual}, source.json records ${expected}`);
    process.exitCode = 1;
  }
}
