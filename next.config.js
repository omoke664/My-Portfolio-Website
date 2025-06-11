/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portfolio-Website/' : '',
}

module.exports = nextConfig 