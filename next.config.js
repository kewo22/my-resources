const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    API_URL: process.env.API_URL,
  },
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
