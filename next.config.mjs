/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
  images: {
    domains: ["images.credly.com"],
  },
};

export default nextConfig;