import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: { reactCompiler: true },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
