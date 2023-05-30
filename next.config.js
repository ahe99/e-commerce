/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.imgur.com', 'cdn.glitch.global'],
  },
}

module.exports = nextConfig
