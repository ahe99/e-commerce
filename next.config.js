/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.glitch.global'],
  },
}

module.exports = nextConfig
