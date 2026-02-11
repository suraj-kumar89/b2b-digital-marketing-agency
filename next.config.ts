import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/b2b-digital-marketing-agency",
  assetPrefix: "/b2b-digital-marketing-agency",

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
