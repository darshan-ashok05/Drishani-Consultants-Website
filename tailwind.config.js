/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe4f0',
          200: '#b6c9e0',
          300: '#8aa6cc',
          400: '#5a7db3',
          500: '#3a5d96',
          600: '#2b4a7d',
          700: '#1f3860',
          800: '#152a4a',
          900: '#0e1d35',
          950: '#081120',
        },
        gold: {
          50: '#fbf7ec',
          100: '#f5ecd0',
          200: '#ebd79e',
          300: '#e0c06b',
          400: '#d4a93f',
          500: '#c2932a',
          600: '#a67822',
          700: '#835c1e',
          800: '#6b4a1e',
          900: '#5a3e1d',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf7f1',
          200: '#f4ede0',
          300: '#ece0cc',
        },
        charcoal: {
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1f1f1f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 60px -20px rgba(14, 29, 53, 0.25)',
        'luxe-sm': '0 10px 30px -12px rgba(14, 29, 53, 0.18)',
        gold: '0 8px 24px -8px rgba(194, 147, 42, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.9s ease-out forwards',
        'float-soft': 'float-soft 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
