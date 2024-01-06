/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/curriculum-vitae" : "",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
