/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
    return config;
  },
};

export default nextConfig;
