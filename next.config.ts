import type { NextConfig } from "next";
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];
const nextConfig: NextConfig = { reactStrictMode: true, typedRoutes: true, poweredByHeader: false, async headers(){ return [{ source: "/(.*)", headers: securityHeaders }, { source: "/explainers/:path*", headers: [{key: "X-Frame-Options", value: "SAMEORIGIN"}] }]; }, async redirects(){ return [
  { source: "/referredbyai/index.html", destination: "/referredbyai", permanent: true },
  { source: "/apps/apple", destination: "/apps#apple", permanent: true },
  { source: "/apps/android", destination: "/apps#android", permanent: true },
]; } };
export default nextConfig;
