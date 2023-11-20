/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/setting',
        destination: '/setting/profile',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
