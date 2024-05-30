import React from 'react'
import Github from './icons/github'
import Twitter from './icons/twitter'
import Navbar from './navbar'

export default function Header() {
    // console.log("go here")
    return (

        // <div className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
        //     <div className="nextra-nav-container-blur">
        //     </div>
        //     <nav className="mx-auto flex h-[var(--nextra-navbar-height)] max-w-[90rem] items-center justify-end gap-4 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <Navbar>
            <a className="flex items-center hovesr:opacity-75 ltr:mr-auto rtl:ml-auto" href="/">
                <svg height="40" viewBox="0 0 50 50" fill="none" className="h-10">
                    <path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9">
                    </path>
                    <path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA">
                    </path>
                    <path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4">
                    </path>
                </svg>
                <span className="max-md:hidden select-none font-extrabold ltr:ml-2 rtl:mr-2" title="MillionScope.github.io: Gesture Generation Research Community">MillionScope.github.io</span>
            </a>
            {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap font-medium subpixel-antialiased" aria-current="true" href="/docs/getting-started">Docs</a> */}
            {/* <div className="relative" data-headlessui-state="">
                <button className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 max-md:hidden items-center whitespace-nowrap rounded flex gap-1" id="headlessui-menu-button-:R5596:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">About<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] min-w-[18px] rounded-sm p-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" className="origin-center transition-transform rotate-90">
                    </path>
                </svg>
                </button>
            </div> */}
            {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" aria-current="false" href="/examples/basic">Examples</a> */}
            {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" aria-current="false" href="/blog">Blog</a> */}

            {/* <div className="nextra-search relative md:w-64 max-md:hidden">
                    <div className="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300 contrast-more:dark:text-gray-300">
                        <input spellcheck="false" className="w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-gray-50/10 focus:!bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 contrast-more:border contrast-more:border-current" type="search" placeholder="Search documentation…" value="" />
                        <kbd className="absolute my-1.5 select-none ltr:right-1.5 rtl:left-1.5 h-5 rounded bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500 border dark:border-gray-100/20 dark:bg-black/50 contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 transition-opacity flex pointer-events-none max-sm:hidden">
                            <span className="text-xs">⌘</span>K</kbd>
                    </div>
                </div> */}
            <a href="https://MillionScope.github.io/" target="blank" rel="blank" className=" contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" aria-current="false">MillionScope ↗</a>
            <a href="https://github.com/MillionScope" target="blank" rel="noreferrer">
                <Github />
                <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/MillionScopeai" target="blank" rel="noreferrer">
                <Twitter />
            </a>
        </Navbar>
        //     </nav>
        // </div>
    )
}
