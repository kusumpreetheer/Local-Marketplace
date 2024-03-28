/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'utfs.io',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
          pathname: '**',
        }
      ],
    },
  };
  
  export default nextConfig;
  