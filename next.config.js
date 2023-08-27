/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongodb"],
  },
  images: {
    domains: [
      "uploadthing-prod.s3.us-west-2.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
