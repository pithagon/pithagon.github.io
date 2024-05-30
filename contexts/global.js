"use client"

import { createContext, useContext, useRef } from 'react'
import { DEFAULT_THEME } from '@/config/constants'

const ThemeConfigContext = createContext(DEFAULT_THEME)
ThemeConfigContext.displayName = 'ThemeConfig'
export const useThemeConfig = () => useContext(ThemeConfigContext)

export function ThemeConfigProvider({
    value,
    children
}) {
    const storeRef = useRef()
    storeRef.current ||= {
        ...DEFAULT_THEME,
        ...(value &&
            Object.fromEntries(
                Object.entries(value).map(([key, value]) => [
                    key,
                    value && typeof value === 'object' && DEEP_OBJECT_KEYS.includes(key)
                        ?
                        { ...DEFAULT_THEME[key], ...value }
                        : value
                ])
            ))
    }

    return (
        <ThemeConfigContext.Provider value={storeRef.current}>
            {children}
        </ThemeConfigContext.Provider>
    )
}
