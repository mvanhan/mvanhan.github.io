/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/mvanhan.github.io/' : '',
  basePath: isProd ? '/mvanhan.github.io' : '',
};

// const nextConfig = {
//     output: 'export',
//     // assetPrefix: '/mvanhan.github.io',
//     // basePath: '/mvanhan.github.io',
// };

// module.exports = nextConfig;