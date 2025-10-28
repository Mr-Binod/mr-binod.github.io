import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export', // this makes it a static export
  images: {
    unoptimized: true, // since GitHub Pages doesn't support Image Optimization
  },
};

export default nextConfig;
