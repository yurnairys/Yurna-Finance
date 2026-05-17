/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      { source: '/real-estate', destination: '/', permanent: true },
      { source: '/finanzas', destination: '/#servicios', permanent: true },
      { source: '/proyectos', destination: '/#servicios', permanent: true },
      { source: '/servicios-extras', destination: '/#servicios', permanent: true },
    ]
  },
}

module.exports = nextConfig
