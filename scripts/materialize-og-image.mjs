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
 * Node stdlib only. Idempotent: a target that already exists with the right
 * size is left untouched and never fails the build.
 */
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetPath = join(root, "assets", "firstring-og.png.b64");
const outDir = join(root, "public", "og");
const target = join(outDir, "firstring-og.png");
const EXPECTED_SIZE = 304635;

if (existsSync(target) && statSync(target).size === EXPECTED_SIZE) {
  console.log(`[materialize-og-image] firstring-og.png: already present (${EXPECTED_SIZE} bytes), skipping`);
} else {
  if (!existsSync(assetPath)) {
    console.error("[materialize-og-image] firstring-og.png: no base64 asset found in assets/ — cannot materialize");
    process.exitCode = 1;
  } else {
    const bytes = Buffer.from(readFileSync(assetPath, "utf8").replace(/\s+/g, ""), "base64");
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
