import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
            <div className="mx-auto flex max-w-[90rem] gap-2 py-2 px-4 ">
                <button title="Change language" className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50" id="headlessui-listbox-button-:Rit6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                    <span className="flex items-center gap-2">
                        <svg viewBox="2 2 16 16" width="12" height="12" fill="currentColor">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span className="">English</span>
                    </span>
                </button>
                <button title="Change theme" className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50" id="headlessui-listbox-button-:Rkt6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                    <div className="flex items-center gap-2 capitalize">
                        <svg fill="none" viewBox="2 2 20 20" width="12" height="12" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                            </path>
                        </svg>
                        <span className="">Dark</span>
                    </div>
                </button>
            </div>
            <hr className="dark:border-neutral-800" />
            <div className="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
                <a rel="noreferrer" target="blank" className="flex items-center gap-2 font-semibold" href="https://pithagon.com/?utmsource=swr">Powered by<svg height="40" viewBox="0 0 50 50" fill="none">
                    <path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9">
                    </path>
                    <path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA">
                    </path>
                    <path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4">
                    </path>
                </svg>
                </a>
            </div>
        </footer>
    )
}
