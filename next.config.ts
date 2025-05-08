import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/github-mainpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/github-mainpage/' : '',
};

export default nextConfig;
