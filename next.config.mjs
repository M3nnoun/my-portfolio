/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! this will let Next.js build even if there are TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
