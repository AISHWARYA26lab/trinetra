/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: 'var(--card)',
                'card-foreground': 'var(--card-foreground)',
                border: 'var(--border)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                cyber: {
                    dark: '#050a14',
                    code: '#0a101f',
                    blue: '#00f3ff',
                    green: '#0aff00',
                    red: '#ff0055',
                    text: '#e0e6ed',
                    muted: '#94a3b8',
                }
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'], // Suggesting a tech font
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'grid-pattern': "var(--grid-pattern)",
            },
            animation: {
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}
