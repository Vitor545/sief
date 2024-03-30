/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'i.ibb.co',
          },
          {
            hostname: 'media.istockphoto.com',
          }
        ],
      },
};

export default nextConfig;
