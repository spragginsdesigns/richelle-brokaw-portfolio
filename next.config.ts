import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Routes from the old site, kept alive so shared links still land somewhere.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/project", destination: "/#experience", permanent: true },
    ];
  },
};

export default nextConfig;
