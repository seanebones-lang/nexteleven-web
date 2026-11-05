#!/usr/bin/env node
/**
 * materialize-video.mjs — build-time video materializer for the /frontdesk page.
 *
 * Why this exists: the FirstRing explainer video (and its poster frame) are
 * binary files, and the push route available for this repo cannot carry
 * binaries. They are therefore committed as base64 text under assets/ and
 * this script (wired as the last step of the npm `prebuild` chain) decodes
 * them into public/video/ before `next build` runs — locally and on Vercel.
 * Same arrangement as the demo recordings (materialize-audio.mjs) and the
 * share image (materialize-og-image.mjs).
 *
 * Each asset is either a single file (assets/<name>.b64) or a series of
 * numbered parts (assets/<name>.b64.part1, .part2, ...) which are
 * concatenated in numeric order before decoding. Both forms are supported so
 * the parts can be merged back into one file later without touching this
 * script.
 *
 * Node stdlib only. Idempotent: a target that already exists with the right
 * size is left untouched and never fails the build.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const outDir = join(root, "public", "video");

const MEDIA = [
  { base: "firstring-explainer.mp4", expectedSize: 3457594 },
  { base: "firstring-explainer-poster.jpg", expectedSize: 89468 },
];

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

for (const { base, expectedSize } of MEDIA) {
  const target = join(outDir, base);
  if (existsSync(target) && statSync(target).size === expectedSize) {
    console.log(`[materialize-video] ${base}: already present (${expectedSize} bytes), skipping`);
    continue;
  }
  const encoded = readBase64Asset(base);
  if (encoded === null) {
    console.error(`[materialize-video] ${base}: no base64 asset found in assets/ — cannot materialize`);
    process.exitCode = 1;
    continue;
  }
  const bytes = Buffer.from(encoded.replace(/\s+/g, ""), "base64");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, bytes);
  console.log(`[materialize-video] ${base}: wrote ${bytes.length} bytes to public/video/`);
  if (bytes.length !== expectedSize) {
    console.error(
      `[materialize-video] ${base}: WARNING decoded size ${bytes.length} != expected ${expectedSize}`
    );
  }
}
