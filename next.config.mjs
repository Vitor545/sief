/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'i.ibb.co',
          },
          {
            hostname: 'media.istockphoto.com',
          },
          {
            hostname: 's1.static.brasilescola.uol.com.br',
          }, 
          {
            hostname: 's4.static.brasilescola.uol.com.br',
          }
        ],
      },
};

export default nextConfig;
