import { ImageResponse } from "next/og";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
export const size={width:64,height:64};export const contentType="image/png";
// The NextEleven mark (multitasking agent octopus, adopted 2026-11-12) is
// stored as base64 text parts under assets/ because the push route for this
// repo cannot carry binary files — same arrangement as the OG image and
// demo audio materializers. Parts are concatenated in numeric order.
async function markSrc(){
  const dir = join(process.cwd(), "assets");
  const parts: { name: string; index: number }[] = [];
  for (const name of await readdir(dir)) {
    const m = name.match(/^nexteleven-mark\.png\.b64\.part(\d+)$/);
    if (m) parts.push({ name, index: Number(m[1]) });
  }
  parts.sort((a, b) => a.index - b.index);
  const b64 = (await Promise.all(parts.map((p) => readFile(join(dir, p.name), "utf8")))).join("");
  return `data:image/png;base64,${b64}`;
}
export default async function Icon(){
  const src = await markSrc();
  return new ImageResponse(<img src={src} alt="" width="64" height="64" style={{width:"64px",height:"64px"}}/>,size)
}
