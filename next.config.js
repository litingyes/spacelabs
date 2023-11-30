/** @type {import('next').NextConfig} */
export default {
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/app/color',
        permanent: true,
      },
      {
        source: '/app/color',
        destination: '/app/color/theme',
        permanent: true,
      },
      {
        source: '/app/color/theme',
        destination: '/app/color/theme/play',
        permanent: true,
      },
      {
        source: '/setting',
        destination: '/setting/system',
        permanent: true,
      },
    ]
  },
}
