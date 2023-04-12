/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost','nextcrud.fly.dev'],
  },
}

module.exports = nextConfig
