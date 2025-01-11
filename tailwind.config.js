const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx,md,mdx}',
        './content/**/*.{md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',
        "./mdx-components.jsx",
        "./app/layout.jsx"
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        letterSpacing: {
            tight: '-0.015em'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            gray: colors.gray,
            violet: colors.violet,
            slate: colors.slate,
            neutral: colors.neutral,
            red: colors.red,
            green: colors.green,
            orange: colors.orange,
            blue: colors.blue,
            yellow: colors.yellow,
        },
        extend: {
            colors: {
                dark: '#111'
            }
        }
    },
    darkMode: 'class',
    plugins: []
}