import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/': ['./public/binaries/**/*'],
  },
};

export default nextConfig;
