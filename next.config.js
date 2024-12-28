/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_FAL_KEY: process.env.NEXT_PUBLIC_FAL_KEY,
  },
};

module.exports = nextConfig;