/** @type {import('next').NextConfig} */
export default {
  async redirects() {
    return [
      {
        source: '/setting',
        destination: '/setting/system',
        permanent: true,
      },
    ]
  },
}
