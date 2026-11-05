#!/usr/bin/env node
/**
 * materialize-og-image.mjs — build-time materializer for the /frontdesk
 * social share image (Open Graph / Twitter card).
 *
 * Why this exists: the share image is a PNG binary, and the push route
 * available for this repo cannot carry binary files. The image is therefore
 * committed as base64 text under assets/ and this script (wired into the npm
 * `prebuild` step, right after materialize-audio.mjs) decodes it into
 * public/og/ before `next build` runs — locally and on Vercel.
 *
 * The asset is a series of numbered parts (assets/firstring-og.png.b64.part1,
 * .part2, ...) which are concatenated in numeric order before decoding — the
 * same arrangement as the demo recordings, because the push route caps the
 * size of a single pushed file. A single-file assets/firstring-og.png.b64 is
 * also accepted, so the parts can be merged back into one file later without
 * touching this script.
 *
 * Node stdlib only. Idempotent: a target that already exists with the right
 * size is left untouched and never fails the build.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const outDir = join(root, "public", "og");
const target = join(outDir, "firstring-og.png");
const EXPECTED_SIZE = 304635;

function readBase64Asset() {
  const single = join(assetsDir, "firstring-og.png.b64");
  if (existsSync(single)) {
    return readFileSync(single, "utf8");
  }
  const parts = readdirSync(assetsDir)
    .map((name) => {
      const match = name.match(/^firstring-og\.png\.b64\.part(\d+)$/);
      return match ? { name, index: Number(match[1]) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index);
  if (parts.length === 0) {
    return null;
  }
  return parts.map((part) => readFileSync(join(assetsDir, part.name), "utf8")).join("");
}

if (existsSync(target) && statSync(target).size === EXPECTED_SIZE) {
  console.log(`[materialize-og-image] firstring-og.png: already present (${EXPECTED_SIZE} bytes), skipping`);
} else {
  const encoded = readBase64Asset();
  if (encoded === null) {
    console.error("[materialize-og-image] firstring-og.png: no base64 asset found in assets/ — cannot materialize");
    process.exitCode = 1;
  } else {
    const bytes = Buffer.from(encoded.replace(/\s+/g, ""), "base64");
    mkdirSync(outDir, { recursive: true });
    writeFileSync(target, bytes);
    console.log(`[materialize-og-image] firstring-og.png: wrote ${bytes.length} bytes to public/og/`);
    if (bytes.length !== EXPECTED_SIZE) {
      console.error(
        `[materialize-og-image] firstring-og.png: WARNING decoded size ${bytes.length} != expected ${EXPECTED_SIZE}`
      );
    }
  }
}
