import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/templates",
        destination: "/mockups",
        permanent: true,
      },
      {
        source: "/templates/:path*",
        destination: "/mockups/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
