import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tailwindui.com",
        protocol: "https",
      },
      {
        hostname: "www.leedenlimited.co.id",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
