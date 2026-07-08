import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/new-properties/:location/:slug",
        destination: "/properties/:location/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
