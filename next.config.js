/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com"],
        remotePatterns: [
          {
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
