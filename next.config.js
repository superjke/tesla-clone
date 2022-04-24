/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['tesla-cdn.thron.com', 'static-assets.tesla.com'],
  },
}
