import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  contentDirBasePath: '/docs'
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  distDir: "build",
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en'
  // }
})
