/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  // Add basePath (disabled on Vercel)
  basePath:
    process.env.NODE_ENV === "production" && !process.env.VERCEL
      ? "/curriculum-vitae"
      : "",
};

module.exports = nextConfig;
