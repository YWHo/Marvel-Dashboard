/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Allowing https
        hostname: 'i.annihil.us',
        pathname: '/**', // Match all paths under the domain
      },
      {
        protocol: 'http', // Allowing http
        hostname: 'i.annihil.us',
        pathname: '/**', // Match all paths under the domain
      },
    ],
  },
};

export default nextConfig;
