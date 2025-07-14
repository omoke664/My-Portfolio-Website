/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  ...(isProd && {
    basePath: '/My-Portfolio-Website',
    assetPrefix: '/My-Portfolio-Website',
  }),
};

module.exports = nextConfig 