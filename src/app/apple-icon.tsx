import { ImageResponse } from "next/og";
export const size={width:180,height:180};export const contentType="image/png";
export default function AppleIcon(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#090b0f",border:"10px solid #303945",color:"#f4f6f8",fontSize:60,fontWeight:700,letterSpacing:-5}}>N<span style={{color:"#5b8cff"}}>11</span></div>,size)}
