/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [{ source: "/:path*", destination: "/:path*" }];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
