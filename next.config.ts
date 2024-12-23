const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.100.6:8080/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
