const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx,md,mdx}',
        './content/**/*.{md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',
        "./mdx-components.jsx"
    ],
    theme: {
        extend: {}
    },
    plugins: []
}