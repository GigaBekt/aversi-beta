import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'ka',
    locales: ['ka', 'en'],
  },
};

export default nextConfig;
