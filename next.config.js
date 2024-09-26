/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  // Add basePath
  basePath: process.env.NODE_ENV === "production" ? "/curriculum-vitae" : "",
};

module.exports = nextConfig;
