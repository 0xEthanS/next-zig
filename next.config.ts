import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/*': ['./zig/binaries/**/*'],
  },
};

export default nextConfig;