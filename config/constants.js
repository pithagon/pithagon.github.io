export const DEFAULTTHEME = {
    // backgroundColor: {
    //     dark: '17,17,17',
    //     light: '250,250,250'
    // },
    // banner: {
    //     dismissible: true,
    //     key: 'nextra-banner'
    // },
    // chat: {
    //     icon: (
    //         <>
    //             <DiscordIcon />
    //             <span className="sr-only">Discord</span>
    //         </>
    //     )
    // },
    // color: {
    //     hue: {
    //         dark: 204,
    //         light: 212
    //     },
    //     saturation: 100
    // },
    darkMode: true,
    direction: 'ltr',
    // docsRepositoryBase: 'https://github.com/MillionScope.github.io/MillionScope.github.io',
    // editLink: {
    //     component: function EditLink({ className, filePath, children }) {
    //         const editUrl = useGitEditUrl(filePath)
    //         if (!editUrl) {
    //             return null
    //         }
    //         return (
    //             <Anchor className={className} href={editUrl}>
    //                 {children}
    //             </Anchor>
    //         )
    //     },
    //     content: 'Edit this page'
    // },
    // feedback: {
    //     content: 'Question? Give us feedback →',
    //     labels: 'feedback',
    //     useLink() {
    //         const config = useConfig()
    //         const themeConfig = useThemeConfig()
    //         return getGitIssueUrl({
    //             labels: themeConfig.feedback.labels,
    //             repository: themeConfig.docsRepositoryBase,
    //             title: `Feedback for “${config.title}”`
    //         })
    //     }
    // },
    // footer: {
    //     component: Footer,
    //     content: `MIT ${new Date().getFullYear()} © Nextra.`
    // },
    // gitTimestamp: function GitTimestamp({ timestamp }) {
    //     const { locale = DEFAULTLOCALE } = useRouter()
    //     return (
    //         <>
    //             Last updated on{' '}
    //             <time dateTime={timestamp.toISOString()}>
    //                 {timestamp.toLocaleDateString(locale, {
    //                     day: 'numeric',
    //                     month: 'long',
    //                     year: 'numeric'
    //                 })}
    //             </time>
    //         </>
    //     )
    // },
    // head: function useHead() {
    //     const { frontMatter, title: pageTitle } = useConfig()

    //     const title = `${pageTitle} – Nextra`
    //     const { description, canonical, image } = frontMatter
    //     return (
    //         <>
    //             <title>{title}</title>
    //             <meta property="og:title" content={title} />
    //             {description && (
    //                 <>
    //                     <meta name="description" content={description} />
    //                     <meta property="og:description" content={description} />
    //                 </>
    //             )}
    //             {canonical && <link rel="canonical" href={canonical} />}
    //             {image && <meta name="og:image" content={image} />}
    //         </>
    //     )
    // },
    // i18n: [],
    // logo: (
    //     <>
    //         <span className="font-extrabold">Nextra</span>
    //         <span className="ml-2 max-md:hidden font-normal text-gray-600">
    //             The Next Docs Builder
    //         </span>
    //     </>
    // ),
    // logoLink: true,
    // navbar: {
    //     component: Navbar
    // },
    // navigation: true,
    // nextThemes: {
    //     defaultTheme: 'system',
    //     storageKey: 'theme'
    // },
    // notFound: {
    //     content: 'Submit an issue about broken link →',
    //     labels: 'bug'
    // },
    // project: {
    //     icon: (
    //         <>
    //             <GitHubIcon />
    //             <span className="sr-only">GitHub</span>
    //         </>
    //     )
    // },
    // search: {
    //     component: Flexsearch,
    //     emptyResult: (
    //         <span className="block select-none p-8 text-center text-sm text-gray-400">
    //             No results found.
    //         </span>
    //     ),
    //     error: 'Failed to load search index.',
    //     loading: function useLoading() {
    //         const { locale, defaultLocale = DEFAULTLOCALE } = useRouter()
    //         const text =
    //             (locale && LOADINGLOCALES[locale]) || LOADINGLOCALES[defaultLocale]
    //         return <>{text}…</>
    //     },
    //     placeholder: function usePlaceholder() {
    //         const { locale, defaultLocale = DEFAULTLOCALE } = useRouter()
    //         const text =
    //             (locale && PLACEHOLDERLOCALES[locale]) ||
    //             PLACEHOLDERLOCALES[defaultLocale]
    //         return `${text}…`
    //     }
    // },
    // sidebar: {
    //     defaultMenuCollapseLevel: 2,
    //     toggleButton: true
    // },
    // themeSwitch: {
    //     component: ThemeSwitch,
    //     useOptions() {
    //         const { locale } = useRouter()

    //         if (locale === 'zh-CN') {
    //             return { dark: '深色主题', light: '浅色主题', system: '系统默认' }
    //         }
    //         return { dark: 'Dark', light: 'Light', system: 'System' }
    //     }
    // },
    // toc: {
    //     backToTop: true,
    //     component: TOC,
    //     float: true,
    //     title: 'On This Page'
    // }
}