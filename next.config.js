/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages by setting the basePath and assetPrefix
  basePath: process.env.NODE_ENV === 'production' ? '/writeups.xtle0o0.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/writeups.xtle0o0.io/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 