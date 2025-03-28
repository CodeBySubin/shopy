/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Ensures correct server-side handling
    reactStrictMode: true,
    trailingSlash: true,  // Adds trailing slashes to prevent 404s on Vercel
    images: {
      unoptimized: true,  // Fixes image optimization issues on Vercel
    },
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/index.html',  // Ensures all routes point to the app entry
        },
      ];
    },
  };
  
  export default nextConfig;
  