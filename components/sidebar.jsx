import React from 'react'

export default function Sidebar() {
    return (
        <aside className="nextra-sidebar-container flex flex-col md:top-16 md:shrink-0 motion-reduce:transform-none transform-gpu transition-all ease-in-out print:hidden md:w-64 md:sticky md:self-start max-md:[transform:translate3d(0,-100%,0)]">
            <div className="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar">
                <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
                    <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100">
                        <ul className="flex flex-col gap-1 nextra-menu-desktop max-md:hidden">

                            <li className="flex flex-col gap-1 active">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600 contrast-more:border-primary-500 contrast-more:dark:border-primary-500" href="/docs/getting-started">
                                    <i>Getting</i>&nbsp;<s>Started</s>
                                </a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/options">Options</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/global-configuration">Global Configuration</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/data-fetching">Data Fetching</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/revalidation">Auto Revalidation</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/conditional-fetching">Conditional Data Fetching</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/arguments">Arguments</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/mutation">Mutation</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/pagination">Pagination</a>
                            </li>
                            <li className="[word-break:break-word] mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100">
                                <div className="flex items-center gap-2">
                                    Advanced</div>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/prefetching">Prefetching</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/with-nextjs">Next.js SSG and SSR</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/typescript">TypeScript :)</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/suspense">Suspense</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/middleware">Middleware</a>
                            </li>
                            <li className="">
                                <a className="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced">Advanced<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" className="origin-center transition-transform rtl:-rotate-180">
                                    </path>
                                </svg>
                                </a>
                                <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style={{ height: "0px" }}>
                                    <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                        <ul className="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[&quot;&quot;] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                            <li className="[word-break:break-word] mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="h-9 shrink-0">
                                                        <g clipPath="url(#clip0510)">
                                                            <path d="M17.7721 13.4267C17.8044 13.006 17.8169 12.5565 17.8515 12.1305H15.6025C15.5151 12.8866 15.4423 13.5968 15.349 14.3043C15.1736 15.6345 14.9965 16.9646 14.8014 18.2919C14.553 19.9811 14.0293 21.5924 13.242 23.1C12.7067 24.1249 12.0698 25.0993 11.4408 26.072C10.9022 26.905 10.2505 27.6707 10.0197 28.6698C9.85476 29.3843 9.97186 30.042 10.4384 30.6186C10.8666 31.1479 11.4378 31.3961 12.101 31.5297C13.2471 31.7606 14.6194 31.2169 15.2051 30.0834C15.9306 28.6794 16.226 27.1556 16.5117 25.6314C16.7187 24.5274 16.8447 23.4079 16.9938 22.2936C17.1075 21.4437 17.2148 20.5924 17.2987 19.7392C17.3718 18.9965 17.4055 18.2499 17.4612 17.5054C17.5569 16.2259 17.6552 14.9466 17.7536 13.6673L17.7721 13.4267Z" className="fill-current">
                                                            </path>
                                                            <path d="M26.0248 26.1346C25.6413 24.6084 25.6006 23.064 25.7283 21.5014L26.2966 12.1305H22.9688L21.8946 24.357C21.8479 25.0245 21.772 25.6919 21.7679 26.3597C21.7651 26.8149 21.8375 27.2733 21.9089 27.7259L21.9162 27.7719C22.1095 28.998 22.6394 30.0387 23.69 30.7493C24.8139 31.5095 26.058 31.6979 27.3929 31.5172C28.8329 31.3224 29.8687 30.5558 30.6403 29.3733C31.2704 28.4078 31.5811 27.318 31.8215 26.2084C31.9253 25.7292 31.9571 25.2344 32.0225 24.7406H31.0768C30.9933 25.55 30.7568 26.2899 30.2401 26.8729C29.5026 27.705 28.5445 27.8456 27.5026 27.5369C26.7714 27.3202 26.2208 26.9144 26.0248 26.1346Z" className="fill-current">
                                                            </path>
                                                            <path d="M11.5393 12.6005C12.8201 11.9241 14.2025 12.1848 15.6026 12.1305L31.9626 12.1305V8.46234H31.5091C28.619 8.46234 25.7286 8.43472 22.8389 8.46986C19.7509 8.50741 16.6582 8.29879 13.5751 8.61989C12.5708 8.72449 11.6617 9.06084 10.9365 9.79236C9.65511 11.0848 8.87926 12.6692 8.31868 14.3743C8.19394 14.7538 8.08608 15.1387 7.96875 15.5268C8.55988 15.6411 9.02347 15.6278 9.23815 15.0127C9.29106 14.8612 9.40664 14.7288 9.50503 14.5962C10.078 13.8242 10.6637 13.0628 11.5393 12.6005Z" className="fill-current">
                                                            </path>
                                                        </g>
                                                    </svg>Do Not Use</div>
                                            </li>
                                            <li className="">
                                                <button className="items-center justify-between gap-2 text-left w-full flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">More: A Super Super Super Super Long Directory<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" className="origin-center transition-transform rtl:-rotate-180">
                                                    </path>
                                                </svg>
                                                </button>
                                                <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style={{ height: "0px" }}>
                                                    <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                                        <ul className="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[&quot;&quot;] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                                            <li className="flex flex-col gap-1">
                                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/more/loooooooooooooooooooong-title">Loooooooooooooooooooong Title</a>
                                                            </li>
                                                            <li className="">
                                                                <button className="items-center justify-between gap-2 text-left w-full flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">tree<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" className="origin-center transition-transform rtl:-rotate-180">
                                                                    </path>
                                                                </svg>
                                                                </button>
                                                                <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style={{ height: "0px" }}>
                                                                    <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                                                        <ul className="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[&quot;&quot;] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                                                            <li className="flex flex-col gap-1">
                                                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/more/tree/one">One</a>
                                                                            </li>
                                                                            <li className="flex flex-col gap-1">
                                                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/more/tree/three">Three</a>
                                                                            </li>
                                                                            <li className="flex flex-col gap-1">
                                                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/more/tree/two">Two</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/file-name.with.DOTS">Filenames with Dots</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/cache">Cache</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/code-highlighting">Code Highlighting</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/dynamic-markdown-import">Dynamic Markdown Import</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/images">Images</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/markdown-import">Markdown Import</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/performance">Performance</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/react-native">React Native</a>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/advanced/scrollbar-x">Scrollbar X</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/change-log">Change Log</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a href="https://github.com/shuding/nextra" target="blank" rel="noreferrer" className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">GitHub 🐙 →</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/wrap-toc-items">Wrap Table of Content Items</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/custom-header-ids">Custom Header IDs</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/404-500">404/500 Custom Error Pages</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/raw-layout">Raw Layout</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/callout">Callout</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/code-block-without-language">Code Block without Language</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/understanding">Understanding</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/foo">Foo</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/test">Test</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <a className="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/virtual-page">Virtual Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nextra-sidebar-footer sticky bottom-0 flex items-center gap-2 mx-4 py-4 justify-end" data-toggle-animation="off">
                <button title="Change language" className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 grow" id="headlessui-listbox-button-:Rjsr6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                    <span className="flex items-center gap-2">
                        <svg viewBox="2 2 16 16" width="12" height="12" fill="currentColor">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span className="">English</span>
                    </span>
                </button>
                <div className="">
                    <button title="Change theme" className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50" id="headlessui-listbox-button-:Rlsr6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                        <div className="flex items-center gap-2 capitalize">
                            <svg fill="none" viewBox="2 2 20 20" width="12" height="12" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                </path>
                            </svg>
                            <span className="md:hidden">Dark</span>
                        </div>
                    </button>
                </div>
                <button title="Hide sidebar" className="max-md:hidden h-7 rounded-md transition-colors text-gray-600 dark:text-gray-400 px-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50">
                    <svg height="12" width="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z" className="">
                        </path>
                        <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z">
                        </path>
                    </svg>
                </button>
            </div>
        </aside>
    )
}
