/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongodb"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing-prod.s3.us-west-2.amazonaws.com",
      },
    ],
    domains: [
      "uploadthing-prod.s3.us-west-2.amazonaws.com",
      "utfs.io",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
