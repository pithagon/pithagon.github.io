import { Footer, Layout, Navbar, LocaleSwitch } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from "nextra/page-map"
import "./styles.css"
import "./globals.css"
// import "katex/dist/katex.min.css"
import { Pithagon, Twitter } from '@/components/icons'

export const { viewport } = Head
// https://pithagon.com
export const metadata = {
  metadataBase: new URL('http://pithagon.com'),
  applicationName: 'Pithagon',
  generator: 'Pithagon',
  appleWebApp: {
    title: 'Pithagon'
  },
  other: {
    'msapplication-TileImage': '/favicon/mstile-150x150.png',
    'msapplication-TileColor': '#fff'
  },
  title: {
    template: '%s - Pithagon'
  },
  description: 'Pithagon',
  openGraph: {
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pithagon',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}

const TITLE = {
  en: 'Wonderful science in your hand',
  es: 'Mirinda scienco en via mano',
  ru: 'Чудесная наука в твоих руках'
}




export default async function RootLayout({ children }) {
  // const config = useConfig()
  // const { locale } = useRouter()
  // config.frontMatter.image ||
  const image = 'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'

  const footer = (
    <Footer className="x:flex-col x:items-start">
      <a
        className="x:focus-visible:nextra-focus x:flex x:items-center x:gap-1"
        target="_blank"
        rel="noreferrer"
        title="pithagon.com homepage"
        href="https://pithagon.com/about"
      >
        Powered by
        <Pithagon />
      </a>
      <p className="x:mt-2 x:text-xs">
        © {new Date().getFullYear()} MillionScope Inc.
      </p>
    </Footer>
  )


  const navbar = (
    <Navbar
      // projectIcon={<SWRLogo className="h-10" />}
      projectLink={"https://github.com/pithagon/pithagon.github.io"}
      logo={
        <>
          <Pithagon className="x:h-10" />
          <span
            className="x:max-md:hidden x:select-none x:font-extrabold x:ltr:ml-2 x:rtl:mr-2"
            title={`Pithagon: ${TITLE["en"] || ''}`}
          >
            Pithagon
          </span>
        </>
      }
      // Next.js discord server
      chatIcon={<Twitter />}
      chatLink="https://x.com/pithagon"
    />
  )
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta property="og:image" content="https://right-shift-pm2c6zqyo-artginzburg.vercel.app/opengraph-image.png?121e2b7355255853"></meta>
        {/* <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pithagon" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Pithagon" /> */}
      </Head>
      <body>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/pithagon/pithagon.github.io/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true, toggleButton: true }}
          toc={{
            float: true
          }}
          // i18n={[
          //   { locale: "en", name: "English" },
          //   { locale: "es", "name": "Español" }
          // ]}
          darkMode={true}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}