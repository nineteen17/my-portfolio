/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.credly.com"],
  },
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
};

export default nextConfig;
