/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  basePath: '/ghentforgood.org',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
