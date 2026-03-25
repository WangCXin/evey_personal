import type { NextConfig } from "next";

const rawBasePath = process.env.BASE_PATH;
const basePath = rawBasePath?.startsWith("/") ? rawBasePath : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
