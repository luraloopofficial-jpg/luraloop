/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          400: '#FFA040',
          500: '#FF6B00',
          600: '#E65100',
        },
        dark: {
          DEFAULT: '#0B0B0B',
          100: '#111111',
          200: '#161616',
          300: '#1A1A1A',
          400: '#222222',
          500: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-orange': 'pulseOrange 2s ease-in-out infinite',
        'marquee': 'marqueeAnim 25s linear infinite',
      },
      keyframes: {
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 20px #FF6B0066, 0 0 60px #FF6B0033' },
          '50%': { boxShadow: '0 0 40px #FF6B00AA, 0 0 100px #FF6B0055' },
        },
        marqueeAnim: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
