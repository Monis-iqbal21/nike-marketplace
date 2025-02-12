import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true, // This will allow the build to proceed even if there are ESLint errors
  },
};

export default nextConfig;
