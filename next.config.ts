import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/actions/**': ['./zig/binaries/**/*'],
  },
};

export default nextConfig;
