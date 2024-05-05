import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#299D91',
                'main-bg': '#F4F5F7',
                secondary: '#9F9F9F',
                'secondary-dark': '#4A4A4A',
                'secondary-2': '#878787',
                'secondary-10': 'rgba(255, 255, 255, 0.1)',
                'secondary-70': 'rgba(255, 255, 255, 0.7)',
                'border-light': '#E8E8E8',
                'border-normal': '#D1D1D1',
            },
        },
    },
    plugins: [],
};
export default config;
