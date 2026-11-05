FirstRing social share image
============================

firstring-og.png (1200x630) is the Open Graph / Twitter card image for the
/frontdesk page — FirstRing's own branding (the ring-and-handset mark and
Amy, the front-desk receptionist) on the page's navy, replacing the
site-wide default monogram card for this route. The /frontdesk page
metadata points og:image and twitter:image at /og/firstring-og.png.

Why this file is not committed directly
---------------------------------------
The push route used for this repo cannot carry binary files, so the image
is committed as base64 text under assets/ (firstring-og.png.b64.part1,
.part2, ... — numbered parts, because the push route also caps the size of
a single pushed file). The npm
`prebuild` step (scripts/materialize-og-image.mjs) decodes it into this
folder on every build, locally and on Vercel — the same mechanism as the
demo recordings in public/audio/. A future cleanup with a credentialed git
client can replace the base64 asset and this script with a direct binary
commit of the PNG.
