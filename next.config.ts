/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...whatever you already have here...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};

module.exports = nextConfig;