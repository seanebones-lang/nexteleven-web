import { ImageResponse } from "next/og";

export const alt = "NextEleven security engineering and care: Security is part of staying open.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "64px 72px", background: "#090b0f", color: "#f4f6f8", borderTop: "8px solid #5b8cff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 3, color: "#adb5c0" }}><span>NEXTELEVEN</span><span>SECURITY ENGINEERING & CARE</span></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 75, fontSize: 80, letterSpacing: -4, lineHeight: 1.04 }}><span>Security is part of</span><span style={{ color: "#5b8cff" }}>staying open.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", paddingTop: 26, borderTop: "1px solid #303945", fontSize: 24, color: "#adb5c0" }}><span>Find exposure. Make tested changes.</span><span>nexteleven.dev/security</span></div>
    </div>, size,
  );
}
