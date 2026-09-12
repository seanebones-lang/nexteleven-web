import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const size={width:180,height:180};export const contentType="image/png";
export default async function AppleIcon(){
  const logo = await readFile(join(process.cwd(), "images/nexteleven-logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(<img src={src} alt="" width="180" height="180" style={{width:"180px",height:"180px"}}/>,size)
}
