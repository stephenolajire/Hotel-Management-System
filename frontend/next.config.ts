import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images/**",
      },
    ],
    // Alternative: If you want to allow all Google Images domains
    // domains: ['encrypted-tbn0.gstatic.com'],
  },
};

export default nextConfig;
