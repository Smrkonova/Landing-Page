/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.26'],
  async rewrites() {
    return [
      {
        source: '/product',
        destination: '/Product',
      },
    ];
  },
};

export default nextConfig;
