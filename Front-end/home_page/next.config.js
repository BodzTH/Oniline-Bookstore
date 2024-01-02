/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add the domains you want to load images from
      { hostname: "diwanegypt.com" },
    ],
  },
};

module.exports = nextConfig;
