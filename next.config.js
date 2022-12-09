/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
    unoptimized: true,
  },
}

module.exports = nextConfig
