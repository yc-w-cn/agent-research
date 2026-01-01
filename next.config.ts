import type { NextConfig } from 'next';

import packageJson from './package.json';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/agent-research',
  assetPrefix: '/agent-research',
  env: {
    APP_VERSION: packageJson.version,
    BUILD_DATE: new Date().toISOString().split('T')[0],
  },
};

export default nextConfig;
