"use client"

import { MoonIcon, SunIcon } from '@/nextra/icons'
import { Select } from '@/nextra/select'
import { useMounted } from '@/utils/hook/use-mount'
import cn from "clsx"
import { useTheme } from 'next-themes'
// import { MoonIcon, SunIcon } from 'nextra/icons'

export default function ThemeSwitch({ lite, className, ...props }) {
    const { setTheme, resolvedTheme } = useTheme()
    // const { setTheme, resolvedTheme, theme = '' } = useTheme()
    const mounted = useMounted()

    const isDark = resolvedTheme === 'dark'
    const toggleTheme = () => {
        console.log("isDark", isDark)
        console.log("result", isDark ? 'light' : 'dark')
        setTheme(isDark ? 'light' : 'dark')
    }
    const text = mounted && resolvedTheme === 'dark' ? "Dark" : "Light"
    // const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
    // const options = [
    //     { key: 'light', name: "Light" },
    //     { key: 'dark', name: "Dark" },
    //     { key: 'system', name: "System" }
    // ]
    return (
        <span
            role="button"
            aria-label="Toggle Dark Mode"
            className={cn("cursor-pointer p-2 text-current ", className)}
            tabIndex={0}
            onClick={toggleTheme}
            onKeyDown={e => {
                if (e.key === 'Enter') toggleTheme()
            }}
            {...props}
        >
            {mounted && isDark ? <MoonIcon /> : <SunIcon />}
            {
                text
            }
        </span>

        // <Select
        //     className={className}
        //     title="Change theme"
        //     options={[
        //         { key: 'light', name: "Light" },
        //         { key: 'dark', name: "Dark" },
        //         { key: 'system', name: "System" }
        //     ]}
        //     onChange={option => {
        //         setTheme(option.key)
        //     }}
        //     selected={{
        //         key: theme,
        //         name: (
        //             <div className="flex items-center gap-2 capitalize">
        //                 <IconToUse />
        //                 <span className={lite ? 'md:hidden' : ''}>
        //                     {mounted && resolvedTheme === 'dark' ? "Light" : "Dark"}
        //                 </span>
        //             </div>
        //         )
        //     }}
        // />
    )
}