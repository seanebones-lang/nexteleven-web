import { ImageResponse } from "next/og";
export const size={width:64,height:64};export const contentType="image/png";
export default function Icon(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#090b0f",border:"4px solid #303945",color:"#f4f6f8",fontSize:22,fontWeight:700,letterSpacing:-2}}>N<span style={{color:"#5b8cff"}}>11</span></div>,size)}
