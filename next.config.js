/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: '/My-Portfolio-Website',
  assetPrefix: '/My-Portfolio-Website',
}

module.exports = nextConfig 