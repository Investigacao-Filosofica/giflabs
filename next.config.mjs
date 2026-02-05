/** @type {import('next').NextConfig} */
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Proxy Strapi API para evitar CORS no browser (browser -> mesmo origem -> Next.js -> Strapi)
  async rewrites() {
    return [
      {
        source: '/api/strapi/:path*',
        destination: `${STRAPI_URL}/api/:path*`,
      },
    ];
  },
  images: { 
    unoptimized: false,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'giflabs-production.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig
