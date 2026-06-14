import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects",
        destination: "http://localhost:3001/projects",
      },
      {
        source: "/projects/:path*",
        destination: "http://localhost:3001/projects/:path*",
      },
      {
        source: "/blog",
        destination: "http://localhost:3002/blog",
      },
      {
        source: "/blog/:path*",
        destination: "http://localhost:3002/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
