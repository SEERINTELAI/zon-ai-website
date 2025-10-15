/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zon-navy': '#010214',
        'zon-orange': '#FF6826',
        'zon-red': '#CB2F19',
        'zon-peach': '#FFC06B',
        'zon-tan': '#EFE6D4',
        'zon-white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Neue Haas Grotesk', 'ZON-Fallback', 'Helvetica Neue', 'Helvetica', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'zon-primary': ['Neue Haas Grotesk', 'ZON-Fallback', 'sans-serif'],
        'zon-secondary': ['Neue Haas Grotesk', 'ZON-Fallback', 'sans-serif'],
        'zon-tertiary': ['Neue Haas Grotesk', 'ZON-Fallback', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'roman': '400',
        'bold': '700',
      },
    },
  },
  plugins: [],
}