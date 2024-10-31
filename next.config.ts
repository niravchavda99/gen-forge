import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/gen-forge",
  assetPrefix: "/gen-forge/",
};

export default nextConfig;
