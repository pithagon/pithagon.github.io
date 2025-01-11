import 'nextra-theme-docs/style.css'
import { Footer, Layout, Navbar, LocaleSwitch } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from "nextra/page-map"
import "../styles.css"
import "../globals.css"
import "katex/dist/katex.min.css"
import Twitter from '@/components/icons/twitter'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://pithagon.com'),
  title: {
    template: '%s - Pithagon'
  },
  description: 'Pithagon',
  applicationName: 'Pithagon',
  generator: 'Pithagon',
  appleWebApp: {
    title: 'Pithagon'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://twitter.com/pithagon'
  }
}

const TITLE = {
  en: 'Wonderful science in your hand',
  es: 'Mirinda scienco en via mano',
  ru: 'Чудесная наука в твоих руках'
}

export const PithagonLogo = (props) => (
  <svg height="40" viewBox="0 0 50 50" fill="currentColor" {...props}>
    <path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9"></path>
    <path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA"></path>
    <path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4"></path>
  </svg>
)


const FooterLogo = () => (
  <svg height="40" viewBox="0 0 50 50" fill="none" ><path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9"></path><path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA"></path><path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4"></path></svg>
)


export default async function RootLayout({ children }) {
  // const config = useConfig()
  // const { locale } = useRouter()
  // config.frontMatter.image ||
  const image = 'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'

  const footer = (<Footer>
    <LocaleSwitch />
    <div className="flex items-center justify-center space-x-4">
      <a
        rel="noreferrer"
        target="_blank"
        className="flex items-center gap-2 font-semibold custom-class"
        href={"https://pithagon.com/about"}
      >
        Powered by
        <FooterLogo />
      </a>
    </div>
  </Footer>)

  const navbar = (
    <Navbar
      // projectIcon={<SWRLogo className="h-10" />}
      projectLink={"https://github.com/pithagon/pithagon.github.io"}
      logo={
        <>
          <PithagonLogo className="h-10" />
          <span
            className="max-md:hidden select-none font-extrabold ltr:ml-2 rtl:mr-2"
            title={`Pithagon: ${TITLE["en"] || ''}`}
          >
            Pithagon
          </span>
        </>
      }
      // Next.js discord server
      chatIcon={<Twitter />}
      chatLink="https://discord.gg/hEM84NMkRv"
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
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pithagon" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Pithagon" />
      </Head>
      <body>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/pithagon/pithagon.github.io"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true, toggleButton: true }}
          toc={{
            float: true
          }}
          // i18n={[
          //   { locale: "en", name: "English" },
          //   { locale: "es", "name": "Español" }
          // ]}
          darkMode={true}
          // nextThemes={['nextra-theme-docs']}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}