import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/projects",
  trailingSlash: true,
};

export default nextConfig;