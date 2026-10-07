import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/companies",
        destination: "/#companies",
        permanent: true,
      },
      // Retired company names. 301 (not Next's default 308) as requested.
      {
        source: "/companies/osynra",
        destination: "/companies/toned-health",
        statusCode: 301,
      },
      {
        source: "/companies/omni-insight",
        destination: "/companies/ec-ads",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
