import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "NextEleven monogram";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image(){
  const card = await readFile(join(process.cwd(), "images/nexteleven-social-card.png"));
  const src = `data:image/png;base64,${card.toString("base64")}`;
  return new ImageResponse(<img src={src} alt="" width="1200" height="630" style={{width:"1200px",height:"630px"}}/>,size)
}
