/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // https://nextjs.org/docs/advanced-features/compiler#styled-components
    styledComponents: true,
  },
};

module.exports = nextConfig;
