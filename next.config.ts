/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./zig/binaries/**/*'],
    },
  },
};

export default nextConfig;