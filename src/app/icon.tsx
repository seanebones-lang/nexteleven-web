import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const size={width:64,height:64};export const contentType="image/png";
export default async function Icon(){
  const logo = await readFile(join(process.cwd(), "images/nexteleven-logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(<img src={src} alt="" width="64" height="64" style={{width:"64px",height:"64px"}}/>,size)
}
