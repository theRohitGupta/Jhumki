/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.picpil.com',
          port: ''
        },
      ],
    },
  };
  
  export default nextConfig;