import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export; disables Next.js Image Optimization API
  },
  turbopack: {
    root: __dirname,
  },

};

export default nextConfig;
