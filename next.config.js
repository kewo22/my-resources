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
    DATABASE_URL:
      "mongodb+srv://kewo22:tOoMhmkRcwMJOzr0@cluster0.64jtd2x.mongodb.net/my-resources",
  },
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
