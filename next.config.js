/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      { source: '/real-estate', destination: '/', permanent: true },
      { source: '/finanzas', destination: '/servicios', permanent: true },
      { source: '/proyectos', destination: '/servicios', permanent: true },
      { source: '/servicios-extras', destination: '/servicios', permanent: true },
    ]
  },
}

module.exports = nextConfig
