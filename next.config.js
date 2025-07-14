/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  ...(isGithubPages && {
    basePath: '/My-Portfolio-Website',
    assetPrefix: '/My-Portfolio-Website/',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/My-Portfolio-Website' : '',
  },
};

module.exports = nextConfig 