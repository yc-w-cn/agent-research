import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/agent-research',
  assetPrefix: '/agent-research',
};

export default nextConfig;
